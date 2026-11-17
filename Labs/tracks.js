/* tracks.js — registry de lecciones interactivas (Labs), modulos de practica
 * y colecciones de fuentes. Es la unica fuente de conteos y rutas del
 * catalogo: la portada y Labs leen de aqui para no derivar.
 *
 * sourceSystem nombra la coleccion de origen. recommendedSources son lecturas
 * publicas recomendadas, no afirmaciones de extraccion desde una libreta.
 * level por leccion: "base" | "intermedio" | "avanzado" (opcional, chip en
 * tarjeta y kicker).
 */
const LABS_TRACKS = [
  {
    id: "ai-math",
    name: "AI & Math",
    desc: "Probabilidad, estadistica y matematica para ML.",
    sourceSystem: "study-buddy",
    recommendedSources: [
      { label: "Mathematics for Machine Learning (lectura recomendada)", url: "https://mml-book.github.io/" },
    ],
    lessons: [
      {
        slug: "01-bayes",
        title: "Bayes, con 1000 personas",
        beats: ["figura interactiva"],
        mins: 12,
        level: "base",
        topic: "matematicas",
      },
    ],
  },
  {
    id: "system-design",
    name: "System Design",
    desc: "Requests, caches y cuellos de botella en sistemas conectados.",
    sourceSystem: "study-buddy",
    recommendedSources: [
      { label: "Load Balancing (lectura recomendada)", url: "https://samwho.dev/load-balancing/" },
    ],
    lessons: [
      {
        slug: "01-bottleneck",
        title: "El viaje de un request",
        beats: ["diagrama interactivo"],
        mins: 12,
        level: "base",
        topic: "sistemas",
      },
    ],
  },
];

/* Modulos de practica existentes. Conservan rutas y motores propios; aqui
 * solo se describe su formato para el catalogo. */
const LEGACY_MODULES = [
  {
    id: "cubprep",
    name: "CubPrep",
    href: "CubPrep/index.html",
    format: "Simulador de examen",
    desc: "Simulador UNAM area 1 con practica por materias.",
  },
  {
    id: "saa-c03",
    name: "PrepAWS",
    href: "SAA-C03/index.html",
    format: "Simulador de certificacion",
    desc: "Practica para AWS Solutions Architect Associate (SAA-C03).",
  },
  {
    id: "mlops",
    name: "MLOps",
    href: "MLOps/index.html",
    format: "Banco de practica",
    desc: "Preguntas de ciclo de vida MLOps, inferencia y serving.",
  },
  {
    id: "flashcards",
    name: "Flashcards",
    href: "Flashcards/index.html",
    format: "Repaso espaciado",
    desc: "Tarjetas de recuerdo activo generadas desde las fuentes del stack.",
  },
];

/* Colecciones de fuentes del stack. CCA y Founder Guide son candidatas de
 * procedencia: su esquema sigue en revision y aun no publican lecciones. */
const SOURCE_COLLECTIONS = [
  {
    id: "study-buddy",
    name: "Study-buddy",
    status: "origen",
    note: "Coleccion de notebooks de origen: AI & Math, System Design, Tech Management, Storytelling y mas.",
  },
  {
    id: "capital-cultural",
    name: "Capital Cultural Automatico",
    status: "esquema-en-revision",
    note: "Esquema de catalogo en revision. Todavia no publica lecciones.",
  },
  {
    id: "founder-guide",
    name: "Founder Guide",
    status: "esquema-en-revision",
    note: "Esquema de catalogo en revision. Todavia no publica lecciones.",
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { LABS_TRACKS, LEGACY_MODULES, SOURCE_COLLECTIONS };
}
