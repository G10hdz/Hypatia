/* figures.js — kit de figuras interactivas para Hypatia Labs.
 * Sin dependencias, sin build. Cada lección importa este archivo y solo
 * escribe su lógica de dibujo.
 *
 *   Figure.canvas(el, opts) -> {el, ctx, w, h, supported, resize, onRedraw}
 *   Figure.slider(wrap, opts) -> HTMLInputElement
 *   Figure.press(wrap, label, onclick, opts) -> button
 *   Figure.animate(fn, opts) -> {play, pause, playing, enabled, stop}
 *   Figure.count(el, to, opts) -> número que anima al valor
 *   Figure.shuffled(n, seed) -> permutación determinista
 *   Figure.colors() -> tokens semánticos del tema activo
 */

const Figure = (() => {
  const VAR_MAP = {
    bg: "--fig-bg",
    panel: "--panel",
    ink: "--ink",
    muted: "--muted",
    accent: "--accent",
    line: "--line",
    blue: "--data-blue",
    green: "--data-green",
    amber: "--data-amber",
    red: "--data-red",
    orange: "--data-orange",
    ok: "--ok",
    warn: "--warn",
    bad: "--bad",
  };

  function colors() {
    const cs = getComputedStyle(document.documentElement);
    const out = {};
    for (const k in VAR_MAP) out[k] = cs.getPropertyValue(VAR_MAP[k]).trim();
    return out;
  }

  const reducedMotion = () =>
    typeof matchMedia === "function" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Lienzo con repintado explícito. El callback onRedraw se invoca tras cada
   * resize real y tras cada cambio de tema; no hace falta reasignar resize. */
  /* {label} nombra la figura para lectores de pantalla; {describedBy} apunta
   * al id del resumen/tabla visible que la describe. */
  function canvas(el, { height = 320, fallbackText, label, describedBy } = {}) {
    const box = document.createElement("div");
    box.className = "fig-canvas";
    const c = document.createElement("canvas");
    c.style.height = height + "px";
    c.setAttribute("role", "img");
    if (label) c.setAttribute("aria-label", label);
    if (describedBy) c.setAttribute("aria-describedby", describedBy);
    box.appendChild(c);
    el.appendChild(box);

    let ctx = null;
    try { ctx = c.getContext && c.getContext("2d"); } catch (e) { ctx = null; }
    const api = { el: c, ctx, w: 0, h: height, supported: !!ctx, onRedraw: null };

    const redraw = () => {
      if (!ctx) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      api.w = c.clientWidth;
      api.h = c.clientHeight;
      c.width = Math.max(1, Math.round(api.w * dpr));
      c.height = Math.max(1, Math.round(api.h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (typeof api.onRedraw === "function") api.onRedraw();
    };
    api.resize = redraw;

    if (!ctx) {
      const p = document.createElement("p");
      p.className = "fig-fallback";
      p.textContent = fallbackText ||
        "Tu navegador no pudo dibujar la figura. Los datos están en el texto y la tabla.";
      box.appendChild(p);
      return api;
    }

    redraw();
    window.addEventListener("resize", redraw);
    document.addEventListener("hypatia:theme", redraw);
    return api;
  }

  function slider(wrap, { label, min, max, step = 1, value, fmt = v => v, oninput }) {
    const box = document.createElement("label");
    box.className = "f-slider";
    const top = document.createElement("span");
    top.className = "top";
    const name = document.createElement("span");
    name.textContent = label;
    const val = document.createElement("b");
    val.textContent = fmt(value);
    top.append(name, val);
    const input = document.createElement("input");
    input.type = "range";
    input.min = min; input.max = max; input.step = step; input.value = value;
    input.setAttribute("aria-valuetext", fmt(value));
    input.addEventListener("input", () => {
      val.textContent = fmt(+input.value);
      input.setAttribute("aria-valuetext", fmt(+input.value));
      oninput(+input.value);
    });
    box.append(top, input);
    wrap.appendChild(box);
    return input;
  }

  function press(wrap, label, onclick, { primary = true, pressed = null, danger = false } = {}) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.className = "f-press" + (primary ? " primary" : "") + (danger ? " danger" : "");
    if (pressed !== null) b.setAttribute("aria-pressed", pressed ? "true" : "false");
    b.addEventListener("click", onclick);
    wrap.appendChild(b);
    return b;
  }

  /* Loop de animación pausable. No corre oculto, fuera de pantalla ni con
   * movimiento reducido. Devuelve un controlador con play/pause. */
  function animate(fn, { el = null, autoplay = true } = {}) {
    let enabled = !reducedMotion();
    let raf = null, last = 0;
    let playing = autoplay && enabled;
    let inView = true, pageVisible = !document.hidden;

    const tick = t => {
      raf = null;
      if (!playing || !inView || !pageVisible) return;
      const dt = Math.min(0.05, (t - last) / 1000 || 0);
      last = t;
      fn(dt, t / 1000);
      raf = requestAnimationFrame(tick);
    };
    const maybeStart = () => {
      if (playing && inView && pageVisible && raf === null) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    let io = null;
    if (el && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        if (inView) maybeStart();
      });
      io.observe(el);
    }
    const onVis = () => { pageVisible = !document.hidden; if (pageVisible) maybeStart(); };
    document.addEventListener("visibilitychange", onVis);

    /* Si el sistema activa movimiento reducido con la animacion en marcha,
     * se detiene de inmediato y se avisa para actualizar el boton. */
    const api = {
      onChange: null,
    };
    const mq = typeof matchMedia === "function"
      ? matchMedia("(prefers-reduced-motion: reduce)") : null;
    const onMq = () => {
      enabled = !mq.matches;
      if (!enabled && raf !== null) { cancelAnimationFrame(raf); raf = null; }
      if (!enabled) playing = false;
      if (typeof api.onChange === "function") api.onChange(enabled);
    };
    if (mq && mq.addEventListener) mq.addEventListener("change", onMq);
    maybeStart();

    /* Las propiedades de estado se definen con defineProperty: Object.assign
     * evaluaria los getters una vez y congelaria el valor inicial. */
    api.play = () => { if (enabled) { playing = true; maybeStart(); } };
    api.pause = () => { playing = false; };
    Object.defineProperty(api, "playing", { get: () => playing });
    Object.defineProperty(api, "enabled", { get: () => enabled });
    api.stop = () => {
      playing = false;
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
      if (io) io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (mq && mq.removeEventListener) mq.removeEventListener("change", onMq);
    };
    return api;
  }

  function count(el, to, { ms = 600, fmt = v => Math.round(v) } = {}) {
    if (el.__countRaf) cancelAnimationFrame(el.__countRaf);
    const from = parseFloat(el.dataset.v || "0") || 0;
    el.dataset.v = to;
    if (reducedMotion() || ms <= 0) {
      el.textContent = fmt(to);
      return;
    }
    const t0 = performance.now();
    const step = t => {
      const p = Math.min(1, (t - t0) / ms);
      el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) el.__countRaf = requestAnimationFrame(step);
    };
    el.__countRaf = requestAnimationFrame(step);
  }

  function shuffled(n, seed = 42) {
    let s = seed;
    const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
    const a = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return {
    canvas, slider, press, animate, count, shuffled, colors, reducedMotion,
    get T() { return colors(); },
  };
})();
