/* challenge.js — desafio del dia en la portada.
 * Junta las preguntas (.q[data-ok]) de las lecciones publicadas en tracks.js
 * y las aprobadas de Labs/bank.js. La respuesta y su explicacion
 * aparecen despues de intentar. Sin red ni lecciones, la seccion no se muestra. */
"use strict";
const StudioChallenge = (() => {
  /* Misma pregunta todo el dia; rota en orden por dias. */
  function pick(items, dayKey) {
    if (!items.length) return null;
    const day = Math.floor(Date.parse(dayKey + "T12:00:00Z") / 86400000);
    return items[((day % items.length) + items.length) % items.length];
  }

  /* Pregunta del banco usable en el desafio: aprobada y bien formada. */
  function valid(q, bookIds) {
    return !!q && q.status === "aprobada" &&
      typeof q.prompt === "string" && q.prompt.trim() !== "" &&
      Array.isArray(q.options) && q.options.length >= 3 && q.options.length <= 4 &&
      q.options.every(o => typeof o === "string" && o.trim() !== "") &&
      Number.isInteger(q.ok) && q.ok >= 0 && q.ok < q.options.length &&
      typeof q.why === "string" && q.why.trim() !== "" &&
      !!q.ref && bookIds.has(q.ref.book) && typeof q.ref.where === "string";
  }

  function parse(html, lesson) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return [...doc.querySelectorAll(".q[data-ok]")].map(q => ({
      prompt: q.querySelector("p")?.textContent.trim() || "",
      options: [...q.querySelectorAll(".opts button")].map(b => b.textContent.trim()),
      ok: Number(q.dataset.ok),
      why: q.querySelector(".why")?.textContent.trim() || "",
      lesson,
    })).filter(it => it.prompt && it.options.length > it.ok);
  }

  async function mount(el, { lessons, bank = [], books = [], today, onAnswer }) {
    const byId = new Map(books.map(b => [b.id, b]));
    const all = bank.filter(q => valid(q, byId)).map(q => ({ ...q, book: byId.get(q.ref.book) }));
    for (const lesson of lessons) {
      try {
        const res = await fetch(lesson.href);
        if (res.ok) all.push(...parse(await res.text(), lesson));
      } catch (e) { /* file:// o sin red: se omite esa leccion */ }
    }
    const it = pick(all, today);
    if (!it) return;

    const box = document.createElement("div");
    box.className = "q";
    const p = document.createElement("p");
    p.textContent = it.prompt;
    const opts = document.createElement("div");
    opts.className = "opts";
    const why = document.createElement("div");
    why.className = "why";
    why.textContent = it.why;
    const from = document.createElement("p");
    from.className = "note";
    from.hidden = true;
    const a = (href, text) => {
      const l = document.createElement("a");
      l.href = href; l.textContent = text;
      if (/^https?:/.test(href)) { l.target = "_blank"; l.rel = "noopener noreferrer"; }
      return l;
    };
    if (it.lesson) {
      from.append("Viene de la leccion ", a(it.lesson.href, it.lesson.title), ".");
    } else {
      from.append(`Para profundizar: ${it.book.title}, ${it.ref.where}.`);
      if (it.book.free) from.append(" ", a(it.book.free, "Leer gratis"));
      const sep = it.book.free ? " · " : " ";
      const buy = typeof amazonUrl === "function" && amazonUrl(it.book);
      if (buy) from.append(sep, a(buy, "En Amazon"));
    }

    it.options.forEach((text, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = text;
      b.addEventListener("click", () => {
        if (why.classList.contains("on")) return;
        b.classList.add(i === it.ok ? "ok" : "no");
        b.setAttribute("aria-pressed", "true");
        opts.children[it.ok].classList.add("ok");
        for (const o of opts.children) o.setAttribute("aria-disabled", "true");
        why.classList.add("on");
        from.hidden = false;
        if (onAnswer) onAnswer(i === it.ok);
      });
      opts.appendChild(b);
    });
    box.append(p, opts, why, from);
    el.appendChild(box);
    el.hidden = false;
  }

  return { pick, valid, parse, mount };
})();
