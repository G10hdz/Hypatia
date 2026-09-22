# SPEC: Migración de SM-2 lite a FSRS en Flashcards

Fecha: 2026-09-22
Estado: aprobado 2026-09-22 — implementación en curso
Módulo afectado: `Flashcards/index.html` (standalone, vanilla JS, localStorage)

## 1. Resultado para el usuario

Al estudiar un deck, cada tarjeta se programa con un modelo de memoria real
(estabilidad, dificultad, probabilidad de recuerdo) en lugar del factor de
facilidad escalar de SM-2. El usuario percibe:

- Intervalos que se adaptan a qué tan bien recuerda cada tarjeta, no solo a
  cuántas veces la vio.
- "Otra vez" re-encola la tarjeta dentro de la misma sesión (hoy esto no ocurre:
  el código actual pone `due = +1 min` pero no reconstruye la cola).
- Vista previa del intervalo en cada botón de calificación, calculada con el
  modelo real.
- Recompensas de sesión (XP, racha diaria, resumen al terminar) que refuerzan el
  hábito de repasar a diario.

## 2. Alcance

Dentro:

- Reemplazar el núcleo de scheduling en `grade()` y `buildOrder()` por FSRS.
- Mantener intacta la UI de volteo (flip), navegación, atajos de teclado,
  barra de decks y formato de decks (`decks/*.js` con `{front, back}`).
- Estados de tarjeta: `new → learning → review → relearning`, con pasos
  cortos intra-sesión gestionados por la app (FSRS solo cubre scheduling de
  largo plazo; en Anki los pasos de aprendizaje son opción del deck).
- Capa de gamificación de sesión inspirada en carden: XP por calificación,
  racha diaria, resumen de sesión.
- Migración automática de `hypatia-flashcards.srs.v1` a `v2`.
- Parámetros del algoritmo (`w`, retención deseada, intervalo máximo, pasos de
  aprendizaje) como configuración, no constantes sagradas.

Fuera (non-goals):

- Sin sincronización con Anki ni importación/exportación de decks (.apkg,
  CSV, Quizlet).
- Sin backend ni cuentas; todo sigue en localStorage.
- Sin optimizador de `w` on-device (entrenar pesos con historial queda para
  otra iteración, si acaso).
- Sin cambios visuales al flip ni al layout de tarjeta.
- Sin notificaciones ni recordatorios.

## 3. Inventario de evidencia

| ID | Fuente | Qué aporta |
|----|--------|------------|
| EV-0 | `Flashcards/index.html` (actual) | Baseline: `STORE_KEY='hypatia-flashcards.srs.v1'`, estado `{ef, ivl, due, reps}` por `(deckId, cardIdx)`; `grade(q)` con q∈0..3; orden de sesión due→new→future; "dominada" = `ivl ≥ 7d`; preview de intervalo en botones (líneas 90-194). |
| EV-1 | `open-spaced-repetition/fsrs4anki`, `fsrs4anki_scheduler.js` v6.1.1 (commit `ff7c85c`) | Modelo de memoria (D, S, R), máquina de estados, fórmulas de actualización, ordenamiento de intervalos hard≤good<easy, fuzz ±5%, `convert_states` (puente SM-2→FSRS), defaults `w[0..20]`, `requestRetention=0.9`, `maximumInterval=36500`. |
| EV-2 | `Human-Centric-Machine-Learning/memorize` (PNAS 2019, Tabibian et al.) | Justificación: scheduling óptimo basado en probabilidad de recuerdo estimada (modelo HLR + control estocástico) supera a reglas fijas; base teórica de por qué un modelo de memoria (FSRS) gana a SM-2. Seguimiento RCT: npj Science of Learning 2021. |
| EV-3 | `alyssaxuu/carden`, `chrome-extension/js/overlay.js` + `background.js` (commit `b6db96c`) | Gamificación: `puntos += quality*15 + 50` por repaso; mapa (intención × acierto) → quality∈{0,1,2,4,5}; toast "+N" ~2 s; racha diaria persistida; 21 niveles con umbrales 1000..100000 y anillo de progreso; resumen de sesión con correct/incorrect/forgotten/points. Carden NO tiene multiplicador de combo (ver §7 y §9). |

## 4. Modelo de memoria FSRS (contrato, sin stack)

Cada tarjeta tiene tres variables de memoria:

- `S` (stability): días para que la probabilidad de recuerdo caiga de 100% a 90%.
  `S > 0`.
- `D` (difficulty): dificultad intrínseca de la tarjeta, escala `[1, 10]`.
- `R` (retrievability): probabilidad de recuerdo hoy, función del tiempo
  transcurrido. No se persiste; se calcula al repasar.

Calificaciones (grados): `AGAIN=1, HARD=2, GOOD=3, EASY=4`. La UI actual usa
q∈0..3 (otra vez/difícil/bien/fácil); el mapeo es `grado = q + 1`.

### 4.1 Relaciones fundamentales (EV-1, contrato entrada→salida)

Sea `w` un vector de parámetros ajustables y `t` los días desde el último repaso:

```
R(t, S)        = (1 + FACTOR · t / S) ^ DECAY                    # curva de olvido
ivl_objetivo(S)= S / FACTOR · (retencion^(1/DECAY) − 1)          # invierte R
ivl_final      = clamp(round(fuzz(ivl_objetivo)), 1, ivl_max)
```

con `DECAY = −w[20]` y `FACTOR = 0.9^(1/DECAY) − 1` (constante derivada: R=0.9
cuando `t = S`). En FSRS-5 (19 parámetros, `w[0..18]`) el decay es fijo
(`DECAY ≈ −0.5`, `FACTOR ≈ 19/81`); en FSRS-6 (`w[0..20]`) es aprendible.
Decidir la variante es un supuesto a aprobar (§9).

### 4.2 Inicialización (primera calificación de una tarjeta nueva)

```
S0(g) = max(w[g−1], S_min)                                     # w0..w3
D0(g) = clamp(w[4] − e^(w[5]·(g−1)) + 1, 1, 10)
```

Contrato: la primera calificación fija S y D iniciales; `AGAIN`/`HARD` no
graduan la tarjeta a `review` (sigue en `learning`); `GOOD`/`EASY` sí.

### 4.3 Actualización de dificultad (aplica en learning y review)

```
ΔD(g)   = −w[6] · (g − 3)
D'      = clamp( revMedia( D + ΔD·(10 − D)/9 ), 1, 10 )
revMedia(x) = w[7]·D0(EASY) + (1 − w[7])·x                     # reversión a la media
```

Propiedades del contrato: `EASY` baja D, `AGAIN` la sube; el amortiguador
`(10−D)/9` hace que D converja sin overshoot; la reversión a la media tira de
D hacia `D0(EASY)` con peso `w[7]`.

### 4.4 Actualización de estabilidad

Repaso con acierto (`g ∈ {HARD, GOOD, EASY}`, estado `review`):

```
S'(D,S,R,g) = S · (1 + e^w[8] · (11−D) · S^(−w[9])
                   · (e^((1−R)·w[10]) − 1)
                   · (g=HARD ? w[15] : 1)                      # penalización hard
                   · (g=EASY ? w[16] : 1))                     # bonus easy
```

Olvido (`g = AGAIN`, estado `review`, tarjeta entra a `relearning`):

```
S'_olvido(D,S,R) = min( w[11] · D^(−w[12]) · ((S+1)^w[13] − 1)
                          · e^((1−R)·w[14]),
                        S / e^(w[17]·w[18]) )                  # cota: no crece tras olvido
```

Pasos cortos (`learning`/`relearning`, cualquier grado, mismo día):

```
S'_corto(S,g) = S · e^(w[17]·(g − 3 + w[18])) · S^(−w[19])
si g ≥ GOOD: factor ≥ 1                                        # good/easy nunca bajan S intra-día
```

### 4.5 Tablas de verdad (estado, grado) → resultado

Estados: `new`, `learning`, `review`, `relearning`.

| Estado | Grado | S' | D' | Próximo estado | Cuándo vuelve |
|--------|-------|----|----|----------------|----------------|
| new | AGAIN | S0(AGAIN) | D0(AGAIN) | learning | paso[0] (p.ej. 1 min) |
| new | HARD | S0(HARD) | D0(HARD) | learning | paso[0] |
| new | GOOD | S0(GOOD) | D0(GOOD) | learning→review* | paso[1] o gradua si es último paso |
| new | EASY | S0(EASY) | D0(EASY) | review | ivl(S0(EASY)) días |
| learning | AGAIN | S_corto(S,1) | D'(D,1) | learning (reinicia pasos) | paso[0] |
| learning | HARD | S_corto(S,2) | D'(D,2) | learning (repite paso) | paso actual |
| learning | GOOD | S_corto(S,3) | D'(D,3) | avanza paso; si era último → review | próximo paso o ivl(S') |
| learning | EASY | S_corto(S,4) | D'(D,4) | review | ivl(S') |
| review | AGAIN | S'_olvido | D'(D,1) | relearning; `lapses++` | paso_relearning[0] |
| review | HARD | S'_recall(…,HARD) | D'(D,2) | review | ivl(S') |
| review | GOOD | S'_recall(…,GOOD) | D'(D,3) | review | ivl(S') |
| review | EASY | S'_recall(…,EASY) | D'(D,4) | review | ivl(S') |
| relearning | * | igual que learning | igual que learning | review al completar pasos | según paso |

\* Con un solo paso de aprendizaje configurado, GOOD en `new` gradua directo a
`review`. El número de pasos es configuración (default propuesto `[1min, 10min]`,
relearning `[10min]`, al estilo Anki; EV-1 delega esto a opciones del deck).

### 4.6 Invariantes post-actualización (EV-1)

- Orden de intervalos en preview: `ivl(HARD) ≤ ivl(GOOD)`, `ivl(GOOD) ≥ ivl(HARD)+1`,
  `ivl(EASY) ≥ ivl(GOOD)+1`. Se fuerza con clamps tras calcular, no con la fórmula.
- Fuzz opcional ±5% para `ivl ≥ 2.5` días (evita que tarjetas hermanas se
  amontonen el mismo día); nunca devuelve `ivl` menor al ya programado en review.
- `due` se guarda como timestamp absoluto (ms), igual que hoy.

### 4.7 Parámetros por defecto (TUNABLES, no sagrados)

Observados en EV-1 v6.1.1 (21 pesos). Se listan como punto de partida; deben
vivir en config editable:

```
w = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001,
     1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014,
     1.8729, 0.5425, 0.0912, 0.0658, 0.1542]
retencion_deseada = 0.9        # rango recomendado 0.75–0.95
ivl_max = 36500 días
pasos_learning = [1 min, 10 min]
pasos_relearning = [10 min]
fuzz = activado
```

Roles: `w0..w3` S inicial por grado; `w4,w5` D inicial; `w6` sensibilidad de D
al grado; `w7` reversión a la media; `w8..w10` ganancia de S al recordar;
`w11..w14` S post-olvido; `w15,w16` penalización/bonus de hard/easy;
`w17..w19` estabilidad de corto plazo; `w20` decay de la curva de olvido
(solo FSRS-6).

## 5. Máquina de estados y cola de sesión

```
new ──GOOD/EASY──▶ learning ──completa pasos──▶ review
new ──AGAIN/HARD─▶ learning                      │
learning ─AGAIN──▶ learning (reinicia)     AGAIN │ (lapse)
review ──AGAIN───▶ relearning ──completa──▶ review
```

Orden de sesión propuesto (extiende EV-0):

1. `review`/`relearning` vencidas, ordenadas por `due` ascendente.
2. `learning` con paso vencido (incluye re-encolados por AGAIN).
3. `new` (sin estado previo o `state=new`).
4. Futuras (preview opcional, como hoy).

Regla clave nueva: un AGAIN intra-sesión inserta la tarjeta en una cola de
aprendizaje con `due = ahora + paso`, y la sesión no termina mientras queden
elementos con `due ≤ ahora`. Esto reemplaza el `next()` circular actual para
tarjetas en learning.

`R` se calcula al momento de calificar con `t = (ahora − lastReview)/día`.

## 6. Esquema de almacenamiento y migración

### 6.1 v2 propuesto

Clave nueva: `hypatia-flashcards.srs.v2` (v1 se conserva intacto para rollback).

```
{
  "version": 2,
  "params": {                      # overrides opcionales por usuario
    "w": [...], "retention": 0.9, "maxIvl": 36500,
    "learningSteps": [1, 10], "relearningSteps": [10], "fuzz": true
  },
  "decks": {
    "<deckId>": {
      "<cardIdx>": {
        "s": 2.31,               # estabilidad (días)
        "d": 5.62,               # dificultad [1,10]
        "due": 1755... ,         # timestamp ms
        "state": "review",       # new|learning|review|relearning
        "step": 0,               # índice de paso si learning/relearning
        "reps": 4, "lapses": 1,
        "lastReview": 1754...
      }
    }
  }
}
```

Gamificación en clave separada `hypatia-flashcards.game.v1` (§7). El puntero
`hypatia-flashcards.srs.v1.last` se mantiene funcionando.

### 6.2 Regla de migración v1 → v2 (lazy, al cargar el deck)

Por cada `(deckId, cardIdx)` con registro v1 `{ef, ivl, due, reps}`:

```
si reps == 0 o ivl <= 0:        estado = new (sin migrar, empezar limpio)
si no:
  S = max(ivl, 0.1)
  D = clamp( 11 − (ef − 1) / (e^w[8] · S^(−w[9]) · (e^(0.1·w[10]) − 1)),
             1, 10 )            # misma idea que convert_states de EV-1:
                               # invierte la fórmula de recall asumiendo R≈0.9
  state = "review"; step = 0; lapses = 0
  due = v1.due (se respeta la fecha ya programada)
  lastReview = due − ivl·día (aproximación)
```

La migración escribe v2 y deja v1 sin tocar; si v2 ya existe, v1 se ignora.

## 7. Capa de gamificación (mapeo desde carden, EV-3)

Eventos: cada llamada a `grade()` emite un `GradeEvent {cardId, grado, estadoPrevio}`.

| Concepto carden | Observado | Propuesta para Hypatia |
|---|---|---|
| XP por repaso | `puntos += quality·15 + 50`; quality∈{0..5} según (intención × acierto); incluso fallar suma (mínimo 50) | `XP(grado) = base + bonus[grado]`, tunable. Defaults propuestos: base 10; bonus AGAIN 0, HARD 30, GOOD 50, EASY 70 (→ 10/40/60/80). AGAIN nunca da 0: repasar ya recompensa. |
| Toast "+N" | `showPoints()`, ~2 s | Toast "+N XP" junto a los botones tras calificar. |
| Racha | contador `streak` diario server-side | `streak: {count, lastActiveDay}` en `game.v1`; +1 si hubo ≥1 repaso ese día local y `lastActiveDay` era ayer; reset a 1 si hubo hueco. |
| Niveles | 21 tiers con nombre, umbrales 1000..100000, anillo de progreso | Opcional fase 2: nivel = umbral sobre XP total (tabla propia, sin assets de carden). No bloquea el MVP. |
| Resumen de sesión | `finishSession()`: correct/incorrect/forgotten + puntos | Al agotar la cola: repasos por grado, XP ganado, tarjetas graduadas a review, lapses. |
| Combo | NO existe en carden | Propuesta nueva (supuesto §9): multiplicador ×1.1 por cada 5 aciertos consecutivos sin AGAIN, cap ×2. |

## 8. Requisitos

| REQ | Criterio | Base | Verificación |
|-----|----------|------|--------------|
| REQ-1 | AGAIN sobre tarjeta nueva la re-encola dentro de la misma sesión tras `paso[0]` | EV-1 state machine; corrige gap de EV-0 | Calificar "Otra vez" una carta nueva → reaparece antes de que termine la sesión |
| REQ-2 | AGAIN sobre tarjeta `review` la manda a `relearning`, incrementa `lapses`, aplica S'_olvido ≤ S | EV-1 §forget | Estado `relearning`, `lapses+1`, S' < S, vuelve en `paso_relearning[0]` |
| REQ-3 | Primera calificación fija S0/D0 por grado según tabla 4.5 | EV-1 `init_stability/difficulty` | Carta nueva + GOOD → S=w[2], D=D0(3), state learning o review según pasos |
| REQ-4 | En `review`, R se calcula con días reales transcurridos desde `lastReview` | EV-1 `forgetting_curve` | Repasar tarde (t > ivl) produce R < retención y S' distinto que repasar a tiempo |
| REQ-5 | Preview de intervalos en botones respeta `hard ≤ good < easy` | EV-1 clamps | Los `<small>` de botones muestran valores monótonos para cualquier S,D |
| REQ-6 | La sesión ordena vencidas por due → learning vencido → nuevas → futuras | EV-0 + EV-1 | Baraja de prueba con mezcla de estados produce ese orden |
| REQ-7 | Migración v1→v2 conserva `due`, deriva S=ivl y D desde ef | EV-1 `convert_states` | Estado v1 sembrado → tras load, v2 tiene S≈ivl, D∈[1,10], mismo due |
| REQ-8 | `w`, retención, pasos e ivl_max son configuración editable, con defaults §4.7 | EV-1 deckParams; decisión de diseño | Cambiar `retention` a 0.8 acorta previews sin tocar código del motor |
| REQ-9 | XP por grado según tabla §7; AGAIN > 0 | EV-3 `spacedRepetition` | Calificar suma XP visible en toast y contador de sesión |
| REQ-10 | Resumen de sesión al agotar cola: conteo por grado + XP | EV-3 `finishSession` | Terminar una sesión muestra el resumen |
| REQ-11 | Racha diaria persiste en localStorage y resetea tras un día sin actividad | EV-3 streak | Repasar hoy → count+1; simular hueco de 2 días → count=1 |
| REQ-12 | Atajos de teclado 1-4 y flip UI sin cambios funcionales | EV-0 | Regresión manual de teclado/espacio/click |
| REQ-13 | Sin v1, v2 arranca vacío; sin decks, mensaje "Sin decks cargados" | EV-0 | localStorage limpio → comportamiento idéntico al actual |

## 9. Decisiones (aprobadas 2026-09-22)

1. **Variante FSRS:** DECIDIDO **FSRS-6** (21 pesos, decay aprendible `w[20]`),
   con los defaults de §4.7. La evidencia HEAD es FSRS-6; FSRS-5 queda descartado.
2. **Pesos `w` editables:** DECIDIDO. Viven en `params` del store v2 con
   fallback a defaults si el valor guardado no parsea o tiene longitud ≠ 21.
3. **Pasos de (re)learning:** DECIDIDO `[1min, 10min]` learning / `[10min]`
   relearning (estilo Anki, configurables en `params`).
4. **Combo de sesión:** DECIDIDO incluir — el usuario pidió máxima dopamina.
   ×1.1 por cada 5 aciertos consecutivos sin AGAIN, cap ×2. Tunable en params.
5. **Niveles:** DECIDIDO fase 2 opcional; MVP = XP + racha + resumen.
6. **Granularidad de `due`:** DECIDIDO timestamp ms (como hoy); fuzz ±5% solo
   en ivl ≥ 2.5 días y nunca por debajo del intervalo previo en review.
7. **"Dominada":** DECIDIDO `S ≥ 21` días (sustituye `ivl ≥ 7` de v1).
8. **Migración `ivl=0`:** DECIDIDO `state=new` (la tarjeta se re-aprende limpio).

## 10. Riesgos

- localStorage corrupto o `w` editado a mano con valores inválidos → clamp de
  D∈[1,10], S≥0.1, ivl∈[1,max]; si `w` no parsea, fallback a defaults.
- Sesión infinita si pasos muy cortos y muchos AGAIN → cap de aprendizaje por
  sesión (p.ej. 20 re-encolados/día, configurable).
- Preview engañosa en `learning` (muestra paso, no días): formatear `<1d` ya
  cubre el caso.

GATE: approved 2026-09-22 — FSRS-6 + combo de sesión implementables.
