// Questions loader - loads all materias
window.QUESTIONS = [];
if (typeof window.QUESTIONS_INFERENCE !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_INFERENCE);
}
if (typeof window.QUESTIONS_MLOPS !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_MLOPS);
}
if (typeof window.QUESTIONS_SERVING !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_SERVING);
}
if (typeof window.QUESTIONS_FUNDAMENTOS !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_FUNDAMENTOS);
}
