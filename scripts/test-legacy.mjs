import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = path => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const engine = read("shared/engine.js");
const pages = ["CubPrep/index.html", "MLOps/index.html"];
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
  const vm = await import("node:vm");
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
