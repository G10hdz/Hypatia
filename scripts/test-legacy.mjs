import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import * as vm from "node:vm";

const read = path => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const engine = read("shared/engine.js");
const pages = ["CubPrep/index.html", "MLOps/index.html", "SAA-C03/index.html"];

{
  const elements = new Map();
  const timers = new Set();
  const storage = new Map();
  let now = Date.now();
  const element = () => ({
    style: {}, classList: { add() {}, remove() {}, toggle() {} },
    addEventListener(type, listener) { this[type] = listener; },
    appendChild() {}, closest() { return this; },
    querySelector: () => ({}), querySelectorAll: () => [],
  });
  const mockCard = { ...element(), dataset: { mode: "mock" } };
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, element());
      return elements.get(id);
    },
    createElement: element, addEventListener() {}, querySelector: () => null,
    querySelectorAll: selector => selector === ".mode-card" ? [mockCard] : [],
  };
  const ctx = vm.createContext({
    window: { scrollTo() {} }, document, performance, requestAnimationFrame() {},
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key),
    },
    Date: class extends Date { static now() { return now; } },
    setInterval(fn) { timers.add(fn); return fn; },
    clearInterval: fn => timers.delete(fn),
    setTimeout: fn => fn(),
  });
  for (const file of ["SAA-C03/questions.js", "SAA-C03/module.js", "shared/shuffle-options.js", "shared/engine.js"]) {
    vm.runInContext(read(file), ctx, { filename: file });
  }
  assert.equal(ctx.window.HYPATIA_MODULE.storagePrefix, "prepaws.", "PrepAWS conserva el progreso guardado");
  for (const question of ctx.window.QUESTIONS) {
    assert.ok(question.opciones.every(option => option.trim() && !option.includes("<details>")),
      `La pregunta ${question.id} debe ofrecer opciones sin revelar la respuesta`);
  }
  mockCard.click();
  elements.get("start-form").submit({ preventDefault() {} });
  assert.equal(elements.get("quiz-progress").textContent, "Pregunta 1 / 65");
  assert.equal(elements.get("quiz-timer").textContent, "2:10:00");
  for (let second = 0; second < 130 * 60; second++) {
    now += 1000;
    for (const tick of timers) tick();
  }
  assert.match(elements.get("report-summary").innerHTML, /Simulacro de examen/);
  const reports = JSON.parse(storage.get("prepaws.mock-history.v1"));
  assert.equal(reports.length, 1);
  assert.equal(reports[0].total, 65);
  const distribution = Object.fromEntries(
    Object.entries(reports[0].subjectBreakdown).map(([subject, result]) => [subject, result.total])
  );
  assert.deepEqual(distribution, {
    "Design Secure Architectures": 19,
    "Design Resilient Architectures": 17,
    "Design High-Performing Architectures": 16,
    "Design Cost-Optimized Architectures": 13,
  });
}

const removed = [
  "xp-pop", "xp-toast", "confetti", "avatar", "quiz-combo", "quiz-streak-fire",
  "top-streak-pill", "top-best-pill", "stat-streak", "top-total-points", "report-points",
  "report-banner", "showXp", "calculatePoints", "tickPts", "updateComboUI",
  "showStreakMilestone", "STREAK_MESSAGES", "MOTIVATIONAL_PHRASES", "randomMotivation",
];

for (const path of ["shared/engine.js", "shared/engine.css", ...pages, "Flashcards/index.html"]) {
  const source = read(path).toLowerCase();
  for (const term of removed) {
    assert.ok(!source.includes(term.toLowerCase()), `${path} contiene ${term}`);
  }
}

const lookups = [...engine.matchAll(/document\.getElementById\(\s*(["'])([^"']+)\1\s*\)/g)];
assert.ok(lookups.length > 0, "El motor debe consultar elementos del DOM");
for (const path of pages) {
  const ids = new Set([...read(path).matchAll(/\sid=(["'])([^"']+)\1/g)].map(match => match[2]));
  for (const [, , id] of lookups) {
    assert.ok(ids.has(id), `${path} necesita el elemento #${id}`);
  }
}

console.log("Pasaron las pruebas de los modulos de practica.");

/* Opciones barajadas: la correcta no puede vivir siempre en la A. */
{
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(read("shared/shuffle-options.js") + "\nglobalThis.shuffleOptions = shuffleOptions;", sandbox);
  const { shuffleOptions } = sandbox;
  const q = {
    id: "x", opciones: ["uno", "dos", "tres", "cuatro"], correcta: 0,
    explicacion: "La opcion A es correcta; la opción B confunde.",
    explicacion_correcta: "Por eso la A (inciso A) gana.",
    analisis_distractores: [{ opcion: "B. dos", razon: "r2" }, { opcion: "C. tres", razon: "r3" }, { opcion: "D. cuatro", razon: "r4" }],
  };
  // Siempre la misma permutacion: [2, 0, 3, 1] -> opciones tres, uno, cuatro, dos
  const fixed = shuffleOptions(q, () => [2, 0, 3, 1]);
  assert.deepEqual([...fixed.opciones], ["tres", "uno", "cuatro", "dos"]);
  assert.equal(fixed.correcta, 1);
  assert.equal(fixed.explicacion, "La opcion B es correcta; la opción D confunde.");
  assert.equal(fixed.explicacion_correcta, "Por eso la A (inciso B) gana.");
  assert.deepEqual(fixed.analisis_distractores.map(d => d.opcion), ["A. tres", "C. cuatro", "D. dos"]);
  assert.deepEqual([...q.opciones], ["uno", "dos", "tres", "cuatro"], "no muta el original");
  assert.equal(q.correcta, 0);

  const pos = [0, 0, 0, 0];
  for (let i = 0; i < 4000; i++) pos[shuffleOptions(q).correcta]++;
  for (const n of pos) assert.ok(n > 800, `posicion sesgada: ${pos}`);

  const html = read("CubPrep/index.html");
  assert.ok(html.indexOf("shuffle-options.js") > 0 && html.indexOf("shuffle-options.js") < html.indexOf("engine.js"), "CubPrep carga shuffle-options antes del motor");
  assert.match(engine, /shuffleOptions\(/, "el motor baraja al armar el bloque");
}
console.log("ok opciones barajadas");
/* Repo publico: ningun cuaderno de NotebookLM. Van en el repo privado. */
{
  const { execSync } = await import("node:child_process");
  const root = new URL("..", import.meta.url).pathname;
  const files = execSync("git ls-files", { cwd: root, encoding: "utf8" }).split("\n")
    .filter(f => /\.(js|html|json|md|py|mjs)$/.test(f));
  const hits = files.filter(f => /notebooklm\.google\.com\/notebook\//.test(read(f)));
  assert.deepEqual(hits, [], "links a cuadernos de NotebookLM en el repo publico");
}
console.log("ok sin cuadernos de NotebookLM");

/* Tema: engine.css hereda los tokens del estudio y ninguna pagina legacy pide Google Fonts. */
{
  const css = read("shared/engine.css");
  assert.match(css, /^@import url\("tokens\.css"\);/, "engine.css importa tokens.css");
  const colors = css.match(/#[0-9a-fA-F]{3,8}\b|rgba\((?!0,\s*0,\s*0)[^)]*\)/g) || [];
  assert.deepEqual(colors, [], "engine.css sin colores fijos");
  for (const p of ["CubPrep/index.html", "MLOps/index.html", "Flashcards/index.html", "SAA-C03/index.html"]) {
    const html = read(p);
    assert.ok(!html.includes("fonts.googleapis"), `${p} pide Google Fonts`);
    assert.ok(html.includes("hypatia.theme.v1"), `${p} no aplica el tema guardado`);
  }
}
console.log("ok tema compartido");

/* Preguntas rotas: su propia explicacion dice que no se entienden. No entran al bloque. */
{
  const vm = await import("node:vm");
  const { readdirSync } = await import("node:fs");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(read("shared/question-quality.js") + "\nglobalThis.brokenByOwnExplanation = brokenByOwnExplanation;", sandbox);
  const broken = sandbox.brokenByOwnExplanation;
  assert.equal(broken({ explicacion: "La pregunta no se entiende porque las opciones son de otro tema." }), true);
  assert.equal(broken({ explicacion_correcta: "La pregunta contiene errores en la redaccion y no se entiende completamente." }), true);
  assert.equal(broken({ explicacion: "La oracion esta incompleta y por eso falta el verbo." }), false);
  assert.equal(broken({ explicacion: "" }), false);
  assert.equal(broken({}), false);

  const dir = "CubPrep/questions_by_materia/";
  for (const f of readdirSync(new URL("../" + dir, import.meta.url))) {
    if (f !== "loader.js") vm.runInContext(read(dir + f), sandbox);
  }
  const all = Object.values(sandbox.window).filter(Array.isArray).flat();
  const n = all.filter(broken).length;
  assert.ok(n > 1500 && n < all.length / 2, `CubPrep rotas: ${n} de ${all.length}`);
  assert.match(engine, /brokenByOwnExplanation/, "el motor filtra las rotas al cargar");
  for (const p of ["CubPrep/index.html", "MLOps/index.html", "SAA-C03/index.html"]) {
    const html = read(p);
    assert.ok(html.indexOf("question-quality.js") > 0 && html.indexOf("question-quality.js") < html.indexOf("engine.js"), `${p} carga question-quality antes del motor`);
  }
}
console.log("ok preguntas rotas fuera");

/* Sin emojis decorativos en la interfaz legacy (los simbolos de acierto/error se quedan). */
{
  const decor = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2728}]/u;
  for (const p of ["CubPrep/index.html", "MLOps/index.html", "Flashcards/index.html", "SAA-C03/index.html", "SAA-C03/study-guide.html", "shared/engine.js"]) {
    const line = read(p).split("\n").findIndex(l => decor.test(l));
    assert.equal(line, -1, `${p}:${line + 1} trae un emoji decorativo`);
  }
}
console.log("ok sin emojis decorativos");
