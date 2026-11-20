const ShareScore = (() => {
  function render(container, { correct, total }, buttonClass) {
    container.textContent = "";
    if (total <= 0) return;

    const url = new URL("https://hypatia-one.vercel.app/");
    // Solo conserva la ruta de la versión pública, sin parámetros ni fragmento.
    if (window.location.origin === url.origin) url.pathname = window.location.pathname;
    const text = `Conseguí ${correct} de ${total} aciertos en Hypatia. ¿Practicamos?`;
    const shareData = { title: "Hypatia", text, url: url.href };
    const message = `${text}\n${url.href}`;

    const button = document.createElement("button");
    button.type = "button";
    button.className = buttonClass;
    button.textContent = typeof navigator.share === "function" ? "Compartir puntaje" : "Copiar puntaje";

    const status = document.createElement("p");
    status.setAttribute("role", "status");

    const fallback = document.createElement("textarea");
    fallback.setAttribute("aria-label", "Puntaje y enlace para compartir");
    fallback.readOnly = true;
    fallback.rows = 3;
    fallback.value = message;

    button.addEventListener("click", async () => {
      status.textContent = "";
      fallback.remove();

      if (typeof navigator.share === "function") {
        try {
          await navigator.share(shareData);
          return;
        } catch (error) {
          if (error?.name === "AbortError") return;
        }
      }

      try {
        await navigator.clipboard.writeText(message);
        status.textContent = "Puntaje copiado.";
      } catch {
        container.appendChild(fallback);
        status.textContent = "Copia el texto para compartirlo.";
        fallback.focus();
        fallback.select();
      }
    });

    container.append(button, status);
  }

  return { render };
})();
