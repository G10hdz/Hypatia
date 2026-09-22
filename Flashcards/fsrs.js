// Motor FSRS-6 para Flashcards: modelo de memoria (S, D, R), máquina de
// estados new/learning/review/relearning, cola de sesión y gamificación.
// Isomorfo: window.FSRS en el browser, module.exports en node.
// Contrato: specs/fsrs-scheduling.md §4-§7.
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FSRS = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const DAY_MS = 864e5;
  const S_MIN = 0.1;
  const AGAIN = 1, HARD = 2, GOOD = 3, EASY = 4;
  const KNOWN_STATES = ['new', 'learning', 'review', 'relearning'];

  // Defaults §4.7 (FSRS-6, 21 pesos, decay aprendible en w[20]).
  const DEFAULT_W = [
    0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001,
    1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014,
    1.8729, 0.5425, 0.0912, 0.0658, 0.1542,
  ];

  const DEFAULTS = {
    w: DEFAULT_W,
    retention: 0.9,           // retención deseada
    maxIvl: 36500,            // días
    learningSteps: [1, 10],   // minutos
    relearningSteps: [10],    // minutos
    fuzz: true,               // ±5% en ivl >= 2.5 días
    learnCap: 20,             // re-encolados por carta y sesión (§10)
  };

  const GAME_DEFAULTS = {
    xpBase: 10,
    xpBonus: [0, 30, 50, 70], // AGAIN, HARD, GOOD, EASY
    comboEvery: 5,            // aciertos consecutivos por escalón de combo
    comboStep: 0.1,           // multiplicador +0.1 por escalón
    comboCap: 2,
  };

  const num = (x) => typeof x === 'number' && Number.isFinite(x);
  const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
  const validSteps = (v) =>
    Array.isArray(v) && v.length > 0 && v.every((s) => num(s) && s > 0);

  // Params corruptos o ausentes -> defaults por clave (§10, REQ-8).
  function sanitizeParams(p) {
    const out = {
      ...DEFAULTS,
      w: DEFAULT_W.slice(),
      learningSteps: DEFAULTS.learningSteps.slice(),
      relearningSteps: DEFAULTS.relearningSteps.slice(),
    };
    if (!p || typeof p !== 'object') return out;
    if (Array.isArray(p.w) && p.w.length === DEFAULT_W.length && p.w.every(num)) out.w = p.w.slice();
    if (num(p.retention) && p.retention > 0 && p.retention < 1) out.retention = p.retention;
    if (num(p.maxIvl) && p.maxIvl >= 1) out.maxIvl = Math.round(p.maxIvl);
    if (validSteps(p.learningSteps)) out.learningSteps = p.learningSteps.slice();
    if (validSteps(p.relearningSteps)) out.relearningSteps = p.relearningSteps.slice();
    if (typeof p.fuzz === 'boolean') out.fuzz = p.fuzz;
    if (num(p.learnCap) && p.learnCap >= 1) out.learnCap = Math.round(p.learnCap);
    return out;
  }

  function sanitizeGameParams(p) {
    const out = { ...GAME_DEFAULTS, xpBonus: GAME_DEFAULTS.xpBonus.slice() };
    if (!p || typeof p !== 'object') return out;
    if (num(p.xpBase) && p.xpBase >= 0) out.xpBase = p.xpBase;
    if (Array.isArray(p.xpBonus) && p.xpBonus.length === 4 && p.xpBonus.every(num)) {
      out.xpBonus = p.xpBonus.slice();
    }
    if (num(p.comboEvery) && p.comboEvery >= 1) out.comboEvery = Math.round(p.comboEvery);
    if (num(p.comboStep) && p.comboStep >= 0) out.comboStep = p.comboStep;
    if (num(p.comboCap) && p.comboCap >= 1) out.comboCap = p.comboCap;
    return out;
  }

  // Normaliza un registro v2; devuelve null si no es objeto.
  function sanitizeCard(c) {
    if (!c || typeof c !== 'object') return null;
    return {
      s: Math.max(num(c.s) ? c.s : S_MIN, S_MIN),
      d: clamp(num(c.d) ? c.d : 5, 1, 10),
      due: num(c.due) ? c.due : 0,
      state: KNOWN_STATES.includes(c.state) ? c.state : 'new',
      step: num(c.step) ? Math.max(0, Math.round(c.step)) : 0,
      reps: num(c.reps) ? Math.max(0, Math.round(c.reps)) : 0,
      lapses: num(c.lapses) ? Math.max(0, Math.round(c.lapses)) : 0,
      lastReview: num(c.lastReview) ? c.lastReview : 0,
    };
  }

  // ---- §4.1 curva de olvido ----
  const decay = (p) => -p.w[20];
  const factor = (p) => Math.pow(0.9, 1 / decay(p)) - 1;

  // R(t, S): probabilidad de recuerdo a los t días. R(S, S) = 0.9.
  function retrievability(tDays, s, p) {
    if (s <= 0) return 0;
    return Math.pow(1 + factor(p) * Math.max(0, tDays) / s, decay(p));
  }

  // ivl_objetivo(S): invierte R para la retención deseada.
  function intervalObjetivo(s, p) {
    return s / factor(p) * (Math.pow(p.retention, 1 / decay(p)) - 1);
  }

  function applyFuzz(ivl, p, rand) {
    if (!p.fuzz || ivl < 2.5) return ivl;
    const d = ivl * 0.05;
    return ivl - d + (rand || Math.random)() * 2 * d;
  }

  // ivl_final = clamp(round(fuzz(ivl_obj)), 1, maxIvl); nunca por debajo del
  // intervalo ya programado en review (§4.6).
  function nextInterval(s, p, rand, prevIvlDays) {
    let ivl = clamp(Math.round(applyFuzz(intervalObjetivo(s, p), p, rand)), 1, p.maxIvl);
    if (num(prevIvlDays) && prevIvlDays > ivl) ivl = Math.min(p.maxIvl, Math.ceil(prevIvlDays));
    return ivl;
  }

  // ---- §4.2 inicialización (primera calificación de una carta nueva) ----
  const initStability = (g, p) => Math.max(p.w[g - 1], S_MIN);
  const initDifficulty = (g, p) => clamp(p.w[4] - Math.exp(p.w[5] * (g - 1)) + 1, 1, 10);

  // ---- §4.3 dificultad (learning y review) ----
  function nextDifficulty(d, g, p) {
    const deltaD = -p.w[6] * (g - 3);
    const x = d + deltaD * (10 - d) / 9;
    const mean = p.w[7] * initDifficulty(EASY, p) + (1 - p.w[7]) * x;
    return clamp(mean, 1, 10);
  }

  // ---- §4.4 estabilidad ----
  function recallStability(d, s, r, g, p) {
    const hardPen = g === HARD ? p.w[15] : 1;
    const easyBon = g === EASY ? p.w[16] : 1;
    return s * (1 + Math.exp(p.w[8]) * (11 - d) * Math.pow(s, -p.w[9])
      * (Math.exp((1 - r) * p.w[10]) - 1) * hardPen * easyBon);
  }

  function forgetStability(d, s, r, p) {
    const post = p.w[11] * Math.pow(d, -p.w[12]) * (Math.pow(s + 1, p.w[13]) - 1)
      * Math.exp((1 - r) * p.w[14]);
    // cota: la estabilidad no crece tras olvido
    return Math.min(post, s / Math.exp(p.w[17] * p.w[18]));
  }

  function shortTermStability(s, g, p) {
    let f = Math.exp(p.w[17] * (g - 3 + p.w[18])) * Math.pow(s, -p.w[19]);
    if (g >= GOOD) f = Math.max(1, f); // good/easy nunca bajan S intra-día
    return s * f;
  }

  // Tupla de intervalos de review con clamps hard<=good<easy (§4.6).
  function reviewIntervals(d, s, r, p, rand, prevIvlDays) {
    let hard = nextInterval(recallStability(d, s, r, HARD, p), p, rand, prevIvlDays);
    let good = nextInterval(recallStability(d, s, r, GOOD, p), p, rand, prevIvlDays);
    let easy = nextInterval(recallStability(d, s, r, EASY, p), p, rand, prevIvlDays);
    hard = Math.min(hard, good);
    good = Math.max(good, hard + 1);
    easy = Math.max(easy, good + 1);
    return {
      hard: Math.min(hard, p.maxIvl),
      good: Math.min(good, p.maxIvl),
      easy: Math.min(easy, p.maxIvl),
    };
  }

  // ---- §4.5 tabla de verdad (estado, grado) -> resultado ----
  // card: {s,d,due,state,step,reps,lapses,lastReview} | null (carta nueva).
  // Devuelve {card, prevState, lapsed, graduated}; no muta el argumento.
  function grade(card, g, now, p, rand) {
    const prev = card && KNOWN_STATES.includes(card.state) ? card.state : 'new';
    const c = card
      ? sanitizeCard(card)
      : { s: 0, d: 5, due: 0, state: 'new', step: 0, reps: 0, lapses: 0, lastReview: 0 };
    const out = { card: c, prevState: prev, lapsed: false, graduated: false };
    const steps = prev === 'relearning' ? p.relearningSteps : p.learningSteps;
    const toReview = () => {
      c.state = 'review';
      c.step = 0;
      c.due = now + nextInterval(c.s, p, rand) * DAY_MS;
      if (prev !== 'review') out.graduated = true;
    };

    if (prev === 'new') {
      c.s = initStability(g, p);
      c.d = initDifficulty(g, p);
      c.lastReview = now;
      if (g === EASY) {
        toReview();
      } else if (g === GOOD && steps.length <= 1) {
        toReview(); // un solo paso configurado: GOOD gradúa directo
      } else if (g === GOOD) {
        c.state = 'learning';
        c.step = 1;
        c.due = now + steps[1] * 6e4;
      } else {
        c.state = 'learning';
        c.step = 0;
        c.due = now + steps[0] * 6e4;
      }
    } else if (prev === 'review') {
      const lastRev = c.lastReview > 0 ? c.lastReview : now;
      const prevIvlDays = Math.max(0, Math.round((c.due - lastRev) / DAY_MS));
      const r = retrievability((now - lastRev) / DAY_MS, c.s, p);
      c.lastReview = now;
      if (g === AGAIN) {
        c.s = forgetStability(c.d, c.s, r, p);
        c.d = nextDifficulty(c.d, g, p);
        c.state = 'relearning';
        c.step = 0;
        c.lapses++;
        c.due = now + p.relearningSteps[0] * 6e4;
        out.lapsed = true;
      } else {
        const ivls = reviewIntervals(c.d, c.s, r, p, rand, prevIvlDays);
        c.s = recallStability(c.d, c.s, r, g, p);
        c.d = nextDifficulty(c.d, g, p);
        c.due = now + (g === HARD ? ivls.hard : g === GOOD ? ivls.good : ivls.easy) * DAY_MS;
      }
    } else {
      // learning | relearning: estabilidad de corto plazo + pasos intra-sesión
      c.s = shortTermStability(c.s, g, p);
      c.d = nextDifficulty(c.d, g, p);
      c.lastReview = now;
      if (g === AGAIN) {
        c.step = 0;
        c.due = now + steps[0] * 6e4;
      } else if (g === HARD) {
        c.due = now + steps[Math.min(c.step, steps.length - 1)] * 6e4;
      } else if (g === GOOD) {
        if (c.step + 1 >= steps.length) toReview();
        else {
          c.step++;
          c.due = now + steps[c.step] * 6e4;
        }
      } else {
        toReview(); // EASY gradúa siempre
      }
    }
    c.reps++;
    return out;
  }

  // Delay (ms) que mostraría cada botón si se calificara ahora.
  // La preview es una simulación de grade() por cada grado.
  function preview(card, now, p, rand) {
    return {
      again: grade(card, AGAIN, now, p, rand).card.due - now,
      hard: grade(card, HARD, now, p, rand).card.due - now,
      good: grade(card, GOOD, now, p, rand).card.due - now,
      easy: grade(card, EASY, now, p, rand).card.due - now,
    };
  }

  // ---- §5 cola de sesión ----
  // vencidas (review/relearning por due asc) -> learning vencido -> nuevas ->
  // futuras. `states` es un array con el registro (o null) de cada carta.
  function buildQueue(states, now) {
    const dueReview = [], dueLearn = [], fresh = [], future = [];
    states.forEach((s, i) => {
      if (!s || !KNOWN_STATES.includes(s.state) || s.state === 'new' || !num(s.due)) {
        return fresh.push(i);
      }
      if (s.due <= now) (s.state === 'learning' ? dueLearn : dueReview).push(i);
      else future.push(i);
    });
    const byDue = (a, b) => states[a].due - states[b].due;
    dueReview.sort(byDue);
    future.sort(byDue);
    return [...dueReview, ...dueLearn, ...fresh, ...future];
  }

  // ---- §6.2 migración v1 -> v2 ----
  // Devuelve el registro v2 o null si la carta arranca como nueva.
  function migrateV1(r, p) {
    if (!r || typeof r !== 'object') return null;
    const ivl = num(r.ivl) ? r.ivl : 0;
    const reps = num(r.reps) ? r.reps : 0;
    if (reps === 0 || ivl <= 0) return null; // ivl=0/reps=0 -> new, se re-aprende (§9.8)
    const s = Math.max(ivl, S_MIN);
    const ef = num(r.ef) ? r.ef : 2.5;
    const denom = Math.exp(p.w[8]) * Math.pow(s, -p.w[9]) * (Math.exp(0.1 * p.w[10]) - 1);
    const d = denom > 0 ? clamp(11 - (ef - 1) / denom, 1, 10) : 10;
    const due = num(r.due) ? r.due : Date.now();
    return {
      s, d, due,
      state: 'review',
      step: 0,
      reps,
      lapses: 0,
      lastReview: due - ivl * DAY_MS,
    };
  }

  // ---- §7 gamificación ----
  function dayKey(ts) {
    const d = new Date(ts);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  // +1 si lastActiveDay fue ayer; reset a 1 tras hueco; no-op el mismo día.
  function updateStreak(streak, ts) {
    const s = streak && typeof streak === 'object' ? streak : { count: 0, lastActiveDay: null };
    const today = dayKey(ts);
    if (s.lastActiveDay === today) return { count: s.count || 0, lastActiveDay: today };
    const count = s.lastActiveDay === dayKey(ts - DAY_MS) ? (s.count || 0) + 1 : 1;
    return { count, lastActiveDay: today };
  }

  // XP = round((base + bonus[g]) * combo). El combo sube +comboStep por cada
  // comboEvery aciertos consecutivos sin AGAIN, con cap comboCap. AGAIN resetea
  // el combo pero siempre suma la base (nunca da 0).
  function applyGame(game, g, ts) {
    const gp = sanitizeGameParams(game && game.params);
    game.streak = updateStreak(game.streak, ts);
    game.combo = g === AGAIN ? 0 : (game.combo || 0) + 1;
    const mult = Math.min(gp.comboCap, 1 + gp.comboStep * Math.floor(game.combo / gp.comboEvery));
    const xp = Math.round((gp.xpBase + (gp.xpBonus[g - 1] || 0)) * mult);
    game.xp = (game.xp || 0) + xp;
    return { xp, mult };
  }

  return {
    AGAIN, HARD, GOOD, EASY, DAY_MS, S_MIN,
    DEFAULTS, DEFAULT_W, GAME_DEFAULTS,
    sanitizeParams, sanitizeGameParams, sanitizeCard,
    retrievability, intervalObjetivo, nextInterval, applyFuzz,
    initStability, initDifficulty, nextDifficulty,
    recallStability, forgetStability, shortTermStability,
    reviewIntervals, grade, preview, buildQueue, migrateV1,
    dayKey, updateStreak, applyGame,
  };
});
