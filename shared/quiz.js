/* quiz.js — cableado de "Check yourself" para las lecciones de Labs.
 * Un intento = responder todas las preguntas una vez. recordAttempt se llama
 * una sola vez por intento completo, asi que releer o reclicar no infla la
 * cuenta. "Reintentar" limpia la interfaz y permite otro intento completo;
 * el mejor resultado se conserva. Sin penalizaciones ni marcadores de presion.
 */
const StudioQuiz = (() => {
  function mount(section, { track, slug, onAttempt } = {}) {
    const questions = [...section.querySelectorAll(".q")];
    const total = questions.length;
    const live = section.querySelector(".quiz-live");
    const statusEl = section.querySelector(".quiz-status");
    const doneEl = section.querySelector(".quiz-done");

    const say = msg => { if (live) live.textContent = msg; };

    const paintStatus = () => {
      if (!statusEl) return;
      const rec = LearningState.getLesson(track, slug);
      const parts = [];
      if (rec.attempts > 0 && rec.total) {
        parts.push(`Ultimo intento: ${rec.lastCorrect} de ${rec.total} aciertos`);
        parts.push(`Mejor resultado: ${rec.bestCorrect} de ${rec.total}`);
        parts.push(`Intentos: ${rec.attempts}`);
      } else if (rec.completed && rec.scoreUnknown) {
        parts.push("Completada antes; no hay puntaje guardado de esa sesion");
      } else {
        parts.push("Sin intentos todavia");
      }
      statusEl.textContent = parts.join(" · ");
    };

    const finish = () => {
      const correct = questions.filter(q => q.dataset.good === "1").length;
      const rec = LearningState.recordAttempt(track, slug, { correct, total });
      say(`Intento registrado: ${correct} de ${total} aciertos.`);
      if (doneEl) {
        const msg = doneEl.querySelector(".msg");
        if (msg) {
          msg.textContent = `Leccion recorrida. ${correct} de ${total} aciertos` +
            (rec.bestCorrect !== null && rec.bestCorrect !== correct
              ? ` · tu mejor resultado es ${rec.bestCorrect} de ${total}`
              : "");
        }
        const share = doneEl.querySelector("[data-score-share]");
        if (share && typeof ShareScore !== "undefined") {
          ShareScore.render(share, { correct, total }, "btn ghost");
        }
        doneEl.classList.add("on");
      }
      paintStatus();
      if (typeof onAttempt === "function") onAttempt(rec);
    };

    questions.forEach(q => {
      const ok = +q.dataset.ok;
      const buttons = [...q.querySelectorAll(".opts button")];
      buttons.forEach((b, i) => {
        b.addEventListener("click", () => {
          if (q.dataset.done) return;
          q.dataset.done = "1";
          const good = i === ok;
          if (good) q.dataset.good = "1";
          b.classList.add(good ? "ok" : "no");
          if (!good) buttons[ok].classList.add("ok");
          /* Estado accesible: la eleccion no se comunica solo por color. */
          buttons.forEach((bb, j) => {
            bb.setAttribute("aria-pressed", j === i ? "true" : "false");
            bb.setAttribute("aria-disabled", "true");
          });
          const res = document.createElement("p");
          res.className = "q-result";
          res.textContent = `Tu respuesta: ${b.textContent}. ` +
            (good ? "Es correcta." : `Respuesta correcta: ${buttons[ok].textContent}.`);
          q.appendChild(res);
          const why = q.querySelector(".why");
          if (why) why.classList.add("on");
          say(good ? "Correcto." : `No exactamente: revisa la explicacion.`);
          if (questions.every(x => x.dataset.done)) finish();
        });
      });
    });

    const retryBtn = section.querySelector("[data-quiz-retry]");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        questions.forEach(q => {
          delete q.dataset.done;
          delete q.dataset.good;
          q.querySelectorAll(".opts button").forEach(b => {
            b.classList.remove("ok", "no");
            b.removeAttribute("aria-pressed");
            b.removeAttribute("aria-disabled");
          });
          const res = q.querySelector(".q-result");
          if (res) res.remove();
          const why = q.querySelector(".why");
          if (why) why.classList.remove("on");
        });
        if (doneEl) doneEl.classList.remove("on");
        say("Nuevo intento. Tus aciertos anteriores se conservan.");
        /* Reintento: el foco vuelve a la primera opcion, no se pierde con el
           boton que se oculta. */
        const first = questions[0] && questions[0].querySelector(".opts button");
        if (first) first.focus();
      });
    }

    paintStatus();
    return { paintStatus };
  }

  return { mount };
})();
