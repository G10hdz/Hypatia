/* learning-state.js — progreso y biblioteca personal de Hypatia.
 * Solo navegador: namespace "hypatia.learning.v1", claves "track/slug".
 * Lee los registros antiguos (hypatia.labs.<slug>.done) como completados sin
 * puntaje; nunca los borra ni les inventa resultados.
 * Si el almacenamiento falla o esta corrupto, trabaja en memoria y lo declara:
 * LearningState.persistent === false.
 */
const LearningState = (() => {
  const KEY = "hypatia.learning.v1";
  const RESOURCE_TYPES = ["notebook", "audio", "video", "brief"];
  const LABEL_MAX = 120;
  const URL_MAX = 2048;
  /* Solo estas parejas track/slug heredan banderas antiguas hypatia.labs.*.done;
   * el mismo slug en otro track no completa nada. */
  const LEGACY_PAIRS = new Set(["ai-math/01-bayes", "system-design/01-bottleneck"]);
  const TOPIC_ALIASES = { "ai-math": "matematicas", "system-design": "sistemas" };
  const canonical = id => TOPIC_ALIASES[id] || id;

  const blank = () => ({ lessons: {}, resources: [] });
  let persistent = false;
  let state = blank();
  const persistenceListeners = new Set();
  const notifyPersistence = () => {
    for (const fn of persistenceListeners) {
      try { fn(persistent); } catch (e) { /* el aviso no debe romper la pagina */ }
    }
  };

  function probe() {
    try {
      const k = "hypatia.probe.v1";
      localStorage.setItem(k, "1");
      localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  }

  /* Estructura valida: objeto raiz, lessons objeto de registros objeto,
   * recursos arreglo. Los conteos son enteros, total > 0, 0 <= correct <= total.
   * Cualquier otra forma cuenta como corrupta: se conservan los bytes crudos,
   * se avisa y se trabaja en memoria para esta sesion. */
  function validLessonRec(rec) {
    if (!rec || typeof rec !== "object" || Array.isArray(rec)) return false;
    for (const f of ["attempts", "lastCorrect", "bestCorrect", "total"]) {
      if (f in rec && !Number.isInteger(rec[f])) return false;
    }
    if ("attempts" in rec && rec.attempts < 0) return false;
    if ("total" in rec && rec.total <= 0) return false;
    for (const f of ["lastCorrect", "bestCorrect"]) {
      if (!(f in rec)) continue;
      if (rec[f] < 0) return false;
      if ("total" in rec && rec[f] > rec.total) return false;
    }
    if ("completed" in rec && typeof rec.completed !== "boolean") return false;
    if ("lastVisited" in rec && typeof rec.lastVisited !== "string") return false;
    return true;
  }

  function validShape(parsed) {
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return false;
    if ("lessons" in parsed) {
      const ls = parsed.lessons;
      if (!ls || typeof ls !== "object" || Array.isArray(ls)) return false;
      for (const k in ls) if (!validLessonRec(ls[k])) return false;
    }
    if ("resources" in parsed && !Array.isArray(parsed.resources)) return false;
    return true;
  }

  function load() {
    persistent = probe();
    if (!persistent) { state = blank(); return; }
    let raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { persistent = false; state = blank(); return; }
    if (!raw) { state = blank(); return; }
    try {
      const parsed = JSON.parse(raw);
      if (!validShape(parsed)) throw new Error("shape");
      state = parsed;
      if (!state.lessons) state.lessons = {};
      if (!state.resources) state.resources = [];
    } catch (e) {
      /* Corrupto o con forma invalida: no reescribimos, queda efimero. */
      persistent = false;
      state = blank();
    }
  }
  load();

  function save() {
    if (!persistent) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      persistent = false;
      notifyPersistence();
    }
  }

  /* Otra pestana o pagina pudo escribir KEY despues de que este contexto
   * cargo. Antes de cada mutacion se relee el estado persistido y la
   * operacion se aplica sobre lo mas reciente; si la lectura falla o lo
   * guardado esta corrupto, se conservan los bytes crudos y la sesion sigue
   * en memoria con el aviso ya montado. Cubre ediciones secuenciales de
   * pestanas viejas; no es transaccion para escrituras simultaneas. */
  function refresh() {
    if (!persistent) return;
    let raw;
    try { raw = localStorage.getItem(KEY); }
    catch (e) { persistent = false; notifyPersistence(); return; }
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (!validShape(parsed)) throw new Error("shape");
      state = parsed;
      if (!state.lessons) state.lessons = {};
      if (!state.resources) state.resources = [];
    } catch (e) {
      persistent = false;
      notifyPersistence();
    }
  }

  const key = (track, slug) => `${track}/${slug}`;

  function legacyDone(track, slug) {
    if (!LEGACY_PAIRS.has(key(track, slug))) return false;
    try {
      return localStorage.getItem(`hypatia.labs.${slug}.done`) === "1" ||
             localStorage.getItem(`hypatia.labs.${slug}.done`) === "true";
    } catch (e) {
      return false;
    }
  }

  function getLesson(track, slug) {
    const rec = state.lessons[key(track, slug)] || {};
    const legacy = legacyDone(track, slug);
    const completed = !!rec.completed || legacy;
    const bestCorrect = Number.isFinite(rec.bestCorrect) ? rec.bestCorrect : null;
    return {
      track, slug,
      completed,
      started: completed || rec.lastVisited != null || (Number.isFinite(rec.attempts) && rec.attempts > 0),
      attempts: Number.isFinite(rec.attempts) ? rec.attempts : 0,
      lastCorrect: Number.isFinite(rec.lastCorrect) ? rec.lastCorrect : null,
      bestCorrect,
      total: Number.isFinite(rec.total) ? rec.total : null,
      lastVisited: typeof rec.lastVisited === "string" ? rec.lastVisited : null,
      scoreUnknown: legacy && bestCorrect === null,
    };
  }

  function visit(track, slug) {
    refresh();
    const k = key(track, slug);
    const rec = state.lessons[k] || {};
    rec.lastVisited = new Date().toISOString();
    state.lessons[k] = rec;
    save();
    return getLesson(track, slug);
  }

  function recordAttempt(track, slug, { correct, total }) {
    if (!Number.isInteger(correct) || !Number.isInteger(total) ||
        total <= 0 || correct < 0 || correct > total) {
      throw new RangeError("recordAttempt necesita enteros con 0 <= correct <= total");
    }
    refresh();
    const k = key(track, slug);
    const rec = state.lessons[k] || {};
    rec.attempts = (Number.isFinite(rec.attempts) ? rec.attempts : 0) + 1;
    rec.lastCorrect = correct;
    rec.bestCorrect = Math.max(correct, Number.isFinite(rec.bestCorrect) ? rec.bestCorrect : -1);
    rec.total = total;
    rec.completed = true;
    rec.lastVisited = new Date().toISOString();
    state.lessons[k] = rec;
    save();
    return getLesson(track, slug);
  }

  /* Un recurso: {trackId, type, label, url}. Solo HTTPS, sin credenciales. */
  function validateResource(r) {
    if (!r || typeof r !== "object") return { ok: false, error: "Formato de enlace invalido." };
    if (!RESOURCE_TYPES.includes(r.type)) return { ok: false, error: "Tipo de recurso no permitido." };
    if (typeof r.trackId !== "string" || !r.trackId.trim()) {
      return { ok: false, error: "Falta el tema del enlace." };
    }
    const label = typeof r.label === "string" ? r.label.trim() : "";
    if (!label || label.length > LABEL_MAX) {
      return { ok: false, error: `El nombre debe tener entre 1 y ${LABEL_MAX} caracteres.` };
    }
    const url = typeof r.url === "string" ? r.url.trim() : "";
    if (!url || url.length > URL_MAX) {
      return { ok: false, error: `La URL debe tener entre 1 y ${URL_MAX} caracteres.` };
    }
    let parsed;
    try {
      parsed = new URL(url);
    } catch (e) {
      return { ok: false, error: "La URL no es valida." };
    }
    if (parsed.protocol !== "https:") {
      return { ok: false, error: "Solo se aceptan enlaces HTTPS." };
    }
    if (parsed.username || parsed.password) {
      return { ok: false, error: "La URL no puede incluir usuario ni contrasena." };
    }
    if (!parsed.hostname) return { ok: false, error: "La URL no es valida." };
    /* Se guarda y se relee la forma canonica (unicode se normaliza a
     * percent-encoding y puede triplicar el largo): el limite aplica a
     * parsed.href, no solo a la cadena cruda, o el enlace desaparece al
     * listarse. */
    if (parsed.href.length > URL_MAX) {
      return { ok: false, error: `La URL debe tener entre 1 y ${URL_MAX} caracteres.` };
    }
    return {
      ok: true,
      resource: { trackId: r.trackId.trim(), type: r.type, label, url: parsed.href },
    };
  }

  function listResources(trackId) {
    const all = Array.isArray(state.resources) ? state.resources : [];
    const valid = all
      .map(validateResource)
      .filter(v => v.ok)
      .map(v => v.resource);
    return trackId ? valid.filter(r => canonical(r.trackId) === canonical(trackId)) : valid;
  }

  function addResource(r) {
    const v = validateResource(r);
    if (!v.ok) return v;
    refresh();
    if (!Array.isArray(state.resources)) state.resources = [];
    state.resources.push(v.resource);
    save();
    return { ok: true, resource: v.resource };
  }

  /* Aviso visible cuando no hay persistencia. Suscrito: si una escritura
   * posterior falla, el aviso aparece aunque al montar pareciera disponible. */
  function mountWarning(el) {
    if (!el) return;
    const paint = ok => {
      if (ok) {
        el.textContent = "";
        el.hidden = true;
      } else {
        el.hidden = false;
        el.textContent =
          "El almacenamiento de este navegador no esta disponible o no se pudo leer. " +
          "Puedes usar la pagina, pero los cambios de esta sesion no se guardaran.";
      }
    };
    paint(persistent);
    persistenceListeners.add(paint);
  }

  return {
    KEY, RESOURCE_TYPES, LABEL_MAX, URL_MAX,
    get persistent() { return persistent; },
    key, canonical, getLesson, visit, recordAttempt,
    validateResource, listResources, addResource, mountWarning,
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = LearningState;
