// Questions loader - loads all materias
window.QUESTIONS = [];
if (typeof window.QUESTIONS_MATEMATICAS !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_MATEMATICAS);
}
if (typeof window.QUESTIONS_FISICA !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_FISICA);
}
if (typeof window.QUESTIONS_QUIMICA !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_QUIMICA);
}
if (typeof window.QUESTIONS_ESPANOL !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_ESPANOL);
}
if (typeof window.QUESTIONS_BIOLOGIA !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_BIOLOGIA);
}
if (typeof window.QUESTIONS_LITERATURA !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_LITERATURA);
}
if (typeof window.QUESTIONS_GEOGRAFIA !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_GEOGRAFIA);
}
if (typeof window.QUESTIONS_HISTORIA_MX !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_HISTORIA_MX);
}
if (typeof window.QUESTIONS_HISTORIA_UNI !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_HISTORIA_UNI);
}
if (typeof window.QUESTIONS_FILOSOFIA !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_FILOSOFIA);
}
if (typeof window.QUESTIONS_GENERAL !== "undefined") {
  window.QUESTIONS = window.QUESTIONS.concat(window.QUESTIONS_GENERAL);
}
