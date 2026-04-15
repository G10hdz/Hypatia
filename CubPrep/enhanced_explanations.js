window.ENHANCED_EXPLANATIONS = {
  "_meta": {
    "version": "3.0",
    "source": "NotebookLM + YouTube Skills Integration",
    "generated": "2026-04-14",
    "notebook_url": "https://notebooklm.google.com/notebook/bd80433d-f3bd-47f5-a680-d9ffae921650",
    "description": "Enhanced explanations using official UNAM Area 1 classification (25 topics)",
    "migration_note": "Phase 2 complete - restructured to use official tags (mat_*, fis_*, qui_*). Legacy mapping preserved below."
  },
  "topics": {
    // MATEMÁTICAS (8 official topics)
    "mat_algebra": {
      "title": "Álgebra",
      "introduction": "El álgebra es una rama fundamental de las matemáticas que se enfoca en expresiones algebraicas, ecuaciones, desigualdades y sistemas de ecuaciones. Es esencial para resolver problemas del examen UNAM.",
      "key_concepts": [
        "Operaciones con expresiones algebraicas, productos y factorización",
        "Ecuaciones lineales, ecuaciones cuadráticas e desigualdades",
        "Sistemas de ecuaciones lineales con dos o tres variables"
      ],
      "formulas": [
        "Fórmula cuadrática: x = (-b ± √(b² - 4ac)) / (2a)",
        "Binomio al cubo: (a - b)³ = a³ - 3a²b + 3ab² - b³"
      ],
      "problem_types": [
        "Resolver inecuaciones de primer grado",
        "Encontrar raíces de ecuaciones cuadráticas",
        "Simplificar fracciones algebraicas por factorización",
        "Resolver sistemas de ecuaciones 3×3 usando la Regla de Cramer"
      ],
      "study_tips": [
        "Aprende cuándo aplicar la fórmula cuadrática en lugar de intentar factorizar manualmente",
        "En exámenes de opción múltiple, analiza los términos para eliminar opciones incorrectas antes de hacer expansiones algebraicas completas"
      ]
    },
    "mat_aritmetica": {
      "title": "Aritmética",
      "introduction": "La aritmética se enfoca en operaciones fundamentales con números reales y complejos. Incluye propiedades de potencias y raíces que son esenciales en la prueba UNAM.",
      "key_concepts": [
        "Adición, sustracción, multiplicación y división de números reales",
        "Cálculo de raíces y potencias usando exponentes racionales",
        "Operaciones básicas con números complejos"
      ],
      "formulas": [
        "Propiedades de exponentes: (aⁿ / aᵐ)ⁿ = aⁿ(ⁿ⁻ᵐ)"
      ],
      "problem_types": [
        "Calcular diferencias con números negativos",
        "Simplificar expresiones algebraicas que contienen exponentes y radicales"
      ],
      "study_tips": [
        "Domina las leyes básicas de exponentes y propiedades de igualdad antes de pasar a fracciones algebraicas complejas"
      ]
    },
    "mat_geometria_analitica": {
      "title": "Geometría Analítica",
      "introduction": "La geometría analítica estudia figuras geométricas como líneas rectas y cónicas utilizando sistemas de coordenadas y ecuaciones algebraicas. Es fundamental para el área 1 de la UNAM.",
      "key_concepts": [
        "Calcular la distancia entre dos puntos y determinar la pendiente de una recta",
        "Condiciones de paralelismo y perpendicularidad",
        "Cónicas como círculo, parábola, elipse e hipérbola"
      ],
      "formulas": [
        "Ecuaciones ordinarias y generales de la recta, círculo, parábola, elipse e hipérbola",
        "Fórmulas para puntos notables del triángulo: ortocentro, circuncentro, baricentro"
      ],
      "problem_types": [
        "Encontrar la ecuación general de una parábola con vértice en el origen o en un punto arbitrario",
        "Establecer relaciones entre parámetros a, b, c en elipses e hipérbolas"
      ],
      "study_tips": [
        "Enfócate en entender las relaciones directas entre elementos geométricos de cónicas y cómo definen sus ecuaciones"
      ]
    },
    "mat_trigonometria": {
      "title": "Trigonometría",
      "introduction": "La trigonometría estudia las relaciones entre ángulos y lados de triángulos. Es vital para ingeniería, física y es muy importante en el examen UNAM.",
      "key_concepts": [
        "Razones trigonométricas fundamentales: seno, coseno y tangente",
        "Ley de Senos y Ley de Cosenos para resolver triángulos oblicuos",
        "Funciones trigonométricas inversas: arcoseno, arcocoseno, arcotangente",
        "Círculo trigonométrico, dominio, rango, período y amplitud"
      ],
      "formulas": [
        "Razones básicas: sen(θ) = opuesto/hipotenusa, cos(θ) = adyacente/hipotenusa, tan(θ) = opuesto/adyacente",
        "Ley de Senos: a/sen(A) = b/sen(B) = c/sen(C)",
        "Ley de Cosenos: a² = b² + c² - 2bc·cos(A)",
        "Identidad pitagórica: sen²(θ) + cos²(θ) = 1",
        "Conversión: θ° = (180/π) × θᵣ"
      ],
      "problem_types": [
        "Resolver triángulos rectángulos usando razones trigonométricas",
        "Aplicar Ley de Senos o Cosenos en triángulos no rectángulos",
        "Convertir ángulos de radianes a grados"
      ],
      "study_tips": [
        "Siempre identifica y etiqueta primero los lados y ángulos relevantes del triángulo",
        "Decide exactamente qué razón trigonométrica o ley aplica antes de calcular",
        "Memoriza identidades trigonométricas para simplificar expresiones complejas"
      ]
    },
    "mat_precalculo": {
      "title": "Precálculo",
      "introduction": "El precálculo estudia funciones exponenciales, logarítmicas, números complejos y secuencias que preparan para cálculo.",
      "key_concepts": [
        "Funciones exponenciales y logarítmicas: gráficas, propiedades, ecuaciones",
        "Números complejos: forma rectangular y polar",
        "Secuencias y series: aritmética y geométrica",
        "Análisis de dominio y rango de funciones especiales"
      ],
      "formulas": [
        "Exponentes: aˣ · aʸ = aˣ⁺ʸ, log_a(xy) = log_a(x) + log_a(y)",
        "Números complejos: z = a + bi, |z| = √(a² + b²)"
      ],
      "problem_types": [
        "Resolver ecuaciones exponenciales y logarítmicas",
        "Trabajar con números complejos en forma rectangular y polar",
        "Analizar convergencia de series"
      ],
      "study_tips": [
        "Recuerda que log_a(x) es el inverso de aˣ",
        "Los números complejos i² = -1 es la relación fundamental",
        "Las series geométricas convergen si |r| < 1"
      ]
    },
    "mat_funciones_calculo": {
      "title": "Funciones y Cálculo",
      "introduction": "Estudio de funciones, límites, continuidad, derivadas e integrales - herramientas fundamentales del cálculo.",
      "key_concepts": [
        "Concepto de función, dominio, rango, composición",
        "Límites y continuidad",
        "Derivadas: definición, reglas, aplicaciones",
        "Integrales: definidas e indefinidas, técnicas de integración"
      ],
      "formulas": [
        "Límite: lim(x→a) f(x) = L si para todo ε > 0 existe δ > 0 tal que |f(x) - L| < ε",
        "Derivada: f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
        "Regla de la cadena: (f ∘ g)'(x) = f'(g(x)) · g'(x)",
        "Integral fundamental: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C"
      ],
      "problem_types": [
        "Calcular límites, incluyendo formas indeterminadas",
        "Encontrar derivadas usando reglas de diferenciación",
        "Resolver problemas de optimización con derivadas",
        "Evaluar integrales definidas e indefinidas"
      ],
      "study_tips": [
        "Entiende la derivada como la tasa de cambio instantánea",
        "La regla de la cadena es crucial para funciones compuestas",
        "La integración es el proceso inverso de la derivación"
      ]
    },
    "mat_geometria": {
      "title": "Geometría Euclidiana",
      "introduction": "Estudio clásico de axiomas, postulados, teoremas y construcciones geométricas en el plano.",
      "key_concepts": [
        "Puntos, líneas, planos y ángulos",
        "Triángulos: congruencia, semejanza, propiedades",
        "Polígonos: propiedades, perímetros, áreas",
        "Circunferencias: arcos, ángulos inscritos, tangentes"
      ],
      "formulas": [
        "Teorema de Pitágoras: a² + b² = c²",
        "Área de triángulo: A = (b · h)/2",
        "Área de círculo: A = πr²",
        "Suma de ángulos en triángulo: 180°"
      ],
      "problem_types": [
        "Demostrar congruencia o semejanza de triángulos",
        "Calcular áreas y perímetros de polígonos",
        "Resolver problemas sobre circunferencias y ángulos inscritos"
      ],
      "study_tips": [
        "Memoriza los teoremas de congruencia: LLL, LAL, ALA",
        "Los ángulos inscritos son la mitad del ángulo central que subtiene el mismo arco",
        "La tangente a un círculo es perpendicular al radio en el punto de tangencia"
      ]
    },
    "mat_estadistica_probabilidad": {
      "title": "Estadística y Probabilidad",
      "introduction": "Análisis de datos, distribuciones de probabilidad, medidas estadísticas y métodos de conteo.",
      "key_concepts": [
        "Combinaciones y permutaciones",
        "Probabilidad: clásica, condicional, total",
        "Variables aleatorias y distribuciones",
        "Medidas de tendencia central y dispersión"
      ],
      "formulas": [
        "Combinaciones: C(n,k) = n!/(k!(n-k)!)",
        "Permutaciones: P(n,k) = n!/(n-k)!",
        "Probabilidad: P(A) = casos_favorables/casos_totales",
        "Media: μ = Σx/n, Varianza: σ² = Σ(x-μ)²/n"
      ],
      "problem_types": [
        "Contar combinaciones y permutaciones",
        "Calcular probabilidades usando reglas básicas",
        "Analizar distribuciones y calcular estadísticas descriptivas"
      ],
      "study_tips": [
        "En combinaciones el orden NO importa, en permutaciones SÍ",
        "P(A|B) = P(A∩B)/P(B) para probabilidad condicional",
        "La distribución normal es simétrica alrededor de la media"
      ]
    },

    // FÍSICA (9 official topics)
    "fis_cinematica": {
      "title": "Cinemática",
      "introduction": "La cinemática estudia el movimiento de los cuerpos sin considerar las fuerzas que lo causan. Es fundamental para entender velocidad, aceleración y trayectorias en el examen UNAM.",
      "key_concepts": [
        "Movimiento rectilíneo uniforme (MRU): velocidad constante",
        "Movimiento rectilíneo uniformemente acelerado (MRUA): aceleración constante",
        "Tiro parabólico y movimiento en dos dimensiones",
        "Velocidad promedio vs. velocidad instantánea"
      ],
      "formulas": [
        "MRU: d = vt",
        "MRUA: v = v₀ + at, d = v₀t + ½at²",
        "Tiro parabólico: x = v₀cos(θ)t, y = v₀sen(θ)t - ½gt²"
      ],
      "problem_types": [
        "Calcular distancia recorrida en MRU",
        "Encontrar aceleración y velocidad final en MRUA",
        "Analizar trayectorias parabólicas"
      ],
      "study_tips": [
        "Siempre define sistemas de referencia claramente (positivo/negativo)",
        "Distingue entre velocidad y rapidez",
        "En tiro parabólico, descompón en movimientos horizontal y vertical"
      ]
    },
    "fis_dinamica": {
      "title": "Dinámica",
      "introduction": "Las tres leyes de Newton son la base de la dinámica y explican cómo el movimiento cambia debido a las fuerzas.",
      "key_concepts": [
        "Primera ley: Un objeto en reposo permanece en reposo, y uno en movimiento permanece en movimiento a menos que una fuerza actúe sobre él",
        "Segunda ley: F = ma",
        "Tercera ley: Acción y reacción",
        "Fuerzas: peso, normal, fricción, tensión"
      ],
      "formulas": [
        "Segunda ley de Newton: F = ma",
        "Peso: W = mg",
        "Fricción: f = μN",
        "Fuerza restauradora (Hooke): F = -kx"
      ],
      "problem_types": [
        "Diagramas de cuerpo libre y análisis de fuerzas",
        "Sistemas en equilibrio",
        "Movimiento con fricción"
      ],
      "study_tips": [
        "Siempre dibuja diagramas de cuerpo libre",
        "Identifica todas las fuerzas actuando sobre el objeto",
        "Recuerda que acción y reacción no se anulan porque actúan sobre objetos diferentes"
      ]
    },
    "fis_energia": {
      "title": "Energía",
      "introduction": "La energía y el trabajo son conceptos clave en física que explican cómo se transforma y transmite la energía en sistemas mecánicos.",
      "key_concepts": [
        "Trabajo mecánico: W = Fd cos(θ)",
        "Energía cinética: Ek = ½mv²",
        "Energía potencial gravitacional: Ep = mgh",
        "Teorema del trabajo-energía y conservación de energía"
      ],
      "formulas": [
        "Trabajo: W = Fd cos(θ)",
        "Energía cinética: Ek = ½mv²",
        "Energía potencial: Ep = mgh",
        "Potencia: P = W/t"
      ],
      "problem_types": [
        "Calcular trabajo realizado por fuerzas",
        "Aplicar conservación de energía en sistemas",
        "Resolver problemas con planos inclinados y fricción"
      ],
      "study_tips": [
        "La energía se conserva: Em = Ek + Ep = constante",
        "Recuerda que el trabajo puede ser positivo, negativo o cero",
        "Usa gráficos para visualizar cambios de energía"
      ]
    },
    "fis_termo": {
      "title": "Termodinámica",
      "introduction": "La termodinámica estudia calor, temperatura, procesos y leyes fundamentales que rigen la transformación de la energía térmica.",
      "key_concepts": [
        "Temperatura, escalas (Celsius, Fahrenheit, Kelvin)",
        "Calor específico y cambios de estado",
        "Primera ley de la termodinámica: ΔU = Q - W",
        "Segunda ley: entropía siempre aumenta en sistemas aislados"
      ],
      "formulas": [
        "Conversión de temperatura: K = °C + 273.15",
        "Calor: Q = mc·ΔT",
        "Trabajo en expansión: W = P·ΔV",
        "Eficiencia de motor: η = W/Q_in"
      ],
      "problem_types": [
        "Calcular transferencias de calor",
        "Aplicar la primera ley en procesos termodinámicos",
        "Determinar cambios de estado (fusión, evaporación, sublimación)"
      ],
      "study_tips": [
        "Recuerda que 0 K es el cero absoluto",
        "En procesos adiabáticos no hay transferencia de calor (Q = 0)",
        "Los motores reales siempre tienen eficiencia < 100%"
      ]
    },
    "fis_fluidos": {
      "title": "Mecánica de Fluidos",
      "introduction": "Estudio del comportamiento de líquidos y gases en reposo y en movimiento.",
      "key_concepts": [
        "Presión: fuerza por unidad de área",
        "Hidrostática: principio de Arquímedes, flotabilidad",
        "Hidrodinámica: ecuación de continuidad, principio de Bernoulli",
        "Viscosidad y flujo laminar"
      ],
      "formulas": [
        "Presión: P = F/A",
        "Presión hidrostática: P = ρgh",
        "Principio de Arquímedes: Fb = ρ_fluido·V_desplazado·g",
        "Ecuación de Bernoulli: P + ½ρv² + ρgh = constante"
      ],
      "problem_types": [
        "Calcular presiones en fluidos en reposo",
        "Determinar fuerzas de flotación",
        "Aplicar ecuación de continuidad en tuberías"
      ],
      "study_tips": [
        "La presión actúa perpendicular a cualquier superficie",
        "Un objeto flota si su densidad < densidad del fluido",
        "La ecuación de Bernoulli conserva energía en fluidos"
      ]
    },
    "fis_ondas": {
      "title": "Ondas",
      "introduction": "Estudio de fenómenos ondulatorios: propiedades de ondas, sonido, interferencia y resonancia.",
      "key_concepts": [
        "Características: amplitud, longitud de onda, frecuencia, período",
        "Tipos: ondas transversales y longitudinales",
        "Velocidad de onda: v = λf",
        "Interferencia, difracción y efecto Doppler"
      ],
      "formulas": [
        "Velocidad: v = λf, donde λ es longitud de onda, f es frecuencia",
        "Período: T = 1/f",
        "Ondas en cuerda: v = √(T/μ), donde T es tensión, μ es densidad lineal",
        "Efecto Doppler: f' = f(v ± v_obs)/(v ∓ v_fuente)"
      ],
      "problem_types": [
        "Calcular longitud de onda, frecuencia y velocidad",
        "Analizar interferencia constructiva y destructiva",
        "Aplicar efecto Doppler en problemas prácticos"
      ],
      "study_tips": [
        "Las ondas en fase interfieren constructivamente (amplitud máxima)",
        "Las ondas desfasadas 180° interfieren destructivamente (cancelación)",
        "La resonancia ocurre cuando frecuencia natural coincide con fuerza impulsora"
      ]
    },
    "fis_electro": {
      "title": "Electromagnetismo",
      "introduction": "Estudio de cargas eléctricas, campos, corriente, magnetismo e inducción electromagnética.",
      "key_concepts": [
        "Carga eléctrica y Ley de Coulomb",
        "Campo eléctrico y potencial",
        "Capacitores y dieléctricos",
        "Corriente eléctrica, resistencia y Ley de Ohm",
        "Magnetismo, campo magnético e inducción electromagnética"
      ],
      "formulas": [
        "Ley de Coulomb: F = k·q₁·q₂/r²",
        "Campo eléctrico: E = F/q",
        "Ley de Ohm: V = IR",
        "Potencia eléctrica: P = VI = I²R = V²/R",
        "Fuerza magnética: F = qvB·sin(θ)"
      ],
      "problem_types": [
        "Calcular fuerzas entre cargas",
        "Analizar circuitos de resistencias",
        "Determinar fuerzas en campos magnéticos",
        "Aplicar inducción de Faraday"
      ],
      "study_tips": [
        "Cargas iguales se repelen, cargas opuestas se atraen",
        "En circuitos en serie la corriente es igual; en paralelo el voltaje es igual",
        "La inducción electromagnética genera voltaje cuando hay cambio de flujo magnético"
      ]
    },
    "fis_optica": {
      "title": "Óptica",
      "introduction": "Estudio de luz: reflexión, refracción, lentes, prismas y fenómenos ópticos.",
      "key_concepts": [
        "Naturaleza de la luz: onda y partícula",
        "Leyes de reflexión y refracción",
        "Lentes convergentes y divergentes",
        "Espejos: planos, cóncavos, convexos",
        "Dispersión y espectro visible"
      ],
      "formulas": [
        "Ley de reflexión: θ_incidencia = θ_reflexión",
        "Ley de Snell: n₁·sin(θ₁) = n₂·sin(θ₂)",
        "Ecuación de lentes: 1/f = 1/s₀ + 1/s_i",
        "Aumento: M = -s_i/s₀"
      ],
      "problem_types": [
        "Localizar imágenes en espejos y lentes",
        "Calcular refracción en interfaces",
        "Determinar aumento y propiedades de imágenes"
      ],
      "study_tips": [
        "Ángulos se miden desde la normal (perpendicular a la superficie)",
        "Lentes convergentes tienen f > 0, divergentes f < 0",
        "La dispersión separa luz blanca en espectro (arco iris)"
      ]
    },
    "fis_contemporanea": {
      "title": "Física Contemporánea",
      "introduction": "Introducción a física moderna: relatividad, cuántica y estructura atómica.",
      "key_concepts": [
        "Relatividad especial de Einstein: E = mc²",
        "Fotones y efecto fotoeléctrico",
        "Modelo atómico de Bohr",
        "Radiactividad y desintegración nuclear",
        "Dualidad onda-partícula"
      ],
      "formulas": [
        "Equivalencia masa-energía: E = mc²",
        "Energía fotón: E = hf",
        "Efecto fotoeléctrico: hf = Φ + KE",
        "Energía nivel Bohr: E_n = -13.6/n² eV"
      ],
      "problem_types": [
        "Aplicar equivalencia masa-energía",
        "Calcular energía de fotones",
        "Analizar desintegraciones radioactivas"
      ],
      "study_tips": [
        "La luz tiene propiedades tanto de onda como de partícula",
        "El efecto fotoeléctrico no se explica con teoría clásica de ondas",
        "La radiactividad es proceso natural de átomos inestables"
      ]
    },

    // QUÍMICA (8 official topics)
    "qui_basicos": {
      "title": "Conceptos Básicos",
      "introduction": "Fundamentos de la química: definición de materia, cambios físicos vs químicos, elementos y compuestos.",
      "key_concepts": [
        "Materia: sólido, líquido, gas, plasma",
        "Elemento: sustancia pura con un solo tipo de átomo",
        "Compuesto: sustancia pura con dos o más elementos",
        "Mezclas: homogéneas y heterogéneas",
        "Cambios físicos vs químicos"
      ],
      "formulas": [
        "Fórmula química: símbolo de elemento + subíndice (número de átomos)"
      ],
      "problem_types": [
        "Distinguir cambios físicos de químicos",
        "Clasificar materia como elemento, compuesto o mezcla",
        "Escribir fórmulas químicas básicas"
      ],
      "study_tips": [
        "Un cambio físico no crea nueva sustancia; un cambio químico sí",
        "Los 11 elementos más comunes: H, C, N, O, F, P, S, Cl, Na, Ca, Fe",
        "Las mezclas pueden separarse por métodos físicos"
      ]
    },
    "qui_atomo": {
      "title": "Estructura Atómica",
      "introduction": "La estructura atómica describe cómo están organizados los protones, neutrones y electrones dentro del átomo, fundamental para entender la química.",
      "key_concepts": [
        "Partículas subatómicas: protones (+), neutrones (0), electrones (-)",
        "Número atómico (Z) = número de protones",
        "Número de masa (A) = protones + neutrones",
        "Configuración electrónica y orbitales"
      ],
      "formulas": [
        "Número de neutrones = A - Z",
        "Carga neta = (# protones) - (# electrones)"
      ],
      "problem_types": [
        "Identificar protones, neutrones y electrones",
        "Escribir configuración electrónica",
        "Calcular carga formal de iones"
      ],
      "study_tips": [
        "Memoriza el orden de llenado de orbitales (1s, 2s, 2p, 3s, etc.)",
        "Entiende que los electrones de valencia determinan el comportamiento químico",
        "Aprende a usar la tabla periódica para deducir configuraciones electrónicas"
      ]
    },
    "qui_tabla": {
      "title": "Tabla Periódica",
      "introduction": "La tabla periódica organiza los elementos químicos por propiedades. Entenderla es crucial para predecir reactividad y propiedades químicas.",
      "key_concepts": [
        "Períodos (filas) y grupos (columnas)",
        "Clasificación: metales, no metales, metaloides",
        "Tendencias periódicas: electronegatividad, radio atómico, energía de ionización",
        "Bloques s, p, d, f"
      ],
      "formulas": [
        "Electrones de valencia = # del grupo (para elementos representativos)"
      ],
      "problem_types": [
        "Predecir reactividad de elementos",
        "Usar tendencias periódicas para comparar propiedades",
        "Identificar familias químicas"
      ],
      "study_tips": [
        "Memoriza los grupos principales: alcalinos, alcalinotérreos, halógenos, gases nobles",
        "Entiende que la electronegatividad y el radio atómico tienen patrones predecibles",
        "Usa la posición en la tabla periódica para deducir configuración electrónica"
      ]
    },
    "qui_enlaces": {
      "title": "Enlaces Químicos",
      "introduction": "Los enlaces químicos son las fuerzas que mantienen unidos los átomos en moléculas. Comprender tipos de enlaces es esencial para química.",
      "key_concepts": [
        "Enlace iónico: transferencia de electrones",
        "Enlace covalente: compartir electrones (polar y no polar)",
        "Enlace metálico: mar de electrones",
        "Fuerzas intermoleculares: Van der Waals, puentes de hidrógeno"
      ],
      "formulas": [
        "Diferencia de electronegatividad > 1.7 → iónico, 0.4-1.7 → covalente polar, < 0.4 → covalente no polar"
      ],
      "problem_types": [
        "Clasificar enlaces según propiedades",
        "Predecir geometría molecular con VSEPR",
        "Explicar propiedades de compuestos basándose en tipos de enlaces"
      ],
      "study_tips": [
        "Memoriza valores de electronegatividad comunes",
        "VSEPR predice geometría: pares electrónicos se repelen",
        "Los puentes de hidrógeno son más fuertes que Van der Waals pero más débiles que enlaces covalentes"
      ]
    },
    "qui_nomenclatura": {
      "title": "Nomenclatura Química",
      "introduction": "Reglas para nombrar compuestos químicos según normas IUPAC y nomenclatura clásica.",
      "key_concepts": [
        "Compuestos iónicos: catión + anión",
        "Compuestos covalentes: prefijos numéricos",
        "Ácidos: H + no metal o H + oxianión",
        "Bases: metal + OH",
        "Nomenclatura clásica vs IUPAC"
      ],
      "formulas": [
        "Monóxido de carbono = CO, Dióxido de nitrógeno = NO₂"
      ],
      "problem_types": [
        "Nombre químico dado la fórmula",
        "Fórmula dado el nombre",
        "Determinar carga de iones"
      ],
      "study_tips": [
        "Los prefijos numéricos indican número de átomos: mono, di, tri, tetra...",
        "Los ácidos oxácidos terminan en -oso o -ico según número de O",
        "Aprende radicales comunes: sulfato, nitrato, fosfato, carbonato"
      ]
    },
    "qui_reacciones": {
      "title": "Reacciones Químicas",
      "introduction": "Las reacciones químicas transforman sustancias. Entender tipos de reacciones y cómo balancearlas es fundamental.",
      "key_concepts": [
        "Reacciones de síntesis, descomposición, sustitución simple, doble sustitución",
        "Reacciones redox: oxidación y reducción",
        "Reacciones ácido-base",
        "Balanceo de ecuaciones químicas"
      ],
      "formulas": [
        "Número de oxidación (NOX) para identificar oxidación/reducción"
      ],
      "problem_types": [
        "Balancear ecuaciones químicas",
        "Identificar agentes oxidantes y reductores",
        "Calcular pH en reacciones ácido-base"
      ],
      "study_tips": [
        "El oxígeno suele tener NOX = -2 (excepto en peróxidos)",
        "En reacciones redox, el NOX de átomos aumenta (oxidación) o disminuye (reducción)",
        "Práctica: memoriza reacciones comunes y aprende patrones"
      ]
    },
    "qui_soluciones": {
      "title": "Soluciones",
      "introduction": "Mezclas homogéneas de soluto y solvente. Estudio de concentración, dilución y propiedades coligativas.",
      "key_concepts": [
        "Soluto y solvente",
        "Concentración: molar, molal, porcentual, ppm",
        "Dilución: M₁V₁ = M₂V₂",
        "Propiedades coligativas: presión osmótica, punto de ebullición, punto de congelación"
      ],
      "formulas": [
        "Molaridad: M = moles/litros",
        "Molalidad: m = moles/kg disolvente",
        "Porcentaje masa: (masa soluto/masa solución)×100%",
        "Presión osmótica: π = MRT"
      ],
      "problem_types": [
        "Calcular molalidad y molaridad",
        "Resolver problemas de dilución",
        "Aplicar propiedades coligativas"
      ],
      "study_tips": [
        "Molaridad depende de volumen (cambia con temperatura), molalidad no",
        "Soluciones saturadas contienen máxima cantidad de soluto disuelto",
        "La presión osmótica es importante en células biológicas"
      ]
    },
    "qui_organica": {
      "title": "Química Orgánica",
      "introduction": "Estudio de compuestos de carbono: hidrocarburos, grupos funcionales, isómeros y reacciones.",
      "key_concepts": [
        "Hidrocarburos: alcanos (C-C saturados), alquenos (C=C), alquinos (C≡C)",
        "Grupos funcionales: -OH (alcohol), -COOH (ácido carboxílico), -CHO (aldehído)",
        "Isómeros: estructural y estereoisómeros",
        "Reacciones: adición, sustitución, condensación, oxidación"
      ],
      "formulas": [
        "Fórmula general alcanos: CₙH₂ₙ₊₂",
        "Alquenos: CₙH₂ₙ",
        "Alquinos: CₙH₂ₙ₋₂"
      ],
      "problem_types": [
        "Nombrar compuestos orgánicos",
        "Identificar grupos funcionales",
        "Determinar isómeros",
        "Predecir productos de reacciones"
      ],
      "study_tips": [
        "El carbono forma 4 enlaces; hidrógeno 1; oxígeno 2; nitrógeno 3",
        "Los alquenos son más reactivos que alcanos (doble enlace)",
        "El benceno (C₆H₆) es aromático y especialmente estable"
      ]
    }
  },

  // LEGACY FALLBACK MAPPING - for backward compatibility
  "_legacy_mapping": {
    "description": "Maps old custom topic keys to new official UNAM tags. Used when legacy code tries to access old keys.",
    "mapping": {
      // Math
      "algebra": "mat_algebra",
      "aritmetica": "mat_aritmetica",
      "geometria_analitica": "mat_geometria_analitica",
      "trigonometria": "mat_trigonometria",
      "probabilidad": "mat_estadistica_probabilidad",
      "funciones": "mat_funciones_calculo",
      "limites_derivadas": "mat_funciones_calculo",
      "precalculo": "mat_precalculo",
      "exponenciales_logaritmos": "mat_precalculo",
      "calculo": "mat_funciones_calculo",
      "derivadas": "mat_funciones_calculo",
      "integrales": "mat_funciones_calculo",
      "geometria": "mat_geometria",
      "geometria_euclidiana": "mat_geometria",
      "estadistica": "mat_estadistica_probabilidad",
      
      // Physics
      "cinematica": "fis_cinematica",
      "energia": "fis_energia",
      "leyes_newton": "fis_dinamica",
      "dinamica": "fis_dinamica",
      "fisica_general": "fis_dinamica",
      "termodinamica": "fis_termo",
      "termo": "fis_termo",
      "fluidos": "fis_fluidos",
      "ondas": "fis_ondas",
      "electromagnetismo": "fis_electro",
      "electro": "fis_electro",
      "optica": "fis_optica",
      "fisica_moderna": "fis_contemporanea",
      "cuantica": "fis_contemporanea",
      "relatividad": "fis_contemporanea",
      
      // Chemistry
      "conceptos_basicos": "qui_basicos",
      "estructura_atomica": "qui_atomo",
      "tabla_periodica": "qui_tabla",
      "enlaces": "qui_enlaces",
      "nomenclatura": "qui_nomenclatura",
      "reacciones": "qui_reacciones",
      "estequiometria": "qui_reacciones",
      "quimica_general": "qui_soluciones",
      "soluciones": "qui_soluciones",
      "concentraciones": "qui_soluciones",
      "quimica_organica": "qui_organica",
      
      // General
      "general": null
    }
  },

  // HELPER FUNCTIONS
  "getExplanation": function(topicKey) {
    // Try official tag first
    if (this.topics[topicKey]) {
      return this.topics[topicKey];
    }
    
    // Try legacy mapping
    const officialKey = this._legacy_mapping.mapping[topicKey];
    if (officialKey && this.topics[officialKey]) {
      console.warn(`[Legacy] Topic '${topicKey}' mapped to '${officialKey}' - consider updating code`);
      return this.topics[officialKey];
    }
    
    console.warn(`[ENHANCED_EXPLANATIONS] Topic not found: '${topicKey}'`);
    return null;
  },

  "getTopicsBySubject": function(subject) {
    // Returns array of official topic keys for a subject
    // subject: 'math', 'physics', 'chemistry'
    const prefixes = {
      "math": "mat_",
      "physics": "fis_",
      "chemistry": "qui_"
    };
    
    const prefix = prefixes[subject.toLowerCase()];
    if (!prefix) return [];
    
    return Object.keys(this.topics).filter(key => key.startsWith(prefix));
  },

  "getAllTopics": function() {
    // Returns array of all official topic keys
    return Object.keys(this.topics).filter(key => !key.startsWith("_"));
  }
};
