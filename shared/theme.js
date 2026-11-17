/* theme.js — tema claro/oscuro de Hypatia.
   Preferencia manual en localStorage ("hypatia.theme.v1"); sin ella se usa la
   preferencia del sistema. Aviso "hypatia:theme" para que las figuras repinten. */
const StudioTheme = (() => {
  const KEY = "hypatia.theme.v1";
  const media = () =>
    typeof matchMedia === "function" ? matchMedia("(prefers-color-scheme: dark)") : null;

  function stored() {
    try {
      const v = localStorage.getItem(KEY);
      return v === "dark" || v === "light" ? v : null;
    } catch (e) {
      return null;
    }
  }
  function system() {
    const m = media();
    return m && m.matches ? "dark" : "light";
  }
  function current() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }
  function apply(theme, { persist = true } = {}) {
    const t = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = t;
    if (persist) {
      try { localStorage.setItem(KEY, t); } catch (e) { /* sesion sin persistencia */ }
    }
    syncButtons(t);
    document.dispatchEvent(new CustomEvent("hypatia:theme", { detail: t }));
  }
  function toggle() {
    apply(current() === "dark" ? "light" : "dark");
  }
  function syncButtons(t) {
    document.querySelectorAll("[data-theme-toggle]").forEach(b => {
      const dark = t === "dark";
      b.setAttribute("aria-pressed", dark ? "true" : "false");
      b.textContent = dark ? "Tema claro" : "Tema oscuro";
      b.setAttribute("aria-label", dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
    });
  }
  function init() {
    if (!document.documentElement.dataset.theme) {
      document.documentElement.dataset.theme = stored() || system();
    }
    syncButtons(current());
    document.querySelectorAll("[data-theme-toggle]").forEach(b => {
      b.addEventListener("click", toggle);
    });
    const m = media();
    if (m && m.addEventListener) {
      m.addEventListener("change", () => {
        if (!stored()) apply(system(), { persist: false });
      });
    }
  }
  return { init, toggle, apply, current, stored, system };
})();
