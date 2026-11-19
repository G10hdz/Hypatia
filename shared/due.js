/* due.js — tarjetas por repasar hoy en cada mazo de Flashcards.
 * Lee el progreso FSRS que guarda Flashcards (hypatia-flashcards.srs.v2) con la
 * misma regla de su barra de mazos: nueva, vencida o en aprendizaje cuenta. */
"use strict";
const StudioDue = (() => {
  const KEY = "hypatia-flashcards.srs.v2";

  function byDeck(decks, store, now = Date.now()) {
    return Object.entries(decks || {}).map(([id, d]) => {
      const states = (store && store.decks && store.decks[id]) || {};
      const due = d.cards.filter((_, i) => {
        const s = states[i];
        return !s || s.state === "new" || s.due <= now || s.state === "learning" || s.state === "relearning";
      }).length;
      return { id, title: d.title || id, due, total: d.cards.length };
    });
  }

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }

  return { byDeck, load, KEY };
})();
