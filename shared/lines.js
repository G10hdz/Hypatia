/* lines.js — cada track como una linea y cada leccion como una estacion.
 * Lo usan la portada y el hub de Labs. La estacion proxima es la primera sin recorrer. */
"use strict";
const StudioLines = (() => {
  function mount(el, { tracks, root = "" }) {
    let next = null;
    for (const t of tracks) for (const l of t.lessons) {
      if (!next && !LearningState.getLesson(t.id, l.slug).completed) next = { l };
    }
    for (const t of tracks) {
      const wrap = document.createElement("div");
      wrap.style.setProperty("--line-c", `var(--${t.color})`);
      const head = document.createElement("div");
      head.className = "linea-head";
      const badge = document.createElement("span");
      badge.className = "line-badge";
      badge.textContent = `L${t.line}`;
      const h = document.createElement("h3");
      h.textContent = t.name;
      const done = t.lessons.filter(l => LearningState.getLesson(t.id, l.slug).completed).length;
      const meta = document.createElement("span");
      meta.className = "meta";
      meta.textContent = `${done} de ${t.lessons.length} estaciones`;
      head.append(badge, h, meta);
      const ol = document.createElement("ol");
      ol.className = "estaciones";
      t.lessons.forEach((l, i) => {
        const rec = LearningState.getLesson(t.id, l.slug);
        const li = document.createElement("li");
        li.className = "estacion" + (rec.completed ? " done" : "") + (next && next.l === l ? " proxima" : "");
        const a = document.createElement("a");
        a.href = `${root}${t.id}/${l.slug}/index.html`;
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.appendChild(picto(`${t.id}/${l.slug}`));
        const nm = document.createElement("span");
        nm.className = "nm";
        nm.textContent = l.title;
        const st = document.createElement("span");
        st.className = "st";
        st.textContent = rec.completed
          ? (rec.scoreUnknown ? "recorrida" : `recorrida · ${rec.bestCorrect}/${rec.total}`)
          : `estacion ${i + 1} · ~${l.mins} min${rec.started ? " · en curso" : ""}`;
        a.append(dot, nm, st);
        li.appendChild(a);
        ol.appendChild(li);
      });
      wrap.append(head, ol);
      el.appendChild(wrap);
    }
  }
  return { mount };
})();
