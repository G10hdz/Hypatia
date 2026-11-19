/* books.js — libros y lecturas que el banco de preguntas puede citar.
 * free: solo enlaces oficiales y gratuitos (autor, editorial, arXiv).
 * Nunca enlaces a copias no autorizadas.
 * Amazon: busqueda por titulo y autor; AMAZON_TAG vacio = sin afiliado y sin
 * aviso de Asociada. */
const AMAZON_TAG = "";

const BOOKS = [
  // ai-math
  { id: "mml", title: "Mathematics for Machine Learning", author: "Deisenroth, Faisal y Ong", tracks: ["ai-math"], free: "https://mml-book.github.io/" },
  { id: "think-bayes", title: "Think Bayes", author: "Allen B. Downey", tracks: ["ai-math"], free: "https://allendowney.github.io/ThinkBayes2/" },
  { id: "attention", title: "Attention Is All You Need", author: "Vaswani et al.", tracks: ["ai-math"], free: "https://arxiv.org/abs/1706.03762", kind: "paper" },

  // system-design
  { id: "ddia", title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", tracks: ["system-design"] },
  { id: "uds", title: "Understanding Distributed Systems", author: "Roberto Vitillo", tracks: ["system-design"] },
  { id: "release-it", title: "Release It!", author: "Michael Nygard", tracks: ["system-design"] },
  { id: "sre-book", title: "Site Reliability Engineering", author: "Beyer, Jones, Petoff y Murphy", tracks: ["system-design"], free: "https://sre.google/sre-book/table-of-contents/" },
  { id: "sre-workbook", title: "The Site Reliability Workbook", author: "Beyer, Murphy, Rensin, Kawahara y Thorne", tracks: ["system-design"], free: "https://sre.google/workbook/table-of-contents/" },
  { id: "samwho-lb", title: "Load Balancing", author: "Sam Rose", tracks: ["system-design"], free: "https://samwho.dev/load-balancing/", kind: "web" },

  // comunicacion
  { id: "resonate", title: "Resonate", author: "Nancy Duarte", tracks: ["comunicacion"] },
  { id: "made-to-stick", title: "Made to Stick", author: "Chip Heath y Dan Heath", tracks: ["comunicacion"] },
  { id: "getting-to-yes", title: "Getting to Yes", author: "Fisher, Ury y Patton", tracks: ["comunicacion"] },
  { id: "wwww", title: "What Works for Women at Work", author: "Joan C. Williams y Rachel Dempsey", tracks: ["comunicacion"] },
  { id: "never-split", title: "Never Split the Difference", author: "Chris Voss", tracks: ["comunicacion"] },
  { id: "trusted-advisor", title: "The Trusted Advisor", author: "Maister, Green y Galford", tracks: ["comunicacion"] },
  { id: "fearless-org", title: "The Fearless Organization", author: "Amy Edmondson", tracks: ["comunicacion"] },
];

function amazonUrl(book) {
  if (book.kind === "web" || book.kind === "paper") return null;
  const q = encodeURIComponent(`${book.title} ${book.author}`);
  return `https://www.amazon.com.mx/s?k=${q}` + (AMAZON_TAG ? `&tag=${encodeURIComponent(AMAZON_TAG)}` : "");
}
