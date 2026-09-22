#!/usr/bin/env node
// validate-bank.mjs — verifica que cada módulo cargue su banco sin errores de schema.
// Uso: node scripts/validate-bank.mjs   (corre desde la raíz del repo)
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import vm from 'vm';

const ROOT = new URL('..', import.meta.url).pathname;
const REQUIRED = ['id', 'materia', 'pregunta', 'opciones', 'correcta'];
let failures = 0;

const modules = readdirSync(ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(join(ROOT, d.name, 'module.js')))
  .map(d => d.name);

for (const mod of modules) {
  const dir = join(ROOT, mod);
  const ctx = { window: {} };
  vm.createContext(ctx);
  const run = (f, base = dir) =>
    vm.runInContext(readFileSync(join(base, f), 'utf8'), ctx, { filename: f });

  run('module.js');
  const cfg = ctx.window.HYPATIA_MODULE;
  if (!cfg?.id || !cfg?.storagePrefix || !Array.isArray(cfg.subjects)) {
    console.error(`${mod}: module.js sin id/storagePrefix/subjects`); failures++; continue;
  }

  const bankDir = join(dir, 'questions_by_materia');
  const files = existsSync(bankDir)
    ? readdirSync(bankDir).filter(f => f.endsWith('.js') && f !== 'loader.js')
    : ['questions.js'].filter(f => existsSync(join(dir, f)));
  files.forEach(f => run(f, existsSync(bankDir) ? bankDir : dir));
  if (existsSync(join(bankDir, 'loader.js'))) run('loader.js', bankDir);

  const qs = ctx.window.QUESTIONS || [];
  const bad = qs.filter(q =>
    REQUIRED.some(k => q[k] === undefined) ||
    !Array.isArray(q.opciones) || q.opciones.length < 2 ||
    typeof q.correcta !== 'number' || q.correcta < 0 || q.correcta >= q.opciones.length);
  const orphans = qs.filter(q => !cfg.subjects.includes(q.materia));
  const dup = qs.length - new Set(qs.map(q => q.id)).size;

  console.log(`${mod}: ${qs.length} preguntas, ${files.length} archivos, materias: ${cfg.subjects.join(',')}`);
  if (bad.length) { console.error(`  ${bad.length} preguntas malformadas`, bad.slice(0, 3).map(q => q.id)); failures++; }
  if (dup) { console.error(`  ${dup} ids duplicados`); failures++; }
  if (orphans.length) {
    const m = [...new Set(orphans.map(q => q.materia))];
    console.warn(`  warn: ${orphans.length} preguntas en materias fuera del config (${m.join(',')})`);
  }
}

if (!modules.length) { console.error('sin módulos con module.js'); process.exit(1); }
process.exit(failures ? 1 : 0);
