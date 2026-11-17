#!/usr/bin/env node
/* score.mjs — evaluador del pipeline de lecciones (patron deus-ex-machina-eval).
 * Lo escribe y aprueba el equipo; los agentes no lo editan.
 *
 * Uso:
 *   node eval/score.mjs --task <id> --version <v> --file <ruta> --base <url>
 *       [--run-id <id>] [--tokens N] [--cost-usd X] [--duration-s Y] [--interventions N] [--confirmed a,b|none] [--root <dir>]
 *   node eval/score.mjs --task <id> --version <v> --from-results <probe.json>
 *       [--run-id <id>] [--tokens N] [--cost-usd X] [--duration-s Y] [--interventions N] [--confirmed a,b|none] [--root <dir>]
 *
 * Corre preflight + la sonda de la tarea y agrega una linea JSONL en eval/runs/.
 */
import { execFileSync } from "node:child_process";
import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EVAL = join(ROOT, "eval");

const args = {};
for (let i = 2; i < process.argv.length; i += 2) args[process.argv[i].replace(/^--/, "")] = process.argv[i + 1];

const task = (readFileSync(join(EVAL, "data/tasks.jsonl"), "utf8")
  .split("\n").filter(Boolean).map(JSON.parse))
  .find(t => t.id === args.task);
if (!task) { console.error(`task desconocida: ${args.task}`); process.exit(2); }
const config = JSON.parse(readFileSync(join(EVAL, "config.json"), "utf8"));

const num = k => args[k] === undefined ? null : Number(args[k]);
// --confirmed: hallazgos gold que el humano confirmo presentes en ESTA corrida
// (separados por coma; "none" = ninguno). Sin el, recall no se puede calcular.
const confirmed = args.confirmed === undefined ? null
  : args.confirmed === "none" ? []
  : args.confirmed.split(",").map(x => x.trim()).filter(Boolean);

function loadResults() {
  if (args["from-results"]) {
    const raw = JSON.parse(readFileSync(args["from-results"], "utf8"));
    // formato sonda actual: checks[] + spec_gaps[]
    if (Array.isArray(raw.spec_gaps)) return raw;
    // formato sonda original (soft[]): pass=false => brecha encontrada
    const alias = {
      "pressure button has initial aria-pressed": "pressure-toggle-missing-initial-aria-pressed",
      "pressure on admiration states stability": "non-envy-quadrants-dont-state-stability",
      "no-JS noscript includes quadrant table": "noscript-missing-quadrant-table",
    };
    return {
      checks: raw.checks || [], page_errors: raw.page_errors || [], http_errors: raw.http_errors || [],
      spec_gaps: (raw.soft || [])
        .filter(s => s.pass === false && alias[s.name])
        .map(s => ({ name: alias[s.name], detector: "legacy-soft", found: true })),
      detectors_covered: new Set(Object.values(alias)),
    };
  }
  const out = join(EVAL, `runs/.probe-${args.task}-${Date.now()}.json`);
  const probe = join(ROOT, task.probe);
  execFileSync("uv", ["run", "--with", "playwright", "python", probe, args.base, out],
    { stdio: "inherit" });
  return JSON.parse(readFileSync(out, "utf8"));
}

let preflight = null;
if (args.file) {
  // --root permite evaluar archivos fuera del repo (p. ej. copia de prueba);
  // el archivo se pasa relativo a ese root.
  const root = args.root ? resolve(args.root) : ROOT;
  try {
    execFileSync("node", ["scripts/check-lesson.mjs", args.file], { cwd: root, stdio: "pipe" });
    preflight = true;
  } catch { preflight = false; }
}

const results = loadResults();
const hard = results.checks || [];
const hardPassed = hard.filter(c => c.pass).length;
const foundGaps = new Set((results.spec_gaps || []).filter(g => g.found).map(g => g.name));
const gold = new Set(task.gold_findings || []);
const confirmedSet = confirmed === null ? null : new Set(confirmed);
const detectedGold = confirmedSet === null ? [] : [...foundGaps].filter(g => confirmedSet.has(g));
const automationRecall = confirmedSet && confirmedSet.size
  ? +(detectedGold.length / confirmedSet.size).toFixed(3) : null;
const falsePositives = confirmedSet === null ? null : [...foundGaps].filter(g => !confirmedSet.has(g));
const missedByAutomation = confirmedSet === null ? null : [...confirmedSet].filter(g => !foundGaps.has(g));
// success = artefacto limpio: preflight + hard checks + cero brechas CONFIRMADAS
// por el humano (si --confirmed se dio). Sin --confirmed, la automatizacion decide.
const confirmedClean = confirmedSet ? confirmedSet.size === 0 : foundGaps.size === 0;
const success = (preflight !== false) && hardPassed === hard.length && confirmedClean;

const line = {
  run_id: args["run-id"] || `${task.id}__${args.version || "anon"}`,
  task_id: task.id, version: args.version || "anon",
  file: args.file || null, base: args.base || null,
  preflight, hard_passed: hardPassed, hard_total: hard.length,
  spec_gaps_found: [...foundGaps].sort(),
  gold_findings: [...gold].sort(),
  confirmed_findings: confirmed,
  automation_recall: automationRecall,
  missed_by_automation: missedByAutomation,
  false_positives: falsePositives,
  tokens: num("tokens"), cost_usd: num("cost-usd"), duration_s: num("duration-s"),
  human_interventions: num("interventions"),
  page_errors: (results.page_errors || []).length,
  http_errors: (results.http_errors || []).length,
  success,
  human_rubric: "pending",
};

const outPath = join(EVAL, "runs", `${line.run_id}.jsonl`);
mkdirSync(dirname(outPath), { recursive: true });
appendFileSync(outPath, JSON.stringify(line) + "\n");
console.log(JSON.stringify(line, null, 1));
console.log(`\nrun_line -> ${outPath}`);
process.exit(success ? 0 : 1);
