import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { checkLesson, inspectLesson } from "./check-lesson.mjs";

const bayesPath = "Labs/ai-math/01-bayes/index.html";
const bottleneckPath = "Labs/system-design/01-bottleneck/index.html";
const bayes = readFileSync(new URL(`../${bayesPath}`, import.meta.url), "utf8");
let passed = 0;
function test(name, run) {
  run();
  passed++;
  console.log(`PASS ${name}`);
}
function rejects(html, message) {
  assert.ok(inspectLesson(html, bayesPath).some(error => message.test(error)), message.source);
}
test("published lesson routes and references", () => {
  assert.deepEqual(checkLesson(bayesPath), []);
  assert.deepEqual(checkLesson(bottleneckPath), []);
});
test("unfinished template cannot pass", () => {
  const template = readFileSync(new URL("../templates/lab/index.html", import.meta.url), "utf8");
  rejects(template, /campos sin completar/);
});
test("wrong progress identity cannot pass", () => {
  rejects(bayes.replace('SLUG = "01-bayes"', 'SLUG = "02-other"'), /SLUG no coincide/);
});
test("an unknown area cannot silently lose connections and materials", () => {
  rejects(bayes.replace('TOPIC = "matematicas"', 'TOPIC = "unknown-area"'), /TOPIC no existe/);
});
test("placeholders in comments still block the raw-template guard", () => {
  rejects(`${bayes}<!-- __UNFINISHED__ -->`, /campos sin completar/);
});
test("missing shared file cannot pass", () => {
  rejects(bayes.replace("../../../shared/quiz.js", "../../../shared/missing.js"), /Ruta local inexistente/);
});
test("unsafe link and remote script cannot pass", () => {
  rejects(bayes.replace('href="../../index.html"', 'href="javascript:alert(1)"'), /Protocolo no permitido/);
  rejects(bayes.replace("../../../shared/quiz.js", "https://example.org/quiz.js"), /Recurso externo/);
});
test("unquoted references cannot bypass asset checks", () => {
  rejects(`${bayes}<script src=https://example.org/remote.js></script>`, /entre comillas/);
});
test("external credentials and embeds cannot pass", () => {
  rejects(`${bayes}<a href="https://name:secret@example.org/">x</a>`, /credenciales/);
  rejects(`${bayes}<iframe src="https://example.org/"></iframe>`, /No incrustar/);
});
test("external anchors require safe new-window attributes", () => {
  rejects(`${bayes}<a href="https://example.org/" target="_blank">x</a>`, /rel seguro/);
  assert.deepEqual(inspectLesson(`${bayes}<a href="https://example.org/" target="_blank" rel="noopener noreferrer">x</a>`, bayesPath), []);
});
test("invalid inline JavaScript cannot pass", () => {
  rejects(`${bayes}<script>const broken = ;</script>`, /Script no valido/);
});
test("quiz key must be an in-range integer", () => {
  rejects(bayes.replace(/data-ok="\d+"/, 'data-ok="99"'), /data-ok fuera/);
  rejects(bayes.replace(/data-ok="\d+"/, 'data-ok="-1"'), /data-ok fuera/);
});
test("a button outside the choices cannot make a bad quiz key valid", () => {
  const fixture = bayes.replace(/<div class="q" data-ok="\d+">[\s\S]*?<div class="q"/,
    '<div class="q" data-ok="2"><div class="opts"><button>A</button><button>B</button></div>' +
    '<button>Help, not an answer</button><p class="why">Reason</p></div><div class="q"');
  assert.notEqual(fixture, bayes);
  rejects(fixture, /fuera de las 2 opciones/);
});
test("data attributes are not real integration IDs", () => {
  rejects(bayes.replace('id="connect"', 'data-id="connect"'), /Falta #connect/);
});
test("non-lesson paths and missing input cannot pass", () => {
  assert.ok(inspectLesson(bayes, "../outside/index.html").length > 0);
  assert.ok(checkLesson("Labs/ai-math/99-missing/index.html").length > 0);
});
test("CLI checks the catalog even in an ESM-default project", () => {
  const command = fileURLToPath(new URL("./check-lesson.mjs", import.meta.url));
  const result = spawnSync(process.execPath, ["--experimental-default-type=module", command], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  assert.ok(result.stdout.includes(`PASS ${bayesPath}`));
  assert.ok(result.stdout.includes(`PASS ${bottleneckPath}`));
});
console.log(`\n${passed} lesson preflight tests passed.`);
