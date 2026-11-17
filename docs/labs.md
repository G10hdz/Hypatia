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

| Patrón | Conceptos que enseña | Ejemplo |
|---|---|---|
| Población de N bloques | prior/posterior, prevalencia, CLT | `ai-math/01-bayes` |
| Sliders + canvas | cualquier función de 1-2 parámetros | — |
| Monte Carlo en vivo | esperanza, varianza, error de estimación | — |
| Drag-the-points | regresión, fronteras de decisión, overfitting | — |
| Animación temporal | procesos, colas, convergencia | — |
| Grafo/mapa interactivo | system-design, routing (operaciones-or) | — |

Reglas: canvas vanilla o `shared/figures.js`; Three.js solo si el
concepto de verdad lo pide (vendorado, nunca CDN en runtime).

## Convenciones

- Sin build, sin dependencias externas en runtime (fuentes vía Google
  Fonts como el resto de Hypatia).
- Paleta dark de Hypatia: bg `#0a0a0f`, panel `#111116`, accent
  `#C4B5E3`, mint `#98FF98`, warn `#ffd166`.
- Texto en español; términos técnicos en inglés inline.
- Progreso en `localStorage`, namespace `hypatia.labs.*`.
- Self-contained: la lección lleva su CSS inline (patrón SAA-C03), salvo
  `figures.js` que es compartido.
