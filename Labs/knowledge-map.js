/* Curated curriculum links, not an inferred graph of a person's knowledge. */
const KNOWLEDGE_MAP = {
  version: 1,
  defaultTopic: "gestion",
  origins: {
    "study-buddy": "Study-buddy",
    "capital-cultural": "Capital Cultural Automatico",
    "founder-guide": "Founder Guide",
    hypatia: "Hypatia",
  },
  topics: [
    {
      id: "matematicas", title: "Matematicas", x: 140, y: 65,
      description: "Probabilidad, algebra y modelos para razonar con precision.",
      origins: ["study-buddy", "capital-cultural", "hypatia"],
      lessonKeys: ["ai-math/01-bayes"], practicePaths: ["CubPrep/index.html"],
      evidence: "Study-buddy: AI & Math. Capital Cultural: Codigo Tecnico, fundamentos de modelado y optimizacion.",
    },
    {
      id: "ia", title: "IA", x: 390, y: 65,
      description: "Modelos de aprendizaje, evaluacion y sistemas que los ponen a trabajar.",
      origins: ["study-buddy", "capital-cultural", "hypatia"],
      lessonKeys: [], practicePaths: ["MLOps/index.html", "Flashcards/index.html"],
      evidence: "Study-buddy: AI & Math y recursos de sistemas de ML. Capital Cultural: Codigo MLOps.",
    },
    {
      id: "sistemas", title: "Sistemas", x: 640, y: 65,
      description: "Arquitectura, capacidad y comportamiento de servicios conectados.",
      origins: ["study-buddy", "hypatia"],
      lessonKeys: ["system-design/01-bottleneck"],
      practicePaths: ["SAA-C03/index.html", "MLOps/index.html"],
      evidence: "Study-buddy: System Design & Architecture. Hypatia: leccion de capacidad.",
    },
    {
      id: "optimizacion", title: "Optimizacion", x: 140, y: 195,
      description: "Objetivos, variables y restricciones para formular decisiones.",
      origins: ["study-buddy", "capital-cultural"],
      lessonKeys: [], practicePaths: [],
      evidence: "Study-buddy: Investigacion de Operaciones. Capital Cultural: Codigo Tecnico, Williams y Boyd.",
    },
    {
      id: "negocio", title: "Negocio", x: 390, y: 195,
      description: "Estrategia, descubrimiento de clientes y decisiones de una empresa.",
      origins: ["capital-cultural", "founder-guide"],
      lessonKeys: [], practicePaths: [],
      evidence: "Capital Cultural: codigos VC y Comercial. Founder Guide: catalogo de aprendizaje para founders.",
    },
    {
      id: "gestion", title: "Gestion", x: 640, y: 195,
      description: "Equipos, coordinacion y ejecucion. Un puente entre negocio y trabajo tecnico.",
      origins: ["capital-cultural", "founder-guide", "study-buddy"],
      lessonKeys: [], practicePaths: [],
      evidence: "El roadmap de Capital Cultural cruza High Output Management (com-21) con Founder Guide (bus-06). Es una referencia de catalogo, no prueba de lectura o ingesta.",
    },
    {
      id: "cultura", title: "Cultura", x: 140, y: 325,
      description: "Filosofia, arte e interpretacion de ideas y representaciones.",
      origins: ["capital-cultural", "study-buddy"],
      lessonKeys: [], practicePaths: [],
      evidence: "Capital Cultural: codigos Ivy y Cultural. Study-buddy: recursos de filosofia, arte y retorica.",
    },
    {
      id: "comunicacion", title: "Comunicacion", x: 390, y: 325,
      description: "Argumentos, relatos y explicaciones para otras personas.",
      origins: ["capital-cultural", "study-buddy"],
      lessonKeys: [], practicePaths: [],
      evidence: "Capital Cultural: comunicacion ejecutiva, Minto y Duarte. Study-buddy: Storytelling & Public Speaking.",
    },
  ],
  relations: [
    {
      id: "matematicas-ia", from: "matematicas", to: "ia",
      type: "foundation", status: "documented", label: "Base matematica",
      reason: "El catalogo AI & Math reune probabilidad y algebra con recursos de aprendizaje automatico.",
      evidence: "Study-buddy: AI & Math, fundamentos matematicos y Probabilistic ML.",
    },
    {
      id: "matematicas-optimizacion", from: "matematicas", to: "optimizacion",
      type: "foundation", status: "documented", label: "Formalizacion",
      reason: "La ruta de investigacion de operaciones parte de algebra lineal y avanza hacia modelos de optimizacion.",
      evidence: "Capital Cultural: Codigo Tecnico, espina de investigacion de operaciones.",
    },
    {
      id: "optimizacion-negocio", from: "optimizacion", to: "negocio",
      type: "application", status: "documented", label: "Modelar decisiones",
      reason: "La pista tecnica propone traducir problemas de negocio a variables, restricciones y un objetivo.",
      evidence: "Capital Cultural: Model Building in Mathematical Programming, Williams (tec-03).",
    },
    {
      id: "ia-sistemas", from: "ia", to: "sistemas",
      type: "application", status: "documented", label: "Poner modelos en servicio",
      reason: "Los recursos de sistemas de ML y la practica de MLOps conectan modelos con inferencia y serving.",
      evidence: "Study-buddy: AI & Math, sistemas de ML. Hypatia: MLOps.",
    },
    {
      id: "gestion-negocio", from: "gestion", to: "negocio",
      type: "shared-material", status: "documented", label: "Material compartido",
      reason: "High Output Management aparece en el roadmap comercial y tiene una referencia cruzada a Founder Guide. El material puede alimentar una sola ruta, sin duplicarse por herramienta.",
      evidence: "Roadmap de Capital Cultural: com-21; referencia declarada a Founder Guide bus-06. No se verifico la ingesta del libro.",
    },
    {
      id: "gestion-comunicacion", from: "gestion", to: "comunicacion",
      type: "shared-material", status: "documented", label: "Comunicar en equipos",
      reason: "Los catalogos de tech management y storytelling comparten recursos de Nancy Duarte.",
      evidence: "Study-buddy: Tech Management, comunicacion ejecutiva; Storytelling, recursos de Duarte.",
    },
    {
      id: "comunicacion-cultura", from: "comunicacion", to: "cultura",
      type: "shared-material", status: "documented", label: "Retorica clasica",
      reason: "La Retorica de Aristoteles conecta el canon filosofico con la practica de argumentar y presentar.",
      evidence: "Capital Cultural: Codigo Ivy, Retorica. Study-buddy: Storytelling, retorica clasica.",
    },
    {
      id: "negocio-comunicacion", from: "negocio", to: "comunicacion",
      type: "application", status: "documented", label: "Explicar y preguntar",
      reason: "El roadmap comercial combina discovery con comunicacion ejecutiva y presentaciones.",
      evidence: "Capital Cultural: Codigo Comercial, The Mom Test, The Pyramid Principle y Duarte.",
    },
    {
      id: "sistemas-gestion", from: "sistemas", to: "gestion",
      type: "analogy", status: "proposal", label: "Puente por explorar",
      reason: "Comparar flujos y restricciones de un servicio con la coordinacion de un equipo puede ser una actividad. No implica que las personas funcionen como servidores.",
      evidence: "Propuesta editorial. Requiere revision antes de convertirse en una leccion.",
    },
  ],
};

if (typeof module !== "undefined" && module.exports) module.exports = KNOWLEDGE_MAP;
