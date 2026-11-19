/* test-studio.mjs — pruebas estructurales del estudio: LearningState,
 * StudioQuiz, StudioResources y StudioMap con DOM y almacenamiento en
 * memoria. Sin browser ni build: node assert + vm.
 * Corre: node scripts/test-studio.mjs */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const ROOT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..");

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = p => readFileSync(join(ROOT, p), "utf8");

/* ---------- DOM minimo ---------- */
const camel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
class ClassList {
  constructor(el) { this.el = el; }
  _set() { return new Set((this.el._cls || "").split(/\s+/).filter(Boolean)); }
  add(...cs) { const s = this._set(); cs.forEach(c => s.add(c)); this._write(s); }
  remove(...cs) { const s = this._set(); cs.forEach(c => s.delete(c)); this._write(s); }
  toggle(c, force) {
    const s = this._set();
    const on = force === undefined ? !s.has(c) : !!force;
    on ? s.add(c) : s.delete(c); this._write(s); return on;
  }
  contains(c) { return this._set().has(c); }
  _write(s) { this.el._cls = [...s].join(" "); }
}
class El {
  constructor(tag) {
    this.tagName = String(tag).toLowerCase();
    this.children = []; this.childNodes = this.children;
    this.dataset = {}; this.style = {};
    this._listeners = {}; this._attrs = {}; this._text = ""; this._cls = "";
    this.classList = new ClassList(this);
  }
  set className(v) { this._cls = v; }
  get className() { return this._cls; }
  setAttribute(k, v) { this._attrs[k] = String(v); if (k === "class") this._cls = String(v); }
  getAttribute(k) { return this._attrs[k] ?? null; }
  removeAttribute(k) { delete this._attrs[k]; }
  appendChild(c) { c.parent = this; this.children.push(c); return c; }
  append(...cs) { cs.forEach(c => this.appendChild(c instanceof El || c && c.nodeType ? c : textNode(c))); }
  set textContent(v) { this._text = String(v); this.children.length = 0; }
  get textContent() { return this._text + this.children.map(c => c.textContent || "").join(""); }
  addEventListener(t, f) { (this._listeners[t] = this._listeners[t] || []).push(f); }
  click() { (this._listeners.click || []).forEach(f => f({ target: this })); }
  focus() { this._focused = true; }
  scrollIntoView() {}
  after(n) { const i = this.parent.children.indexOf(this); this.parent.children.splice(i + 1, 0, n); n.parent = this.parent; }
  remove() { const i = this.parent.children.indexOf(this); if (i >= 0) this.parent.children.splice(i, 1); this.parent = null; }
  get hidden() { return this._hidden; } set hidden(v) { this._hidden = v; }
  set href(v) { this._attrs.href = v; } get href() { return this._attrs.href; }
  set target(v) { this._attrs.target = v; } get target() { return this._attrs.target; }
  set rel(v) { this._attrs.rel = v; } get rel() { return this._attrs.rel; }
  _descendants(out = []) {
    for (const c of this.children) if (c instanceof El) { out.push(c); c._descendants(out); }
    return out;
  }
  _matchSimple(sel) {
    sel = sel.trim();
    if (sel.startsWith(".")) return (this._cls || "").split(/\s+/).includes(sel.slice(1));
    if (sel.startsWith("[")) {
      const inner = sel.slice(1, -1);
      const [attr, val] = inner.split("=").map(s => s.trim().replace(/^['"]|['"]$/g, ""));
      const real = attr.startsWith("data-") ? this.dataset[camel(attr.slice(5))] : this._attrs[attr];
      if (val === undefined) return real !== undefined;
      return String(real) === val;
    }
    return this.tagName === sel.toLowerCase();
  }
  _matchSelector(sel) {
    const parts = sel.split(/\s+/).filter(Boolean);
    if (!this._matchSimple(parts[parts.length - 1])) return false;
    let node = this.parent;
    for (let i = parts.length - 2; i >= 0; i--) {
      let found = false;
      for (let a = node; a; a = a.parent) if (a._matchSimple(parts[i])) { found = true; node = a.parent; break; }
      if (!found) return false;
    }
    return true;
  }
  querySelectorAll(sel) { return this._descendants().filter(e => e._matchSelector(sel)); }
  querySelector(sel) { return this.querySelectorAll(sel)[0] || null; }
}
const textNode = t => ({ nodeType: 3, textContent: String(t) });
const makeDocument = () => {
  const doc = {
    hidden: false,
    _listeners: {},
    createElement: t => new El(t),
    createElementNS: (ns, t) => new El(t),
    createTextNode: textNode,
    addEventListener(t, f) { (doc._listeners[t] = doc._listeners[t] || []).push(f); },
    removeEventListener() {},
    dispatchEvent(ev) {
      (doc._listeners[ev.type] || []).forEach(f => f(ev));
      return true;
    },
  };
  return doc;
};

/* ---------- almacenamiento y contexto ---------- */
const makeStorage = (init = {}, { failGet = false, failSet = false } = {}) => {
  const m = new Map(Object.entries(init));
  return {
    getItem: k => { if (failGet) throw new Error("denied"); return m.has(k) ? m.get(k) : null; },
    setItem: (k, v) => { if (failSet) throw new Error("denied"); m.set(k, String(v)); },
    removeItem: k => m.delete(k),
    _map: m,
  };
};

const FILES = {
  state: ["shared/learning-state.js", ["LearningState"]],
  quiz: ["shared/quiz.js", ["StudioQuiz"]],
  resources: ["shared/resources.js", ["StudioResources"]],
  map: ["shared/map.js", ["StudioMap"]],
  tracks: ["Labs/tracks.js", ["LABS_TRACKS", "LEGACY_MODULES", "SOURCE_COLLECTIONS"]],
  knowledge: ["Labs/knowledge-map.js", ["KNOWLEDGE_MAP"]],
  challenge: ["shared/challenge.js", ["StudioChallenge"]],
  books: ["Labs/books.js", ["BOOKS", "AMAZON_TAG", "amazonUrl"]],
  bank: ["Labs/bank.js", ["QUESTION_BANK"]],
  margin: ["shared/margin.js", ["StudioMargin"]],
};

function ctx(files, storage, extra = {}) {
  const sandbox = {
    console, URL,
    CustomEvent: class { constructor(type, init = {}) { this.type = type; this.detail = init.detail; } },
    localStorage: storage,
    document: makeDocument(),
    history: { replaceState() {} },
    ...extra,
  };
  sandbox.window = sandbox;
  const context = vm.createContext(sandbox);
  for (const f of files) {
    const [path, names] = Array.isArray(f) ? f : FILES[f];
    const exportNames = names.map(n => `globalThis.${n} = ${n};`).join("");
    vm.runInContext(src(path) + "\n" + exportNames, context, { filename: path });
  }
  return { context, sandbox };
}

const t = (name, fn) => {
  try { fn(); console.log(`ok ${name}`); }
  catch (e) { console.error(`FAIL ${name}\n`, e); process.exitCode = 1; }
};

/* ---------- LearningState ---------- */
t("ids calificados por track no chocan entre temas", () => {
  const { sandbox } = ctx([FILES.state], makeStorage());
  const LS = sandbox.LearningState;
  LS.recordAttempt("ai-math", "01", { correct: 1, total: 2 });
  const a = LS.getLesson("ai-math", "01");
  const b = LS.getLesson("system-design", "01");
  assert.equal(a.completed, true);
  assert.equal(b.completed, false);
  assert.equal(b.attempts, 0);
});

t("legacy done marca completada sin puntaje y nunca se borra", () => {
  const store = makeStorage({ "hypatia.labs.01-bayes.done": "1" });
  const { sandbox } = ctx([FILES.state], store);
  const rec = sandbox.LearningState.getLesson("ai-math", "01-bayes");
  assert.equal(rec.completed, true);
  assert.equal(rec.scoreUnknown, true);
  assert.equal(rec.bestCorrect, null);
  assert.equal(store.getItem("hypatia.labs.01-bayes.done"), "1");
});

t("storage corrupto cae a memoria efimera y lo declara", () => {
  const { sandbox } = ctx([FILES.state], makeStorage({ "hypatia.learning.v1": "{not json" }));
  const LS = sandbox.LearningState;
  assert.equal(LS.persistent, false);
  const rec = LS.recordAttempt("t", "s", { correct: 2, total: 2 });
  assert.equal(rec.completed, true);
});

t("storage bloqueado cae a memoria efimera y lo declara", () => {
  const { sandbox } = ctx([FILES.state], makeStorage({}, { failSet: true }));
  const LS = sandbox.LearningState;
  assert.equal(LS.persistent, false);
  const rec = LS.recordAttempt("t", "s", { correct: 1, total: 1 });
  assert.equal(rec.completed, true);
});

t("racha cuenta dias consecutivos y sobrevive sin actividad hoy", () => {
  const FIXED = Date.parse("2026-11-17T12:00:00");
  class FD extends Date {
    constructor(...a) { super(...(a.length ? a : [FIXED])); }
    static now() { return FIXED; }
  }
  const key = off => {
    const d = new Date(FIXED + off * 86400000);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const store = makeStorage({
    "hypatia.learning.v1": JSON.stringify({
      lessons: {}, resources: [], activityDays: [key(-2), key(-1)],
    }),
  });
  const { sandbox } = ctx([FILES.state], store, { Date: FD });
  const LS = sandbox.LearningState;
  let st = LS.streak();
  assert.equal(st.days, 2); assert.equal(st.activeToday, false);
  LS.visit("t", "s");
  st = LS.streak();
  assert.equal(st.days, 3); assert.equal(st.activeToday, true);
  LS.visit("t", "s");
  assert.equal(JSON.parse(store.getItem("hypatia.learning.v1")).activityDays.length, 3);
});

const streakAt = days => {
  const FIXED = Date.parse("2026-11-17T12:00:00");
  class FD extends Date {
    constructor(...a) { super(...(a.length ? a : [FIXED])); }
    static now() { return FIXED; }
  }
  const key = off => {
    const d = new Date(FIXED + off * 86400000);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const store = makeStorage({
    "hypatia.learning.v1": JSON.stringify({ lessons: {}, resources: [], activityDays: days.map(key) }),
  });
  return ctx([FILES.state], store, { Date: FD }).sandbox.LearningState;
};

t("racha: un dia sin estudiar no la rompe (dia de gracia)", () => {
  const st = streakAt([-4, -3, -1, 0]).streak();
  assert.equal(st.days, 4, "cuenta dias con estudio, salta el hueco de un dia");
  assert.equal(st.activeToday, true);
  assert.equal(st.atRisk, false);
});

t("racha: ayer sin estudiar la deja en riesgo, no en cero", () => {
  const st = streakAt([-3, -2]).streak();
  assert.equal(st.days, 2);
  assert.equal(st.atRisk, true, "hoy es el ultimo dia para mantenerla");
});

t("racha: dos dias seguidos sin estudiar la rompen", () => {
  assert.equal(streakAt([-3]).streak().days, 0);
  assert.equal(streakAt([-6, -5, -2, -1]).streak().days, 2, "hueco de dos dias corta");
});

t("checkIn marca hoy y suma a la racha", () => {
  const LS = streakAt([-1]);
  LS.checkIn();
  const st = LS.streak();
  assert.equal(st.days, 2); assert.equal(st.activeToday, true);
  assert.match(LS.today(), /^2026-11-17$/);
});

t("racha en cero sin dias y activityDays corrupto se sanea", () => {
  const { sandbox } = ctx([FILES.state], makeStorage({
    "hypatia.learning.v1": JSON.stringify({ lessons: {}, resources: [], activityDays: ["ayer", 5] }),
  }));
  const LS = sandbox.LearningState;
  assert.equal(LS.persistent, false);
  const st = LS.streak();
  assert.equal(st.days, 0); assert.equal(st.activeToday, false);
});

/* ---------- StudioQuiz: intentos, mejor score, reintento ---------- */
const buildQuiz = () => {
  const section = new El("section");
  const mk = ok => {
    const q = new El("div"); q.className = "q"; q.dataset.ok = String(ok);
    const opts = new El("div"); opts.className = "opts";
    [0, 1, 2].forEach(() => opts.appendChild(new El("button")));
    q.appendChild(opts);
    const why = new El("div"); why.className = "why"; q.appendChild(why);
    section.appendChild(q);
    return q;
  };
  mk(0); mk(1);
  const done = new El("div"); done.className = "quiz-done";
  done.appendChild(Object.assign(new El("p"), { className: "msg" }));
  section.appendChild(done);
  const retry = new El("button"); retry.dataset.quizRetry = "1";
  done.appendChild(retry);
  section.appendChild(Object.assign(new El("p"), { className: "quiz-status" }));
  section.appendChild(Object.assign(new El("p"), { className: "quiz-live" }));
  return { section, retry };
};

t("un intento cuenta una vez, reintento mejora el mejor resultado", () => {
  const { sandbox } = ctx([FILES.state, FILES.quiz], makeStorage());
  const { section, retry } = buildQuiz();
  sandbox.StudioQuiz.mount(section, { track: "ai-math", slug: "01" });
  const qs = section.querySelectorAll(".q");

  qs[0].querySelectorAll(".opts button")[1].click(); // mal
  qs[0].querySelectorAll(".opts button")[1].click(); // reclic ignorado
  let rec = sandbox.LearningState.getLesson("ai-math", "01");
  assert.equal(rec.attempts, 0); // aun no se completa el intento
  qs[1].querySelectorAll(".opts button")[1].click(); // bien -> fin
  rec = sandbox.LearningState.getLesson("ai-math", "01");
  assert.equal(rec.attempts, 1);
  assert.equal(rec.completed, true);
  assert.equal(rec.lastCorrect, 1);
  assert.equal(rec.bestCorrect, 1);
  assert.equal(rec.total, 2);

  retry.click();
  qs[0].querySelectorAll(".opts button")[0].click(); // bien
  qs[1].querySelectorAll(".opts button")[1].click(); // bien
  rec = sandbox.LearningState.getLesson("ai-math", "01");
  assert.equal(rec.attempts, 2);
  assert.equal(rec.lastCorrect, 2);
  assert.equal(rec.bestCorrect, 2);
});

/* ---------- Recursos: validacion y datos persistidos maliciosos ---------- */
t("addResource rechaza esquemas y credenciales peligrosas", () => {
  const { sandbox } = ctx([FILES.state], makeStorage());
  const LS = sandbox.LearningState;
  const bad = [
    { type: "video", trackId: "x", label: "ok", url: "http://inseguro.example/v" },
    { type: "video", trackId: "x", label: "ok", url: "javascript:alert(1)" },
    { type: "video", trackId: "x", label: "ok", url: "data:text/html,<b>x</b>" },
    { type: "video", trackId: "x", label: "ok", url: "file:///etc/passwd" },
    { type: "video", trackId: "x", label: "ok", url: "https://user:pass@example.com/x" },
    { type: "video", trackId: "x", label: "ok", url: "no-es-url" },
    { type: "video", trackId: "x", label: "ok", url: "https://" },
    { type: "video", trackId: "x", label: "x".repeat(121), url: "https://example.com/v" },
    { type: "video", trackId: "x", label: "ok", url: "https://example.com/" + "a".repeat(2048) },
    { type: "gif", trackId: "x", label: "ok", url: "https://example.com/v" },
  ];
  for (const r of bad) assert.equal(LS.addResource(r).ok, false, r.url || r.label.slice(0, 10));
  const good = LS.addResource({ type: "notebook", trackId: "ai-math", label: "NB", url: "https://example.com/nb" });
  assert.equal(good.ok, true);
  assert.equal(LS.listResources("ai-math").length, 1);
  assert.equal(LS.listResources("system-design").length, 0);
});

t("recursos persistidos maliciosos se descartan al leer", () => {
  const store = makeStorage({
    "hypatia.learning.v1": JSON.stringify({
      lessons: {},
      resources: [
        { type: "video", trackId: "x", label: "malo", url: "javascript:alert(1)" },
        { type: "audio", trackId: "x", label: "<img onerror=x>", url: "https://ok.example/a" },
        { type: "video", trackId: "x", label: "bueno", url: "https://ok.example/v" },
      ],
    }),
  });
  const { sandbox } = ctx([FILES.state], store);
  const list = sandbox.LearningState.listResources();
  assert.equal(list.length, 2);
  assert.ok(list.every(r => r.url.startsWith("https://")));
  assert.ok(list.every(r => typeof r.label === "string"));
});

t("renderList usa propiedades DOM y anchors seguros", () => {
  const { sandbox, context } = ctx([FILES.state, FILES.resources], makeStorage(), {
    LABS_TRACKS: [], SOURCE_COLLECTIONS: [],
  });
  const ul = new El("ul");
  const ok = sandbox.StudioResources.renderList(ul, [
    { type: "notebook", trackId: "x", label: "<img src=x onerror=y>", url: "https://example.com/nb" },
  ]);
  assert.equal(ok, true);
  const a = ul.querySelector("a");
  assert.equal(a.href, "https://example.com/nb");
  assert.equal(a.target, "_blank");
  assert.equal(a.rel, "noopener noreferrer");
  assert.equal(a.innerHTML, undefined);
  assert.equal(a.textContent.includes("<img"), true); // label va como texto, no HTML
});

/* ---------- StudioMap ---------- */
const MAP = {
  version: 1, defaultTopic: "gestion",
  origins: { sb: "Study-buddy" },
  topics: [
    { id: "gestion", title: "Gestion", x: 400, y: 180, description: "d", origins: ["sb"], lessonKeys: [], practicePaths: [], evidence: "e" },
    { id: "matematicas", title: "Matematicas", x: 100, y: 100, description: "d", origins: ["sb"], lessonKeys: ["ai-math/01-bayes"], practicePaths: [], evidence: "e" },
    { id: "sistemas", title: "Sistemas", x: 600, y: 100, description: "d", origins: ["sb"], lessonKeys: [], practicePaths: ["Flashcards/index.html"], evidence: "e" },
  ],
  relations: [
    { id: "r1", from: "gestion", to: "matematicas", type: "curricular", status: "documented", label: "Base", reason: "porque", evidence: "ev" },
    { id: "r2", from: "gestion", to: "sistemas", type: "curricular", status: "proposal", label: "Puente por explorar", reason: "idea", evidence: "ev" },
  ],
};
const TRACKS = [
  { id: "ai-math", lessons: [{ slug: "01-bayes", title: "Bayes" }] },
];

t("seleccion de tema actualiza aria-pressed y aristas", () => {
  const { sandbox } = ctx([FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  const root = new El("div");
  const map = sandbox.StudioMap.mount(root, {
    data: MAP, tracks: TRACKS, homeHref: "index.html", updateUrl: false,
  });
  const nodes = root.querySelectorAll(".map-node");
  assert.equal(nodes.length, 6); // stage + lista movil, mismo tema duplicado
  const gestion = nodes.find(n => n.dataset.topic === "gestion");
  assert.equal(gestion.getAttribute("aria-pressed"), "true");
  map.select("matematicas");
  assert.equal(nodes.find(n => n.dataset.topic === "matematicas").getAttribute("aria-pressed"), "true");
  assert.equal(gestion.getAttribute("aria-pressed"), "false");
});

t("vecino clickable selecciona el tema vecino", () => {
  const { sandbox } = ctx([FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  const root = new El("div");
  const map = sandbox.StudioMap.mount(root, {
    data: MAP, tracks: TRACKS, homeHref: "index.html", updateUrl: false,
  });
  const neighborBtns = root.querySelectorAll(".map-neighbors button");
  assert.ok(neighborBtns.length >= 2, "gestion tiene dos vecinos");
  neighborBtns.find(b => b.textContent.includes("Sistemas")).click();
  const pressed = root.querySelectorAll(".map-node")
    .find(n => n.getAttribute("aria-pressed") === "true");
  assert.equal(pressed.dataset.topic, "sistemas");
});

t("documentada solida vs propuesta punteada", () => {
  const { sandbox } = ctx([FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  const root = new El("div");
  sandbox.StudioMap.mount(root, {
    data: MAP, tracks: TRACKS, homeHref: "index.html", updateUrl: false,
  });
  const lines = root.querySelectorAll("line");
  assert.equal(lines.length, 2);
  const classes = lines.map(l => l.getAttribute("class"));
  assert.ok(classes.some(c => c.includes("proposal")));
  assert.ok(classes.some(c => !c.includes("proposal")));
});

t("lessonKeys resuelven solo lecciones publicadas", () => {
  const { sandbox } = ctx([FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  const SM = sandbox.StudioMap;
  assert.equal(SM.resolveLesson("ai-math/01-bayes", TRACKS, "").href, "Labs/ai-math/01-bayes/index.html");
  assert.equal(SM.resolveLesson("ai-math/99-nope", TRACKS, ""), null);
  assert.equal(SM.resolveLesson("no-track/01", TRACKS, ""), null);
});

t("tema sin leccion no la inventa", () => {
  const { sandbox } = ctx([FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  const root = new El("div");
  sandbox.StudioMap.mount(root, {
    data: MAP, tracks: TRACKS, homeHref: "index.html", updateUrl: false,
  });
  const sistemas = root.querySelectorAll(".map-node").find(n => n.dataset.topic === "sistemas");
  sistemas.click();
  const detail = root.querySelector(".map-detail");
  assert.equal(detail.textContent.includes("por preparar"), true);
  /* Hay enlaces (practica + biblioteca) pero ninguno apunta a una leccion. */
  assert.equal(
    detail.querySelectorAll("a").filter(a => (a.href || "").includes("Labs/")).length, 0);
});

t("detalle del mapa muestra progreso por area con estado real", () => {
  const { sandbox } = ctx([FILES.state, FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  sandbox.LearningState.recordAttempt("ai-math", "01-bayes", { correct: 1, total: 1 });
  const root = new El("div");
  const map = sandbox.StudioMap.mount(root, {
    data: MAP, tracks: TRACKS, homeHref: "index.html", updateUrl: false,
  });
  map.select("matematicas");
  const prog = root.querySelector(".map-progress");
  assert.ok(prog, "linea de progreso presente");
  assert.ok(prog.textContent.includes("1/1"), prog.textContent);
});

t("query param fuera de la lista cae al default", () => {
  const { sandbox } = ctx([FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  const SM = sandbox.StudioMap;
  assert.equal(SM.initialTopic(MAP, "gestion"), "gestion");
  assert.equal(SM.initialTopic(MAP, "matematicas"), "matematicas");
  assert.equal(SM.initialTopic(MAP, "topic-inventado"), "gestion");
  assert.equal(SM.initialTopic(MAP, null), "gestion");
  assert.equal(SM.initialTopic(MAP, "Gestion"), "gestion"); // sin case-insensitive inventado
});

t("mapa real: todos los lessonKeys resuelven contra el registry", () => {
  const { sandbox } = ctx([FILES.tracks, FILES.knowledge, FILES.map], makeStorage());
  const SM = sandbox.StudioMap;
  const KM = sandbox.KNOWLEDGE_MAP, TR = sandbox.LABS_TRACKS;
  assert.equal(KM.version, 1);
  for (const topic of KM.topics) {
    for (const key of topic.lessonKeys || []) {
      const resolved = SM.resolveLesson(key, TR, "");
      assert.ok(resolved, `lessonKey sin leccion publicada: ${key} (tema ${topic.id})`);
    }
  }
  /* Y ninguna leccion publicada queda fuera del mapa. */
  const keysInMap = new Set(KM.topics.flatMap(t2 => t2.lessonKeys || []));
  for (const tr of TR) for (const l of tr.lessons) {
    assert.ok(keysInMap.has(`${tr.id}/${l.slug}`), `leccion sin tema en el mapa: ${tr.id}/${l.slug}`);
  }
});

/* ---------- Regresiones de la revision ---------- */

t("perdida de persistencia tardia reactiva el aviso montado", () => {
  const raw = JSON.stringify({ lessons: {}, resources: [] });
  const store = makeStorage({ "hypatia.learning.v1": raw });
  const realSet = store.setItem;
  store.setItem = (k, v) => {
    if (k === "hypatia.learning.v1") throw new Error("quota");
    realSet(k, v);
  };
  const { sandbox } = ctx([FILES.state], store);
  const warn = new El("div");
  sandbox.LearningState.mountWarning(warn);
  assert.equal(warn.hidden, true); // aun parece persistente
  const rec = sandbox.LearningState.recordAttempt("ai-math", "01-bayes", { correct: 1, total: 1 });
  assert.equal(rec.completed, true); // sigue usable en memoria
  assert.equal(sandbox.LearningState.persistent, false);
  assert.equal(warn.hidden, false); // aviso visible tras perder persistencia
  assert.ok(warn.textContent.length > 10);
  assert.equal(store.getItem("hypatia.learning.v1"), raw); // bytes preservados
});

t("JSON valido con forma invalida se trata como corrupto y se preserva", () => {
  const badShapes = [
    "[]",
    JSON.stringify({ lessons: [], resources: [] }),
    JSON.stringify({ lessons: { "a/b": null }, resources: [] }),
    JSON.stringify({ lessons: { "a/b": 5 }, resources: [] }),
    JSON.stringify({ lessons: { "a/b": "ok" }, resources: [] }),
    JSON.stringify({ lessons: { "a/b": { attempts: 1, bestCorrect: 999, total: 2 } }, resources: [] }),
    JSON.stringify({ lessons: { "a/b": { attempts: 1, lastCorrect: -1, total: 2 } }, resources: [] }),
    JSON.stringify({ lessons: { "a/b": { attempts: 1.5, lastCorrect: 1, total: 2 } }, resources: [] }),
    JSON.stringify({ lessons: { "a/b": { attempts: 1, lastCorrect: 1, total: 0 } }, resources: [] }),
  ];
  for (const bad of badShapes) {
    const store = makeStorage({ "hypatia.learning.v1": bad });
    const { sandbox } = ctx([FILES.state], store);
    assert.equal(sandbox.LearningState.persistent, false, bad.slice(0, 60));
    assert.equal(store.getItem("hypatia.learning.v1"), bad, bad.slice(0, 60));
  }
});

t("recordAttempt exige enteros y 0 <= correct <= total", () => {
  const { sandbox } = ctx([FILES.state], makeStorage());
  const LS = sandbox.LearningState;
  assert.throws(() => LS.recordAttempt("t", "s", { correct: 3, total: 2 }));
  assert.throws(() => LS.recordAttempt("t", "s", { correct: -1, total: 2 }));
  assert.throws(() => LS.recordAttempt("t", "s", { correct: 1.5, total: 2 }));
  assert.throws(() => LS.recordAttempt("t", "s", { correct: 2, total: 2.5 }));
  assert.throws(() => LS.recordAttempt("t", "s", { correct: 0, total: 0 }));
});

t("legacy done solo completa las dos parejas track/slug conocidas", () => {
  const store = makeStorage({ "hypatia.labs.01-bayes.done": "1" });
  const { sandbox } = ctx([FILES.state], store);
  const LS = sandbox.LearningState;
  assert.equal(LS.getLesson("ai-math", "01-bayes").completed, true);
  assert.equal(LS.getLesson("otro-track", "01-bayes").completed, false);
  assert.equal(LS.getLesson("otro-track", "01-bayes").scoreUnknown, false);
});

t("started deriva de lastVisited, no de intentos", () => {
  const { sandbox } = ctx([FILES.state], makeStorage());
  const LS = sandbox.LearningState;
  assert.equal(LS.getLesson("ai-math", "01-bayes").started, false);
  LS.visit("ai-math", "01-bayes");
  const rec = LS.getLesson("ai-math", "01-bayes");
  assert.equal(rec.started, true);
  assert.equal(rec.attempts, 0);
  assert.equal(rec.completed, false);
});

t("areas del mapa alimentan el selector y alias resuelven registros viejos", () => {
  const { sandbox } = ctx([FILES.state, FILES.resources, FILES.knowledge], makeStorage());
  const opts = sandbox.StudioResources.trackOptions();
  assert.equal(opts.length, 8);
  assert.ok(opts.some(o => o.id === "gestion"));
  const LS = sandbox.LearningState;
  LS.addResource({ type: "video", trackId: "ai-math", label: "viejo", url: "https://e.com/v" });
  LS.addResource({ type: "brief", trackId: "gestion", label: "nuevo", url: "https://e.com/b" });
  assert.equal(LS.listResources("matematicas").length, 1); // alias ai-math -> matematicas
  assert.equal(LS.listResources("gestion").length, 1);
  assert.equal(LS.listResources("sistemas").length, 0);
  assert.equal(LS.listResources().length, 2); // biblioteca completa ve ambos
});

t("quiz muestra resultado textual y estados aria", () => {
  const { sandbox } = ctx([FILES.state, FILES.quiz], makeStorage());
  const { section } = buildQuiz();
  sandbox.StudioQuiz.mount(section, { track: "t", slug: "s" });
  const q0 = section.querySelectorAll(".q")[0];
  const btns = q0.querySelectorAll(".opts button");
  btns[1].click();
  const res = q0.querySelector(".q-result");
  assert.ok(res, "falta .q-result");
  assert.ok(res.textContent.includes("Tu respuesta"), res.textContent);
  assert.ok(res.textContent.toLowerCase().includes("correcta"), res.textContent);
  assert.equal(btns[1].getAttribute("aria-pressed"), "true");
  assert.equal(btns[0].getAttribute("aria-disabled"), "true");
});

t("reintento enfoca la primera opcion de la primera pregunta", () => {
  const { sandbox } = ctx([FILES.state, FILES.quiz], makeStorage());
  const { section, retry } = buildQuiz();
  sandbox.StudioQuiz.mount(section, { track: "t", slug: "s" });
  section.querySelectorAll(".q")[0].querySelectorAll(".opts button")[0].click();
  retry.click();
  const firstBtn = section.querySelectorAll(".q")[0].querySelectorAll(".opts button")[0];
  assert.equal(firstBtn._focused, true);
});

t("mapa conserva hash entrante y solo escribe URL al seleccionar", () => {
  const calls = [];
  const { sandbox } = ctx([FILES.map], makeStorage(), {
    LABS_TRACKS: TRACKS,
    location: new URL("http://x/index.html#modules"),
    history: { replaceState: (a, b, u) => calls.push(String(u)) },
  });
  const root = new El("div");
  sandbox.StudioMap.mount(root, {
    data: MAP, tracks: TRACKS, homeHref: "index.html", updateUrl: true,
  });
  assert.equal(calls.length, 0); // el render inicial no toca la URL
  root.querySelectorAll(".map-node").find(n => n.dataset.topic === "sistemas").click();
  assert.equal(calls.length, 1);
  assert.ok(calls[0].includes("topic=sistemas"));
  assert.ok(calls[0].includes("#mapa"));
});

t("clic en vecino restaura foco en el nodo seleccionado", () => {
  const { sandbox } = ctx([FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  const root = new El("div");
  sandbox.StudioMap.mount(root, {
    data: MAP, tracks: TRACKS, homeHref: "index.html", updateUrl: false,
  });
  root.querySelectorAll(".map-neighbors button")
    .find(b => b.textContent.includes("Sistemas")).click();
  const focused = root.querySelectorAll(".map-node").filter(n => n._focused);
  assert.equal(focused.length, 1);
  assert.equal(focused[0].dataset.topic, "sistemas");
});

t("tema vacio emite evento de preseleccion hacia la biblioteca", () => {
  const { sandbox } = ctx([FILES.map], makeStorage(), { LABS_TRACKS: TRACKS });
  const root = new El("div");
  const doc = sandbox.document;
  const seen = [];
  doc.addEventListener("hypatia:resource-preselect", e => seen.push(e.detail));
  sandbox.StudioMap.mount(root, {
    data: MAP, tracks: TRACKS, homeHref: "index.html", updateUrl: false,
  });
  root.querySelectorAll(".map-node").find(n => n.dataset.topic === "sistemas").click();
  const cta = root.querySelector(".map-detail .map-empty a");
  assert.ok(cta, "falta el enlace a biblioteca");
  cta.click();
  assert.equal(seen.length, 1);
  assert.equal(seen[0].topic, "sistemas");
});


t("dos contextos comparten storage: recurso viejo no borra completado", () => {
  const store = makeStorage();
  const home = ctx([FILES.state], store).sandbox.LearningState;
  const lesson = ctx([FILES.state], store).sandbox.LearningState;
  lesson.visit("ai-math", "01-bayes");
  lesson.recordAttempt("ai-math", "01-bayes", { correct: 2, total: 2 });
  /* home quedo con su estado de carga (vacio). Guardar un recurso ahi no
   * debe pisar el completado que la leccion ya escribio. */
  const r = home.addResource({ trackId: "gestion", type: "brief", label: "nota", url: "https://example.com/n" });
  assert.equal(r.ok, true);
  const fresh = ctx([FILES.state], store).sandbox.LearningState;
  const rec = fresh.getLesson("ai-math", "01-bayes");
  assert.equal(rec.completed, true, "el completado sobrevive al guardado del cliente viejo");
  assert.equal(rec.attempts, 1);
  assert.equal(fresh.listResources().length, 1, "el recurso tambien esta");
});

t("contexto viejo incrementa el conteo mas reciente", () => {
  const store = makeStorage();
  const a = ctx([FILES.state], store).sandbox.LearningState;
  const b = ctx([FILES.state], store).sandbox.LearningState;
  a.visit("ai-math", "01-bayes");
  a.recordAttempt("ai-math", "01-bayes", { correct: 1, total: 2 });
  b.recordAttempt("ai-math", "01-bayes", { correct: 2, total: 2 });
  const fresh = ctx([FILES.state], store).sandbox.LearningState;
  const rec = fresh.getLesson("ai-math", "01-bayes");
  assert.equal(rec.attempts, 2, "dos intentos en clientes distintos suman dos");
  assert.equal(rec.bestCorrect, 2, "mejor resultado conservado");
});

t("URL unicode normalizada larga se rechaza, no desaparece", () => {
  const { sandbox } = ctx([FILES.state], makeStorage());
  const LS = sandbox.LearningState;
  const url = "https://example.com/" + "é".repeat(600);
  assert.ok(url.length <= LS.URL_MAX, "la cruda cabe, la normalizada no");
  const res = LS.addResource({ trackId: "gestion", type: "brief", label: "x", url });
  assert.equal(res.ok, false, "debe rechazarla, no aceptarla y perderla");
  assert.ok(res.error && res.error.length > 0);
  assert.equal(LS.listResources().length, 0, "nada quedo guardado");
});

t("URL unicode corta se acepta y sobrevive recarga", () => {
  const store = makeStorage();
  const a = ctx([FILES.state], store).sandbox.LearningState;
  const url = "https://example.com/" + "é".repeat(10);
  const res = a.addResource({ trackId: "gestion", type: "brief", label: "uni", url });
  assert.equal(res.ok, true);
  const b = ctx([FILES.state], store).sandbox.LearningState;
  const list = b.listResources();
  assert.equal(list.length, 1, "sobrevive a la recarga");
  assert.equal(list[0].label, "uni");
});

t("clases del template y lecciones tienen estilo en studio.css", () => {
  const cssText = ["shared/studio.css", "shared/tokens.css"]
    .map(f => readFileSync(join(ROOT_DIR, f), "utf8")).join("\n");
  const defined = new Set([...cssText.matchAll(/\.([a-zA-Z][\w-]*)/g)].map(m => m[1]));
  const hooks = new Set(["quiz-live"]); /* ganchos de JS, sin estilo propio */
  for (const f of ["templates/lab/index.html", "Labs/ai-math/01-bayes/index.html",
                   "Labs/system-design/01-bottleneck/index.html"]) {
    const html = readFileSync(join(ROOT_DIR, f), "utf8");
    const used = [...html.matchAll(/class="([^"]+)"/g)].flatMap(m => m[1].split(/\s+/));
    const missing = [...new Set(used)].filter(c => c && !defined.has(c) && !hooks.has(c));
    assert.deepEqual(missing, [], `${f} usa clases sin estilo`);
  }
});

t("desafio del dia: misma pregunta todo el dia, rota al siguiente", () => {
  const { pick } = ctx(["challenge"], makeStorage()).sandbox.StudioChallenge;
  const items = ["a", "b", "c"];
  assert.equal(pick([], "2026-11-17"), null);
  assert.equal(pick(items, "2026-11-17"), pick(items, "2026-11-17"));
  const seen = new Set(["2026-11-17", "2026-11-18", "2026-11-19"].map(d => pick(items, d)));
  assert.equal(seen.size, 3, "tres dias seguidos dan tres preguntas distintas");
});

t("lecciones publicadas exponen preguntas legibles para el desafio", () => {
  const { LABS_TRACKS } = ctx(["tracks"], makeStorage()).sandbox;
  let total = 0;
  for (const tr of LABS_TRACKS) for (const l of tr.lessons) {
    const html = readFileSync(join(ROOT_DIR, `Labs/${tr.id}/${l.slug}/index.html`), "utf8");
    for (const m of html.matchAll(/<div class="q" data-ok="(\d+)">([\s\S]*?)<\/div>\s*<div class="why">/g)) {
      const opts = (m[2].match(/<button/g) || []).length;
      assert.ok(+m[1] < opts, `${l.slug}: data-ok fuera de rango`);
      total++;
    }
  }
  assert.ok(total >= 2, `se esperaban preguntas, hay ${total}`);
});

t("banco: valid() rechaza borradores, indices fuera de rango y libros inexistentes", () => {
  const { StudioChallenge: C } = ctx(["challenge"], makeStorage()).sandbox;
  const ids = new Map([["mml", {}]]);
  const good = { status: "aprobada", prompt: "p", options: ["a", "b", "c"], ok: 2, why: "w", ref: { book: "mml", where: "cap. 6" } };
  assert.equal(C.valid(good, ids), true);
  assert.equal(C.valid({ ...good, status: "borrador" }, ids), false);
  assert.equal(C.valid({ ...good, ok: 3 }, ids), false);
  assert.equal(C.valid({ ...good, options: ["a", "b"] }, ids), false);
  assert.equal(C.valid({ ...good, ref: { book: "inventado", where: "cap. 1" } }, ids), false);
  assert.equal(C.valid({ ...good, why: " " }, ids), false);
});

t("banco y libros: cada pregunta esta bien formada y cita un libro del catalogo", () => {
  const { QUESTION_BANK, BOOKS, amazonUrl, StudioChallenge: C } =
    ctx(["challenge", "books", "bank"], makeStorage()).sandbox;
  const ids = new Map(BOOKS.map(b => [b.id, b]));
  assert.equal(ids.size, BOOKS.length, "ids de libro unicos");
  for (const b of BOOKS) {
    if (b.free) assert.match(b.free, /^https:\/\//, `${b.id}: enlace gratuito https`);
    const buy = amazonUrl(b);
    if (buy) assert.match(buy, /^https:\/\/www\.amazon\.com\.mx\/s\?k=/);
  }
  const seen = new Set();
  for (const q of QUESTION_BANK) {
    assert.ok(!seen.has(q.id), `id repetido ${q.id}`); seen.add(q.id);
    assert.ok(["borrador", "aprobada"].includes(q.status), `${q.id}: status`);
    assert.equal(C.valid({ ...q, status: "aprobada" }, ids), true, `${q.id}: mal formada`);
  }
});

t("lecciones publicadas: cada seccion tiene un h2 que la nombra", () => {
  const { LABS_TRACKS } = ctx(["tracks"], makeStorage()).sandbox;
  for (const tr of LABS_TRACKS) for (const l of tr.lessons) {
    const html = readFileSync(join(ROOT_DIR, `Labs/${tr.id}/${l.slug}/index.html`), "utf8");
    const sections = [...html.matchAll(/<section([^>]*)>/g)].map(m => m[1]).filter(a => !/biblioteca/.test(a));
    assert.ok(sections.length >= 5, `${l.slug}: pocas secciones`);
    for (const attrs of sections) {
      const id = (attrs.match(/aria-labelledby="([^"]+)"/) || [])[1];
      assert.ok(id, `${l.slug}: seccion sin aria-labelledby`);
      assert.match(html, new RegExp(`<h2 id="${id}">`), `${l.slug}: falta h2 #${id}`);
    }
    assert.match(html, /<nav aria-label="Principal">/, `${l.slug}: nav sin aria-label`);
  }
});

t("nota al margen: cada leccion publicada la trae, con libros del catalogo y video de YouTube", () => {
  const { LABS_TRACKS, BOOKS } = ctx(["tracks", "books"], makeStorage()).sandbox;
  const ids = new Set(BOOKS.map(b => b.id));
  for (const tr of LABS_TRACKS) for (const l of tr.lessons) {
    const m = l.margin;
    assert.ok(m, `${l.slug}: sin nota al margen`);
    assert.ok(m.read.length >= 1, `${l.slug}: sin lectura`);
    for (const r of m.read) assert.ok(ids.has(r.book), `${l.slug}: libro ${r.book} fuera del catalogo`);
    if (m.watch) assert.match(m.watch.url, /^https:\/\/www\.youtube\.com\/watch\?v=/);
    assert.ok(m.try && m.try.trim(), `${l.slug}: sin practica`);
    const html = readFileSync(join(ROOT_DIR, `Labs/${tr.id}/${l.slug}/index.html`), "utf8");
    assert.match(html, /<aside class="margin-note" id="margen"/, `${l.slug}: falta el aside`);
    assert.match(html, /shared\/margin\.js/, `${l.slug}: no carga margin.js`);
    assert.match(html, /Labs\/books\.js|\.\.\/\.\.\/books\.js/, `${l.slug}: no carga books.js`);
  }
});

t("nota al margen: lectura gratis, compra y video con target externo", () => {
  const { StudioMargin, BOOKS, document } = ctx(["books", "margin"], makeStorage()).sandbox;
  const el = document.createElement("aside");
  el.hidden = true;
  StudioMargin.mount(el, {
    read: [{ book: "think-bayes", where: "cap. 2", href: "https://allendowney.github.io/ThinkBayes2/chap02.html" }, { book: "ddia", where: "cap. 1" }],
    watch: { title: "Bayes", by: "3Blue1Brown", url: "https://www.youtube.com/watch?v=x" },
    try: "Explicalo con 1000 personas.",
  }, BOOKS);
  assert.equal(el.hidden, false);
  const links = el._descendants().filter(n => n.tagName === "a");
  const by = txt => links.find(a => a.textContent.includes(txt));
  assert.equal(by("Leer gratis").href, "https://allendowney.github.io/ThinkBayes2/chap02.html");
  assert.match(by("En Amazon").href, /amazon\.com\.mx/);
  assert.equal(by("Bayes").target, "_blank");
  assert.ok(el.textContent.includes("Explicalo con 1000 personas."));

  const empty = document.createElement("aside");
  empty.hidden = true;
  StudioMargin.mount(empty, null, BOOKS);
  assert.equal(empty.hidden, true);
});

console.log(process.exitCode ? "\nFallaron pruebas" : "\nTodas las pruebas del estudio pasaron");