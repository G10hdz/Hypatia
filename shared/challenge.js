/* challenge.js — desafio del dia en la portada.
 * Lee las preguntas (.q[data-ok]) de las lecciones publicadas en tracks.js,
 * asi no hay un segundo banco que mantener. La respuesta y su explicacion
 * aparecen despues de intentar. Sin red ni lecciones, la seccion no se muestra. */
"use strict";
const StudioChallenge = (() => {
  /* Misma pregunta todo el dia; rota en orden por dias. */
  function pick(items, dayKey) {
    if (!items.length) return null;
    const day = Math.floor(Date.parse(dayKey + "T12:00:00Z") / 86400000);
    return items[((day % items.length) + items.length) % items.length];
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

  async function mount(el, { lessons, today, onAnswer }) {
    const all = [];
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
    const link = document.createElement("a");
    link.href = it.lesson.href;
    link.textContent = it.lesson.title;
    from.append("Viene de la leccion ", link, ".");

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

  return { pick, parse, mount };
})();
