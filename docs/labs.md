# Labs — lecciones interactivas

Labs es el módulo de Hypatia donde cada concepto es una figura que se
mueve. Formato inspirado en [hft.md](https://hft.md/): no se trata de
copiar 3D por copiar, sino de que la persona *sienta* el concepto antes de
ver la fórmula.

## Estructura

```
Labs/
  index.html                    # hub, renderiza tracks.js
  tracks.js                     # registry: tracks -> lecciones
  <track>/<NN-slug>/index.html  # una lección
shared/figures.js               # kit de figuras canvas (sin deps)
```

Un track por tema del stack, con los mismos ids que los notebooks de
study-buddy: `ai-math`, `operaciones-or`, `system-design`, `mlops`.
Así la correspondencia notebook → track → lecciones queda en los nombres.

## Los 6 beats (obligatorios)

Toda lección sigue el mismo ritmo, numerado en la página:

1. **La idea** — explicación en lenguaje llano, 1-2 párrafos.
2. **La figura** — lo interactivo: sliders, simular, drag. Protagonista.
3. **La matemática** — la fórmula derivada, con los números de la figura.
4. **El código** — snippet corto y corrible (Python/NumPy).
5. **En el trabajo real** — dónde se usa (entrevistas, producción,
   evals). Conectar con el contexto de Gio (ai-coach, MLOps).
6. **Check yourself** — 2-3 preguntas con feedback inmediato; mejor
   racha en `localStorage` (`hypatia.labs.<slug>`).

## Receta de generación (para agentes)

1. **Fuente**: un tema del roadmap/notebook/brief. Nunca inventar
   contenido que el material no respalde; marcar huecos como PENDIENTE.
2. **Outline del track**: proponer la secuencia de lecciones y pausar —
   el outline se revisa con Gio antes de generar (paso gris humano).
3. **Por lección**: redactar beats 1, 3, 4, 5 desde la fuente citando su
   procedencia. Para el beat 2 elegir el patrón de figura que enseña el
   concepto (ver catálogo abajo) y escribir solo su lógica de dibujo
   sobre `shared/figures.js`.
4. **Registrar**: entrada en `tracks.js` (slug, título, beats, mins).
5. **Cerrar**: emitir `mem.py emit hypatia milestone "labs: <track>/<slug> …"`
   para que la lección nueva cuente en learning-memory.

## Catálogo de patrones de figura

El patrón depende de lo que se enseña, no de la tecnología. Regla:
pocos elementos en pantalla, un solo mensaje por figura, feedback
inmediato al interactuar. Bonito pero no saturado.

| Patrón | Conceptos que enseña | Tracks | Ejemplo |
|---|---|---|---|
| Población de N bloques | prior/posterior, prevalencia, CLT | ai-math | `ai-math/01-bayes` |
| Topología con flujo vivo | cuellos de botella, latencia, cache, colas | system-design, mlops | `system-design/01-bottleneck` |
| Sliders + curva/área | funciones de 1-2 parámetros, regresión, convergencia | ai-math, operaciones-or | — |
| Monte Carlo en vivo | esperanza, varianza, estimación, simulación | ai-math, operaciones-or | — |
| Drag-the-points | fronteras de decisión, overfitting, clustering | ai-math | — |
| Arco/armado de estructura | storytelling (hook-shape-flesh-judge-land), outlines | storytelling, capital-cultural | — |
| Grafo interactivo | routing, redes, dependencias, planificación | operaciones-or, system-design | — |
| Timeline/map | cronologías, actores, escenarios | geopolitica, filosofia-arte | — |
| Árbol de decisión | decisión bajo incertidumbre, árboles de juego | operaciones-or, ai-math | — |

Reglas: canvas vanilla o `shared/figures.js`; Three.js solo si el
concepto de verdad lo pide (vendorado, nunca CDN en runtime).

## Loop de progreso (Pavlov-friendly)

El diseño busca motivar sin saturar: señales pequeñas y honestas, nada
de dark patterns ni contadores artificiales.

- Completar los check-yourself de una lección escribe
  `hypatia.labs.<slug>.done` en localStorage; el hub muestra la lección
  con check verde.
- La mejor racha de aciertos por lección queda en
  `hypatia.labs.<slug>` y se muestra dentro de la lección.
- El agente emite `mem.py emit hypatia quiz|milestone` al cerrar
  lecciones o hitos; el dashboard de learning-memory suma XP, racha y
  logros sobre esos datos reales.
- Sesiones cortas: cada lección apunta a ~12 min y siempre ofrece
  retry sin costo (misma regla de Hypatia).

## Convenciones

- Sin build, sin dependencias externas en runtime (fuentes vía Google
  Fonts como el resto de Hypatia).
- Paleta dark de Hypatia: bg `#0a0a0f`, panel `#111116`, accent
  `#C4B5E3`, mint `#98FF98`, warn `#ffd166`.
- Texto en español; términos técnicos en inglés inline.
- Progreso en `localStorage`, namespace `hypatia.labs.*`.
- Self-contained: la lección lleva su CSS inline (patrón SAA-C03), salvo
  `figures.js` que es compartido.
