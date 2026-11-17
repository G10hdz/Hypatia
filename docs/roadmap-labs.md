# Roadmap — Hypatia Labs

Estado al 2026-11-17.

Referencias de diseno (enviadas por Gio):

- Vibe Engines — https://vibeengines.com/ — builds interactivos que se pueden
  romper, reto diario con racha, paths por rol, handbooks, todo en
  localStorage sin cuenta. Aporto: beat "rompe esto", desafio diario, paths.
- AlgoMaster — https://algomaster.io/learn/system-design/course-introduction —
  curso estructurado con secciones, prerrequisitos, % de progreso y
  ejercicios por tema. Aporto: nivel, progreso por area, pagina de ejercicios.
- TrenTorch — https://trentorch.com/ — "learn by building": problemas con
  tests ocultos en browser, case studies de empresas, papers anotados.
  Aporto: code runner, lector de fuentes con notas, caso aplicado.

Todo se apoya en piezas que ya existen: `LearningState` (progreso local),
`StudioQuiz`/`StudioMap`/`StudioResources`, `tracks.js` + `knowledge-map.js`,
`learning-kit` (spec FSRS aprobada), `learning-memory` (L1-L3 + dashboard),
`eval/` (harness de corridas). Nada de esto pide backend ni cuentas.

## Fase 0 — Puestos (hecho)

- Contrato de autoria: brief → implementacion acotada → preflight → revision.
- `eval/`: score.mjs + sonda por tarea + runs JSONL. Medido: freellm-v1 falla
  (recall 0.6), freellm-v2 pasa tras una ronda de correccion.
- Lecciones: ai-math/01-bayes, system-design/01-bottleneck publicadas;
  comunicacion/01-warmth-competence en borrador revisado.
- learning-memory emite/lee eventos de superficies.

## Fase 1 — Superficie (quick wins, todo UI sobre estado existente)

| # | Entregable | Donde | Depende de |
|---|---|---|---|
| 1.1 | Chip de racha en hub de Labs (dias consecutivos con visita, local) — **hecho** e9b9136 | `Labs/index.html` + `shared/learning-state.js` (`activityDays` + `streak()`) | nada |
| 1.2 | `level` en lessons (base/intermedio/avanzado) + chip en kicker — **hecho** | `tracks.js`, template, CSS | nada |
| 1.3 | Progreso por area: "x/y" en detalle del mapa y chip en tarjetas del hub — **hecho** | `knowledge-map.js` render + `LearningState` | 1.1 opcional |
| 1.4 | Desafio del dia: rotacion determinista de 1 pregunta en hub | mini question bank en `shared/` o `Labs/` | banco minimo (ver 2.2) |
| 1.5 | Beat "rompe esto" estandar en template: modo extremo que revele falla | `templates/lab/`, retrofit bottleneck | contrato de brief (nuevo campo) |

Criterio de salida: abrir Labs y ver racha, nivel, progreso por area y un
desafio diario sin escribir una sola leccion nueva.

## Fase 2 — Conectar piezas existentes

| # | Entregable | Donde | Depende de |
|---|---|---|---|
| 2.1 | `paths.js`: rutas ordenadas cross-area + "siguiente paso" en hub y mapa | `Labs/paths.js`, hub, `StudioMap` | Fase 1 |
| 2.2 | Question bank por area + FSRS: quiz de leccion genera tarjeta; superficie "repasa hoy" | learning-kit FSRS (verificar estado real primero), nuevo `shared/review.js` | Fase 1.4 (banco), spec FSRS |
| 2.3 | "Material de la leccion": fuentes → links a notebook NotebookLM + audio + briefs | `shared/resources.js`, tracks `recommendedSources` | nada tecnico; contenido por brief |
| 2.4 | Glosario por area: termino → leccion que lo ensena | `Labs/glossary.js` o seccion en mapa | 2.1 preferible |
| 2.5 | Pagina "- Ejercicios" por area (set del banco, estilo AlgoMaster) | nueva ruta estatica por area | 2.2 |
| 2.6 | "Nota al margen" por leccion: fuente recomendada (web o NotebookLM compartido) + prompt copiable para ensayar el tema con un agente | template + `tracks.js` (`sources`, `practicePrompt`), CSS de margen; `<details>` colapsable en movil, card a la derecha en desktop (estilo libro de texto) | contenido curado por brief; NotebookLM privado sigue en `StudioResources` local, nunca en catalogo |

Criterio de salida: un dia de estudio real = desafio del dia + repaso FSRS +
una leccion de un path, todo visible en el hub.

## Fase 3 — Ambicioso

| # | Entregable | Donde | Depende de |
|---|---|---|---|
| 3.1 | Beat "code" ejecutable en browser: snippet + hidden tests sin dependencias | nuevo contrato de brief + `shared/runner.js` | decision: JS puro vs Pyodide (~10MB vendor) por track; eval debe cubrirlo |
| 3.2 | Lector de fuentes con notas locales: extracto NotebookLM → lectura + nota → insight a L2 | `shared/` nuevo + learning-memory emit | L2 ya existe |
| 3.3 | Eventos `hypatia lesson_done` → learning-memory (XP/racha automaticos) | emisores en lecciones | decision de privacidad ya tomada: progreso local, eventos manuales hoy |

Criterio de salida: una leccion ai-math donde la persona escribe la funcion,
corre tests ocultos y ve la salida real — el beat de TrenTorch.

## Orden y por que

1. Fase 1 primero: dopamina inmediata (Pavlov) sin contenido nuevo; cada pieza
   es una tarde y ninguna toca el contrato de lecciones.
2. Fase 2 despues: paths y repaso solo tienen sentido cuando hay progreso que
   mostrar; FSRS necesita el banco del 1.4/2.2.
3. Fase 3 al final: el runner de codigo y el lector de notas son superficie
   nueva — conviene que el catalogo ya tenga 4-6 lecciones para amortizarlos.

## Reglas que no se negocian

- Cada pieza nueva entra por el contrato: brief aprobado → implementacion →
  eval/score → revision humana → catalogo. Nada se autopublica.
- Los beats nuevos (rompe-esto, code) se vuelven campos del brief y tokens de
  la plantilla, no improvisacion por leccion.
- Progreso sigue local al navegador; eventos a learning-memory son manuales
  y describen sesiones reales.
- Sin dependencias externas nuevas sin justificar en el brief; el runner de
  codigo decide JS puro vs Pyodide por track antes de la primera leccion.

## Riesgos abiertos

- Estado real de la implementacion FSRS en learning-kit (spec aprobada
  2026-09-22; verificar si ya corre o sigue SM-2) — primera tarea de 2.2.
- Volumen del banco de preguntas: con 3 lecciones hay ~6 preguntas; el
  desafio diario necesita un banco authored por track (entra al outline).
- Runner de codigo: Pyodide es pesado para un sitio estatico; JS puro cubre
  ai-math/operaciones pero no ML pesado. Decision por track, no global.
