# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Gio, a diario: estudia sus tracks (ai-math, system-design, comunicacion, marketing, chino, examenes) y quiere que repasar sea lo primero que abre, en vez de redes sociales.
- Amigos de Positronica Labs con quienes comparte el estudio.
- Gente que llega desde las redes de Gio cuando lo promueve.

## Product Purpose

Hypatia es el frente de todo el stack de aprendizaje de Gio: lecciones interactivas, repaso espaciado (flashcards con FSRS), simuladores de examen y un mapa de temas conectados. Exito: volver todos los dias porque aprender engancha, no por presion.

## Positioning

Libro de texto mezclado con videojuego. Cada idea se ve y se mueve: muchas cosas se aprenden solo visualmente. Fuentes reales con capitulo y pagina (libros, papers, videos), no resumenes inventados. Local-first: sin cuentas, el progreso vive en el navegador.

## Operating Context

- Sesiones cortas y diarias; racha por dias con un dia de gracia; desafio del dia que se contesta antes de ver la respuesta.
- El foco de la portada es el repaso: que toca hoy (flashcards vencidas, siguiente leccion, desafio).
- Material de origen en learning-stack (privado) y founder-guide; NotebookLM para estudio privado.

## Capabilities and Constraints

- HTML/CSS/JS estatico, sin build. Produccion en Vercel (hypatia-one.vercel.app). Netlify con builds detenidos.
- Dos versiones: publica (este repo, sin links de NotebookLM ni tracks sensibles) y privada aparte con el mismo diseno.
- Progreso en localStorage (`hypatia.learning.v1`, `hypatia.theme.v1`, prefijos por modulo como `prepaws.`); no se borra ni se migra sin plan.
- Tests: `scripts/test-*.mjs` y `scripts/check-lesson.mjs` en CI.
- Indeciso: cuentas o sincronizacion entre dispositivos.

## Brand Commitments

- Familia Positronica Labs (decidido 2026-11-19): debe notarse que es de Positronica.
- Espanol, voz directa y calida. Sin emojis decorativos.
- Links de afiliado de Amazon con aviso visible; solo libros gratuitos reales (Gutenberg, open access, PDF oficial) se marcan "gratis".

## Evidence on Hand

- Lecciones: Bayes (ai-math) y bottleneck (system-design), con figura interactiva.
- 57 preguntas aprobadas en `Labs/bank.js` con capitulo verificado; catalogo de libros en `Labs/books.js`.
- Simuladores: CubPrep (UNAM), PrepAWS (SAA-C03), MLOps; Flashcards con FSRS-6.
- No hay testimonios, metricas de usuarios ni logos de terceros: no inventarlos.

## Product Principles

- Que se vea para entender: la figura es el centro, el texto la acompana.
- Engancha la curiosidad, no la recompensa vacia: niveles, racha por dias y prediccion antes de explorar; sin puntos, avatares ni confetti.
- Fuentes verificables siempre al alcance (nota al margen).
- Corto y diario gana a largo y esporadico.

## Accessibility & Inclusion

Pensado para mentes neurodivergentes: poca carga cognitiva, una cosa a la vez, movimiento con `prefers-reduced-motion`, contraste AA, teclado completo.
