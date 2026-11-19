# Brief: banco de preguntas ai-math (piloto)

- Estado: aprobado-para-implementar (Gio, 2026-11-18, en chat).
- Destino: `Labs/bank.js`, track `ai-math`, todas en `borrador`.
- Implementa: DeepSeek v4.1 Flash via CommandCode. Revisa: Claude (respuesta
  recalculada, cita contra el indice). Aprueba: Gio.

## Alcance

20 preguntas de opcion multiple, nivel base e intermedio:

- Probabilidad basica, condicional, independencia (Think Bayes cap. 1).
- Teorema de Bayes, prior, likelihood, posterior, tasa base (Think Bayes cap. 2).
- Distribuciones y PMF (Think Bayes cap. 3).
- Odds y razon de verosimilitud (Think Bayes cap. 6).
- Vectores, matrices, producto punto (MML cap. 2 y 3).
- Probabilidad para ML: esperanza, varianza, Gaussiana (MML cap. 6).

Fuera de alcance: MCMC, regresion, demostraciones, notacion pesada.

## Reglas de contenido

- Cada pregunta pone a prueba una intuicion que suele fallar, no una
  definicion de memoria. Preferir situaciones concretas con numeros chicos.
- Toda respuesta numerica se puede calcular a mano y la explicacion muestra
  la cuenta.
- 3 o 4 opciones; los distractores son errores tipicos reales.
- `ref.where` solo usa capitulos del indice publico de cada libro.
- Espanol sin acentos (convencion del repo). Sin emojis.
- Solo fuentes publicas: no se envia material privado ni cuadernos.

## Indices permitidos

- Think Bayes: 1 Probability, 2 Bayes's Theorem, 3 Distributions,
  4 Estimating Proportions, 5 Estimating Counts, 6 Odds and Addends.
- MML: 2 Linear Algebra, 3 Analytic Geometry, 6 Probability and Distributions.

## Comprobacion

- `node scripts/test-studio.mjs` verde (forma, ids unicos, libro existente).
- Revision: cada respuesta recalculada; cada cita dentro del indice.
