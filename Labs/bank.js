/* bank.js — banco de preguntas del desafio del dia, aparte de las lecciones.
 * Cada pregunta entra como "borrador" y solo pasa a "aprobada" tras revision
 * humana (respuesta comprobada y cita verificada). El desafio usa solo las
 * aprobadas.
 *
 * { id, track, status: "borrador" | "aprobada",
 *   prompt, options: [3-4 textos], ok: indice correcto, why,
 *   ref: { book: id de BOOKS, where: "cap. 7" } }
 */
const QUESTION_BANK = [
  // ai-math: piloto docs/briefs/bank-ai-math.md
  {
    "id": "aim-001",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Se lanza un dado justo de seis caras. Cual es la probabilidad de que salga par o mayor que 4?",
    "options": [
      "1/2",
      "5/6",
      "2/3",
      "3/4"
    ],
    "ok": 2,
    "why": "P(par) = 3/6 y P(mayor que 4) = 2/6. La interseccion es {6}, que aporta 1/6. Union: 3/6 + 2/6 - 1/6 = 4/6 = 2/3. Sumar 3/6 + 2/6 = 5/6 cuenta dos veces el 6.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 1"
    }
  },
  {
    "id": "aim-002",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "En un grupo de 100 personas, 60 toman te y 30 toman te y cafe. Si una persona toma te, cual es la probabilidad de que tambien tome cafe?",
    "options": [
      "0.3",
      "0.5",
      "0.6",
      "0.18"
    ],
    "ok": 1,
    "why": "La condicional reduce el universo a las 60 personas que toman te. De ellas, 30 toman cafe: 30/60 = 0.5. El 0.3 es la probabilidad conjunta 30/100, no la condicional.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 1"
    }
  },
  {
    "id": "aim-003",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "A y B son independientes, con P(A) = 0.5 y P(B) = 0.4. Cual es P(A|B)?",
    "options": [
      "0.5",
      "0.2",
      "0.7",
      "0.8"
    ],
    "ok": 0,
    "why": "Independencia significa que B no aporta informacion sobre A: P(A|B) = P(A) = 0.5. El 0.2 es la conjunta P(A y B) = 0.5 x 0.4, no una condicional.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 1"
    }
  },
  {
    "id": "aim-004",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Un proceso tiene exito con probabilidad 0.2 en cada intento, y los intentos son independientes. Si se hacen dos intentos, cual es la probabilidad de al menos un exito?",
    "options": [
      "0.4",
      "0.64",
      "0.04",
      "0.36"
    ],
    "ok": 3,
    "why": "Conviene contar el complemento: fallar los dos intentos vale 0.8 x 0.8 = 0.64. Entonces P(al menos un exito) = 1 - 0.64 = 0.36. Sumar 0.2 + 0.2 = 0.4 cuenta dos veces el caso de dos exitos.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 1"
    }
  },
  {
    "id": "aim-005",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Una enfermedad afecta al 1% de una poblacion. Una prueba detecta al 99% de los enfermos y da falso positivo en el 5% de los sanos. Si una persona da positivo, cual es la probabilidad de que tenga la enfermedad?",
    "options": [
      "0.99",
      "0.5",
      "0.01",
      "1/6"
    ],
    "ok": 3,
    "why": "En 10000 personas: 100 enfermas y 9900 sanas. Positivos: 100 x 0.99 = 99 enfermos y 9900 x 0.05 = 495 sanos, en total 594. P(enfermedad | positivo) = 99/594 = 1/6, cerca de 0.17. El 0.99 es la sensibilidad, no el posterior.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 2"
    }
  },
  {
    "id": "aim-006",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Hay dos bolsas. La bolsa A tiene 2 fichas rojas y 3 azules; la bolsa B tiene 4 rojas y 1 azul. Se elige una bolsa al azar y se saca una ficha roja. Cual es la probabilidad de haber elegido la bolsa A?",
    "options": [
      "2/5",
      "2/3",
      "1/3",
      "1/2"
    ],
    "ok": 2,
    "why": "P(roja | A) = 2/5 = 0.4 y P(roja | B) = 4/5 = 0.8. Numerador: 0.5 x 0.4 = 0.2. Denominador: 0.5 x 0.4 + 0.5 x 0.8 = 0.6. Posterior: 0.2/0.6 = 1/3.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 2"
    }
  },
  {
    "id": "aim-007",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "En un pueblo de 1000 personas, 100 tienen gripe. El 80% de los enfermos tiene fiebre y el 10% de los sanos tambien. Si una persona tiene fiebre, cual es la probabilidad de que tenga gripe?",
    "options": [
      "0.8",
      "8/17",
      "9/17",
      "0.1"
    ],
    "ok": 1,
    "why": "De 1000 personas, 100 tienen gripe y 900 no. Con fiebre: 100 x 0.8 = 80 enfermos y 900 x 0.1 = 90 sanos, en total 170. P(gripe | fiebre) = 80/170 = 8/17, cerca de 0.47. El 0.8 es la sensibilidad.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 2"
    }
  },
  {
    "id": "aim-009",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Hay dos monedas: una justa y otra con dos caras. Se elige una al azar y sale cara. Cual es la probabilidad de haber elegido la moneda de dos caras?",
    "options": [
      "2/3",
      "1/2",
      "3/4",
      "1/3"
    ],
    "ok": 0,
    "why": "P(cara) = 0.5 x 0.5 + 0.5 x 1 = 0.25 + 0.5 = 0.75. El posterior de la moneda de dos caras es 0.5/0.75 = 2/3; la moneda justa se queda con 1/3.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 2"
    }
  },
  {
    "id": "aim-010",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Un dado esta cargado de modo que el 6 tiene probabilidad 0.25 y las otras cinco caras tienen la misma probabilidad entre si. Cual es la probabilidad de sacar un numero par?",
    "options": [
      "0.5",
      "0.55",
      "0.45",
      "0.65"
    ],
    "ok": 1,
    "why": "Las otras cinco caras suman 1 - 0.25 = 0.75, o sea 0.15 cada una. Pares: 2 y 4 aportan 0.15 + 0.15, y el 6 aporta 0.25. Total 0.55. El 0.5 supone un dado justo.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 3"
    }
  },
  {
    "id": "aim-011",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Se lanzan dos dados justos. Cual es la probabilidad de que la suma sea exactamente 7?",
    "options": [
      "1/6",
      "1/11",
      "1/12",
      "5/36"
    ],
    "ok": 0,
    "why": "Hay 36 pares igualmente probables. Suman 7: (1,6), (2,5), (3,4), (4,3), (5,2) y (6,1), seis casos. P = 6/36 = 1/6. Repartir 1/11 entre las 11 sumas es el error tipico.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 6"
    }
  },
  {
    "id": "aim-012",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Se lanzan dos dados justos. Cual es la probabilidad de que la suma sea impar?",
    "options": [
      "1/2",
      "1/3",
      "1/4",
      "5/12"
    ],
    "ok": 0,
    "why": "Para una suma impar los dados deben tener paridad distinta. Fijado el primero, 3 de las 6 caras del segundo dan paridad opuesta: 3/6 = 1/2. Tambien son 18 de los 36 pares.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 6"
    }
  },
  {
    "id": "aim-013",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Las odds de un evento son 3 a 1 a favor. Cual es su probabilidad?",
    "options": [
      "1/4",
      "3/4",
      "1/3",
      "3"
    ],
    "ok": 1,
    "why": "Odds 3:1 a favor son 3 casos a favor por 1 en contra: P = 3/(3+1) = 3/4 = 0.75. Leer 3:1 como 1/3 invierte el cociente.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 6"
    }
  },
  {
    "id": "aim-014",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Las odds previas de una hipotesis son 1 a 9, es decir, probabilidad 0.1. Llega un dato con razon de verosimilitud 4 a favor de la hipotesis. Cual es la probabilidad posterior?",
    "options": [
      "0.4",
      "9/13",
      "4/13",
      "0.1"
    ],
    "ok": 2,
    "why": "Prior 0.1 son odds 1:9. Multiplicar por la razon de verosimilitud 4 da odds 4:9. Entonces P = 4/(4+9) = 4/13, cerca de 0.31. Hacer 0.1 x 4 = 0.4 confunde el likelihood con el posterior.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 6"
    }
  },
  {
    "id": "aim-015",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "La probabilidad previa de una hipotesis es 0.5. Llegan dos datos independientes, cada uno con razon de verosimilitud 3 a favor. Cual es la probabilidad posterior?",
    "options": [
      "0.75",
      "0.6",
      "0.5",
      "0.9"
    ],
    "ok": 3,
    "why": "Prior 0.5 son odds 1:1. Cada dato independiente multiplica las odds por 3: 1 x 3 x 3 = 9, odds 9:1. P = 9/(9+1) = 0.9. Sumar las razones o usar un solo dato da de menos.",
    "ref": {
      "book": "think-bayes",
      "where": "cap. 6"
    }
  },
  {
    "id": "aim-016",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Cual es el producto punto de u = (2, 3) y v = (4, -1)?",
    "options": [
      "5",
      "11",
      "-5",
      "8"
    ],
    "ok": 0,
    "why": "2 x 4 + 3 x (-1) = 8 - 3 = 5. El 11 sale de sumar 8 + 3 en lugar de restar el termino negativo.",
    "ref": {
      "book": "mml",
      "where": "cap. 3"
    }
  },
  {
    "id": "aim-017",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Sea A = [[2, 1], [0, 3]] y x = (1, 2). Cual es el vector A x?",
    "options": [
      "(3, 6)",
      "(4, 6)",
      "(2, 6)",
      "(4, 5)"
    ],
    "ok": 1,
    "why": "Primera fila: 2 x 1 + 1 x 2 = 4. Segunda fila: 0 x 1 + 3 x 2 = 6. Resultado (4, 6).",
    "ref": {
      "book": "mml",
      "where": "cap. 2"
    }
  },
  {
    "id": "aim-018",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Cual es la similitud coseno entre u = (1, 0) y v = (1, 1)?",
    "options": [
      "0.5",
      "1",
      "0.866",
      "0.707"
    ],
    "ok": 3,
    "why": "Producto punto: 1 x 1 + 0 x 1 = 1. Normas: |u| = 1 y |v| = raiz(2) = 1.414. cos = 1/1.414 = 0.707, el angulo de 45 grados. El 1 olvida dividir por las normas.",
    "ref": {
      "book": "mml",
      "where": "cap. 3"
    }
  },
  {
    "id": "aim-019",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "Si Var(X) = 3, cuanto vale Var(2X)?",
    "options": [
      "6",
      "3",
      "9",
      "12"
    ],
    "ok": 3,
    "why": "Var(2X) = 2^2 x Var(X) = 4 x 3 = 12. La constante sale al cuadrado; 6 es el error de multiplicar solo por 2.",
    "ref": {
      "book": "mml",
      "where": "cap. 6"
    }
  },
  {
    "id": "aim-020",
    "track": "ai-math",
    "status": "borrador",
    "prompt": "X sigue una normal con media 10 y varianza 4. Cual es su desviacion estandar y, aproximadamente, que probabilidad hay de que X caiga entre 8 y 12?",
    "options": [
      "desv. 4; 68%",
      "desv. 4; 95%",
      "desv. 2; 68%",
      "desv. 2; 95%"
    ],
    "ok": 2,
    "why": "En N(10, 4) el segundo parametro es la varianza, asi que la desviacion estandar es raiz(4) = 2. Entre 8 y 12 hay una desviacion estandar por lado, que concentra cerca del 68%. El 95% corresponde a dos desviaciones.",
    "ref": {
      "book": "mml",
      "where": "cap. 6"
    }
  },
];
