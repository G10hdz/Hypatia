/* margin.js — nota al margen de una leccion, estilo libro de texto.
 * Lee lesson.margin de tracks.js: { read: [{book, where, href?}], watch?: {title, by, url}, try }.
 * Los libros salen de Labs/books.js; la compra usa amazonUrl() para que el tag viva en un solo lugar.
 * En pantallas anchas queda abierta a la derecha del texto; en movil es un <details> cerrado. */
"use strict";
const StudioMargin = (() => {
  const WIDE = "(min-width: 1400px)";

  function link(href, text) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function block(title) {
    const h = document.createElement("h3");
    h.textContent = title;
    return h;
  }

  function mount(el, margin, books) {
    if (!el || !margin) return;
    const byId = new Map(books.map(b => [b.id, b]));
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = "Nota al margen";
    details.appendChild(summary);

    const read = (margin.read || []).filter(r => byId.has(r.book));
    if (read.length) {
      details.appendChild(block("Para leer"));
      const ul = document.createElement("ul");
      for (const r of read) {
        const b = byId.get(r.book);
        const li = document.createElement("li");
        const name = document.createElement("cite");
        name.textContent = b.title;
        li.append(name, `, ${b.author}${r.where ? ", " + r.where : ""}.`);
        const free = r.href || b.free;
        if (free) li.append(" ", link(free, "Leer gratis"));
        const buy = typeof amazonUrl === "function" && amazonUrl(b);
        if (buy) li.append(free ? " · " : " ", link(buy, "En Amazon"));
        ul.appendChild(li);
      }
      details.appendChild(ul);
    }

    if (margin.watch) {
      details.appendChild(block("Para ver"));
      const p = document.createElement("p");
      p.append(link(margin.watch.url, margin.watch.title), ` · ${margin.watch.by}`);
      details.appendChild(p);
    }

    if (margin.try) {
      details.appendChild(block("Para practicar"));
      const p = document.createElement("p");
      p.textContent = margin.try;
      details.appendChild(p);
    }

    if (typeof matchMedia === "function") details.open = matchMedia(WIDE).matches;
    el.appendChild(details);
    el.hidden = false;
  }

  return { mount };
})();
