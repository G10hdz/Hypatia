// CubPrep module config — engine lo lee via window.HYPATIA_MODULE
window.HYPATIA_MODULE = {
  id: "cubprep",
  storagePrefix: "cubprep.",
  simulacroMinutes: 180,
  simulacroTimeLabel: "3h",
  examTotal: 120,
  targetScore: 105,
  subjects: [
      "matematicas", "fisica", "espanol", "quimica",
      "biologia", "historia_uni", "historia_mx", "literatura", "geografia"
    ],
  distribution: {
      matematicas: 26,
      espanol: 18,
      fisica: 16,
      quimica: 10,
      biologia: 10,
      historia_uni: 10,
      historia_mx: 10,
      literatura: 10,
      geografia: 10
    },
  labels: {
      matematicas: "Matematicas",
      fisica: "Fisica",
      quimica: "Quimica",
      espanol: "Espanol",
      historia_mx: "Historia de Mexico",
      historia_uni: "Historia Universal",
      geografia: "Geografia",
      biologia: "Biologia",
      literatura: "Literatura"
    },
  temaTypes: {
      // Math topics
      algebra: { type: "Analisis Matematico", class: "type-analisis" },
      aritmetica: { type: "Aplicacion de Formula", class: "type-aplicacion" },
      geometria: { type: "Aplicacion de Formula", class: "type-aplicacion" },
      trigonometria: { type: "Aplicacion de Formula", class: "type-aplicacion" },
      calculo: { type: "Analisis Matematico", class: "type-analisis" },
      probabilidad: { type: "Analisis Matematico", class: "type-analisis" },
      estadistica: { type: "Analisis Matematico", class: "type-analisis" },
      // Science topics
      mecanica: { type: "Aplicacion de Formula", class: "type-aplicacion" },
      termodinamica: { type: "Aplicacion de Formula", class: "type-aplicacion" },
      ondas: { type: "Concepto Teorico", class: "type-concepto" },
      electromagnetismo: { type: "Aplicacion de Formula", class: "type-aplicacion" },
      optica: { type: "Concepto Teorico", class: "type-concepto" },
      atomica: { type: "Concepto Teorico", class: "type-concepto" },
      nuclear: { type: "Concepto Teorico", class: "type-concepto" },
      enlaces: { type: "Concepto Teorico", class: "type-concepto" },
      estequiometria: { type: "Aplicacion de Formula", class: "type-aplicacion" },
      acidos: { type: "Concepto Teorico", class: "type-concepto" },
      organic: { type: "Concepto Teorico", class: "type-concepto" },
      inorganica: { type: "Concepto Teorico", class: "type-concepto" },
      // Language & literature
      gramatica: { type: "Concepto Teorico", class: "type-concepto" },
      ortografia: { type: "Concepto Teorico", class: "type-concepto" },
      comprension: { type: "Analisis de Texto", class: "type-analisis" },
      literatura_mex: { type: "Concepto Teorico", class: "type-concepto" },
      literatura_uni: { type: "Concepto Teorico", class: "type-concepto" },
      // History & geography
      historia_mex: { type: "Concepto Teorico", class: "type-concepto" },
      historia_uni: { type: "Concepto Teorico", class: "type-concepto" },
      geografia_mex: { type: "Concepto Teorico", class: "type-concepto" },
      geografia_fis: { type: "Concepto Teorico", class: "type-concepto" },
      geografia_eco: { type: "Concepto Teorico", class: "type-concepto" },
      // Biology
      celulares: { type: "Concepto Teorico", class: "type-concepto" },
      genetica: { type: "Concepto Teorico", class: "type-concepto" },
      evolucion: { type: "Concepto Teorico", class: "type-concepto" },
      ecologia: { type: "Concepto Teorico", class: "type-concepto" },
      anatomia: { type: "Concepto Teorico", class: "type-concepto" },
      fisiologia: { type: "Concepto Teorico", class: "type-concepto" }
    },
  objectives: {
      // Math
      algebra: "Evalua tu capacidad para manipular expresiones algebraicas, factorizar y resolver ecuaciones.",
      aritmetica: "Mide tu dominio de operaciones basicas, fracciones, porcentajes y divisibilidad.",
      geometria: "Evalua comprension de figuras geometricas, areas, perimetros y propiedades geometricas.",
      trigonometria: "Mide tu manejo de funciones trigonometricas y resolucion de triangulos.",
      calculo: "Evalua conceptos de limites, derivadas e integrales.",
      probabilidad: "Mide tu capacidad para calcular probabilidades y analizar eventos aleatorios.",
      estadistica: "Evalua interpretacion de datos, medidas de tendencia central y dispersion.",
      // Physics
      mecanica: "Evalua comprension de movimiento, fuerzas y leyes de Newton.",
      termodinamica: "Mide tu conocimiento de calor, temperatura y leyes de la termodinamica.",
      ondas: "Evalua propiedades de ondas: frecuencia, longitud de onda, reflexion y refraccion.",
      electromagnetismo: "Mide tu manejo de circuitos, voltaje, corriente y leyes de electricidad.",
      optica: "Evalua conceptos de luz, espejos, lentes y formacion de imagenes.",
      atomica: "Mide tu comprension de estructura atomica y modelo atomico.",
      nuclear: "Evalua conocimiento de radiactividad y reacciones nucleares.",
      // Chemistry
      enlaces: "Evalua tipos de enlaces quimicos: ionico, covalente y metalico.",
      estequiometria: "Mide tu capacidad para balancear ecuaciones y calcular cantidades quimicas.",
      acidos: "Evalua conocimiento de pH, acidos, bases y neutralizacion.",
      organic: "Mide tu comprension de quimica organica y grupos funcionales.",
      inorganica: "Evalua conocimiento de compuestos inorganicos y nomenclatura.",
      // Language
      gramatica: "Evalua reglas gramaticales, sintaxis y estructura de oraciones.",
      ortografia: "Mide tu dominio de acentuacion, puntuacion y escritura correcta.",
      comprension: "Evalua capacidad para analizar e interpretar textos literarios.",
      literatura_mex: "Mide conocimiento de autores y obras de la literatura mexicana.",
      literatura_uni: "Evalua conocimiento de movimientos literarios y obras universales.",
      // History & Geography
      historia_mex: "Evalua conocimiento de eventos clave de la historia de Mexico.",
      historia_uni: "Mide tu comprension de procesos historicos mundiales.",
      geografia_mex: "Evalua conocimiento de regiones, climas y geografia de Mexico.",
      geografia_fis: "Mide tu manejo de conceptos de geografia fisica.",
      geografia_eco: "Evalua comprension de actividad economica y distribucion geografica.",
      // Biology
      celulares: "Evalua conocimiento de estructura y funcion celular.",
      genetica: "Mide tu comprension de herencia, ADN y leyes de Mendel.",
      evolucion: "Evalua teoria evolutiva y seleccion natural.",
      ecologia: "Mide conocimiento de ecosistemas, cadenas alimenticias y relaciones ecologicas.",
      anatomia: "Evalua estructura y funcion de sistemas del cuerpo humano.",
      fisiologia: "Mide comprension de procesos fisiologicos y homeostasis."
    },
  idPrefixes: {
      matematicas: "mat",
      fisica: "fis",
      quimica: "qui",
      espanol: "esp",
      historia_mx: "hmx",
      historia_uni: "hun",
      geografia: "geo",
      biologia: "bio",
      literatura: "lit"
    },
  phrases: [
      "Acierto! Eres una maquina.",
      "Correcto! El UNAM te esta esperando.",
      "Streak! Imparable.",
      "Exacto! Ingenieria en Computo unlocked.",
      "Bien! Rompiéndola como siempre.",
      "Correcto! +{puntos} puntos. Sigue asi."
    ],
  streakMessages: { 15: "¡El UNAM te espera!" }
};
