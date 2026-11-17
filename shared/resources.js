/* resources.js — biblioteca personal de enlaces (NotebookLM, audio, video, brief).
 * Usa LearningState para guardar; valida al guardar y al leer. Renderiza con
 * textContent y propiedades DOM, nunca con innerHTML para datos del usuario.
 * Los enlaces se abren en el proveedor con sus propios permisos; Hypatia no es
 * un control de acceso.
 */
const StudioResources = (() => {
  const TYPE_LABEL = {
    notebook: "Notebook",
    audio: "Audio",
    video: "Video",
    brief: "Brief",
  };

  /* Las opciones del selector son las areas del mapa de conocimiento, no los
   * tracks ni las herramientas de origen. El campo guardado sigue siendo
   * trackId por compatibilidad. */
  function trackOptions() {
    if (typeof KNOWLEDGE_MAP !== "undefined" && Array.isArray(KNOWLEDGE_MAP.topics)) {
      return KNOWLEDGE_MAP.topics.map(t => ({ id: t.id, name: t.title }));
    }
    const opts = [];
    if (typeof LABS_TRACKS !== "undefined") {
      for (const t of LABS_TRACKS) opts.push({ id: t.id, name: t.name });
    }
    if (typeof SOURCE_COLLECTIONS !== "undefined") {
      for (const s of SOURCE_COLLECTIONS) opts.push({ id: s.id, name: s.name });
    }
    return opts;
  }
  function trackName(id) {
    const canon = LearningState.canonical(id);
    const topic = trackOptions().find(o => o.id === canon);
    if (topic) return topic.name;
    if (typeof SOURCE_COLLECTIONS !== "undefined") {
      const src = SOURCE_COLLECTIONS.find(s => s.id === canon);
      if (src) return src.name;
    }
    return id;
  }

  function renderList(listEl, resources) {
    listEl.textContent = "";
    if (!resources.length) return false;
    for (const r of resources) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = r.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      const badge = document.createElement("span");
      badge.className = "t";
      badge.textContent = TYPE_LABEL[r.type] || r.type;
      const label = document.createElement("span");
      label.textContent = r.label;
      const host = document.createElement("span");
      host.className = "u";
      try { host.textContent = new URL(r.url).hostname; } catch (e) { host.textContent = ""; }
      a.append(badge, label, host);
      const src = document.createElement("span");
      src.className = "u";
      src.textContent = trackName(r.trackId);
      a.appendChild(src);
      li.appendChild(a);
      listEl.appendChild(li);
    }
    return true;
  }

  /* mount(el, {trackId, title})
   *   trackId: filtra la lista a un tema; el formulario lo preselecciona. */
  /* mount(el, {trackId, title, fixedTopic})
   *   trackId/fixedTopic: filtra la lista al area canonica.
   *   fixedTopic: ademas fija el area del formulario a ese tema. */
  function mount(el, { trackId = null, title = "Tu biblioteca", fixedTopic = false, heading = "h3" } = {}) {
    el.textContent = "";

    const head = document.createElement(heading);
    head.textContent = title;
    el.appendChild(head);

    const note = document.createElement("p");
    note.className = "res-note";
    note.textContent =
      "Los enlaces se guardan en este navegador y se abren en su proveedor con " +
      "los permisos que ya tengas ahi. Hypatia no comparte ni protege tus archivos.";
    el.appendChild(note);

    const list = document.createElement("ul");
    list.className = "res-list";
    const empty = document.createElement("p");
    empty.className = "res-empty";
    const refresh = () => {
      const items = LearningState.listResources(trackId || undefined);
      if (!renderList(list, items)) {
        empty.textContent = "Aun no tienes enlaces guardados. Agrega el primero abajo.";
        list.after(empty);
      } else {
        empty.remove();
      }
    };
    el.appendChild(list);
    el.appendChild(empty);

    const form = document.createElement("form");
    form.className = "res-form";
    form.noValidate = true;

    const typeField = document.createElement("label");
    typeField.appendChild(document.createTextNode("Tipo"));
    const typeSel = document.createElement("select");
    for (const t of LearningState.RESOURCE_TYPES) {
      const o = document.createElement("option");
      o.value = t;
      o.textContent = TYPE_LABEL[t];
      typeSel.appendChild(o);
    }
    typeField.appendChild(typeSel);

    const trackField = document.createElement("label");
    trackField.appendChild(document.createTextNode("Area"));
    const trackSel = document.createElement("select");
    for (const o of trackOptions()) {
      const opt = document.createElement("option");
      opt.value = o.id;
      opt.textContent = o.name;
      trackSel.appendChild(opt);
    }
    if (trackId) trackSel.value = LearningState.canonical(trackId);
    trackField.appendChild(trackSel);
    if (fixedTopic && trackId) {
      /* En la leccion el area va fija: guardar en otro tema haria
       * desaparecer el enlace de esta vista. */
      trackSel.disabled = true;
    }

    const labelField = document.createElement("label");
    labelField.className = "full";
    labelField.appendChild(document.createTextNode("Nombre del enlace"));
    const labelIn = document.createElement("input");
    labelIn.type = "text";
    labelIn.maxLength = LearningState.LABEL_MAX;
    labelIn.required = true;
    labelIn.placeholder = "Notebook de repaso, audio del tema, brief...";
    labelField.appendChild(labelIn);

    const urlField = document.createElement("label");
    urlField.className = "full";
    urlField.appendChild(document.createTextNode("URL (https)"));
    const urlIn = document.createElement("input");
    urlIn.type = "url";
    urlIn.maxLength = LearningState.URL_MAX;
    urlIn.required = true;
    urlIn.placeholder = "https://...";
    urlField.appendChild(urlIn);

    const err = document.createElement("p");
    err.className = "res-error";
    err.setAttribute("role", "alert");

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "btn primary";
    submit.textContent = "Agregar enlace";

    form.append(typeField, trackField, labelField, urlField, err, submit);
    form.addEventListener("submit", ev => {
      ev.preventDefault();
      const res = LearningState.addResource({
        trackId: fixedTopic && trackId ? LearningState.canonical(trackId) : trackSel.value,
        type: typeSel.value,
        label: labelIn.value,
        url: urlIn.value,
      });
      if (!res.ok) {
        err.textContent = res.error;
        return;
      }
      err.textContent = "";
      labelIn.value = "";
      urlIn.value = "";
      refresh();
    });
    el.appendChild(form);

    /* El mapa puede pedir preseleccionar un area y enfocar el nombre. */
    const onPreselect = ev => {
      const topic = ev.detail && ev.detail.topic;
      if (!topic) return;
      if (!fixedTopic) {
        const has = [...trackSel.options].some(o => o.value === topic);
        if (has) trackSel.value = topic;
      }
      labelIn.focus();
    };
    document.addEventListener("hypatia:resource-preselect", onPreselect);

    refresh();
    return { refresh };
  }

  return { mount, renderList, trackOptions, TYPE_LABEL };
})();
