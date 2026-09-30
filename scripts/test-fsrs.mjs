#!/usr/bin/env node
// test-fsrs.mjs — tabla de verdad del motor FSRS-6 (specs/fsrs-scheduling.md
// §4-§7) más un smoke del script de index.html contra un DOM stub.
// Uso: node scripts/test-fsrs.mjs   (sin dependencias)
import { readFileSync } from 'fs';
import vm from 'vm';

const fsrsModule = { exports: {} };
vm.runInNewContext(readFileSync(new URL('../Flashcards/fsrs.js', import.meta.url), 'utf8'), { module: fsrsModule, console });
const FSRS = fsrsModule.exports;

let pass = 0, fail = 0;
const ok = (cond, name) => {
  if (cond) { pass++; console.log(`ok   ${name}`); }
  else { fail++; console.error(`FAIL ${name}`); }
};
const eq = (a, b, name) => ok(Object.is(a, b), `${name} (got ${a}, want ${b})`);
const approx = (a, b, name, eps = 1e-6) =>
  ok(Math.abs(a - b) < eps, `${name} (got ${a}, want ~${b})`);

const P = FSRS.sanitizeParams();
const T0 = Date.parse('2026-01-15T12:00:00Z'); // mediodía UTC: robusto a TZ
const mid = () => 0.5;                         // rand neutro: fuzz = ivl
const MIN = 6e4, DAY = FSRS.DAY_MS;

const reviewCard = (over = {}) => ({
  s: 5, d: 5, due: T0, state: 'review', step: 0, reps: 3, lapses: 0,
  lastReview: T0 - 5 * DAY, ...over,
});
const learnCard = (over = {}) => ({
  s: 2, d: 5, due: T0, state: 'learning', step: 0, reps: 1, lapses: 0,
  lastReview: T0, ...over,
});

// ---------- §4.1 curva de olvido ----------
approx(FSRS.retrievability(5, 5, P), 0.9, 'R(t=S)=0.9', 1e-9);
approx(FSRS.intervalObjetivo(7, P), 7, 'ivl_objetivo(S, retention=0.9)=S');
ok(FSRS.retrievability(10, 5, P) < FSRS.retrievability(2, 5, P), 'R decrece con t');

// ---------- §4.2 / REQ-3: S0/D0 por grado en new ----------
for (const g of [FSRS.AGAIN, FSRS.HARD, FSRS.GOOD, FSRS.EASY]) {
  const r = FSRS.grade(null, g, T0, P, mid);
  approx(r.card.s, Math.max(P.w[g - 1], 0.1), `new+g${g}: S0 = w[${g - 1}]`);
  const d0 = Math.min(10, Math.max(1, P.w[4] - Math.exp(P.w[5] * (g - 1)) + 1));
  approx(r.card.d, d0, `new+g${g}: D0`);
}
{
  const a = FSRS.grade(null, FSRS.AGAIN, T0, P, mid).card;
  eq(a.state, 'learning', 'new+AGAIN -> learning');
  eq(a.step, 0, 'new+AGAIN -> step 0');
  eq(a.due, T0 + P.learningSteps[0] * MIN, 'new+AGAIN -> paso[0]');
  const h = FSRS.grade(null, FSRS.HARD, T0, P, mid).card;
  eq(h.state, 'learning', 'new+HARD -> learning');
  eq(h.due, T0 + P.learningSteps[0] * MIN, 'new+HARD -> paso[0]');
  const g = FSRS.grade(null, FSRS.GOOD, T0, P, mid).card;
  eq(g.state, 'learning', 'new+GOOD -> learning (2 pasos)');
  eq(g.step, 1, 'new+GOOD -> step 1');
  eq(g.due, T0 + P.learningSteps[1] * MIN, 'new+GOOD -> paso[1]');
  const e = FSRS.grade(null, FSRS.EASY, T0, P, mid);
  eq(e.card.state, 'review', 'new+EASY -> review');
  ok(e.graduated, 'new+EASY marca graduated');
  ok(e.card.due > T0 + DAY, 'new+EASY -> ivl en días');
  // con un solo paso configurado, GOOD gradúa directo (§4.5 nota)
  const P1 = FSRS.sanitizeParams({ learningSteps: [1] });
  eq(FSRS.grade(null, FSRS.GOOD, T0, P1, mid).card.state, 'review',
    'new+GOOD con 1 paso -> review');
}

// ---------- §4.3: D' baja con EASY, sube con AGAIN ----------
{
  const dEasy = FSRS.grade(reviewCard(), FSRS.EASY, T0, P, mid).card.d;
  const dAgain = FSRS.grade(reviewCard(), FSRS.AGAIN, T0, P, mid).card.d;
  const dGood = FSRS.grade(reviewCard(), FSRS.GOOD, T0, P, mid).card.d;
  ok(dEasy < 5, `review+EASY baja D (${dEasy.toFixed(2)} < 5)`);
  ok(dAgain > 5, `review+AGAIN sube D (${dAgain.toFixed(2)} > 5)`);
  ok(dGood < 5, `review+GOOD baja D leve (${dGood.toFixed(2)} < 5)`);
}

// ---------- §4.4 recall: S' crece más con R bajo (REQ-4) ----------
{
  const sEarly = FSRS.grade(reviewCard({ lastReview: T0 - DAY }), FSRS.GOOD, T0, P, mid).card.s;
  const sLate = FSRS.grade(reviewCard({ lastReview: T0 - 30 * DAY }), FSRS.GOOD, T0, P, mid).card.s;
  ok(sEarly > 5, `S'_recall crece (${sEarly.toFixed(2)} > 5)`);
  ok(sLate > sEarly, `S'_recall mayor repasando tarde (${sLate.toFixed(2)} > ${sEarly.toFixed(2)})`);
  ok(FSRS.retrievability(30, 5, P) < FSRS.retrievability(1, 5, P),
    'R más bajo tras 30d que tras 1d');
}

// ---------- §4.4 olvido / REQ-2 ----------
{
  const r = FSRS.grade(reviewCard({ s: 20, lastReview: T0 - 40 * DAY }), FSRS.AGAIN, T0, P, mid);
  ok(r.lapsed, 'review+AGAIN marca lapsed');
  eq(r.card.state, 'relearning', 'review+AGAIN -> relearning');
  eq(r.card.lapses, 1, 'review+AGAIN -> lapses++');
  ok(r.card.s < 20, `S'_olvido < S (${r.card.s.toFixed(2)} < 20)`);
  eq(r.card.due, T0 + P.relearningSteps[0] * MIN, 'review+AGAIN -> paso_relearning[0]');
  ok(FSRS.forgetStability(5, 10, 0.9, P) <= 10, 'forgetStability <= S (cota)');
  ok(FSRS.forgetStability(2, 30, 0.7, P) <= 30, 'forgetStability <= S con R bajo');
}

// ---------- §4.4 corto: good/easy nunca bajan S ----------
{
  ok(FSRS.grade(learnCard(), FSRS.GOOD, T0, P, mid).card.s >= 2,
    'learning+GOOD no baja S');
  ok(FSRS.grade(learnCard(), FSRS.EASY, T0, P, mid).card.s >= 2,
    'learning+EASY no baja S');
  ok(FSRS.shortTermStability(0.3, FSRS.GOOD, P) >= 0.3,
    'shortTerm GOOD >= S con S mínima');
  // learning+GOOD a mitad de pasos avanza; en el último gradúa
  const adv = FSRS.grade(learnCard({ step: 0 }), FSRS.GOOD, T0, P, mid).card;
  eq(adv.state, 'learning', 'learning+GOOD (paso 0) -> learning');
  eq(adv.step, 1, 'learning+GOOD avanza a step 1');
  eq(adv.due, T0 + P.learningSteps[1] * MIN, 'learning+GOOD -> próximo paso');
  const fin = FSRS.grade(learnCard({ step: P.learningSteps.length - 1 }), FSRS.GOOD, T0, P, mid);
  eq(fin.card.state, 'review', 'learning+GOOD último paso -> review');
  ok(fin.graduated, 'learning->review marca graduated');
  // learning+HARD repite el paso actual
  const rep = FSRS.grade(learnCard({ step: 1 }), FSRS.HARD, T0, P, mid).card;
  eq(rep.step, 1, 'learning+HARD repite paso');
  eq(rep.due, T0 + P.learningSteps[1] * MIN, 'learning+HARD -> paso actual');
  // learning+AGAIN reinicia pasos
  const rst = FSRS.grade(learnCard({ step: 1 }), FSRS.AGAIN, T0, P, mid).card;
  eq(rst.step, 0, 'learning+AGAIN reinicia a step 0');
  eq(rst.due, T0 + P.learningSteps[0] * MIN, 'learning+AGAIN -> paso[0]');
  // relearning usa sus propios pasos y gradúa a review
  const rl = FSRS.grade(
    learnCard({ state: 'relearning', step: P.relearningSteps.length - 1 }),
    FSRS.GOOD, T0, P, mid).card;
  eq(rl.state, 'review', 'relearning+GOOD completa -> review');
}

// ---------- §4.6 / REQ-5: orden de intervalos hard<=good<easy ----------
for (const [d, s, r] of [[5, 5, 0.9], [10, 100, 0.5], [1, 0.2, 0.99], [7, 30, 0.9]]) {
  const iv = FSRS.reviewIntervals(d, s, r, P, mid, 0);
  ok(iv.hard <= iv.good && iv.good >= iv.hard + 1 && iv.easy >= iv.good + 1,
    `REQ-5 ivl hard<=good<easy (d=${d}, s=${s}, r=${r}) -> ${iv.hard}/${iv.good}/${iv.easy}`);
}
{
  // la preview de una carta review respeta el mismo orden (en ms)
  const pv = FSRS.preview(reviewCard(), T0, P, mid);
  ok(pv.hard <= pv.good && pv.easy >= pv.good + DAY,
    'REQ-5 preview de botones monótona');
  // fuzz nunca devuelve ivl menor al ya programado en review
  const iv = FSRS.reviewIntervals(5, 5, 0.9, P, () => 0, 30); // rand=0 -> fuzz -5%
  ok(iv.hard >= 30 && iv.good >= 31 && iv.easy >= 32,
    `REQ-5 ivl nunca < previo en review -> ${iv.hard}/${iv.good}/${iv.easy}`);
  // clamp [1, maxIvl]
  ok(FSRS.nextInterval(0.01, P, mid) >= 1, 'ivl mínimo 1 día');
  ok(FSRS.nextInterval(1e9, P, mid) <= P.maxIvl, 'ivl acotado por maxIvl');
}

// ---------- §5 / REQ-6: orden de cola ----------
{
  const q = FSRS.buildQueue([
    { state: 'review', due: T0 - 100 },      // 0: vencida (3ª por due)
    { state: 'new' },                        // 1: nueva
    null,                                    // 2: nueva
    { state: 'learning', due: T0 - 50 },     // 3: learning vencido
    { state: 'review', due: T0 + DAY },      // 4: futura
    { state: 'review', due: T0 - 200 },      // 5: vencida (2ª por due)
    { state: 'relearning', due: T0 - 300 },  // 6: relearning vencida (1ª)
  ], T0);
  eq(JSON.stringify(q), JSON.stringify([6, 5, 0, 3, 1, 2, 4]),
    `REQ-6 orden de cola (got ${q})`);
}

// ---------- REQ-1: AGAIN re-encola dentro de la sesión ----------
{
  const a = FSRS.grade(null, FSRS.AGAIN, T0, P, mid).card; // due = T0+1min
  const matured = T0 + P.learningSteps[0] * MIN + 1;
  eq(FSRS.buildQueue([a, null], matured)[0], 0,
    'REQ-1: paso madurado vuelve antes que una nueva');
  eq(FSRS.buildQueue([a, null], T0)[0], 1,
    'REQ-1: antes de madurar el paso va primero la nueva');
}

// ---------- §6.2 / REQ-7: migración v1 -> v2 ----------
{
  const m = FSRS.migrateV1({ ef: 2.5, ivl: 7, due: T0, reps: 5 }, P);
  approx(m.s, 7, 'migración: S = ivl');
  ok(m.d >= 1 && m.d <= 10, `migración: D en [1,10] (${m.d.toFixed(2)})`);
  eq(m.due, T0, 'migración: due conservado');
  eq(m.state, 'review', 'migración: state review');
  eq(m.lapses, 0, 'migración: lapses 0');
  eq(m.reps, 5, 'migración: reps conservado');
  approx(m.lastReview, T0 - 7 * DAY, 'migración: lastReview = due - ivl·día');
  eq(FSRS.migrateV1({ ef: 2.5, ivl: 0, due: T0, reps: 3 }, P), null,
    'migración: ivl=0 -> new (sin registro)');
  eq(FSRS.migrateV1({ ef: 2.5, ivl: 9, due: T0, reps: 0 }, P), null,
    'migración: reps=0 -> new (sin registro)');
  const low = FSRS.migrateV1({ ef: 1.4, ivl: 7, due: T0, reps: 5 }, P);
  const high = FSRS.migrateV1({ ef: 3.0, ivl: 7, due: T0, reps: 5 }, P);
  ok(low.d > high.d, 'migración: ef bajo -> D más alto');
}

// ---------- params: defaults y sanitización (§4.7, §10, REQ-8) ----------
{
  const bad = FSRS.sanitizeParams({
    w: [1, 2, 3], retention: 7, maxIvl: -1,
    learningSteps: 'x', relearningSteps: [0, -2], fuzz: 'si', learnCap: 0,
  });
  eq(bad.w.length, 21, 'w de longitud != 21 -> default');
  eq(bad.retention, 0.9, 'retention corrupta -> 0.9');
  eq(bad.maxIvl, 36500, 'maxIvl corrupto -> 36500');
  eq(JSON.stringify(bad.learningSteps), '[1,10]', 'learningSteps corruptos -> [1,10]');
  eq(JSON.stringify(bad.relearningSteps), '[10]', 'relearningSteps corruptos -> [10]');
  eq(bad.fuzz, true, 'fuzz corrupto -> true');
  const wCustom = Array(21).fill(0.5);
  eq(FSRS.sanitizeParams({ w: wCustom }).w[20], 0.5, 'w válido editable se respeta');
  const P8 = FSRS.sanitizeParams({ retention: 0.8 });
  ok(FSRS.intervalObjetivo(10, P8) !== FSRS.intervalObjetivo(10, P),
    'REQ-8: retention editable cambia intervalos');
}

// ---------- §7 / REQ-9, REQ-11: XP, combo, racha ----------
{
  const mk = () => ({ xp: 0, combo: 0, streak: { count: 0, lastActiveDay: null },
    params: FSRS.sanitizeGameParams() });
  let gm = mk();
  eq(FSRS.applyGame(gm, FSRS.AGAIN, T0).xp, 10, 'XP AGAIN = base 10 (>0)');
  eq(gm.combo, 0, 'AGAIN resetea combo');
  gm = mk();
  eq(FSRS.applyGame(gm, FSRS.GOOD, T0).xp, 60, 'XP GOOD = 10+50');
  eq(FSRS.applyGame(gm, FSRS.HARD, T0).xp, 40, 'XP HARD = 10+30');
  eq(FSRS.applyGame(gm, FSRS.EASY, T0).xp, 80, 'XP EASY = 10+70');
  gm = mk();
  let xp = 0;
  for (let k = 0; k < 5; k++) xp = FSRS.applyGame(gm, FSRS.GOOD, T0).xp;
  eq(xp, 66, 'combo x1.1 al 5to acierto (60*1.1=66)');
  gm = mk();
  for (let k = 0; k < 60; k++) xp = FSRS.applyGame(gm, FSRS.GOOD, T0).xp;
  eq(xp, 120, 'combo cap x2 (60*2=120)');

  const d = (off) => new Date(2026, 0, 15 + off, 12).getTime(); // mediodía local
  let st = FSRS.updateStreak({ count: 0, lastActiveDay: null }, d(0));
  eq(st.count, 1, 'racha: primer día -> 1');
  st = FSRS.updateStreak(st, d(0) + 3600e3);
  eq(st.count, 1, 'racha: mismo día no duplica');
  st = FSRS.updateStreak(st, d(1));
  eq(st.count, 2, 'racha: día consecutivo -> +1');
  st = FSRS.updateStreak(st, d(3));
  eq(st.count, 1, 'racha: hueco de 2 días -> reset a 1');
}

// ---------- smoke: index.html contra DOM stub ----------
{
  const html = readFileSync(new URL('../Flashcards/index.html', import.meta.url), 'utf8');
  const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('\n');
  ok(inline.length > 0, 'smoke: script inline encontrado');

  const els = {};
  const el = () => ({
    innerHTML: '', textContent: '', className: '', hidden: false, style: {},
    classList: { add() {}, remove() {}, toggle() {} },
    addEventListener() {}, appendChild() {}, onclick: null,
  });
  const storage = {
    // siembra v1: carta 0 con historial, carta 1 con ivl=0 (-> new), carta 2 sin tocar
    'hypatia-flashcards.srs.v1': JSON.stringify({
      demo: { 0: { ef: 2.5, ivl: 7, due: T0 - 100, reps: 5 }, 1: { ef: 1.8, ivl: 0, due: 0, reps: 2 } },
    }),
  };
  const ctx = {
    console,
    window: {
      FLASHCARD_DECKS: {
        demo: { title: 'Demo', cards: [{ front: 'q0', back: 'a0' }, { front: 'q1', back: 'a1' }, { front: 'q2', back: 'a2' }] },
      },
    },
    document: {
      getElementById: (id) => els[id] || (els[id] = el()),
      querySelector: (sel) => els['@' + sel] || (els['@' + sel] = el()),
      createElement: () => el(),
      addEventListener() {},
    },
    localStorage: {
      getItem: (k) => (k in storage ? storage[k] : null),
      setItem: (k, v) => { storage[k] = String(v); },
      removeItem: (k) => { delete storage[k]; },
    },
    setInterval: () => 0,
    setTimeout: () => 0,
    clearTimeout: () => {},
  };
  vm.createContext(ctx);
  vm.runInContext(
    readFileSync(new URL('../Flashcards/fsrs.js', import.meta.url), 'utf8'),
    ctx, { filename: 'fsrs.js' });
  vm.runInContext(inline, ctx, { filename: 'index.html:inline' });

  const v2 = JSON.parse(storage['hypatia-flashcards.srs.v2'] || 'null');
  ok(v2 && v2.version === 2 && v2.decks && v2.decks.demo, 'smoke: store v2 escrito al migrar');
  if (v2) {
    approx(v2.decks.demo['0'].s, 7, 'smoke: migración S = ivl');
    eq(v2.decks.demo['0'].due, T0 - 100, 'smoke: migración conserva due');
    eq(v2.decks.demo['0'].state, 'review', 'smoke: migración state review');
    eq(v2.decks.demo['1'], undefined, 'smoke: ivl=0 migra a new (sin registro)');
  }
  ok('demo' in JSON.parse(storage['hypatia-flashcards.srs.v1']),
    'smoke: v1 intacto tras migración (rollback)');
  ok(els['front-text'].textContent === 'q0',
    'smoke: primera en cola es la vencida migrada');

  // AGAIN sobre la carta vencida -> relearning + lapse, queda re-encolada
  els['btn-again'].onclick();
  const v2b = JSON.parse(storage['hypatia-flashcards.srs.v2']);
  eq(v2b.decks.demo['0'].state, 'relearning', 'smoke: AGAIN en review -> relearning');
  eq(v2b.decks.demo['0'].lapses, 1, 'smoke: lapse persistido');
  const game = JSON.parse(storage['hypatia-flashcards.game.v1']);
  ok(game && game.xp >= 10 && game.streak.count === 1, 'smoke: XP y racha persistidas');
  ok(els['front-text'].textContent !== 'q0',
    'smoke: la carta en relearning espera su paso, no se repite al instante');
}

console.log(`\n${pass} ok, ${fail} fallos`);
process.exit(fail ? 1 : 0);
