// MLOps module config — engine lo lee via window.HYPATIA_MODULE
window.HYPATIA_MODULE = {
  id: "mlops",
  storagePrefix: "mlops.",
  simulacroMinutes: 40,
  simulacroTimeLabel: "40min",
  examTotal: 26,
  targetScore: 20,
  subjects: ["inference", "mlops", "serving", "fundamentos"],
  distribution: {
    inference: 7,
    mlops: 7,
    serving: 6,
    fundamentos: 6
  },
  labels: {
    inference: "Inference Engineering",
    mlops: "MLOps Lifecycle",
    serving: "Serving Stack",
    fundamentos: "Fundamentos + Agents"
  },
  temaTypes: {
    "kv-cache": { type: "Arquitectura", class: "type-analisis" },
    "batching": { type: "Arquitectura", class: "type-analisis" },
    "latency": { type: "Arquitectura", class: "type-analisis" },
    "quantization": { type: "Tecnica", class: "type-concepto" },
    "monitoring": { type: "Operacion", class: "type-aplicacion" },
    "cicd": { type: "Operacion", class: "type-aplicacion" },
    "serving": { type: "Operacion", class: "type-aplicacion" },
    "agents": { type: "Diseno", class: "type-analisis" },
    "rag": { type: "Diseno", class: "type-analisis" },
    "fundamentos-nn": { type: "Fundamento", class: "type-concepto" },
    "general": { type: "Concepto Teorico", class: "type-concepto" }
  },
  objectives: {
    "kv-cache": "Entiende gestion de memoria en inferencia: KV cache, P/D disaggregation, paging.",
    "batching": "Evalua tradeoffs throughput/latency: continuous batching y scheduling.",
    "latency": "Mide TTFT, TBT y tecnicas de reduccion de latencia (speculative, caching).",
    "quantization": "Compara tecnicas de cuantizacion (AWQ, GPTQ, SmoothQuant) y sus tradeoffs.",
    "monitoring": "Disena observabilidad y respuesta a drift/incidentes en produccion.",
    "cicd": "Aplica pipelines CI/CD, versionado de modelos y despliegues seguros.",
    "serving": "Evalua el stack de serving: BentoML, Ray Serve, autoscaling y replicas.",
    "agents": "Disena agentes: herramientas, orquestacion y patrones de produccion.",
    "rag": "Aplica retrieval, embeddings y chunking en sistemas RAG.",
    "fundamentos-nn": "Repasa fundamentos: transformers, entrenamiento y ciclo de vida del modelo.",
    "general": "Evalua conocimiento general del track B."
  },
  idPrefixes: {
    inference: "inf",
    mlops: "mlo",
    serving: "srv",
    fundamentos: "fun"
  },
  phrases: [
    "Acierto! Eres una maquina.",
    "Correcto. Asi se responde en un panel.",
    "Streak! Imparable.",
    "Exacto! Modo produccion unlocked.",
    "Bien! Rompiéndola como siempre.",
    "Correcto! +{puntos} puntos. Sigue asi."
  ],
  streakMessages: { 15: "¡Nivel staff desbloqueado!" }
};
