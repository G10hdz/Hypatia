/* bank.js — banco de preguntas del desafio del dia, aparte de las lecciones.
 * Cada pregunta entra como "borrador" y solo pasa a "aprobada" tras revision
 * humana (respuesta comprobada y cita verificada). El desafio usa solo las
 * aprobadas.
 *
 * { id, track, status: "borrador" | "aprobada",
 *   prompt, options: [3-4 textos], ok: indice correcto, why,
 *   ref: { book: id de BOOKS, where: "cap. 7" } }
 */
const QUESTION_BANK = [];
