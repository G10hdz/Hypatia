/* question-quality.js — descarta preguntas que su propia explicacion declara rotas.
 * El banco de CubPrep viene de PDFs importados y en ~1800 preguntas la explicacion dice
 * que la pregunta no se entiende o que sus opciones son de otro tema. Mostrarlas ensena mal.
 * El banco en disco no cambia; esto solo las saca de los bloques. */
"use strict";
const BROKEN_SELF_REPORT = /no se entiende|no tiene sentido|de otro tema|no corresponde a|parece estar (mal|incomplet)|est[aá]n? mal formulad|no est[aá] relacionad/i;

function brokenByOwnExplanation(question) {
  const text = `${question.explicacion || ""} ${question.explicacion_correcta || ""}`;
  return BROKEN_SELF_REPORT.test(text);
}
