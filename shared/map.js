/* map.js — mapa de conexiones entre los temas del catalogo.
 * Lee KNOWLEDGE_MAP (curado) y LABS_TRACKS; no infiere relaciones ni temas.
 * Escenario: botones de temas sobre conectores SVG en un lienzo de 780x390.
 * En pantallas angostas los mismos temas pasan a una lista. Las aristas son
 * puentes documentados o propuestos entre temas; ninguno es requisito.
 */
const StudioMap = (() => {
  const STAGE_W = 780, STAGE_H = 390;

  const topicById = (data, id) =>
    (data.topics || []).find(t => t.id === id) || null;

  const topicIds = data => new Set((data.topics || []).map(t => t.id));

  function initialTopic(data, requested) {
    return topicIds(data).has(requested) ? requested : data.defaultTopic;
  }

  /* lessonKeys "track/slug" -> solo lecciones realmente publicadas. */
  function resolveLesson(key, tracks, root) {
    const [trackId, slug] = String(key).split("/");
    const track = (tracks || []).find(t => t.id === trackId);
    const lesson = track && track.lessons.find(l => l.slug === slug);
    if (!lesson) return null;
    return {
      title: lesson.title,
      href: `${root}Labs/${trackId}/${slug}/index.html`,
      mins: lesson.mins,
      track: trackId,
      slug,
    };
  }

  function neighbors(data, id) {
    const out = [];
    for (const r of data.relations || []) {
      let other = null;
      if (r.from === id) other = r.to;
      else if (r.to === id) other = r.from;
      if (!other) continue;
      out.push({ topic: other, relation: r });
    }
    return out;
  }

  function topicLink(homeHref, id) {
    return `${homeHref}?topic=${encodeURIComponent(id)}#mapa`;
  }

  function mk(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function renderDetail(box, data, tracks, root, id, select) {
    const t = topicById(data, id);
    box.textContent = "";
    if (!t) return;

    box.appendChild(mk("h3", null, t.title));

    const origins = mk("div", "origins");
    for (const o of t.origins || []) {
      origins.appendChild(mk("span", "chip", (data.origins || {})[o] || o));
    }
    box.appendChild(origins);

    const resolved = (t.lessonKeys || [])
      .map(k => resolveLesson(k, tracks, root))
      .filter(Boolean);
    if (resolved.length) {
      let done = 0;
      if (typeof LearningState !== "undefined" && LearningState.getLesson) {
        done = resolved.filter(l =>
          LearningState.getLesson(l.track, l.slug).completed).length;
      }
      const prog = mk("p", "map-progress", "Progreso en esta area: ");
      prog.appendChild(mk("b", null, `${done}/${resolved.length}`));
      prog.appendChild(document.createTextNode(" lecciones completadas"));
      box.appendChild(prog);
    }

    box.appendChild(mk("p", null, t.description));
    if (t.evidence) {
      const det = mk("details", "evi");
      det.appendChild(mk("summary", null, "Ver fundamento"));
      det.appendChild(mk("span", null, ` Fuente: ${t.evidence}`));
      box.appendChild(det);
    }

    const links = mk("div", "links");
    let anyLesson = false;
    for (const key of t.lessonKeys || []) {
      const l = resolveLesson(key, tracks, root);
      if (!l) continue;
      anyLesson = true;
      const a = mk("a", "btn ghost", `Leccion: ${l.title}`);
      a.href = l.href;
      links.appendChild(a);
    }
    for (const path of t.practicePaths || []) {
      const mod = (typeof LEGACY_MODULES !== "undefined" ? LEGACY_MODULES : [])
        .find(m => m.href === path);
      const a = mk("a", "btn ghost", `Practica: ${mod ? mod.name : path}`);
      a.href = root + path;
      links.appendChild(a);
    }
    if (links.childNodes.length) box.appendChild(links);
    if (!anyLesson) {
      const p = mk("p", "map-empty");
      p.textContent = "Leccion interactiva por preparar. ";
      const lib = mk("a", null, "Guarda un material tuyo de este tema en la biblioteca");
      lib.href = "#biblioteca";
      lib.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("hypatia:resource-preselect", {
          detail: { topic: id },
        }));
      });
      p.appendChild(lib);
      p.appendChild(document.createTextNode("."));
      box.appendChild(p);
    }

    const ns = neighbors(data, id);
    if (ns.length) {
      const grid = mk("div", "map-neighbors");
      for (const { topic, relation } of ns) {
        const other = topicById(data, topic);
        const item = mk("div", "map-neighbor");
        const b = mk("button", null);
        b.type = "button";
        const rel = mk("span", "rel" + (relation.status === "proposal" ? " proposal" : ""),
          `${other ? other.title : topic} · ${relation.label}`);
        const rsn = mk("span", "rsn", relation.reason);
        b.append(rel, rsn);
        b.addEventListener("click", () => select(topic, { user: true, restoreFocus: true }));
        item.appendChild(b);
        if (relation.evidence) {
          const det = mk("details", "evi");
          det.appendChild(mk("summary", null, "Ver fundamento"));
          det.appendChild(mk("span", null, ` Fuente: ${relation.evidence}`));
          item.appendChild(det);
        }
        grid.appendChild(item);
      }
      box.appendChild(grid);
    }
  }

  /* mount(el, {data, tracks, root, homeHref, requested, updateUrl})
   *  root: prefijo a la raiz del repo ("" en portada, "../" en Labs).
   *  homeHref: ruta a la portada para enlaces ?topic=...#mapa.
   *  requested: id pedido por ?topic= (allowlist, si no defaultTopic). */
  function mount(el, { data, tracks = [], root = "", homeHref = "index.html",
                       requested = null, updateUrl = false } = {}) {
    let selected = initialTopic(data, requested);
    el.textContent = "";

    const stage = mk("div", "map-stage");
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${STAGE_W} ${STAGE_H}`);
    svg.setAttribute("aria-hidden", "true");
    const lines = {};
    for (const r of data.relations || []) {
      const a = topicById(data, r.from), b = topicById(data, r.to);
      if (!a || !b) continue;
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", a.x); line.setAttribute("y1", a.y);
      line.setAttribute("x2", b.x); line.setAttribute("y2", b.y);
      line.setAttribute("class", `map-edge t-${r.type}` + (r.status === "proposal" ? " proposal" : ""));
      svg.appendChild(line);
      lines[r.id] = { line, from: r.from, to: r.to };
    }
    stage.appendChild(svg);

    const list = mk("div", "map-list");
    const nodeButtons = [];
    for (const t of data.topics || []) {
      for (const parent of [stage, list]) {
        const b = mk("button", "map-node");
        b.type = "button";
        const box = mk("span", "picto-box");
        if (typeof picto === "function") box.appendChild(picto(t.id));
        b.append(box, mk("span", "nm", t.title));
        b.dataset.topic = t.id;
        if (parent === stage) {
          b.style.left = (t.x / STAGE_W * 100) + "%";
          b.style.top = (t.y / STAGE_H * 100) + "%";
        }
        b.setAttribute("aria-pressed", "false");
        b.addEventListener("click", () => select(t.id, { user: true }));
        parent.appendChild(b);
        nodeButtons.push({ b, parent });
      }
    }
    const cols = mk("div", "map-cols");
    const left = mk("div", "map-left");
    left.append(stage, list);
    cols.appendChild(left);

    const legend = mk("div", "legend");
    for (const [type, name] of [["foundation", "Fundamentos"], ["application", "Aplicacion"],
                                ["shared-material", "Material compartido"], ["proposal", "Por construir"]]) {
      const item = mk("span", null);
      const sw = mk("span", "linea-sw");
      sw.style.background = type === "proposal" ? "var(--stage-line)" : `var(--l${{ foundation: 3, application: 7, "shared-material": 8 }[type]})`;
      item.append(sw, document.createTextNode(name));
      legend.appendChild(item);
    }
    legend.appendChild(mk("span", null, "Ninguna linea es requisito: empieza por el tema que quieras."));
    left.appendChild(legend);

    const detail = mk("div", "map-detail panel");
    cols.appendChild(detail);
    el.appendChild(cols);

    /* El boton visible del tema: stage en escritorio, lista en movil. */
    function focusNode(id) {
      const visible = p => {
        try { return getComputedStyle(p).display !== "none"; }
        catch (e) { return true; }
      };
      const hit = nodeButtons.find(n => n.b.dataset.topic === id && visible(n.parent));
      if (hit) hit.b.focus();
    }

    function select(id, { user = false, restoreFocus = false } = {}) {
      if (!topicIds(data).has(id)) id = data.defaultTopic;
      selected = id;
      for (const { b } of nodeButtons) {
        b.setAttribute("aria-pressed", b.dataset.topic === id ? "true" : "false");
      }
      for (const k in lines) {
        const { line, from, to } = lines[k];
        const on = from === id || to === id;
        line.classList.toggle("on", on);
        line.classList.toggle("dim", !on);
      }
      renderDetail(detail, data, tracks, root, id, select);
      /* Solo una seleccion explicita del usuario toca la URL; el render
       * inicial conserva hash y query entrantes (#modules, #biblioteca). */
      if (user && updateUrl && window.history && history.replaceState) {
        try {
          const url = new URL(location.href);
          url.searchParams.set("topic", id);
          url.hash = "mapa";
          history.replaceState(null, "", url);
        } catch (e) { /* navegacion opcional */ }
      }
      if (restoreFocus) focusNode(id);
    }
    select(selected);
    return { select };
  }

  /* 'Conecta con' para una leccion: tema propio + vecinos, con enlaces al
   * mapa de la portada. No duplica topologia: lee el mismo dataset. */
  function connect(el, topicId, { data, homeHref = "../../../index.html" } = {}) {
    const t = topicById(data, topicId);
    el.textContent = "";
    if (!t) return;
    const a = mk("a", "btn ghost", `Ver ${t.title} en el mapa`);
    a.href = topicLink(homeHref, t.id);
    el.appendChild(a);
    const ns = neighbors(data, topicId);
    if (!ns.length) return;
    const grid = mk("div", "map-neighbors");
    for (const { topic, relation } of ns) {
      const other = topicById(data, topic);
      const link = mk("a", "module-row");
      link.href = topicLink(homeHref, topic);
      const rel = mk("b", relation.status === "proposal" ? "rel proposal" : "rel",
        `${other ? other.title : topic} · ${relation.label}`);
      const rsn = mk("span", null, relation.reason);
      link.append(rel, rsn);
      grid.appendChild(link);
    }
    el.appendChild(grid);
  }

  return { mount, connect, topicById, initialTopic, resolveLesson, neighbors, topicLink };
})();

if (typeof module !== "undefined" && module.exports) module.exports = StudioMap;
