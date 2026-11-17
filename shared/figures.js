/* figures.js — kit de figuras interactivas para Hypatia Labs.
 * Sin dependencias, sin build. Cada lección importa este archivo y solo
 * escribe su lógica de dibujo.
 *
 *   Figure.canvas(el, opts) -> {ctx, w, h, resize}
 *   Figure.slider(wrap, opts) -> HTMLInputElement
 *   Figure.press(wrap, label, onclick) -> button
 *   Figure.animate(fn) -> loop con dt en segundos
 *   Figure.count(el, to, opts) -> número que anima al valor
 *   Figure.shuffled(n, seed) -> permutación determinista
 */

const Figure = (() => {
  const T = {
    bg: "#14171a",
    ink: "#e1e3e2",
    muted: "#9a9ca0",
    accent: "#C4B5E3",
    mint: "#98FF98",
    pink: "#ffcfec",
    warn: "#ffd166",
    line: "rgba(255,255,255,.08)",
  };

  function canvas(el, { height = 320 } = {}) {
    const c = document.createElement("canvas");
    c.style.cssText = `width:100%;height:${height}px;display:block;border-radius:14px;background:${T.bg};border:1px solid ${T.line}`;
    el.appendChild(c);
    const ctx = c.getContext("2d");
    const api = { el: c, ctx, w: 0, h: height };
    api.resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      api.w = c.clientWidth;
      api.h = c.clientHeight;
      c.width = api.w * dpr;
      c.height = api.h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    api.resize();
    window.addEventListener("resize", api.resize);
    return api;
  }

  function slider(wrap, { label, min, max, step = 1, value, fmt = v => v, oninput }) {
    const box = document.createElement("label");
    box.style.cssText = "display:grid;gap:6px;font-size:.82rem;color:" + T.muted;
    const top = document.createElement("span");
    top.style.cssText = "display:flex;justify-content:space-between;gap:8px";
    const name = document.createElement("span");
    name.textContent = label;
    const val = document.createElement("b");
    val.style.color = T.ink;
    val.textContent = fmt(value);
    top.append(name, val);
    const input = document.createElement("input");
    input.type = "range";
    input.min = min; input.max = max; input.step = step; input.value = value;
    input.style.cssText = "width:100%;accent-color:" + T.accent;
    input.addEventListener("input", () => {
      val.textContent = fmt(+input.value);
      oninput(+input.value);
    });
    box.append(top, input);
    wrap.appendChild(box);
    return input;
  }

  function press(wrap, label, onclick, { primary = true } = {}) {
    const b = document.createElement("button");
    b.textContent = label;
    b.style.cssText = primary
      ? "padding:10px 18px;border-radius:10px;border:0;font-weight:700;cursor:pointer;background:linear-gradient(135deg,#C4B5E3,#d7c7f6);color:#0c0f0f"
      : "padding:10px 18px;border-radius:10px;font-weight:700;cursor:pointer;background:rgba(255,255,255,.05);border:1px solid " + T.line + ";color:" + T.ink;
    b.addEventListener("click", onclick);
    wrap.appendChild(b);
    return b;
  }

  function animate(fn) {
    let last = performance.now(), raf;
    const tick = t => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      fn(dt, t / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }

  function count(el, to, { ms = 600, fmt = v => Math.round(v) } = {}) {
    const t0 = performance.now();
    const from = parseFloat(el.dataset.v || "0") || 0;
    el.dataset.v = to;
    const step = t => {
      const p = Math.min(1, (t - t0) / ms);
      el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
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

  return { canvas, slider, press, animate, count, shuffled, T };
})();
