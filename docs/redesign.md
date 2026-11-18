# Rediseño completo — Hypatia

Estado: planeado, no iniciado. Decidido por Gio el 2026-11-18: scope = **todo
Hypatia** (estudio + modulos legacy). Direccion: "textbook mezclado con un
videojuego" — calma visual, anti-slop, conciso, mas aprendible.

## Contexto

Dos sistemas visuales conviven hoy:

- `shared/studio.css` (591 lineas): tema calmado nuevo — index.html, Labs/,
  lecciones, mapa, biblioteca. Paleta neutra + azul tinta, light/dark.
- `shared/engine.css` (1796 lineas): look viejo de "examen" — lo usan
  CubPrep, SAA-C03, MLOps y Flashcards. Es la mayor deuda visual.

Superficies del estudio: portada (`index.html`), hub Labs (`Labs/index.html`),
lecciones (`Labs/<track>/<slug>/`), template (`templates/lab/`), mapa
(`shared/map.js`), estado (`shared/learning-state.js`).

Features ya shippeadas en `feature/learning-studio` (base del rediseno):
racha por dias (e9b9136), nivel + progreso por area (fdf8443), roadmap con
referencias Vibe/AlgoMaster/TrenTorch/ai-learning-tube.

## Fases

1. **Audit anti-slop** — inventario con evidencia: copy redundante, secciones
   fusionables (metodo/fuentes en portada), patrones inconsistentes entre
   paginas, deuda de engine.css. Salida: lista de hallazgos antes de tocar
   CSS.
2. **Tokens y base** — un solo set de tokens (color, tipo, espaciado, radio)
   del que hereden studio y engine; tipografia y escala afinadas.
3. **Portada → "hoy"** — hero que muestra estado real: racha, siguiente paso
   concreto, lugar para desafio del dia (roadmap 1.4). Secciones explicativas
   colapsan a nota al margen o footer.
4. **Labs y lecciones** — beats mas concisos, slot "nota al margen" (2.6:
   fuente recomendada + prompt de ensayo, card derecha desktop / details
   movil, estilo libro de texto).
5. **Modulos legacy** — reskin bajo el tema calmado o decision de mantener
   "modo examen" por modulo; unificar navegacion (topbar consistente).

## Restricciones (no negociables)

- Local-first, sin cuentas, sin dependencias nuevas sin justificar.
- `node scripts/test-studio.mjs` + `node scripts/check-lesson.mjs <leccion>`
  deben quedar verdes; tests nuevos por cambio no trivial.
- Lecciones publicadas no se reescriben de contenido sin brief; el rediseno
  toca estructura/CSS/copy de UI, no el material pedagogico.
- Catalogo sigue detras del gate humano (tracks.js).
- Progreso local; nada de telemetria.

## Como retomar

Leer este doc + `docs/roadmap-labs.md` + `docs/labs.md`. Empezar por fase 1
(audit) y reportar hallazgos antes de proponer cambios visuales.
