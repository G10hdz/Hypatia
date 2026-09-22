    // Hypatia shared engine — cada módulo configura via window.HYPATIA_MODULE (module.js)
    const MOD = window.HYPATIA_MODULE || {};
    const MODID = MOD.id || "module";
    const P = MOD.storagePrefix || `${MODID}.`;
    const STORAGE_KEYS = {
      stats: `${P}stats.v1`,
      customQuestions: `${P}custom-questions.v1`,
      wrongQuestions: `${P}wrong-questions.v1`,
      mockHistory: `${P}mock-history.v1`,
      flaggedAnswers: `${P}flagged-answers.v1`,
      avatar: `${P}avatar.v1`,
      avatarCustom: `${P}avatar.custom.v1`
    };
    const SIMULACRO_DURATION_MS = (MOD.simulacroMinutes || 180) * 60 * 1000;
    const SIMULACRO_STORAGE_KEY = `${MODID}_simulacro_timer`;
    const SIMULACRO_TIME_LABEL = MOD.simulacroTimeLabel || `${Math.round(SIMULACRO_DURATION_MS / 60000)}min`;
    const SIMULACRO_WARNING_MS = 30 * 60 * 1000;
    const SIMULACRO_CRITICAL_MS = 10 * 60 * 1000;
    const TIMER_RING_CIRCUMFERENCE = 81.68; // 2 * PI * 13
    const TARGET_SCORE = MOD.targetScore || 105;
    const EXAM_TOTAL = MOD.examTotal || 120;
    const MODULE_SUBJECTS = MOD.subjects || [];
    const MODULE_DISTRIBUTION = MOD.distribution || {};
    const SUBJECT_LABELS = MOD.labels || {};
    const QUESTION_TYPE_MAP = MOD.temaTypes || {};
    const LEARNING_OBJECTIVES = MOD.objectives || {};
    const ID_PREFIX_BY_SUBJECT = MOD.idPrefixes || {};
    const MOTIVATIONAL_PHRASES = MOD.phrases || [
      "Acierto! Eres una maquina.",
      "Correcto. Asi se responde en un panel.",
      "Streak! Imparable.",
      "Bien! Rompiéndola como siempre.",
      "Correcto! +{puntos} puntos. Sigue asi."
    ];
    const STREAK_MESSAGES = MOD.streakMessages || {};

    // Pre-flight check: verify questions loaded
    if (typeof window.QUESTIONS === "undefined" || !Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
      console.error(`[${MODID}] questions FAILED to load! window.QUESTIONS =`, typeof window.QUESTIONS);
      document.body.innerHTML = `
        <div style="max-width:600px;margin:60px auto;padding:32px;background:#1a1d1d;border-radius:16px;color:#e1e3e2;font-family:sans-serif;">
          <h2 style="color:#ff6b9d;">⚠️ ${MODID}: questions no cargaron</h2>
          <p style="color:#9a9ca0;margin:16px 0;">Los archivos de preguntas no se cargaron correctamente.</p>
          <p style="color:#9a9ca0;">Sirve el repo con un servidor local (<code style="background:#2a2d2d;padding:2px 8px;border-radius:4px;">python3 -m http.server</code>) — abrir file:// bloquea scripts.</p>
        </div>`;
    } else {
      console.log(`[${MODID}] ${window.QUESTIONS.length} questions loaded`);
    }

    // === AVATAR SYSTEM ===
    const AVATARS = [
      { id: "cat",    emoji: "🐱", name: "Nyan",    tagline: "speedrun master" },
      { id: "robot",  emoji: "🤖", name: "Unit-01",  tagline: "never crashes" },
      { id: "fire",   emoji: "🔥", name: "Pyro",     tagline: "combo lord" },
      { id: "alien",  emoji: "👾", name: "Glitch",   tagline: "bug hunter" },
      { id: "dragon", emoji: "🐉", name: "Drak",     tagline: "lore master" },
      { id: "skull",  emoji: "💀", name: "Ded",      tagline: "respawn champ" },
      { id: "ninja",  emoji: "🥷", name: "Sombra",   tagline: "silent grinder" },
      { id: "star",   emoji: "⭐", name: "Lumina",   tagline: "accuracy queen" }
    ];

    // Quick emoji picker options
    const EMOJI_OPTIONS = [
      "🐱", "🐶", "🐼", "🦊", "🦁", "🐸", "🐵", "🐧", "🦉", "🦋",
      "🌟", "🔥", "⚡", "🌈", "🎯", "🚀", "💎", "🎮", "🎵", "🎨",
      "🤖", "👾", "👻", "🦄", "🐉", "🦖", "🐙", "🍕", "🌸", "🍀",
      "💜", "💙", "💚", "🧡", "❤️", "🖤", "🤍", "💛", "🩷", "🩵"
    ];

    // Random name generator for public avatars
    const ADJECTIVES = [
      "Cosmic", "Neon", "Cyber", "Pixel", "Hyper", "Mega", "Ultra", "Turbo",
      "Quantum", "Stellar", "Lunar", "Solar", "Atomic", "Digital", "Electric",
      "Crystal", "Shadow", "Thunder", "Blazing", "Frozen", "Golden", "Silver"
    ];

    const NOUNS = [
      "Fox", "Wolf", "Hawk", "Bear", "Lion", "Tiger", "Dragon", "Phoenix",
      "Panther", "Eagle", "Shark", "Whale", "Falcon", "Raven", "Cobra",
      "Ninja", "Wizard", "Knight", "Samurai", "Pirate", "Robot", "Alien",
      "Spark", "Bolt", "Flame", "Frost", "Storm", "Blade", "Arrow", "Star"
    ];

    function generateRandomName() {
      const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
      const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
      return `${adj}${noun}`;
    }

    let currentAvatar = AVATARS[0];

    





    // ADHD-friendly: Question type categorization

    // NEW: Learning objectives per topic (what each question tests)

    function getLearningObjective(question) {
      const tema = question.tema ? question.tema.toLowerCase() : "";
      return LEARNING_OBJECTIVES[tema] || null;
    }

    // NEW: Extract all unique topics from questions for a given subject
    function getTopicsForSubject(subject) {
      const topics = new Set();
      state.allQuestions
        .filter(q => q.materia === subject)
        .forEach(q => { if (q.tema && q.tema !== "general") topics.add(q.tema); });
      return [...topics].sort();
    }

    function getQuestionType(question) {
      // Check if question has explicit type field
      if (question.type) {
        return question.type;
      }
      // Derive from tema
      const tema = question.tema ? question.tema.toLowerCase() : "";
      const typeInfo = QUESTION_TYPE_MAP[tema];
      if (typeInfo) {
        return typeInfo;
      }
      // Default fallback
      return { type: "Concepto Teorico", class: "type-concepto" };
    }



    const state = {
      customQuestions: [],
      allQuestions: [],
      quizQuestions: [],
      currentIndex: 0,
      elapsed: 0,
      timerId: null,
      answeredCurrent: false,
      lastSelectedSubject: MODULE_SUBJECTS[0] || "general",
      lastSelectedTopic: null,  // NEW: topic filter
      selectedMode: "subject",  // NEW: current study mode
      blockStats: null,
      appStats: loadStats(),
      wrongQuestions: {},
      mockHistory: [],
      // Simulacro state
      simulacroTimerId: null,
      simulacroStartTime: null,
      simulacroRemaining: SIMULACRO_DURATION_MS,
      isSimulacro: false
    };

    const els = {
      topTotalPoints: document.getElementById("top-total-points"),
      topStreakPill: document.getElementById("top-streak-pill"),
      topBestPill: document.getElementById("top-best-pill"),
      targetScore: document.getElementById("target-score"),
      targetBarFill: document.getElementById("target-bar-fill"),
      targetLabel: document.getElementById("target-label"),
      statStreak: document.getElementById("stat-streak"),
      statAnswered: document.getElementById("stat-answered"),
      statAccuracy: document.getElementById("stat-accuracy"),
      trendSection: document.getElementById("trend-section"),
      trendBars: document.getElementById("trend-bars"),
      trendValues: document.getElementById("trend-values"),
      weaknessSection: document.getElementById("weakness-section"),
      weaknessList: document.getElementById("weakness-list"),
      gapSection: document.getElementById("gap-section"),
      gapChart: document.getElementById("gap-chart"),
      recommendationsSection: document.getElementById("recommendations-section"),
      recommendationsList: document.getElementById("recommendations-list"),
      mockSection: document.getElementById("mock-section"),
      mockBars: document.getElementById("mock-bars"),
      mockValues: document.getElementById("mock-values"),
      startMateria: document.getElementById("start-materia"),
      customMateria: document.getElementById("custom-materia"),
      startStatus: document.getElementById("start-status"),
      topicFilterArea: document.getElementById("topic-filter-area"),
      learningObjective: document.getElementById("learning-objective"),
      learningObjectiveText: document.getElementById("learning-objective-text"),
      reviewCountBadge: document.getElementById("review-count-badge"),
      customStatus: document.getElementById("custom-status"),
      subjectStats: document.getElementById("subject-stats"),
      historyList: document.getElementById("history-list"),
      startForm: document.getElementById("start-form"),
      customForm: document.getElementById("custom-question-form"),
      quizProgress: document.getElementById("quiz-progress"),
      quizMateria: document.getElementById("quiz-materia"),
      quizCombo: document.getElementById("quiz-combo"),
      quizTimer: document.getElementById("quiz-timer"),
      timerRingFill: document.getElementById("timer-ring-fill"),
      speedBadge: document.getElementById("speed-badge"),
      quizProgressFill: document.getElementById("quiz-progress-fill"),
      questionCard: document.getElementById("question-card"),
      questionTypeBadge: document.getElementById("question-type-badge"),
      quizQuestion: document.getElementById("quiz-question"),
      quizOptions: document.getElementById("quiz-options"),
      quizTip: document.getElementById("quiz-tip"),
      quizFeedback: document.getElementById("quiz-feedback"),
      feedbackTitle: document.getElementById("feedback-title"),
      feedbackMessage: document.getElementById("feedback-message"),
      feedbackExplanation: document.getElementById("feedback-explanation"),
      feedbackMeta: document.getElementById("feedback-meta"),
      explanationCorrectSection: document.getElementById("explanation-correct-section"),
      explanationCorrectText: document.getElementById("explanation-correct-text"),
      explanationDistractorsSection: document.getElementById("explanation-distractors-section"),
      explanationDistractorsList: document.getElementById("explanation-distractors-list"),
      reportAnswerSection: document.getElementById("report-answer-section"),
      reportAnswerBtn: document.getElementById("report-answer-btn"),
      reportAnswerStatus: document.getElementById("report-answer-status"),
      videoRefSection: document.getElementById("video-ref-section"),
      videoRefList: document.getElementById("video-ref-list"),
      nextQuestionBtn: document.getElementById("next-question-btn"),
      reportSummary: document.getElementById("report-summary"),
      reportAccuracy: document.getElementById("report-accuracy"),
      reportAvgTime: document.getElementById("report-avg-time"),
      reportPoints: document.getElementById("report-points"),
      reportSlowTopics: document.getElementById("report-slow-topics"),
      reportWrongTopics: document.getElementById("report-wrong-topics"),
      retryBtn: document.getElementById("retry-btn"),
      backHomeBtn: document.getElementById("back-home-btn"),
      toast: document.getElementById("toast"),
      xpPop: document.getElementById("xp-pop"),
      confettiLayer: document.getElementById("confetti-layer"),
      reportBanner: document.getElementById("report-banner"),
      quizProgressLabel: document.getElementById("quiz-progress-label"),
      topbarAvatar: document.getElementById("topbar-avatar"),
      avatarPicker: document.getElementById("avatar-picker")
    };

    function defaultStats() {
      return {
        totalAnswered: 0,
        totalCorrect: 0,
        streak: 0,
        bestStreak: 0,
        totalPoints: 0,
        bySubject: {},
        history: []
      };
    }

    function loadJSON(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) {
          return fallback;
        }
        return JSON.parse(raw);
      } catch (error) {
        return fallback;
      }
    }

    function saveJSON(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    function loadStats() {
      const loaded = loadJSON(STORAGE_KEYS.stats, defaultStats());
      return {
        ...defaultStats(),
        ...loaded,
        bySubject: loaded.bySubject || {},
        history: Array.isArray(loaded.history) ? loaded.history : []
      };
    }

    function saveStats() {
      saveJSON(STORAGE_KEYS.stats, state.appStats);
    }

    // --- Wrong questions tracking (spaced repetition) ---
    function loadWrongQuestions() {
      // Returns a map: { questionId: { id, materia, tema, correctCount, wrongCount } }
      return loadJSON(STORAGE_KEYS.wrongQuestions, {});
    }

    function saveWrongQuestions() {
      saveJSON(STORAGE_KEYS.wrongQuestions, state.wrongQuestions);
    }

    function markQuestionWrong(question) {
      if (!state.wrongQuestions[question.id]) {
        state.wrongQuestions[question.id] = {
          id: question.id,
          materia: question.materia,
          tema: question.tema,
          correctCount: 0,
          wrongCount: 0,
          lastWrongAt: Date.now()
        };
      }
      state.wrongQuestions[question.id].wrongCount += 1;
      state.wrongQuestions[question.id].correctCount = 0;
      state.wrongQuestions[question.id].lastWrongAt = Date.now();
      saveWrongQuestions();
      updateReviewErrorsButton();
      updateReviewCountBadge();
    }

    function markQuestionCorrect(question) {
      if (!state.wrongQuestions[question.id]) return;
      delete state.wrongQuestions[question.id];
      saveWrongQuestions();
      updateReviewErrorsButton();
      updateReviewCountBadge();
    }

    function getWrongQuestionIds() {
      return Object.keys(state.wrongQuestions);
    }

    function updateReviewErrorsButton() {
      // Only updates the review count badge now
      updateReviewCountBadge();
    }

    // --- Flagged wrong answers ---
    function getFlaggedAnswers() {
      return loadJSON(STORAGE_KEYS.flaggedAnswers, []);
    }

    function flagAnswer(questionId) {
      const flagged = getFlaggedAnswers();
      if (!flagged.includes(questionId)) {
        flagged.push(questionId);
        saveJSON(STORAGE_KEYS.flaggedAnswers, flagged);
      }
    }

    function ensureSubjectStats(materia) {
      if (!state.appStats.bySubject[materia]) {
        state.appStats.bySubject[materia] = {
          answered: 0,
          correct: 0,
          totalTime: 0,
          failedTopics: {}
        };
      }
      return state.appStats.bySubject[materia];
    }

    function isValidQuestion(question) {
      if (!question || typeof question !== "object") {
        return false;
      }
      if (!question.id || !question.materia || !question.tema || !question.pregunta) {
        return false;
      }
      const opts = question.opciones;
      if (!Array.isArray(opts) || opts.length !== 4) {
        return false;
      }
      if (opts.some((o) => typeof o !== "string" || !String(o).trim())) {
        return false;
      }
      if (
        typeof question.correcta !== "number" ||
        !Number.isInteger(question.correcta) ||
        question.correcta < 0 ||
        question.correcta > 3
      ) {
        return false;
      }
      // explicacion may be empty for PDF-imported items; UI shows fallback copy
      return true;
    }

    function normalizeQuestion(question) {
      return {
        id: String(question.id).trim(),
        materia: String(question.materia).trim(),
        tema: String(question.tema).trim(),
        dificultad: Number(question.dificultad) || 1,
        pregunta: String(question.pregunta).trim(),
        opciones: question.opciones.map((opt) => String(opt).trim()),
        correcta: Number(question.correcta),
        explicacion: question.explicacion ? String(question.explicacion).trim() : "",
        tip: question.tip ? String(question.tip).trim() : "",
        type: question.type || null,
        explicacion_correcta: question.explicacion_correcta ? String(question.explicacion_correcta).trim() : "",
        analisis_distractores: question.analisis_distractores ? String(question.analisis_distractores).trim() : ""
      };
    }

    function loadCustomQuestions() {
      const loaded = loadJSON(STORAGE_KEYS.customQuestions, []);
      if (!Array.isArray(loaded)) {
        return [];
      }
      return loaded.filter(isValidQuestion).map(normalizeQuestion);
    }

    function saveCustomQuestions() {
      saveJSON(STORAGE_KEYS.customQuestions, state.customQuestions);
    }

    function reloadQuestions() {
      const bundled = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
      const merged = new Map();
      [...bundled, ...state.customQuestions]
        .filter(isValidQuestion)
        .map(normalizeQuestion)
        .forEach((question) => {
          merged.set(question.id, question);
        });
      state.allQuestions = [...merged.values()];
    }

    function getAllSubjects(all = false) {
      // Module subjects filter
      // Set all=true to get all subjects (for data migration)
      let subjects = new Set(state.allQuestions.map((question) => question.materia));
      if (!all) {
        subjects = new Set([...subjects].filter((s) => MODULE_SUBJECTS.includes(s)));
      }
      return [...subjects].sort();
    }

    function subjectLabel(subject) {
      return SUBJECT_LABELS[subject] || subject;
    }

    function setupSubjectSelects() {
      const subjects = getAllSubjects();
      if (subjects.length === 0) {
        console.warn("[${MODID}] No subjects found! state.allQuestions has", state.allQuestions.length, "questions");
        console.warn("[${MODID}] window.QUESTIONS is", typeof window.QUESTIONS, Array.isArray(window.QUESTIONS) ? `with ${window.QUESTIONS.length} items` : "");
      }
      const optionsMarkup = subjects
        .map((subject) => `<option value="${subject}">${subjectLabel(subject)}</option>`)
        .join("");
      els.startMateria.innerHTML = optionsMarkup;
      els.customMateria.innerHTML = optionsMarkup;

      if (subjects.includes(state.lastSelectedSubject)) {
        els.startMateria.value = state.lastSelectedSubject;
      }
      if (subjects.length > 0) {
        if (!els.startMateria.value) {
          els.startMateria.value = subjects[0];
        }
        if (!els.customMateria.value) {
          els.customMateria.value = subjects[0];
        }
      }

      // NEW: Render topic chips for currently selected subject
      renderTopicChips(els.startMateria.value);
    }

    // NEW: Render topic filter chips
    function renderTopicChips(subject) {
      const topics = getTopicsForSubject(subject);
      if (topics.length === 0) {
        els.topicFilterArea.innerHTML = "";
        els.topicFilterArea.style.display = "none";
        return;
      }

      els.topicFilterArea.style.display = "flex";
      els.topicFilterArea.innerHTML = `<span style="font-size:0.72rem;color:var(--muted);margin-right:4px;">Tema:</span>` +
        `<span class="topic-chip ${!state.lastSelectedTopic ? "active" : ""}" data-topic="">Todos</span>` +
        topics.map(t =>
          `<span class="topic-chip ${state.lastSelectedTopic === t ? "active" : ""}" data-topic="${t}">${t}</span>`
        ).join("");

      // Bind click events
      els.topicFilterArea.querySelectorAll(".topic-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          state.lastSelectedTopic = chip.dataset.topic || null;
          els.topicFilterArea.querySelectorAll(".topic-chip").forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
        });
      });
    }

    function formatPercent(value) {
      if (!Number.isFinite(value)) {
        return "0%";
      }
      return `${Math.round(value)}%`;
    }

    function renderHomeStats() {
      const answered = state.appStats.totalAnswered;
      const accuracy = answered === 0 ? 0 : (state.appStats.totalCorrect / answered) * 100;
      els.statStreak.textContent = String(state.appStats.streak);
      els.statAnswered.textContent = String(answered);
      els.statAccuracy.textContent = formatPercent(accuracy);
      els.topTotalPoints.textContent = String(state.appStats.totalPoints);
      els.topStreakPill.textContent = `Racha ${state.appStats.streak}`;
      els.topBestPill.textContent = `Mejor ${state.appStats.bestStreak}`;
      els.topStreakPill.classList.toggle("hot", state.appStats.streak >= 3);

      const nudge = document.getElementById("onboarding-nudge");
      if (nudge) nudge.style.display = answered === 0 ? "" : "none";

      const subjects = getAllSubjects();
      if (subjects.length === 0) {
        // Show error if no questions loaded
        els.subjectStats.innerHTML = `
          <div class="subject-item" style="border-color:rgba(255,93,115,0.4);background:rgba(255,93,115,0.08);">
            <strong>⚠️ No hay preguntas cargadas</strong>
            <small>Parece que el banco de preguntas no se cargó. Abre la consola del navegador (F12) para ver errores.</small><br>
            <small style="color:var(--accent);margin-top:6px;display:inline-block;">
              💡 Tip: Usa <code style="background:rgba(0,0,0,0.3);padding:2px 6px;border-radius:4px;">python3 -m http.server 8080</code> en vez de abrir el archivo directo.
            </small>
          </div>`;
        return;
      }

      els.subjectStats.innerHTML = subjects
        .map((subject) => {
          const subjectStats = ensureSubjectStats(subject);
          const subjectAccuracy = subjectStats.answered === 0
            ? 0
            : (subjectStats.correct / subjectStats.answered) * 100;
          const avgTime = subjectStats.answered === 0
            ? 0
            : Math.round(subjectStats.totalTime / subjectStats.answered);
          const accClass = subjectStats.answered === 0
            ? ""
            : subjectAccuracy >= 75 ? "accuracy-good"
            : subjectAccuracy >= 50 ? "accuracy-mid"
            : "accuracy-bad";
          const hint = subjectStats.answered > 0 ? `<small style="color:var(--accent);font-size:0.7rem;">▶ Practicar</small>` : "";
          const correctCount = subjectStats.correct || 0;
          const wrongCount = subjectStats.answered - correctCount;
          return `
            <article class="subject-item ${accClass}" data-subject="${subject}" title="Clic para practicar ${subjectLabel(subject)}">
              <strong>${subjectLabel(subject)}</strong>
              <small>${subjectStats.answered} respondidas</small><br>
              <small><span class="num-correct">✓ ${correctCount}</span> / <span class="num-wrong">✗ ${wrongCount}</span></small><br>
              <small>${formatPercent(subjectAccuracy)} precisión</small><br>
              <small>${avgTime}s promedio</small>
              ${hint}
            </article>
          `;
        })
        .join("");
    }

    function updateTargetTracker() {
      const recent = state.appStats.history.slice(-5);
      if (recent.length === 0) {
        els.targetScore.textContent = "--";
        els.targetLabel.textContent = "Completa un bloque";
        els.targetBarFill.style.width = "0%";
        return;
      }

      // Estimate aciertos based on average accuracy of recent blocks
      const totalCorrect = recent.reduce((sum, b) => sum + b.correct, 0);
      const totalQuestions = recent.reduce((sum, b) => sum + b.total, 0);
      const avgAccuracy = totalQuestions === 0 ? 0 : (totalCorrect / totalQuestions);

      // Project to full exam length
      const estimatedAciertos = Math.round(avgAccuracy * EXAM_TOTAL);
      const pct = Math.min(100, (estimatedAciertos / TARGET_SCORE) * 100);

      els.targetScore.textContent = `~${estimatedAciertos}/${EXAM_TOTAL}`;
      els.targetBarFill.style.width = `${pct}%`;

      if (estimatedAciertos >= TARGET_SCORE) {
        els.targetBarFill.className = "target-bar-fill high";
        els.targetLabel.textContent = "Vas bien!";
      } else if (estimatedAciertos >= TARGET_SCORE - 15) {
        els.targetBarFill.className = "target-bar-fill mid";
        const diff = TARGET_SCORE - estimatedAciertos;
        els.targetLabel.textContent = `Faltan ~${diff}`;
      } else {
        els.targetBarFill.className = "target-bar-fill low";
        const diff = TARGET_SCORE - estimatedAciertos;
        els.targetLabel.textContent = `Faltan ~${diff}`;
      }
    }

    function renderTrends() {
      const recent = state.appStats.history.slice(-5);
      if (recent.length < 2) {
        els.trendSection.style.display = "none";
        return;
      }

      els.trendSection.style.display = "";
      const accuracies = recent.map((b) => (b.total === 0 ? 0 : Math.round((b.correct / b.total) * 100)));

      // Mini bar chart
      els.trendBars.innerHTML = accuracies
        .map((acc) => {
          const height = Math.max(4, (acc / 100) * 32);
          const color = acc >= 80 ? "var(--accent-3)" : acc >= 60 ? "#fbbf24" : "var(--danger)";
          return `<div style="flex:1;height:${height}px;background:${color};border-radius:3px 3px 0 0;transition:height 200ms ease;"></div>`;
        })
        .join("");

      els.trendValues.innerHTML = accuracies
        .map((acc) => `<div style="flex:1;text-align:center;font-size:0.7rem;color:var(--muted);">${acc}%</div>`)
        .join("");
    }

    function renderWeaknesses() {
      // Find topics with lowest accuracy across all subjects
      const topicStats = {};
      state.appStats.history.forEach((block) => {
        // Aggregate from bySubject (module subjects filter)
        for (const [subj, data] of Object.entries(state.appStats.bySubject)) {
          if (!MODULE_SUBJECTS.includes(subj)) continue;
          if (data.failedTopics) {
            for (const [topic, fails] of Object.entries(data.failedTopics)) {
              if (!topicStats[topic]) topicStats[topic] = { fails: 0, subject: subj };
              topicStats[topic].fails += fails;
            }
          }
        }
      });

      const weakTopics = Object.entries(topicStats)
        .map(([topic, data]) => ({ topic, ...data, subjectLabel: subjectLabel(data.subject) }))
        .sort((a, b) => b.fails - a.fails)
        .slice(0, 5);

      if (weakTopics.length === 0) {
        els.weaknessSection.style.display = "none";
        return;
      }

      els.weaknessSection.style.display = "";
      els.weaknessList.innerHTML = weakTopics
        .map(
          (item) => `<li><strong>${item.topic}</strong> <small>(${item.subjectLabel}): ${item.fails} error(es)</small></li>`
        )
        .join("");
    }

    function renderGapChart() {
      const subjects = getAllSubjects();
      if (subjects.length === 0 || state.appStats.totalAnswered === 0) {
        els.gapSection.style.display = "none";
        return;
      }

      els.gapSection.style.display = "";

      const subjectData = subjects.map((subj) => {
        const data = state.appStats.bySubject[subj] || { answered: 0, correct: 0 };
        const accuracy = data.answered === 0 ? 0 : (data.correct / data.answered) * 100;
        return {
          subject: subj,
          label: subjectLabel(subj).substring(0, 8),
          accuracy: Math.round(accuracy),
          answered: data.answered
        };
      });

      els.gapChart.innerHTML = subjectData
        .map((item) => {
          const colorClass = item.accuracy >= 70 ? "good" : item.accuracy >= 50 ? "medium" : "bad";
          return `
            <div class="gap-bar">
              <div class="gap-bar-track">
                <div class="gap-bar-fill ${colorClass}" style="height: ${Math.max(item.accuracy, 4)}%;"></div>
              </div>
              <div class="gap-bar-value">${item.accuracy}%</div>
              <div class="gap-bar-label">${item.label}</div>
            </div>
          `;
        })
        .join("");
    }

    function renderRecommendations() {
      if (state.appStats.totalAnswered < 10) {
        els.recommendationsSection.style.display = "none";
        return;
      }

      els.recommendationsSection.style.display = "";
      const recommendations = [];

      // Find weakest subject (module subjects filter)
      const subjects = Object.entries(state.appStats.bySubject)
        .filter(([subj, data]) => MODULE_SUBJECTS.includes(subj) && data.answered >= 5)
        .map(([subj, data]) => ({
          subject: subj,
          accuracy: data.answered === 0 ? 0 : (data.correct / data.answered) * 100,
          answered: data.answered
        }))
        .sort((a, b) => a.accuracy - b.accuracy);

      if (subjects.length > 0) {
        const weakest = subjects[0];
        if (weakest.accuracy < 60) {
          recommendations.push({
            title: `Practica más ${subjectLabel(weakest.subject)}`,
            text: `Tienes ${weakest.accuracy}% de precision con ${weakest.answered} preguntas. Intenta hacer otro bloque de esta materia para subir tu confianza.`,
            action: `Iniciar ${subjectLabel(weakest.subject)}`,
            actionType: "subject",
            actionValue: weakest.subject
          });
        }
      }

      // Speed recommendation
      const recentBlocks = state.appStats.history.slice(-3);
      if (recentBlocks.length > 0) {
        const avgTime = recentBlocks.reduce((sum, b) => sum + (b.avgTime || 0), 0) / recentBlocks.length;
        if (avgTime > 60) {
          recommendations.push({
            title: "Trata de responder mas rapido",
            text: `Tu tiempo promedio es ${Math.round(avgTime)}s por pregunta. En el examen real tienes ~90s por pregunta. Practica con bloques de 15 para mejorar tu velocidad.`,
            action: "Examen rapido (30 preguntas)",
            actionType: "mode",
            actionValue: "quick"
          });
        }
      }

      // Streak recommendation
      if (state.appStats.bestStreak >= 5 && state.appStats.streak < 3) {
        recommendations.push({
          title: "Recupera tu racha!",
          text: `Tu mejor racha fue ${state.appStats.bestStreak} respuestas correctas. Ahora tienes ${state.appStats.streak}. Vamos por otra racha!`,
          action: "Modo practica",
          actionType: "focus",
          actionValue: "streak"
        });
      }

      // If no specific recommendations, give general encouragement
      if (recommendations.length === 0) {
        const accuracy = (state.appStats.totalCorrect / state.appStats.totalAnswered) * 100;
        if (accuracy >= 70) {
          recommendations.push({
            title: "Vas muy bien!",
            text: `Tienes ${Math.round(accuracy)}% de precision global. Sigue practicando para mantener tu nivel.`,
            action: "Examen",
            actionType: "mode",
            actionValue: "area1"
          });
        } else {
          recommendations.push({
            title: "Sigue practicando",
            text: `Tu precision es ${Math.round(accuracy)}%. Haz bloques por materia para reforzar los temas mas dificiles.`,
            action: "Ver desglose por materia",
            actionType: "scroll",
            actionValue: "subject-stats"
          });
        }
      }

      els.recommendationsList.innerHTML = recommendations
        .map((rec) => `
          <div class="recommendation-card">
            <h4>${rec.title}</h4>
            <p>${rec.text}</p>
            <span class="action-btn" data-action="${rec.actionType}" data-value="${rec.actionValue}">${rec.action}</span>
          </div>
        `)
        .join("");

      // Bind action buttons
      els.recommendationsList.querySelectorAll(".action-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const action = btn.dataset.action;
          const value = btn.dataset.value;

          if (action === "subject") {
            state.selectedMode = "subject";
            state.lastSelectedTopic = null;
            els.startMateria.value = value;
            renderTopicChips(value);
            els.startForm.dispatchEvent(new Event("submit"));
          } else if (action === "mode") {
            state.selectedMode = value === "quick" ? "subject" : value;
            els.startForm.dispatchEvent(new Event("submit"));
          } else if (action === "scroll") {
            document.getElementById("subject-stats").scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }

    function loadMockHistory() {
      return loadJSON(STORAGE_KEYS.mockHistory, []);
    }

    function saveMockHistory() {
      saveJSON(STORAGE_KEYS.mockHistory, state.mockHistory);
    }

    function loadAvatar() {
      // Try loading custom avatar first
      const custom = loadJSON(STORAGE_KEYS.avatarCustom, null);
      if (custom && custom.emoji && custom.name) {
        return { id: "custom", emoji: custom.emoji, name: custom.name, tagline: "custom avatar" };
      }
      // Fall back to preset avatars
      const savedId = localStorage.getItem(STORAGE_KEYS.avatar);
      const found = AVATARS.find(a => a.id === savedId);
      return found || AVATARS[0];
    }

    function saveAvatar(avatarId) {
      localStorage.setItem(STORAGE_KEYS.avatar, avatarId);
      // Clear custom avatar if selecting a preset
      if (avatarId !== "custom") {
        localStorage.removeItem(STORAGE_KEYS.avatarCustom);
      }
    }

    function saveCustomAvatar(emoji, name) {
      saveJSON(STORAGE_KEYS.avatarCustom, { emoji, name });
      currentAvatar = { id: "custom", emoji, name, tagline: "custom avatar" };
    }

    function renderAvatarPicker() {
      if (!els.avatarPicker) return;
      els.avatarPicker.innerHTML = AVATARS.map(av => `
        <button class="avatar-btn${av.id === currentAvatar.id ? " selected" : ""}"
          data-avatar-id="${av.id}" title="${av.tagline}" aria-label="Seleccionar avatar ${av.name}">
          <span class="av-emoji">${av.emoji}</span>
          <span class="av-name">${av.name}</span>
        </button>
      `).join("");
      els.avatarPicker.querySelectorAll(".avatar-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const av = AVATARS.find(a => a.id === btn.dataset.avatarId);
          if (!av) return;
          currentAvatar = av;
          saveAvatar(av.id);
          renderAvatarPicker();
          updateTopbarAvatar();
          // Hide custom avatar creator when selecting preset
          const customCreator = document.getElementById("custom-avatar-creator");
          if (customCreator) customCreator.style.display = "none";
          const toggleBtn = document.getElementById("toggle-custom-avatar-btn");
          if (toggleBtn) toggleBtn.textContent = "+ Crear personalizado";
        });
      });
    }

    function updateTopbarAvatar() {
      if (els.topbarAvatar) els.topbarAvatar.textContent = currentAvatar.emoji;
    }

    // NEW: Custom avatar system
    function initCustomAvatarSystem() {
      const toggleBtn = document.getElementById("toggle-custom-avatar-btn");
      const customCreator = document.getElementById("custom-avatar-creator");
      const emojiInput = document.getElementById("custom-avatar-emoji");
      const nameInput = document.getElementById("custom-avatar-name");
      const randomizeBtn = document.getElementById("randomize-name-btn");
      const applyBtn = document.getElementById("apply-custom-avatar-btn");
      const emojiGrid = document.getElementById("emoji-grid");

      if (!toggleBtn || !customCreator) return;

      // Toggle custom avatar creator
      toggleBtn.addEventListener("click", () => {
        const isVisible = customCreator.style.display !== "none";
        customCreator.style.display = isVisible ? "none" : "block";
        toggleBtn.textContent = isVisible ? "+ Crear personalizado" : "− Ocultar";
        if (!isVisible && emojiGrid && !emojiGrid.hasChildNodes()) {
          renderEmojiGrid();
        }
      });

      // Randomize name
      if (randomizeBtn) {
        randomizeBtn.addEventListener("click", () => {
          nameInput.value = generateRandomName();
          nameInput.focus();
        });
      }

      // Apply custom avatar
      if (applyBtn) {
        applyBtn.addEventListener("click", () => {
          const emoji = emojiInput.value.trim() || "🐱";
          const name = nameInput.value.trim() || generateRandomName();
          saveCustomAvatar(emoji, name);
          renderAvatarPicker();
          updateTopbarAvatar();
          showToast(`✨ Avatar "${name}" ${emoji} aplicado!`);
        });
      }

      // Render emoji grid
      function renderEmojiGrid() {
        if (!emojiGrid) return;
        emojiGrid.innerHTML = EMOJI_OPTIONS.map(emoji => `
          <button class="emoji-option" data-emoji="${emoji}" type="button" aria-label="Seleccionar emoji ${emoji}">
            ${emoji}
          </button>
        `).join("");
        emojiGrid.querySelectorAll(".emoji-option").forEach(btn => {
          btn.addEventListener("click", () => {
            emojiGrid.querySelectorAll(".emoji-option").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            emojiInput.value = btn.dataset.emoji;
          });
        });
      }
    }

    function reactAvatar(type) {
      const el = els.topbarAvatar;
      if (!el) return;
      el.classList.remove("react-correct", "react-wrong");
      void el.offsetWidth;
      el.classList.add(type === "correct" ? "react-correct" : "react-wrong");
      setTimeout(() => el.classList.remove("react-correct", "react-wrong"), 500);
    }

    function renderMockHistory() {
      const mocks = state.mockHistory || [];
      if (mocks.length === 0) {
        els.mockSection.style.display = "none";
        return;
      }

      els.mockSection.style.display = "";
      // Show estimated score for each mock
      const estimated = mocks.map((m) => Math.round((m.accuracy / 100) * EXAM_TOTAL));

      // Target line at 105
      const targetPct = (TARGET_SCORE / EXAM_TOTAL) * 100;

      els.mockBars.innerHTML = estimated
        .map((val, i) => {
          const height = Math.max(4, (val / EXAM_TOTAL) * 48);
          const color = val >= TARGET_SCORE ? "var(--accent-3)" : val >= TARGET_SCORE - 10 ? "#fbbf24" : "var(--danger)";
          return `<div style="flex:1;height:${height}px;background:${color};border-radius:3px 3px 0 0;position:relative;">
            ${i === estimated.length - 1 ? `<div style="position:absolute;left:-2px;right:-2px;bottom:${(targetPct / 100) * 48}px;height:1px;background:var(--accent-2);opacity:0.6;"></div>` : ""}
          </div>`;
        })
        .join("");

      els.mockValues.innerHTML = estimated
        .map((val) => {
          const diff = val - TARGET_SCORE;
          const label = diff >= 0 ? `+${diff}` : `${diff}`;
          return `<div style="flex:1;text-align:center;font-size:0.7rem;color:var(--muted);">${val}<br><span style="color:${diff >= 0 ? "var(--accent-3)" : "var(--danger)"};font-size:0.65rem;">${label}</span></div>`;
        })
        .join("");
    }

    function renderHistory() {
      const recent = [...state.appStats.history].slice(-6).reverse();
      if (recent.length === 0) {
        els.historyList.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><span class="empty-icon">📋</span><strong>Sin bloques todavía</strong><p>Completa tu primer bloque de estudio para ver tu historial aquí.</p></div>`;
        return;
      }

      els.historyList.innerHTML = recent
        .map((item) => {
          const when = new Date(item.finishedAt).toLocaleString();
          const wrong = item.total - item.correct;
          return `
            <article class="history-item">
              <strong>${subjectLabel(item.materia)}</strong>
              <small><span class="num-correct">✓ ${item.correct}</span> / <span class="num-wrong">✗ ${wrong}</span> de ${item.total} (${item.accuracy}%)</small><br>
              <small>${item.avgTime}s por pregunta | +${item.points} pts</small><br>
              <small>${when}</small>
            </article>
          `;
        })
        .join("");
    }

    function renderHome() {
      renderHomeStats();
      renderHistory();
      updateTargetTracker();
      renderTrends();
      renderWeaknesses();
      renderGapChart();
      renderRecommendations();
      renderMockHistory();
    }

    function showScreen(screenId) {
      document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.toggle("active", screen.id === screenId);
      });

      if (screenId === "report-screen") {
        const panel = document.querySelector("#report-screen > .panel");
        if (panel) {
          panel.style.animation = "none";
          void panel.offsetWidth;
          panel.style.animation = "slide-up-in 420ms var(--ease-out-quart) both";
        }
        setTimeout(() => {
          animateCounter(els.reportAccuracy, _reportTargets.accuracy, "%", 900);
          animateCounter(els.reportAvgTime, _reportTargets.avgTime, "s", 700);
          const ptsEl = els.reportPoints;
          const start = performance.now();
          const target = _reportTargets.points;
          function tickPts(now) {
            const t = Math.min((now - start) / 1100, 1);
            const eased = 1 - Math.pow(1 - t, 4);
            ptsEl.textContent = `+${Math.round(target * eased)}`;
            if (t < 1) requestAnimationFrame(tickPts);
            else {
              ptsEl.textContent = `+${target}`;
              ptsEl.classList.add("counter-done");
              setTimeout(() => ptsEl.classList.remove("counter-done"), 300);
            }
          }
          ptsEl.textContent = "+0";
          requestAnimationFrame(tickPts);
        }, 180);
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function setStatus(element, text, type = "neutral") {
      element.textContent = text;
      element.classList.remove("success", "error");
      if (type === "success") {
        element.classList.add("success");
      }
      if (type === "error") {
        element.classList.add("error");
      }
    }

    function showToast(message) {
      els.toast.textContent = message;
      els.toast.className = "toast show";
      setTimeout(() => {
        els.toast.classList.remove("show");
      }, 2000);
    }

    let _reportTargets = { accuracy: 0, avgTime: 0, points: 0 };

    function animateCounter(el, target, suffix = "", duration = 900) {
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4); // ease-out-quart
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = `${target}${suffix}`;
          el.classList.add("counter-done");
          setTimeout(() => el.classList.remove("counter-done"), 300);
        }
      }
      el.textContent = `0${suffix}`;
      requestAnimationFrame(tick);
    }

    function showXp(points) {
      els.xpPop.textContent = `+${points} XP`;
      els.xpPop.classList.remove("show");
      void els.xpPop.offsetWidth;
      els.xpPop.classList.add("show");
      setTimeout(() => {
        els.xpPop.classList.remove("show");
      }, 760);
    }

    const STREAK_MILESTONES = {
      5:  "🔥 ¡Racha x5! ¡Imparable!",
      10: "⚡ ¡10 seguidas! ¡Eres una máquina!",
      15: "🚀 ¡15 en racha! " + (STREAK_MESSAGES[15] || "¡Nivel pro!"),
      20: "💥 ¡20 seguidas! ¡LEGEND!"
    };

    function showStreakMilestone(streak) {
      const msg = STREAK_MILESTONES[streak] || `🔥 ¡${streak} en racha!`;
      els.toast.textContent = msg;
      els.toast.className = "toast milestone show";
      setTimeout(() => { els.toast.classList.remove("show", "milestone"); }, 2400);
      createConfetti(45);
      const fireEl = document.getElementById("quiz-streak-fire");
      if (fireEl) {
        fireEl.style.animation = "none";
        void fireEl.offsetWidth;
        fireEl.style.animation = "streak-burst 480ms var(--ease-out-expo)";
        setTimeout(() => { fireEl.style.animation = ""; }, 500);
      }
    }

    function updateComboUI() {
      const streak = state.appStats.streak;
      els.quizCombo.textContent = `Combo x${streak}`;
      els.quizCombo.classList.toggle("hot", streak >= 3);

      const fireEl = document.getElementById("quiz-streak-fire");
      if (fireEl) {
        if (streak === 0) {
          fireEl.textContent = "🔥 0";
          fireEl.className = "streak-fire";
        } else if (streak >= 10) {
          fireEl.textContent = `⚡ ${streak}`;
          fireEl.className = "streak-fire blazing";
        } else {
          fireEl.textContent = `🔥 ${streak}`;
          fireEl.className = `streak-fire${streak >= 3 ? " active" : ""}`;
        }
      }
    }

    function shuffle(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function calculatePoints(difficulty, streak) {
      const base = 8 + (Number(difficulty) || 1) * 4;
      const steps = Math.floor(Math.max(streak - 1, 0) / 3);
      const multiplier = Math.min(2.5, 1 + steps * 0.25);
      return Math.round(base * multiplier);
    }

    // TIMER_RING_CIRCUMFERENCE already declared at line 2291
    const TARGET_TIME_PER_QUESTION = 60; // seconds - target time

    function startTimer() {
      stopTimer();
      state.elapsed = 0;
      updateTimerUI(0);
      state.timerId = setInterval(() => {
        state.elapsed += 1;
        updateTimerUI(state.elapsed);
      }, 1000);
    }

    function stopTimer() {
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
    }

    function updateTimerUI(seconds) {
      els.quizTimer.textContent = `${seconds}s`;

      // Update ring progress (0-60s full circle)
      const progress = Math.min(seconds / TARGET_TIME_PER_QUESTION, 1);
      const offset = TIMER_RING_CIRCUMFERENCE * (1 - progress);
      els.timerRingFill.style.strokeDashoffset = offset;

      // Color states
      els.quizTimer.classList.remove("warn", "critical");
      els.timerRingFill.classList.remove("warn", "critical");

      if (seconds > 90) {
        els.quizTimer.classList.add("critical");
        els.timerRingFill.classList.add("critical");
      } else if (seconds > 60) {
        els.quizTimer.classList.add("warn");
        els.timerRingFill.classList.add("warn");
      }
    }

    function getSpeedLabel(seconds) {
      if (seconds < 20) return { text: "Rapido", class: "fast" };
      if (seconds < 45) return { text: "Bien", class: "" };
      if (seconds < 60) return { text: "Normal", class: "" };
      return { text: "Lento", class: "slow" };
    }

    // ===== Simulacro timer functions =====
    function formatSimulacroTime(ms) {
      const totalSeconds = Math.max(0, Math.floor(ms / 1000));
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function loadSimulacroTimer() {
      try {
        const saved = localStorage.getItem(SIMULACRO_STORAGE_KEY);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.endTime && data.endTime > Date.now()) {
            return { remaining: data.endTime - Date.now(), startedAt: data.startedAt };
          }
        }
      } catch (e) {}
      return null;
    }

    function saveSimulacroTimer(remaining) {
      try {
        localStorage.setItem(SIMULACRO_STORAGE_KEY, JSON.stringify({
          startTime: state.simulacroStartTime,
          endTime: Date.now() + remaining,
          startedAt: state.simulacroStartTime
        }));
      } catch (e) {}
    }

    function clearSimulacroTimer() {
      try {
        localStorage.removeItem(SIMULACRO_STORAGE_KEY);
      } catch (e) {}
    }

    function startSimulacroTimer() {
      // Load saved timer if exists (page refresh recovery)
      const saved = loadSimulacroTimer();
      if (saved) {
        state.simulacroRemaining = saved.remaining;
        state.simulacroStartTime = saved.startedAt;
      } else {
        state.simulacroRemaining = SIMULACRO_DURATION_MS;
        state.simulacroStartTime = Date.now();
      }
      updateSimulacroTimerUI();
      state.isSimulacro = true;
      state.simulacroTimerId = setInterval(() => {
        state.simulacroRemaining -= 1000;
        updateSimulacroTimerUI();
        saveSimulacroTimer(state.simulacroRemaining);
        // Auto-submit when time runs out
        if (state.simulacroRemaining <= 0) {
          finishSimulacroTimeout();
        }
      }, 1000);
    }

    function stopSimulacroTimer() {
      if (state.simulacroTimerId) {
        clearInterval(state.simulacroTimerId);
        state.simulacroTimerId = null;
      }
      state.isSimulacro = false;
      clearSimulacroTimer();
    }

    function updateSimulacroTimerUI() {
      const display = formatSimulacroTime(state.simulacroRemaining);
      els.quizTimer.textContent = display;
      els.quizTimer.classList.remove("warn", "critical", "simulacro");
      els.quizTimer.classList.add("simulacro");
      // Hide ring in simulacro mode
      if (els.timerRingFill) {
        els.timerRingFill.style.display = "none";
      }

      // Color changes based on remaining time
      if (state.simulacroRemaining <= SIMULACRO_CRITICAL_MS) {
        els.quizTimer.classList.add("critical");
      } else if (state.simulacroRemaining <= SIMULACRO_WARNING_MS) {
        els.quizTimer.classList.add("warn");
      }
    }

    function finishSimulacroTimeout() {
      stopSimulacroTimer();
      // Show timeout message inline (no alert)
      showSimulacroTimeoutMessage();
      // Auto-submit current state
      if (state.quizQuestions.length > 0 && !state.answeredCurrent) {
        selectOption(-1); // Mark as skipped
      }
      setTimeout(() => {
        showReportScreen();
      }, 500);
    }

    function showSimulacroTimeoutMessage() {
      // Inject timeout message into the quiz header
      const metaLine = els.quizProgress?.closest(".meta-line");
      if (metaLine) {
        const existing = metaLine.querySelector(".simulacro-timeout-msg");
        if (!existing) {
          const msg = document.createElement("div");
          msg.className = "simulacro-timeout-msg";
          msg.textContent = "Se acabó el tiempo — así se siente el examen real.";
          msg.style.cssText = "color:#ff4757;font-size:0.85rem;font-weight:600;margin-top:4px;";
          metaLine.appendChild(msg);
        }
      }
    }

    function startQuiz(subject) {
      const mode = state.selectedMode;
      let questions = [];
      let label = "";

      // NEW: Apply topic filter if set
      let pool = state.allQuestions;
      if (state.lastSelectedTopic) {
        pool = pool.filter(q => q.materia === subject && q.tema === state.lastSelectedTopic);
      } else if (mode === "subject") {
        pool = pool.filter(q => q.materia === subject);
      }

      if (mode === "mock") {
        // Mock exam: mezcla ponderada por materia (MODULE_DISTRIBUTION)
        const subjectQuestions = {};
        let totalAvailable = 0;
        for (const [subj, count] of Object.entries(MODULE_DISTRIBUTION)) {
          const subjPool = state.allQuestions.filter(q => q.materia === subj);
          const taken = shuffle(subjPool).slice(0, Math.min(count, subjPool.length));
          subjectQuestions[subj] = taken;
          totalAvailable += taken.length;
        }

        if (totalAvailable === 0) {
          setStatus(els.startStatus, "No hay preguntas suficientes para un simulacro.", "error");
          return;
        }

        questions = shuffle(Object.values(subjectQuestions).flat());
        label = `Simulacro de examen (${questions.length} preguntas, ${SIMULACRO_TIME_LABEL})`;
        state.lastSelectedSubject = "mock";
      } else if (mode === "review") {
        // Spaced repetition: prioritize questions with highest wrongCount
        const wrongIds = getWrongQuestionIds();
        if (wrongIds.length === 0) {
          setStatus(els.startStatus, "No tienes errores previos. Responde preguntas primero.", "error");
          return;
        }

        // Score each wrong question: higher wrongCount = higher priority, decay after correct
        const scoredWrong = wrongIds
          .map(id => {
            const q = state.allQuestions.find(q => q.id === id);
            if (!q) return null;
            const sr = state.wrongQuestions[id];
            return { ...q, _wrongCount: sr.wrongCount, _lastWrongAt: sr.lastWrongAt || 0 };
          })
          .filter(Boolean)
          .sort((a, b) => {
            // Oldest failure first — true spaced repetition
            if (a._lastWrongAt !== b._lastWrongAt) return a._lastWrongAt - b._lastWrongAt;
            return b._wrongCount - a._wrongCount;
          });

        const blockSize = Math.min(20, scoredWrong.length);
        questions = scoredWrong.slice(0, blockSize).map(({ _wrongCount, _lastWrongAt, ...q }) => q);
        label = `Repaso espaciado (${blockSize} preguntas priorizadas)`;
        state.lastSelectedSubject = "review";
      } else if (mode === "topic") {
        // Topic-specific mode
        if (pool.length === 0) {
          const topic = state.lastSelectedTopic || "general";
          setStatus(els.startStatus, `No hay preguntas de "${topic}" en ${subjectLabel(subject)}.`, "error");
          return;
        }
        const blockSize = Math.min(15, pool.length);
        questions = shuffle(pool).slice(0, blockSize);
        const topicLabel = state.lastSelectedTopic || "todos los temas";
        label = `${topicLabel} — ${subjectLabel(subject)} (${blockSize} preguntas)`;
        state.lastSelectedSubject = subject;
      } else {
        // Subject mode (existing behavior)
        if (pool.length === 0) {
          setStatus(els.startStatus, `No hay preguntas disponibles para ${subjectLabel(subject)}.`, "error");
          return;
        }
        const blockSize = Math.min(15, pool.length);
        questions = shuffle(pool).slice(0, blockSize);
        label = `Bloque ${subjectLabel(subject)} (${blockSize} preguntas)`;
        state.lastSelectedSubject = subject;
      }

      state.quizQuestions = questions;
      state.currentIndex = 0;
      state.blockStats = {
        materia: state.lastSelectedSubject,
        total: questions.length,
        correct: 0,
        points: 0,
        startedAt: new Date().toISOString(),
        answers: [],
        topicTimes: {},
        wrongTopics: {},
        subjectBreakdown: {},
        topicBreakdown: {}
      };

      // Track per-subject stats for mixed exams
      if (mode === "mock" || mode === "review") {
        for (const q of questions) {
          if (!state.blockStats.subjectBreakdown[q.materia]) {
            state.blockStats.subjectBreakdown[q.materia] = { total: 0, correct: 0 };
          }
          state.blockStats.subjectBreakdown[q.materia].total += 1;
        }
      }

      // NEW: Mock exam timer (3 hours = 10800 seconds)
      if (mode === "mock") {
        state.mockElapsed = 0;
        state.mockTimerId = setInterval(() => {
          state.mockElapsed += 1;
        }, 1000);
      }

      setStatus(els.startStatus, `${label} iniciado.`, "success");
      showScreen("quiz-screen");

      // Start simulacro timer if in mock mode with 100+ questions
      if (state.selectedMode === "mock" && state.quizQuestions.length >= 100) {
        startSimulacroTimer();
      }

      updateComboUI();
      renderQuestion();
    }

    function renderQuestion() {
      const question = state.quizQuestions[state.currentIndex];
      if (!question) {
        finishQuiz();
        return;
      }

      state.answeredCurrent = false;
      els.nextQuestionBtn.disabled = true;
      els.nextQuestionBtn.textContent = state.currentIndex === state.quizQuestions.length - 1 ? "Finalizar" : "Siguiente";
      els.quizProgress.textContent = `Pregunta ${state.currentIndex + 1} / ${state.quizQuestions.length}`;
      if (els.quizProgressLabel) {
        els.quizProgressLabel.textContent = `${state.currentIndex + 1} / ${state.quizQuestions.length}`;
      }
      els.quizMateria.textContent = subjectLabel(question.materia);
      updateComboUI();
      const progress = ((state.currentIndex + 1) / state.quizQuestions.length) * 100;
      els.quizProgressFill.style.width = `${progress}%`;
      els.quizQuestion.textContent = question.pregunta;

      // Store current question reference for report button
      window.STATE_QUESTION = question;

      // NEW: Show learning objective
      const learningObj = getLearningObjective(question);
      if (learningObj) {
        els.learningObjectiveText.textContent = learningObj;
        els.learningObjective.style.display = "block";
      } else {
        els.learningObjective.style.display = "none";
      }

      // ADHD-friendly: Show question type badge
      const questionTypeInfo = getQuestionType(question);
      els.questionTypeBadge.textContent = questionTypeInfo.type;
      els.questionTypeBadge.className = `question-type-badge ${questionTypeInfo.class}`;
      els.questionTypeBadge.style.display = "inline-block";

      els.quizOptions.innerHTML = "";
      question.opciones.forEach((optionText, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option";
        button.textContent = `${String.fromCharCode(65 + index)}. ${optionText}`;
        button.addEventListener("click", () => handleAnswer(index));
        els.quizOptions.appendChild(button);
      });

      if (question.tip) {
        els.quizTip.textContent = `Tip: ${question.tip}`;
        els.quizTip.style.display = "block";
      } else {
        els.quizTip.style.display = "none";
      }

      // Reset feedback sections
      els.quizFeedback.className = "feedback";
      els.feedbackTitle.textContent = "";
      els.feedbackMessage.textContent = "";
      els.feedbackExplanation.textContent = "";
      els.feedbackMeta.textContent = "";
      els.explanationCorrectSection.style.display = "none";
      els.explanationCorrectText.textContent = "";
      els.explanationDistractorsSection.style.display = "none";
      els.explanationDistractorsList.innerHTML = "";
      els.reportAnswerSection.style.display = "none";
      els.reportAnswerBtn.disabled = false;
      els.reportAnswerBtn.classList.remove("reported");
      els.reportAnswerStatus.style.display = "none";
      els.videoRefSection.style.display = "none";
      els.videoRefList.innerHTML = "";
      els.speedBadge.style.display = "none";
      startTimer();
    }

    function randomMotivation(pointsEarned) {
      const phrase = MOTIVATIONAL_PHRASES[Math.floor(Math.random() * MOTIVATIONAL_PHRASES.length)];
      return phrase.replace("{puntos}", String(pointsEarned));
    }

    function createConfetti(count = 14) {
      const colors = ["#C4B5E3", "#ffcfec", "#98FF98"];
      for (let i = 0; i < count; i += 1) {
        const part = document.createElement("span");
        part.className = "particle";
        part.style.left = `${Math.random() * 100}%`;
        part.style.animationDelay = `${Math.random() * 100}ms`;
        part.style.background = colors[Math.floor(Math.random() * colors.length)];
        part.style.transform = `translateY(-12px) rotate(${Math.random() * 180}deg)`;
        els.confettiLayer.appendChild(part);
        setTimeout(() => part.remove(), 900);
      }
    }

    function addTopicTiming(topic, time) {
      if (!state.blockStats.topicTimes[topic]) {
        state.blockStats.topicTimes[topic] = { total: 0, count: 0 };
      }
      state.blockStats.topicTimes[topic].total += time;
      state.blockStats.topicTimes[topic].count += 1;
    }

    function markWrongTopic(topic) {
      state.blockStats.wrongTopics[topic] = (state.blockStats.wrongTopics[topic] || 0) + 1;
    }

    function handleAnswer(selectedIndex) {
      if (state.answeredCurrent) {
        return;
      }

      const question = state.quizQuestions[state.currentIndex];
      stopTimer();
      state.answeredCurrent = true;
      const isCorrect = selectedIndex === question.correcta;
      const answerTime = state.elapsed;

      let pointsEarned = 0;
      const prevStreak = state.appStats.streak;
      if (isCorrect) {
        state.appStats.streak += 1;
        state.appStats.bestStreak = Math.max(state.appStats.bestStreak, state.appStats.streak);
        state.appStats.totalCorrect += 1;
        state.blockStats.correct += 1;
        // Track per-subject correct for mixed exams
        if (state.blockStats.subjectBreakdown[question.materia]) {
          state.blockStats.subjectBreakdown[question.materia].correct += 1;
        }
        pointsEarned = calculatePoints(question.dificultad, state.appStats.streak);
        state.appStats.totalPoints += pointsEarned;
        state.blockStats.points += pointsEarned;
        const confettiCount = Math.min(10 + Math.floor(state.appStats.streak / 3) * 4, 38);
        createConfetti(confettiCount);
        showXp(pointsEarned);
        if (STREAK_MILESTONES[state.appStats.streak]) {
          showStreakMilestone(state.appStats.streak);
        }
        markQuestionCorrect(question);
        reactAvatar("correct");
      } else {
        state.appStats.streak = 0;
        markWrongTopic(question.tema);
        els.questionCard.classList.add("shake");
        setTimeout(() => els.questionCard.classList.remove("shake"), 300);
        // Streak break visual sting
        if (prevStreak >= 3) {
          els.questionCard.classList.add("streak-lost");
          setTimeout(() => els.questionCard.classList.remove("streak-lost"), 650);
          showToast(`💔 Racha x${prevStreak} perdida`);
        }
        // Spaced repetition: track wrong answer
        markQuestionWrong(question);
        reactAvatar("wrong");
      }

      state.appStats.totalAnswered += 1;
      const subjectStats = ensureSubjectStats(question.materia);
      subjectStats.answered += 1;
      subjectStats.totalTime += answerTime;
      if (isCorrect) {
        subjectStats.correct += 1;
      } else {
        subjectStats.failedTopics[question.tema] = (subjectStats.failedTopics[question.tema] || 0) + 1;
      }

      addTopicTiming(question.tema, answerTime);

      if (!state.blockStats.topicBreakdown[question.tema]) {
        state.blockStats.topicBreakdown[question.tema] = { total: 0, correct: 0 };
      }
      state.blockStats.topicBreakdown[question.tema].total += 1;
      if (isCorrect) state.blockStats.topicBreakdown[question.tema].correct += 1;

      state.blockStats.answers.push({
        id: question.id,
        tema: question.tema,
        correcta: isCorrect,
        tiempo: answerTime,
        puntos: pointsEarned
      });

      const optionButtons = [...els.quizOptions.querySelectorAll(".option")];
      optionButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.correcta) {
          button.classList.add("correct");
        }
        if (!isCorrect && index === selectedIndex) {
          button.classList.add("wrong");
        }
      });

      els.quizFeedback.className = `feedback visible ${isCorrect ? "success" : "error"}`;
      els.feedbackTitle.textContent = isCorrect ? "Correcto" : "Incorrecto";
      els.feedbackMessage.textContent = isCorrect
        ? `${randomMotivation(pointsEarned)} (+${pointsEarned} pts)`
        : "No pasa nada. Esta respuesta te muestra exactamente el gap.";

      // ADHD-friendly: Extended pedagogical feedback
      let correctExplanation = "";
      let distractorAnalysis = [];

      // Check if question has explicit fields
      if (question.explicacion_correcta && question.explicacion_correcta.length > 0) {
        correctExplanation = question.explicacion_correcta;
      } else if (question.explicacion && question.explicacion.length > 0) {
        correctExplanation = question.explicacion;
      }

      if (question.analisis_distractores && question.analisis_distractores.length > 0) {
        // Parse JSON if it's a string
        try {
          distractorAnalysis = typeof question.analisis_distractores === "string"
            ? JSON.parse(question.analisis_distractores)
            : question.analisis_distractores;
        } catch {
          distractorAnalysis = [];
        }
      }

      // Show "¿Por qué es correcta?" section
      if (correctExplanation.length > 0) {
        els.explanationCorrectText.textContent = correctExplanation;
        els.explanationCorrectSection.style.display = "block";
      } else {
        const letter = String.fromCharCode(65 + question.correcta);
        els.explanationCorrectText.innerHTML = `<span class="explanation-fallback">Explicación en proceso... La respuesta correcta es la opción ${letter}: ${question.opciones[question.correcta]}</span>`;
        els.explanationCorrectSection.style.display = "block";
      }

      // Show "Análisis de Distractores" section
      if (distractorAnalysis.length > 0) {
        els.explanationDistractorsList.innerHTML = distractorAnalysis
          .map((item) => `<li><strong>${item.opcion}:</strong> ${item.razon}</li>`)
          .join("");
        els.explanationDistractorsSection.style.display = "block";
      } else {
        // Generate basic distractor analysis from options
        const otherOptions = question.opciones
          .map((opt, idx) => ({ letter: String.fromCharCode(65 + idx), text: opt, index: idx }))
          .filter((item) => item.index !== question.correcta);

        if (otherOptions.length > 0) {
          els.explanationDistractorsList.innerHTML = otherOptions
            .map((item) => `<li><strong>${item.letter}. ${item.text}:</strong> <span class="explanation-fallback">Incorrecta. Explicación pendiente.</span></li>`)
            .join("");
          els.explanationDistractorsSection.style.display = "block";
        }
      }

      els.feedbackMeta.textContent = `Respuesta correcta: ${question.opciones[question.correcta]} | Tiempo: ${answerTime}s`;

      // Show speed badge
      const speed = getSpeedLabel(answerTime);
      if (speed.text) {
        els.speedBadge.textContent = speed.text;
        els.speedBadge.className = `speed-badge ${speed.class}`;
        els.speedBadge.style.display = "inline-block";
      }

      // Show report wrong answer button
      els.reportAnswerSection.style.display = "block";
      const flagged = getFlaggedAnswers();
      if (flagged.includes(question.id)) {
        els.reportAnswerBtn.disabled = true;
        els.reportAnswerBtn.classList.add("reported");
        els.reportAnswerStatus.textContent = "Ya reportada — gracias por el feedback.";
        els.reportAnswerStatus.style.display = "block";
      } else {
        els.reportAnswerBtn.disabled = false;
        els.reportAnswerBtn.classList.remove("reported");
        els.reportAnswerStatus.style.display = "none";
      }

      // Show video references from NotebookLM
      showVideoReferences(question.materia, question.tema);

      saveStats();
      renderHomeStats();
      updateComboUI();
      els.nextQuestionBtn.disabled = false;
    }

    function nextQuestion() {
      if (!state.answeredCurrent) {
        showToast("Primero responde la pregunta actual.");
        return;
      }

      if (state.currentIndex >= state.quizQuestions.length - 1) {
        finishQuiz();
      } else {
        state.currentIndex += 1;
        renderQuestion();
      }
    }

    function rankedTopicTimes(topicTimes) {
      return Object.entries(topicTimes)
        .map(([topic, value]) => ({
          topic,
          avg: value.count === 0 ? 0 : value.total / value.count
        }))
        .sort((a, b) => b.avg - a.avg)
        .slice(0, 4)
        .map((row) => ({ ...row, avg: Math.round(row.avg) }));
    }

    function rankedWrongTopics(wrongTopics) {
      return Object.entries(wrongTopics)
        .map(([topic, count]) => ({ topic, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);
    }

    function finalizeBlockReport() {
      const answers = state.blockStats.answers;
      const avgTime = answers.length === 0
        ? 0
        : Math.round(answers.reduce((sum, item) => sum + item.tiempo, 0) / answers.length);
      const accuracy = answers.length === 0
        ? 0
        : Math.round((state.blockStats.correct / answers.length) * 100);
      const slowTopics = rankedTopicTimes(state.blockStats.topicTimes);
      const wrongTopics = rankedWrongTopics(state.blockStats.wrongTopics);

      const topicBreakdown = Object.entries(state.blockStats.topicBreakdown)
        .map(([topic, data]) => ({
          topic,
          total: data.total,
          correct: data.correct,
          accuracy: data.total === 0 ? 0 : Math.round((data.correct / data.total) * 100)
        }))
        .sort((a, b) => a.accuracy - b.accuracy);

      return {
        finishedAt: new Date().toISOString(),
        materia: state.blockStats.materia,
        total: answers.length,
        correct: state.blockStats.correct,
        points: state.blockStats.points,
        accuracy,
        avgTime,
        slowTopics,
        wrongTopics,
        subjectBreakdown: state.blockStats.subjectBreakdown,
        topicBreakdown
      };
    }

    function renderTopicList(target, entries, mapper) {
      if (!entries.length) {
        target.innerHTML = `<li style="color:var(--muted);font-size:0.85rem;text-align:center;padding:12px;">✓ Sin puntos débiles en este bloque</li>`;
        return;
      }
      target.innerHTML = entries.map(mapper).join("");
    }

    function renderReport(report) {
      const isMixed = report.materia === "mock" || report.materia === "area1" || report.materia === "quick" || report.materia === "review";
      const label = isMixed
        ? (report.materia === "mock" ? "Simulacro de examen" : report.materia === "area1" ? "Examen" : report.materia === "quick" ? "Examen rapido" : "Repaso espaciado")
        : subjectLabel(report.materia);

      const wrongCount = report.total - report.correct;
      els.reportSummary.innerHTML = `${label}: <span class="num-correct">${report.correct}</span> correctas / <span class="num-wrong">${wrongCount}</span> incorrectas de ${report.total} (<strong>${report.accuracy}%</strong>). Revisa en que tema tardas mas o fallas mas.`;
      _reportTargets = { accuracy: report.accuracy, avgTime: report.avgTime, points: report.points };
      els.reportAccuracy.textContent = "0%";
      els.reportAvgTime.textContent = "0s";
      els.reportPoints.textContent = "+0";

      // Motivational banner for good scores
      if (els.reportBanner) {
        const GOOD_MESSAGES = [
          `${currentAvatar.emoji} ¡Eso es, ${currentAvatar.name}! ${report.accuracy}% — sigues subiendo. 🚀`,
          `${currentAvatar.emoji} ACIERTO. ${report.correct}/${report.total} — nivel ${currentAvatar.name} desbloqueado 🔓`,
          `${currentAvatar.emoji} ¡Modo bestia activado! ${report.accuracy}% de precisión. Imparable. ⚡`,
          `${currentAvatar.emoji} ${report.accuracy}% — este bloque fue tuyo. Eso es racha. 🔥`
        ];
        if (report.accuracy >= 80) {
          els.reportBanner.textContent = GOOD_MESSAGES[Math.floor(Math.random() * GOOD_MESSAGES.length)];
          els.reportBanner.style.display = "";
        } else {
          els.reportBanner.style.display = "none";
        }
      }

      // Update retry button label based on mode
      const retryLabels = { mock: "Nuevo simulacro", area1: "Otro examen", quick: "Otro examen rapido", review: "Repasar de nuevo" };
      els.retryBtn.textContent = retryLabels[report.materia] || `Repetir ${label}`;

      // For mixed exams, show per-subject breakdown instead of topic lists
      if (isMixed && report.subjectBreakdown && Object.keys(report.subjectBreakdown).length > 0) {
        const subjectRows = Object.entries(report.subjectBreakdown)
          .map(([subj, data]) => {
            const acc = data.total === 0 ? 0 : Math.round((data.correct / data.total) * 100);
            const wrong = data.total - data.correct;
            const barColor = acc >= 80 ? "var(--accent-3)" : acc >= 60 ? "#fbbf24" : "var(--danger)";
            return `
              <li>
                <strong>${subjectLabel(subj)}</strong>: <span class="num-correct">${data.correct}</span> / <span class="num-wrong">${wrong}</span> (${acc}%)
                <div class="progress-track" style="margin-top:6px">
                  <div class="progress-fill" style="width:${acc}%;background:${barColor}"></div>
                </div>
              </li>
            `;
          })
          .join("");
        els.reportSlowTopics.closest(".panel").querySelector("h3").textContent = "Desglose por materia";
        els.reportSlowTopics.innerHTML = subjectRows;
        els.reportWrongTopics.closest(".panel").querySelector("h3").textContent = "Temas con mas errores";
        renderTopicList(
          els.reportWrongTopics,
          report.wrongTopics,
          (item) => `<li>${item.topic}: ${item.count} error(es)</li>`
        );
      } else {
        els.reportSlowTopics.closest(".panel").querySelector("h3").textContent = "Temas con mayor tiempo";
        renderTopicList(
          els.reportSlowTopics,
          report.slowTopics,
          (item) => `<li>${item.topic}: ${item.avg}s promedio</li>`
        );
        renderTopicList(
          els.reportWrongTopics,
          report.wrongTopics,
          (item) => `<li>${item.topic}: ${item.count} error(es)</li>`
        );
      }

      const breakdownSection = document.getElementById("topic-breakdown-section");
      const breakdownList = document.getElementById("topic-breakdown-list");
      if (report.topicBreakdown && report.topicBreakdown.length > 1) {
        breakdownSection.style.display = "";
        breakdownList.innerHTML = report.topicBreakdown
          .map((item, i) => {
            const cls = item.accuracy >= 75 ? "accuracy-good" : item.accuracy >= 50 ? "accuracy-mid" : "accuracy-bad";
            const barColor = item.accuracy >= 75 ? "var(--accent-3)" : item.accuracy >= 50 ? "#fbbf24" : "var(--danger)";
            const delay = `${220 + i * 55}ms`;
            return `
              <li class="topic-breakdown-item ${cls}" style="animation:stagger-in 320ms var(--ease-out-quart) ${delay} both;opacity:0;">
                <div class="topic-breakdown-meta">
                  <strong>${item.topic}</strong>
                  <span>${item.correct}/${item.total} &mdash; ${item.accuracy}%</span>
                </div>
                <div class="progress-track" style="height:5px;">
                  <div class="progress-fill" style="width:${item.accuracy}%;background:${barColor};transition:width 500ms var(--ease-out-quart) ${delay};"></div>
                </div>
              </li>`;
          })
          .join("");
      } else {
        breakdownSection.style.display = "none";
      }
    }

    function finishQuiz() {
      stopTimer();
      stopSimulacroTimer(); // Stop simulacro timer if running

      const report = finalizeBlockReport();
      state.appStats.history.push(report);
      if (state.appStats.history.length > 80) {
        state.appStats.history = state.appStats.history.slice(-80);
      }

      // Save mock exams to mock history
      if (report.materia === "mock") {
        state.mockHistory.push(report);
        if (state.mockHistory.length > 20) {
          state.mockHistory = state.mockHistory.slice(-20);
        }
        saveMockHistory();
      }

      saveStats();
      renderReport(report);
      renderHome();
      showScreen("report-screen");
    }

    function generateQuestionId(subject) {
      const prefix = ID_PREFIX_BY_SUBJECT[subject] || String(subject).slice(0, 3).toLowerCase();
      const regex = new RegExp(`^${prefix}_(\\d+)$`);
      const maxId = state.allQuestions.reduce((max, question) => {
        const match = question.id.match(regex);
        if (!match) {
          return max;
        }
        return Math.max(max, Number(match[1]));
      }, 0);
      return `${prefix}_${String(maxId + 1).padStart(3, "0")}`;
    }

    function handleCustomQuestionSubmit(event) {
      event.preventDefault();

      const formData = {
        materia: els.customMateria.value,
        tema: document.getElementById("custom-tema").value.trim().toLowerCase(),
        dificultad: Number(document.getElementById("custom-dificultad").value),
        pregunta: document.getElementById("custom-pregunta").value.trim(),
        opciones: [
          document.getElementById("custom-op-a").value.trim(),
          document.getElementById("custom-op-b").value.trim(),
          document.getElementById("custom-op-c").value.trim(),
          document.getElementById("custom-op-d").value.trim()
        ],
        correcta: Number(document.getElementById("custom-correcta").value),
        explicacion: document.getElementById("custom-explicacion").value.trim(),
        tip: document.getElementById("custom-tip").value.trim()
      };

      // Parse distractor analysis from text area (format: "B|reason" per line)
      const distractoresText = document.getElementById("custom-distractores").value.trim();
      const analisisDistractores = [];
      if (distractoresText.length > 0) {
        const lines = distractoresText.split("\n").filter((line) => line.trim().length > 0);
        lines.forEach((line) => {
          const parts = line.split("|");
          if (parts.length >= 2) {
            const letter = parts[0].trim().toUpperCase();
            const reason = parts.slice(1).join("|").trim();
            if (letter.length === 1 && reason.length > 0) {
              const optionIndex = letter.charCodeAt(0) - 65;
              if (optionIndex >= 0 && optionIndex < 4 && optionIndex !== formData.correcta) {
                analisisDistractores.push({
                  opcion: `${letter}. ${formData.opciones[optionIndex]}`,
                  razon: reason
                });
              }
            }
          }
        });
      }

      if (analisisDistractores.length > 0) {
        formData.analisis_distractores = analisisDistractores;
      }

      if (!formData.tema || !formData.pregunta || !formData.explicacion) {
        setStatus(els.customStatus, "Completa materia, tema, pregunta y explicacion.", "error");
        return;
      }

      if (formData.opciones.some((option) => option.length === 0)) {
        setStatus(els.customStatus, "Las 4 opciones son obligatorias.", "error");
        return;
      }

      const id = generateQuestionId(formData.materia);
      const newQuestion = {
        ...formData,
        id
      };

      if (!isValidQuestion(newQuestion)) {
        setStatus(els.customStatus, "No se pudo guardar: revisa formato de la pregunta.", "error");
        return;
      }

      state.customQuestions.push(normalizeQuestion(newQuestion));
      saveCustomQuestions();
      reloadQuestions();
      setupSubjectSelects();
      renderHome();
      els.customForm.reset();
      document.getElementById("custom-dificultad").value = "2";
      document.getElementById("custom-correcta").value = "0";
      setStatus(els.customStatus, `Pregunta guardada como ${id}. Ya esta disponible en simulacros.`, "success");
      showToast("Pregunta agregada al banco local.");
    }

    function handleStartSubmit(event) {
      event.preventDefault();

      if (state.selectedMode === "mock") {
        // Mock exam doesn't need subject selection
        startQuiz("mock");
      } else if (state.selectedMode === "review") {
        // Review mode doesn't need subject selection
        startQuiz("review");
      } else {
        const subject = els.startMateria.value;
        if (!subject) {
          setStatus(els.startStatus, "Selecciona una materia valida.", "error");
          return;
        }
        startQuiz(subject);
      }
    }

    function bindEvents() {
      els.startForm.addEventListener("submit", handleStartSubmit);
      els.customForm.addEventListener("submit", handleCustomQuestionSubmit);
      els.nextQuestionBtn.addEventListener("click", nextQuestion);
      els.backHomeBtn.addEventListener("click", () => { showScreen("home-screen"); renderHome(); });

      // NEW: Quiz back-to-home button
      const quizBackBtn = document.getElementById("quiz-back-home-btn");
      if (quizBackBtn) quizBackBtn.addEventListener("click", () => { showScreen("home-screen"); renderHome(); });

      // Report wrong answer button
      els.reportAnswerBtn.addEventListener("click", () => {
        const q = window.STATE_QUESTION;
        if (q && q.id) {
          flagAnswer(q.id);
          els.reportAnswerBtn.disabled = true;
          els.reportAnswerBtn.classList.add("reported");
          els.reportAnswerStatus.textContent = "Reportada — gracias por el feedback!";
          els.reportAnswerStatus.style.display = "block";
        }
      });

      // NEW: Mode card clicks
      document.querySelectorAll(".mode-card").forEach(card => {
        card.addEventListener("click", () => {
          const mode = card.dataset.mode;
          state.selectedMode = mode;

          // Visual feedback
          document.querySelectorAll(".mode-card").forEach(c => c.style.borderColor = "");
          card.style.borderColor = "var(--accent)";

          // Update submit button text
          const btn = els.startForm.querySelector('button[type="submit"]');
          const modeButtonLabels = {
            subject: "Iniciar bloque (15 preguntas)",
            topic: "Practicar tema especifico",
            mock: `Iniciar simulacro (${EXAM_TOTAL} preguntas, ${SIMULACRO_TIME_LABEL})`,
            review: "Repasar errores pendientes"
          };
          btn.textContent = modeButtonLabels[mode] || "Iniciar";

          // Show/hide subject selector
          const subjectArea = document.getElementById("subject-select-area");
          if (mode === "review") {
            subjectArea.style.display = "none";
          } else if (mode === "mock") {
            subjectArea.style.display = "none";
          } else {
            subjectArea.style.display = "";
          }
        });
      });

      // Subject change -> re-render topic chips
      els.startMateria.addEventListener("change", (event) => {
        state.lastSelectedSubject = event.target.value;
        state.lastSelectedTopic = null;  // Reset topic filter
        renderTopicChips(event.target.value);
      });

      document.addEventListener("keydown", (event) => {
        const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea" || tag === "select") {
          return;
        }
        if (!document.getElementById("quiz-screen").classList.contains("active")) {
          return;
        }

        const key = event.key.toLowerCase();
        const keyToIndex = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
        if (Object.prototype.hasOwnProperty.call(keyToIndex, key) && !state.answeredCurrent) {
          const index = keyToIndex[key];
          const optionButtons = els.quizOptions.querySelectorAll(".option");
          if (optionButtons[index]) {
            optionButtons[index].click();
          }
        }

        // ADHD-friendly: Enter or Space to go to next question after answering
        if ((event.key === "Enter" || event.key === " ") && state.answeredCurrent) {
          event.preventDefault();
          nextQuestion();
        }
      });

      els.backHomeBtn.addEventListener("click", () => {
        renderHome();
        showScreen("home-screen");
      });

      els.retryBtn.addEventListener("click", () => {
        const mode = state.selectedMode;
        if (mode === "mock" || mode === "area1" || mode === "quick" || !state.lastSelectedSubject) {
          // For mode-based sessions, go home and let user pick mode
          renderHome();
          showScreen("home-screen");
        } else {
          startQuiz(state.lastSelectedSubject);
        }
      });

      // Custom form toggle (progressive disclosure)
      const toggleBtn = document.getElementById("toggle-custom-form");
      const formBody  = document.getElementById("custom-form-body");
      if (toggleBtn && formBody) {
        toggleBtn.addEventListener("click", () => {
          const open = formBody.style.display === "none" || formBody.style.display === "";
          formBody.style.display = open ? "" : "none";
          formBody.style.animation = open ? "slide-up-in 320ms var(--ease-out-quart) both" : "none";
          toggleBtn.textContent = open ? "✕ Cerrar" : "+ Agregar";
          toggleBtn.setAttribute("aria-expanded", String(open));
        });
      }

      // Subject card click → drill-down (start subject practice)
      els.subjectStats.addEventListener("click", (e) => {
        const card = e.target.closest("[data-subject]");
        if (!card) return;
        const subject = card.dataset.subject;
        state.selectedMode = "subject";
        state.lastSelectedSubject = subject;
        state.lastSelectedTopic = null;
        document.querySelectorAll(".mode-card").forEach(c => c.style.borderColor = "");
        const subjectCard = document.querySelector('.mode-card[data-mode="subject"]');
        if (subjectCard) subjectCard.style.borderColor = "var(--accent)";
        els.startMateria.value = subject;
        renderTopicChips(subject);
        document.getElementById("subject-select-area").style.display = "";
        const btn = els.startForm.querySelector('button[type="submit"]');
        if (btn) btn.textContent = "Iniciar bloque (15 preguntas)";
        els.startForm.scrollIntoView({ behavior: "smooth", block: "center" });
        showToast(`▶ ${subjectLabel(subject)} seleccionada`);
      });
    }

    function init() {
      currentAvatar = loadAvatar();
      state.customQuestions = loadCustomQuestions();
      state.wrongQuestions = loadWrongQuestions();
      state.mockHistory = loadMockHistory();
      reloadQuestions();
      setupSubjectSelects();
      bindEvents();
      renderHome();
      renderAvatarPicker();
      initCustomAvatarSystem();
      updateTopbarAvatar();
      updateReviewErrorsButton();
      showScreen("home-screen");

      // NEW: Set default mode card
      const defaultCard = document.querySelector('.mode-card[data-mode="subject"]');
      if (defaultCard) defaultCard.style.borderColor = "var(--accent)";

      // NEW: Update review count badge
      updateReviewCountBadge();

      // Load enhanced explanations from NotebookLM
      loadEnhancedExplanations();
    }

    function updateReviewCountBadge() {
      const count = getWrongQuestionIds().length;
      if (els.reviewCountBadge) {
        els.reviewCountBadge.textContent = count > 0
          ? `${count} pendiente${count !== 1 ? "s" : ""}`
          : "Sin pendientes";
        els.reviewCountBadge.className = `mode-badge ${count > 0 ? "yellow" : ""}`;
      }
      const reviewCard = document.querySelector('.mode-card[data-mode="review"]');
      if (reviewCard) {
        reviewCard.classList.toggle("review-empty", count === 0);
        reviewCard.classList.toggle("review-has-items", count > 0);
      }
    }

    // ====== ENHANCED EXPLANATIONS (NotebookLM) ======
    let enhancedExplanations = null;

    async function loadEnhancedExplanations() {
      try {
        if (typeof window.ENHANCED_EXPLANATIONS !== "undefined" && window.ENHANCED_EXPLANATIONS) {
          enhancedExplanations = window.ENHANCED_EXPLANATIONS;
          return;
        }
        const url = MODULE.enhancedExplanationsUrl;
        if (!url) { enhancedExplanations = null; return; }
        const response = await fetch(url);
        if (!response.ok) throw new Error("Not found");
        enhancedExplanations = await response.json();
      } catch {
        enhancedExplanations = null;
      }
    }

    function getVideoReferences(materia, tema) {
      if (!enhancedExplanations || !enhancedExplanations.topics) return [];
      const subjectData = enhancedExplanations.topics[materia];
      if (!subjectData) return [];

      const videos = new Map();
      const topicKey = tema ? tema.replace(/-/g, "_") : null;

      // Search in topic data for video references
      for (const [key, value] of Object.entries(subjectData)) {
        if (topicKey && (key === topicKey || key.includes(topicKey))) {
          // This is a direct tema match
          if (typeof value === "object" && value !== null) {
            for (const [subkey, subvalue] of Object.entries(value)) {
              if (subvalue.video_ref && Array.isArray(subvalue.video_ref)) {
                subvalue.video_ref.forEach(vidId => {
                  const vid = enhancedExplanations.videos.find(v => v.id === vidId);
                  if (vid) videos.set(vidId, vid);
                });
              }
            }
          }
        }
        // Also check if the key itself matches tema patterns
        if (typeof value === "object" && value !== null && value.video_ref) {
          if (Array.isArray(value.video_ref)) {
            value.video_ref.forEach(vidId => {
              const vid = enhancedExplanations.videos.find(v => v.id === vidId);
              if (vid) videos.set(vidId, vid);
            });
          }
        }
      }

      return Array.from(videos.values());
    }

    function showVideoReferences(materia, tema) {
      const videos = getVideoReferences(materia, tema);
      const section = els.videoRefSection;
      const list = els.videoRefList;

      if (!section || !list || videos.length === 0) {
        if (section) section.style.display = "none";
        return;
      }

      list.innerHTML = videos.map(video => `
        <div class="video-ref-item">
          <a href="${video.url}" target="_blank" rel="noopener">▶ ${video.title}</a>
          <span class="channel">— ${video.channel}</span>
        </div>
      `).join('');

      section.style.display = "block";
    }

    // ====== END ENHANCED EXPLANATIONS ======

    init();