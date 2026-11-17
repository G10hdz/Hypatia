/* tracks.js — registry de lecciones interactivas (Labs).
 * Un track por tema del stack (mismos nombres que los notebooks de
 * study-buddy). Cada lección apunta a su carpeta <track>/<NN-slug>/.
 */
const LABS_TRACKS = [
  {
    id: "ai-math",
    name: "AI & Math",
    desc: "Probabilidad, estadística y matemática para ML — del notebook Recursos AI & Math (HDP, ESL, mml-book).",
    color: "#C4B5E3",
    lessons: [
      { slug: "01-bayes", title: "Bayes, con 1000 personas", beats: ["figura interactiva"], mins: 12 },
    ],
  },
];
