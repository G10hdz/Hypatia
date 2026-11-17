/* Structural preflight for static lessons, not a content or security review. */
import { existsSync, readFileSync, realpathSync, statSync } from "node:fs";
import { dirname, isAbsolute, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { Script } from "node:vm";

const ROOT = realpathSync(resolve(dirname(fileURLToPath(import.meta.url)), ".."));
const route = /^Labs\/[a-z0-9]+(?:-[a-z0-9]+)*\/\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*\/index\.html$/;

// Browser registries do not depend on Node's package-level module mode.
function registry(file, binding) {
  return new Script(`${readFileSync(resolve(ROOT, file), "utf8")}\n${binding};`,
    { filename: file }).runInNewContext({}, { timeout: 1000 });
}
const TOPICS = new Set(registry("Labs/knowledge-map.js", "KNOWLEDGE_MAP").topics.map(topic => topic.id));

function attr(tag, name) {
  const match = tag.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(["'])(.*?)\\1`, "i"));
  return match ? match[2] : null;
}

function hasClass(tag, name) {
  return (attr(tag, "class") || "").split(/\s+/).includes(name);
}

function insideRoot(path) {
  const rel = relative(ROOT, path);
  return rel !== ".." && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
}

function questionBody(html, start) {
  const divs = /<\/?div\b[^>]*>/gi;
  divs.lastIndex = start;
  let depth = 0;
  for (let tag; (tag = divs.exec(html));) {
    depth += /^<\//.test(tag[0]) ? -1 : 1;
    if (depth === 0) return html.slice(start, divs.lastIndex);
  }
  return null;
}

export function inspectLesson(html, file) {
  const errors = [];
  const fail = message => errors.push(message);
  const path = resolve(ROOT, file);
  if (!insideRoot(path) || !route.test(relative(ROOT, path).split(sep).join("/"))) {
    fail("Ruta esperada: Labs/<track>/<NN-slug>/index.html");
    return errors;
  }
  if (/__[A-Z][A-Z0-9_]*__|\bPENDIENTE\b/.test(html)) fail("Quedan campos sin completar");
  // Ignore comment tags when inspecting structure, but not unfinished fields.
  const content = html.replace(/<!--[\s\S]*?-->/g, "");
  if (/<(?:iframe|object|embed)\b/i.test(content)) fail("No incrustar contenido remoto o privado");
  const parts = relative(ROOT, path).split(sep);
  for (const [name, expected] of [["TRACK", parts[1]], ["SLUG", parts[2]]]) {
    const declared = content.match(new RegExp(`\\b${name}\\s*=\\s*(["'])([^"']+)\\1`));
    if (!declared || declared[2] !== expected) fail(`${name} no coincide con la ruta`);
  }
  const topic = content.match(/\bTOPIC\s*=\s*(["'])([^"']+)\1/);
  if (!topic || !TOPICS.has(topic[2])) fail("TOPIC no existe en el mapa");

  for (const match of content.matchAll(/<(a|script|link|img|source|audio|video|track)\b[^>]*>/gi)) {
    const tag = match[0], kind = match[1].toLowerCase();
    const name = kind === "a" || kind === "link" ? "href" : "src";
    const value = attr(tag, name);
    if (value === null && new RegExp(`(?:^|\\s)${name}\\s*=`, "i").test(tag)) {
      fail("Las referencias src/href deben ir entre comillas");
    }
    if (value === null || value.startsWith("#")) continue;
    let url;
    try {
      url = new URL(value.replaceAll("&amp;", "&"), `https://hypatia.invalid/${relative(ROOT, path).split(sep).join("/")}`);
    } catch {
      fail(`URL invalida: ${value}`);
      continue;
    }
    if (url.username || url.password) fail("Una URL no debe contener credenciales");
    if (url.protocol !== "https:") {
      fail(`Protocolo no permitido: ${value}`);
      continue;
    }
    if (url.origin !== "https://hypatia.invalid") {
      if (kind !== "a") fail(`Recurso externo no permitido: ${value}`);
      if (attr(tag, "target") === "_blank") {
        const rel = (attr(tag, "rel") || "").split(/\s+/);
        if (!rel.includes("noopener") || !rel.includes("noreferrer")) fail("Enlace externo sin rel seguro");
      }
      continue;
    }
    let target;
    try { target = resolve(ROOT, `.${decodeURIComponent(url.pathname)}`); }
    catch { fail(`Ruta invalida: ${value}`); continue; }
    if (!insideRoot(target) || !existsSync(target) || !insideRoot(realpathSync(target))) {
      fail(`Ruta local inexistente o fuera del repositorio: ${value}`);
    }
  }

  for (const script of content.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (attr(script[1], "src")) continue;
    const type = attr(script[1], "type");
    try {
      if (type === "application/json" || type === "application/ld+json") JSON.parse(script[2]);
      else new Script(script[2], { filename: file });
    } catch (error) { fail(`Script no valido: ${error.message}`); }
  }

  const tags = [...content.matchAll(/<[a-z][^>]*>/gi)].map(match => match[0]);
  for (const id of ["contenido", "fig", "connect", "biblioteca-leccion"]) {
    if (!tags.some(tag => attr(tag, "id") === id)) fail(`Falta #${id}`);
  }
  for (const call of ["StudioTheme.init", "LearningState.visit", "LearningState.mountWarning",
    "StudioQuiz.mount", "StudioMap.connect", "StudioResources.mount"]) {
    if (!content.includes(call)) fail(`Falta integrar ${call}`);
  }
  for (const cls of ["quiz-status", "quiz-live", "quiz-done", "msg"]) {
    if (![...content.matchAll(/<[^>]+>/g)].some(tag => hasClass(tag[0], cls))) fail(`Falta .${cls}`);
  }
  if (!content.includes("data-quiz-retry")) fail("Falta el reintento");
  let questions = 0;
  for (const tag of content.matchAll(/<div\b[^>]*>/gi)) {
    if (!hasClass(tag[0], "q")) continue;
    questions++;
    const body = questionBody(content, tag.index);
    if (!body) { fail("Pregunta con div sin cerrar"); continue; }
    const key = attr(tag[0], "data-ok");
    const optsTag = [...body.matchAll(/<div\b[^>]*>/gi)].find(item => hasClass(item[0], "opts"));
    const optsBody = optsTag ? questionBody(body, optsTag.index) : null;
    const options = optsBody ? [...optsBody.matchAll(/<button\b[^>]*>/gi)].length : 0;
    if (key === null || !/^(0|[1-9]\d*)$/.test(key) || Number(key) >= options) {
      fail(`Pregunta ${questions}: data-ok fuera de las ${options} opciones`);
    }
    if (!optsBody) {
      fail(`Pregunta ${questions}: falta .opts`);
    }
    if (![...body.matchAll(/<[^>]+>/g)].some(item => hasClass(item[0], "why"))) {
      fail(`Pregunta ${questions}: falta la explicacion`);
    }
  }
  if (!questions) fail("Faltan preguntas");
  return errors;
}

export function checkLesson(file) {
  try {
    const path = resolve(ROOT, file);
    if (!insideRoot(path) || !insideRoot(realpathSync(path)) || !statSync(path).isFile()) {
      return ["Archivo de leccion fuera del repositorio"];
    }
    return inspectLesson(readFileSync(path, "utf8"), file);
  } catch (error) { return [`No se pudo leer la leccion: ${error.message}`]; }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const LABS_TRACKS = registry("Labs/tracks.js", "LABS_TRACKS");
  const files = process.argv.length > 2 ? process.argv.slice(2) :
    LABS_TRACKS.flatMap(track => track.lessons.map(lesson => `Labs/${track.id}/${lesson.slug}/index.html`));
  let failed = files.length === 0;
  if (failed) console.error("No hay lecciones que comprobar");
  for (const file of files) {
    const errors = checkLesson(file);
    console.log(`${errors.length ? "FAIL" : "PASS"} ${file}`);
    for (const error of errors) console.error(`  ${error}`);
    failed ||= errors.length > 0;
  }
  process.exitCode = failed ? 1 : 0;
}
