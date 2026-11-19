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

## Para quien es

Proyecto personal, no SaaS. Lo usa Gio y quiza lo comparta con amigos de
Positronica Labs. Decidido por Gio el 2026-11-18:

- **Dos versiones.** Publica: este repo (`G10hdz/Hypatia`, publico) y su
  deploy de Netlify. Privada: un repo privado aparte con su propio deploy,
  que agrega los links a cuadernos de NotebookLM. Ningun link de NotebookLM
  entra a este repo.
- **Nota al margen estilo libro de texto** en la version publica: fuentes de
  YouTube, libros y web, card a la derecha en desktop y `<details>` en movil
  (roadmap 2.6).
- **Preguntas con referencia**: cada pregunta del quiz puede apuntar a
  "consulta esto en <libro>, cap. <n>".
- **Links de afiliado de Amazon** en libros, solo en la publica, con el aviso
  de Asociada visible en el footer.

Modelo de fuente que implica: `kind` (`youtube | libro | web | notebooklm`),
`visibility` (`publica | privada`) y `buyUrl` opcional. `notebooklm` y
`privada` solo existen en el repo privado.

Pendiente: `Labs/comunicacion/01-warmth-competence/index.html:117` (sin
commitear) trae un link de NotebookLM con dominio `notebook.google.com`.
Quitarlo antes de commitear la leccion aqui; va al repo privado.

## Enganche: que si funciona

Meta de Gio: que Hypatia enganche como las redes, pero para aprender.
Evidencia consultada el 2026-11-18:

- Puntos, badges, avatares y leaderboards no tienen efecto significativo en
  aprendizaje; los niveles si (meta-analisis de programacion, d = 0.4, casi
  todo por niveles). La narrativa supera a puntos y badges.
- La curiosidad por una respuesta que aun no tienes activa el circuito de
  recompensa y mejora la memoria a 24 h (Gruber, Gelman y Ranganath 2014,
  Neuron). El beat "Antes de explorar" ya es esto.
- Saltarse un dia no afecta la formacion del habito (Lally). La racha no debe
  castigar el dia perdido.

Decisiones que salen de ahi:

- Se quita de legacy: XP pop, avatares emoji, racha de aciertos con fuego,
  toasts de hitos y banner motivacional. "Racha" significa solo dias.
- Se quedan y crecen: niveles, racha por dias con un dia de gracia, desafio
  del dia como pregunta de curiosidad (respuesta despues de intentar),
  prediccion antes de explorar, y paths con hilo narrativo.
- Fondo cuadriculado de figuras: se queda, mas tenue, como hoja de cuaderno.
- SAA-C03 va directo al tema nuevo, sin pasar por engine.css.
- Bayes y bottleneck: solo estructura (headings `<h2>` del template), sin
  tocar el texto.

Fuentes: [OLJ 2026](https://olj.onlinelearningconsortium.org/index.php/olj/article/view/5188),
[ETR&D programacion](https://link.springer.com/10.1007/s11423-020-09807-z),
[Gruber 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4252494).

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
