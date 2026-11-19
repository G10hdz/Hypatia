/* shuffle-options.js — baraja las opciones de una pregunta al armar el bloque.
 * Casi todo el banco importado trae la correcta en la A; sin barajar, contestar A siempre gana.
 * Devuelve una copia: opciones en otro orden, correcta reubicada y las letras de las
 * explicaciones ("opcion B", "inciso C", "B. texto" en distractores) apuntando a la nueva posicion.
 * ponytail: solo reescribe "opcion X" e "inciso X"; una letra suelta en prosa ("la A") queda igual. */
"use strict";
function shuffleOptions(question, perm) {
  const n = question.opciones.length;
  const order = perm ? perm(n) : randomOrder(n);
  const newPos = [];
  order.forEach((oldIdx, i) => { newPos[oldIdx] = i; });
  const L = i => String.fromCharCode(65 + i);
  const relabel = text => typeof text !== "string" ? text :
    text.replace(/\b([Oo]pci[oó]n|[Ii]nciso)\s+([A-D])\b/g, (m, word, letter) => {
      const old = letter.charCodeAt(0) - 65;
      return old < n ? `${word} ${L(newPos[old])}` : m;
    });

  let distractors = question.analisis_distractores;
  if (typeof distractors === "string") {
    try { distractors = JSON.parse(distractors); } catch { /* el motor ya cae al analisis basico */ }
  }
  if (Array.isArray(distractors)) {
    distractors = distractors.map(d => {
      const m = typeof d.opcion === "string" && d.opcion.match(/^([A-D])\.\s*/);
      if (!m || m[1].charCodeAt(0) - 65 >= n) return d;
      return { ...d, opcion: L(newPos[m[1].charCodeAt(0) - 65]) + d.opcion.slice(1) };
    }).sort((a, b) => String(a.opcion).localeCompare(String(b.opcion)));
  }

  return {
    ...question,
    opciones: order.map(i => question.opciones[i]),
    correcta: newPos[question.correcta],
    explicacion: relabel(question.explicacion),
    explicacion_correcta: relabel(question.explicacion_correcta),
    analisis_distractores: distractors,
  };
}

function randomOrder(n) {
  const a = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
