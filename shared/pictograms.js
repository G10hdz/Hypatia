/* pictograms.js — pictogramas de estacion de Hypatia.
 * Rejilla de 24, trazo de 2.4 con puntas redondas; se dibujan en blanco sobre
 * un cuadro del color de la linea. Uno por tema del mapa, por leccion y por
 * modulo de practica. */
"use strict";
const PICTOS = {
  /* temas del mapa */
  matematicas: '<path d="M4 20 L12 4 L20 20 Z"/><circle cx="12" cy="14.5" r="3.2"/>',
  ia: '<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6.8 L17 11.2 M7 17.2 L17 12.8 M5 8 V16"/>',
  sistemas: '<rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M8 7 H8.01 M8 17 H8.01"/>',
  optimizacion: '<path d="M3 5 C7 5 8 18 12 18 C16 18 17 5 21 5"/><path d="M12 21 V18"/>',
  negocio: '<path d="M4 20 H20"/><path d="M7 20 V14 M12 20 V9 M17 20 V5"/>',
  gestion: '<rect x="5" y="4" width="14" height="17" rx="1.5"/><path d="M8.5 10 L10.5 12 L15 7.5 M8.5 16.5 H15.5"/>',
  cultura: '<path d="M3 9 L12 4 L21 9 Z"/><path d="M6 11 V18 M10 11 V18 M14 11 V18 M18 11 V18 M3.5 20.5 H20.5"/>',
  comunicacion: '<path d="M3 5 H14 V12 H8 L5 15 V12 H3 Z"/><path d="M17 9 H21 V16 H19 V19 L16 16 H10 V14.5"/>',
  /* lecciones */
  "ai-math/01-bayes": '<circle cx="6" cy="6" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="18" cy="6" r="1.6"/><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/><circle cx="6" cy="18" r="1.6"/><circle cx="12" cy="18" r="1.6"/><circle cx="18" cy="18" r="3.2"/>',
  "system-design/01-bottleneck": '<path d="M3 5 H21 L14 12 V19 H10 V12 Z"/>',
  /* practica */
  cubprep: '<path d="M3 9 L12 4 L21 9 L12 14 Z"/><path d="M7 11.5 V16 C7 17.5 17 17.5 17 16 V11.5 M21 9 V14"/>',
  prepaws: '<path d="M7 18 H17.5 A3.5 3.5 0 0 0 17 11 A5 5 0 0 0 7.5 10 A4 4 0 0 0 7 18 Z"/>',
  mlops: '<path d="M12 4 A8 8 0 1 1 4.6 9"/><path d="M4 4 V9 H9"/><circle cx="12" cy="12" r="2.5"/>',
  flashcards: '<rect x="3" y="7" width="13" height="13" rx="1.5"/><path d="M8 4 H19.5 A1.5 1.5 0 0 1 21 5.5 V16"/>',
};

/* Devuelve un <svg> listo para insertar; decorativo salvo que se pase label. */
function picto(id, { label = "", cls = "picto" } = {}) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", cls);
  if (label) { svg.setAttribute("role", "img"); svg.setAttribute("aria-label", label); }
  else svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = PICTOS[id] || PICTOS.gestion;
  return svg;
}
