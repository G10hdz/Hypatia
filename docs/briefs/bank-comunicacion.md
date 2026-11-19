# Brief: banco de preguntas comunicacion (piloto)

- Estado: aprobado-para-implementar (Gio, 2026-11-18, en chat).
- Destino: `Labs/bank.js`, track `comunicacion`, todas en `borrador`.
- Implementa: DeepSeek v4.1 Flash via CommandCode. Revisa: Claude. Aprueba: Gio.

## Alcance

20 preguntas de opcion multiple sobre situaciones de trabajo reales:

- Ideas que se recuerdan: simple, inesperado, concreto, creible,
  emocional, historias.
- Negociacion: intereses vs posiciones, opciones de beneficio mutuo,
  criterios objetivos, alternativa (BATNA).
- Negociacion tactica: espejo, etiquetar emociones, preguntas calibradas,
  anclaje.
- Sesgos en el trabajo: los cuatro patrones de What Works for Women at Work.

Fuera de alcance: manipulacion, guiones para enganar, consejos legales.

## Reglas de contenido

- Cada pregunta es un caso concreto ("en una junta...", "tu cliente
  dice...") y pide elegir la mejor jugada o el concepto que explica lo que
  pasa. Nada de definiciones de memoria.
- La opcion correcta debe ser defendible con el libro citado, sin inventar
  datos, estudios ni citas textuales.
- 3 o 4 opciones; los distractores son errores tipicos reales.
- `ref.where` solo usa capitulos del indice de abajo.
- Espanol sin acentos (convencion del repo). Sin emojis.

## Indices permitidos

- `made-to-stick`: cap. 1 Simple, cap. 2 Unexpected, cap. 3 Concrete,
  cap. 4 Credible, cap. 5 Emotional, cap. 6 Stories.
- `getting-to-yes` (3a ed.): cap. 2 Separate the People from the Problem,
  cap. 3 Focus on Interests, Not Positions, cap. 4 Invent Options for Mutual
  Gain, cap. 5 Insist on Using Objective Criteria, cap. 6 What If They Are
  More Powerful? (BATNA).
- `never-split`: cap. 2 Be a Mirror, cap. 3 Don't Feel Their Pain, Label It,
  cap. 4 Beware "Yes", Master "No", cap. 6 Bend Their Reality, cap. 7 Create
  the Illusion of Control.
- `wwww`: parte 1 Prove-It-Again!, parte 2 The Tightrope, parte 3 The
  Maternal Wall, parte 4 The Tug of War.

## Comprobacion

- `node scripts/test-studio.mjs` verde.
- Revision: cada respuesta defendible con la fuente; cada cita en el indice.
