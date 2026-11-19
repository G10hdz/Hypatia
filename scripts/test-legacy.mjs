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
