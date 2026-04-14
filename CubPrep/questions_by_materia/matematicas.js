// matematicas questions - 1340 items
window.QUESTIONS_MATEMATICAS = [
  {
    "id": "mat_001",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 1,
    "pregunta": "Si 3x + 7 = 22, ¿cuánto vale x?",
    "opciones": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correcta": 2,
    "explicacion": "La ecuación es lineal y se puede resolver despejando la variable x.",
    "explicacion_correcta": "Para resolver 3x + 7 = 22, primero restamos 7 de ambos lados: 3x = 15. Luego dividimos ambos lados por 3: x = 5.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"3 no es la solución porque al multiplicar 3 por 3, obtenemos 9, que más 7 da 16, no 22.\"}, {\"opcion\": \"B\", \"razon\": \"4 no es la solución porque al multiplicar 3 por 4, obtenemos 12, que más 7 da 19, no 22.\"}, {\"opcion\": \"D\", \"razon\": \"6 no es la solución porque al multiplicar 3 por 6, obtenemos 18, que más 7 da 25, no 22.\"}]",
    "tip": "Pasa el número al otro lado cambiando de signo.",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_002",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 1,
    "pregunta": "¿Cuál es el resultado de simplificar la expresión (x² − 9) / (x − 3)?",
    "opciones": [
      "x − 3",
      "x + 3",
      "x² + 3",
      "x − 9"
    ],
    "correcta": 1,
    "explicacion": "La expresión (x² − 9) / (x − 3) se puede simplificar utilizando la diferencia de cuadrados.",
    "explicacion_correcta": "(x² − 9) es una diferencia de cuadrados, que se factoriza como (x + 3)(x - 3). Al dividir esto por (x - 3), cancelamos el término común y obtenemos x + 3.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La opción A, x − 3, es un factor del numerador pero no es la simplificación final.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C, x² + 3, no tiene ninguna relación con el numerador o denominador de la expresión original.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D, x − 9, es simplemente una diferencia entre dos términos y no se relaciona con la simplificación de la expresión dada.\"}]",
    "tip": "Busca si el numerador factoriza con el denominador.",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_003",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Las raíces de la ecuación x² − 5x + 6 = 0 son:",
    "opciones": [
      "x = 1 y x = 6",
      "x = 2 y x = 3",
      "x = −2 y x = −3",
      "x = −1 y x = 6"
    ],
    "correcta": 1,
    "explicacion": "La ecuación cuadrática dada es x² - 5x + 6 = 0. Para encontrar las raíces, se puede factorizar la expresión.",
    "explicacion_correcta": "Factorizando la ecuación, obtenemos (x - 2)(x - 3) = 0. Por lo tanto, las raíces son x = 2 y x = 3.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La opción A sugiere que las raíces son x = 1 y x = 6, pero estas no satisfacen la ecuación original.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C indica que las raíces son x = -2 y x = -3, lo cual también no es correcto para esta ecuación.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D propone que las raíces son x = -1 y x = 6, pero estas no son soluciones de la ecuación dada.\"}]",
    "tip": "Busca dos números que multiplicados den el término independiente y sumados den el coeficiente de x.",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_004",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Si f(x) = 2x² − 3x + 1, ¿cuánto es f(2)?",
    "opciones": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correcta": 2,
    "explicacion": "La pregunta pide evaluar la función f(x) = 2x² − 3x + 1 en x = 2.",
    "explicacion_correcta": "Para f(2), reemplazamos x por 2: f(2) = 2(2)² − 3(2) + 1 = 8 − 6 + 1 = 3. La respuesta correcta es C (indice 2).",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"Porque al reemplazar x por 2, el resultado no es 1.\"}, {\"opcion\": \"B\", \"razon\": \"Porque al reemplazar x por 2, el resultado no es 2.\"}, {\"opcion\": \"D\", \"razon\": \"Porque al reemplazar x por 2, el resultado no es 4.\"}]",
    "tip": "Sustituye x = 2 en cada término y opera de izquierda a derecha.",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_005",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 3,
    "pregunta": "El discriminante de ax² + bx + c = 0 es b² − 4ac. Si el discriminante es negativo, la ecuación tiene:",
    "opciones": [
      "Dos raíces reales distintas",
      "Una raíz real doble",
      "No tiene raíces reales",
      "Infinitas soluciones"
    ],
    "correcta": 2,
    "explicacion": "El discriminante de una ecuación cuadrática nos indica el tipo de raíces que tiene la ecuación.",
    "explicacion_correcta": "Si el discriminante (b² − 4ac) es negativo, significa que la ecuación no tiene soluciones reales. Esto se debe a que la raíz cuadrada de un número negativo no existe en el conjunto de los números reales.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La opción A sugiere dos raíces reales distintas, lo cual es incorrecto porque el discriminante negativo implica que las raíces son complejas.\"}, {\"opcion\": \"B\", \"razon\": \"La opción B indica una raíz real doble, pero un discriminante negativo no puede tener una raíz doble en los números reales.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere infinitas soluciones, lo cual es incorrecto porque solo las ecuaciones lineales pueden tener infinitas soluciones. Las ecuaciones cuadráticas tienen a lo sumo dos soluciones.\"}]",
    "tip": "Discriminante: positivo→2 raíces, cero→1 raíz doble, negativo→sin raíces reales.",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_006",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 1,
    "pregunta": "¿Cuál es el 35% de 200?",
    "opciones": [
      "60",
      "65",
      "70",
      "75"
    ],
    "correcta": 2,
    "explicacion": "La pregunta solicita calcular el 35% de 200, lo cual implica multiplicar 200 por 0.35.",
    "explicacion_correcta": "Para encontrar el 35% de 200, se realiza la operación: 200 * 0.35 = 70. Por lo tanto, la respuesta correcta es C) 70.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La opción A (60) no es el resultado de multiplicar 200 por 0.35.\"}, {\"opcion\": \"B\", \"razon\": \"La opción B (65) tampoco es el producto correcto de 200 y 0.35.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (75) no coincide con la operación solicitada, ya que 200 * 0.375 = 75, pero esto no es lo pedido en la pregunta.\"}]",
    "tip": "Para calcular un porcentaje: divide entre 100 y multiplica.",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_007",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 1,
    "pregunta": "¿Cuál es el mínimo común múltiplo (MCM) de 4 y 6?",
    "opciones": [
      "8",
      "10",
      "12",
      "24"
    ],
    "correcta": 2,
    "explicacion": "El MCM es el menor número que es múltiplo de dos o más números.",
    "explicacion_correcta": "4 = 2^2 y 6 = 2 * 3. El MCM incluye todas las potencias primas de ambos números, lo que da 2^2 * 3 = 12.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"8 no es múltiplo de 6.\"}, {\"opcion\": \"B\", \"razon\": \"10 no es múltiplo de ni 4 ni 6.\"}, {\"opcion\": \"D\", \"razon\": \"24 es múltiplo de ambos, pero no el menor común múltiplo.\"}]",
    "tip": "El MCM es el número más pequeño divisible entre ambos.",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_008",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Si en una bolsa hay 3 bolas rojas, 5 azules y 2 verdes, ¿cuál es la probabilidad de sacar una bola azul?",
    "opciones": [
      "1/2",
      "1/3",
      "1/5",
      "3/10"
    ],
    "correcta": 0,
    "explicacion": "La probabilidad de sacar una bola azul se calcula dividiendo el número de bolas azules entre el total de bolas.",
    "explicacion_correcta": "El total de bolas es 3 rojas + 5 azules + 2 verdes = 10 bolas. La probabilidad de sacar una bola azul es 5/10 = 1/2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere 1/3, pero el cálculo correcto es 5/10.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C sugiere 1/5, pero el cálculo correcto es 5/10.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere 3/10, pero el cálculo correcto es 5/10.\"}]",
    "tip": "Probabilidad = casos favorables / casos totales.",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_009",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Un artículo cuesta $450 con un descuento del 20%. ¿Cuánto se paga?",
    "opciones": [
      "$310",
      "$340",
      "$360",
      "$390"
    ],
    "correcta": 2,
    "explicacion": "La pregunta solicita calcular el precio final de un artículo después de aplicar un descuento del 20%",
    "explicacion_correcta": "El precio original es $450. Un descuento del 20% se calcula como 0.20 * $450 = $90. El precio final es $450 - $90 = $360.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"El descuento es del 20%, no del 10%. $450 * 0.10 = $45, lo que da un precio final de $405.\"}, {\"opcion\": \"B\", \"razon\": \"El descuento es del 20%, no del 30%. $450 * 0.30 = $135, lo que da un precio final de $315.\"}, {\"opcion\": \"D\", \"razon\": \"El descuento es del 20%, no del 40%. $450 * 0.40 = $180, lo que da un precio final de $270.\"}]",
    "tip": "Calcula primero el descuento y réstalo al precio original.",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_010",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente de la recta que pasa por los puntos (2, 3) y (4, 7)?",
    "opciones": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correcta": 1,
    "explicacion": "La pendiente de una recta que pasa por dos puntos (x1, y1) y (x2, y2) se calcula como (y2 - y1) / (x2 - x1). En este caso, la pendiente es (7 - 3) / (4 - 2) = 4 / 2 = 2.",
    "explicacion_correcta": "La fórmula para calcular la pendiente de una recta que pasa por dos puntos es m = (y2 - y1) / (x2 - x1). Aplicando esta fórmula a los puntos (2, 3) y (4, 7), obtenemos m = (7 - 3) / (4 - 2) = 4 / 2 = 2. Por lo tanto, la pendiente de la recta es 2.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La opción A sugiere una pendiente de 1, pero el cálculo muestra que la pendiente es 2.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C sugiere una pendiente de 3, lo cual no coincide con el resultado del cálculo realizado.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere una pendiente de 4, pero este valor es incorrecto ya que la pendiente real es 2.\"}]",
    "tip": "Pendiente = diferencia de y's / diferencia de x's.",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_011",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia entre los puntos A(1, 2) y B(4, 6)?",
    "opciones": [
      "3",
      "4",
      "5",
      "7"
    ],
    "correcta": 2,
    "explicacion": "La pregunta pide calcular la distancia entre dos puntos en el plano cartesiano.",
    "explicacion_correcta": "Para calcular la distancia entre los puntos A(1, 2) y B(4, 6), usamos la fórmula de distancia: d = √[(x2 - x1)^2 + (y2 - y1)^2]. Sustituyendo los valores, obtenemos d = √[(4 - 1)^2 + (6 - 2)^2] = √[3^2 + 4^2] = √[9 + 16] = √25 = 5. La respuesta correcta es C.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La opción A (3) no es la distancia entre los puntos A y B.\"}, {\"opcion\": \"B\", \"razon\": \"La opción B (4) no representa la distancia entre los puntos A y B.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (7) no es el resultado correcto de aplicar la fórmula de distancia a estos puntos.\"}]",
    "tip": "Usa el teorema de Pitágoras: d = √(Δx² + Δy²).",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_012",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 3,
    "pregunta": "La ecuación x² + y² = 25 representa:",
    "opciones": [
      "Una parábola con vértice en el origen",
      "Una elipse centrada en el origen",
      "Una circunferencia de radio 5 centrada en el origen",
      "Una hipérbola centrada en el origen"
    ],
    "correcta": 2,
    "explicacion": "La ecuación x² + y² = 25 es una ecuación de circunferencia centrada en el origen con radio 5.",
    "explicacion_correcta": "La ecuación está en la forma general de una circunferencia (x - h)² + (y - k)² = r², donde (h, k) es el centro y r es el radio. En este caso, h = 0, k = 0, y r = √25 = 5.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La ecuación de una parábola es ax² + by² = 2c, que no coincide con x² + y².\"}, {\"opcion\": \"B\", \"razon\": \"La ecuación de una elipse es (x²/a²) + (y²/b²) = 1, que no coincide con x² + y².\"}, {\"opcion\": \"D\", \"razon\": \"La ecuación de una hipérbola es (x²/a²) - (y²/b²) = 1 o -(x²/a²) + (y²/b²) = 1, que no coincide con x² + y².\"}]",
    "tip": "Circunferencia centrada en origen: x² + y² = r²",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_013",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 1,
    "pregunta": "En un triángulo rectángulo, si el ángulo A = 30° y la hipotenusa = 10, ¿cuánto mide el cateto opuesto a A?",
    "opciones": [
      "5",
      "5√3",
      "√3/2",
      "10√3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a un triángulo rectángulo con un ángulo de 30° y una hipotenusa de 10 unidades. El cateto opuesto a un ángulo de 30° en un triángulo rectángulo es la mitad de la hipotenusa.",
    "explicacion_correcta": "En un triángulo rectángulo, el cateto opuesto al ángulo de 30° es igual a la mitad de la hipotenusa. Dado que la hipotenusa es 10, el cateto opuesto mide 10/2 = 5 unidades.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere un valor mucho mayor (5√3), lo cual no corresponde a la relación de lados en un triángulo rectángulo con ángulo de 30°.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C presenta una fracción que no es el doble de la hipotenusa, lo que desestima la relación de 1:2 para los catetos en un triángulo rectángulo con ángulo de 30°.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere un valor muy grande (10√3), lo cual no es el doble de la hipotenusa y desestima la relación de 1:2 para los catetos en un triángulo rectángulo con ángulo de 30°.\"}]",
    "tip": "SOH-CAH-TOA: Seno = Opuesto/Hipotenusa.",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_014",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes identidades trigonométricas es correcta?",
    "opciones": [
      "sen²θ − cos²θ = 1",
      "sen²θ + cos²θ = 1",
      "tan²θ + 1 = sen²θ",
      "cos²θ − sen²θ = 1"
    ],
    "correcta": 1,
    "explicacion": "La pregunta evalúa conocimientos básicos de identidades trigonométricas fundamentales.",
    "explicacion_correcta": "La identidad correcta es B) sen²θ + cos²θ = 1. Esta es la fórmula fundamental del teorema de Pitágoras aplicado a un triángulo rectángulo, donde senθ y cosθ son las razones trigonométricas de los catetos con respecto al hipotenusa.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"Esta identidad es incorrecta porque no cumple la fórmula del teorema de Pitágoras.\"}, {\"opcion\": \"C\", \"razon\": \"Esta identidad es incorrecta porque relaciona tan²θ con sen²θ, pero no es una identidad fundamental trigonométrica.\"}, {\"opcion\": \"D\", \"razon\": \"Esta identidad es incorrecta porque no cumple la fórmula del teorema de Pitágoras y además mezcla términos de seno y coseno de formas incorrectas.\"}]",
    "tip": "Esta identidad se llama 'identidad pitagórica'. ¡Memorízala!",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_015",
    "materia": "matematicas",
    "tema": "probabilidad",
    "dificultad": 2,
    "pregunta": "Se lanza un dado de 6 caras. ¿Cuál es la probabilidad de obtener un número par?",
    "opciones": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correcta": 2,
    "explicacion": "La probabilidad de obtener un número par al lanzar un dado es la cantidad de resultados deseados (números pares) dividida por el total de posibles resultados.",
    "explicacion_correcta": "Un dado tiene 6 caras con los números 1, 2, 3, 4, 5 y 6. Los números pares son 2, 4 y 6, lo que da 3 resultados deseados. El total de posibles resultados es 6. Por lo tanto, la probabilidad es 3/6 = 1/2.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La opción A sugiere una probabilidad del 1/6, pero solo hay un número par (2) en el dado.\"}, {\"opcion\": \"B\", \"razon\": \"La opción B sugiere una probabilidad del 1/3, pero hay tres números pares en el dado.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere una probabilidad del 2/3, lo que sería correcta si los eventos fueran independientes, pero aquí estamos considerando un solo lanzamiento de un dado.\"}]",
    "tip": "Siempre cuenta los casos favorables y divídelos entre el total.",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_016",
    "materia": "matematicas",
    "tema": "probabilidad",
    "dificultad": 3,
    "pregunta": "En una baraja de 52 cartas, ¿cuál es la probabilidad de sacar un As o un Rey?",
    "opciones": [
      "1/13",
      "2/13",
      "1/52",
      "4/52"
    ],
    "correcta": 1,
    "explicacion": "La pregunta busca calcular la probabilidad de sacar un As o un Rey en una baraja estándar de 52 cartas.",
    "explicacion_correcta": "Para resolver esto, primero identificamos los eventos favorables: hay 4 Aces y 4 Reys en una baraja de 52 cartas. La probabilidad es la suma de estos eventos dividida por el total de posibilidades. Por lo tanto, (4 + 4) / 52 = 8 / 52 = 2 / 13.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La probabilidad no es 1/13 porque hay más de un evento favorable.\"}, {\"opcion\": \"C\", \"razon\": \"La probabilidad no es 1/52 porque estamos considerando dos eventos favorables, no uno.\"}, {\"opcion\": \"D\", \"razon\": \"La probabilidad no es 4/52 porque solo estamos considerando un evento favorable (los Aces), no ambos eventos favorables.\"}]",
    "tip": "Cuando son eventos mutuamente excluyentes: P(A o B) = P(A) + P(B).",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina los valores de A, B, C, D y E que cumplen con la siguiente operación:",
    "opciones": [
      "A = 1, B = 2, C = 3, D = 4, E = 5",
      "47 270 B) 32 270 C) 56 270 D) 12 270",
      "a = 3, b = 10, c = 15, d = 11, e = 1",
      "a = 3, b = 15, c = 1, d = 4, e = 6"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta está incompleta y el texto es confuso. No hay información sobre qué operación específica se debe realizar ni cuáles son los valores correctos de A, B, C, D y E.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no tiene sentido para analizar opciones.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta no tiene sentido para analizar opciones.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta no tiene sentido para analizar opciones.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuáles son los valores que cumplen con lo siguiente?",
    "opciones": [
      "a = 4, b = 9, c = 9, d = 2, e = 1",
      "a = 4, b = 10, c = 5, d = 3, e = 2",
      "7777777707",
      "5555555505"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene opciones que no corresponden al tema de matemáticas.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No es una opción válida para la pregunta.\"}, {\"opcion\": \"C\", \"razon\": \"No es una opción válida para la pregunta.\"}, {\"opcion\": \"D\", \"razon\": \"No es una opción válida para la pregunta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_8",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Observa las siguientes operaciones:",
    "opciones": [
      "8888888808",
      "9999999909",
      "100 000 + 10 000 + 1 000 = 111 000",
      "10 000 + 1 000 + 10 = 11 010"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta operaciones matemáticas que requieren una comprensión de la adición y el valor numérico.",
    "explicacion_correcta": "A) 8888888808 es correcto porque es el resultado de sumar 10^9 - 2. B) 9999999909 es incorrecto porque es 1 más que el valor correcto. C) 100 000 + 10 000 + 1 000 = 111 000 es incorrecto porque no se está sumando correctamente los números. D) 10 000 + 1 000 + 10 = 11 010 es incorrecto porque la suma no coincide con el valor correcto.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque el resultado es 1 más que el valor correcto\"}, {\"opcion\": \"C\", \"razon\": \"Porque la adición de los números no se realiza correctamente\"}, {\"opcion\": \"D\", \"razon\": \"Porque la suma no coincide con el valor esperado\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_11",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "De cuántas formas se pueden acomodar los números: 1, 1, 2, 2, 3, 3 de tal manera que entre los números 1",
    "opciones": [
      "5 2 8",
      "5 9 2",
      "3 9 8",
      "3 9 1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido y las opciones están incompletas o erróneas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y no se puede evaluar.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C está incompleta y no se puede evaluar.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D está incompleta y no se puede evaluar.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina la figura que cumple lo siguiente:",
    "opciones": [
      "5 2 8",
      "5 9 2",
      "3 9 8",
      "3 9 1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido y las opciones están incompletas o incorrectas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y no se puede evaluar.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C está incompleta y no se puede evaluar.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D está incompleta y no se puede evaluar.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Se tienen 14 litros de pintura repartida en cada estante de los botes tipo A, B y C.",
    "opciones": [
      "Tipo A: 6 litros",
      "Tipo A: 5 litros",
      "Tipo A: 4 litros",
      "Tipo A: 4.2 litros"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es ambigua porque no especifica cuántos botes de cada tipo hay.",
    "explicacion_correcta": "No se puede determinar la cantidad exacta de pintura en los botes A, B y C sin información adicional sobre el número de botes de cada tipo. La pregunta carece de datos suficientes para resolver el problema.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona la cantidad exacta de pintura en los botes A, B y C.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta no proporciona la cantidad exacta de pintura en los botes A, B y C.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta no proporciona la cantidad exacta de pintura en los botes A, B y C.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_15",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Se reúnen 5 personas, si todas se saludaran de mano entre sí, ¿cuántos saludos diferentes darían?",
    "opciones": [
      "Que Juan le dé $10.00 a Octavio",
      "Que Octavio le dé $20.00 a Juan",
      "Que Fernando y Juan le den $10.00 cada uno a Octavio",
      "Que Roberto le dé $30.00 y Octavio, $20.00 a Fernando"
    ],
    "correcta": 0,
    "explicacion": "La pregunta contiene opciones que no son relevantes para el tema de matemáticas y cálculos combinatorios, sino transacciones monetarias. No se puede determinar cuántos saludos diferentes darían las...",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No es relevante para el cálculo de saludos entre personas.\"}, {\"opcion\": \"C\", \"razon\": \"No se trata de transacciones monetarias, sino de intercambios sociales.\"}, {\"opcion\": \"D\", \"razon\": \"Las opciones son financieras y no relacionadas con los saludos entre las personas.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_16",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Pedro tiene $1 000.00 y se sabe que Rosa tiene 5 veces lo de Juan y Juan tiene el doble de Pedro, ¿cuánto",
    "opciones": [
      "Que Juan le dé $10.00 a Octavio",
      "Que Octavio le dé $20.00 a Juan",
      "Que Fernando y Juan le den $10.00 cada uno a Octavio",
      "Que Roberto le dé $30.00 y Octavio, $20.00 a Fernando"
    ],
    "correcta": 0,
    "explicacion": "La pregunta contiene errores en el enunciado y las opciones, lo que hace que no pueda ser respondida de manera precisa.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no menciona a Octavio ni sus acciones.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no menciona a Fernando ni sus acciones.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no menciona a Roberto ni sus acciones.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Roberto le debe $90.00 a Octavio, Octavio le debe $70.00 a Fernando, Fernando le debe $80.00 a Juan y",
    "opciones": [
      "Que Juan le dé $10.00 a Octavio",
      "Que Octavio le dé $20.00 a Juan",
      "Que Fernando y Juan le den $10.00 cada uno a Octavio",
      "Que Roberto le dé $30.00 y Octavio, $20.00 a Fernando"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un ciclo de deudas entre cuatro personas, y se pide una solución que balancee las deudas de manera equitativa.",
    "explicacion_correcta": "La opción A es correcta porque si Juan le da $10.00 a Octavio, el ciclo de deudas se cierra completamente: Roberto le debe $90.00 a Octavio, pero ahora Octavio tiene un crédito de $10.00 con Juan, que puede pagarle a Roberto lo que le falta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Esta opción no balancea las deudas de manera equitativa y solo cambia el flujo monetario entre Octavio y Juan.\"}, {\"opcion\": \"C\", \"razon\": \"Aunque reduce la deuda total, no cierra completamente el ciclo de deudas entre Roberto, Octavio y Fernando.\"}, {\"opcion\": \"D\", \"razon\": \"Esta opción introduce un nuevo elemento (Roberto) que no estaba en el problema original y no resuelve eficazmente las deudas existentes.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_18",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Cuáles son los divisores en común de los números 24, 18 y 30?",
    "opciones": [
      "1, 2, 3, 4 y 6 B) 1, 3, 5 y 6 C) 1, 2, 5 y 10 D) 1, 2, 3 y 6",
      "150 B) 200 C) 360 D) 420",
      "450 B) 900 C) 720 D) 800",
      "48 B) 64 C) 72 D) 81"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita los divisores en común de tres números: 24, 18 y 30.",
    "explicacion_correcta": "Para encontrar los divisores comunes, primero listamos los divisores de cada número:\n- Divisores de 24: 1, 2, 3, 4, 6, 8, 12, 24\n- Divisores de 18: 1, 2, 3, 6, 9, 18\n- Divisores de 30: 1, 2, 3, 5, 6, 10, 15, 30\nLos divisores comunes son los que aparecen en todas las listas, lo que son 1, 2, 3 y 6.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no contiene ningún número.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene números que no son divisores de ninguno de los tres números.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D contiene números que no son divisores de ninguno de los tres números.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_19",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "El mcm de 12, 8 y 45, es:",
    "opciones": [
      "1 B) 3 C) 5 D) 7",
      "6 B) 5 C) 4 D) 3",
      "180",
      "75"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y las opciones son incorrectas.",
    "explicacion_correcta": "No se puede determinar el MCM debido a la falta de información en la pregunta. Las opciones no corresponden al problema planteado.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está repetida y no tiene sentido en este contexto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C es un número que no relaciona con los números dados en la pregunta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D también es un número aleatorio que no se relaciona con el problema planteado.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_20",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "El mcm de 9, 20, y 75, es:",
    "opciones": [
      "1 B) 3 C) 5 D) 7",
      "6 B) 5 C) 4 D) 3",
      "180",
      "75"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones incorrectas y el enunciado está incompleto, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque las opciones B, C y D son incorrectas debido a la falta de información en el enunciado.\"}, {\"opcion\": \"C\", \"razon\": \"Porque las opciones B, C y D son incorrectas debido a la falta de información en el enunciado.\"}, {\"opcion\": \"D\", \"razon\": \"Porque las opciones B, C y D son incorrectas debido a la falta de información en el enunciado.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_21",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Cuál es el mcm de 24, 36 y 12?",
    "opciones": [
      "1 B) 3 C) 5 D) 7",
      "6 B) 5 C) 4 D) 3",
      "180",
      "75"
    ],
    "correcta": 0,
    "explicacion": "La pregunta contiene opciones incorrectas y el texto parece estar corrupto o incompleto.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la confusión en las opciones y el enunciado de la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que no es una opción válida\"}, {\"opcion\": \"C\", \"razon\": \"Por que no es una opción válida\"}, {\"opcion\": \"D\", \"razon\": \"Por que no es una opción válida\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_22",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¡Cuál es el MCD de 40, 28 y 63?",
    "opciones": [
      "1 B) 3 C) 5 D) 7",
      "6 B) 5 C) 4 D) 3",
      "180",
      "75"
    ],
    "correcta": 0,
    "explicacion": "El MCD (Máximo Común Divisor) es el número más grande que divide a todos los números dados sin dejar residuo.",
    "explicacion_correcta": "Para encontrar el MCD de 40, 28 y 63, primero descomponemos cada número en sus factores primos: 40 = 2^3 * 5, 28 = 2^2 * 7, 63 = 3^2 * 7. El MCD es el producto de las potencias más bajas de los factores comunes, que en este caso son solo los 1s (ya que no hay factores primos comunes entre todos los números). Por lo tanto, el MCD es 1.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"28 y 63 tienen como factor común al 7, pero 40 no lo tiene.\"}, {\"opcion\": \"C\", \"razon\": \"5 es un factor de 40, pero no de 28 ni de 63.\"}, {\"opcion\": \"D\", \"razon\": \"7 es un factor de 28 y 63, pero no de 40.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_30",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de",
    "opciones": [
      "4",
      "4",
      "8",
      "6 B) 5 C) 4 D) 2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y las opciones son incompletas.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la falta de información en la pregunta y las opciones.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"Análogo al anterior, la pregunta carece de datos necesarios.\"}, {\"opcion\": \"D\", \"razon\": \"Igualmente, la pregunta no ofrece los elementos necesarios para determinar si esta opción es correcta o incorrecta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_32",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes operaciones NO es igual al resto?",
    "opciones": [
      "4",
      "4",
      "8",
      "6 B) 5 C) 4 D) 2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta contiene errores y no es clara. Las opciones están incompletas y hay simbolos raros que hacen que el enunciado sea ininteligible.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta está corrupta, por lo tanto, no puedo analizar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta está corrupta, por lo tanto, no puedo analizar esta opción.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta está corrupta, por lo tanto, no puedo analizar esta opción.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_42",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El partido A tiene 330 votos que representa los",
    "opciones": [
      "Conejo",
      "Conejo",
      "Conejo",
      "Conejo"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_43",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un conejo come la misma cantidad de zanahorias en un año que un burro en 2 días, lo que come un burro",
    "opciones": [
      "Conejo",
      "Conejo",
      "Conejo",
      "Conejo"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es corrupta y no se entiende completamente.",
    "explicacion_correcta": "La pregunta mezcla conceptos de diferentes temas (zanahorias, conejos, burros) sin proporcionar información suficiente para determinar cuál come más. No hay datos numéricos ni comparaciones claras entre los animales mencionados.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no compara directamente la cantidad de zanahorias comidas por cada animal.\"}, {\"opcion\": \"C\", \"razon\": \"No hay información sobre las cantidades específicas de zanahorias que cada animal come.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta no proporciona contexto suficiente para determinar cuál animal come más zanahorias.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_57",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si la plancha se ha descompuesto, ¿qué cantidad total en efectivo pagará por mes?",
    "opciones": [
      "70 B) 71 C) 72 D) 73",
      "524 B) 425 C) 257 D) 752",
      "2an + 1 B) an + 3 C)",
      "– 1, – 4, – 2, – 5, – 3  C) 4, 2, 5, 3, 6"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. Las opciones no corresponden al enunciado dado.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_58",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encuentra el término que falta.",
    "opciones": [
      "70 B) 71 C) 72 D) 73",
      "524 B) 425 C) 257 D) 752",
      "2an + 1 B) an + 3 C)",
      "– 1, – 4, – 2, – 5, – 3  C) 4, 2, 5, 3, 6"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones incompletas y el enunciado está corrupto, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la opción B no tiene sentido en el contexto de la pregunta.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la opción C presenta un formato incorrecto y incompleto.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la opción D contiene una secuencia numérica que no parece seguir ninguna lógica coherente con el resto de las opciones o el enunciado de la pregunta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_59",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La sucesión 4, 7, 11, 14,…, 211 se conforma, ¿de cuántos elementos?",
    "opciones": [
      "70 B) 71 C) 72 D) 73",
      "524 B) 425 C) 257 D) 752",
      "2an + 1 B) an + 3 C)",
      "– 1, – 4, – 2, – 5, – 3  C) 4, 2, 5, 3, 6"
    ],
    "correcta": 0,
    "explicacion": "La sucesión es aritmética con un término inicial de 4 y una diferencia constante de 3.",
    "explicacion_correcta": "Para encontrar el número de términos, usamos la fórmula del término general de una sucesión aritmética: an = a1 + (n-1)d. Donde an es el último término, a1 es el primer término, n es el número de términos y d es la diferencia constante. Sustituyendo los valores: 211 = 4 + (n-1)3. Resolviendo esta ecuación nos da n = 70.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no es el resultado de la fórmula aplicada.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C no es el resultado de la fórmula aplicada.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D no es una sucesión aritmética y por lo tanto, no puede ser correcta en este contexto.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_63",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué cifra rompe con la regularidad?",
    "opciones": [
      "296 B) 299 C) 302 D) 305",
      "602 B) 605 C) 600 D) 609",
      "180 B) 150 C) 240 D) 210",
      "8 B) 6 C) 5 D) 3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. Las opciones están repetidas y hay símbolos raros como 'B'.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Por que es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Por que es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_64",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuántas canicas hay en el lugar 100?",
    "opciones": [
      "296 B) 299 C) 302 D) 305",
      "602 B) 605 C) 600 D) 609",
      "180 B) 150 C) 240 D) 210",
      "8 B) 6 C) 5 D) 3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. Las opciones están repetidas y hay errores en el texto.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Por que es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Por que es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_65",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "De acuerdo con las siguientes figuras, ¿cuántos picos tendrá la figura 100?",
    "opciones": [
      "296 B) 299 C) 302 D) 305",
      "602 B) 605 C) 600 D) 609",
      "180 B) 150 C) 240 D) 210",
      "8 B) 6 C) 5 D) 3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones incompletas y texto corrupto, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_72",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Se desea completar un cubo utilizando la siguiente figura:",
    "opciones": [
      "Todos los cubos tienen al menos una cara pintada",
      "Todos los cubos tienen a lo más 2 caras pintadas",
      "Todos los cubos tienen al menos 2 caras pintadas",
      "Todos los cubos tienen a lo más 3 caras pintadas"
    ],
    "correcta": 0,
    "explicacion": "La pregunta no proporciona una figura o contexto para determinar cuántas caras de un cubo pueden estar pintadas.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No se puede determinar si todas las caras pueden estar pintadas.\"}, {\"opcion\": \"C\", \"razon\": \"No se puede determinar si al menos dos caras deben estar pintadas.\"}, {\"opcion\": \"D\", \"razon\": \"No se puede determinar si a lo más tres caras pueden estar pintadas.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_73",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El siguiente cuerpo geométrico está formado por cubos. Si todas las caras se pintan de color rojo, ¿cuáles",
    "opciones": [
      "Todos los cubos tienen al menos una cara pintada",
      "Todos los cubos tienen a lo más 2 caras pintadas",
      "Todos los cubos tienen al menos 2 caras pintadas",
      "Todos los cubos tienen a lo más 3 caras pintadas"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a un cuerpo geométrico formado por cubos y pide determinar cuántas caras de estos cubos tienen al menos una cara pintada.",
    "explicacion_correcta": "Si todas las caras del cuerpo geométrico están pintadas, entonces todos los cubos que componen el cuerpo tendrán al menos una cara pintada. Por lo tanto, la opción correcta es A) Todos los cubos tienen al menos una cara pintada.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Esta opción sugiere que todos los cubos tienen a lo más 2 caras pintadas, lo cual no es cierto si todas las caras del cuerpo están pintadas.\"}, {\"opcion\": \"C\", \"razon\": \"Indica que todos los cubos tienen al menos 2 caras pintadas, pero esto no es correcto porque incluso los cubos en el interior solo tendrán una cara pintada.\"}, {\"opcion\": \"D\", \"razon\": \"Sugiere que todos los cubos tienen a lo más 3 caras pintadas, lo cual también no es cierto si todas las caras del cuerpo están pintadas.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_77",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Se tienen 2 engranes, 1 de 35 dientes y otro de 20. Si el segundo da 14 vueltas, ¿cuántas vueltas",
    "opciones": [
      "El engrane 2 gira a la izquierda",
      "El engrane 3 gira a la derecha",
      "El engrane 4 gira a la izquierda",
      "El engrane 5 gira a la izquierda"
    ],
    "correcta": 0,
    "explicacion": "Las relaciones entre los engranes se determinan por su número de dientes y la dirección de giro.",
    "explicacion_correcta": "El engrane con más dientes (35) girará a menor velocidad que el engrane con menos dientes (20). Como el segundo engrane da 14 vueltas, el primero, con mayor número de dientes, girará en sentido contrario.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con la relación entre los engranes.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C no tiene sentido en el contexto de este problema.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D no se refiere a ninguna acción o dirección específica del engrane 2.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_78",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En la siguiente figura, el engrane 1 gira a la derecha, ¿cuál de las siguientes afirmaciones es correcta?",
    "opciones": [
      "El engrane 2 gira a la izquierda",
      "El engrane 3 gira a la derecha",
      "El engrane 4 gira a la izquierda",
      "El engrane 5 gira a la izquierda"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es coherente\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_79",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El motor M gira a la derecha como se muestra.",
    "opciones": [
      "1 gira a la izquierda, 2 gira a la derecha, 3 gira a la izquierda, 4 gira a la derecha",
      "1 gira a la derecha, 2 gira a la derecha, 3 gira a la izquierda, 4 gira a la izquierda",
      "1 gira a la izquierda, 2 gira a la izquierda, 3 gira a la derecha, 4 gira a la izquierda",
      "1 gira a la derecha, 2 gira a la izquierda, 3 gira a la derecha, 4 gira a la izquierda"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión y evaluación.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_84",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encuentra el valor numérico de (2a – b) + 3b, si a = 1, b = 2",
    "opciones": [
      "8",
      "3",
      "4",
      "16c – 4d – 12   C) 16c + 4d – 8"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita el valor numérico de la expresión (2a – b) + 3b, sustituyendo a = 1 y b = 2.",
    "explicacion_correcta": "Primero simplificamos la expresión: (2a - b) + 3b = 2a + 2b. Luego, sustituimos los valores de a y b: 2(1) + 2(2) = 2 + 4 = 6.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (3) no es el resultado del cálculo realizado.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (16c + 4d – 8) contiene variables que no están presentes en la expresión original.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (16c – 4d – 12) también contiene variables extra y operaciones incorrectas para la expresión dada.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_85",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina el valor numérico de",
    "opciones": [
      "8",
      "3",
      "4",
      "16c – 4d – 12   C) 16c + 4d – 8"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene opciones incorrectas.",
    "explicacion_correcta": "No se puede determinar el valor numérico debido a la falta de información en la pregunta. Las opciones D y C son irrelevantes para la respuesta correcta A.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con la pregunta y es incorrecta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene términos que no están presentes en la pregunta y es incorrecta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D incluye términos inesperados y está fuera del contexto de la pregunta, por lo tanto, es incorrecta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_86",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si m = – 1, n = – 2, p = 3, el valor de – 3m2n– 3p, es:",
    "opciones": [
      "8",
      "3",
      "4",
      "16c – 4d – 12   C) 16c + 4d – 8"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es clara y contiene solo opciones de matemáticas.",
    "explicacion_correcta": "Primero, reemplazamos los valores de m, n y p en la expresión -3m^2n - 3p. Esto nos da -3(-1)^2(-2) - 3(3). Luego, calculamos (-1)^2 = 1, por lo que la expresión se convierte en -3(1)(-2) - 9 = 6 - 9 = -3.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no es el resultado de la evaluación correcta de la expresión.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene variables que no están definidas en la pregunta, lo que hace que sea incorrecta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D incluye términos extra y operaciones que no son parte de la expresión original, por lo que es incorrecta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_87",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si x 1 = – 2, r = – 1, el valor de",
    "opciones": [
      "13c + 5d – 8   D) 13c – 5d – 12",
      "x5 + 2x4 + x2 + 7x  C) x5 + 2x4 + x2 + 7x – 4",
      "x5 + 2x4 – x2 + 7x + 4  D) x5 + 2x4 – x2 + 4",
      "xy2 – 2xy – 9x + y  C) – xy2 + 4xy – 5x + y"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta errores en el texto y opciones, lo que dificulta su comprensión.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la confusión en el texto y las opciones proporcionadas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque contiene errores tipográficos y no es coherente con el resto de las opciones.\"}, {\"opcion\": \"C\", \"razon\": \"Porque presenta un error en la fórmula matemática que dificulta su comprensión.\"}, {\"opcion\": \"D\", \"razon\": \"Porque tiene una estructura incorrecta y no se relaciona con el resto de las opciones.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_88",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si 3x + 4y =",
    "opciones": [
      "13c + 5d – 8   D) 13c – 5d – 12",
      "x5 + 2x4 + x2 + 7x  C) x5 + 2x4 + x2 + 7x – 4",
      "x5 + 2x4 – x2 + 7x + 4  D) x5 + 2x4 – x2 + 4",
      "xy2 – 2xy – 9x + y  C) – xy2 + 4xy – 5x + y"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores en las opciones, lo que dificulta su comprensión y evaluación.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque no se puede determinar si es correcta debido a la incomplejidad de las opciones\"}, {\"opcion\": \"C\", \"razon\": \"Porque no se puede evaluar su veracidad por falta de información\"}, {\"opcion\": \"D\", \"razon\": \"Porque las operaciones matemáticas presentadas son incorrectas\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_89",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica: 4c – 2d – 2 + 12c – 2d – 10",
    "opciones": [
      "13c + 5d – 8   D) 13c – 5d – 12",
      "x5 + 2x4 + x2 + 7x  C) x5 + 2x4 + x2 + 7x – 4",
      "x5 + 2x4 – x2 + 7x + 4  D) x5 + 2x4 – x2 + 4",
      "xy2 – 2xy – 9x + y  C) – xy2 + 4xy – 5x + y"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es una operación algebraica sencilla que requiere combinar términos semejantes.",
    "explicacion_correcta": "Para simplificar la expresión, primero agrupamos los términos con 'c' y los términos con 'd': (4c + 12c) + (-2d - 2d) + (-2 - 10). Luego, realizamos las operaciones: 16c - 4d - 12.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B contiene términos que no están presentes en la expresión original y tiene un error en el coeficiente de 'x5'.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C incluye términos adicionales que no existen en la expresión simplificada y tiene un error en el coeficiente de 'x2'.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D contiene variables que no están presentes en la expresión original y tiene errores en los coeficientes de las variables y el término independiente.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_90",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si P(x) = x 5 + 2x4 + 7x – 2 y Q(x) = x2 – 2, el resultado de P(x) + Q(x), es:",
    "opciones": [
      "xy2 – 2xy + 9x + 2y  D) xy2 – 4xy + 5x – y",
      "2xy + 2y – x  C) 2xy2 – 3y – x2",
      "2xy – 2y + x  D) 2x2y + 5y – 3x",
      "4x – y  B) 4x + y C) 2x – 3y D) 3x – y"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta dos polinomios y solicita su suma. El resultado debe ser otro polinomio donde se suman los coeficientes de términos con la misma potencia de x.",
    "explicacion_correcta": "P(x) + Q(x) = (x^5 + 2x^4 + 7x - 2) + (x^2 - 2) = x^5 + 2x^4 + x^2 + 7x - 4. La opción A es la única que coincide con este resultado.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no tiene términos de x^5, x^4 ni x^2, por lo que no puede ser correcta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene términos como xy^2 y -3y, que no aparecen en el polinomio resultante.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D presenta términos como 4x y -y, que también no están presentes en el resultado correcto.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_91",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de xy 2 – (3xy + 7x) + (xy – 2x) + y, es:",
    "opciones": [
      "xy2 – 2xy + 9x + 2y  D) xy2 – 4xy + 5x – y",
      "2xy + 2y – x  C) 2xy2 – 3y – x2",
      "2xy – 2y + x  D) 2x2y + 5y – 3x",
      "4x – y  B) 4x + y C) 2x – 3y D) 3x – y"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es clara y se refiere a operaciones algebraicas básicas.",
    "explicacion_correcta": "Primero, distribuimos los signos negativos en el segundo paréntesis: xy^2 - 3xy - 7x + xy - 2x + y. Luego, combinamos términos semejantes: xy^2 - 2xy - 9x + y.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene un error en la combinación de términos.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene errores en el signo y la combinación de términos.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D no tiene ninguna parte correcta del resultado final.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_95",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplificar:   xy2 – (3xy + 2x) – y – (3x – 9x + 2) + 8 + 4xy2",
    "opciones": [
      "4 8",
      "y2 + 6x – 2y + 17 = 0  C) x2 – 6x + 4y + 9 = 0",
      "y2 – 6x – 4y + 13 = 0  D) x2 – 3x + 2y – 21 = 0",
      "332 104  B)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta requiere simplificar una expresión algebraica y comparar el resultado con las opciones dadas.",
    "explicacion_correcta": "Primero, distribuimos los signos negativos dentro de los paréntesis: xy2 - 3xy - 2x - y + 3x - 9x + 2 + 8 + 4xy2. Luego, combinamos términos semejantes: (xy2 + 4xy2) + (-3xy + 3x - 9x) + (-y) + (2 + 8). Esto nos da 5xy2 - 6xy - 6x - y + 10. Comparando con las opciones, vemos que no coincide con ninguna de ellas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B es una ecuación cuadrática en lugar de una expresión algebraica simplificada.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene términos que no aparecen en la expresión simplificada, como x^2 y 4y.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D tiene términos que no se encuentran en la expresión simplificada, como x^2 y -21.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_96",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica:",
    "opciones": [
      "4 8",
      "y2 + 6x – 2y + 17 = 0  C) x2 – 6x + 4y + 9 = 0",
      "y2 – 6x – 4y + 13 = 0  D) x2 – 3x + 2y – 21 = 0",
      "332 104  B)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_100",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica",
    "opciones": [
      "2x + 6y – 4z B) 2x + 5y – 3z C) x + 3y – z D) x + 6y – 2z",
      "x5 + 6x4 – 5x2 + 3x  C) x5 + 6x4 – 2x2 – 4x",
      "x5 – 5x4 + 3x2 –2x  D) x5 – 5x4 – 4x2 + x",
      "x3 + y3  C) x3 – 3x2y + 3xy2 – y3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido y las opciones están incompletas o mezcladas con otras materias.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B contiene términos que no corresponden al tema de matemáticas.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C también contiene términos incoherentes con el tema principal.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D mezcla conceptos de álgebra y cálculo, lo que hace que la pregunta sea confusa.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_101",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Suma x 3 – x2 + 5 con 3x – 6",
    "opciones": [
      "2x + 6y – 4z B) 2x + 5y – 3z C) x + 3y – z D) x + 6y – 2z",
      "x5 + 6x4 – 5x2 + 3x  C) x5 + 6x4 – 2x2 – 4x",
      "x5 – 5x4 + 3x2 –2x  D) x5 – 5x4 – 4x2 + x",
      "x3 + y3  C) x3 – 3x2y + 3xy2 – y3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide sumar dos polinomios: x^3 - x^2 + 5 y 3x - 6. Se deben combinar términos semejantes.",
    "explicacion_correcta": "Sumamos los coeficientes de los términos semejantes: (x^3) + (-x^2) + 0x + 5 + 3x - 6 = x^3 - x^2 + 4x - 1.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene términos de grado 5, que no aparecen en la suma.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene un término x^4 y otro -2x^2, que no son semejantes a los del polinomio original.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es una suma de cubos, lo cual no se requiere en esta operación algebraica.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_102",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La simplificación de  3x + 4y – z – (x – 2y + 3z), es:",
    "opciones": [
      "2x + 6y – 4z B) 2x + 5y – 3z C) x + 3y – z D) x + 6y – 2z",
      "x5 + 6x4 – 5x2 + 3x  C) x5 + 6x4 – 2x2 – 4x",
      "x5 – 5x4 + 3x2 –2x  D) x5 – 5x4 – 4x2 + x",
      "x3 + y3  C) x3 – 3x2y + 3xy2 – y3"
    ],
    "correcta": 0,
    "explicacion": "La simplificación de una expresión algebraica implica combinar términos semejantes y aplicar las reglas de los signos.",
    "explicacion_correcta": "Primero, distribuimos el negativo en la parte que está entre paréntesis: 3x + 4y - z - x + 2y - 3z. Luego, combinamos términos semejantes: (3x - x) + (4y + 2y) + (-z - 3z) = 2x + 6y - 4z.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B contiene términos que no aparecen en la simplificación correcta, como x^5 y x^4.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene coeficientes incorrectos para los términos semejantes. Por ejemplo, el coeficiente de x^2 debería ser -2, no 3.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es una expresión algebraica que no resulta de la simplificación dada. No contiene ningún término que aparezca en la simplificación correcta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_103",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de la operación (x 5 + x4 – 3x) – (– 5x4 + 2x2 + x)",
    "opciones": [
      "x3 + x2y + 3xy2 + y3  D) x3 + 3x2y + 3xy2 + y3",
      "3x2 –",
      "9x2 –",
      "9x2 – 3x –"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta una operación algebraica básica entre dos polinomios.",
    "explicacion_correcta": "Para resolver la operación (x^5 + x^4 - 3x) - (-5x^4 + 2x^2 + x), primero distribuimos el signo negativo en el segundo paréntesis, cambiando los signos de sus términos. Luego, combinamos los términos semejantes: (x^5 + x^4 - 3x) + (5x^4 - 2x^2 - x) = x^5 + (1x^4 + 5x^4) + (-3x - x) - 2x^2 = x^5 + 6x^4 - 4x - 2x^2. Sin embargo, la opción correcta no incluye el término -2x^2, por lo que es incorrecta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B presenta términos que no aparecen en la operación original ni en la respuesta correcta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C incluye un término -3x^2, que no es parte de la operación y no está presente en ninguna de las respuestas posibles.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D presenta términos que no son correctos ni aparecen en la operación original o en la respuesta correcta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_104",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de (x + y)(x + y)(x + y), es:",
    "opciones": [
      "x3 + x2y + 3xy2 + y3  D) x3 + 3x2y + 3xy2 + y3",
      "3x2 –",
      "9x2 –",
      "9x2 – 3x –"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide simplificar el producto de tres factores binomiales (x + y). La respuesta correcta es A.",
    "explicacion_correcta": "(x + y)(x + y) = x^2 + 2xy + y^2. Multiplicando este resultado por (x + y) nuevamente: (x^2 + 2xy + y^2)(x + y) = x^3 + 3x^2y + 3xy^2 + y^3.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Falta el término x^2 en la respuesta.\"}, {\"opcion\": \"C\", \"razon\": \"La respuesta es negativa, mientras que el resultado debe ser positivo.\"}, {\"opcion\": \"D\", \"razon\": \"Falta el término y^3 en la respuesta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de",
    "opciones": [
      "6x2 –",
      "5x4y + x2y2 – 4y3 + 10x2 + 10y  C) 5x4y – x2y2 – 2y3 + 6x2 – 8y",
      "5x4y + 9x2y2 + 4y3 – 8x2 – 6y  D) 5x4y + 6x2y2 + 5y3 – 10x2 – 10y",
      "– x5y + x4y + x3y2 – x2y2 + x2y3 – y4 C) x5y – x4y + 2x3y2 – x2y2 + x2y3 + y4"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta una expresión algebraica y solicita su simplificación.",
    "explicacion_correcta": "Para simplificar la expresión, primero agrupamos los términos semejantes. Luego, sumamos o restamos sus coeficientes según sea necesario. El resultado es 6x^2 - 8y.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B contiene términos que no se pueden combinar con los de la expresión original.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene un error en el coeficiente del término -2y^3, lo cual es diferente al resultado esperado.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D contiene términos que no se pueden combinar con los de la expresión original y además tiene un error en el coeficiente del término -6y.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_110",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el residuo de",
    "opciones": [
      "9x2 – 2x + 3 B) 9x2 + 2x – 4 C) 9x2 – 2x – 4  D) 9x2 + 2x – 3",
      "3a2x – 10abx – 3b2 C) – 3a2x – 10abx – 3b2x",
      "– 3a2x – 10ab – 3b2x D) 3a2 – 10abx – 3b2x",
      "x 2  B)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido y las opciones están incompletas o incorrectas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y contiene símbolos raros.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene errores tipográficos y no es coherente con el enunciado.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D está incompleta y contiene un error de sintaxis matemática.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_111",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la expresión equivalente de 9m 2 + 48mn + 64n2?",
    "opciones": [
      "9x2 – 2x + 3 B) 9x2 + 2x – 4 C) 9x2 – 2x – 4  D) 9x2 + 2x – 3",
      "3a2x – 10abx – 3b2 C) – 3a2x – 10abx – 3b2x",
      "– 3a2x – 10ab – 3b2x D) 3a2 – 10abx – 3b2x",
      "x 2  B)"
    ],
    "correcta": 0,
    "explicacion": "La expresión dada es una suma de términos cuadráticos y lineales que se puede factorizar.",
    "explicacion_correcta": "Para factorizar la expresión 9m² + 48mn + 64n², primero identificamos los coeficientes: 9 (de m²), 48 (de mn), y 64 (de n²). La suma de estos coeficientes es 121. Luego, buscamos dos números que multiplicados den 121 y sumen 48. Estos números son 11 y 37. Por lo tanto, la expresión se puede factorizar como (3m + 8n)².",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no tiene ninguna relación con la expresión dada.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene términos que no están presentes en la expresión original.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D presenta una estructura diferente y no es equivalente a la expresión original.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_112",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica (3x – 1)2 + 8x – 4",
    "opciones": [
      "9x2 – 2x + 3 B) 9x2 + 2x – 4 C) 9x2 – 2x – 4  D) 9x2 + 2x – 3",
      "3a2x – 10abx – 3b2 C) – 3a2x – 10abx – 3b2x",
      "– 3a2x – 10ab – 3b2x D) 3a2 – 10abx – 3b2x",
      "x 2  B)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a una operación algebraica básica de simplificación de expresiones cuadráticas.",
    "explicacion_correcta": "(3x – 1)² + 8x – 4 = (9x² - 6x + 1) + 8x - 4 = 9x² + 2x - 3",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B contiene términos que no están presentes en la expresión simplificada.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene un término adicional (-3b²x) que no existe en la expresión simplificada.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D contiene términos incorrectos y está incompleta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_113",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica  x(a – b)2 – 4x(a + b)2",
    "opciones": [
      "x3 – 8 C) x3 – 6x2 + 12x – 8",
      "x3 – 6  D) x3 + 6x2 – 12x – 8",
      "(x – 3)(x2 + 3x + 9) C) (x – 3)3",
      "(x + 3)(x2 – 3x + 9) D) (x + 3)3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta requiere simplificar una expresión algebraica utilizando las propiedades de los exponentes y la distribución.",
    "explicacion_correcta": "Primero, expandimos cada término: x(a – b)² = x(a² - 2ab + b²) y -4x(a + b)² = -4x(a² + 2ab + b²). Luego, combinamos los términos semejantes.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no es una expresión algebraica simplificada.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C representa un cubo de binomio, pero la expresión dada no se reduce a este forma.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D también representa un cubo de binomio, pero con signos diferentes y coeficientes incorrectos.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_114",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La simplificación de",
    "opciones": [
      "x3 – 8 C) x3 – 6x2 + 12x – 8",
      "x3 – 6  D) x3 + 6x2 – 12x – 8",
      "(x – 3)(x2 + 3x + 9) C) (x – 3)3",
      "(x + 3)(x2 – 3x + 9) D) (x + 3)3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a la factorización de una expresión cúbica.",
    "explicacion_correcta": "Para simplificar x^3 - 8, usamos el método de diferencia de cubos: a^3 - b^3 = (a - b)(a^2 + ab + b^2). Aquí, a = x y b = 2. Entonces, x^3 - 8 = (x - 2)(x^2 + 2x + 4). Sin embargo, esta no es una de las opciones dadas. La correcta sería la forma factorizada: (x - 2)^3.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No es el resultado de la diferencia de cubos.\"}, {\"opcion\": \"C\", \"razon\": \"Es una forma incorrecta de escribir x^3 - 8.\"}, {\"opcion\": \"D\", \"razon\": \"Es una forma incorrecta de escribir x^3 + 6x^2 - 12x - 8.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_115",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el desarrollo de (x – 2) 3?",
    "opciones": [
      "x3 – 8 C) x3 – 6x2 + 12x – 8",
      "x3 – 6  D) x3 + 6x2 – 12x – 8",
      "(x – 3)(x2 + 3x + 9) C) (x – 3)3",
      "(x + 3)(x2 – 3x + 9) D) (x + 3)3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita el desarrollo de (x – 2)³, lo cual es un ejemplo clásico de la expansión de un binomio al cubo.",
    "explicacion_correcta": "Para desarrollar (x – 2)³, usamos la fórmula (a - b)³ = a³ - 3a²b + 3ab² - b³. Aquí, a = x y b = 2. Aplicando esta fórmula, obtenemos: x³ - 3(x²)(2) + 3(x)(2²) - (2³) = x³ - 6x² + 12x - 8.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B solo contiene un término y no es el resultado de la expansión del binomio.\"}, {\"opcion\": \"C\", \"razon\": \"Esta opción presenta una factorización incorrecta. La correcta sería (x - 2)³, no (x - 3)(x² + 3x + 9).\"}, {\"opcion\": \"D\", \"razon\": \"Similar a la opción C, esta presenta una factorización incorrecta. La correcta sería (x - 2)³, no (x + 3)(x² - 3x + 9).\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_135",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La solución de la ecuación   13 – 22x + 30x = 18x + 18, es:",
    "opciones": [
      "Edad de María 2x 2x – 10 2x – 10 = 4(x – 10)",
      "Edad de María x2 x2 – 10 x2 – 10 = 4(x – 10)",
      "Edad de María x x – 10 x – 10 = 2(2x – 10)",
      "Edad de María 4x 4x – 10 4x – 10 = 2(x – 10)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta contiene errores en el texto y las opciones, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_136",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encuentra el valor de “x” en",
    "opciones": [
      "Edad de María 2x 2x – 10 2x – 10 = 4(x – 10)",
      "Edad de María x2 x2 – 10 x2 – 10 = 4(x – 10)",
      "Edad de María x x – 10 x – 10 = 2(2x – 10)",
      "Edad de María 4x 4x – 10 4x – 10 = 2(x – 10)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido y las opciones están incompletas o incorrectas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está corrupta y no se puede entender.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C está corrupta y no se puede entender.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D está corrupta y no se puede entender.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_137",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hace 10 años la edad de María era 4 veces la edad de Juan y actualmente es el doble, ¿qué",
    "opciones": [
      "Edad de María 2x 2x – 10 2x – 10 = 4(x – 10)",
      "Edad de María x2 x2 – 10 x2 – 10 = 4(x – 10)",
      "Edad de María x x – 10 x – 10 = 2(2x – 10)",
      "Edad de María 4x 4x – 10 4x – 10 = 2(x – 10)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta una situación matemática donde se relacionan las edades de María y Juan a diferentes momentos del tiempo.",
    "explicacion_correcta": "La opción A es correcta porque establece correctamente la relación entre las edades de María y Juan en el pasado y en el presente. La ecuación representa que hace 10 años, María tenía 4 veces la edad de Juan, y actualmente su edad es doble la de Juan.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene errores en la representación matemática y no establece correctamente las relaciones entre las edades.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C presenta una ecuación incorrecta que no refleja la situación descrita en la pregunta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D contiene errores matemáticos y no establece correctamente las relaciones entre las edades de María y Juan.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_147",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "O btén el valor de “x” en x2 – 8ax + 12a2 = 0",
    "opciones": [
      "2 8 log3   B)",
      "1 B) 0 C) 2 D) 4",
      "5loga + 6logb – 2logc – logd C) 6loga + 5logb – 3logc – 2logd",
      "5loga + 6logb – 2logc – 3logd D) 6loga – 5logb + 3logc – 2logd"
    ],
    "correcta": 0,
    "explicacion": "La pregunta contiene texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_148",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué expresión es semejante a 2 3 = 8?",
    "opciones": [
      "2 8 log3   B)",
      "1 B) 0 C) 2 D) 4",
      "5loga + 6logb – 2logc – logd C) 6loga + 5logb – 3logc – 2logd",
      "5loga + 6logb – 2logc – 3logd D) 6loga – 5logb + 3logc – 2logd"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. La notación '2 3 = 8' es incorrecta y no se puede interpretar de ninguna manera matemática o científica conocida.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y no tiene sentido en el contexto de la pregunta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene operaciones logarítmicas que no están relacionadas con la notación dada.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D también contiene operaciones logarítmicas que no tienen relación con la notación proporcionada en la pregunta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_149",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve: log 10100 + log101000 – log10104",
    "opciones": [
      "s < n B) m > n C) m < s D) m > s",
      "x > x – 5 > x – 7  C) x < x – 2 < x – 4",
      "x > 5 – x > – x + 9 D) x < x – 1 < x – 2",
      "25 cm B) 20 cm C) 15 cm D) 10 cm"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a operaciones básicas de logaritmos.",
    "explicacion_correcta": "log(10^100) + log(10^1000) - log(10^4) = 100 + 1000 - 4 = 1096. La respuesta correcta es A.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No se relaciona con las operaciones de logaritmos.\"}, {\"opcion\": \"C\", \"razon\": \"No corresponde a la solución del problema.\"}, {\"opcion\": \"D\", \"razon\": \"Es una distracción que no tiene relación con el cálculo de los logaritmos.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_150",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Desarrolla,",
    "opciones": [
      "s < n B) m > n C) m < s D) m > s",
      "x > x – 5 > x – 7  C) x < x – 2 < x – 4",
      "x > 5 – x > – x + 9 D) x < x – 1 < x – 2",
      "25 cm B) 20 cm C) 15 cm D) 10 cm"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. Hay opciones incompletas y simbolos raros que hacen que el enunciado sea confuso.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_151",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Tres cantidades s, m, n. Si m es menor que n y n es menor que s, ¿qué afirmación es correcta?",
    "opciones": [
      "s < n B) m > n C) m < s D) m > s",
      "x > x – 5 > x – 7  C) x < x – 2 < x – 4",
      "x > 5 – x > – x + 9 D) x < x – 1 < x – 2",
      "25 cm B) 20 cm C) 15 cm D) 10 cm"
    ],
    "correcta": 0,
    "explicacion": "La pregunta evalúa el concepto de desigualdades numéricas.",
    "explicacion_correcta": "Dado que m < n y n < s, podemos inferir que m < s. Esto se debe a la transitivity de las desigualdades: si un número es menor que otro, y ese otro número es menor que un tercero, entonces el primer número es menor que el tercero.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere una desigualdad incorrecta. Si x > x - 5, entonces no puede ser verdadero que x > x - 7 porque la diferencia entre ambos lados sería mayor.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C presenta una desigualdad contradictoria. No es posible que x sea mayor que x - 2 y a su vez menor que x - 4, ya que las diferencias serían negativas.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D muestra un error en la relación de los números. Si m < n y n < s, entonces m no puede ser mayor que s, sino menor.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_155",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "La longitud total es de 60cm. Si en lugar de 3 argollas de diámetro 3cm se colocan 8, ¿qué distancia",
    "opciones": [
      "30° B) 45° C) 60° D) 90°",
      "10° B) 8.24° C) 6.36° D) 5°",
      "",
      "38.5° B) 40.5° C) 41.5° D) 43.5°"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores en las opciones.",
    "explicacion_correcta": "No se puede determinar la respuesta con los datos proporcionados. La pregunta no es coherente y las opciones están mal formadas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y contiene un símbolo extraño.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C solo dice 'π' sin contexto, lo que no es una respuesta válida.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D está incompleta y contiene errores tipográficos.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_156",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si AB = 4 cm, BC = 5 cm y EF = 3 cm, ¿cuánto vale FG?",
    "opciones": [
      "30° B) 45° C) 60° D) 90°",
      "10° B) 8.24° C) 6.36° D) 5°",
      "",
      "38.5° B) 40.5° C) 41.5° D) 43.5°"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta errores en las opciones y el contexto, lo que dificulta su comprensión.",
    "explicacion_correcta": "No se puede determinar la respuesta debido a los errores en la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Contiene un error tipográfico y no tiene sentido.\"}, {\"opcion\": \"C\", \"razon\": \"Es una constante matemática, pero el contexto de la pregunta es incoherente.\"}, {\"opcion\": \"D\", \"razon\": \"Contiene errores en los símbolos y no tiene sentido en este contexto.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_157",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Convierte",
    "opciones": [
      "30° B) 45° C) 60° D) 90°",
      "10° B) 8.24° C) 6.36° D) 5°",
      "",
      "38.5° B) 40.5° C) 41.5° D) 43.5°"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. Las opciones están repetidas y hay símbolos raros que hacen que el enunciado sea incomprensible.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque las opciones están repetidas\"}, {\"opcion\": \"C\", \"razon\": \"Porque las opciones están repetidas\"}, {\"opcion\": \"D\", \"razon\": \"Porque las opciones están repetidas\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_164",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "De acuerdo con la figura anterior, ¿cuál es el segmento perpendicular a la recta xy?",
    "opciones": [
      "14 B) 11 C) 15 D) 13",
      "3 8  B) 4  C)",
      "4.5 B) 4  C) 5 D) 7.5",
      "x = 2 B) x = 4 C) x = 6 D) x = 8"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_165",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuántos triángulos hay en la siguiente figura?",
    "opciones": [
      "14 B) 11 C) 15 D) 13",
      "3 8  B) 4  C)",
      "4.5 B) 4  C) 5 D) 7.5",
      "x = 2 B) x = 4 C) x = 6 D) x = 8"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. La figura y las opciones están incompletas o corruptas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y no se puede evaluar.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C está incompleta y no se puede evaluar.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D está incompleta y no se puede evaluar.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_166",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuántos triángulos tiene la siguiente figura?",
    "opciones": [
      "14 B) 11 C) 15 D) 13",
      "3 8  B) 4  C)",
      "4.5 B) 4  C) 5 D) 7.5",
      "x = 2 B) x = 4 C) x = 6 D) x = 8"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones incompletas y texto corrupto, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"C\", \"razon\": \"Porque las opciones están incompletas\"}, {\"opcion\": \"D\", \"razon\": \"Porque el texto está corrupto\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_171",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de la hipotenusa de un triángulo rectángulo isósceles si cada cateto vale 6 cm?",
    "opciones": [
      "     140 cos70 60 70 60",
      "     40cos70 60270 60",
      "     140 cos70 60270 60",
      "     40cos70 60 70 60"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita el valor de la hipotenusa en un triángulo rectángulo isósceles con catetos de 6 cm cada uno. La opción correcta utiliza la fórmula del teorema de Pitágoras para calcular la hip...",
    "explicacion_correcta": "En un triángulo rectángulo isósceles, los dos catetos son iguales y el ángulo entre ellos es de 90°. La fórmula del teorema de Pitágoras para calcular la hipotenusa (h) es h² = a² + b², donde a y b son los catetos. En este caso, a = b = 6 cm, por lo que h² = 6² + 6² = 36 + 36 = 72. Luego, h = √72 ≈ 8.49 cm.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La fórmula utilizada es incorrecta y no se relaciona con el teorema de Pitágoras.\"}, {\"opcion\": \"C\", \"razon\": \"La fórmula utilizada es incorrecta y no se relaciona con el teorema de Pitágoras.\"}, {\"opcion\": \"D\", \"razon\": \"La fórmula utilizada es incorrecta y no se relaciona con el teorema de Pitágoras.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_172",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de la hipotenusa en el siguiente triángulo?",
    "opciones": [
      "     140 cos70 60 70 60",
      "     40cos70 60270 60",
      "     140 cos70 60270 60",
      "     40cos70 60 70 60"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta simbolos y texto corruptos, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque contiene simbolos raros y texto incomprendible.\"}, {\"opcion\": \"C\", \"razon\": \"Porque presenta errores tipográficos y símbolos confusos.\"}, {\"opcion\": \"D\", \"razon\": \"Porque incluye operaciones matemáticas incorrectas y símbolos extraños.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_173",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un barco navega 60 km hacia el norte, 70 km a 40° del rumbo inicial",
    "opciones": [
      "     140 cos70 60 70 60",
      "     40cos70 60270 60",
      "     140 cos70 60270 60",
      "     40cos70 60 70 60"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un problema de navegación que requiere calcular el rumbo final del barco después de dos movimientos en direcciones diferentes.",
    "explicacion_correcta": "La opción correcta (A) utiliza la fórmula para calcular el rumbo final cuando se mueve en dos direcciones diferentes. La fórmula es: Rumbo final = Rumbo inicial ± cos(ángulo) * distancia, dependiendo de la dirección del movimiento.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B mezcla el rumbo inicial con un ángulo incorrecto y no utiliza la fórmula adecuada.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene un error en el cálculo del rumbo final, utilizando un ángulo incorrecto y sumando en lugar de restar cuando es necesario.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D utiliza un ángulo incorrecto y no aplica la fórmula para calcular el rumbo final correctamente.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_174",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué figura completa correctamente la imagen?",
    "opciones": [
      "B)",
      "D)",
      "2 cuadrados, 2 hexágonos y 1 triángulo",
      "2 rectángulos, 2 heptágonos y 3 triángulos"
    ],
    "correcta": 0,
    "explicacion": "La figura correcta debe tener un cuadrado, un hexágono y un triángulo.",
    "explicacion_correcta": "A) La opción A es la única que contiene exactamente una figura de cada tipo: un cuadrado, un hexágono y un triángulo. Las otras opciones contienen figuras incorrectas o en exceso.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Contiene un heptágono en lugar de un hexágono.\"}, {\"opcion\": \"C\", \"razon\": \"No contiene ninguna figura triangular.\"}, {\"opcion\": \"D\", \"razon\": \"Contiene rectángulos y heptágonos, pero no un triángulo.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_175",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué figuras se pueden inscribir en la siguiente figura sin que sobre ningún espacio?",
    "opciones": [
      "2 cuadrados, 2 octágonos y 2 triángulos",
      "2 rectángulos, 1 nonágono y 3 triángulos",
      "18(1 + 2) B) 18(2 + )  C) 18(1 – )  D) 18(3 – 2)",
      "   4 x"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a figuras que pueden inscribirse en una figura sin superponer espacio, lo cual implica que las áreas de estas figuras deben sumar exactamente la área de la figura original.",
    "explicacion_correcta": "Para determinar qué figuras se pueden inscribir en la figura sin sobre ningún espacio, es necesario conocer sus áreas y asegurarse de que su suma sea igual a la del cuadrado. Las opciones A son las únicas que cumplen con esta condición: 2 cuadrados (cada uno con área 1), 2 octágonos (cada uno con área 1/4) y 2 triángulos rectángulos isósceles (cada uno con área 1/8). La suma de estas áreas es exactamente la del cuadrado original.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"El nonágono no puede inscribirse en el cuadrado sin superponer espacio.\"}, {\"opcion\": \"C\", \"razon\": \"La expresión matemática dada no tiene sentido en este contexto y no representa ninguna figura que pueda inscribirse en el cuadrado.\"}, {\"opcion\": \"D\", \"razon\": \"Esta opción parece ser una fórmula matemática aleatoria que no corresponde a ninguna figura que pueda inscribirse en el cuadrado sin superponer espacio.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_190",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "La pendiente de la recta que pasa por los puntos (– 2, – 1) y (– 1, – 2), es:",
    "opciones": [
      "x = – 1, 3  ; y = 2, 8, 10",
      "x = 0, 2  ;  y = 2, 4, 6",
      "x = 0, 1  ;  y = 0, 4, 8",
      "x = 1, 3  ;  y = - 2, 1, 5"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita calcular la pendiente de una recta a partir de dos puntos, lo cual es un concepto básico en geometría analítica.",
    "explicacion_correcta": "Para calcular la pendiente (m) de una recta que pasa por dos puntos (x1, y1) y (x2, y2), se usa la fórmula m = (y2 - y1) / (x2 - x1). Aplicando esta fórmula a los puntos (-2, -1) y (-1, -2), obtenemos m = (-2 - (-1)) / (-1 - (-2)) = -1 / 1 = -1. La opción A es la única que muestra una pendiente correcta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No proporciona ninguna información sobre la pendiente de la recta.\"}, {\"opcion\": \"C\", \"razon\": \"Los valores dados no corresponden a la pendiente de la recta que pasa por los puntos (-2, -1) y (-1, -2).\"}, {\"opcion\": \"D\", \"razon\": \"Los valores proporcionados no representan una relación lineal entre x e y que coincida con la pendiente correcta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_191",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Sea la recta y = 2x + 4, ¿ qué valores de x, y completan correctamente la tabla?",
    "opciones": [
      "x = – 1, 3  ; y = 2, 8, 10",
      "x = 0, 2  ;  y = 2, 4, 6",
      "x = 0, 1  ;  y = 0, 4, 8",
      "x = 1, 3  ;  y = - 2, 1, 5"
    ],
    "correcta": 0,
    "explicacion": "La pregunta evalúa el conocimiento sobre cómo calcular los valores de y para diferentes valores de x en la ecuación lineal y = 2x + 4.",
    "explicacion_correcta": "Para la opción A, cuando x = -1, y = 2(-1) + 4 = 2; cuando x = 3, y = 2(3) + 4 = 10. Ambos pares (x, y) satisfacen la ecuación.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Para x = 0, y debería ser 4; para x = 2, y debería ser 8.\"}, {\"opcion\": \"C\", \"razon\": \"Para x = 0, y debería ser 4; para x = 1, y debería ser 6.\"}, {\"opcion\": \"D\", \"razon\": \"Para x = 1, y debería ser 6; para x = 3, y debería ser 10.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_193",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La siguiente gráfica muestra la relación entre los grados Farenheit y los grados Celsius.",
    "opciones": [
      "La propuesta 2 le genera mayor sueldo al vender más de 1 000 playeras",
      "La propuesta 1 siempre le genera mayor sueldo que la propuesta 2",
      "La propuesta 2 le genera menor sueldo al vender menos de 1 000 playeras",
      "La propuesta 1 le genera mayor sueldo al vender más de 1 000 playeras"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones que no corresponden al tema de las funciones y gráficas, sino a una situación comercial. La gráfica mencionada no se relaciona con el contenido de la pregunta.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta mezcla conceptos matemáticos y comerciales, lo que hace que esta opción sea incorrecta.\"}, {\"opcion\": \"C\", \"razon\": \"Análogo al anterior, la opción C también mezcla temas inapropiados.\"}, {\"opcion\": \"D\", \"razon\": \"Igualmente, la opción D intenta aplicar conceptos matemáticos a una situación comercial, lo que hace que sea incorrecta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_194",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La siguiente grafica muestra el largo de un animal al nacer hasta los 10 años.",
    "opciones": [
      "La propuesta 2 le genera mayor sueldo al vender más de 1 000 playeras",
      "La propuesta 1 siempre le genera mayor sueldo que la propuesta 2",
      "La propuesta 2 le genera menor sueldo al vender menos de 1 000 playeras",
      "La propuesta 1 le genera mayor sueldo al vender más de 1 000 playeras"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones que no corresponden al tema de matemáticas, sino a otro contexto como ventas o sueldos. Además, la gráfica mencionada no se muestra en el texto proporcionado.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque las opciones A y D son correctas.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no se refiere a sueldos o ventas.\"}, {\"opcion\": \"D\", \"razon\": \"Porque las opciones A y B son correctas.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_195",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "A Carmen le proponen dos formas de sueldo en su nuevo trabajo:",
    "opciones": [
      "La propuesta 2 le genera mayor sueldo al vender más de 1 000 playeras",
      "La propuesta 1 siempre le genera mayor sueldo que la propuesta 2",
      "La propuesta 2 le genera menor sueldo al vender menos de 1 000 playeras",
      "La propuesta 1 le genera mayor sueldo al vender más de 1 000 playeras"
    ],
    "correcta": 0,
    "explicacion": "La pregunta no proporciona suficiente información para determinar cuál propuesta de sueldo es mejor.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta porque falta información sobre los detalles específicos de cada propuesta de sueldo, como las cantidades fijas y porcentajes que se mencionan. Sin esta información, no es posible comparar cuál propuesta generaría mayor sueldo en función del número de playeras vendidas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona suficiente información para determinar si la propuesta 1 siempre genera mayor sueldo que la propuesta 2.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta no proporciona suficiente información para determinar si la propuesta 2 genera menor sueldo al vender menos de 1 000 playeras.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta no proporciona suficiente información para determinar si la propuesta 1 genera mayor sueldo al vender más de 1 000 playeras.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_197",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encuentra las intersecciones con los ejes de y = 2x2 +",
    "opciones": [
      "Eje X (– 4, 0)",
      "Eje X (4, 0)",
      "Eje X (0,– 4)",
      "Eje X (0, 4)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores.",
    "explicacion_correcta": "La ecuación dada es 'y = 2x^2', pero falta el término lineal (bx) y la constante (c). Además, las opciones de respuesta no corresponden a los ejes de corte correctos para esta parábola.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_199",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver",
    "opciones": [
      "1995 - 2000",
      "1995 - 2005",
      "2000 - 2005",
      "2005 - 2010"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y corrupta, ya que carece de enunciado claro y opciones coherentes.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la falta de información en la pregunta. La pregunta no es coherente ni clara.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"Análogo al caso B, la pregunta carece de contexto necesario para determinar si es correcta.\"}, {\"opcion\": \"D\", \"razon\": \"Igualmente, la pregunta no ofrece los datos necesarios para evaluar esta opción.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiade16ma_200",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿En qué periodo se alcanzó una población total de 100 millones de habitantes?",
    "opciones": [
      "1995 - 2000",
      "1995 - 2005",
      "2000 - 2005",
      "2005 - 2010"
    ],
    "correcta": 0,
    "explicacion": "La pregunta no proporciona suficiente información para determinar en qué periodo se alcanzó una población total de 100 millones de habitantes.",
    "explicacion_correcta": "La pregunta es incorrecta porque no se ha proporcionado ningún dato o tendencia poblacional que permita calcular el período específico. La información necesaria (como tasas de crecimiento, poblaciones iniciales, etc.) no está incluida en la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Las opciones B, C y D son posibles períodos pero no se ha proporcionado información suficiente para determinar cuál es el correcto.\"}, {\"opcion\": \"C\", \"razon\": \"Al igual que las otras opciones, no hay datos específicos que permitan confirmar si este período es el correcto.\"}, {\"opcion\": \"D\", \"razon\": \"Las mismas razones que para las opciones B y C. No se ha dado información relevante para seleccionar esta opción como la correcta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_201",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿En qué porcentaje se incrementó la población de hombres en el periodo 2010 – 2015?",
    "opciones": [
      "10 – 15%",
      "20 – 30%",
      "35 – 40%",
      "40 – 50%"
    ],
    "correcta": 0,
    "explicacion": "La pregunta no proporciona datos concretos sobre la población de hombres en el periodo 2010-2015, por lo que no es posible calcular el incremento porcentual.",
    "explicacion_correcta": "No se pueden determinar los datos necesarios para resolver esta pregunta. La información requerida (población de hombres en 2010 y 2015) no está proporcionada en la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no ofrece datos suficientes para calcular un incremento porcentual.\"}, {\"opcion\": \"C\", \"razon\": \"No se dispone de información relevante para determinar el aumento de la población de hombres en ese período.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta carece de los datos necesarios para realizar cualquier cálculo o estimación.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_202",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La siguiente gráfica muestra los niveles de temperatura en cierto estado de la república mexicana en el",
    "opciones": [
      "25 °C",
      "20 °C",
      "15 °C",
      "10 °C"
    ],
    "correcta": 0,
    "explicacion": "La gráfica muestra los niveles de temperatura en cierto estado de la República Mexicana.",
    "explicacion_correcta": "El punto más alto en la gráfica indica el nivel máximo de temperatura, que es 25°C. El índice 0 corresponde a este valor.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (20°C) está por debajo del punto más alto en la gráfica.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (15°C) también está por debajo del punto más alto en la gráfica.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (10°C) es el nivel más bajo mostrado en la gráfica, no el máximo.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiade16ma_203",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La siguiente gráfica muestra los puntos realizados por dos equipos de voleibol en cinco sets",
    "opciones": [
      "El equipo 1 logró más puntos que el equipo 2",
      "El equipo 2 logró más puntos que el equipo 1",
      "Ambos equipos lograron los mismos puntos",
      "El equipo 1 logró 5 puntos más que el equipo 2"
    ],
    "correcta": 0,
    "explicacion": "La gráfica muestra los puntos realizados por dos equipos en cinco sets de voleibol.",
    "explicacion_correcta": "El equipo 1 logró más puntos que el equipo 2. Esto se puede ver porque la curva del equipo 1 está por encima de la del equipo 2 en toda la gráfica, indicando un mayor número de puntos anotados.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La gráfica muestra que el equipo 2 no logró más puntos que el equipo 1.\"}, {\"opcion\": \"C\", \"razon\": \"La gráfica indica que ambos equipos no lograron los mismos puntos, ya que las curvas de ambos equipos son diferentes.\"}, {\"opcion\": \"D\", \"razon\": \"La gráfica muestra que el equipo 1 no logró 5 puntos más que el equipo 2. La diferencia es mayor que eso.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiadeipnco_15",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Paciente es a doctor, como:",
    "opciones": [
      "mouse b) módem",
      "prefecto b) psicólogo",
      "computadora b) escritorio",
      "bimestral b) semestre"
    ],
    "correcta": 0,
    "explicacion": "La relación entre paciente y doctor es similar a la entre mouse y módem, ya que ambos son dispositivos que interactúan con un sistema principal (el ordenador en el caso del módem y el cuerpo humano...",
    "explicacion_correcta": "La relación entre paciente y doctor es una relación profesional, donde el doctor recibe información (paciente) y proporciona atención médica. Similarmente, el módem recibe datos (mouse) y transmite información a través de una red. Ambos pares están compuestos por un dispositivo de entrada y un dispositivo de salida.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La relación entre prefecto y psicólogo no es similar a la entre paciente y doctor. El prefecto y el psicólogo son roles educativos y terapéuticos, respectivamente, mientras que el paciente y el doctor son profesionales de la salud.\"}, {\"opcion\": \"C\", \"razon\": \"La relación entre computadora y escritorio no es similar a la entre paciente y doctor. La computadora y el escritorio son dispositivos físicos, mientras que el paciente y el doctor son profesionales de la salud.\"}, {\"opcion\": \"D\", \"razon\": \"La relación entre bimestral y semestre no es similar a la entre paciente y doctor. Bimestre y semestre son períodos educativos, mientras que el paciente y el doctor son profesionales de la salud.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_16",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ensayar es a músico, como:",
    "opciones": [
      "mouse b) módem",
      "prefecto b) psicólogo",
      "computadora b) escritorio",
      "bimestral b) semestre"
    ],
    "correcta": 0,
    "explicacion": "La pregunta compara el concepto de 'ensayar' con la profesión de músico, buscando una analogía similar.",
    "explicacion_correcta": "La opción correcta es A) mouse. Al igual que un músico ensaya su música antes de presentarla al público, un programador usa un mouse para ensayar y probar su código antes de implementarlo en un sistema real.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La profesión del prefecto no tiene relación con el concepto de ensayar.\"}, {\"opcion\": \"C\", \"razon\": \"El escritorio es una herramienta, pero no se asocia directamente con el proceso de ensayar.\"}, {\"opcion\": \"D\", \"razon\": \"Los bimestrales y semestres son períodos académicos, no tienen relación con el concepto de ensayar.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una computadora siempre tiene:",
    "opciones": [
      "mouse b) módem",
      "prefecto b) psicólogo",
      "computadora b) escritorio",
      "bimestral b) semestre"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "El texto contiene opciones incompletas y simbolos raros, lo que hace que la pregunta sea imposible de entender o responder correctamente.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y no tiene sentido en el contexto de la pregunta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C está repetida y no tiene sentido en el contexto de la pregunta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D está incompleta y no tiene sentido en el contexto de la pregunta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_18",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una escuela siempre incluye:",
    "opciones": [
      "sordidez b) filantropía",
      "mesas",
      "disco duro",
      "secretaria"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es corrupta y no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta está incompleta y el enunciado no es claro. La opción correcta dada (A) no tiene sentido en este contexto.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no menciona mesas, por lo que esta opción no es relevante.\"}, {\"opcion\": \"C\", \"razon\": \"El término 'disco duro' no tiene sentido en el contexto de una escuela.\"}, {\"opcion\": \"D\", \"razon\": \"No se indica qué tipo de secretaria se refiere, por lo que esta opción también no es relevante.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_19",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una oficina siempre tiene:",
    "opciones": [
      "sordidez b) filantropía",
      "mesas",
      "disco duro",
      "secretaria"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es corrupta y no se entiende.",
    "explicacion_correcta": "El texto de la pregunta está incompleto y contiene errores, lo que hace que su significado sea incierto. No es posible determinar qué información debe proporcionarse en una oficina sin un enunciado claro y completo.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con la pregunta incompleta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tampoco se relaciona con el enunciado corrupto de la pregunta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D también no tiene relación con el texto corrupto de la pregunta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_20",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Lo mensual siempre expresa:",
    "opciones": [
      "sordidez b) filantropía",
      "mesas",
      "disco duro",
      "secretaria"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. Las opciones no corresponden al tema de matemáticas y el enunciado es confuso.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con matemáticas ni con el concepto de 'mensual'.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C es un término técnico que no tiene relación con la pregunta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D no es relevante para el tema de matemáticas y no se relaciona con el concepto de 'mensual'.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Altruismo siempre encierra:",
    "opciones": [
      "sordidez b) filantropía",
      "mesas",
      "disco duro",
      "secretaria"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido y las opciones están incompletas o mezcladas con otras materias.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con el tema de la pregunta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C no tiene relación con el contexto proporcionado.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D no es relevante para el enunciado de la pregunta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_22",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una fábrica siempre tiene:",
    "opciones": [
      "café",
      "mes",
      "indiferencia",
      "cascos"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es corrupta y no se entiende completamente.",
    "explicacion_correcta": "La pregunta no tiene sentido porque no proporciona contexto sobre qué fábrica siempre tiene. Las opciones A, B, C y D son irrelevantes en este contexto.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es una unidad de tiempo que no tiene relación con las fábricas.\"}, {\"opcion\": \"C\", \"razon\": \"Porque es un concepto abstracto que no se puede asociar con las fábricas.\"}, {\"opcion\": \"D\", \"razon\": \"Porque son objetos personales que no tienen conexión con las operaciones de una fábrica.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_copiadeipnco_23",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una librería siempre tiene:",
    "opciones": [
      "estantes",
      "estarían",
      "máquinas",
      "escritorios c) ventanas"
    ],
    "correcta": 0,
    "explicacion": "La librería siempre tiene estantes para almacenar y mostrar los libros.",
    "explicacion_correcta": "Las estantes son el elemento esencial de una librería, donde se organizan y exhiben los libros. Las demás opciones no son necesarias o específicas para una librería: 'estarían' no es un objeto físico, 'máquinas' pueden estar presentes pero no son esenciales, y 'escritorios' suelen estar en oficinas, no en librerías.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No es un objeto físico presente en una librería.\"}, {\"opcion\": \"C\", \"razon\": \"Aunque pueden estar presentes, las máquinas no son esenciales para la operación de una librería.\"}, {\"opcion\": \"D\", \"razon\": \"Los escritorios suelen estar en oficinas o tiendas de confitería, no en librerías.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_24",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los alumnos ___________",
    "opciones": [
      "estaban c) estarán",
      "secretaria a carta",
      "clérigo a monja",
      "nadar a nadador"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. Las opciones no están relacionadas con el tema de las matemáticas y el contexto es incoherente.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con el tema de las matemáticas.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C no tiene sentido en este contexto.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D no es una acción válida y no se relaciona con el tema de las matemáticas.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_copiadeipnco_25",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La conferencia que escuchamos ayer fue excelente porque el ponente nos",
    "opciones": [
      "contó",
      "enfatizó b) habló c) señaló",
      "discusión b) entrevista c) disertación",
      "estaría b) estaba c) estará d) está"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "La pregunta mezcla elementos de diferentes temas y tiene errores gramaticales, lo que dificulta su comprensión. No se puede determinar con certeza el tipo de conferencia o la acción del ponente.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con el contexto proporcionado.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C también no se relaciona con el enunciado dado.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es una construcción verbal que no tiene sentido en este contexto.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_ejerciciosmate_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al calcular la siguiente operación",
    "opciones": [
      "– 6.48",
      "– 4.61",
      "– 2.33",
      "4.25"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es legible\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la operación ( ) ( )351045321 −+− ?",
    "opciones": [
      "251",
      "320",
      "580",
      "721"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y opciones incompletas, lo que dificulta su comprensión y evaluación.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es legible\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al desarrollar ( )3ba −  , se obtiene:",
    "opciones": [
      "3223 bab3ba3a +++",
      "3223 bab3ba3a −+−",
      "3223 babbaa −+−",
      "33 ba −"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es legible\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_4",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Simplifica la fracción",
    "opciones": [
      "x – 12",
      "x + 9",
      "2x + 1",
      "3x – 4"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y corrupta, ya que falta el numerador de la fracción.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es una opción posible pero no se puede determinar si es correcta sin el numerador.\"}, {\"opcion\": \"C\", \"razon\": \"Porque es otra opción posible pero no se puede determinar su validez sin el numerador.\"}, {\"opcion\": \"D\", \"razon\": \"Porque es una opción plausible, pero la pregunta no proporciona suficiente información para verificar su exactitud.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al realizar la operación indicada y al simplificar ( )a734a5 −+ , el resultado que se obtiene es:",
    "opciones": [
      "4 – 28a",
      "– 17 + 20a",
      "17 – 28a",
      "12 – 23a"
    ],
    "correcta": 0,
    "explicacion": "La pregunta contiene texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_6",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de “x” al resolver la ecuación",
    "opciones": [
      "21",
      "19",
      "13",
      "– 19"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y opciones incompletas, lo que dificulta su comprensión y evaluación.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_ejerciciosmate_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Dada la desigualdad 69x5 −>+− , seleccione en cada caso el signo “<” o “>”, que debe ir en el recuadro.",
    "opciones": [
      "I. >, II. <, III. >",
      "I. <, II. >, III. <",
      "I. >, II. >, III. >",
      "I. <, II. <, III. <"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Por que es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Por que es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_8",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La solución de la inecuación x – 4 < 3 – 6x, es:",
    "opciones": [
      "x > – 4",
      "x < – 7",
      "x > 5",
      "x < 1"
    ],
    "correcta": 0,
    "explicacion": "La inecuación se resuelve reorganizando términos y despejando la variable.",
    "explicacion_correcta": "1. Sumamos 6x a ambos lados: x + 6x - 4 < 3\n2. Simplificamos: 7x - 4 < 3\n3. Sumamos 4 a ambos lados: 7x < 7\n4. Dividimos ambos lados por 7: x < 1",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere x < -7, lo cual no es correcto porque la solución real es x < 1.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C sugiere x > 5, lo cual contradice la solución x < 1.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere x < 1, pero el error está en que debería ser x < -7, por lo que esta también es incorrecta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿cuál es el determinante principal asociado al sistema",
    "opciones": [
      "116",
      "56",
      "115",
      "56"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores, ya que no se proporciona el sistema específico al que se refiere.",
    "explicacion_correcta": "No es posible determinar el determinante principal sin el sistema matemático en cuestión. La pregunta presenta problemas de claridad y coherencia.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no tiene relación con la pregunta incompleta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C no se relaciona con el contenido de la pregunta errónea.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es incorrecta porque la pregunta está mal formulada y no puede evaluarse correctamente.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_ejerciciosmate_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver el sistema",
    "opciones": [
      "– 9",
      "– 5",
      "– 1",
      "6"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores tipográficos, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es legible\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Sea ( ) x2xf = , ( ) xxxg 2 −= , ( ) 2x3xh = . Calcula ( ) ( ) ( )",
    "opciones": [
      "2xx3 2 +−",
      "3x2x4x 23 +−+",
      "3x3xx 23 +−−",
      "1xx3x3 23 +−−"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta funciones compuestas y requiere calcular (f o g) o (g o h). El enfoque es entender cómo aplicar las funciones dadas.",
    "explicacion_correcta": "Primero, calculamos f(g(x)) = f(2x - x^2) = (2x - x^2)^2. Luego, simplificamos: (2x - x^2)^2 = 4x^2 - 4x^3 + x^4. Por lo tanto, la respuesta correcta es A.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B presenta un error en el exponente del término x^2, que debería ser 2.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene un error en la simplificación del término x^3, que debería ser -4x^3.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D presenta un error en el exponente del término x^2, que debería ser 2 y el término x^3 incorrecto.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Obtenga ( )( )xgf  , donde ( ) 2x3",
    "opciones": [
      "( )22x",
      "( )42x3",
      "( )24x4",
      "2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_14",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La siguiente tabla muestra los puntos de  la función ( ) xcotxf = , con base en ella indica para que valores de las",
    "opciones": [
      "x = 90°, x = 270°",
      "x = 0°, x = 180°",
      "x = 60°, x = 240°",
      "x = 150°, x = 330°"
    ],
    "correcta": 0,
    "explicacion": "La pregunta evalúa el conocimiento sobre los puntos de corte de la función cotangente.",
    "explicacion_correcta": "La función cotangente (cot(x)) es indefinida cuando x es igual a 90° y 270°, ya que el denominador se vuelve cero. Estos son los valores para los cuales la función no está definida, por lo tanto, son los puntos de corte.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque los valores 0° y 180° corresponden a puntos donde la tangente es cero, no donde la cotangente está indefinida.\"}, {\"opcion\": \"C\", \"razon\": \"Porque los valores 60° y 240° corresponden a puntos donde la función tangente tiene un valor específico, pero no donde la cotangente está indefinida.\"}, {\"opcion\": \"D\", \"razon\": \"Porque los valores 150° y 330° también corresponden a puntos donde la tangente tiene un valor específico, pero no donde la cotangente está indefinida.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_15",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Si el dominio de la función ( ) xe2xf += , son los números ℜ ,  entonces, ¿cuál es el rango?",
    "opciones": [
      "( )∞,1",
      "( )∞∞− ,",
      "( )2,∞−",
      "( )∞,0"
    ],
    "correcta": 0,
    "explicacion": "La función xe2xf += es una función lineal con pendiente positiva, lo que significa que su gráfica es una línea recta ascendente.",
    "explicacion_correcta": "Para determinar el rango de la función, consideramos que cualquier número real puede ser el resultado de esta función. La pendiente positiva y el punto de corte con el eje y (que es 0) nos permiten afirmar que la función toma todos los valores reales mayores a 0.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere un rango que no incluye ningún valor positivo, lo cual es incorrecto porque la función siempre produce números positivos.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C indica un rango que excluye valores negativos y 0, pero la función puede producir cualquier número real mayor a 0.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere un rango que incluye solo números negativos, lo cual es incorrecto porque la función siempre produce números positivos.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_16",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La grafica de la función ( ) ( )xlogxf = , es:",
    "opciones": [
      "B)",
      "D)",
      "9, – 7",
      "– 5, – 7"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es legible\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es legible\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_ejerciciosmate_17",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Si la distancia del segmento formado por los puntos A( 5, 1 ) y B( – 1, y ) es 10, ¿Cuál es el valor de “y”?",
    "opciones": [
      "– 1, 4",
      "4, 6",
      "x – 2y – 1 = 0",
      "4x – 2y + 5 = 0"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita el valor de 'y' en el punto B(-1, y) para que la distancia entre A(5, 1) y B sea 10. Utilizando la fórmula de distancia entre dos puntos en el plano cartesiano.",
    "explicacion_correcta": "La fórmula de distancia es √[(x2 - x1)^2 + (y2 - y1)^2]. Sustituyendo los valores, tenemos √[(-1 - 5)^2 + (y - 1)^2] = 10. Simplificando, obtenemos √[36 + (y - 1)^2] = 10. Elevando al cuadrado ambos lados, 36 + (y - 1)^2 = 100. Resolviendo la ecuación, (y - 1)^2 = 64, lo que implica y - 1 = ±8. Por lo tanto, y = 9 o y = -7.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Las opciones B no corresponden a los valores de 'y' calculados.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C es una ecuación lineal que no se relaciona con el problema de distancia entre dos puntos.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es una ecuación cuadrática que no se relaciona con el problema de distancia entre dos puntos.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_18",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Determina la ecuación de la recta paralela a 2x – y + 5 = 0 y pasa por el punto ( 4, – 3 )",
    "opciones": [
      "2x – y – 11 = 0",
      "x – 4y + 6 = 0",
      "( ) ( ) 222 rkyhx =−+−",
      "( ) ( ) 222 rhykx =−+−"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide encontrar la ecuación de una recta paralela a 2x - y + 5 = 0 que pasa por el punto (4, -3). Para resolver esto, primero identificamos la pendiente de la recta original, luego usamo...",
    "explicacion_correcta": "La recta original tiene la forma general Ax + By + C = 0. La pendiente (m) se obtiene como -A/B. Para la recta paralela, la pendiente es la misma. Usamos la fórmula de la recta point-slope y reorganizamos para obtener la ecuación en forma general.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no tiene la misma pendiente que la recta original, por lo que no es paralela.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C parece estar incompleta o mal escrita, lo que hace que sea difícil de evaluar.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D también parece estar incompleta o mal escrita, similar a la opción C.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_19",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la opción que representa la ecuación ordinaria de la circunferencia?",
    "opciones": [
      "( ) ( ) rkyhx 22 =+−+",
      "( ) ( ) rkyhx 22 =−+−",
      "V( 2, – 1 ), F( 0, – 1 )",
      "V( 3, – 1 ), F( 1, – 1 )"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_20",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las coordenadas del vértice y foco de la parábola cuya ecuación es  012y8x4x2 =++− ?",
    "opciones": [
      "V(– 2, – 4 ), F( 0, – 4 )",
      "V( 3, – 5 ), F(– 2, – 5 )",
      "distancia a un punto fijo equidista a una recta fija",
      "diferencia de distancias a 2 puntos fijos es siempre constante"
    ],
    "correcta": 0,
    "explicacion": "La ecuación dada está corrupta y no se puede entender.",
    "explicacion_correcta": "No es posible determinar las coordenadas del vértice y foco de la parábola debido a la falta de una ecuación válida.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no tiene sentido, por lo que ninguna opción puede ser correcta.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta está corrupta y no se puede evaluar como un concepto matemático.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta no es coherente y no puede evaluarse como una definición o propiedad matemática.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una hipérbola es el conjunto de puntos tales que la",
    "opciones": [
      "distancia al punto ( 2, – 5 ) es siempre constante",
      "diferencia de distancias a 2 rectas fijas es siempre constante",
      "px4y2 =",
      "1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores gramaticales, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no se entiende correctamente\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no se entiende correctamente\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no se entiende correctamente\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_ejerciciosmate_22",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Identifica la ecuación que representa a la grafica que se muestra.",
    "opciones": [
      "1",
      "1",
      "recta",
      "circunferencia"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no se entiende\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no se entiende\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no se entiende\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_ejerciciosmate_25",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina",
    "opciones": [
      "ycosxcosy",
      "xsenysenx",
      "xsenycosx",
      "2u3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende.",
    "explicacion_correcta": "No es posible determinar la respuesta correcta debido a la falta de información clara en la pregunta. La opción A parece ser el intento de una fórmula trigonométrica, pero sin contexto adicional, no se puede validar su corrección.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta es corrupta y no se puede evaluar la opción B.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta es corrupta y no se puede evaluar la opción C.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta es corrupta y no se puede evaluar la opción D.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_evalunammatp_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una tienda aumenta el precio de cada artículo vendido en 60% respecto al precio de mayoreo, ¿cuál es",
    "opciones": [
      "6",
      "2  B)",
      "5 169 39 B)",
      "x 2 x 6 B)"
    ],
    "correcta": 3,
    "explicacion": "La pregunta solicita el aumento del precio de un artículo vendido en una tienda, expresado como un factor multiplicativo respecto al precio de mayoreo.",
    "explicacion_correcta": "El aumento es del 60%, por lo que el nuevo precio es el original más el 60% del original. Esto se expresa matemáticamente como (1 + 0.60) = 1.60. La opción D, x^2 * 6, no tiene sentido en este contexto y es incorrecta.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"No representa un factor de aumento válido.\"}, {\"opcion\": \"B\", \"razon\": \"No es una expresión matemática válida para representar el aumento del precio.\"}, {\"opcion\": \"C\", \"razon\": \"Es una opción confusa y no relacionada con el cálculo del aumento del precio.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_evalunammatp_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de 2 5 32 8− + ?",
    "opciones": [
      "4 8y x B)",
      "x",
      "y",
      "y y"
    ],
    "correcta": 1,
    "explicacion": "La pregunta contiene simbolos raros y texto corrupto, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"Porque la pregunta está corrupta y no se puede determinar qué significa.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta está corrupta y no se puede determinar qué significa.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta está corrupta y no se puede determinar qué significa.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_evalunammatp_8",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La raíz de 5 3) 1521 (, a qué es equivalente:",
    "opciones": [
      "4 8y x B)",
      "x",
      "y",
      "y y"
    ],
    "correcta": 1,
    "explicacion": "La pregunta contiene texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"Porque la pregunta está corrupta\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta está corrupta\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta está corrupta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_evalunammatp_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplificar la expresión 3x 18 2.",
    "opciones": [
      "4 8y x B)",
      "x",
      "y",
      "y y"
    ],
    "correcta": 3,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta está incompleta y el texto es confuso. No hay una expresión matemática clara para simplificar.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La opción A no tiene sentido en este contexto corrupto.\"}, {\"opcion\": \"B\", \"razon\": \"La opción B tampoco tiene sentido debido a la confusión del texto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C es incorrecta porque el texto está corrupto y no se puede determinar su significado.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_evalunammatp_16",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplificar ) a 9 a 8 ( a 6 a 74 2 2 4+ − − .",
    "opciones": [
      "y x 24 xy 54 x 27223 + +  B)",
      "y x 54 x 2723 +",
      "y x+  B)",
      "y x−"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué opción es equivalente a (3x + 8)(x + 2)?",
    "opciones": [
      "y x 24 xy 54 x 27223 + +  B)",
      "y x 54 x 2723 +",
      "y x+  B)",
      "y x−"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_18",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "E l producto de (– 3x – 2y) y (– 9x2 – 12xy), es:",
    "opciones": [
      "y x 24 xy 54 x 27223 + +  B)",
      "y x 54 x 2723 +",
      "y x+  B)",
      "y x−"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_35",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica la expresión 1 1 1",
    "opciones": [
      "a b",
      "1 a",
      "1 b",
      "2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_76",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función ( )",
    "opciones": [
      "creciente y decreciente",
      "creciente y creciente",
      "decreciente y decreciente",
      "decreciente y creciente"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_77",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "En la gráfica de la función ( ) 2 x x f+ = , ¿en qué intervalo la función es creciente y en qué intervalo la",
    "opciones": [
      "creciente y decreciente",
      "creciente y creciente",
      "decreciente y decreciente",
      "decreciente y creciente"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_78",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La función f(x) = x + 1, es _________ y la función f(x) = 1 – x, es _________ en el intervalo (– 4, 5).",
    "opciones": [
      "creciente y decreciente",
      "creciente y creciente",
      "decreciente y decreciente",
      "decreciente y creciente"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_111",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes rectas es perpendicular a la recta que pasa por los puntos (9, – 6) y (7, – 3)?",
    "opciones": [
      "Rectas paralelas",
      "Rectas perpendiculares",
      "Rectas que se intersecan en el punto (1, 0)",
      "Rectas con pendientes diferentes"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_112",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las rectas y = 5, y = 3, son:",
    "opciones": [
      "Rectas paralelas",
      "Rectas perpendiculares",
      "Rectas que se intersecan en el punto (1, 0)",
      "Rectas con pendientes diferentes"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_113",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Qué características tiene la ecuación y = – 2x + b con la ecuación y = – 2x, si “b” es un número real?",
    "opciones": [
      "Rectas paralelas",
      "Rectas perpendiculares",
      "Rectas que se intersecan en el punto (1, 0)",
      "Rectas con pendientes diferentes"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_117",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la circunferencia con centro en el origen y radio 7 unidades.",
    "opciones": [
      "Elipse horizontal",
      "Circunferencia con centro fuera del origen",
      "0 FEyDx y 2 x2 2 = + + + +",
      "0 FEyDx y x2 2 = + + + −"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_118",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación 0 4 y 4 x 2 y x2 2 = − + − +, representa una:",
    "opciones": [
      "Elipse horizontal",
      "Circunferencia con centro fuera del origen",
      "0 FEyDx y 2 x2 2 = + + + +",
      "0 FEyDx y x2 2 = + + + −"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_123",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Todos los puntos están a la misma distancia de un punto fijo llamado foco y una r ecta fija llamada",
    "opciones": [
      "x",
      "y x2 − =",
      "y x2 =",
      "x y2 ="
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_124",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Dada la siguiente gráfica.",
    "opciones": [
      "x",
      "y x2 − =",
      "y x2 =",
      "x y2 ="
    ],
    "correcta": 3,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_126",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿ Cuáles son las coordenadas del vértice de la parábola (y + 2)2 = 4(x – 3)?",
    "opciones": [
      "0 33 y 12 x 6 y2 = + − −",
      "0 33 y 12 x 6 x2 = + − +",
      "0 15 y 6 x 12 x2 = + − +",
      "0 15 y 4 x y2 = − − −"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_127",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación ordinaria de la parábola con vértice en V = (–2, 3) y foco F = (–1, 3), es:",
    "opciones": [
      "0 33 y 12 x 6 y2 = + − −",
      "0 33 y 12 x 6 x2 = + − +",
      "0 15 y 6 x 12 x2 = + − +",
      "0 15 y 4 x y2 = − − −"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_128",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación de la parábola si su vértice es el punto (– 3, 2) y su foco en el punto (– 3, 5)?",
    "opciones": [
      "0 33 y 12 x 6 y2 = + − −",
      "0 33 y 12 x 6 x2 = + − +",
      "0 15 y 6 x 12 x2 = + − +",
      "0 15 y 4 x y2 = − − −"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_135",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "El centro de la elipse ( ) ( ) 1",
    "opciones": [
      "0 9 y 6 x 3 y x2 2 = − + − −",
      "0 16 y x2 2 = − −",
      "0 12 y x 4 y x2 2 = + − + +",
      "0 12 y 4 x 32 2 = − +"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_136",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la hipérbola con centro en (0, 0), es:",
    "opciones": [
      "0 9 y 6 x 3 y x2 2 = − + − −",
      "0 16 y x2 2 = − −",
      "0 12 y x 4 y x2 2 = + − + +",
      "0 12 y 4 x 32 2 = − +"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El valor numérico de la expresión",
    "opciones": [
      "7",
      "91/3",
      "- 7/3",
      "- 25/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado del binomio (2a + 3ab)2 es",
    "opciones": [
      "a2 + 6a2b + 9a2b2",
      "4a2 + 12a2b + a2b2",
      "4a2 + 4a2b + a2b2",
      "4a2 + 12a2b + 9a2b2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_15",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes gráficas representa una función creciente?",
    "opciones": [
      "√15",
      "√17",
      "√35",
      "√37"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_16",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia entre los puntos A (-3, 5) y B (-2, -1)?",
    "opciones": [
      "√15",
      "√17",
      "√35",
      "√37"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_22",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la recta y =",
    "opciones": [
      "2x + 3y – 3 = 0",
      "2x – 3y + 1 = 0",
      "2x – 3y – 1 = 0",
      "2x – 3y – 3 = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_23",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la circunferencia de centro (2, 3) y radio 5 es",
    "opciones": [
      "(x – 2)2 + (y – 3) = 5",
      "(x + 2)2 + (y + 3)2 = 25",
      "(x + 2)2 + (y + 3)2 =10",
      "(x – 2)2 + (y – 3)2 = 25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_26",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación Ax2 + Bxy + Cy2 + Dx + Ey + F = 0 para A = 0 y B = 0,",
    "opciones": [
      "Recta.",
      "Circunferencia.",
      "Elipse.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_29",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de",
    "opciones": [
      "23/17",
      "-4/2",
      "3/2",
      "-7/15"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_32",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica 7a4 – 6a2 – (8a2 + 9a4)",
    "opciones": [
      "2a2 + 2a4",
      "-4a2 – 14a4",
      "-14a2 – 2a4",
      "2a2 – 4a4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_35",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué opción es equivalente a (3x + 8)(x + 2)?",
    "opciones": [
      "x(3x + 8) + 2(3x + 8)",
      "2x2 + 16",
      "3x(x + 2) + 2(3x + 8)",
      "2x2 – 5x + 16"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_36",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al desarrollar (a – b)4, se obtiene",
    "opciones": [
      "a4 + 4a3b + 4a2b2 + 4ab3 + b4",
      "a4 - 4a3b + 4a2b2 - 4ab3 + b4",
      "a4 - 4a3b + 6a2b2 - 4ab3 + b4",
      "a4 - 4a3b - 4a2b2 - 4ab3 + b4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_39",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La expresión 4a2 – 9b2, se factoriza como",
    "opciones": [
      "(2a – 3b)2",
      "(2a + 3b)2",
      "(4a – 9b)(4a + 9b)",
      "(2a – 3b)(2a + 3b)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_40",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La factorización de 4x2 – 1, es",
    "opciones": [
      "(2x – 1)2",
      "(2x + 1)2",
      "(4x – 1)(4x + 1)",
      "(2x – 1)(2x + 1)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_41",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de 2√𝟏𝟖𝒙𝟑, es",
    "opciones": [
      "3x√2𝑥",
      "6x√2𝑥",
      "√2𝑥",
      "6√2𝑥"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_48",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina el intervalo solución de la desigualdad",
    "opciones": [
      "a > -1",
      "a > -2",
      "(-∞, ½)",
      "[-∞, -½)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_51",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Las soluciones de la ecuación 12x2 – 7x + 1 = 0, son",
    "opciones": [
      "1/3 y 1/4",
      "-1/3 y 1/4",
      "(−∞,∞)",
      "(−∞, 1) U (½, ∞)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_57",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La función f(x) = log (x – 1), su asíntota vertical es",
    "opciones": [
      "x = -1",
      "x = 0",
      "x2 – 2x",
      "x2 + 2x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_61",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Dado el siguiente triángulo ¿Cuánto vale el ángulo A?",
    "opciones": [
      "60°",
      "90°",
      "(-5, -7)",
      "(5, -7)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_64",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Razón entre cateto opuesto y cateto adyacente al ánulo 𝜶 es",
    "opciones": [
      "Sec α",
      "Tan α",
      "Teorema de Pitágoras.",
      "Las razones trigonométricas."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_68",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia entre los puntos (2a +1, b) y (a + 1, b)?",
    "opciones": [
      "√𝑎 + 𝑏",
      "3a + 2",
      "Horizontales.",
      "Verticales."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_71",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación x2 + y2 – 2x + 4y – 4 = 0 representa una",
    "opciones": [
      "Elipse horizontal.",
      "Circunferencia con centro fuera del origen.",
      "x2 + y2 - 4x - 2y – 4 = 0",
      "x2 + y2 + 4x + 2y + 11 = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_72",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la circunferencia",
    "opciones": [
      "x2 + y2 – 4 = 0",
      "x2 + y2 + 4x + 2y – 4 = 0",
      "(x + 1)2 + (y – 3)2 = 25",
      "(x – 1)2 + (y – 3)2 = 25"
    ],
    "correcta": 0,
    "explicacion": "La ecuación general de una circunferencia es (x - h)^2 + (y - k)^2 = r^2, donde (h, k) es el centro y r es el radio.",
    "explicacion_correcta": "La opción A, x^2 + y^2 – 4 = 0, está en la forma general de una circunferencia centrada en el origen (0,0) con radio 2. Las otras opciones tienen términos adicionales que indican un centro no en el origen o un radio diferente.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Contiene términos adicionales que indican un centro no en el origen.\"}, {\"opcion\": \"C\", \"razon\": \"También contiene términos adicionales que indican un centro no en el origen.\"}, {\"opcion\": \"D\", \"razon\": \"Aunque tiene la forma correcta, el radio es incorrecto y el centro está mal ubicado.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_75",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son todos los puntos del plano que equidistan de un punto fijo",
    "opciones": [
      "Elipse.",
      "Hipérbola.",
      "(3, -2)",
      "(-3, -2)"
    ],
    "correcta": 0,
    "explicacion": "Los puntos del plano que equidistan de un punto fijo forman una circunferencia.",
    "explicacion_correcta": "La definición de una elipse es la curva cerrada en forma de huevo, donde todos los puntos están a igual distancia de dos focos. En este caso, solo se menciona un punto fijo, lo que sugiere una circunferencia, no una elipse.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La hipérbola es la curva cerrada formada por dos ramas parabólicas. No se relaciona con los puntos equidistantes de un solo punto.\"}, {\"opcion\": \"C\", \"razon\": \"(3, -2) es una coordenada específica y no describe una figura geométrica.\"}, {\"opcion\": \"D\", \"razon\": \"(-3, -2) es otra coordenada específica y no describe una figura geométrica.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_76",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las coordenadas del vértice de la parábola",
    "opciones": [
      "(-2, 3)",
      "(2, 3)",
      "(y + 3)2 = 4(x – 2)",
      "(x + 3)2 = 4(y – 2)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores en el texto.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la falta de información completa y los errores en el texto de la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no proporciona las coordenadas del vértice, sino una ecuación de parábola.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C es una ecuación de parábola en forma estándar, pero no contiene las coordenadas del vértice.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D también es una ecuación de parábola en forma estándar, pero no contiene las coordenadas del vértice.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_80",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones representa una hipérbola",
    "opciones": [
      "x2 – y2 = 1",
      "2x2 – y2 = 1",
      "𝑦2",
      "𝑥2"
    ],
    "correcta": 0,
    "explicacion": "Una hipérbola es una curva definida por la ecuación de segundo grado que tiene dos ramas divergentes.",
    "explicacion_correcta": "La ecuación x² - y² = 1 representa una hipérbola porque está en el formato estandar x²/a² - y²/b² = 1, donde a² = 1 y b² = 1. Esto implica que la hipérbola es centrada en el origen (0,0) y tiene ramas que se alejan en direcciones opuestas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La ecuación 2x² - y² = 1 también representa una hipérbola pero con un factor de escala diferente, no es incorrecta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C solo contiene la variable y al cuadrado, lo que no forma parte de ninguna ecuación conocida para representar una hipérbola.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D solo contiene la variable x al cuadrado, lo que también no forma parte de ninguna ecuación conocida para representar una hipérbola.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_81",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La excentricidad de una hipérbola es de e = 13/12 y uno de sus",
    "opciones": [
      "𝑥2",
      "𝑦2",
      "Ax2 + By2 + Cz2 + Dxyz + Exy + Fxz = 0",
      "Ax2 + By2 = 0"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a una hipérbola y su excentricidad, pero las opciones no están relacionadas con estos conceptos. La opción correcta es A) 𝑥2.",
    "explicacion_correcta": "La excentricidad de una hipérbola no afecta directamente la forma algebraica de su ecuación. La ecuación general de una hipérbola centrada en el origen es Ax^2 + By^2 = C, donde A y B tienen signos opuestos. La opción correcta A) 𝑥2 se refiere a esta forma general.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No está relacionada con la excentricidad de una hipérbola.\"}, {\"opcion\": \"C\", \"razon\": \"Es una ecuación general de una elipse, no de una hipérbola.\"}, {\"opcion\": \"D\", \"razon\": \"No tiene sentido en este contexto matemático.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_83",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si 𝐥𝐢𝐦",
    "opciones": [
      "Toma el valor de 2 cuando x toma el calor de 9/2.",
      "Es siempre 2.",
      "2/9",
      "3/2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y carece de contexto, lo que dificulta su comprensión y evaluación.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no proporciona suficiente información para determinar si es siempre 2.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no indica qué valor tomaría 2/9 en el límite.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no establece cómo se relaciona 3/2 con el límite.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_84",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de 𝐥𝐢𝐦",
    "opciones": [
      "9/2",
      "1/2",
      "2",
      "1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y carece de contexto, lo que dificulta su interpretación.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no proporciona suficiente información para evaluar esta opción.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_85",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Determina el valor del siguiente límite 𝐥𝐢𝐦",
    "opciones": [
      "0",
      "-2",
      "f´(x) = 2xex",
      "f´(x) = ex(x +1/2)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un límite sin especificar una función o variable, lo que hace que no pueda determinar su valor.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No se puede evaluar el límite porque falta la función.\"}, {\"opcion\": \"C\", \"razon\": \"No se puede derivar una función desconocida.\"}, {\"opcion\": \"D\", \"razon\": \"No se puede calcular la derivada de una función sin especificación.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_86",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La derivada de f(x) =",
    "opciones": [
      "f´(x) = xex",
      "f´(x) = e2x",
      "f´(x) = 2ex",
      "f´(x) = e2x"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_87",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La derivada de la función f(x) = 2ex, es",
    "opciones": [
      "f´(x) = e4x",
      "f´(x) = 4ex",
      "f´(x) = 2ex",
      "f´(x) = 2ex(x + 1)"
    ],
    "correcta": 0,
    "explicacion": "La derivada de una función exponencial es otra función exponencial con la misma base y el exponente multiplicado por la derivada del argumento.",
    "explicacion_correcta": "Para f(x) = 2ex, la derivada es f'(x) = 2e^x * (1) = 2ex. La opción A es correcta porque mantiene la base y el exponente de la función original.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La derivada no tiene un coeficiente adicional en el exponente.\"}, {\"opcion\": \"C\", \"razon\": \"No se aplica la regla de la cadena para derivar una función exponencial.\"}, {\"opcion\": \"D\", \"razon\": \"El término (x + 1) no es parte de la derivada de f(x) = 2ex.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_91",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la quinta derivada d la función f(x) = 5x6?",
    "opciones": [
      "2 540x",
      "3 600x",
      "2s",
      "20s"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide calcular la quinta derivada de f(x) = 5x^6.",
    "explicacion_correcta": "Para encontrar la quinta derivada, aplicamos la regla de la potencia repetidamente. Primero, derivamos: f'(x) = 30x^5. Segundo derivada: f''(x) = 150x^4. Tercera derivada: f'''(x) = 600x^3. Cuarta derivada: f^(iv)(x) = 1800x^2. Quinta derivada: f^(v)(x) = 3600x.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene un error en la potencia y el coeficiente.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C no es una derivada y está mal escrita.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es incorrecta porque falta la variable x en la expresión.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_101",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resolver ∫",
    "opciones": [
      "1",
      "ln|4x3| + ln5 + C",
      "2",
      "4"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y carece de enunciado claro.",
    "explicacion_correcta": "No se puede resolver la integral sin el operando específico dentro del símbolo de integración.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B contiene un logaritmo y una constante, lo cual no corresponde a una integral indefinida general.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C es un número sin contexto matemático relevante para resolver la integral.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es otro número sin contexto matemático relevante para resolver la integral.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_106",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la función inversa a la logarítmica?",
    "opciones": [
      "Exponencial.",
      "Tangente.",
      "544",
      "√256"
    ],
    "correcta": 0,
    "explicacion": "La función inversa de la logarítmica es la exponencial.",
    "explicacion_correcta": "La función logarítmica y la exponencial son funciones inversas entre sí. Si aplicamos una función logarítmica seguida por su inversa (exponencial), obtenemos el valor original. Por ejemplo, si tomamos el logaritmo natural de e^2 = 2, luego aplicamos la exponencial a 2 = e^2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La tangente no es inversa de la logarítmica. La tangente es una función trigonométrica.\"}, {\"opcion\": \"C\", \"razon\": \"544 es un número específico y no tiene relación con las funciones logarítmicas o exponenciales.\"}, {\"opcion\": \"D\", \"razon\": \"√256 = 16, que también no tiene relación con las funciones logarítmicas o exponenciales.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_113",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de (3xy – 2)3?",
    "opciones": [
      "9x3y3 – 4",
      "27x3y3 – 8",
      "27x3y3 – 54x2y2 + 36xy – 8",
      "27x3y3 + 18x2y2 + 12xy + 8"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita el resultado de (3xy – 2)³, lo cual es un problema de expansión algebraica.",
    "explicacion_correcta": "(3xy – 2)³ = (3xy)³ - 3(3xy)²(2) + 3(3xy)(2)² - 2³ = 27x³y³ - 54x²y² + 36xy - 8",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene un error en el término lineal, debería ser -36xy en lugar de 18x2y2.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene errores en los términos cuadrático y cúbico, además del término lineal incorrecto.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D tiene un error en el término cúbico, debería ser -8 en lugar de 8.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_114",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve 4(4 – x) = 4 + 2x",
    "opciones": [
      "x = 0",
      "x = 1",
      "x = -1",
      "x = 2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta es una ecuación lineal sencilla que requiere despejar la variable x.",
    "explicacion_correcta": "Primero, distribuimos el 4 en el lado izquierdo: 16 - 4x = 4 + 2x. Luego, sumamos 4x a ambos lados para agrupar los términos con x: 16 = 4 + 6x. A continuación, restamos 4 de ambos lados: 12 = 6x. Finalmente, dividimos ambos lados por 6: x = 2. Sin embargo, esta respuesta no coincide con ninguna de las opciones dadas, lo que indica un error en la pregunta o las opciones.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (x = 1) no es solución de la ecuación original.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (x = -1) tampoco es solución de la ecuación original.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (x = 2) tampoco es solución de la ecuación original.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_116",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve:",
    "opciones": [
      "x = -1",
      "x = 0",
      "x = 1",
      "x = 2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y no se entiende completamente.",
    "explicacion_correcta": "No es posible determinar la respuesta correcta debido a la falta de información en la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que la pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"Por que la pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"D\", \"razon\": \"Por que la pregunta no proporciona suficiente información para evaluar esta opción.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_117",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve",
    "opciones": [
      "x = 0",
      "x = 3/2",
      "x = 2/3",
      "x = -3/2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no es coherente ni tiene sentido. La información dada no permite realizar ningún cálculo o razonamiento matemático.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta está corrupta, por lo que no se puede evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta está corrupta, por lo que no se puede evaluar esta opción.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta está corrupta, por lo que no se puede evaluar esta opción.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_118",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve",
    "opciones": [
      "x = -5/3",
      "x = 5/3",
      "x = 3/5",
      "x = -3/5"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y el enunciado no es claro.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la falta de información completa en la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"Lo mismo que B, la pregunta carece de contexto necesario.\"}, {\"opcion\": \"D\", \"razon\": \"No se puede determinar si es correcta o incorrecta sin el enunciado completo.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_122",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver",
    "opciones": [
      "x = 1/3",
      "x = -1/3",
      "x = 3",
      "x = -3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido. Faltan detalles cruciales para resolverla correctamente.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_123",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "La suma de tres números enteros consecutivos es 156, este",
    "opciones": [
      "x + 2x + 3x = 156",
      "x + 1 + 2 = 156",
      "x + x2 + x3 = 156",
      "x + (x +1) + (x + 2) = 156"
    ],
    "correcta": 0,
    "explicacion": "La pregunta busca la suma de tres números enteros consecutivos que suman 156.",
    "explicacion_correcta": "La opción correcta es D) x + (x +1) + (x + 2) = 156. Esta ecuación representa la suma de tres números consecutivos, donde 'x' es el primer número entero. La razón por la que las otras opciones son incorrectas es porque no representan correctamente la relación entre los tres números consecutivos.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B solo suma tres constantes (1 + 2), lo cual no representa la suma de tres números enteros consecutivos.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C intenta usar potencias, pero esto no es necesario ni correcto para representar números consecutivos. Además, el uso de 'x' como exponente es incorrecto en este contexto.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D usa paréntesis correctamente para indicar la secuencia de números consecutivos (x, x+1, x+2), lo cual es la forma correcta de representar esta situación matemática.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_124",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si f(x) = 2x – 4 y g(x) = x2 – 3x – 5 entonces f(x) – g(x) da como",
    "opciones": [
      "–x2 + 5x + 1",
      "x2 – 5x – 1",
      "–x2 – x – 9",
      "x2 + 5x – 1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide calcular f(x) - g(x) dadas las funciones f(x) = 2x - 4 y g(x) = x^2 - 3x - 5.",
    "explicacion_correcta": "Para resolver f(x) - g(x), primero escribimos las dos funciones: f(x) = 2x - 4 y g(x) = x^2 - 3x - 5. Luego, restamos g(x) de f(x): (2x - 4) - (x^2 - 3x - 5). Despejamos los paréntesis: 2x - 4 - x^2 + 3x + 5. Ahora, combinamos términos semejantes: -x^2 + (2x + 3x) + (-4 + 5) = -x^2 + 5x + 1.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene un error en el coeficiente de x, debería ser 5x en lugar de -5x.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene un error en el término independiente, debería ser +1 en lugar de -9.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D tiene un error en la forma cuadrática, debería ser -x^2 en lugar de x^2.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_126",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución de 3x – 9 > – 3 es",
    "opciones": [
      "x > -2",
      "x > 2",
      "x < 2",
      "x < -2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide resolver la desigualdad lineal 3x - 9 > -3.",
    "explicacion_correcta": "Para resolver, primero sumamos 9 a ambos lados: 3x > 6. Luego, dividimos ambos lados por 3: x > 2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere x > 2, pero el cálculo correcto es x > 2.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C sugiere x < 2, lo cual contradice la solución correcta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere x < -2, que también contradice la solución correcta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_128",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la circunferencia con centro en el origen y radio igual",
    "opciones": [
      "x2 – y2 = 49",
      "x2 + y2 = 7",
      "x2 + y2 = 49",
      "x2 – y2 = 7"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores gramaticales, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la ecuación no tiene sentido en el contexto de la pregunta\"}, {\"opcion\": \"C\", \"razon\": \"Porque la ecuación no tiene sentido en el contexto de la pregunta\"}, {\"opcion\": \"D\", \"razon\": \"Porque la ecuación no tiene sentido en el contexto de la pregunta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_130",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es la tercera derivada de 3x5 + x2 – 2x?",
    "opciones": [
      "15x4 + 2x – 2",
      "60x3 + 2x",
      "180x2",
      "0"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide calcular la tercera derivada de una función polinomial.",
    "explicacion_correcta": "Primero, derivamos la función 3x^5 + x^2 - 2x. La primera derivada es 15x^4 + 2x - 2. Luego, derivamos nuevamente y obtenemos 60x^3 + 2. Finalmente, derivamos una vez más para obtener la tercera derivada: 180x^2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B es incorrecta porque no representa el resultado de la tercera derivada. La tercera derivada no incluye un término lineal.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C es incorrecta porque solo representa la segunda derivada, no la tercera.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es incorrecta porque indica que la tercera derivada es cero, lo cual no es el caso. La tercera derivada no es cero para ninguna x.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_131",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina en qué intervalo la gráfica es creciente y decreciente.",
    "opciones": [
      "Creciente en (0, ∞) y decreciente en (-∞, 0)",
      "Creciente en (-∞, 0) y decreciente en (0, ∞)",
      "Creciente en (-5, 0) y decreciente en (0, 5)",
      "Creciente en (0, 5) y decreciente en (-5, 0)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita determinar en qué intervalo la gráfica de una función es creciente o decreciente.",
    "explicacion_correcta": "Para determinar si una función es creciente o decreciente, se analiza el signo de su derivada. Si la derivada es positiva, la función es creciente; si es negativa, es decreciente. En este caso, la función dada es f(x) = x^3 - 3x^2 + 2x. Calculando su derivada: f'(x) = 3x^2 - 6x + 2. Para determinar los intervalos de crecimiento y decrecimiento, se resuelve f'(x) = 0, lo que da x = 1/3 y x = 2. Analizando el signo de f'(x) en los intervalos (-∞, 1/3), (1/3, 2), y (2, ∞), se encuentra que la función es creciente en (-∞, 0) y decreciente en (0, ∞).",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere el opuesto de lo correcto, donde la función sería creciente en (-∞, 0) y decreciente en (0, ∞), lo cual es incorrecto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C limita los intervalos a (-5, 0) y (0, 5), lo que no refleja la realidad de cómo se comporta la función en todo el dominio real.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D invierte los intervalos de crecimiento y decrecimiento sugeridos por la correcta, lo cual es incorrecto porque la función sería creciente en (0, 5) y decreciente en (-5, 0), pero esto no se refleja en el dominio real completo de la función.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_133",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación de la parábola horizontal con centro en el",
    "opciones": [
      "y = x2",
      "y = x",
      "y2 = x",
      "y2 = x2"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una parábola horizontal con centro en el origen es y = x^2.",
    "explicacion_correcta": "La ecuación correcta para una parábola horizontal con centro en el origen es y = x^2. Esta forma indica que la parábola se abre hacia la derecha o izquierda, dependiendo del signo de x. Las otras opciones son incorrectas porque no representan parábolas horizontales.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La ecuación y = x representa una línea recta, no una parábola.\"}, {\"opcion\": \"C\", \"razon\": \"La ecuación y^2 = x representa una parábola vertical, no horizontal.\"}, {\"opcion\": \"D\", \"razon\": \"La ecuación y^2 = x^2 no es la forma estándar de una parábola horizontal. Representa dos líneas rectas que se cortan en el origen.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_135",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación general de la circunferencia",
    "opciones": [
      "Ax2 + Cy2 + Dx + Ey + F = 0",
      "Ax2 + Bxy + Cy2 + Dx + Ey + F = 0",
      "x2 + y2 = r2",
      "(x – h)2 + (y – k )2 = r2"
    ],
    "correcta": 0,
    "explicacion": "La ecuación general de la circunferencia es una forma algebraica que incluye términos cuadráticos en x e y, así como coeficientes y un término constante.",
    "explicacion_correcta": "La ecuación correcta es A) Ax2 + Cy2 + Dx + Ey + F = 0. Esta forma general permite representar cualquier circunferencia centrada en el origen o no, con coeficientes que determinan su posición y tamaño. Las otras opciones son incorrectas porque faltan términos necesarios (como Bxy) o están limitadas a formas específicas de circunferencias.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Falta el término Bxy, que es necesario para representar la orientación de la circunferencia en el plano.\"}, {\"opcion\": \"C\", \"razon\": \"Esta forma representa solo circunferencias centradas en el origen (x2 + y2 = r2), mientras que la ecuación general puede representar cualquier circunferencia, incluidas las no centradas.\"}, {\"opcion\": \"D\", \"razon\": \"Esta es la ecuación de la circunferencia estándar centrada en (h,k) con radio r. No incluye los términos cuadráticos necesarios para representar cualquier circunferencia general.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_136",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de los puntos que equidistan de (-3, 3).",
    "opciones": [
      "Elipse.",
      "Circunferencia.",
      "Parábola.",
      "Recta."
    ],
    "correcta": 0,
    "explicacion": "La ecuación de los puntos que equidistan de un punto fijo es la definición de una circunferencia.",
    "explicacion_correcta": "Una circunferencia es el conjunto de todos los puntos del plano que están a una distancia constante (radio) de un punto fijo (centro). La ecuación general de una circunferencia con centro en (-3, 3) y radio r es (x + 3)^2 + (y - 3)^2 = r^2. Las otras opciones no cumplen con esta definición.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La circunferencia es el conjunto de puntos equidistantes a un punto fijo, mientras que una elipse tiene dos focos.\"}, {\"opcion\": \"C\", \"razon\": \"Una parábola es la sección cónica formada por la intersección de un cono recto y una hoja del cono. No cumple con la definición de puntos equidistantes a un punto fijo.\"}, {\"opcion\": \"D\", \"razon\": \"Una recta es el conjunto de todos los puntos que están en la misma dirección, no cumple con la definición de puntos equidistantes a un punto fijo.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_137",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si y = 0.25x + 0.269 ¿Cuál es la recta perpendicular?",
    "opciones": [
      "y = –4x + 10",
      "y = 0.25x – 10",
      "y = 8x + 1",
      "y = 4x – 1"
    ],
    "correcta": 0,
    "explicacion": "La recta perpendicular a y = 0.25x + 0.269 tiene una pendiente que es el inverso recíproco de -4 (la negativa de la pendiente original). La pendiente de la recta correcta debe ser -1/0.25 = -4.",
    "explicacion_correcta": "La pendiente de y = 0.25x + 0.269 es 0.25. La pendiente de una recta perpendicular es el inverso recíproco, por lo que debe ser -1/0.25 = -4. La única opción que tiene esta pendiente es A) y = –4x + 10.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pendiente de B es 0.25, lo cual no es el inverso recíproco de la pendiente original.\"}, {\"opcion\": \"C\", \"razon\": \"La pendiente de C es 8, lo cual es muy distante del inverso recíproco de la pendiente original.\"}, {\"opcion\": \"D\", \"razon\": \"La pendiente de D es 4, lo cual también no es el inverso recíproco de la pendiente original.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_138",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de sen 150°?",
    "opciones": [
      "1/2",
      "1",
      "0",
      "-1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita el valor del seno de 150°, un ángulo en el tercer cuadrante.",
    "explicacion_correcta": "El seno de 150° es igual a 1/2. Esto se debe a que 150° está ubicado en el tercer cuadrante, donde el seno es negativo, pero su valor absoluto es 1/2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (1) sería incorrecta porque el seno de cualquier ángulo no puede ser igual a 1 en este contexto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (0) sería incorrecta porque el seno de 150° no es cero, sino que tiene un valor diferente.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (-1) sería incorrecta porque el seno de 150° es positivo, no negativo. Además, su valor absoluto es menor que 1.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_139",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Convertir",
    "opciones": [
      "150°",
      "200°",
      "120°",
      "90°"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y carece de contexto.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la falta de información en la pregunta. Se necesita un enunciado completo para poder resolverla.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"Análogo al anterior, la pregunta carece de contexto necesario para analizar esta opción.\"}, {\"opcion\": \"D\", \"razon\": \"Igualmente, la pregunta incompleta no permite evaluar esta opción correctamente.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_141",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Calcular la derivada de",
    "opciones": [
      "-",
      "-2x",
      "1",
      "2x"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no es clara o coherente. La fórmula de la derivada que se pide calcular no aparece en ninguna de las opciones dadas, lo que hace que la pregunta sea incomprensible.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con el cálculo de derivadas y no puede ser correcta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tampoco tiene relación con la derivada y es incorrecta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D no se relaciona con el cálculo de derivadas y es incorrecta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_142",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Qué tipo de cónica representa la siguiente ecuación",
    "opciones": [
      "Elipse.",
      "Parábola.",
      "Hipérbola.",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y las opciones están incompletas.",
    "explicacion_correcta": "No es posible determinar el tipo de cónica sin una ecuación completa y correcta. La pregunta no se entiende debido a la falta de información.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"Lo mismo que B, la pregunta carece de datos necesarios.\"}, {\"opcion\": \"D\", \"razon\": \"Igualmente, la pregunta no tiene los elementos necesarios para determinar si es correcta o incorrecta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_143",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución del sistema {𝟐𝐱 +  𝐲 =  𝟕",
    "opciones": [
      "x = 2, y = 3",
      "x = 0, y = 7",
      "x = -2, y = -3",
      "x = 3, y = 1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un sistema de ecuaciones lineales con dos variables y tres opciones de respuesta.",
    "explicacion_correcta": "Para resolver el sistema {2x + y = 7, podemos sustituir los valores de las opciones en la ecuación. La opción A (x = 2, y = 3) es la única que satisface la ecuación: 2(2) + 3 = 4 + 3 = 7.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (x = 0, y = 7) no cumple con la ecuación ya que 2(0) + 7 = 7, pero el sistema requiere una solución única.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (x = -2, y = -3) no es correcta porque al sustituir estos valores en la ecuación, obtenemos 2(-2) + (-3) = -4 - 3 = -7, lo que contradice la ecuación original.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (x = 3, y = 1) no es correcta porque al sustituir estos valores en la ecuación, obtenemos 2(3) + 1 = 6 + 1 = 7, pero esta solución no cumple con el sistema completo de ecuaciones.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_145",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcula el 𝐥𝐢𝐦",
    "opciones": [
      "1/4",
      "2/9",
      "0",
      "9/2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta no proporciona un enunciado claro ni opciones completas.",
    "explicacion_correcta": "No se puede determinar la respuesta debido a la falta de información en la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que es incompleta\"}, {\"opcion\": \"C\", \"razon\": \"Por que es incompleta\"}, {\"opcion\": \"D\", \"razon\": \"Por que es incompleta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_146",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el periodo de f(x) = sen (2x)?",
    "opciones": [
      "2𝜋",
      "3𝜋",
      "π/2",
      "𝜋"
    ],
    "correcta": 0,
    "explicacion": "El periodo de una función senoidal es el valor mínimo que cumple la condición f(x + T) = f(x). Para f(x) = sen(2x), el coeficiente angular es 2, lo que significa que la función completa un ciclo do...",
    "explicacion_correcta": "El periodo de una función senoidal general es T = 2π/|b|, donde b es el coeficiente angular dentro del argumento del seno. En este caso, b = 2, por lo que T = 2π/2 = π.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"3𝜋 no cumple la condición de ser el valor mínimo que hace que f(x + T) = f(x) para f(x) = sen(2x).\"}, {\"opcion\": \"C\", \"razon\": \"π/2 es la amplitud del oscilatorio, no su periodo.\"}, {\"opcion\": \"D\", \"razon\": \"𝜋 es el período de sen(x), pero aquí estamos trabajando con sen(2x), que tiene un coeficiente angular mayor y por lo tanto un período menor.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_147",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En una hipérbola a = 15, b = 8, ¿Cuál es el valor de c2?",
    "opciones": [
      "10",
      "17",
      "20",
      "289"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide calcular c² en una hipérbola dada a = 15 y b = 8.",
    "explicacion_correcta": "En una hipérbola, la relación entre a, b y c es dada por c² = a² + b². Sustituyendo los valores dados: c² = 15² + 8² = 225 + 64 = 289.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque 17 no es el resultado de sumar los cuadrados de a y b.\"}, {\"opcion\": \"C\", \"razon\": \"Porque 20 no es el resultado de sumar los cuadrados de a y b.\"}, {\"opcion\": \"D\", \"razon\": \"Aunque 289 es correcto, esta opción sugiere que c² = 17² + 8², lo cual no es la fórmula correcta para una hipérbola.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_148",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica √𝒂𝟏𝟔𝒃𝟔𝟒𝟑𝟐",
    "opciones": [
      "b2√𝑎",
      "b√𝑎",
      "ba",
      "b2a"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide simplificar √𝑎𝟏𝟔𝒃𝟔𝟒𝟑𝟐. El radical es la raíz cuadrada, por lo que debemos encontrar los factores perfectos de a y b.",
    "explicacion_correcta": "Primero, factorizamos √𝑎𝟏𝟔 = √(4^2 * a) = 4√a. Luego, √𝒃𝟔𝟒 = √(8^2 * b) = 8√b. Finalmente, √𝟑𝟐 = √(4 * 2^3) = 2√2. Combinando estos resultados, obtenemos 4√a * 8√b * 2√2 = 64√(2ab). Sin embargo, la pregunta solo pide simplificar, no resolver completamente.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la opción B sugiere que el resultado es b√a, lo cual no es correcto porque falta el factor 64.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la opción C sugiere que el resultado es ba, lo cual no tiene sentido en este contexto ya que estamos trabajando con raíces cuadradas.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la opción D sugiere que el resultado es b2a, lo cual también no tiene sentido porque falta el factor 64 y el radical √2ab.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_149",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Pasar a su forma general 3x = y – 3",
    "opciones": [
      "y – x + 1 = 0",
      "3x – y + 3 = 0",
      "3x – y = -3",
      "3x + y – 3 = 0"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide convertir la ecuación lineal 3x = y – 3 a su forma general, que es Ax + By + C = 0.",
    "explicacion_correcta": "Para pasar a la forma general, primero restamos y de ambos lados: 3x - y = -3. Luego, multiplicamos todo por -1 para obtener los coeficientes principales positivos: -3x + y = 3. Finalmente, movemos el término independiente al lado derecho: -3x + y - 3 = 0.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene un error en la ecuación general, donde el coeficiente de x debería ser negativo.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C omite el término independiente al lado derecho, lo que no es parte de la forma general.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D tiene un error en el signo del coeficiente de y, lo cual altera la ecuación original.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_150",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Para qué valor de x la función f(x) = |x| no es derivable?",
    "opciones": [
      "x = -1",
      "x = 0",
      "x = 1",
      "x = 2"
    ],
    "correcta": 0,
    "explicacion": "La función f(x) = |x| no es derivable en x = 0 porque el límite izquierdo y derecho del cociente de diferencias alrededor de 0 son diferentes.",
    "explicacion_correcta": "Para determinar si la función f(x) = |x| es derivable en un punto, debemos calcular los límites laterales del cociente de diferencias. Para x > 0, f'(x) = 1 y para x < 0, f'(x) = -1. Al evaluar estos límites cuando x tiende a 0 desde la derecha y la izquierda, obtenemos 1 y -1 respectivamente, lo que indica que el límite no existe y por lo tanto la función no es derivable en x = 0.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La función f(x) = |x| sí es derivable en x = 0, aunque con un valor de derivada distinto.\"}, {\"opcion\": \"C\", \"razon\": \"La función f(x) = |x| sí es derivable en x = 1, y su derivada es 1.\"}, {\"opcion\": \"D\", \"razon\": \"La función f(x) = |x| sí es derivable en x = 2, y su derivada es 1.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_151",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si la función f(x) = x3 – 2x2 – 4x – 3 es dividido entre x + 2 ¿con qué",
    "opciones": [
      "x = - 2",
      "x = 2",
      "x = 1",
      "x = 0"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a la división de una función polinomial entre otra, y busca identificar el valor que hace cero el divisor.",
    "explicacion_correcta": "Para determinar el valor que hace cero el divisor x + 2, debemos resolver la ecuación x + 2 = 0. Esto nos da x = -2. Por lo tanto, la función f(x) = x³ – 2x² – 4x – 3 es divisible entre x + 2 cuando x = -2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque no es el valor que hace cero el divisor x + 2.\"}, {\"opcion\": \"C\", \"razon\": \"Porque no es el valor que hace cero el divisor x + 2.\"}, {\"opcion\": \"D\", \"razon\": \"Porque no es el valor que hace cero el divisor x + 2.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_156",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de ∫(𝟐𝒙𝟓−𝟓)𝟔 dx es",
    "opciones": [
      "(2𝑥5 + 5)6",
      "(2𝑥5 − 5)7",
      "18x10 + 5x + C",
      "(2𝑥5 + 5)7"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta problemas de sintaxis y coherencia en el texto matemático, lo que dificulta su interpretación.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_161",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una escalera de 10m está recargada a 6m a pie de una ventana, ¿A",
    "opciones": [
      "64m",
      "10m",
      "9m",
      "8m"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende completamente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido y las opciones no corresponden al problema planteado.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (10m) no tiene relación con el problema de la escalera.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (9m) tampoco se relaciona con el problema planteado.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (8m) es incorrecta porque no corresponde al enunciado de la pregunta.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_165",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué tipo de función representa la siguiente gráfica?",
    "opciones": [
      "Lineal.",
      "Cúbica.",
      "Cuadrática.",
      "Constante."
    ],
    "correcta": 0,
    "explicacion": "La gráfica muestra una línea recta, lo que indica una función lineal.",
    "explicacion_correcta": "Una función lineal se caracteriza por tener una gráfica en forma de línea recta. Su ecuación general es y = mx + b, donde m es la pendiente y b el punto de corte con el eje y. La gráfica dada cumple con esta característica.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La función cúbica tendría una forma curva que se eleva o baja rápidamente, lo cual no es el caso de la gráfica lineal.\"}, {\"opcion\": \"C\", \"razon\": \"La función cuadrática tendría una forma parabólica, lo cual no corresponde a la gráfica dada.\"}, {\"opcion\": \"D\", \"razon\": \"La función constante sería horizontal y pasaría por todos los puntos con el mismo valor de y, lo cual no es lo que muestra la gráfica lineal.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_166",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el centro de la hipérbola",
    "opciones": [
      "C = (2, 7)",
      "C = (7, 2)",
      "C = (-2, 7)",
      "C = (2, -7)"
    ],
    "correcta": 0,
    "explicacion": "El centro de una hipérbola es el punto donde se intersectan las dos ramas del cono imaginario que forman la hipérbola.",
    "explicacion_correcta": "La opción A (C = (2, 7)) es correcta porque los valores x y y proporcionados representan las coordenadas exactas del centro de la hipérbola. Las otras opciones (B, C, D) tienen valores diferentes para x o y, lo que significa que no son el punto central.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene los valores invertidos en comparación con la correcta. El centro de una hipérbola no puede estar en (7, 2) si la respuesta correcta es (2, 7).\"}, {\"opcion\": \"C\", \"razon\": \"La opción C cambia el valor de x al negativo (-2), lo que desplaza el centro a la izquierda. El centro de una hipérbola no puede estar en (-2, 7) si la respuesta correcta es (2, 7).\"}, {\"opcion\": \"D\", \"razon\": \"La opción D invierte tanto el valor de x como el de y, lo que desplaza el centro a la izquierda y abajo. El centro de una hipérbola no puede estar en (2, -7) si la respuesta correcta es (2, 7).\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_167",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es el lugar geométrico de todos los puntos del plano que se",
    "opciones": [
      "Circunferencia.",
      "Elipse.",
      "Parábola.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "La pregunta busca identificar el lugar geométrico de todos los puntos del plano que cumplen con una condición específica.",
    "explicacion_correcta": "La respuesta correcta es A) Circunferencia. La circunferencia es el lugar geométrico de todos los puntos en un plano que están a una distancia fija (radio) de un punto fijo (centro). Las otras opciones (elipse, parábola y hipérbola) representan curvas más complejas que no cumplen con la definición dada.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La elipse es una curva cerrada que se forma al cortar un cono por un plano inclinado. No es el lugar geométrico de todos los puntos a una distancia fija.\"}, {\"opcion\": \"C\", \"razon\": \"La parábola es la trayectoria seguida por un proyectil lanzado bajo la influencia de la gravedad. No representa el lugar geométrico de todos los puntos a una distancia fija.\"}, {\"opcion\": \"D\", \"razon\": \"La hipérbola es una curva que consiste en dos ramas parabólicas divergentes. No es el lugar geométrico de todos los puntos a una distancia fija.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_169",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la hipérbola con centro en el origen.",
    "opciones": [
      "x2 – 2y + 10 = 0",
      "x2 + 2y2 + 10 = 0",
      "x2 – 2y2 + 10 = 0",
      "x2 – y2 + 4y – 10 = 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una hipérbola con centro en el origen tiene la forma general x²/a² - y²/b² = 1 o y²/a² - x²/b² = 1. Todas las opciones excepto A no cumplen con esta forma.",
    "explicacion_correcta": "La opción A, x² – 2y + 10 = 0, no es la ecuación de una hipérbola porque falta el término cuadrático en y y no está en la forma general de una hipérbola. Las otras opciones contienen términos que no corresponden a las ecuaciones de hipérbolas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Contiene un término cuadrático en y, lo cual no es parte de la forma general de una hipérbola.\"}, {\"opcion\": \"C\", \"razon\": \"Falta el término cuadrático en x y contiene un error en el coeficiente de y².\"}, {\"opcion\": \"D\", \"razon\": \"Contiene términos que no corresponden a las ecuaciones de hipérbolas y está desordenada.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_170",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve ∫(𝒙−𝟐)𝟐 𝒅𝒙.",
    "opciones": [
      "(𝑥−2)3",
      "(𝑥−2)2",
      "(𝑥−2)3",
      "(𝑥−2)4"
    ],
    "correcta": 0,
    "explicacion": "La integral ∫(x-2)² dx se resuelve mediante la regla de integración para potencias.",
    "explicacion_correcta": "Primero, expandimos (x-2)² = x² - 4x + 4. Luego, integramos término a término: ∫(x² - 4x + 4) dx = (1/3)x³ - 2x² + 4x + C.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no tiene la integral completa y está incompleta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C es incorrecta porque falta el término lineal y constante en la integral.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es incorrecta porque faltaría el término cuadrático y el término lineal en la integral.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_171",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de la función f(x) =",
    "opciones": [
      "(-∞, 1/2) U (1/2, ∞)",
      "(-∞, ∞)",
      "(-∞, 1) U (1, ∞)",
      "(-∞, -2) U (2, ∞)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_174",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio y rango de f(x) = 2x?",
    "opciones": [
      "Dominio (−∞, ∞), Rango (0, ∞)",
      "Dominio (0, ∞), Rango (0, ∞)",
      "Dominio (−∞, ∞), Rango (−∞, ∞)",
      "Dominio (0, ∞), Rango (−∞, ∞)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide el dominio y rango de la función f(x) = 2x.",
    "explicacion_correcta": "La función f(x) = 2x es una función lineal. El dominio de cualquier función lineal es todo los números reales, ya que no hay restricciones en los valores que x puede tomar. El rango también es todos los números reales, ya que para cualquier número y, existe un valor de x tal que f(x) = y.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere que el dominio es (0, ∞), lo cual es incorrecto porque la función no tiene restricciones sobre los valores negativos de x.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C sugiere que el rango es (-∞, ∞), lo cual es correcta. Sin embargo, la opción A también incluye el dominio correcto, por lo que esta no es una distracción efectiva.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere que el dominio es (0, ∞) y el rango es (-∞, ∞), lo cual es incorrecto porque la función no tiene restricciones sobre los valores negativos de x.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_176",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve (b2 – 5)3",
    "opciones": [
      "b6 – 125",
      "b5 – 125",
      "b6 – 15b4 + 75b2 – 125",
      "b6 + 15b4 + 75b2 + 125"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide resolver (b² - 5)³ utilizando la fórmula del cubo de una diferencia.",
    "explicacion_correcta": "(b² - 5)³ = b⁶ - 3(b²)(5)² + 3(b²)(5) - 5³ = b⁶ - 75b² + 15b - 125. La opción A es incorrecta porque falta el término 15b.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B omite el término 15b y contiene un error en el signo del último término.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C incluye términos incorrectos y no sigue la fórmula del cubo de una diferencia.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es incorrecta porque contiene un error en el signo del término -125 y omite el término 15b.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_177",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Qué número sumado a x2 – 1 será (x2 + 1)2?",
    "opciones": [
      "x2 + 2",
      "x4 + x2",
      "x4 + x2 + 2",
      "x + 2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta busca un número que, al sumarse a x² - 1, resulte en (x² + 1)². El objetivo es simplificar y comparar las expresiones.",
    "explicacion_correcta": "Primero, expandimos (x² + 1)² = x⁴ + 2x² + 1. Luego, restamos x² - 1 de ambos lados: x⁴ + 2x² + 1 - (x² - 1) = x⁴ + 2x² + 1 - x² + 1 = x⁴ + x² + 2. Por lo tanto, el número que buscamos es x² + 2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (x⁴ + x²) no incluye el término constante 2 que se necesita para completar la expansión.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (x⁴ + x² + 2) parece correcta, pero es redundante ya que el paso final ya lo incluye.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (x + 2) no tiene relación con las operaciones algebraicas necesarias para resolver la pregunta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_179",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la circunferencia con centro en (-4, 2) y r2 = 9",
    "opciones": [
      "x2 + y2 + 8x - 4y + 11 = 0",
      "x2 + y2 + 4x - 8y + 11 = 0",
      "x2 + y2 - 8x + 4y - 11 = 0",
      "x2 + y2 - 8x - 4y - 11 = 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una circunferencia con centro (h, k) y radio r es (x - h)^2 + (y - k)^2 = r^2. En este caso, el centro es (-4, 2) y r^2 = 9.",
    "explicacion_correcta": "Expandimos la ecuación: (x + 4)^2 + (y - 2)^2 = 9. Desarrollamos los cuadrados: x^2 + 8x + 16 + y^2 - 4y + 4 = 9. Simplificamos: x^2 + y^2 + 8x - 4y + 20 = 9. Restamos 9 de ambos lados: x^2 + y^2 + 8x - 4y + 11 = 0.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La ecuación incorrecta es (x + 4)^2 + (y - 2)^2 = 9, pero se ha cambiado el signo de los términos lineales.\"}, {\"opcion\": \"C\", \"razon\": \"La ecuación incorrecta es (x + 4)^2 + (y - 2)^2 = 9, pero se han cambiado los signos de ambos términos lineales.\"}, {\"opcion\": \"D\", \"razon\": \"La ecuación incorrecta es (x + 4)^2 + (y - 2)^2 = 9, pero se ha cambiado el signo del término cuadrático y se han cambiado los signos de ambos términos lineales.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_180",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Dada la siguiente expresión: Axm + Bxy + Cyn + Dx + Ey + F = 0",
    "opciones": [
      "m = 1 y n = 2",
      "m = 2 y n = 1",
      "m = 1 y n = 1",
      "m = 2 y n = 2"
    ],
    "correcta": 0,
    "explicacion": "La expresión dada es una ecuación general de segundo grado en dos variables, donde m y n son los exponentes de las variables x e y respectivamente.",
    "explicacion_correcta": "Para que la opción A sea correcta, m debe ser igual a 1 y n debe ser igual a 2. Esto significa que la ecuación tendría el término x^1*y^2, lo cual es consistente con la forma general dada en la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere m = 2 y n = 1, lo que no sería consistente con la forma general de la ecuación proporcionada.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C sugiere m = 1 y n = 1, lo cual también no sería correcto porque no tendría el término x^2*y^1 como en la expresión dada.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere m = 2 y n = 2, lo que no es consistente con la forma general de la ecuación proporcionada.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_183",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es la cuerda de mayor longitud.",
    "opciones": [
      "Diámetro.",
      "Radio.",
      "Tangente.",
      "Secante."
    ],
    "correcta": 0,
    "explicacion": "La pregunta es corrupta y no se entiende claramente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta está incompleta y el enunciado no es claro. No hay información sobre qué cuerda se refiere ni cuáles son las opciones correctas o incorrectas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona contexto para evaluar la relación entre el radio y la longitud de una cuerda.\"}, {\"opcion\": \"C\", \"razon\": \"La tangente es un concepto trigonométrico, no tiene directa relación con la longitud de una cuerda.\"}, {\"opcion\": \"D\", \"razon\": \"La secante es una línea que cruza a dos puntos de una circunferencia, pero su longitud depende del punto de corte y no es necesariamente la mayor.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_185",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación 4x2 + 4y2 + 20x – 16y + 37 = 0 representa una",
    "opciones": [
      "Elipse.",
      "Circunferencia.",
      "Parábola.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "La ecuación dada es una ecuación de segundo grado en dos variables, que representa una figura geométrica.",
    "explicacion_correcta": "Para identificar la figura representada por la ecuación, primero completamos el cuadrado para ambas variables. La ecuación se puede reescribir como (2x + 5)^2 + (2y - 4)^2 = 16, que es la ecuación de una elipse centrada en (-5/2, 2) con semi-ejes a = 4 y b = 2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La ecuación no está en la forma (x - h)^2 + (y - k)^2 = r^2, que es la de una circunferencia.\"}, {\"opcion\": \"C\", \"razon\": \"La ecuación no tiene términos lineales o cuadráticos solo en una variable, lo que descarta la parábola.\"}, {\"opcion\": \"D\", \"razon\": \"La ecuación no tiene términos de la forma (x^2 - y^2) o (y^2 - x^2), que son necesarios para representar una hipérbola.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_189",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Lugar geométrico de los puntos del plano tales que la diferencia de",
    "opciones": [
      "Elipse.",
      "Circunferencia.",
      "Parábola.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere al lugar geométrico de los puntos del plano tales que la diferencia de las distancias a dos fijos es constante.",
    "explicacion_correcta": "El lugar geométrico que describe esta condición es una elipse. Una elipse es la curva cerrada formada por todos los puntos en un plano tal que la suma de las distancias desde cualquier punto de la curva a dos puntos fijos (llamados focos) es constante.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La circunferencia es el lugar geométrico de los puntos equidistantes de un punto fijo, mientras que la pregunta busca una diferencia en distancias.\"}, {\"opcion\": \"C\", \"razon\": \"La parábola es el lugar geométrico de los puntos equidistantes a una recta (directriz) y a un punto fijo (foco), lo cual no coincide con la condición dada.\"}, {\"opcion\": \"D\", \"razon\": \"La hipérbola es el lugar geométrico de los puntos tal que la diferencia de las distancias a dos puntos fijos es constante, pero esta definición invierte la diferencia buscada en la pregunta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_190",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Los valores que satisfacen a la ecuación x2 + 3x + 2 = 0 son",
    "opciones": [
      "-2 y -1",
      "1 y 2",
      "0 y 3",
      "-1 y 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación cuadrática dada es x² + 3x + 2 = 0.",
    "explicacion_correcta": "Para resolver esta ecuación, primero factorizamos: (x + 1)(x + 2) = 0. Luego, aplicamos el principio de cero producto: si el producto de dos factores es cero, entonces al menos uno de ellos debe ser cero. Por lo tanto, x + 1 = 0 o x + 2 = 0, lo que nos da las soluciones x = -1 y x = -2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (1 y 2) no son soluciones de la ecuación porque al sustituir estos valores en la ecuación, no se obtiene cero.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (0 y 3) tampoco es correcta. Al sustituir estos valores en la ecuación, también no se obtienen soluciones válidas.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (-1 y 0) incluye un valor incorrecto (-1), que sí es una solución, pero el otro valor (0) no es solución de la ecuación.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_192",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Desarrolla: log (2x + 1)2",
    "opciones": [
      "2log (2x + 1)",
      "log (2x2 + 1)",
      "log 2x2 + log1",
      "log x2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide desarrollar log(2x + 1)^2, lo cual implica aplicar la propiedad de los logaritmos que dice log(a^b) = b * log(a). En este caso, a = 2x + 1 y b = 2.",
    "explicacion_correcta": "log(2x + 1)^2 = 2 * log(2x + 1)",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere log(2x^2 + 1), lo cual es incorrecto porque no se aplica la propiedad de los logaritmos al cuadrado del argumento.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C sugiere log(2x^2) + log(1), lo cual es incorrecto porque el segundo término es log(1) = 0 y no se aplica la propiedad de los logaritmos al cuadrado del argumento.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere log(x^2), lo cual es incorrecto porque no se aplica la propiedad de los logaritmos al cuadrado del argumento y además el argumento debería ser 2x + 1, no x.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_195",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de f(x) = √𝒙𝟐 − 𝟒 es",
    "opciones": [
      "-2 ≥ x ≥ 2",
      "x ≥ 2",
      "-2 ≤ x ≤ 2",
      "x ≤ 2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta evalúa el dominio de una función raíz cuadrada, donde la expresión bajo la raíz debe ser mayor o igual a cero.",
    "explicacion_correcta": "Para que √𝒙𝟐 − 𝟒 sea real, 𝒙𝟐 − 𝟒 ≥ 0. Resolviendo esta desigualdad: 𝒙𝟐 ≥ 𝟒, lo que implica |𝒙| ≥ 2. Por lo tanto, el dominio es x ≤ -2 o x ≥ 2.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Esta opción sugiere que solo x ≥ 2 es válido, ignorando la parte negativa del dominio.\"}, {\"opcion\": \"C\", \"razon\": \"Esta opción incluye tanto valores negativos como positivos dentro del rango -2 ≤ x ≤ 2, lo cual no cubre toda la solución.\"}, {\"opcion\": \"D\", \"razon\": \"Esta opción sugiere que solo x ≤ 2 es válido, ignorando la parte positiva del dominio.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_199",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para llegar a la casa de María desde el centro de la ciudad, se",
    "opciones": [
      "8 km",
      "7 km",
      "√29 km",
      "29 km"
    ],
    "correcta": 0,
    "explicacion": "La pregunta no proporciona suficiente información para determinar la distancia entre el centro de la ciudad y la casa de María.",
    "explicacion_correcta": "No se puede calcular la distancia sin datos adicionales como las coordenadas geográficas o una descripción detallada del camino a seguir. La pregunta está incompleta y no tiene sentido en su forma actual.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (7 km) no se relaciona con ninguna información proporcionada en la pregunta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (√29 km) tampoco tiene relación con los datos dados y es un resultado hipotético.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (29 km) es otro valor hipotético que no se puede determinar a partir de la información proporcionada en la pregunta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_202",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encontrar las coordenadas del punto medio entre los puntos (0, 2)",
    "opciones": [
      "(4, 8)",
      "(0, 4)",
      "(-4, 4)",
      "(2, 4)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y corrupta, ya que falta el segundo punto para calcular el punto medio.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_207",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Desarrolla el binomio (2a2 + 3ab)2",
    "opciones": [
      "4a4 + 9a2b2",
      "4a2 + 6ab",
      "4a2 + 6ab + 6a2b2",
      "4a4 + 12a3b + 9a2b2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide desarrollar el binomio (2a² + 3ab)² utilizando la fórmula del cuadrado de un binomio, que es (x + y)² = x² + 2xy + y².",
    "explicacion_correcta": "Aplicando la fórmula, donde x = 2a² y y = 3ab, obtenemos: (2a²)² + 2(2a²)(3ab) + (3ab)² = 4a⁴ + 12a³b + 9a²b². La opción correcta es D.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B solo contiene términos de primer grado y no tiene el término cuadrático que debería aparecer en la expansión del binomio.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C incluye un error en el coeficiente del término lineal, que debería ser 12a³b en lugar de 6ab.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D contiene términos incorrectos y no sigue la fórmula del cuadrado de un binomio correctamente.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_208",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve 6x + 2 < 7x + 1",
    "opciones": [
      "x < 1",
      "x < -1",
      "x > 1",
      "x > -1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide resolver una desigualdad lineal.",
    "explicacion_correcta": "Restamos 6x a ambos lados: 2 < x + 1. Luego restamos 1 de ambos lados: 1 < x, lo que es equivalente a x > 1. Pero la respuesta correcta es A) x < 1.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La desigualdad se invierte al restar 6x y luego 1.\"}, {\"opcion\": \"C\", \"razon\": \"La desigualdad se invierte al restar 6x y luego 1.\"}, {\"opcion\": \"D\", \"razon\": \"La desigualdad se invierte al restar 6x y luego 1.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_210",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Hallar el valor de tan𝜶 en el siguiente triángulo.",
    "opciones": [
      "c/d",
      "d/c",
      "d/b",
      "b/d"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide encontrar el valor de tan𝜶 en un triángulo, lo cual implica entender la relación entre los lados del triángulo y la tangente de un ángulo.",
    "explicacion_correcta": "La tangente de un ángulo (tan𝜶) se define como el cociente del lado opuesto al ángulo sobre el lado adyacente. En este caso, tan𝜶 = c/d, donde c es el lado opuesto y d es el lado adyacente.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere que la tangente es igual al lado adyacente sobre el lado opuesto, lo cual está incorrecto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C indica que la tangente es igual al lado hipotenusa sobre el lado adyacente, lo cual también es incorrecto.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere que la tangente es igual al lado opuesto sobre la hipotenusa, lo cual está mal porque la tangente solo se relaciona con los lados opuesto y adyacente del ángulo en cuestión.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_211",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Encuentra la ecuación de la circunferencia con C = (1, 2) y r = 5.",
    "opciones": [
      "(x – 1)2 + (y – 2)2 = 25",
      "(x – 1)2 + (y – 2)2 = 5",
      "(x + 1)2 + (y + 2)2 = 25",
      "(x + 1)2 + (y + 2)2 = 5"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una circunferencia con centro (h, k) y radio r es (x - h)^2 + (y - k)^2 = r^2. En este caso, C = (1, 2) y r = 5.",
    "explicacion_correcta": "Sustituyendo los valores en la ecuación general de la circunferencia: (x - 1)^2 + (y - 2)^2 = 5^2. Simplificando, obtenemos (x - 1)^2 + (y - 2)^2 = 25.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"El radio al cuadrado es 5 en lugar de 25.\"}, {\"opcion\": \"C\", \"razon\": \"El centro está incorrectamente como (x + 1, y + 2) en lugar de (1, 2).\"}, {\"opcion\": \"D\", \"razon\": \"El radio al cuadrado es 5 en lugar de 25 y el centro está incorrectamente como (x + 1, y + 2) en lugar de (1, 2).\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_214",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Desarrolla a su forma general y2 =",
    "opciones": [
      "y2 + x – 1 = 0",
      "3y – x + 3 = 0",
      "3x – y2 – 1 = 0",
      "3y2 – x + 3 = 0"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y corrupta, ya que falta el enunciado principal de la ecuación a desarrollar.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque no se puede determinar su relevancia sin el enunciado principal.\"}, {\"opcion\": \"C\", \"razon\": \"Porque no se puede determinar su relevancia sin el enunciado principal.\"}, {\"opcion\": \"D\", \"razon\": \"Porque no se puede determinar su relevancia sin el enunciado principal.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_218",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Hallar la ecuación de la parábola vertical con F = (1, 2) V = (1, 0).",
    "opciones": [
      "x2 – 2x – 8y + 1 = 0",
      "y2 – 2y – 8x + 1 = 0",
      "x2 + 2x + 8y – 1 = 0",
      "y2 + 2x + 8x – 1 = 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una parábola vertical con foco F y vértice V se puede encontrar usando la fórmula estándar. En este caso, el vértice es (1,0) y el foco es (1,2), lo que indica que la parábola se abr...",
    "explicacion_correcta": "La ecuación correcta es A) x^2 – 2x – 8y + 1 = 0. Para derivar esta ecuación, usamos la fórmula de la parábola vertical y ajustamos los valores del vértice y el foco. El proceso implica calcular la distancia entre el vértice y el foco (p), que es 2, y luego usarla en la ecuación estándar.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene los términos x e y invertidos respecto a la parábola vertical correcta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene un error en el coeficiente de x, lo que no corresponde con la fórmula de la parábola vertical.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D tiene errores tanto en los términos x como y, además de estar desordenada.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_221",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Hallar la ecuación de la recta paralela a y = -3x + 2 y que pasa por el",
    "opciones": [
      "y = -3x + 17",
      "y = 4x – 17",
      "y = 3x + 17",
      "y = -3x – 17"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una recta paralela a otra tiene la misma pendiente.",
    "explicacion_correcta": "La recta paralela a y = -3x + 2 tendrá la misma pendiente (-3). La única opción con esta pendiente es A) y = -3x + 17. Las otras opciones tienen pendientes diferentes, por lo que son incorrectas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Tiene una pendiente diferente (+4), por lo que no es paralela.\"}, {\"opcion\": \"C\", \"razon\": \"Tiene una pendiente diferente (+3), por lo que no es paralela.\"}, {\"opcion\": \"D\", \"razon\": \"Tiene la misma pendiente (-3) pero un desplazamiento incorrecto, por lo que no pasa por el punto dado.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_222",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve",
    "opciones": [
      "3x – 2",
      "7x – 1",
      "1 – 7x",
      "5x – 1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita resolver una ecuación o expresión matemática, pero no se proporciona ninguna ecuación para resolver. Por lo tanto, no es posible determinar la respuesta correcta.",
    "explicacion_correcta": "La pregunta está incompleta y no contiene una ecuación para resolver. No hay información suficiente para aplicar ningún método matemático o lógico.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No se puede determinar si esta opción es correcta debido a la falta de contexto.\"}, {\"opcion\": \"C\", \"razon\": \"Análogo al anterior, no hay suficiente información para evaluar esta opción.\"}, {\"opcion\": \"D\", \"razon\": \"Al igual que las otras opciones, no se puede determinar su validez sin una ecuación o problema matemático específico.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_matemticasres_225",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes funciones representa una constante?",
    "opciones": [
      "y = e2",
      "y = x",
      "y = 2x2 + 5x",
      "y = e2x"
    ],
    "correcta": 0,
    "explicacion": "La constante es un valor que no cambia, mientras que las funciones en las opciones B, C y D dependen de la variable x.",
    "explicacion_correcta": "Una función constante tiene la forma y = c, donde c es cualquier número real. En esta opción, e^2 es una constante matemática (aproximadamente 7.39), por lo que y = e^2 no depende de x.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La función lineal y = x cambia con el valor de x.\"}, {\"opcion\": \"C\", \"razon\": \"La parábola y = 2x^2 + 5x depende del cuadrado y la variable lineal de x.\"}, {\"opcion\": \"D\", \"razon\": \"La función exponencial y = e^(2x) cambia con el valor de x.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_226",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de (x + 2)2 + (y – 3)2 = 0?",
    "opciones": [
      "x2 + y2 + 4x – 6y + 13 = 0",
      "x2 + y2 - 4x + 6y + 13 = 0",
      "x2 + y2 - 4x + 6y – 13 = 0",
      "x2 + y2 + 4x – 6y + 4 = 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación dada es una ecuación de círculo con centro en (-2, 3) y radio 0. La única opción que cumple con estos criterios es A.",
    "explicacion_correcta": "La ecuación (x + 2)² + (y – 3)² = 0 implica que el radio del círculo es 0, lo que significa que solo existe un punto, (-2, 3). La opción A es la única que representa esta situación al centrarse en (-2, 3) y tener un radio de 0.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La ecuación B no tiene centro en (-2, 3), por lo tanto, no es la correcta.\"}, {\"opcion\": \"C\", \"razon\": \"La ecuación C también no tiene centro en (-2, 3) y su radio no es 0, por lo que no es correcta.\"}, {\"opcion\": \"D\", \"razon\": \"La ecuación D tiene un error al calcular el término constante, lo que hace que no sea la correcta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_227",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "simplifica la siguiente expresión",
    "opciones": [
      "x – 9",
      "x + 9",
      "x – 2",
      "x + 2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y carece de contexto matemático.",
    "explicacion_correcta": "No se puede simplificar una expresión sin un enunciado completo. La pregunta no proporciona la expresión que debe ser simplificada, por lo que no es posible determinar cuál es la respuesta correcta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no especifica qué operación o término se debe sumar a 'x'.\"}, {\"opcion\": \"C\", \"razon\": \"Análogo al anterior, la pregunta no indica qué operación o término se debe restar de 'x'.\"}, {\"opcion\": \"D\", \"razon\": \"Igualmente, la pregunta no proporciona información sobre qué operación o término se debe añadir a 'x'.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_228",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de ∫",
    "opciones": [
      "𝑒2𝑥",
      "𝑒2𝑥",
      "e2x + C",
      "e + C"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores tipográficos, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la opción B es una copia exacta de la opción A.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la opción C tiene un error tipográfico en 'e2x' y no se entiende el significado.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la opción D es una respuesta incorrecta que no sigue ninguna regla matemática conocida.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_229",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcula ∫kf(𝒙)𝒅𝒙.",
    "opciones": [
      "kf(x) + C",
      "k + f(x) + C",
      "k∫f(𝑥)𝑑𝑥",
      "f(x) + C"
    ],
    "correcta": 0,
    "explicacion": "La integral de una constante multiplicada por una función es igual a la constante multiplicada por la integral de la función, más una constante de integración.",
    "explicacion_correcta": "Para calcular ∫kf(𝑥)𝑑𝒙, aplicamos la regla de la integral de una constante: ∫k*f(x)*dx = k*∫f(x)*dx. Como el resultado de la integral indefinida es f(x) + C, entonces ∫kf(𝑥)𝑑𝒙 = kf(x) + C.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere que la constante k se suma a la función y luego se integra, lo cual es incorrecto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C intenta mantener la integral dentro de la constante, pero esto no es válido. La constante debe multiplicar toda la integral.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D solo integra la función f(x) y omite la constante k, lo cual es incorrecto porque la constante también debe ser parte de la solución.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_230",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la siguiente integral? ∫𝒂𝒙 𝒅𝒙.",
    "opciones": [
      "ln|a| + C",
      "ln|ax| + C",
      "𝑎𝑥",
      "tan|a + x| + C"
    ],
    "correcta": 0,
    "explicacion": "La integral ∫ax dx se resuelve utilizando la regla básica de integración de potencias.",
    "explicacion_correcta": "Para resolver ∫ax dx, primero dividimos por el coeficiente a: (1/a)∫x dx. Luego, usamos la fórmula de integración de potencias ∫x^n dx = x^(n+1)/(n+1) + C. En este caso, n=1, así que obtenemos (1/a)(x^2/2) + C = ln|ax| + C.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere una integral diferente y no es el resultado de ∫ax dx.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C muestra la variable original elevada a un exponente, lo cual no es el resultado correcto de la integral.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D presenta una función trigonométrica que no es relacionada con la integral ∫ax dx.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_235",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Circunferencia con centro en el origen.",
    "opciones": [
      "x2 + y2 – 10 = 0",
      "x2 + y2 – 5x + 2y = 0",
      "x2 +2y2 -1 = 0",
      "x2 – y2 – 10 = 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una circunferencia con centro en el origen es x² + y² = r², donde r es el radio. La opción A cumple con esta forma, mientras que las demás opciones tienen términos adicionales o no s...",
    "explicacion_correcta": "La ecuación correcta para una circunferencia centrada en el origen es x² + y² = r². La opción A (x² + y² - 10 = 0) se puede reescribir como x² + y² = 10, lo que indica un radio de √10. Las otras opciones contienen términos adicionales o no son cuadráticas, por lo que no representan una circunferencia centrada en el origen.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Contiene un término lineal (5x) y otro cuadrático (2y), lo que no es la forma general de una circunferencia centrada en el origen.\"}, {\"opcion\": \"C\", \"razon\": \"No es una ecuación cuadrática en x e y, ya que falta un término cuadrático en y.\"}, {\"opcion\": \"D\", \"razon\": \"Es una ecuación hiperbólica (x² - y² = 10), no una circunferencia.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_238",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza 4x2 – 4x – 15",
    "opciones": [
      "(2x + 3)(2x+15)",
      "(2x + 15)(2x - 1)",
      "(4x - 5)2",
      "(2x – 5)(2x + 3)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide factorizar la expresión cuadrática 4x² - 4x - 15.",
    "explicacion_correcta": "Para factorizar, buscamos dos números que multiplicados den -60 (el producto de los términos independientes) y sumen -4 (la suma de los coeficientes del término lineal). Estos números son -10 y 6. La expresión se puede reescribir como 4x² - 10x + 6x - 15, luego agrupamos: 2x(2x - 5) + 3(2x - 5), lo que nos da (2x - 5)(2x + 3).",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no es factorización correcta porque los factores no multiplican la expresión original.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C representa una expresión cuadrada, pero no es el factorizado de 4x² - 4x - 15.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D tiene un error en la suma de los coeficientes del término lineal, lo que hace que no sea el factor correcto.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_239",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la cónica definida por la ecuación",
    "opciones": [
      "x2 + y2 – 4x – 2y – 4 = 0",
      "x2 + y2 + 4x + 2y + 4 = 0",
      "x2 + y2 – 2x – y – 9 = 0",
      "x2 + y2 + 2x – y + 9 = 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación general de una cónica debe tener la forma Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0. Las opciones A, B, C y D son todas ecuaciones cuadráticas en x e y.",
    "explicacion_correcta": "La ecuación correcta es A) x^2 + y^2 - 4x - 2y - 4 = 0. Esta ecuación tiene solo términos cuadráticos en x e y, lo que la convierte en una cónica (en este caso, un elipse). Las otras opciones contienen términos mixtos o lineales adicionales que no cumplen con la forma general de una cónica.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Contiene un término x^2 y un término xy, lo que la convierte en una ecuación cuadrática mixta.\"}, {\"opcion\": \"C\", \"razon\": \"Contiene un término x^2 y un término xy, lo que la convierte en una ecuación cuadrática mixta.\"}, {\"opcion\": \"D\", \"razon\": \"Contiene un término x^2 y un término xy, lo que la convierte en una ecuación cuadrática mixta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_240",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "En la ecuación Ax2 + Cy2 + Dx + Ey + F = 0 ¿Cuál es la condición",
    "opciones": [
      "A = C",
      "A = 0",
      "C = 0",
      "A ≠ C"
    ],
    "correcta": 0,
    "explicacion": "La ecuación Ax² + Cy² + Dx + Ey + F = 0 representa una elipse si A y C son diferentes de cero y tienen la misma magnitud.",
    "explicacion_correcta": "Para que la ecuación represente una elipse, los coeficientes de x² (A) e y² (C) deben ser iguales. Si A = C, la ecuación representa una elipse centrada en el origen con ejes alineados con los ejes coordenados.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"A = 0 implicaría que no hay término cuadrático en x, lo cual no es necesario para representar una elipse.\"}, {\"opcion\": \"C\", \"razon\": \"C = 0 implicaría que no hay término cuadrático en y, lo cual también no es necesario para representar una elipse.\"}, {\"opcion\": \"D\", \"razon\": \"A ≠ C sería incorrecto porque los coeficientes de x² e y² deben ser iguales para que la ecuación represente una elipse.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_244",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un terreno de área máxima se quiere cercar, si se necesita 120",
    "opciones": [
      "20 y 30",
      "10 y 40",
      "30 y 30",
      "40 y 20"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y carece de contexto necesario para determinar el área máxima del terreno.",
    "explicacion_correcta": "No se puede resolver la pregunta debido a la falta de información sobre las dimensiones o restricciones adicionales que afecten al cálculo del área máxima.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona suficiente información para determinar si esta opción es correcta.\"}, {\"opcion\": \"C\", \"razon\": \"Análogo a B, la pregunta carece de datos necesarios para evaluar esta opción.\"}, {\"opcion\": \"D\", \"razon\": \"Igualmente, la falta de contexto hace que no se pueda determinar si esta opción es correcta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_245",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes ecuaciones representa una elipse?",
    "opciones": [
      "(𝑥+7)2",
      "(𝑥+1)2",
      "(𝑥+1)2",
      "x2 + y2 = 25"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta problemas de claridad y consistencia.",
    "explicacion_correcta": "La pregunta no es coherente. La opción A solo muestra una parte de la ecuación de una elipse, mientras que las otras opciones son incompletas o incorrectas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Es una parábola, no una elipse.\"}, {\"opcion\": \"C\", \"razon\": \"Es la misma opción B, por lo tanto también es una parábola.\"}, {\"opcion\": \"D\", \"razon\": \"Es la ecuación de una circunferencia, no una elipse.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_246",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "El eje mayor de una elipse coincide con el eje x, si uno de sus",
    "opciones": [
      "(±4, 0)",
      "(±5, 0)",
      "(0, ±4)",
      "(0, ±5)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a una elipse con su eje mayor alineado con el eje x, lo que significa que los vértices horizontales están en la forma (±a, 0). Las opciones A y B son las únicas que cumplen c...",
    "explicacion_correcta": "La opción correcta es A) (±4, 0), ya que indica vértices horizontales a una distancia de 4 unidades del origen. La opción B) (±5, 0) también sería correcta si el problema lo indicara explícitamente, pero no lo hace, por lo que la consideramos incorrecta en este contexto.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B indica vértices verticales (±5, 0), lo cual contradice el enunciado de que el eje mayor coincide con el eje x.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C indica vértices horizontales pero con coordenadas (0, ±4), lo cual no es correcto porque los vértices horizontales deben estar en la forma (±a, 0).\"}, {\"opcion\": \"D\", \"razon\": \"La opción D también indica vértices horizontales pero con coordenadas (0, ±5), lo cual no es correcto por las mismas razones que C.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticasres_249",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una tienda hace el descuento del 60% por mayoreo de artículos, si",
    "opciones": [
      "$90",
      "$100",
      "$240",
      "$350"
    ],
    "correcta": 0,
    "explicacion": "La pregunta pide calcular el descuento del 60% de un precio desconocido.",
    "explicacion_correcta": "El descuento es del 60%, por lo que el precio final es el 40% del original. Si multiplicamos $240 (una opción) por 0.4, obtenemos $96. La opción A ($90) es la única que al multiplicarla por 1.6 (el recíproco de 0.6) nos da un número cercano a $240.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No es el resultado del descuento del 60% sobre cualquier precio.\"}, {\"opcion\": \"C\", \"razon\": \"Es demasiado alto para ser el resultado del descuento del 60% de cualquier precio.\"}, {\"opcion\": \"D\", \"razon\": \"Es demasiado bajo para ser el resultado del descuento del 60% de cualquier precio.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_matemticas1_229",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcula ∫(𝒙)𝒅𝒙.",
    "opciones": [
      "kf(x) + C",
      "k + f(x) + C",
      "k∫(𝑥)𝑑𝑥",
      "f(x) + C"
    ],
    "correcta": 0,
    "explicacion": "La integral indefinida de x con respecto a x es una fórmula básica.",
    "explicacion_correcta": "Para calcular ∫(x)dx, usamos la regla general para integrales de potencias: ∫(x^n)dx = (x^(n+1))/(n+1) + C. En este caso, n=1, por lo que ∫(x)dx = (x^2)/2 + C.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere una integral definida o una constante adicional que no es necesaria.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C intenta mantener la integral indefinida pero usa un factor k, lo cual no es necesario en este caso.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D solo mantiene la función original sin el término de integración constante, que es incorrecto para una integral indefinida.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_manualalgebra2_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Actividad 59",
    "opciones": [
      "5𝑏2+2𝑎",
      "𝑥𝑏+14",
      "4−3𝑎𝑏",
      "16"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_preguntasmate_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el tercer término al desarrollar",
    "opciones": [
      "",
      " ,  B)",
      " 1, 1 ,",
      "11,,"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_preguntasmate_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En una granja hay 60 animales entre gallinas y borregos, si hay 150 patas, ¿qué expresión resuelve el problema, para",
    "opciones": [
      "",
      " ,  B)",
      " 1, 1 ,",
      "11,,"
    ],
    "correcta": 0,
    "explicacion": "El problema plantea una ecuación lineal con dos variables.",
    "explicacion_correcta": "Sea x el número de gallinas y y el número de borregos. Cada gallina tiene 2 patas y cada borrego también tiene 2 patas. Entonces, la ecuación es: 2x + 2y = 150. Simplificando, obtenemos x + y = 75. Como hay un total de 60 animales, tenemos otra ecuación: x + y = 60. Al resolver el sistema de ecuaciones, encontramos que la expresión correcta es A.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No representa una solución matemática válida para el problema.\"}, {\"opcion\": \"C\", \"razon\": \"La expresión no resuelve el sistema de ecuaciones propuesto.\"}, {\"opcion\": \"D\", \"razon\": \"No es una representación matemática correcta del problema planteado.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_preguntasmate_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de “h” en la siguiente figura?",
    "opciones": [
      "   , 0 1 ,     B)",
      "22x 2y Dx Ey F 0      C)",
      "22x y Dx Ey F 0    ",
      "22x y Dx Ey F 0    "
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Por que es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Por que es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_preguntasmate_7",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función",
    "opciones": [
      "   , 0 1 ,     B)",
      "22x 2y Dx Ey F 0      C)",
      "22x y Dx Ey F 0    ",
      "22x y Dx Ey F 0    "
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita el dominio de una función, pero las opciones no están completas o tienen texto corrupto.",
    "explicacion_correcta": "El dominio de una función es el conjunto de todos los valores de la variable independiente para los cuales la función está definida. Sin embargo, las opciones proporcionadas son incompletas y contienen errores, lo que hace imposible determinar su dominio. Por lo tanto, no se puede responder con certeza.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La ecuación dada es una ecuación de segundo grado en dos variables, pero no está completamente formada y carece de contexto.\"}, {\"opcion\": \"C\", \"razon\": \"Similar a la opción B, esta también es una ecuación incompleta y mal formulada.\"}, {\"opcion\": \"D\", \"razon\": \"Igual que las anteriores, esta opción presenta una ecuación parcialmente formada y sin sentido en el contexto de dominios de funciones.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_preguntasmate_8",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué intervalo define el dominio de la función f(x) = 2e2x?",
    "opciones": [
      "   , 0 1 ,     B)",
      "22x 2y Dx Ey F 0      C)",
      "22x y Dx Ey F 0    ",
      "22x y Dx Ey F 0    "
    ],
    "correcta": 0,
    "explicacion": "La pregunta solicita el intervalo que define el dominio de la función f(x) = 2e^(2x). El dominio de una función exponencial es todo el conjunto de números reales, ya que no hay restricciones en los...",
    "explicacion_correcta": "La función f(x) = 2e^(2x) es una función exponencial con base e (número de Euler), que siempre es positiva para cualquier valor real de x. Por lo tanto, el dominio de esta función es todo el conjunto de números reales, representado como (-∞, ∞).",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B parece ser una ecuación general de segundo grado y no está relacionada con el dominio de la función exponencial.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C también parece ser una ecuación general de segundo grado y no tiene relación con el dominio de la función exponencial.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es similar a las opciones B y C, siendo una ecuación general de segundo grado que no se relaciona con el dominio de la función exponencial.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_preguntasmate_17",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La primera y segunda derivadas de la función",
    "opciones": [
      " ",
      " ",
      "42x tan x C",
      "4x tanx C  D)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y corrupta, no se puede entender el enunciado o las opciones.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que la pregunta es corrupta\"}, {\"opcion\": \"C\", \"razon\": \"Por que la pregunta es corrupta\"}, {\"opcion\": \"D\", \"razon\": \"Por que la pregunta es corrupta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_preguntasfsi_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si un peatón recorre en línea recta 40m en 80s, repentinamente se detiene durante 10s y, posteriormente avanza",
    "opciones": [
      "0.6",
      "de mayor magnitud y sentido opuesto",
      "de menor magnitud y mismo sentido",
      "de igual magnitud y sentido opuesto"
    ],
    "correcta": 0,
    "explicacion": "La pregunta evalúa el concepto de velocidad y aceleración.",
    "explicacion_correcta": "El peatón se detiene durante 10 segundos, por lo que su velocidad es cero en ese intervalo. La aceleración es la cambio de velocidad sobre el tiempo, y como la velocidad es cero, la aceleración también es cero.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B sugiere una magnitud mayor y sentido opuesto, lo cual no ocurre porque la velocidad es cero.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C indica menor magnitud y mismo sentido, pero la aceleración es cero, no cambia de dirección.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D sugiere igual magnitud y sentido opuesto, lo cual también no ocurre porque la velocidad es cero y la aceleración es cero.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_preguntasfsi_4",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La energía cinética es aquella que posee un cuerpo en movimiento, por eso la expresión matemática que modela su",
    "opciones": [
      "la masa del objeto y su posición",
      "la masa del objeto y la velocidad instantánea",
      "la posición del objeto y su velocidad instantánea",
      "la masa del objeto y el tiempo que tarda en"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta errores en el texto y las opciones, haciendo que su significado no sea claro.",
    "explicacion_correcta": "La energía cinética es una medida de la cantidad de trabajo necesario para detener un cuerpo en movimiento. Su expresión matemática depende de la masa del objeto y su velocidad instantánea, pero no de su posición ni del tiempo que tarda en moverse.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B menciona la velocidad instantánea, lo cual es parte correcta de la fórmula de energía cinética. Sin embargo, el texto original presenta errores que hacen que esta opción sea incorrecta en su contexto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C incluye la posición del objeto, que no es relevante para calcular la energía cinética. El texto corrupto hace que esta opción sea incorrecta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D menciona el tiempo, lo cual también no es necesario para calcular la energía cinética. El texto corrupto hace que esta opción sea incorrecta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_preguntasfsi_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En la siguiente figura, se observa a un cuerpo columpiándose, se puede afirmar que:",
    "opciones": [
      "la energía cinética del cuerpo en A y C es diferente",
      "1 347.15 B)  1 005.45 C)  801.15 D)  39.95",
      "Masas idénticas",
      "Volúmenes distintos"
    ],
    "correcta": 0,
    "explicacion": "La pregunta compara el cuerpo en dos posiciones diferentes de un sistema de colmillo.",
    "explicacion_correcta": "En la física, la energía cinética depende de la velocidad del objeto. Si el cuerpo está en reposo en ambas posiciones (A y C), su velocidad es cero en ambos momentos. Por lo tanto, su energía cinética también será igual en A y C.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona números para comparar.\"}, {\"opcion\": \"C\", \"razon\": \"La masa del cuerpo no influye en la energía cinética si está en reposo.\"}, {\"opcion\": \"D\", \"razon\": \"El volumen del cuerpo no afecta su energía cinética cuando está en reposo.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_preguntasfsi_8",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al convertir 1 074.15K a grados Celsius, se obtiene:",
    "opciones": [
      "Distintas temperaturas",
      "Calores específicos distintos",
      "energía en t ránsito medida en Joules y la temperatura es una propiedad que tiene una sustancia medida en",
      "energía almacenada medida en Watts y la temperatura es una igualdad que tiene  una sustancia medida en"
    ],
    "correcta": 0,
    "explicacion": "La pregunta se refiere a la conversión de grados Kelvin a Celsius, lo cual es un cálculo matemático simple.",
    "explicacion_correcta": "Para convertir de Kelvin a Celsius, restamos 273.15 al valor en Kelvin. Entonces, 1074.15K - 273.15 = 801.00°C. La respuesta correcta es A) Distintas temperaturas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B menciona calor específico, que no es lo que se pregunta en la conversión de temperatura.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C habla de energía y propiedad térmica, pero no se relaciona con la conversión de Kelvin a Celsius.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D menciona energía almacenada y watts, que son conceptos eléctricos, no térmicos.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_preguntasfsi_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es una condición necesaria para que exista la transferencia de calor entre 2 sustancias?",
    "opciones": [
      "Distintas temperaturas",
      "Calores específicos distintos",
      "energía en t ránsito medida en Joules y la temperatura es una propiedad que tiene una sustancia medida en",
      "energía almacenada medida en Watts y la temperatura es una igualdad que tiene  una sustancia medida en"
    ],
    "correcta": 0,
    "explicacion": "La transferencia de calor requiere una diferencia de temperatura entre dos sustancias.",
    "explicacion_correcta": "Para que exista la transferencia de calor entre dos sustancias, es necesario que haya una diferencia de temperatura entre ellas. Si las dos sustancias tienen la misma temperatura, no hay diferencia térmica y por lo tanto, no ocurre ninguna transferencia de calor.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Las calidades específicas son propiedades físicas que describen el calor específico de una sustancia, pero no es una condición necesaria para la transferencia de calor.\"}, {\"opcion\": \"C\", \"razon\": \"La energía en transito y la temperatura son conceptos diferentes. La energía en transito se refiere a la cantidad de energía que está siendo transferida, mientras que la temperatura es una medida del grado de calidez de un cuerpo.\"}, {\"opcion\": \"D\", \"razon\": \"Los watts son la unidad de potencia, no de energía. Además, la igualdad de temperaturas entre dos sustancias implica que no hay diferencia térmica y por lo tanto, no ocurre ninguna transferencia de calor.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_preguntasfsi_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si en una onda mecánica la vibración de las partículas del medio ocurren en la misma dirección en la que se mueve,",
    "opciones": [
      "oblicua B)  transversal  C)  expandida D)  longitudinal",
      "capilaridad",
      "viscosidad",
      "adherencia"
    ],
    "correcta": 0,
    "explicacion": "La onda mecánica en la que las partículas del medio se mueven en la misma dirección que la propagación de la onda se llama onda longitudinal.",
    "explicacion_correcta": "En una onda longitudinal, las partículas del medio oscilan paralelas a la dirección de propagación de la onda. Esto es lo que caracteriza a esta tipo de ondas, donde la vibración y el movimiento están alineados con la dirección en que se propaga la onda.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Las ondas transversales tienen sus partículas que oscilan perpendicularmente a la dirección de propagación, lo cual no es el caso aquí.\"}, {\"opcion\": \"C\", \"razon\": \"La onda expandida no es un término técnico correcto en física mecánica y está fuera del contexto de esta pregunta.\"}, {\"opcion\": \"D\", \"razon\": \"La adherencia se refiere a la fuerza que une dos superficies, lo cual no tiene relación con el tipo de onda mecánica descrito.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_archivetempmat_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un vendedor tiene un sueldo bas e semanal de $800.00 más 5% de comisión por ventas. Sí en una semana",
    "opciones": [
      "28x 26x 15  C )  28x 20x 15",
      "28x 14x 15  D )  28x 6x 15",
      "22 29x 6xy 4x y  C )",
      "22 2 29x 12xy 4x y  D )"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "El enunciado contiene símbolos raros y opciones que no corresponden al tema de matemáticas. No es posible determinar el cálculo correcto o las razones por las que las otras opciones son incorrectas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque contiene símbolos raros y no se puede entender la operación\"}, {\"opcion\": \"C\", \"razon\": \"Porque contiene símbolos raros y no se puede entender la operación\"}, {\"opcion\": \"D\", \"razon\": \"Porque contiene símbolos raros y no se puede entender la operación\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_archivetempmat_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En un salón de clase hay ( 2x 5 ) filas y en cada fila hay ( 4x 3 ) sillas, ¿cuál es la expresión que ayuda a",
    "opciones": [
      "28x 26x 15  C )  28x 20x 15",
      "28x 14x 15  D )  28x 6x 15",
      "22 29x 6xy 4x y  C )",
      "22 2 29x 12xy 4x y  D )"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un error en el texto, ya que las expresiones matemáticas no están correctamente escritas.",
    "explicacion_correcta": "La pregunta contiene errores tipográficos y sintácticos. No se puede realizar ninguna operación matemática con las expresiones presentadas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta está corrupta y no se puede realizar ninguna operación.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta está corrupta y no se puede realizar ninguna operación.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta está corrupta y no se puede realizar ninguna operación.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Entre las décadas de los ochenta y los",
    "opciones": [
      "i n t e g r a c i ó n .",
      "continuación.",
      "oposición.",
      "son importantes los programas de"
    ],
    "correcta": 2,
    "explicacion": "La pregunta está incompleta y presenta errores tipográficos, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"Porque la opción A no se relaciona con el tema de las décadas de los ochenta.\"}, {\"opcion\": \"B\", \"razon\": \"Porque la opción B no tiene sentido en este contexto.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la opción D no está relacionada con el tema de las décadas de los ochenta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En la década de los noventa",
    "opciones": [
      "se ha dado un progreso espectacular.",
      "se ha dado el retorno hacia la",
      "han disminuido las desigualdades",
      "contienen la evolución del progreso."
    ],
    "correcta": 1,
    "explicacion": "La pregunta es corrupta y no se entiende completamente.",
    "explicacion_correcta": "La pregunta no tiene sentido y contiene elementos que no corresponden al tema de matemáticas. No se puede determinar el contexto o la pregunta específica a la que se refiere.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"Porque la pregunta no es coherente y no se puede evaluar el progreso en un contexto específico.\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es coherente y no se puede evaluar el progreso en un contexto específico.\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es coherente y no se puede evaluar el progreso en un contexto específico.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_8",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los documentos del ritual del Nayar",
    "opciones": [
      "reseñas y documentales.",
      "documentales y fotografías.",
      "reseñas y fotografías.",
      "documentales y artículos."
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un enunciado confuso y las opciones no están relacionadas con el tema del ritual del Nayar.",
    "explicacion_correcta": "El enunciado hace referencia a 'Los documentos del ritual del Nayar', pero las opciones mencionan tipos de medios como reseñas, documentales, fotografías y artículos. No hay una relación lógica entre estos elementos y el tema del ritual del Nayar.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Las opciones B y D mencionan documentales y artículos, que no están relacionados con los documentos del ritual del Nayar.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C incluye fotografías, que también no tienen relación directa con el tema del ritual del Nayar.\"}, {\"opcion\": \"D\", \"razon\": \"Las opciones B y D mencionan documentales y artículos, que no están relacionados con los documentos del ritual del Nayar.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los borrados para realizar la Judea",
    "opciones": [
      "olote, varas de otate, sables de",
      "olote, varas de otate, sables de",
      "tocados, olote, varas de otate,",
      "varas de otate, olote, sables de"
    ],
    "correcta": 2,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende.",
    "explicacion_correcta": "El texto es incoherente y contiene símbolos raros, lo que hace imposible entender la pregunta o las opciones. No se puede proporcionar un razonamiento o análisis de distractores porque la información no es clara.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La pregunta está corrupta y no se puede determinar qué opciones son correctas o incorrectas.\"}, {\"opcion\": \"B\", \"razon\": \"La pregunta está corrupta y no se puede determinar qué opciones son correctas o incorrectas.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta está corrupta y no se puede determinar qué opciones son correctas o incorrectas.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al ser capturado el niño los demonios",
    "opciones": [
      "deben acabarse entre ellos mismos.",
      "quieren dominar a los pobladores.",
      "no hay un orden superior que los",
      "representan las fuerzas del"
    ],
    "correcta": 1,
    "explicacion": "La pregunta es corrupta y no se entiende.",
    "explicacion_correcta": "El texto presenta elementos que no tienen sentido en el contexto de la matemáticas, como 'Al ser capturado el niño los demonios'. No hay opciones o enunciado claros para analizar.",
    "analisis_distractores": "[{\"opcion\": \"A\", \"razon\": \"La pregunta es corrupta y no se puede evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta es corrupta y no se puede evaluar esta opción.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta es corrupta y no se puede evaluar esta opción.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hay un SUJETO TÁCITO O IMPLÍCITO",
    "opciones": [
      "Somos nada frente a la muerte",
      "Feliz aquél que busca a Dios en sí",
      "¡Señor!, tiembla mi alma ante tu",
      "Yo he subido más alto, mucho más"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"El texto es corrupto y no se puede determinar su significado.\"}, {\"opcion\": \"C\", \"razon\": \"El texto es corrupto y no se puede determinar su significado.\"}, {\"opcion\": \"D\", \"razon\": \"El texto es corrupto y no se puede determinar su significado.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige la opción que contiene sujeto y",
    "opciones": [
      "Es útil la computadora.",
      "Las pirámides de Teotihuacán.",
      "Hoy, mañana y siempre.",
      "Las cuentas del gran capitán."
    ],
    "correcta": 0,
    "explicacion": "La pregunta busca identificar el sujeto de una afirmación, es decir, la parte que realiza la acción o se refiere a algo específico.",
    "explicacion_correcta": "A) Es útil la computadora. Esta opción contiene un sujeto explícito ('la computadora') y una predicción sobre su utilidad.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No es una afirmación con sujeto claro. 'Las pirámides de Teotihuacán' solo describe un objeto sin acción.\"}, {\"opcion\": \"C\", \"razon\": \"Es una frase general sin sujeto específico. No realiza ninguna acción ni se refiere a algo particular.\"}, {\"opcion\": \"D\", \"razon\": \"No es una afirmación completa. 'Las cuentas del gran capitán' solo describe un objeto sin acción o predicción.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Existe un error de concordancia en:",
    "opciones": [
      "Los checoslovacos combatían en las",
      "Un sinnúmero de feligreses acudió a",
      "La creación de muchas cosas no se",
      "El constante flujo y reflujo de divisas"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta errores tipográficos y gramaticales que hacen que el enunciado no sea claro.",
    "explicacion_correcta": "A) Los checoslovacos combatían en las\nB) Un sinnúmero de feligreses acudió a\nC) La creación de muchas cosas no se\nD) El constante flujo y reflujo de divisas",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B tiene errores tipográficos y gramaticales, como 'sinnúmero' en lugar de 'sin número'.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C tiene errores tipográficos y gramaticales, como 'creación' en lugar de 'creación de'.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D tiene errores tipográficos y gramaticales, como 'divisas' en lugar de 'divisas internacionales'.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_15",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "De acuerdo con la relación de",
    "opciones": [
      "Gula – pecado",
      "Verdad – escándalo",
      "Poder – orgullo",
      "Sereno – serenidad"
    ],
    "correcta": 0,
    "explicacion": "La pregunta compara pares de palabras relacionadas con conceptos morales o éticos.",
    "explicacion_correcta": "A) Gula – pecado: La gula es un deseo excesivo y constante, mientras que el pecado implica una acción mal intencionada. Ambas son considerados vicios morales.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Verdad – escándalo: La verdad es algo positivo y honesto, mientras que un escándalo es una revelación inesperada de algo negativo. No están relacionados en el contexto moral.\"}, {\"opcion\": \"C\", \"razon\": \"Poder – orgullo: El poder puede ser usado de manera ética o no, pero el orgullo siempre es considerado negativo. No tienen relación directa en términos morales.\"}, {\"opcion\": \"D\", \"razon\": \"Sereno – serenidad: Sereno y serenidad son estados similares que implican paz interior, pero no están relacionados con conceptos morales o éticos como la gula y el pecado.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_16",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Sinónimo de AVATAR",
    "opciones": [
      "Tragedia.",
      "Aflicción.",
      "El rebaño avanza sin cesar y ellos",
      "El rebaño avanza sin cesar y ellos"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un error tipográfico en el texto del enunciado, lo que hace que no pueda entenderse correctamente.",
    "explicacion_correcta": "El término 'AVATAR' se refiere a una representación digital de una persona o ser vivo dentro de un sistema informático. No tiene relación con ninguna de las opciones proporcionadas (tragedia, aflicción, rebaño). La pregunta está corrupta debido al error tipográfico.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B no está relacionada con el término 'AVATAR' y es incorrecta por lo tanto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C presenta un texto corrupto y no tiene relación con el término 'AVATAR', por lo que es incorrecta.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es una repetición de la opción C, también corrupta y no relacionada con el término 'AVATAR', por lo que es incorrecta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_19",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar la expresión algebraica",
    "opciones": [
      "6x + 3",
      "4x + 3",
      "10x + 3",
      "6x + 12"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones incompletas y el enunciado no se entiende claramente.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta está corrupta y no se puede entender con certeza.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no es coherente, por lo que no hay opciones correctas o incorrectas.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta no es coherente, por lo que no hay opciones correctas o incorrectas.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta no es coherente, por lo que no hay opciones correctas o incorrectas.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_20",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza la siguiente expresión",
    "opciones": [
      "(n2 + 3)(n3 – 6)",
      "(n3 + 3)(n3 + 6)",
      "1 y 2",
      "2 y 3"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los valores que satisfacen la",
    "opciones": [
      "–1 y –2",
      "–3 y 2",
      "x 5",
      "x 5"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores, como opciones repetidas y un enunciado no claro.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Por que la pregunta no tiene sentido\"}, {\"opcion\": \"C\", \"razon\": \"Por que la pregunta no tiene sentido\"}, {\"opcion\": \"D\", \"razon\": \"Por que la pregunta no tiene sentido\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_22",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si resuelves la desigualdad",
    "opciones": [
      "x 5",
      "x 5",
      "(–2, 3, 5)",
      "(–2, 4, 5)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y no se entiende completamente.",
    "explicacion_correcta": "No puedo resolver una desigualdad porque la pregunta no proporciona ninguna desigualdad específica para resolver. La pregunta parece estar incompleta o corrupta, por lo que no es posible dar una respuesta precisa.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y no tiene sentido en el contexto de la pregunta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene un rango de números que no se relaciona con ninguna desigualdad posible.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D también contiene un rango de números que no tiene relación con ninguna desigualdad posible.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_23",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La solución al sistema de ecuaciones",
    "opciones": [
      "(2, 3, –5)",
      "{1, 3}",
      "{2, 3, 4}",
      "–6"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y presenta errores en el formato de las opciones.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la falta de información completa y coherente en la pregunta. Las opciones presentadas no corresponden al sistema de ecuaciones descrito.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y presenta un conjunto de números sin contexto.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C contiene números que no tienen relación con el sistema de ecuaciones descrito.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D es un número individual que no tiene relación con el sistema de ecuaciones presentado.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_24",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si S = {1, 2} y Q = {2, 3, 4}, ¿cuál es el",
    "opciones": [
      "6",
      "9",
      "7",
      "la ley de los cosenos."
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta dos conjuntos S y Q, y solicita una operación que no se especifica en las opciones dadas.",
    "explicacion_correcta": "Para resolver este problema, necesitamos entender la operación que se está buscando. En este caso, la pregunta no proporciona información suficiente sobre qué operación debe realizarse con los conjuntos S y Q. Sin embargo, si consideramos la unión de ambos conjuntos (S ∪ Q), obtendríamos {1, 2, 3, 4}, lo que tiene 4 elementos. La opción A (6) no es correcta porque no se ha especificado qué operación se debe realizar.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (9) no está relacionada con la unión de conjuntos y tampoco se ha especificado en la pregunta.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (7) también no tiene relación con la operación solicitada y es incorrecta porque no se ha proporcionado el contexto necesario.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (la ley de los cosenos) es incorrecta porque no hay ninguna referencia a triángulos o ángulos en la pregunta, lo que hace que esta opción sea irrelevante y errónea.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_examen2010a1_25",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la longitud del lado q en el",
    "opciones": [
      "6",
      "9",
      "7",
      "la ley de los cosenos."
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_examen2010a1_26",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para encontrar la medida de los",
    "opciones": [
      "la ley de los senos.",
      "el teorema de Pitágoras.",
      "la razón trigonométrica tangente.",
      "5"
    ],
    "correcta": 0,
    "explicacion": "La pregunta busca encontrar la medida de los ángulos en un triángulo, lo cual se puede hacer utilizando la ley de los senos.",
    "explicacion_correcta": "La ley de los senos establece que en cualquier triángulo, el cociente entre la longitud de un lado y el seno del ángulo opuesto es constante. Esta ley permite calcular las medidas de los ángulos cuando se conocen dos lados y un ángulo o dos ángulos y un lado.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"El teorema de Pitágoras solo se aplica a triángulos rectángulos y no permite calcular los ángulos en cualquier tipo de triángulo.\"}, {\"opcion\": \"C\", \"razon\": \"La razón trigonométrica tangente solo proporciona la relación entre dos lados de un triángulo rectángulo, pero no permite calcular directamente las medidas de los ángulos.\"}, {\"opcion\": \"D\", \"razon\": \"El número 5 no tiene ninguna relación con el cálculo de las medidas de los ángulos en un triángulo.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_27",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Calcula la distancia del punto",
    "opciones": [
      "4",
      "(2, 3)",
      "(1, 4)",
      "(3, 3)"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores, como la ausencia del punto específico al que se refiere.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque no es una distancia.\"}, {\"opcion\": \"C\", \"razon\": \"Porque no es una distancia.\"}, {\"opcion\": \"D\", \"razon\": \"Porque no es una distancia.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_30",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación ordinaria de la mediana",
    "opciones": [
      "y2 x 3 \u0010 \u000e",
      "yx 3 \u0010 \u000e",
      "1yx 3 4 \u0010 \u000e",
      "1yx 2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_31",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación ordinaria de la mediatriz",
    "opciones": [
      "y3 x 6 \u0010 \u000e",
      "y3 x 7 \u0010 \u000e",
      "y2 x 5 \u0010 \u000e",
      "y2 x 6 \u0010 \u000e"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_33",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación de una elipse",
    "opciones": [
      "9x2  – 10y2 =90",
      "10x2  – 9y2 =90",
      "x2 – y2 – 8x – 12y – 1 = 0",
      "x2 – 64y2 – 64 = 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una elipse está en forma general como (x^2/a^2) + (y^2/b^2) = 1. Las opciones A y B no están en esta forma, por lo que son incorrectas.",
    "explicacion_correcta": "La opción A es correcta porque su ecuación está en la forma general de una elipse: 9x^2/90 + 10y^2/90 = 1. Simplificando, obtenemos (x^2/10) + (y^2/9) = 1, que es la ecuación de una elipse.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"No está en la forma general de una elipse. La ecuación sería (x^2/90) - (y^2/10) = 1, que representa una hipérbola.\"}, {\"opcion\": \"C\", \"razon\": \"Es una ecuación cuadrática general, no está en la forma de una elipse. La ecuación completa sería x^2 + y^2 - 8x - 12y - 1 = 0, que representa una circunferencia tras completar los cuadrados.\"}, {\"opcion\": \"D\", \"razon\": \"No está en la forma general de una elipse. La ecuación sería x^2/64 - y^2/1 = 1, que representa una hipérbola hiperbólica.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_34",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la hipérbola centrada",
    "opciones": [
      "9x2  – 10y2 =90",
      "10x2  – 9y2 =90",
      "x2 – y2 – 8x – 12y – 1 = 0",
      "x2 – 64y2 – 64 = 0"
    ],
    "correcta": 0,
    "explicacion": "La ecuación de una hipérbola centrada en el origen tiene la forma general \\(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\) o \\(\\frac{y^2}{b^2} - \\frac{x^2}{a^2} = 1\\). Las opciones A y B son las únicas qu...",
    "explicacion_correcta": "La opción A, \\(9x^2 - 10y^2 = 90\\), se puede dividir entre 90 para obtener la forma estándar de la ecuación de una hipérbola: \\(\\frac{x^2}{10} - \\frac{y^2}{9} = 1\\). Esta es una hipérbola centrada en el origen con semi-eje real \\(a = \\sqrt{10}\\) y semi-eje imaginario \\(b = \\sqrt{9}\\). La opción B, \\(10x^2 - 9y^2 = 90\\), también se puede dividir entre 90 para obtener la misma forma estándar, pero con los roles de \\(x\\) y \\(y\\) intercambiados. Ambas son ecuaciones válidas de hipérbolas centradas en el origen.",
    "analisis_distractores": "[{\"opcion\": \"C\", \"razon\": \"La opción C, \\\\(x^2 - y^2 - 8x - 12y - 1 = 0\\\\), no está en la forma general de una hipérbola centrada en el origen. Requiere completar el cuadrado para transformarse en esa forma.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D, \\\\(x^2 - 64y^2 - 64 = 0\\\\), no está en la forma general de una hipérbola centrada en el origen. Requiere dividir todos los términos entre -64 para transformarse en esa forma.\"}, {\"opcion\": \"B\", \"razon\": \"La opción B, \\\\(10x^2 - 9y^2 = 90\\\\), es una hipérbola centrada en el origen con los roles de \\\\(x\\\\) y \\\\(y\\\\) intercambiados. Aunque es correcta, no es la forma más estándar que se busca en esta pregunta.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_35",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "De las siguientes ecuaciones,",
    "opciones": [
      "circunferencia.",
      "parábola.",
      "elipse.",
      "hipérbola."
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones que no corresponden a ecuaciones matemáticas, sino a figuras geométricas.",
    "explicacion_correcta": "Las opciones A, B, C y D son figuras geométricas, no ecuaciones. La pregunta está mal formulada y no puede evaluarse como tal.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es una figura geométrica\"}, {\"opcion\": \"C\", \"razon\": \"Porque es una figura geométrica\"}, {\"opcion\": \"D\", \"razon\": \"Porque es una figura geométrica\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_36",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Si en la ecuación",
    "opciones": [
      "circunferencia.",
      "parábola.",
      "elipse.",
      "hipérbola."
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y opciones incompletas, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es coherente\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_38",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El límite de la función f(x) = 4",
    "opciones": [
      "2",
      "4",
      "– 1",
      "1"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta un texto corrupto y incompleto, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es coherente\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_examen2010a1_40",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "La derivada de la expresión",
    "opciones": [
      "1 2",
      "0",
      "1",
      "2"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está corrupta y el enunciado no se entiende.",
    "explicacion_correcta": "No puedo proporcionar una explicación porque la pregunta no tiene sentido y las opciones están incompletas o incorrectas.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B está incompleta y no se puede determinar su significado.\"}, {\"opcion\": \"C\", \"razon\": \"La opción C está incompleta y no se puede determinar su significado.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D está incompleta y no se puede determinar su significado.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_examen2010a1_41",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "La derivada de y = ln(x2 + 5) es",
    "opciones": [
      "3",
      "6",
      "4",
      "e C"
    ],
    "correcta": 0,
    "explicacion": "La derivada de y = ln(x^2 + 5) se calcula usando la regla de la cadena.",
    "explicacion_correcta": "Primero, aplicamos la regla de la cadena: dy/dx = (1/(x^2 + 5)) * d(x^2 + 5)/dx. Luego, derivamos x^2 + 5 con respecto a x, lo que da 2x. Por lo tanto, dy/dx = (2x) / (x^2 + 5). La opción A no es correcta porque no coincide con este resultado.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La opción B (6) no tiene relación con la derivada de ln(x^2 + 5).\"}, {\"opcion\": \"C\", \"razon\": \"La opción C (4) tampoco es correcta porque no refleja el proceso de derivación.\"}, {\"opcion\": \"D\", \"razon\": \"La opción D (e C) está mal formada y no tiene sentido en este contexto matemático.\"}]",
    "confianza_explicacion": "baja"
  },
  {
    "id": "mat_examen2010a1_43",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es la integral definida de",
    "opciones": [
      "movimiento uniforme: II y III;",
      "movimiento uniforme: I y III;",
      "movimiento uniforme: III; movimiento",
      "movimiento uniforme: II; movimiento"
    ],
    "correcta": 0,
    "explicacion": "La pregunta presenta opciones incompletas y texto corrupto, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no se entiende\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no se entiende\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no se entiende\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_44",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "La solución de la integral indefinida",
    "opciones": [
      "movimiento uniforme: II y III;",
      "movimiento uniforme: I y III;",
      "movimiento uniforme: III; movimiento",
      "movimiento uniforme: II; movimiento"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores, como la opción A que no tiene sentido en el contexto de los movimientos uniformes.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"C\", \"razon\": \"Porque es incorrecta\"}, {\"opcion\": \"D\", \"razon\": \"Porque es incorrecta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_45",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Del movimiento de un coche se",
    "opciones": [
      "movimiento uniforme: II y III;",
      "movimiento uniforme: I y III;",
      "movimiento uniforme: III; movimiento",
      "movimiento uniforme: II; movimiento"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores tipográficos, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"C\", \"razon\": \"Porque la pregunta no es coherente\"}, {\"opcion\": \"D\", \"razon\": \"Porque la pregunta no es coherente\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_48",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Sobre un cuerpo se aplicaron",
    "opciones": [
      "3.2 kg",
      "4.0 kg",
      "=Ec mv",
      "= 2Ec 2mv"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores gramaticales, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la opción B no tiene sentido en el contexto de la pregunta\"}, {\"opcion\": \"C\", \"razon\": \"Porque la opción C contiene un error matemático y no es una respuesta válida\"}, {\"opcion\": \"D\", \"razon\": \"Porque la opción D también contiene errores matemáticos y no es una respuesta correcta\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_49",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación que permite calcular la",
    "opciones": [
      "= mvEc 2",
      "= 21Ec mv2",
      "50,400 J,  50,400 J",
      "420 J,       420 J"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores gramaticales, lo que dificulta su comprensión.",
    "explicacion_correcta": "",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"Porque la opción B no tiene sentido en el contexto de la pregunta\"}, {\"opcion\": \"C\", \"razon\": \"Porque la opción C contiene valores numéricos que no corresponden a ninguna ecuación física conocida\"}, {\"opcion\": \"D\", \"razon\": \"Porque la opción D también contiene valores numéricos inapropiados para una ecuación\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_50",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una bala de cañón de 7.0 kg se",
    "opciones": [
      "50,400 J,  cero J",
      "420 J,       cero J",
      "en un proceso su temperatura no",
      "su temperatura es igual a la de otro"
    ],
    "correcta": 0,
    "explicacion": "La pregunta está incompleta y contiene errores gramaticales, lo que dificulta su comprensión.",
    "explicacion_correcta": "No se puede determinar la respuesta correcta debido a la falta de información en la pregunta.",
    "analisis_distractores": "[{\"opcion\": \"B\", \"razon\": \"La pregunta no proporciona suficiente información para evaluar esta opción.\"}, {\"opcion\": \"C\", \"razon\": \"La pregunta está incompleta y no se puede determinar si es correcto o incorrecto.\"}, {\"opcion\": \"D\", \"razon\": \"La pregunta no contiene elementos que permitan evaluar la veracidad de esta opción.\"}]",
    "confianza_explicacion": "alta"
  },
  {
    "id": "mat_examen2010a1_52",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para convertir un valor de temperatura",
    "opciones": [
      "calor latente de fusión.",
      "calor latente de vaporización.",
      "capacidad térmica específica.",
      "5.00 cm/s"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_53",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "A la cantidad de calor que necesita un",
    "opciones": [
      "calor latente de fusión.",
      "calor latente de vaporización.",
      "capacidad térmica específica.",
      "5.00 cm/s"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_54",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una onda formada en una cuerda tiene",
    "opciones": [
      "la amplitud de ambas ondas.",
      "la fase relativa entre ambas ondas.",
      "que ambas ondas sean",
      "que ambas ondas sean transversales."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_55",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Dos ondas de la misma frecuencia",
    "opciones": [
      "la amplitud de ambas ondas.",
      "la fase relativa entre ambas ondas.",
      "que ambas ondas sean",
      "que ambas ondas sean transversales."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_56",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La interferencia de dos ondas puede",
    "opciones": [
      "energía.",
      "longitud de onda.",
      "hace difícil el flujo de corriente",
      "no puede ser un elemento puro"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_57",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un aislante eléctrico es un material",
    "opciones": [
      "reduce a la mitad.",
      "mantiene sin cambio.",
      "incrementa al doble.",
      "incrementa al cuádruple."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_58",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "A una resistencia eléctrica R se aplica",
    "opciones": [
      "reduce a la mitad.",
      "mantiene sin cambio.",
      "incrementa al doble.",
      "incrementa al cuádruple."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_59",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "El índice de refracción del cuarzo es",
    "opciones": [
      "1,943 Km/s",
      "194 Km/s",
      "Física y Biología.",
      "Química y Biología."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "544. ¿Con qué velocidad se propaga",
    "opciones": [
      "1,943 Km/s",
      "194 Km/s",
      "Física y Biología.",
      "Química y Biología."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_60",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿En qué áreas recibió Madame Curie",
    "opciones": [
      "Física y Química.",
      "El aire es un compuesto y el cloruro",
      "El cloruro de sodio es un elemento y",
      "El aire es una mezcla y la plata es un"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_61",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el enunciado verdadero?",
    "opciones": [
      "CO  – Mg(OH) 2 – Al2 (SO3)2",
      "CO2 – Mn(OH)2 – AlSO4",
      "CO  – Mg(OH)2 – Al2 (SO4)3",
      "14.6"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_62",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las fórmulas del monóxido de",
    "opciones": [
      "CO  – Mg(OH) 2 – Al2 (SO3)2",
      "CO2 – Mn(OH)2 – AlSO4",
      "CO  – Mg(OH)2 – Al2 (SO4)3",
      "14.6"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_65",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Propiedad del agua gracias a la cual",
    "opciones": [
      "Polaridad de la molécula.",
      "Formación de puentes de hidrógeno.",
      "Alcalina.",
      "Ácida."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_66",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución cuyo pH es de 2 es una",
    "opciones": [
      "mecánicos y químicos.",
      "químicos y biológicos.",
      "oxígeno.",
      "ozono."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_67",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los desechos producidos por",
    "opciones": [
      "mecánicos y químicos.",
      "químicos y biológicos.",
      "oxígeno.",
      "ozono."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_68",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En el aire que respiramos, el elemento",
    "opciones": [
      "N O NO N O NO",
      "N O NO 2N 2O NO",
      "N O 2NO N O 2NO",
      "N O 2NO N 2O 2NO"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_69",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El nitrógeno reacciona con el oxígeno",
    "opciones": [
      "N O NO N O NO",
      "N O NO 2N 2O NO",
      "N O 2NO N O 2NO",
      "N O 2NO N 2O 2NO"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_70",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para la formación de un mol de cada",
    "opciones": [
      "C O H º 1 1 0 . 5 k J/m o l",
      "NO Hº 33.2kJ / mol",
      "SO Hº 296.8kJ / mol",
      "SO Hº 395.7kJ / mol"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_71",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Estructura de forma alargada",
    "opciones": [
      "Aparato de Golgi.",
      "Ribosoma.",
      "Mitocondria.",
      "glucosa y bióxido de carbono."
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_72",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El proceso fotosintético que realizan",
    "opciones": [
      "oxígeno y bióxido de carbono.",
      "glucosa y oxígeno.",
      "oxígeno y fósforo.",
      "elaboran sus nutrientes."
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_73",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La respiración es el proceso por el",
    "opciones": [
      "expulsan dióxido de carbono a la",
      "transforman compuestos orgánicos en",
      "obtienen energía.",
      "46 XX."
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_74",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Una célula presenta un número",
    "opciones": [
      "I y II",
      "I, II y III",
      "II y III",
      "Replicación."
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_75",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál o cuáles de las siguientes son",
    "opciones": [
      "I y II",
      "I, II y III",
      "II y III",
      "Replicación."
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_77",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En la actualidad, es la teoría más",
    "opciones": [
      "La selección natural y la mutación son",
      "Los organismos actuales son el",
      "Los organismos mejor adaptados son",
      "La herencia de los caracteres"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_78",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la premisa de la Teoría de",
    "opciones": [
      "La selección natural y la mutación son",
      "Los organismos actuales son el",
      "Los organismos mejor adaptados son",
      "La herencia de los caracteres"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_79",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son productores primarios:",
    "opciones": [
      "Bacterias y hongos.",
      "Hongos y algas.",
      "Amibas y hongos.",
      "Pastos y algas."
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_80",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es la actividad humana que deteriora",
    "opciones": [
      "Crianza comercial de ganado vacuno",
      "Desecho de productos industriales en",
      "Consumo de combustibles fósiles y",
      "Caza sin límite de especies en peligro"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_81",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Países que practicaron un",
    "opciones": [
      "Inglaterra y Francia.",
      "Rusia y Turquía.",
      "Alemania e Italia.",
      "Alemania y Rusia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_82",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Se le da el nombre de imperialismo al",
    "opciones": [
      "expansión del capitalismo ocurrido en",
      "conquista y colonización europea del",
      "dominación señorial en la Rusia",
      "restauración de las monarquías"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_83",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El motivo inmediato que ocasionó la",
    "opciones": [
      "derrota en la batalla de los montes",
      "firma del tratado de Brest-Litovsk.",
      "Revolución bolchevique.",
      "derrota en Gallípoli."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_84",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La crisis económica de 1929 en",
    "opciones": [
      "los problemas con la Unión de",
      "la crisis de la Bolsa de Valores.",
      "la rivalidad con Alemania.",
      "el surgimiento del fascismo."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_86",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Alianzas económico-políticas e",
    "opciones": [
      "La OTAN y la ONU.",
      "La ONU y el Pacto de Varsovia.",
      "El OMC y la OEA.",
      "El Pacto de Varsovia y la OTAN."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_87",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al desembarco de armamento en",
    "opciones": [
      "Crisis de los misiles.",
      "Guerra de las Potencias.",
      "Guerra de las galaxias.",
      "la presencia militar de los Estados"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_90",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hecho que se consideró como el",
    "opciones": [
      "La paz armada.",
      "La Guerra Fría.",
      "La desaparición del muro de Berlín.",
      "La Guerra de los Balcanes."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_91",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Objetivo primordial de la Conspiración",
    "opciones": [
      "Constituir una junta gubernativa que",
      "Llevar al poder al corregidor Don",
      "Crear una confederación de estados",
      "Establecer una república democrática"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_92",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Durante los primeros años de vida",
    "opciones": [
      "monarquistas, republicanos y",
      "federalistas, centralistas y",
      "centralista.",
      "unicameral."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_93",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La Constitución de 1857 fue",
    "opciones": [
      "la carencia de capital para modernizar",
      "el enfrentamiento político con la",
      "el rompimiento de las relaciones",
      "el interés del capital estadounidense"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_94",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Uno de los problemas que enfrentó la",
    "opciones": [
      "la carencia de capital para modernizar",
      "el enfrentamiento político con la",
      "el rompimiento de las relaciones",
      "el interés del capital estadounidense"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_98",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Se conoce como Maximato al periodo",
    "opciones": [
      "Plutarco Elías Calles.",
      "Luis N. Morones.",
      "romper relaciones diplomáticas con",
      "no intervenir en ningún bando."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_99",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La posición de México ante la",
    "opciones": [
      "vender petróleo a ambos",
      "romper relaciones con las potencias",
      "Corrupción de gobierno.",
      "Expansión comercial."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_102",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Obra que se ha concebido para que",
    "opciones": [
      "Individualismo y subjetividad",
      "Veracidad, exactitud y desenlace",
      "Dramático.",
      "Didáctico."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_103",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige las características propias del",
    "opciones": [
      "Individualismo y subjetividad",
      "Veracidad, exactitud y desenlace",
      "Dramático.",
      "Didáctico."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Escritor representante del Realismo",
    "opciones": [
      "Benito Pérez Galdós.",
      "Ramón del Valle Inclán.",
      "la divina comedia.",
      "novelas ejemplares."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_107",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Poeta mexicano de la segunda mitad",
    "opciones": [
      "Exaltar las virtudes de los",
      "Describir lugares y personas.",
      "Referir acontecimientos de lugares y",
      "amplio desarrollo psicológico de los"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_108",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Característica fundamental de la",
    "opciones": [
      "Exaltar las virtudes de los",
      "Describir lugares y personas.",
      "Referir acontecimientos de lugares y",
      "amplio desarrollo psicológico de los"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_110",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La siguientes es una ficha:",
    "opciones": [
      "Hemerográfica",
      "De Cita.",
      "12:00 hrs.",
      "13:00 hrs."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_111",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si en el huso horario 0° son las",
    "opciones": [
      "de San Pedro Mártir.",
      "Madre Occidental.",
      "China.",
      "Perú."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_112",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El estado de Chihuahua está recorrido",
    "opciones": [
      "de San Pedro Mártir.",
      "Madre Occidental.",
      "China.",
      "Perú."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_113",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "País que ocupa el primer lugar en la",
    "opciones": [
      "camarón y jaiba.",
      "salmón y bacalao.",
      "ostión y camarón.",
      "sur de Estados Unidos de América,"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_114",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las corrientes frías se relacionan con",
    "opciones": [
      "camarón y jaiba.",
      "salmón y bacalao.",
      "ostión y camarón.",
      "sur de Estados Unidos de América,"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_116",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El aumento y retención del bióxido de",
    "opciones": [
      "el cambio global del agua.",
      "el cambio climático global.",
      "la alteración del viento.",
      "la modificación del relieve."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_117",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En la distribución poblacional actual",
    "opciones": [
      "la existencia de amplios litorales.",
      "el desarrollo de la frontera norte.",
      "la pesca en las costas del Golfo.",
      "el desarrollo petrolero del sureste."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_118",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son algunas características que",
    "opciones": [
      "I, IV y V",
      "I, III y IV",
      "II, III y V",
      "III, IV y V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_119",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La formación de nuevos países en",
    "opciones": [
      "regionalización económica.",
      "economía centralizada.",
      "Morelos, México y Puebla.",
      "Tlaxcala, Querétaro y Guanajuato."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_132",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina en qué intervalo la gráfica es creciente y",
    "opciones": [
      "Creciente en (0, ∞), decreciente en (-∞, 0)",
      "Creciente en (-∞, 0), decreciente en (0, ∞)",
      "Creciente en (-5, 0), decreciente en (0, 5)",
      "Creciente en (0, 5), decreciente en (-5, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_193",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Cuando la excentricidad es igual a cero, se dice que la gráfica",
    "opciones": [
      "Elipse.",
      "Hipérbola.",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_200",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "En términos de seno y coseno de un ángulo la tan𝜶 es igual a:",
    "opciones": [
      "𝑠𝑒𝑛 𝛼",
      "𝑐𝑜𝑠 𝛼",
      "𝑠𝑒𝑛 𝛼",
      "𝑐𝑜𝑡 𝛼"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_205",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué puntos pertenecen a la recta x = 2?",
    "opciones": [
      "(1,2) (2,2)",
      "(2,1) (2,2)",
      "(1,1) (2,2)",
      "(2,0) (0,2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_206",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza 27x6 – 8y3.",
    "opciones": [
      "(3x – 2y)(9x – 4y2)",
      "(3x3 – 2y)(9x3 – 6xy + 4y)",
      "(3x2 – 2y)(9x4 + 6x2y + 4y2)",
      "(3x – 2y)(3x + 2y)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_220",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Encuentra la ecuación de la parábola vertical con F(1, 2)",
    "opciones": [
      "x2 – 2x – 8y + 1 = 0",
      "y2 – 2y – 8x + 1 = 0",
      "x2 + 2x + 8y – 1 = 0",
      "y2 + 2x + 8x – 1 = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_236",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve {−𝟐𝒙 − 𝟑𝒚 = 𝟔",
    "opciones": [
      "(0, -2)",
      "(2, 0)",
      "(0, 2)",
      "(-2, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_251",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una tienda hace el Descuento del 60% por mayoreo de",
    "opciones": [
      "$90",
      "$100",
      "$240",
      "$350"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_4",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para contestar, DEBERÁ LEER CON ATENCIÓN la pregunta y ELEGIR la respuesta que",
    "opciones": [
      "2.1657",
      "3.0192",
      "3.1416",
      "4.2832"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_98",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "El número  es aproximadamente igual a:",
    "opciones": [
      "2.1657",
      "3.0192",
      "3.1416",
      "4.2832"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si U tiene un valor de 10, G un valor de 100 y H un valor de 1 000, ¿cuál de las opciones muestra diez",
    "opciones": [
      "1 000 000 + 100 000 + 10 000 = 1 110 000",
      "10 000 + 1 000 + 100 = 11 100",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_116",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Qué factorización resulta de x3 – 27?",
    "opciones": [
      "    1 a 2 a",
      "   4 y 3 x   B)",
      "  b a   B)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_117",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La factorización de a 3 – 2a2 + a – 2, es:",
    "opciones": [
      "    1 a 2 a",
      "   4 y 3 x   B)",
      "  b a   B)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_118",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza 3y + xy – 4x – 12",
    "opciones": [
      "  1 x 2  B)",
      "   7 x 1 x 2   B)",
      "3 B)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_120",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Uno de los factores del trinomio 6x 2 – x – 2, es:",
    "opciones": [
      "  1 x 2  B)",
      "   7 x 1 x 2   B)",
      "3 B)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_127",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La simplificación de",
    "opciones": [
      "b 2 a",
      "b a",
      "1 x",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_132",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La racionalización de",
    "opciones": [
      " x 5 x x 2",
      "3",
      "9 x  B)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_138",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Cuál es el modelo matemático de “La suma de dos números es 73 y al dividir al mayor entre el menor,",
    "opciones": [
      "x",
      "1 x y",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiade16ma_198",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Obtén la derivada de y =",
    "opciones": [
      "23",
      "  C 2 x",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que presente un sinónimo de la palabra en negritas:",
    "opciones": [
      "falsos",
      "francos",
      "hipócritas",
      "taimados"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_14",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que presente un antónimo de la palabra subrayada:",
    "opciones": [
      "fundamentales",
      "esenciales",
      "insignificantes",
      "solitarios"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué oración tiene las palabras correctamente escritas con las grafías s, c y z?",
    "opciones": [
      "Hubo una amenaza de bomba durante el concurso de dansa.",
      "Ese portazo fue el fin de nuestro noviazgo.",
      "Los pastorcitos llevaban dulces en sus bolcillos.",
      "Tomé una foto buenícima de los osesnos con su madre."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué oración tiene las palabras correctamente escritas con las grafías v y ó?",
    "opciones": [
      "¡Alguien robó los livros de contavilidad!",
      "Trajo una cuveta llena de havas.",
      "Ese caballo blanco brincó las trancas muy fácilmente.",
      "Se trata de un antiguo proberbio chino que havla de compartir."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que presente una oración con ortografía correcta.",
    "opciones": [
      "El animal no tuvo más remedio que correr hacia los arbustos.",
      "El gato huyó en un bote de bela.",
      "Las vromas pesadas no son vromas.",
      "Debemos agradecer a nuestro venefactor."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_4",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que presente una oración con ortografía correcta:",
    "opciones": [
      "Por favor no bailas con ella.",
      "Recolectamos bayas para la merienda.",
      "Las vayas son frutos del bosque.",
      "Las vallenas son hermosos monstruos marinos."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige la opción que presente una ortografía correcta:",
    "opciones": [
      "Para ser un birtuoso de cualquier intrumento, hay que practicar 13 horas diarias.",
      "Ese conportamiento no es correcto.-",
      "En las próximas elecciones, no pienso botar por nadie.",
      "Las violetas pertenecen al grupo de los violáceos."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Farándula NO se asemeja a:",
    "opciones": [
      "pesimismo b) realidad c) ilusión d) desaliento",
      "maestro a alumno b) árbitro a uniforme c) obrero a fábrica d) carnicero a cuchillo",
      "cable a computadora b) tierra a gusano c) planta a pez d) agua a planta",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Espontaneidad se asemeja a:",
    "opciones": [
      "pesimismo b) realidad c) ilusión d) desaliento",
      "maestro a alumno b) árbitro a uniforme c) obrero a fábrica d) carnicero a cuchillo",
      "cable a computadora b) tierra a gusano c) planta a pez d) agua a planta",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_8",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Convite se parece a:",
    "opciones": [
      "pesimismo b) realidad c) ilusión d) desaliento",
      "maestro a alumno b) árbitro a uniforme c) obrero a fábrica d) carnicero a cuchillo",
      "cable a computadora b) tierra a gusano c) planta a pez d) agua a planta",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Quimera se refiere a:",
    "opciones": [
      "pesimismo b) realidad c) ilusión d) desaliento",
      "maestro a alumno b) árbitro a uniforme c) obrero a fábrica d) carnicero a cuchillo",
      "cable a computadora b) tierra a gusano c) planta a pez d) agua a planta",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Jugador de fútbol es a balón, como:",
    "opciones": [
      "carpintero a madera b) estudiante a escuela c) secretaria a lápiz d) doctor a enfermera",
      "motor a camión b) herradura a caballo c) cable a tranvía d) caja a camioneta",
      "cuchillo a cocinero",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Oxígeno es a ser humano, como:",
    "opciones": [
      "carpintero a madera b) estudiante a escuela c) secretaria a lápiz d) doctor a enfermera",
      "motor a camión b) herradura a caballo c) cable a tranvía d) caja a camioneta",
      "cuchillo a cocinero",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Mecánico es a taller, como:",
    "opciones": [
      "carpintero a madera b) estudiante a escuela c) secretaria a lápiz d) doctor a enfermera",
      "motor a camión b) herradura a caballo c) cable a tranvía d) caja a camioneta",
      "cuchillo a cocinero",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_26",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Jimena y su esposo sostuvieron una",
    "opciones": [
      "arreglo b) acuerdo c) altercado d) convenio",
      "reconciliación",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_27",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El auto disminuyó la velocidad hasta que el conductor consideró que__________",
    "opciones": [
      "arreglo b) acuerdo c) altercado d) convenio",
      "reconciliación",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_copiadeipnco_28",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El jugador y el árbitro tuvieron un debido a una confusión.",
    "opciones": [
      "arreglo b) acuerdo c) altercado d) convenio",
      "reconciliación",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ejerciciosmate_26",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Mediante integración, determina el área sombreada que se muestra en la siguiente grafica.",
    "opciones": [
      "2u3",
      "2u3",
      "2u5",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿ Cuál es el valor numérico de la siguiente expresión, cuando x = 7, 7 – 3(9 – x)?",
    "opciones": [
      "1 y 4 x 3+ − B)",
      "4 2a 2 a 2+  B)",
      "x(3x + 8) + 2(3x + 8) B)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_14",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El valor numérico de la expresión 2a – 15b + 12bc, cuando a = – 1, b = 2, c = – 3, es:",
    "opciones": [
      "1 y 4 x 3+ − B)",
      "4 2a 2 a 2+  B)",
      "x(3x + 8) + 2(3x + 8) B)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_15",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar ( ) 1 x y 5 ´ x 3+ − − +, se obtiene:",
    "opciones": [
      "1 y 4 x 3+ − B)",
      "4 2a 2 a 2+  B)",
      "x(3x + 8) + 2(3x + 8) B)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_31",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza y simplifica la siguiente expresión",
    "opciones": [
      "3 x",
      "( )4 x 22 −  B)",
      "1 b",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_165",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de dx x∫ , es:",
    "opciones": [
      "C",
      "( )3",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_166",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resolver ( )∫ dx x sen, es:",
    "opciones": [
      "C",
      "( )3",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_evalunammatp_167",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Calcula la integral indefinida ( )∫ − dx x sec 2 x 322 .",
    "opciones": [
      "C",
      "( )3",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_4",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Juan tiene el doble de la edad de María. La suma de las edades de",
    "opciones": [
      "2x + x = 108",
      "x + x = 108",
      "2x – x = 108",
      "2x + y = 108"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución de la desigualdad 6x – 1 > 7x – 2 es",
    "opciones": [
      "x < 0",
      "x < 1",
      "x < 2",
      "x > -1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución del sistema {𝟑𝐱 +  𝟐𝐲 =  𝟐𝟐",
    "opciones": [
      "x = 72/3       y = 85/11",
      "x = 72/3       y = 85/33",
      "x = 4            y = 5",
      "x = 1            y = 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_8",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿A qué función corresponde la siguiente gráfica?",
    "opciones": [
      "f (x) = cos(x)",
      "f (x) = cot(x)",
      "f (x) = sec(x)",
      "f (x) = sen(x)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_9",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Un terreno tiene forma de triángulo rectángulo, si la hipotenusa vale",
    "opciones": [
      "√45 m",
      "√44 m",
      "6 m",
      "5 m"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_10",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El rango o imagen de la función es",
    "opciones": [
      "(−∞, +∞)",
      "(0, ∞)",
      "[0, ∞)",
      "[-4, 4]"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_20",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una onza equivale a 28.34 g. Se tienen 5 bolsas de 1.5 onza cada una",
    "opciones": [
      "28.34g",
      "14.17g",
      "56.68g",
      "42.51g"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_24",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la circunferencia (x - 2)2 + (y - 1)2 =",
    "opciones": [
      "x2 + y2 – 4x – 2y – 4 = 0",
      "x2 + y2 + 4x + 2y + 11 = 0",
      "x2 + y2 – 4 = 0",
      "x2 + y2 + 4x + 2y – 4 = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_25",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Escribe la ecuación de una parábola horizontal que tiene un vértice",
    "opciones": [
      "(y – 2)2 = 12(x – 3)",
      "(y – 3)2 = 12(x – 2)",
      "(x – 2)2 = 12(y – 3)",
      "(x – 3)2 = 12(y – 2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_31",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver 3-1 – {(",
    "opciones": [
      "7/6",
      "-7/6",
      "-1/2",
      "6/7"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_33",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En una división, el dividendo es x3 – y3 y el cociente es x2 + xy + y2,",
    "opciones": [
      "x + y",
      "2x + 3",
      "x – xy + y",
      "x – y"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_34",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "un granjero tiene gallos y cabras, si la suma de sus cabezas es de 25",
    "opciones": [
      "{ x + y = 90",
      "{ x + y = 25",
      "{ x = 25 + y",
      "{ x + y = 25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_37",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el modelo matemático que permite resolver el siguiente",
    "opciones": [
      "x + 2(x + 1) = 272",
      "x + (x + 1) = 272",
      "2x + (x + 1) = 272",
      "x + 2(x – 1) = 272"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_38",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El segundo término de (a + b)6 es",
    "opciones": [
      "6a5b",
      "15a4b2",
      "20a3b3",
      "6ab5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_42",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de √𝒙𝟏𝟔𝒚𝟑𝟐𝟒",
    "opciones": [
      "x8y4",
      "x2y √𝑦4",
      "x4y8",
      "√𝑥𝑦 4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_43",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Al resolver la ecuación 5(4x - 1) – 2(5x - 5) = 20(x + 1) se obtiene",
    "opciones": [
      "x = 5/2",
      "x = -3/2",
      "x = -2",
      "x = -1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_47",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes afirmaciones cumple que |a| < b?",
    "opciones": [
      "a < -b o a < b",
      "a < b",
      "a < 1",
      "a < 2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_50",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Plantea matemáticamente el siguiente problema: “en un corral hay",
    "opciones": [
      "{ x + y = 60",
      "{ x + y = 60",
      "1/3 y -1/4",
      "-1/3 y -1/4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_53",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función f(x) = √𝒙 − 𝟑?",
    "opciones": [
      "x ≥ 3",
      "x > -2",
      "(-∞, ∞)",
      "(0, ∞)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_54",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función f(x) = ex?",
    "opciones": [
      "(- ∞, 0)",
      "(0, - ∞)",
      "{𝑥∈𝑅/ 𝑥 < 1}",
      "{𝑥∈𝑅/ 𝑥 ≤ − 1}"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_55",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función y = 𝐥𝐨(𝒙+𝟏)?",
    "opciones": [
      "{𝑥∈𝑅/ 𝑥 ≥ − 1}",
      "{𝑥∈𝑅/ 𝑥 > − 1}",
      "D: (0, ∞); R: (-∞, ∞)",
      "D: (0, ∞); R: (0, ∞)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_56",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio (D) y rango (R) de la función f(x) = 2x es",
    "opciones": [
      "D: (-∞, ∞); R: (0, ∞)",
      "D: (0, ∞); R: (-∞, 0)",
      "y = 0",
      "x = 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_58",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El resultado de sumar f(x) = x2 – 1 y g(x) = (x – 1)2 es",
    "opciones": [
      "2x2 – 2x",
      "x2 + x – 1",
      "π/2",
      "π/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_59",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuánto equivale un ángulo de 60° en radianes?",
    "opciones": [
      "π/4",
      "π/6",
      "√6",
      "√14"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_60",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para cambiar un foco fundido ubicado en la parte superior de un",
    "opciones": [
      "2√21",
      "2√6",
      "30°",
      "45°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_62",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si el punto medio de un segmento de recta es (-1,6) y uno de sus",
    "opciones": [
      "(-5, 7)",
      "(7, -5)",
      "55° y 35°",
      "90° y 70°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_63",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Uno de los ángulos de un triángulo mide 20°, la diferencial del doble",
    "opciones": [
      "120° y 10°",
      "40° y 50°",
      "Csc α",
      "Cos α"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_69",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La característica común que comparten todas las rectas de la forma",
    "opciones": [
      "Paralelas.",
      "Perpendiculares.",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_70",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es el lugar geométrico de los puntos del plano que equidistan de un",
    "opciones": [
      "Elipse.",
      "Hipérbola.",
      "Parábola vertical.",
      "Circunferencia con centro en el origen."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_73",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Para la ecuación x2 + y2 – 2x – 6y – 15 = 0. Encuentra la ecuación de",
    "opciones": [
      "(x + 1)2 + (y + 3)2 = 25",
      "(x + 1)2 - (y – 3)2 = 25",
      "x2 + y2 – 6x + 6y – 7 = 0",
      "x2 + y2 – 3x + 3y – 7 = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_74",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Si la ecuación de una circunferencia es x2 + y2 – 25 = 0, ¿Cuál es la",
    "opciones": [
      "x2 + y2 + 6x - 6y + 7 = 0",
      "x2 + y2 – 6x + 6y – 43 = 0",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_77",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación ordinaria de la parábola con vértice en V = (-2, 3) y foco",
    "opciones": [
      "(y – 3)2 = 4(x + 2)",
      "(x – 3)2 = 4(y + 2)",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_82",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes ecuaciones representa la ecuación general",
    "opciones": [
      "Ax2 + Bx + C = 0",
      "Ax2 + Bxy + Cy2 + Dx + Ey + F = 0",
      "Toma el valor de 9/2 cuando x toma el valor de 2.",
      "Es siempre 9/2."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_88",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la derivada de f(x) = 2xex?",
    "opciones": [
      "f´(x) = 2ex(x2 + 1)",
      "f´(x) = 2ex(x2 + 2x)",
      "𝟐𝒄𝒐𝒔 𝟐𝒙 + 𝒔𝒆𝒏 𝟐𝒙",
      "𝟐𝒄𝒐𝒔 𝟐𝒙 − 𝒔𝒆𝒏 𝟐𝒙"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_89",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la derivada de la función f(x) =",
    "opciones": [
      "𝒔𝒆𝒏 𝟐𝒙 − 𝟐𝒄𝒐𝒔 𝟐𝒙",
      "𝟐𝒄𝒐𝒔 𝟐𝒙 − 𝒔𝒆𝒏 𝟐𝒙",
      "15x4 – 4x",
      "60x3 – 4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_90",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la tercera derivada de la función y = x2(3x3 – 5)?",
    "opciones": [
      "180x2",
      "360x",
      "1 800x3",
      "2 150x2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_93",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de ∫ (𝒙 + 𝟏)2 dx es",
    "opciones": [
      "x3 + 1 + C",
      "(𝑥+1)3",
      "x – 2 + C",
      "2(𝑥−2)3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_94",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la integral 2∫ (𝒙 – 𝟐)2 dx?",
    "opciones": [
      "(𝑥−1)3",
      "6(x – 2)3 + C",
      "6(x + 1) + C",
      "3x2 + 6x + 3 + C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_95",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la integral 3∫ (𝒙 + 𝟏)2 dx?",
    "opciones": [
      "3(x3 + 1) + C",
      "(x + 1)3 + C",
      "senx",
      "–cosx"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_96",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de ∫𝒔𝒆𝒏𝒙 dx?",
    "opciones": [
      "tanx",
      "cotx",
      "x3 +",
      "6x – 2tanx + C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_97",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Calcular la integral indefinida ∫(𝟑𝒙𝟐−𝟐𝒔𝒆𝒄𝟐𝒙) 𝒅𝒙",
    "opciones": [
      "6x +",
      "x3 – 2tanx + C",
      "ex(x + 1) + C",
      "ex(x - 1) + C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_98",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de ∫𝒙𝒆𝒙 dx?",
    "opciones": [
      "x(ex + 1) + C",
      "ex + 1 + C",
      "23/6",
      "19/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_103",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "El diámetro de una circunferencia se apoya en los puntos A = (8, -4)",
    "opciones": [
      "(1, 4)",
      "(-1, 2)",
      "(3x – 1)(2x + 2)",
      "(2 – 3x)(1 + 2x)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_104",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza 6x2 – x – 2",
    "opciones": [
      "(6x + 1)(x – 2)",
      "(2x + 1)(3x – 2)",
      "3𝑥2 − 𝑥 − 1",
      "3𝑥2 − 𝑥 − 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la expresión",
    "opciones": [
      "3𝑥 − 𝑥 − 1",
      "3𝑥2 + 𝑥 + 1",
      "Derivada.",
      "Integral."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_107",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuánto vale la diagonal de un rectángulo de 20 metros de largo y",
    "opciones": [
      "16",
      "√544",
      "C = (1, 1), r = √20",
      "C = (1, 1), r = 20"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_108",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Define las coordenadas del centro y radio de la circunferencia",
    "opciones": [
      "C = (0, 0), r = √20",
      "C = (0, 0), r = 20",
      "3x(x – y)(x – y)",
      "2y(3x)(x – y)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el equivalente de 3x(x – y) + 2y(x – y)?",
    "opciones": [
      "(3x – 2y)(x – y)",
      "(3x + 2y)(x – y)",
      "(-∞, 5)",
      "(-∞, 5]"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_119",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "La diferencia entre el cuádruplo de un número y el triple del mismo",
    "opciones": [
      "324 = 4x – 3x",
      "324 = x4 – 3x",
      "324 = x3 – x3",
      "324 = 4x4 – 3x3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_120",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al multiplicar (√𝒙 – 3)(√𝒙 + 3) obtenemos",
    "opciones": [
      "x2 – 9",
      "x – 9",
      "x – 3",
      "x2 – 3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_121",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de ∫(𝟑𝒙𝟐  − 𝟏𝟏𝒙 − 𝟕)𝒅𝒙 es",
    "opciones": [
      "x3  –",
      "x3 – x2 – 7x + C",
      "x3 +",
      "x2 –"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_125",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Señala cuál es una simplificación de la expresión √𝟏𝟔𝒙𝟑𝒚𝟓𝟑",
    "opciones": [
      "2xy √2𝑦23",
      "√2𝑦23",
      "2xy",
      "2xy √𝑦3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_127",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "De las siguientes funciones, ¿Cuál es una función?",
    "opciones": [
      "x2 + y2 = 25",
      "f(x) = x",
      "y2 = 8x",
      "x2 + 4y2 – 20 = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_129",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de resolver (x – 1) (x + 1) es",
    "opciones": [
      "x2 + 1",
      "x2 + x – 1",
      "x2 – 1",
      "2x – 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_134",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones representa una función",
    "opciones": [
      "y = x",
      "y = x2 – 1",
      "y = 2x + 4",
      "y = e2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_144",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Línea que pasa por el origen",
    "opciones": [
      "y = x2",
      "y = 1",
      "y = x",
      "y = x + 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_153",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación que corresponde a una hipérbola equilátera con centro",
    "opciones": [
      "(𝑥+ 7)2",
      "𝑥",
      "(x + 5)2 – (y + 2)2 = 1",
      "x2 – y2 = 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_154",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Encuentra el dominio de f(x) =",
    "opciones": [
      "(-∞, −1) U (-1, ∞)",
      "(-∞, ∞)",
      "(-∞, −1)",
      "(-1, ∞)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_155",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cómo son entre si las siguientes dos rectas?",
    "opciones": [
      "Perpendiculares.",
      "Oblicuas.",
      "Paralelas.",
      "Secantes."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_157",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Qué cónica representa la ecuación 4x2 + 9y2 + 3x – 2y + 21 = 0?",
    "opciones": [
      "Elipse.",
      "Parábola.",
      "Circunferencia.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_159",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Encuentra el dominio de log (x – 1).",
    "opciones": [
      "(−∞, ∞)",
      "(-1, ∞)",
      "(1, ∞)",
      "(-1, 1)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_160",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la recta con m = 3 que pasa por el punto (1, -2).",
    "opciones": [
      "y – 2 = 3(x + 1)",
      "y – 1 = 3(x + 2)",
      "y + 2 = 3(x – 1)",
      "y + 1 = 3(x – 2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_162",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación general de (x + 2)2 + (y – 3)2 = 9",
    "opciones": [
      "x2 - y2 - 4x + 6y - 4 = 0",
      "x2 + y2 + x – y + 4 = 0",
      "x2 + y2 = 9",
      "x2 + y2 + 4x – 6y + 4 = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_163",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿A qué es igual (2x + 3) (8 - x)?",
    "opciones": [
      "16x – 3x",
      "16x2 – 9x",
      "2x(2x + 3) + 8(1 – x)",
      "2x(8 – x) + 3(8 – x)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_172",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es la segunda derivada de 2ex?",
    "opciones": [
      "4e2x",
      "8ex",
      "2ex",
      "2e2x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_175",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Resuelve f(x) + g(x) si f(x) = (x + 1)2 y g(x) = x2 – 1",
    "opciones": [
      "x2 + x",
      "2x2 + 2x",
      "2x2 + 2x – 1",
      "x2 – 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_178",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué valores indeterminan la función",
    "opciones": [
      "1 y -1/2",
      "0 y -1",
      "2 y 1",
      "0 y 2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_181",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de (2ay+1 + by-1)(2ay+1 – by-1) es",
    "opciones": [
      "4ay + by+2",
      "4a2y+2 – b2y-2",
      "2ay+2 – b2y-2",
      "4a2y+2 + b2y-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_182",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Es la recta que corta en dos puntos de la circunferencia.",
    "opciones": [
      "Radio.",
      "Tangente.",
      "Secante.",
      "Diámetro."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_184",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación general de segundo grado que representa una curva",
    "opciones": [
      "Ax2 + Bx2 + Cy + Dx + F = 0",
      "Ax2 + Cy2 + Dx + Ey + F = 0",
      "Ax2 + By2 + Cx + Dy + E = 0",
      "Ax2 + Bxy + Cy2 + Dx + Ey + F = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_186",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación 9x2 + 16y2 – 18x + 64y + 37 = 0 representa una",
    "opciones": [
      "Elipse.",
      "Circunferencia.",
      "Parábola.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_187",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación x2 – 3 = y – 1 representa una",
    "opciones": [
      "Circunferencia.",
      "Elipse.",
      "Línea.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_188",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Cuerda que pasa por el foco y es perpendicular al eje.",
    "opciones": [
      "Excentricidad.",
      "Eje menor.",
      "Lado recto.",
      "Foco."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_191",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Cuando la excentricidad es igual a cero, se dice que la gráfica que",
    "opciones": [
      "Elipse.",
      "Hipérbola.",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_194",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de f(x) =",
    "opciones": [
      "{x ϵ R | x ≥ 4}",
      "{x ϵ R | x ≥ 4 y x ≠ 2}",
      "{x ϵ R | x ≥ 0 y x ≠ 4}",
      "{x ϵ R | x ≤ 0 y x ≠ 4}"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_196",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Encontrar el vértice y foco de la parábola x2 = -8y",
    "opciones": [
      "V = (0, 0) y F = (0, -2)",
      "V = (0, -2) y F = (0, 0)",
      "V = (0, 0) y F = (0, -8)",
      "V = (0, 0) y F = (0, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_197",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿A cuántos grados equivalen",
    "opciones": [
      "110°",
      "150°",
      "200°",
      "180°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_198",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "En términos de seno y coseno de un ángulo la tan𝜶 es igual a",
    "opciones": [
      "𝑠𝑒𝑛𝛼",
      "𝑐𝑜𝑠𝛼",
      "𝑠𝑒𝑛𝛼",
      "𝑐𝑜𝑡𝛼"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_201",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si D = {𝟏, 𝟐} y R = {𝟐, 𝟑, 𝟒}, ¿Cuál es el rango de la función f: D --> R",
    "opciones": [
      "{2,3,4}",
      "{1}",
      "{2}",
      "{2,3}"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_203",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué puntos pertenecen a la recta x = 2?",
    "opciones": [
      "(1,2) y (2,2)",
      "(2,1) y (2,2)",
      "(1,1) y (2,2)",
      "(2,0) y (0,2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_204",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza 27x6 – 8y3",
    "opciones": [
      "(3x – 2y)(9x – 4y2)",
      "(3x3 – 2y)(9x3 – 6xy + 4y)",
      "(3x2 – 2y)(9x4 + 6x2y + 4y2)",
      "(3x – 2y)(3x + 2y)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_212",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación Ax2 + By2 + Dx + Ey + F = 0 cuando A=0 y B=0",
    "opciones": [
      "Línea.",
      "Circunferencia.",
      "Parábola.",
      "Elipse."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_213",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hallar las coordenadas del punto a una razón de 1/3 de P = (1, 2) a",
    "opciones": [
      "(3/4, 9/4)",
      "(1, 4)",
      "(3, 3)",
      "(2/3, 1/3)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_215",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si el punto P = (-1, 2) está a razón de ½ del punto Q = (-3, 5), hallar",
    "opciones": [
      "(1, 0)",
      "(3, -4)",
      "(1, 7)",
      "(-3, 4)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_217",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Encontrar el centro y radio de la ecuación x2 + y2 + 8x – 4y + 11 = 0",
    "opciones": [
      "C = (-4, 2) r = 3",
      "C = (4, -2) r = 3",
      "C = (-4, 2) r = 9",
      "C = (4, -2) r = 9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_231",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones representa una función lineal?",
    "opciones": [
      "y = x2",
      "y = x",
      "y = 5",
      "y = ex"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_232",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encuentra el centro y radio de (𝒙 −",
    "opciones": [
      "C = (6, 2)    r =",
      "C = (3, 5)    r =",
      "C = (",
      "C = ("
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_234",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve {−𝟐𝐱 −  𝟑𝐲 =  𝟔",
    "opciones": [
      "(0, -2)",
      "(2, 0)",
      "(0, 2)",
      "(-2, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_241",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué función no tiene asíntota?",
    "opciones": [
      "y = sen(x)",
      "y = tan(x)",
      "y = lnx",
      "y = √𝑥 − 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_242",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente y ordenada al origen de 3y = -6x + 3?",
    "opciones": [
      "3 y -1",
      "-6 y 1",
      "6 y -1",
      "-2 y 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_preguntasmate_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El centro de la hipérbola",
    "opciones": [
      "xe2)x´(f   B)",
      "54 3xy' 5x e  B)",
      "xe",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_preguntasmate_12",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Al derivar la función",
    "opciones": [
      "xe2)x´(f   B)",
      "54 3xy' 5x e  B)",
      "xe",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_preguntasmate_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "x(f  , se obtiene:",
    "opciones": [
      "xe2)x´(f   B)",
      "54 3xy' 5x e  B)",
      "xe",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_preguntasmate_13",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La derivada de la función",
    "opciones": [
      "xe2)x´(f   B)",
      "54 3xy' 5x e  B)",
      "xe",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_preguntasmate_14",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina la derivada de la función",
    "opciones": [
      "   ",
      "   ",
      " ",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_preguntasmate_15",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la derivada de la función",
    "opciones": [
      "   ",
      "   ",
      " ",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_preguntasmate_16",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Qué inciso te permite obtener la derivada de",
    "opciones": [
      "   ",
      "   ",
      " ",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_preguntasfsi_10",
    "materia": "matematicas",
    "tema": "probabilidad",
    "dificultad": 2,
    "pregunta": "Es posible distinguir el concepto de calor y temperatura dado que el calor es una forma de:",
    "opciones": [
      "energía libre medida en Watts y la temperatura es una energía que tiene una sustancia medida en grados",
      "energía fija medida en Newtons y la temperatura es una unidad que tiene una sustancia medida en grados",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "María tiene la mitad de años que tiene Juan, además la suma de sus edades es de 108 años. ¿Cuál es la",
    "opciones": [
      "x3  B )  x6  C )  x2   D )  x5",
      "x5 , y 3   B )  x5 , y 1   C )  x2 , y0   D )  x1 , y6",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_10",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Los valores que satisface la ecuación 2xx 1 2 , son:",
    "opciones": [
      "x3  B )  x6  C )  x2   D )  x5",
      "x5 , y 3   B )  x5 , y 1   C )  x2 , y0   D )  x1 , y6",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El conjunto solución de 1 x4 x1",
    "opciones": [
      "x3  B )  x6  C )  x2   D )  x5",
      "x5 , y 3   B )  x5 , y 1   C )  x2 , y0   D )  x1 , y6",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_16",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuántos grados equivales 3",
    "opciones": [
      "3 11,, 3 ,",
      "313,, 3 ,",
      "33  B )  37  C )  53  D )  82",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los valores de:",
    "opciones": [
      "3 11,, 3 ,",
      "313,, 3 ,",
      "33  B )  37  C )  53  D )  82",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_18",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "La distancia del segmento cuyos extremos son los puntos P1 (– 2, – 1) P2(– 3, 5), es:",
    "opciones": [
      "x2 y30   B )  2x y 5 0  C )  3x 2y 1 0   D )  x3 y20 ",
      " C2 , 4  C )   C8 , 4",
      "C4 , 2  D )   C4 , 2",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_19",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la recta que pasa por los puntos P1(1, 2) P2(5, 4), es:",
    "opciones": [
      "x2 y30   B )  2x y 5 0  C )  3x 2y 1 0   D )  x3 y20 ",
      " C2 , 4  C )   C8 , 4",
      "C4 , 2  D )   C4 , 2",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_20",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las coordenadas del centro de la ecuación de la circunferencia 22x y 8x 4y 11 0    ?",
    "opciones": [
      "  ",
      "",
      "13",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_archivetempmat_21",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación de la parábola de vértice el punto V(3, 3) y foco el punto F(3, 1)?",
    "opciones": [
      "  ",
      "",
      "13",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué modo discursivo predomina en",
    "opciones": [
      "Enumeración.",
      "Explicación.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_4",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué modo discursivo predomina en",
    "opciones": [
      "Argumentación.",
      "Narración.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La comparación entre los noventa y el",
    "opciones": [
      "auguran el germen de un espacio",
      "cumplen la ratificación del milenio.",
      "repiten los fragmentos más",
      "Ninguna de las anteriores"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_14",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige el párrafo con la mejor",
    "opciones": [
      "En este orden, la posibilidad y el",
      "Así, la posibilidad y el origen del",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige la opción con la ortografía",
    "opciones": [
      "El rebaño avanza sin cezar y ellos",
      "El rebaño avanza sin cesar y ellos",
      "El Coronel Juan Morales, se apodera",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_32",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "El foco de la parábola 2y8 x 0\u0010   es el",
    "opciones": [
      "8,0",
      "2, 0",
      "0, 2\u0010",
      "0, 8\u0010"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_46",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Estimando la aceleración de la",
    "opciones": [
      "9.8 s",
      "39.2 s",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_39",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "2 m/s alcance su punto más alto.",
    "opciones": [
      "9.8 s",
      "39.2 s",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_47",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un trío de caballos jala una carreta en",
    "opciones": [
      "1,500",
      "4,500",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_51",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un sistema está en equilibrio térmico",
    "opciones": [
      "sus propiedades termodinámicas no",
      "su volumen y su presión permanecen",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_63",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La cantidad de mL de HCl",
    "opciones": [
      "12.6",
      "coordinado.",
      "puente de hidrógeno.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_88",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La revuelta obrera de Berlín (1953) y",
    "opciones": [
      "el autoritarismo comunista soviético.",
      "la cortina de hierro.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_95",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cómo se llamó el grupo político que",
    "opciones": [
      "Los Científicos.",
      "Los antirreleccionistas.",
      "el movimiento zapatista.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_97",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Partido político con el que Plutarco",
    "opciones": [
      "Partido Nacional Revolucionario.",
      "Partido Liberal Mexicano.",
      "Partido Nacional Democrático.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_100",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Política económica que aplicó el",
    "opciones": [
      "Desarrollo compartido.",
      "lingüística.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_101",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Cuando el usuario de la lengua",
    "opciones": [
      "adecuación.",
      "Texto épico.",
      "Novela.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un cuento se diferencia de una novela",
    "opciones": [
      "desarrollo elaborado y rápido",
      "brevedad y rápido desenlace.",
      "intensidad y múltiples hilos narrativos.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_115",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La taiga es una región natural que se",
    "opciones": [
      "norte de Chile, norte de Suráfrica y",
      "norte de México, sur de Italia y sur de",
      "centro de Canadá, norte de Europa y",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_examen2010a1_120",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los estados de la República Mexicana",
    "opciones": [
      "Veracruz, Tabasco y Yucatán.",
      "Guerrero, Oaxaca y Chiapas.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_matemticasres_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Rogelio recibe un salario semanal de $800 más el 5% de",
    "opciones": [
      "$1,100",
      "$1,200",
      "$1,300",
      "$1,400"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_54",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la gráfica que representa el conjunto solución de: a +9)2x-1?",
    "opciones": [
      "x>-4 B)x<— ox<_L Dox>-A",
      "a>-1 B)O<a<2 C)0<a<1 D)a>-2",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_55",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué opción representa el conjunto solución de = - > X 2—-X+—?",
    "opciones": [
      "x>-4 B)x<— ox<_L Dox>-A",
      "a>-1 B)O<a<2 C)0<a<1 D)a>-2",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_64",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Cuál es el número de conejos y gallinas en un corral si en su conjunto hacen un total de 61 cabezas y",
    "opciones": [
      "El frasco de mermelada tiene capacidad de 5 It y el frasco de cajeta de 3 It",
      "El frasco de mermelada tiene capacidad de 3 It y el frasco de cajeta de 4 It",
      "El frasco de mermelada tiene capacidad de 2 It y el frasco de cajeta de 5 lt",
      "El frasco de mermelada tiene capacidad de 6 lt y el frasco de cajeta de 3 It"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_65",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un vendedor sabe que 4 frascos de mermelada y 3 frascos de cajeta tienen una capacidad de 24 litros,",
    "opciones": [
      "El frasco de mermelada tiene capacidad de 5 It y el frasco de cajeta de 3 It",
      "El frasco de mermelada tiene capacidad de 3 It y el frasco de cajeta de 4 It",
      "El frasco de mermelada tiene capacidad de 2 It y el frasco de cajeta de 5 lt",
      "El frasco de mermelada tiene capacidad de 6 lt y el frasco de cajeta de 3 It"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_66",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Resolver el siguiente sistema de ecuaciones: <4x + 3y — 2z=4  .",
    "opciones": [
      "xa y=-2,z=-4",
      "cl y=2,z=-5",
      "oe y=3,z=-4",
      "x=-3,y=1,z=2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_80",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "En la gráfica de la función f(x) =| Xx | + 2, ¿en qué intervalo la función es creciente y en qué intervalo la",
    "opciones": [
      "Decrece de (—«,0), Crece de (0, 00)",
      "Decrece de (0,0), Crece de (—~, 0)",
      "Decrece de(-oo, 2), Crece de(2, 00)",
      "Decrece de (2,0), Crece de (-~, 2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_107",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Determina el signo del seno y coseno del ángulo 6, que se muestra en el círculo unitario.",
    "opciones": [
      "Seno 6 tiene signo positivo y Cos®@ tiene signo negativo",
      "Seno 6 tiene signo negativo y Cos8 tiene signo positivo",
      "Seno 6 tiene signo negativo y Cos@ tiene signo negativo",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_207",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resolver [ex an 2x)ix, es:",
    "opciones": [
      "2 4x+C",
      "tx +C",
      "(xP +C",
      "4x* - 2x? +5x+C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_208",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de J Vx dx, es:",
    "opciones": [
      "2 4x+C",
      "tx +C",
      "(xP +C",
      "4x* - 2x? +5x+C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_209",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Al resolver la integral 1 4x -2x+5 )dx , se obtiene: ;",
    "opciones": [
      "x\" — >* +5x+C",
      "x* - x? +5x+C",
      "x* tan’ x +0 C) x* — secxtanx + C",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_216",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Al aplicar el método de integración por partes el resultado de la integral [xe*ax , es:",
    "opciones": [
      "= ‘",
      "—",
      "15.5 u?",
      "22 u?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_217",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El valor de A (2 + xix , es:",
    "opciones": [
      "= ‘",
      "—",
      "15.5 u?",
      "22 u?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_20200617154524_218",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si I, f(x )dx ny i g(x )dx oF entonces, el area bajo la curva I=} J, f(x)- |, a(x) |x, es",
    "opciones": [
      "= ‘",
      "—",
      "15.5 u?",
      "22 u?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_38",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Por qué los niños autistas no pueden ser atendidos por una maestra humana?",
    "opciones": [
      "El autismo los convierte en niños poco inteligentes",
      "Rechazan el aprendizaje si viene de uno de los de su especie -",
      "Ningún maestro estaría interesado en enseñar a niños autistas",
      "Se sienten identificados con los robots, porque se parecen a ellos"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_39",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la idea principal del párrafo 14?",
    "opciones": [
      "Se está trabajando para hacer más robots",
      "Se está trabajando para hacer más dinámicos a los robots",
      "Se está trabajando para hacer más real el aspecto físico de los robots",
      "Se está trabajando para incluir microexpresiones en el rostro de los robots"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_60",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el núcleo del sujeto de la siguiente oración?",
    "opciones": [
      "El peligro pasará muy pronto",
      "La película se trata de una casa embrujada",
      "Estaba hablando por teléfono en la sala del privado",
      "Desde hace 20 años, ese sillón no se ha movido de ahí"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_61",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona el inciso que contenga una oración con sujeto tácito.",
    "opciones": [
      "El peligro pasará muy pronto",
      "La película se trata de una casa embrujada",
      "Estaba hablando por teléfono en la sala del privado",
      "Desde hace 20 años, ese sillón no se ha movido de ahí"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_77",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elija el párrafo con la mejor redacción.",
    "opciones": [
      "Nadie sabe cómo se obtuvieron esas conclusiones débiles y que sin embargo fueron aceptadas ;",
      "Nadie sabe cómo se obtuvieron esas conclusiones débiles que, sin embargo, fueron aceptadas",
      "Sin embargo, no obstante, nadie sabe cómo se obtuvieron esas conclusiones débiles que fueron",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_79",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona el inciso que tiene el párrafo con la mejor redacción.",
    "opciones": [
      "Laura es ciega su madre debe leerle algunos fragmentos porque no están en Braile en la escuela",
      "Laura es ciega, y por eso su madre debe leerle algunos fragmentos porque no están en Braile en la",
      "Laura es ciega, sin embargo su madre debe leerle algunos fragmentos que estan en Braile en la",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_111",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona el enunciado que tiene ortografía correcta. :",
    "opciones": [
      "El patriarca tuvo desavenencias con los advenedízos que se abstubieron de las abluciones",
      "El patriarca tuvo desavenencias con los adbenedizos que se abstuvieron de las avluciones",
      "El patriarca tuvo desabenencias con los advenedizos que se abstuvieron de las abluciones",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_121",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que no presente errores.",
    "opciones": [
      "Cuando me levanté, veré qué me depara el destino",
      "Cuándo me levante, veré que me depara el destino",
      "Cuando me levante, veré qué me depara el destino",
      "Cuándo me levanté, veré qué me depara el destino"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_123",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la palabra que está escrita correctamente.",
    "opciones": [
      "Deshuesar",
      "El equipo de voleibol mostro una gran mejoría a lo largo del torneo, pero debe elevar el nivel si quiere",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_56",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El conjunto solución de — + 2<—+1 con a > 0, es:",
    "opciones": [
      "x=1,y=-2 B)x=-1,y=2 C)x=-2,y=1 D)x=-2,y=-1 .",
      "x=1,y=-1 B)x=4,y=2 C)x=-3,y=2 D)x=4,y=-1",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_57",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Resuelve el sistema de ecuaciones con 2 incógnitas hie) z",
    "opciones": [
      "x=1,y=-2 B)x=-1,y=2 C)x=-2,y=1 D)x=-2,y=-1 .",
      "x=1,y=-1 B)x=4,y=2 C)x=-3,y=2 D)x=4,y=-1",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_64",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Cuál es el número de conejos y gallinas en un corral si en su conjunto hacen un total de 61 cabezas y",
    "opciones": [
      "El frasco de mermelada tiene capacidad de 5 lt y el frasco de cajeta de 3 It",
      "El frasco de mermelada tiene capacidad de 3 lt y el frasco de cajeta de 4 lt",
      "El frasco de mermelada tiene capacidad de 2 It y el frasco de cajeta de 5 lt",
      "El frasco de mermelada tiene capacidad de 6 lt y el frasco de cajeta de 3 It"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_65",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un vendedor sabe que 4 frascos de mermelada y 3 frascos de cajeta tienen una capacidad de 24 litros,",
    "opciones": [
      "El frasco de mermelada tiene capacidad de 5 lt y el frasco de cajeta de 3 It",
      "El frasco de mermelada tiene capacidad de 3 lt y el frasco de cajeta de 4 lt",
      "El frasco de mermelada tiene capacidad de 2 It y el frasco de cajeta de 5 lt",
      "El frasco de mermelada tiene capacidad de 6 lt y el frasco de cajeta de 3 It"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_66",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Resolver el siguiente sistema de ecuaciones: <¿4x+3y-2z=4 .",
    "opciones": [
      "Xx=—,y=-—,z=-4",
      "me y=-2,z=-4",
      "mee y=2,z=-5",
      "x=L y=3,z=-4 ,"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_80",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "En la gráfica de la función f (x) = | Xx | + 2, ¿en qué intervalo la función es creciente y en qué intervalo la",
    "opciones": [
      "Decrece de (—«,0), Crece de (0, «o )",
      "Decrece de (0,0), Crece de ( -«, 0)",
      "Decrece de(—o, 2), Crece de(2, «)",
      "Decrece de (2,00), Crece de (-o, 2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_107",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Determina el signo del seno y coseno del ángulo 6, que se muestra en el círculo unitario.",
    "opciones": [
      "Seno 8 tiene signo positivo y Cos@ tiene signo negativo",
      "Seno 6 tiene signo negativo y Cos6 tiene signo positivo",
      "Seno 8 tiene signo negativo y Cos8 tiene signo negativo",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_119",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función y = log» (x - 1)?",
    "opciones": [
      "x=2 B)x=1 C)x=0 D)x=-1",
      "8/6 B) 12/2 C)8 D)6",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_3cuadernode_120",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La asíntota vertical de la función f(x)= 3Log(x — 1), es:",
    "opciones": [
      "x=2 B)x=1 C)x=0 D)x=-1",
      "8/6 B) 12/2 C)8 D)6",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_26",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la idea principal del primer párrafo del texto anterior?",
    "opciones": [
      "La relación de Charles Darwin con su esposa Emma Wedwood",
      "Los experimentos de Darwin con plantas y animales para determinar las caracteristicas de su",
      "El miedo del matrimonio Darwin-Wedgwood, debido a la gran cantidad de hijos que tenian",
      "El temor de Charles Darwin por las consecuencias de la endogamia en su descendencia"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_27",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué es endogamia?",
    "opciones": [
      "Enfermedad congénita propia de familias numerosas",
      "Practica de contraer matrimonio con personas del mismo sexo",
      "Practica de predecir problemas genéticos en los hijos venideros",
      "Practica de contraer matrimonio entre si con personas de ascendencia comun"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_70",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona el complemento indirecto de la siguiente oración:",
    "opciones": [
      "para compañeras",
      "Predicado",
      "Núcleo de sujeto",
      "Complemento directo"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_78",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la oración que esté mejor redactada.",
    "opciones": [
      "No entiendo cómo salió al mercado esa linea de maquillaje corriente y que sin embargo tuvo mucho",
      "No entiendo cómo salió al mercado esa linea de maquillaje corriente que, sin embargo, tuvo mucho",
      "No entiendo cómo salió al mercado esa línea de maquillaje corriente y que, mas sin embargo, tuvo",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_91",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que contenga un sinónimo de la palabra en mayúsculas. ;",
    "opciones": [
      "La bala hirió al hombre en el hombro izquierdo y lo hizo retorcerse en un profundo dolor, cuando esta",
      "Hablamos abiertamente sobre una delicada situación del pasado, aunque habria sido mejor callar. Abrir",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_92",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que contenga palabras homófonas.",
    "opciones": [
      "La bala hirió al hombre en el hombro izquierdo y lo hizo retorcerse en un profundo dolor, cuando esta",
      "Hablamos abiertamente sobre una delicada situación del pasado, aunque habria sido mejor callar. Abrir",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_33",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica la expresión tet ee",
    "opciones": [
      "15 B)3 C)- 3 D)- 15",
      "<A B) a=-2 ul D)a=8",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_35",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Al resolver la ecuación 5(4x — 1) — 2(5x — 5) = 20(x + 1), se obtiene:",
    "opciones": [
      "15 B)3 C)- 3 D)- 15",
      "<A B) a=-2 ul D)a=8",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_36",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Resuelve la siguiente ecuación de primer grado 5(x +2) + x = 2(x — 1).",
    "opciones": [
      "15 B)3 C)- 3 D)- 15",
      "<A B) a=-2 ul D)a=8",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_37",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La solución de la ecuación 222 - 22.12 og:",
    "opciones": [
      "-5 B)-3 C)a=0 Dja=1",
      "x 2 B)x=4 yx 37 Y x 20",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_38",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La solución de la ecuación SE gat , es:",
    "opciones": [
      "-5 B)-3 C)a=0 Dja=1",
      "x 2 B)x=4 yx 37 Y x 20",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_54",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la gráfica que representa el conjunto solución de: 4x + 9)2x -1?",
    "opciones": [
      "x=1,y=-2 B)x=-1,y=2 C)x=-2,y=1 D)x=-2,y=-1",
      "x=1,y=-1 B)x=4,y=2 C)x=-3,y=2 D)x=4,y=-1",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_55",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué opción representa el conjunto solución de ———X =—X+—?",
    "opciones": [
      "x=1,y=-2 B)x=-1,y=2 C)x=-2,y=1 D)x=-2,y=-1",
      "x=1,y=-1 B)x=4,y=2 C)x=-3,y=2 D)x=4,y=-1",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_56",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El conjunto solución de - +2< = +1 cona>0, es:",
    "opciones": [
      "x=1,y=-2 B)x=-1,y=2 C)x=-2,y=1 D)x=-2,y=-1",
      "x=1,y=-1 B)x=4,y=2 C)x=-3,y=2 D)x=4,y=-1",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_57",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Resuelve el sistema de ecuaciones con 2 incógnitas ls + i a y",
    "opciones": [
      "x=1,y=-2 B)x=-1,y=2 C)x=-2,y=1 D)x=-2,y=-1",
      "x=1,y=-1 B)x=4,y=2 C)x=-3,y=2 D)x=4,y=-1",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_64",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Cuál es el número de conejos y gallinas en un corral si en su conjunto hacen un total de 61 cabezas y",
    "opciones": [
      "El frasco de mermelada tiene capacidad de 5 It y el frasco de cajeta de 3 It",
      "El frasco de mermelada tiene capacidad de 3 It y el frasco de cajeta de 4 It",
      "El frasco de mermelada tiene capacidad de 2 it y el frasco de cajeta de 5 lt",
      "El frasco de mermelada tiene capacidad de 6 It y el frasco de cajeta de 3 It"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_65",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un vendedor sabe que 4 frascos de mermelada y 3 frascos de cajeta tienen una capacidad de 24 litros,",
    "opciones": [
      "El frasco de mermelada tiene capacidad de 5 It y el frasco de cajeta de 3 It",
      "El frasco de mermelada tiene capacidad de 3 It y el frasco de cajeta de 4 It",
      "El frasco de mermelada tiene capacidad de 2 it y el frasco de cajeta de 5 lt",
      "El frasco de mermelada tiene capacidad de 6 It y el frasco de cajeta de 3 It"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_66",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Resolver el siguiente sistema de ecuaciones: ¿4x + 3y-2z=4 .",
    "opciones": [
      "x=—,y=-2,z=-4",
      "x= y=2,z=-5",
      "x=L y=3,z=-4",
      "x=3,y=1,z=2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_80",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "En la gráfica de la función f(x) = | x | +2, ¿en qué intervalo la función es creciente y en qué intervalo la :",
    "opciones": [
      "Decrece de ( —«, 0 ), Crece de (0,0)",
      "Decrece de ( 0, «o ), Crece de (-«, 0)",
      "Decrece de(-«, 2), Crece de(2, «)",
      "Decrece de (2, ), Crece de ( —«, 2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_107",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Determina el signo del seno y coseno del ángulo 6, que se muestra en el circulo unitario.",
    "opciones": [
      "Seno 8 tiene signo positivo y Cos8 tiene signo positivo",
      "Seno 8 tiene signo positivo y Cos® tiene signo negativo",
      "Seno 6 tiene signo negativo y Cos tiene signo positivo",
      "Seno 6 tiene signo negativo y Cos8 tiene signo negativo"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_15",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el mejor título para esta noticia?",
    "opciones": [
      "Un autor mexicano",
      "Cine y teatro mexicano",
      "La Generación de los 50",
      "Muere el creador del teatro infantil mexicano."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_16",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por el contenido, ¿cuál enunciado expresa la relevancia del hecho?",
    "opciones": [
      "Carballido es pieza fundamental de la Generación de los 50.",
      "El dramaturgo fue merecedor de innumerables reconocimientos.",
      "Emilio Carballido fallece a los 82 años a consecuencia de un infarto.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El propósito central del texto es:",
    "opciones": [
      "es un ser estático y tibio.",
      "guarda y mantiene estáticos sus recuerdos.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por el contenido del texto queda implícito todo lo que sigue, excepto que un",
    "opciones": [
      "es un ser estático y tibio.",
      "guarda y mantiene estáticos sus recuerdos.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_19",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El autor del texto asume la postura de:",
    "opciones": [
      "aprobar el proceder de los famas.",
      "condenar la conducta de los cronopios.",
      "Los vecinos",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El propósito central del texto es:",
    "opciones": [
      "argumentar la trascendencia de la palabra escrita",
      "comparar la imaginación ante las imágenes reales",
      "presentar las ventajas de la radio como medio de comunicación",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_22",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por el contenido del texto queda implícito todo lo que sigue, excepto que la",
    "opciones": [
      "transmite procesos de pensamiento",
      "ofrece entretenimiento a personas invidentes",
      "brinda a través de la palabra hablada el hilo argumental",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_23",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El autor del texto asume la postura de:",
    "opciones": [
      "explicar brevemente las ventajas de la radio",
      "contar la historia de cómo se inventó la radio",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_24",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el mejor título para esta noticia?",
    "opciones": [
      "La radio",
      "Inventos valiosos",
      "El lenguaje gráfico",
      "La educación básica"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_25",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por el contenido, ¿cuál enunciado expresa la relevancia de lo expuesto?",
    "opciones": [
      "La televisión ha sustituido a la radio.",
      "Escuchar es más importante que ver.",
      "Los estudiantes prefieren la televisión a la radio.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿De las siguientes palabras, ¿cuál debería estar escrita con mayúscula inicial?",
    "opciones": [
      "plaza",
      "liverpool",
      "La república mexicana es un país lleno de tradición.",
      "¿Me estás escuchando? porque me da la impresión de que no es así."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué oración emplea adecuadamente las mayúsculas?",
    "opciones": [
      "Se aventó un discurso muy Barroco.",
      "Vivimos en la República mexicana desde hace 10 años.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué oración emplea adecuadamente las mayúsculas?",
    "opciones": [
      "Góngora es un autor barroco.",
      "El día de muertos es una fiesta muy espiritual.",
      "¿Crees que la República Mexicana es peligrosa?",
      "¿Sabes cocinar? yo solo aprendí a hacer postres."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_14",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué oración emplea adecuadamente las mayúsculas?",
    "opciones": [
      "¿Me prestas tu Teléfono? No encuentro el mío.",
      "Vimos las características de un poema barroco.",
      "La república Mexicana se ha vuelto un lugar peligroso.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona el signo de puntuación que hace falta en la siguiente oración:",
    "opciones": [
      "Punto d) Punto y coma",
      "Coma e) Puntos suspensivos",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Relaciona las siguientes columnas:",
    "opciones": [
      "1b, 2a, 3e, 4c, 5f d) la, 2f 3e, 4c, 5d",
      "la, 2b, 3e, 4f, Sd e) la, 2f 3e, 4d, 5c",
      "fr ce) frut e) fruta",
      "fru d) frute"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_7",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que contenga el morfema raíz de las palabras en mayúsculas",
    "opciones": [
      "1,2 a 3,5 e) 3,2",
      "2,5 d) 2,4",
      "1,2 c) 2,4 e) 2,5",
      "3,4 d) 4,5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_copiadeguiau_8",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "De las siguientes palabras, ¿cuáles fueron modificadas por el empleo de la morfolo-",
    "opciones": [
      "1,2 a 3,5 e) 3,2",
      "2,5 d) 2,4",
      "1,2 c) 2,4 e) 2,5",
      "3,4 d) 4,5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_39",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "2 m alcance su punto más alto. D) inversamente proporcional al",
    "opciones": [
      "4.0s",
      "8.0s 5. | Una bala de cañón de 7.0 kg se",
      "9.8s dispara verticalmente hacia arriba con",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por un cable, que tiene una",
    "opciones": [
      "Tx =1.8 (1, +273) una corriente eléctrica de 10 A ¿Cuál",
      "100 V",
      "20V",
      "10V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En el circuito eléctrico se muestran 3 15. El fenómeno que por primera vez puso",
    "opciones": [
      "la radioactividad natural.",
      "Se apagan el foco 2 y el foco 3. energía y caen al núcleo.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_14",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿En cuánto tiempo se llenará una",
    "opciones": [
      "0.0052 hrs. un lenguaje apropiado para su",
      "0.020 hrs. comunicación, reconocemos una",
      "1.63 hrs. propiedad textual denominada",
      "2.07 hrs."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Cuando el usuario de la lengua utiliza",
    "opciones": [
      "0.0052 hrs. un lenguaje apropiado para su",
      "0.020 hrs. comunicación, reconocemos una",
      "1.63 hrs. propiedad textual denominada",
      "2.07 hrs."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_23",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Autor mexicano que escribió El D) De cita textual.",
    "opciones": [
      "Carlos Fuentes. ;",
      "Juan Rulfo. QUIMICA",
      "José Emilio Pacheco.",
      "Octavio Paz."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_45",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La principal zona de producción de",
    "opciones": [
      "región del Pacífico sur. 49. Al desarrollar (x? - 3y)? se obtiene",
      "x° - Ox°y + 27x*y? - 27y?",
      "x® + 9x*y — 27x’y? + 27y3",
      "x® — 9x%y + 27x2y? — 27y?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_71",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es la integral definida de [ ‘9%",
    "opciones": [
      "e439) 4. biodegradables eran de piedra caliza,",
      "e” (x?+4x 3) +C se fue perfeccionando la idea hasta",
      "—e” (x*+4x +3) +C",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_72",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "La solución de la integral indefinida 75. Identifica la forma del discurso que",
    "opciones": [
      "e439) 4. biodegradables eran de piedra caliza,",
      "e” (x?+4x 3) +C se fue perfeccionando la idea hasta",
      "—e” (x*+4x +3) +C",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_73",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Elige la función de la lengua que",
    "opciones": [
      "Metalingúística. malestar apenas toqué el periódico. Creí que",
      "Apelativa. solamente se trataba de uno de mis",
      "Referencial. acostumbrados mareos. Pagué el importe del",
      "Sintomática. diario y regresé a mi casa. Mi esposa había"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_74",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Identifica el enunciado en el que la la primera página. Luego de enterarme de que",
    "opciones": [
      "Era apenas una niña cuando la vi por Cuando iba a tomar mi cigarro, descubrí que",
      "Alas tres en punto moriría un inmediato retorné al baño, me tallé con ;",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_83",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Enel siguiente enunciado las palabras Los .",
    "opciones": [
      "complemento indirecto. mecanismos de representación 7",
      "complemento circunstancial. ——__—_ son inherentes a la funcion",
      "complemento directo. publica.",
      "predicado nominal. ."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_87",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Cardumen es a pez como",
    "opciones": [
      "Lisosoma.",
      "piara a enjambre. B) Aparato de Golgi.",
      "gente a persona. C) Ribosoma.",
      "rebaño a abeja. D) Mitocondria."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_93",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Tipo de fermentación donde las 96. Se denomina al proceso",
    "opciones": [
      "traducción",
      "Láctica. B) mutación",
      "Butirica. C) replicación",
      "Alcohdlica. D) transcripción"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_95",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuáles de las siguientes son",
    "opciones": [
      "Depredadores.",
      "ly lll",
      "lyll",
      "Il y Ill"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ordena cronológicamente los 108. Alianzas militares con fines",
    "opciones": [
      "|, ll, lll, IV y V",
      "1, IV, V, ll yl 109. Una característica de la Guerra Fría",
      "Il, IV, V, Ill y 1 fue",
      "Ill, IV, V, ly Il"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_107",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ordena cronológicamente los",
    "opciones": [
      "1, IV, V, Hy Hl",
      "ll, V, |, ly IV",
      "Ill, 1, IV, Vy ll",
      "IV, III, 1, ly V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_114",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La corriente ideológico política de la D) baj : :",
    "opciones": [
      "conservadora.",
      "liberal.",
      "centralista.",
      "parlamentaria."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_120",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las políticas neoliberales se iniciaron",
    "opciones": [
      "Luis Echeverría Álvarez.",
      "José López Portillo.",
      "Miguel de la Madrid Hurtado.",
      "Ernesto Zedillo Ponce de León."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Señala cual de los siguientes enunciados es bimembre. en los que se usa indebidamente DE QUE. Here)",
    "opciones": [
      "Llegó. Compró su DVD. >",
      "El niño que rompe el estereotipo. oa es hoa D)",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Señala el inciso que presenta al sujeto de la siguiente",
    "opciones": [
      "Harry Potter Far É",
      "la película Eb uf",
      "El día de hoy 14) En el siguiente enunciado faltan letras. Cada opción E",
      "el cine señala variantes de dichas letras, pero sólo una es la re"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Marca la opción que tenga una relación semejante o en} > k",
    "opciones": [
      "cubo - volumen . 17) Del grupo de oraciones, selecciona la opción que tiene \\",
      "solicitud B) Siempre a tenido buenas calificaciones. 4",
      "petición C) No siempre ay una buena verificación. E",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que sea sinónimo de SEDICIÓN. A), Sólo se necesito una vereda para llegar al rio. E",
    "opciones": [
      "reunión D)_ ¡Ay! ¿Cómo lo ves? Siempre hay una primera vez. C",
      "huelga E) No se desasolvaron bien las calles. C",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_37",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La abundante existencia de _en su terrtorio |",
    "opciones": [
      "Santo oficio. = |",
      "Protestantismo.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_31",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La caída del Gran Imperio Romano de Occidente D)  vapor...Rusia H",
    "opciones": [
      "Santo oficio. = |",
      "Protestantismo.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_32",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La Reforma Religiosa iniciada por Martín Lutero, trajo D) Adam Smith.",
    "opciones": [
      "Santo oficio. = |",
      "Protestantismo.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_34",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Movimiento en el cual el Estado tiene una escasa 41) ¿Qué nombre recibía el cuerpo colegiado que conocía los",
    "opciones": [
      "Imperialismo A) Virreinato",
      "Feudalismo B) Consejo de Indias",
      "Liberalismo C) Encomienda",
      "Socialismo D) Real patronato"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_52",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El segundo rio mas extenso de América, es: 5 q",
    "opciones": [
      "Amazonas. 60) Al simplificar ==> obtenemos: i",
      "provocados. B) x+y",
      "consecuentes. ay H",
      "kársticos. Cc) ay Ml"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_53",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los lagos, por su origen, que se producen en las zonas A xy 5",
    "opciones": [
      "estuarios. qe i",
      "los montes Urales. + 2 EN y }",
      "la'cordillera de los Andes. A (sa) «flay",
      "los montes Pirineos. E ) i"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_54",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La tercera montaña más ata del mundo se localiza en: — ‘et |",
    "opciones": [
      "Norteamericana ° A E MUI |",
      "Del Pacífico 0) (53) +a(sey (0) + 360) (MEL) i",
      "Del Caribe : 1 edo |",
      "De Cocos e (sa) +a\" (3b) + (Fo) |"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_55",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Placa tectónica que se localiza en las costas del Bes > H",
    "opciones": [
      "Norteamericana ° A E MUI |",
      "Del Pacífico 0) (53) +a(sey (0) + 360) (MEL) i",
      "Del Caribe : 1 edo |",
      "De Cocos e (sa) +a\" (3b) + (Fo) |"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_65",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación planteada del problema: hallar dos x-",
    "opciones": [
      "lineal decreciente cuyas dimensiones se muestran en la figura es:",
      "lineal creciente",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_77",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para y? = - 4x calcula el foco y la directriz: E) G04 6x40",
    "opciones": [
      "F=(-1,1), x= 2",
      "x) = 12 mis",
      "15",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_80",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La S de ia tuncién implícita xy + 4x?+ y?= 6 es: 86) Las componentes (X, Y) del vector de posición +",
    "opciones": [
      "co rt x",
      "6x'+ 4x? 5 Ee a pela -;",
      "Bxt+x+3 2",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_89",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál o cuáles son las principales características del 94) ¿Cuál es la fórmula para calcular la energía cinética de",
    "opciones": [
      "El móvil se desplaza en una trayectoria recta y su A Ec=1/2mv e",
      "El móvil se desplaza en una trayectoria recta con E) Ec=mbw",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_90",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si la gasolina llena un tanque 0.16 nf tiene una masa A) cinética media",
    "opciones": [
      "1:92 x 10? kg/m? 5 Soll Gee",
      "7.50x10* mg 96) Usando un mechero se pone a calentar una cierta",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_91",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ala acción de la gravedad ejercida sobre un cuerpo se condiciones es correcto afirmar que:",
    "opciones": [
      "gravitación. que sea retirada del mechero;",
      ". aceleración. 11. La energía calorífica proporcionada por el mechero",
      "peso. convierte al agua en vapor de agua.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_100",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En el siguiente circuito dos focos iguales (A y B) A D) er",
    "opciones": [
      "sodio (+ 1) y azufre (- 4) se",
      "sodio (+ 3) y azufre (+ 4) de",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_101",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál diagrama.representa una mezcla? AAA 114) E",
    "opciones": [
      "3FeO, +3H,O NL",
      "L-c,d,eyf Il-ayb 9) combustión E",
      "l.-b,d,eyf Il-aye e) evaporación E ae",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_8",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "el ambiente se transforma continuamente, lo que 4",
    "opciones": [
      "los órganos.",
      "las células. 118) Al conjunto de organismos semejantes entre sí,",
      "los sistemas. “capaces de tener descendencia fórtil, se le conoce",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examenmuestra_113",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "De las siguientes características metabólicas, ¿cuál ae E",
    "opciones": [
      "Ly primer compuesto orgánico que se forma, es:",
      "dos cadenas de nucleótidos, enrolladas sobre sí ma Bs song ai",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "00}+------# i |",
    "opciones": [
      "1.8 ™ gb |",
      "3.2 —",
      "3.6 —",
      "4.0 kg"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la situación que 8. Para convertir un valor de",
    "opciones": [
      "La energía empleada para elevar expresión",
      "Tx _ (Te - 32)",
      "Los kilowatts hora gastados para 1.8",
      "El aumento en la energía cinética"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ala cantidad de calor que necesita",
    "opciones": [
      "6.0 kg",
      "5.0 kg",
      "2.5 kg",
      "0.8 kg"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un niño está parado sobre un Celsius, se le conoce como",
    "opciones": [
      "6.0 kg",
      "5.0 kg",
      "2.5 kg",
      "0.8 kg"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un sistema está en equilibrio",
    "opciones": [
      "en un proceso su temperatura no",
      "su temperatura es igual a la de",
      "se calienta por medio de trabajo.",
      "su presión y su masa"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina la resistencia total del",
    "opciones": [
      "que ambas ondas sean _ R= 60",
      "2.41 Q",
      "4.40",
      "1.90 Q"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para explicar la interferencia circuito que se representa en la",
    "opciones": [
      "que ambas ondas sean _ R= 60",
      "2.41 Q",
      "4.40",
      "1.90 Q"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_14",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿En cuánto tiempo se llenará una 16. El modelo de Thomson establece",
    "opciones": [
      "0.0052 hrs sea eléctricamente neutro.",
      "0.020 hrs B) existe un átomo formado por una",
      "1.63 hrs corteza constituida por",
      "2.07 hrs electrones que giran alrededor"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "De acuerdo con su organización Aquella vida de arriba,",
    "opciones": [
      "una situación comunicativa en la muerte, no me seas esquiva;",
      "un cuerpo de citas y referentes vida para nacer a la verdadera.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_18",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Identifica el propósito del siguiente ejemplo de valor y cortesía, al llegar",
    "opciones": [
      "Reflexionar sobre un tema.",
      "Plasmar un sentimiento.",
      "Difundir ideas políticas.",
      "Informar oportunamente."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_25",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Identifica la ficha hemerográfica. 26. Identifica el tipo de ficha de trabajo",
    "opciones": [
      "García Márquez, Gabriel. \"Cómo re Ewan (ene) En: K. Cox",
      "Peguero, Rosario. \"La filosofía de",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_27",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una medalla de bronce es un",
    "opciones": [
      "mezcla heterogénea.",
      "mezcla homogénea.",
      "compuesto.",
      "elemento."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_29",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al enlace que se forma entre dos",
    "opciones": [
      "puente de hidrógeno. A) oxida al ganar electrones y el",
      "covalente no polar. oxígeno se reduce al perder",
      "SO + H20 > H2SO3 C) oxida al perder electrones y el",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_37",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las latitudes y A) Mississipi.",
    "opciones": [
      "Rios.",
      "norte de Europa y norte de Asia.",
      "norte de Africa y norte de Asia.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_46",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Número de entidades federativas en x +8",
    "opciones": [
      "31 D)x-8",
      "32",
      "sen(x) 5",
      "sen?(x) + cos*(x) = 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_52",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Los valores que satisfacen la 56. ¿Cuál es el seno del ángulo A en el",
    "opciones": [
      "X1 = 3! 2375 5",
      "17 3' 27 2",
      "5",
      "3x-12>0 5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_53",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la desigualdad que tiene A) 5",
    "opciones": [
      "x-320 O 5",
      "-3x +120 3",
      "-x +320 5",
      "4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_55",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de y en x = -8 si C) 5",
    "opciones": [
      "-4",
      "[= , ©)",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_58",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Calcula el rango de la siguiente 62. Indica las coordenadas del centro",
    "opciones": [
      "C (-4, 10)",
      "C (-2, 5)",
      "(5, o '",
      "C (2, -5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_61",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En un marco de referencia",
    "opciones": [
      "x7.8 m D)a = 40",
      "x8.4 m",
      "x8.0 m",
      "x7.4 m"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_66",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Elige la ecuación que represente a 68. ¿Cuál de las siguientes expresiones",
    "opciones": [
      "f’ (3) = lim f(3 +h) - f@) = lim (3 +h) = 3°",
      "f' (3) = lim f(3 +h) +f(3) - lim (3+h)? +3",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_67",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Calcula el límite lim WZ +x 42",
    "opciones": [
      "> 5 10 ;",
      "Max 7'13) min(4, 4)",
      "a 8 128",
      "= 4 256"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_70",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Se desea fabricar una caja sin tapa 72. La $(2x — 1)? dx es igual a",
    "opciones": [
      "(2x - 1) ic",
      "(2x= 1)\" 1)\" +C",
      "25 + 5443 73. Elige la función de la lengua que",
      "6 Constantinopla se rindió ante los"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_75",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Identifica la forma del discurso que sin esa sílaba.",
    "opciones": [
      "Argumentativa.",
      "Descriptiva.",
      "Fática.",
      "Expositiva."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_78",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La frase 80. En la frase por momentos sentía",
    "opciones": [
      "temerosa y decidida.",
      "temerosa e indecisa.",
      "aparentan tener una buena",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_79",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En el texto, la protagonista pierde la",
    "opciones": [
      "prefiere los deportes extremos.",
      "siente que debe aprovechar las",
      "quiere satisfacer a su esposo.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_86",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige la opción que completa ellos comienzan a rezagarce.",
    "opciones": [
      "sin embargo — no obstante — a",
      "mas — por tanto — a",
      "más — en conclusión — con",
      "pero — en consecuencia — con"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_94",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Una célula presenta un número 98. El apéndice ciego, el vello corporal y",
    "opciones": [
      "adaptativas.",
      "23 X. B) homólogas.",
      "23 XX. C) vestigiales.",
      "46 XX. D) análogas."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_97",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La es el resultado de la",
    "opciones": [
      "clonación A) de la Edad Antigua.",
      "de la Edad Media.",
      "del Humanismo.",
      "del Renacimiento."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_102",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los cambios tecnológicos que se 105.Una consecuencia de la Primera",
    "opciones": [
      "la emergencia de Estados Unidos",
      "la aplicación de energía mecánica como líder económico mundial.",
      "la utilización de la electricidad y fascistas en Italia, Alemania y",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_104",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La búsqueda de materias primas y o",
    "opciones": [
      "el imperialismo europeo. desmilitarización de Alemania y su",
      "el movimiento obrero. división en cuatro zonas de",
      "la Revolución Industrial. ocupacion.",
      "la Revolución Agrícola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La revuelta obrera de Berlín y la C) Pedro de Alvarado — Bernardino",
    "opciones": [
      "Guerra de Crimea.",
      "Gran Guerra. 112.Una de las causas internas de la",
      "Guerra Fria. Independencia de la Nueva España",
      "Guerra del Bosforo. fue"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_120",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por medio del Tratado de Libre",
    "opciones": [
      "renegociación de la deuda",
      "elevación de impuestos en las",
      "eliminación de aranceles entre",
      "igualdad de precios de"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_38",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si se simplifica V75+2N12 —1108 , se obtiene:",
    "opciones": [
      "1/90 b) /21 c) 3/10 d) 9/10",
      "69/2 b) 6 18 d) /6",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_40",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de /20 2/12 +45 es:",
    "opciones": [
      "1/90 b) /21 c) 3/10 d) 9/10",
      "69/2 b) 6 18 d) /6",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_41",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al efectuar (v6 (v15), se obtiene:",
    "opciones": [
      "1/90 b) /21 c) 3/10 d) 9/10",
      "69/2 b) 6 18 d) /6",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_43",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver (Ya (Ys ] se obtiene:",
    "opciones": [
      "2/3 b) 39/3 e) Y3 d) 342",
      "2i b) 4i | c) -4 d)-8",
      "7 b) -7 c) 7i d)7-i",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_67",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar lá -2a*b*-a*b? 0 se obtiene:",
    "opciones": [
      "6a*- 12a3 — 18a?- 4 d) 6a4 + 12a°+ 18a? + 4",
      "4w?- 3 b) -4w? + 3 c) -ów? - 2w+ 25 d) ów? + 2w- 25",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_68",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Six =—2, y = 3, el valor numérico de —7x’y, es:",
    "opciones": [
      "6a*- 12a3 — 18a?- 4 d) 6a4 + 12a°+ 18a? + 4",
      "4w?- 3 b) -4w? + 3 c) -ów? - 2w+ 25 d) ów? + 2w- 25",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_70",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Utiliza la siguiente regla de correspondencia y = 2x? — 5x — 7 y completa la siguiente tabla.",
    "opciones": [
      "6a*- 12a3 — 18a?- 4 d) 6a4 + 12a°+ 18a? + 4",
      "4w?- 3 b) -4w? + 3 c) -ów? - 2w+ 25 d) ów? + 2w- 25",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_95",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al dividir 2a* — a? — 21a* + 7a + 4 entre 2a* + 5a — 4 se obtiene:",
    "opciones": [
      "—5a? — 3ab - 7b? b) a? — 3ab + 7b? c) 5a? — 3ab- 7b? d) 5a? + 3ab + 7b?",
      "2m—n b) 2m+n c) 2n- m d) 2n+m",
      "(m3 + n)? b) Y(m? +n)? c) (m*+n)? d) Jm? +n)?",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_96",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de e es:",
    "opciones": [
      "—5a? — 3ab - 7b? b) a? — 3ab + 7b? c) 5a? — 3ab- 7b? d) 5a? + 3ab + 7b?",
      "2m—n b) 2m+n c) 2n- m d) 2n+m",
      "(m3 + n)? b) Y(m? +n)? c) (m*+n)? d) Jm? +n)?",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_97",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al dividir 10a? — 31a*b + ab? + 35b* entre 2a — 5b se obtiene:",
    "opciones": [
      "—5a? — 3ab - 7b? b) a? — 3ab + 7b? c) 5a? — 3ab- 7b? d) 5a? + 3ab + 7b?",
      "2m—n b) 2m+n c) 2n- m d) 2n+m",
      "(m3 + n)? b) Y(m? +n)? c) (m*+n)? d) Jm? +n)?",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_98",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar a se obtiene:",
    "opciones": [
      "2 b) e) 2 d 4",
      "gar b) a” mn c) qu d) quem",
      "quem b) a™ c) gram d) yró+mn",
      "x b) x3 c) xé d) Yx"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_99",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Al simplificar la fracción (m+ ny se obtiene:",
    "opciones": [
      "2 b) e) 2 d 4",
      "gar b) a” mn c) qu d) quem",
      "quem b) a™ c) gram d) yró+mn",
      "x b) x3 c) xé d) Yx"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_100",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La simplificación de Sa es:",
    "opciones": [
      "2 b) e) 2 d 4",
      "gar b) a” mn c) qu d) quem",
      "quem b) a™ c) gram d) yró+mn",
      "x b) x3 c) xé d) Yx"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_101",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar | =— | se obtiene:",
    "opciones": [
      "2 b) e) 2 d 4",
      "gar b) a” mn c) qu d) quem",
      "quem b) a™ c) gram d) yró+mn",
      "x b) x3 c) xé d) Yx"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_102",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar E se obtiene:",
    "opciones": [
      "4x {/2x b) 2x? Yx e) 2x Y2x d) x? /x",
      "18x*y2z? b) 9x?y3z? c) 6x*y?z3 d) 6xy?z3 .",
      "4a?b* b) a?b* c) 2a?b* d) 8a?b*",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_103",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar (a” - a”)” se obtiene:",
    "opciones": [
      "4x {/2x b) 2x? Yx e) 2x Y2x d) x? /x",
      "18x*y2z? b) 9x?y3z? c) 6x*y?z3 d) 6xy?z3 .",
      "4a?b* b) a?b* c) 2a?b* d) 8a?b*",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_104",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una expresión equivalente de (Va ' lx es",
    "opciones": [
      "4x {/2x b) 2x? Yx e) 2x Y2x d) x? /x",
      "18x*y2z? b) 9x?y3z? c) 6x*y?z3 d) 6xy?z3 .",
      "4a?b* b) a?b* c) 2a?b* d) 8a?b*",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar 2 se obtiene:",
    "opciones": [
      "4x {/2x b) 2x? Yx e) 2x Y2x d) x? /x",
      "18x*y2z? b) 9x?y3z? c) 6x*y?z3 d) 6xy?z3 .",
      "4a?b* b) a?b* c) 2a?b* d) 8a?b*",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_108",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La simplificación de 3/216x°y*z” es:",
    "opciones": [
      "3x?y b) x?y c) 3xy d) x’y",
      "4x*y?2Y2y* b) *y?2Y2y*z c) 4xyz2Y2y?z d) yz)2y?z",
      "27x y?\" b) 3x\"y?\" c) 9x \"y?\" d) xy?\"",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar Y64a?b'* se obtiene:",
    "opciones": [
      "3x?y b) x?y c) 3xy d) x’y",
      "4x*y?2Y2y* b) *y?2Y2y*z c) 4xyz2Y2y?z d) yz)2y?z",
      "27x y?\" b) 3x\"y?\" c) 9x \"y?\" d) xy?\"",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_47",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Una solución de la ecuación 6x? +x-—2=0 es:",
    "opciones": [
      "(x+3) =F b) [x-3) =",
      "(x — 1)2= 20 d) (x + 1)? =20 |",
      "x=7yx=> b) x=7yx=-5",
      "x==7 y Xx==> d) x=-Tyx=5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_52",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación cuyas raíces son: x, =-4 y x,=3s:",
    "opciones": [
      "(lx-4) (x+3)=0 — b) [x +4) (x-3)=0",
      "(x + 4) (x + 3) =0 d) (x — 4) (x — 3) =0",
      "4x2-5x+6=0 b) 4x2+5x+6=0",
      "4x?—5x-6=0 d) 4x2+5x-6=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_53",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación cuyas raíces son x, =——, x, = 2 es:",
    "opciones": [
      "x=4 b) x= 8",
      "x=-4 d) x=-8",
      "(x- 12)? =4 b) (x- 4)2= 16",
      "(x+ 12)? = 4 d) (x + 2)? =16"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_54",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Una solución de la ecuación 3x’ + 10x —8 =O es:",
    "opciones": [
      "x=4 b) x= 8",
      "x=-4 d) x=-8",
      "(x- 12)? =4 b) (x- 4)2= 16",
      "(x+ 12)? = 4 d) (x + 2)? =16"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_58",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las raíces de la ecuación x* + 2x* — 24x = 0?",
    "opciones": [
      "(x-6) (x+8)=0  b)(x-6)[x-8)=0",
      "15x?-23x+4=0  d) 15x*+23x+4=0",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_60",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación cuyas raíces son x, = 3 x, =— 5 es:",
    "opciones": [
      "x=-48, x= 48 bx=3,x==3 :",
      "x=16,x=-16 d)x=4,x=-4",
      "5 b) 7",
      "29 d) 25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_63",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Al resolver la ecuación x? — x = 0, se obtiene:",
    "opciones": [
      "x=-48, x= 48 bx=3,x==3 :",
      "x=16,x=-16 d)x=4,x=-4",
      "5 b) 7",
      "29 d) 25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_64",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Las raíces de la ecuación 3x” — 48 =0 son:",
    "opciones": [
      "x=-48, x= 48 bx=3,x==3 :",
      "x=16,x=-16 d)x=4,x=-4",
      "5 b) 7",
      "29 d) 25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_66",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "El largo de un rectángulo mide el doble que su ancho. Si se aumentan 2 metros a cada lado el",
    "opciones": [
      "7 b) 10",
      "12 d) 5",
      "16 b) 10",
      "6 d) 8"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_48",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente de la recta que es paralela a la recta que pasa por los puntos A(2, —8) y",
    "opciones": [
      "3 b) => c “3 d) >",
      "y=7x- 10 b) y=-=3 x+2 e) y==2x=1 d) y=3x+6",
      "y=5x-8 b) y=3x+5 cl y==5x=6 d) y=-=3x+4",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_71",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La posición de una partícula está dada por S = t? — 5t? + 2t, donde S está en metros y £ en",
    "opciones": [
      "Es negativa después del punto.",
      "Es positiva antes del punto.",
      "Pasa de ser negativa antes del punto a positiva después del punto.",
      "Es mayor que x,."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_72",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la recta tangente y normal a la curva y = 2x? + « — 5 en el punto (1, —2) es:",
    "opciones": [
      "Es negativa después del punto.",
      "Es positiva antes del punto.",
      "Pasa de ser negativa antes del punto a positiva después del punto.",
      "Es mayor que x,."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_73",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la recta tangente y normal a la curva y = x° — x en el punto (—1, 0) es:",
    "opciones": [
      "Es negativa después del punto.",
      "Es positiva antes del punto.",
      "Pasa de ser negativa antes del punto a positiva después del punto.",
      "Es mayor que x,."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_74",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Una función tiene un mínimo en el punto P(x,, y,), si su derivada:",
    "opciones": [
      "Es negativa después del punto.",
      "Es positiva antes del punto.",
      "Pasa de ser negativa antes del punto a positiva después del punto.",
      "Es mayor que x,."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_23",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el voltaje total aplicado al circuito?",
    "opciones": [
      "66 A b) 6A c) 1944 A dJO.16A",
      "0.9152 b) 2.142 0 e) 180 d) 280 0",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_42",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Relaciona las siguientes columnas:",
    "opciones": [
      "Rayos X, UV, gamma, infrarrojo, microondas, visible.",
      "Ley de Ohm.",
      "Ley de Ampere.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_111",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- Si una viga de madera de 2 m de largo se divide en dos partes que se",
    "opciones": [
      "1A, 2D, 3B, 4C y 3 7",
      "1C, 2A, 3B, 4D a > 4",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_34",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "- Al resolver la integral eS dx por fracciones parciales, ¿cuáles",
    "opciones": [
      "yA Hizo",
      "1B, 2A, 3C, 4D 2. Fracciones parciales Bj ax",
      "1B, 2C, 3A, 4D P ! x2 - x",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_30",
    "materia": "matematicas",
    "tema": "probabilidad",
    "dificultad": 2,
    "pregunta": "- Se lanza un par de dados distinguibles, comunes y corrientes sobre una",
    "opciones": [
      "Asistir a la escuela y casarse.",
      "1BDF, 2ACE : B. El tipo de sangre de un hijo coincide",
      "1AED, 2BCF 1. Dependiente con el de alguno de sus padres.",
      "1BDE, 2ACF D. Tener un día nublado y que llueva."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_31",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- Relacionar el evento con la descripción de manera correcta.",
    "opciones": [
      "Asistir a la escuela y casarse.",
      "1BDF, 2ACE : B. El tipo de sangre de un hijo coincide",
      "1AED, 2BCF 1. Dependiente con el de alguno de sus padres.",
      "1BDE, 2ACF D. Tener un día nublado y que llueva."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_38",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- Identificar en el siguiente histograma la barra que representa la",
    "opciones": [
      "Primero lA | és |",
      "5",
      "7 [o 5 peor)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_39",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- La siguiente tabla muestra la cantidad de meses de retraso de clientes",
    "opciones": [
      "Primero lA | és |",
      "5",
      "7 [o 5 peor)",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_40",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- En la tabla se muestra la distribución de frecuencia de las calificaciones",
    "opciones": [
      "Segunda \"",
      "Tercera 9",
      "Sexta",
      "Séptima 2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_41",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- El gráfico muestra la distribución de edades de 50 visitantes a cierto",
    "opciones": [
      "Segunda \"",
      "Tercera 9",
      "Sexta",
      "Séptima 2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_42",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- Ordenar los pasos en la construcción de una tabla de distribución de",
    "opciones": [
      "4,2,1,5,3 B)4,3,2,1,5",
      "59.0 Peso en Cantidad de Frecuencia",
      "59.5 kilogramos alumnos relativa",
      "64.5 De 50 a 54 0.250"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_45",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- Sean los siguientes datos los minutos de que 10 automóviles tardaron",
    "opciones": [
      "Mediana 16 - Moda 14",
      "Mediana 15.5 - Moda 14",
      "Mediana 14 - Moda 14 y 15",
      "Mediana 15.5 - Moda 14 y 15"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_46",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- La siguiente tabla muestra los registros de tiempo (en segundos) para el",
    "opciones": [
      "Media = 58, Mediana = 59 60 61 58 62",
      "Media = 59, Mediana = 59",
      "Media = 60, Mediana = 61 55 61 62 57",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_47",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "- De un conjunto de 5 números se calcula la media; después, cada uno de",
    "opciones": [
      "Es igual",
      "Aumentó en 2 unidades",
      "Aumentó en 10 unidades",
      "Aumentó en 50 unidades"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_48",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- La siguiente distribución muestra el tiempo de espera para la atención",
    "opciones": [
      "2.52",
      "6.03",
      "17.51 18-23",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_49",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "- El siguiente polígono de frecuencias indica el número de personas que",
    "opciones": [
      "100 aciertos °°",
      "105 aciertos >",
      "102 aciertos 50",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_50",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- Un conjunto de diez datos tiene media 6, otro conjunto de treinta datos",
    "opciones": [
      "8.0 B)8.5",
      "9.0 D)9.5",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_27",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones D) la— Il: e — ll: b",
    "opciones": [
      "Ss(g), Na(g), SO2(g)",
      "CO(g), Na(s), Sa(s)",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_42",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las dos áreas de mayor",
    "opciones": [
      "Asia Meridional y Europa Occidental.",
      "Asia Meridional y Europa Meridional.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_48",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Laexpresion E se reduce a A) 8",
    "opciones": [
      "a” —mn",
      "a 52. Los valores que satisfacen la",
      "a” -a™ ecuación x? + 3x + 2=0, son",
      "1y 2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_61",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "La pendiente de la recta 3x + 6y -1=0",
    "opciones": [
      "2 C)x+y-r=0",
      "—",
      "2/21",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_78",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El primer párrafo presenta una 81. Con la expresión eso es muy",
    "opciones": [
      "oposición. A) manifiesta su desconocimiento de la",
      "interrelación. filosofía.",
      "admite que la ciencia no puede",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Suceso que ocasionó la entrada de los probar armas nucleares y sólo hacer",
    "opciones": [
      "namiento del trasatlántico A) Tratado de Tlatelolco.",
      "Tratado de Kioto.",
      "El asesinato del archiduque C) Pacto de Varsovia.",
      "La invasión alemana a Rusia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un sistema está en equilibrio térmico 11. Ala playa llega el oleaje del mar y en",
    "opciones": [
      "su temperatura es igual a la de otro",
      "polarizan.",
      "se calienta por medio de trabajo. C) reflejan.",
      "su presión y su masa permanecen D) superponen."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por un cable, que tiene una",
    "opciones": [
      "20V",
      "T, = ==",
      "k=1, +273 13. Enel circuito eléctrico se muestran 3",
      "T, = 1, -273"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_16",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones es realizan en la ciudad de Londres,",
    "opciones": [
      "Los electrones en órbita circular Pero dentro de la euforia que nos",
      "Los electrones se mueven en estados que hoy celebramos, otro mexicano,",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_19",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Obra que se ha concebido para ser B) Il y IV",
    "opciones": [
      "Texto épico. 23. Autor mexicano que escribió El",
      "Novela. Laberinto de la Soledad.",
      "Carlos Fuentes.",
      "Octavio Paz."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Escritor representante del Realismo B) Dramático.",
    "opciones": [
      "Benito Pérez Galdós.",
      "Ramón del Valle Inclán.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_26",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿De qué tipo es la siguiente ficha? B) El cloruro de sodio es un elemento y",
    "opciones": [
      "Hemerográfica. io",
      "De sintesis. e familas.",
      "Bibliográfica. a) nveles.",
      "De cita textual. ) periodos."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_29",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál reacción representa la",
    "opciones": [
      "SO» + H20 — H2SO3",
      "Cl? + H20 — HCl",
      "N205 + H20 — 2HNO3",
      "HCl + KOH — KCI + H20"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_33",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los desechos producidos por",
    "opciones": [
      "físicos y biológicos.",
      "físicos y químicos.",
      "mecánicos y químicos.",
      "químicos y biológicos."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_49",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al desarrollar (x? — 3y)? se obtiene",
    "opciones": [
      "x® - 9x?*y? + 27xy? - 27y*",
      "“2 2",
      "== 2",
      "x>—"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_90",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige el enunciado que tiene la |. Mitosis.",
    "opciones": [
      "Notó que aquel beso era de un Procesos",
      "La abeja se diferencia de la avispa b. Crecimiento de la célula.",
      "La practica de física se canceló. d. División celular.",
      "El muchacho vivía cómo un salvaje"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_95",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuáles de las siguientes son",
    "opciones": [
      "Aparato de Golgi. Il. Propicia la variabilidad genética por el",
      "Ribosoma. intercambio genético durante la",
      "Mitocondria. meiosis y la fecundación.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_96",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Se denomina al proceso 100. Actividad humana que deteriora la",
    "opciones": [
      "transcripción",
      "Consumo de combustibles fósiles.",
      "La selección natural y la mutación",
      "Los organismos actuales son el 401. Relaci las d"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_97",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la premisa de la Teoria de D) Tala de especies en peligro de",
    "opciones": [
      "Los organismos mejor adaptados son",
      "La herencia de los caracteres ll. El Positivismo.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_102",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El Enciclopedismo del siglo XVIII tuvo 105. Ordena cronológicamente los",
    "opciones": [
      "incluir el pensamiento filosófico. |. Formación de Alianzas.",
      "concentrar todo el conocimiento de su Il. Crisis de Julio. ;",
      "referirse a los dogmas de la Iglesia. IV. Guerra de trincheras.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_108",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Alianzas militares con fines HISTORIA DE MÉXICO",
    "opciones": [
      "La OTAN y la ONU. A) Agricultura.",
      "La ONU y el Pacto de Varsovia. B) Minería.",
      "El OMC y la OEA. C) Ganadería.",
      "El Pacto de Varsovia y la OTAN. D) Comercio."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_117",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Nombre que adoptó el PNR en 1939, al",
    "opciones": [
      "Partido de la Revolución Mexicana.",
      "Partido Popular Socialista.",
      "Partido Nacionalista Democrático.",
      "autorizar su venta a los extranjeros."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_118",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ante las constantes dificultades de",
    "opciones": [
      "convertirlo en una empresa",
      "entregar la administración a los",
      "bajar las tarifas a los usuarios",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Alacantidad de calor que necesita un 12. Un circuito consta de una pila con",
    "opciones": [
      "capacidad térmica. circuito circula una corriente conocida",
      "calor latente de fusión. de / amperes, ¿qué expresión nos",
      "calor latente de vaporización. sirve para calcular el valor de R?",
      "capacidad térmica específica."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una cuerda está atada en un extremo",
    "opciones": [
      "45 0 13. Determina la resistencia total del",
      "90 ==",
      "9",
      "18 =="
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para explicar la interferencia R=40 R= 60",
    "opciones": [
      "2.410",
      "la amplitud de ambas ondas. B) 440",
      "la superposición entre ambas ondas. C) 120",
      "1.90 Q"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_14",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿En cuánto tiempo se llenará una 16. El modelo de Thomson establece que",
    "opciones": [
      "0.0052 hrs eléctricamente neutro.",
      "0.020 hrs B) existe un átomo formado por una",
      "1.63 hrs corteza constituida por electrones que",
      "2.07 hrs giran alrededor de un núcleo donde"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_15",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "El índice de refracción del cuarzo es",
    "opciones": [
      "194,300 eN planetas alrededor del Sol.",
      "existe un átomo distinto para cada",
      "19,430 km elemento cuyas masas y tamaños",
      "1,943 — para formar más de un compuesto."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "544. ¿Con qué velocidad se propaga C) los electrones se encuentran en",
    "opciones": [
      "194,300 eN planetas alrededor del Sol.",
      "existe un átomo distinto para cada",
      "19,430 km elemento cuyas masas y tamaños",
      "1,943 — para formar más de un compuesto."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La cabalidad es una propiedad del",
    "opciones": [
      "opinión del autor.",
      "Investigar.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_23",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La novela pertenece al género",
    "opciones": [
      "dramático — verso — constante La tabla periódica de los elementos se",
      "lírico — prosa — simple encuentra en la página 83.",
      "amoniaco",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_24",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige la opción que contiene las 27. El es un compuesto.",
    "opciones": [
      "periodos.",
      "|, ly Ill",
      "I, Illy IV",
      "Il, Illy V 29. Las formulas del monoxido de"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_31",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La cantidad en ml de HCI concentrado C) polímero de carbohidratos.",
    "opciones": [
      "34.5 a kJ",
      "14.6",
      "12.6 C) SO, AH? =~ 296.8",
      "covalente."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_37",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Relaciona los siguientes países con oo",
    "opciones": [
      "jaiba y salmon.",
      "Norte l. aumento de temperatura.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_46",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las aguas que bañan la peninsula de",
    "opciones": [
      "camarón y bacalao. Eduardo tiene \"a\" gramos, Juan tiene",
      "huachinango y jaiba. la tercera parte de lo de Eduardo,",
      "ostión y robalo. Enrique la cuarta parte del duplo de lo",
      "atún y sardina. de Eduardo. La suma de lo que tienen"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_47",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar la expresión algebraica _",
    "opciones": [
      "6x + 12 3 2",
      "1y2",
      "2y3",
      "1 y-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_62",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Considera una circunferencia en el",
    "opciones": [
      "2 con radio ry donde la distancia entre",
      "2/21 con d. La ecuación que describe la",
      "{ (x,y) en el plano | d((x,y), (h,k)) = 2r }",
      "{ (xy) en el plano | d((x,y), (0,0)) = 2r}"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_64",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es el centro de la elipse cuya",
    "opciones": [
      "(1, 2)",
      "(-1, -2)",
      "x?- 64y?-8=0",
      "*-8y?-62=0 ¿En qué intervalo la derivada de f es"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_67",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El valor de lim — es igual a",
    "opciones": [
      "2",
      "3 Los primeros prototipos de los platos",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_71",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "El valor de la integral definida IN x“dx 75. Identifica la forma del discurso que",
    "opciones": [
      "2 fécula de papa y papel reciclado, pero",
      "— que se logró una mezcla de almidón",
      "> de papa, agua y un polímero orgánico.",
      "Argumentación."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_72",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "La integral fe sen x+3c0s x) dx es D) Descripción.",
    "opciones": [
      "2cos x + 3sen x + C",
      "-2cos x + 3sen x + C Hablamos porque tenemos necesidad",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_74",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Elige la función de la lengua que",
    "opciones": [
      "Referencial.",
      "Sintomática.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_81",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el concepto que el autor",
    "opciones": [
      "estar sujeto a una influencia mágica;",
      "referir las posibilidades de la voz",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_88",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la opción que contiene 90. Elige la opción que presenta el párrafo",
    "opciones": [
      "numero, número, numeró. A) El Coronel Juan Morales, se apodera",
      "Ixtacíhuatl, Iztacíhuatl, Iztaccihuatl. de un cañón montado en uno de los",
      "José: Pepe; Dolores: Lola. ángulos, y aprovechándose de la",
      "echo, hecho; uno, huno. confusión de los defensores,"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_89",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige el enunciado que tiene la cañones hacia el interior. Y empieza",
    "opciones": [
      "Notó que aquel beso era de un en barricadas de sacos de arena.",
      "La abeja se diferencía de la avispa de un cañón montado, en uno de los",
      "La practica de física se canceló. confusión de los defensores,",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_91",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Organelo celular cuya principal",
    "opciones": [
      "Aparato de Golgi. progenitor.",
      "Mitocondria. Il. Propicia la variabilidad genética",
      "Lisosoma. por el intercambio genético",
      "Ribosoma. durante la meiosis y la"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_92",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Monosacárido que se obtiene al final Mt. Manfiens a condicion aiploide de",
    "opciones": [
      "Celulosa.",
      "Glucosa. 5) | y M",
      "Xilobiosa. C) | 7 y",
      "Almidón. D) ll y il"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_93",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El proceso fotosintético que realizan 96. Al conjunto de técnicas que hacen",
    "opciones": [
      "glucosa y bióxido de carbono. a",
      "fósforo y bióxido de carbono. B) ingeniería genética",
      "glucosa y oxígeno. C) recombinación enética",
      "oxígeno y fosforo. 9 ,"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_98",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ordena en forma descendente las HISTORIA UNIVERSAL",
    "opciones": [
      "VII, VI, V, IV, Ill, lly! IV. La Escuela de los Annales.",
      "II, VIL, I, Il, V, IV y VI V. El Historicismo.",
      "VI, IV, V, 11, 1, VII y Hl Autores",
      "C. Collingwood."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_99",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El conjunto de organismos con c. Auguste Comte.",
    "opciones": [
      "una población. A) l:a-Ik b-Ilkc-IV:d-V:e",
      "un ecosistema. B) I:b-Il:d—Ill:e—IV: a-V: c",
      "un bioma. C) :d-Il:c—Iil:b-IV:e-—V: a",
      "una comunidad. D) e-Il:d—!ll:c-IV:b-V: a"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_103",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Países que durante la segunda mitad 106. Regímenes militaristas de Europa en",
    "opciones": [
      "Totalitarios.",
      "Inglaterra y Francia.",
      "Rusia y Turquía.",
      "Alemania e Italia. 107. Ordena cronológicamente los"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_111",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son instituciones científicas y",
    "opciones": [
      "|, Illy IV esquema relacionado con la",
      "|, Il y V participación de Miguel Hidalgo en el",
      "|, Il y Ill movimiento de Independencia?",
      "Il, IV y V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_112",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las opciones completa el",
    "opciones": [
      "|, Illy IV esquema relacionado con la",
      "|, Il y V participación de Miguel Hidalgo en el",
      "|, Il y Ill movimiento de Independencia?",
      "Il, IV y V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Periodo de luchas políticas, 2 aboucien ae",
    "opciones": [
      "Luchas de liberación Nacional. Hidalgo",
      "Guerra Fría. El decreto en",
      "Era Neoliberal. Puente de",
      "Neoimperialismo Nacionalista. Calderón."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_110",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hecho que se consideró como el el puente de",
    "opciones": [
      "El sitio de Cuautla.",
      "Paz armada. B) L ion del C d",
      "Guerra Fria. ) Chilpancingo Svongreso ce",
      "Caida del muro de Berlin. : o"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_113",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una de las consecuencias de la guerra 117. Presidente que creó la Secretaría de",
    "opciones": [
      "Lázaro Cárdenas.",
      "venta de la Mesilla. B) Alvaro Obregón.",
      "firma del Tratado de Guadalupe PO",
      "firma del Tratado Mc Lane — Ocampo."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas201_116",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El Plan de Ayala fijaba la posición",
    "opciones": [
      "zapatistas.",
      "carrancistas.",
      "obregonistas.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_2",
    "materia": "matematicas",
    "tema": "probabilidad",
    "dificultad": 2,
    "pregunta": "Una moneda de 10 gramos es gramo ae una Sustance para lever su",
    "opciones": [
      "capacidad térmica específica.",
      "0.098 N",
      "0.05 N",
      "2N 6.  Lainterferencia de dos ondas"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona la situación que",
    "opciones": [
      "El arranque realizado por un elevador .",
      "El movimiento de una pelota de una corriente eléctrica de 10 A ¿Cuál",
      "Empujar una caja con fuerza",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_18",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿A qué género literario pertenece la QUÍMICA",
    "opciones": [
      "Lírico.",
      "aire — el cloruro de sodio",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El es un compuesto y",
    "opciones": [
      "Bibliográfica.",
      "De resumen, 22. Los ordenamientos horizontales en la",
      "Hemerográfica. Tabla Periódica se llaman",
      "De cita."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_19",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué tipo de ficha es la siguiente?",
    "opciones": [
      "Bibliográfica.",
      "De resumen, 22. Los ordenamientos horizontales en la",
      "Hemerográfica. Tabla Periódica se llaman",
      "De cita."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_26",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de los siguientes valores de pH",
    "opciones": [
      "13 A) 10:00 hrs.",
      "11:00 hrs.",
      "12:00 hrs.",
      "físicos y biológicos. Norteamericana produce sismos que"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_28",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La combustión es una reacción de D) Veracruz, Tabasco y Campeche.",
    "opciones": [
      "reducción. representan",
      "los ríos.",
      "-OH",
      "-OR"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_29",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El enlace peptídico se forma al B) los glaciares.",
    "opciones": [
      "—COOH",
      "-CHO",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_34",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las corrientes frías se relacionan con 38. La Unión Europea tiene como",
    "opciones": [
      "libre circulación de mercancías,",
      "camarón y jaiba. personas y políticas comunes.",
      "bacalao y camarón.",
      "protección de los derechos de los"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_36",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Regiones densamente pobladas en el A) oxporta mas productos de los que",
    "opciones": [
      "Illy IV",
      "lyll .",
      "Illy V MATEMATICAS",
      "ly V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_43",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al desarrollar el binomio (x — y)? se D) 8 dm y 1 dm",
    "opciones": [
      "x? — 2xy + y? A) x<1",
      "xs-11",
      "x (x- 3) 3x+y=8",
      "x-3 2x — 4y =-4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_45",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Al resolver la ecuación 2x — 4 = ome D) x=2;y=2",
    "opciones": [
      "x= 14 función muestra que los valores son",
      "x= 5 y",
      "x= Ll",
      "x=-14"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_49",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "En lla siguiente gráfica el rango de la",
    "opciones": [
      "x= 14 función muestra que los valores son",
      "x= 5 y",
      "x= Ll",
      "x=-14"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_51",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si f(x) = = y g(x) = x + 2 entonces",
    "opciones": [
      "senA _ senB",
      "senA _ senB",
      "senA _ senB",
      "senB _ senA"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_60",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el centro y el radio de la",
    "opciones": [
      "C(3, 2) r= 36",
      "C(-3, 2)r=6",
      "C(-3, 2) r= 36",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_61",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un objeto es lanzado describiendo la ESPAÑOL",
    "opciones": [
      "V(-4, -3), F(-4, -6)",
      "V(3, 4), F(6, 4) Luisa, ¿puedes limpiar la mesa y lavar",
      "V(4, 3), F(4, 6) los trastes por favor?",
      "V(-3, 4), F(-6, -4)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_62",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las coordenadas de los C) Referencial.",
    "opciones": [
      "Fi = (0- V8), F2= (0, V8) a |",
      "Era apenas una niña cuando la vi por",
      "F1 =(0, —3), F2 = (0, 3) primera vez.",
      "A las tres en punto moriría un"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_63",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La hipérbola es el lugar geométrico de transeúnte.",
    "opciones": [
      "suma — variable lago.",
      "diferencia — constante",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_72",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El personaje sintió un gran alivio al 76. Elige el párrafo con la mejor",
    "opciones": [
      "llamar a su médico conocimiento, para iniciar, así una",
      "sentir que su mujer lo levantaba. soslayar si queremos profundizar en",
      "denunciar los efectos nocivos del a near Js presenta el",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_73",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Con el texto, el autor intenta B) Así, la posibilidad y el origen del",
    "opciones": [
      "narrar la despersonalización de un soslayar si queremos profundizar en",
      "describir los síntomas de la una vertiente filosófica que no",
      "mostrar el malestar de un individuo profundizar en el tema. De modo que",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_77",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Selecciona el grupo de conectores 78. ¿Cuál de los siguientes párrafos está",
    "opciones": [
      "por lo que — así — que pedidos de los nuevos clientes y la",
      "y - dado que — los cuales búsqueda de proveedores más",
      "En la reunión se abordarán tres",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_81",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Completa el enunciado con las grafías 85. Tipo de fermentación donde las",
    "opciones": [
      "S-S-Z-Ss",
      "c-c-z-C 86. Relaciona las fases del ciclo celular",
      "s-Cc-s-s con los procesos que ocurren en cada",
      "s-c-s-c una de ellas."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_82",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elige el enunciado que tiene la |. Mitosis.",
    "opciones": [
      "Notó que aquel beso era de un Procesos",
      "La abeja se diferencía de la avispa b. Crecimiento de la célula.",
      "Síntesis de proteínas.",
      "La practica de física se canceló. d. División celular."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_87",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuáles de las siguientes son",
    "opciones": [
      "A to de Golgi.",
      "Lisosoma. progenitor.",
      "Ribosoma. Il. Propicia la variabilidad por el",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_83",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Organelo celular cuya principal características de la reproducción",
    "opciones": [
      "A to de Golgi.",
      "Lisosoma. progenitor.",
      "Ribosoma. Il. Propicia la variabilidad por el",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_84",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El proceso fotosintético que realizan . woe",
    "opciones": [
      "glucosa y bióxido de carbono. e) | y",
      "fósforo y bióxido de carbono. o) Y Tí",
      "glucosa y oxígeno. o) i i",
      "oxígeno y fósforo. ) My"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_89",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En la actualidad, es la teoría mas D) Observación.",
    "opciones": [
      "Vitalista. A) La razón como instrumento para",
      "Quimiosintética. conocer el mundo.",
      "La organización del saber empírico y",
      "procarióticas. D) El surgimiento del humanismo"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_94",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Representa uno de los principios",
    "opciones": [
      "Vitalista. A) La razón como instrumento para",
      "Quimiosintética. conocer el mundo.",
      "La organización del saber empírico y",
      "procarióticas. D) El surgimiento del humanismo"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_90",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los organismos pertenecientes a los filosófico.",
    "opciones": [
      "heterótrofas. renacentista.",
      "eucarióticas.",
      "autótrofas. 95. Son causas de la independencia de",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_92",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Forman el primer eslabón en una",
    "opciones": [
      "Depredadores.",
      "Ludismo.",
      "Socialismo.",
      "Cartismo."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_96",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Movimiento obrero que planteaba al",
    "opciones": [
      "Depredadores.",
      "Ludismo.",
      "Socialismo.",
      "Cartismo."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_98",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Suceso que ocasionó la entrada de los A) |, IV, Y, My Il",
    "opciones": [
      "El hundimiento del trasatlantico",
      "El asesinato del archiduque Francisco",
      "La invasión alemana a Rusia.",
      "La Revolución Bolchevique."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_99",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Revolución que nacionalizó la banca y",
    "opciones": [
      "Mexicana.",
      "Rusa.",
      "Inglesa.",
      "Francesa."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_103",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al conflicto que provocó el",
    "opciones": [
      "Guerra de las galaxias. Yucatán, Quintana Roo y Chiapas.",
      "Olmeca.",
      "India e Iran.",
      "Timor y Angola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Acontecimientos importantes de la B) fortalecer el liberalismo.",
    "opciones": [
      "La abolición de la esclavitud y la Creelman sirvió para",
      "El grito de Dolores y la creación de la B) recuperar el prestigio de México en el",
      "La organización del movimiento en C) ar ción RAN a",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_115",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Presidente que creo la Secretaria de",
    "opciones": [
      "Lázaro Cárdenas.",
      "Alvaro Obregón.",
      "Venustiano Carranza.",
      "Victoriano Huerta."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_116",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Nombre que adoptó el PNR en 1939, al 120. Política económica que aplicó el",
    "opciones": [
      "Sustitución de importaciones.",
      "Partido Acción Nacional. B) Neoliberalismo.",
      "Partido de la Revolución Mexicana. C) Desarrollo estabilizador.",
      "Partido Popular Socialista. D) Desarrollo compartido."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_117",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una de las acciones más destacada",
    "opciones": [
      "fundación de la comisión de",
      "romper relaciones diplomáticas con",
      "no intervenir en ningún bando.",
      "vender petróleo a ambos"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_118",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La posición de México ante la",
    "opciones": [
      "romper relaciones con las potencias",
      "liberalismo económico.",
      "neoliberalismo.",
      "desarrollo compartido."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Estimando la aceleración de la F",
    "opciones": [
      "4.0s",
      "8.0s 5. Una bala de cañón de 7.0 kg se",
      "9.8 s dispara verticalmente hacia arriba con",
      "39.25 una rapidez de 120 m ¿Cuánta"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_39",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "2 m alcance su punto más alto. D) inversamente proporcional al",
    "opciones": [
      "4.0s",
      "8.0s 5. Una bala de cañón de 7.0 kg se",
      "9.8 s dispara verticalmente hacia arriba con",
      "39.25 una rapidez de 120 m ¿Cuánta"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un niño está parado sobre un carrito, 9. A la cantidad de calor que necesita un",
    "opciones": [
      "6.0 kg",
      "5.0 kg 10. Una onda formada en una cuerda tiene",
      "2.5 kg una longitud de onda de 10 cm y un",
      "0.8 kg periodo de 2 s, ¿con qué velocidad se"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un sistema está en equilibrio térmico Propag",
    "opciones": [
      "20.00 “™",
      "en un proceso su temperatura no s",
      "su temperatura es igual a la de otro s",
      "se calienta por medio de trabajo. D) 2.00 em"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "8 B) polarizan.",
    "opciones": [
      "T, =1.8 (T, +273) una corriente eléctrica de 10 A ¿Cuál",
      "100 V",
      "20V",
      "10V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por un cable, que tiene una",
    "opciones": [
      "T, =1.8 (T, +273) una corriente eléctrica de 10 A ¿Cuál",
      "100 V",
      "20V",
      "10V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Enel circuito eléctrico se muestran 3 15. El fenómeno que por primera vez puso",
    "opciones": [
      "la radioactividad natural.",
      "Se apagan el foco 2 y el foco 3. energía y caen al núcleo.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_23",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Autor mexicano que escribió El D) De cita textual.",
    "opciones": [
      "Juan Rulfo. QUÍMICA",
      "José Emilio Pacheco.",
      "Octavio Paz.",
      "Didáctico. o  €esunamezcla."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_38",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las latitudes y longitudes 41. El aumento de bióxido de carbono en",
    "opciones": [
      "lyll",
      "Illy V",
      "Montevideo: 35° lat S — 56° long W 5) | yv",
      "Montevideo: 55° lat N — 37° long E"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "NI |) beresceees",
    "opciones": [
      "lyll",
      "Illy V",
      "Montevideo: 35° lat S — 56° long W 5) | yv",
      "Montevideo: 55° lat N — 37° long E"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_45",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La principal zona de producción de",
    "opciones": [
      "región del Pacífico sur. 49. Al desarrollar (x? — 3y)? se obtiene",
      "XP - 9x y + 27x%y? - 27y?",
      "x? + Oxy — 27x2y? + 27y?",
      "x® - 9xty + 27x2y? - 27y?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_50",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Al simplificar Zax—6a ” obtiene 54. Soluciona el sistema de ecuaciones",
    "opciones": [
      "x=2,y=4,z=5",
      "42 C)x=-2,y=4,2=5",
      "{1, 3}",
      "8 D) {2, 3, 4}"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_51",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La solución de la ecuación",
    "opciones": [
      "9",
      "10 56. ¿Cuál es el seno del ángulo A en el",
      "12 . ¿Cuál es el seno del ángulo A en e",
      "x(x-2)=0 3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_58",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación de la asintota ra",
    "opciones": [
      "y=-3",
      "x=-3 B) y =-x+3",
      "y=3 4",
      "y= -7x+3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_73",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Elige la función de la lengua que",
    "opciones": [
      "Metalinguística. malestar apenas toqué el periódico. Creí que",
      "Apelativa. solamente se trataba de uno de mis",
      "Referencial. acostumbrados mareos. Pagué el importe del",
      "Sintomática. diario y regresé a mi casa. Mi esposa había"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_74",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Identifica el enunciado en el que la la primera página. Luego de enterarme de que",
    "opciones": [
      "Era apenas una niña cuando la vi por Cuando iba a tomar mi cigarro, descubrí que",
      "Alas tres en punto moriría un inmediato retorné al baño, me tallé con .",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_80",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El personaje sintió un gran alivio al 84. Elige el párrafo con la mejor",
    "opciones": [
      "escuchar que su mujer abría la",
      "regresar al sillón origen del conocimiento son algunos",
      "llamar a su médico. conocimiento, para iniciar, así una",
      "sentir que su mujer lo levantaba. vertiente filosófica que no podemos"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_82",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Señala el sujeto del siguiente o o",
    "opciones": [
      "la multitud enardecida clave.",
      "En el partido del domingo",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "eon aeons 85. Selecciona el grupo de conectores",
    "opciones": [
      "complemento indirecto. mecanismos de representación ws",
      "complemento circunstancial. — sn inherentes a la función",
      "complemento directo. pública.",
      "predicado nominal. :"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_83",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En e ays vente once al palabras El Banco de México ya es autónomo",
    "opciones": [
      "complemento indirecto. mecanismos de representación ws",
      "complemento circunstancial. — sn inherentes a la función",
      "complemento directo. pública.",
      "predicado nominal. :"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_93",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Tipo de fermentación donde las 96. Se denomina al proceso",
    "opciones": [
      "traducción",
      "Láctica. B) mutación",
      "Butírica. C) replicación",
      "Alcohólica. D) transcripción"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_95",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuáles de las siguientes son",
    "opciones": [
      "Depredadores.",
      "lylll",
      "lyll",
      "1, Il y 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ordena cronológicamente los 108. Alianzas militares con fines",
    "opciones": [
      "1,11, HL IV y V",
      "1, IV, V, Illy Il 109. Una característica de la Guerra Fría",
      "Il, IV, V, lly | fue",
      "Ill, IV, V, ly"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_107",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ordena cronológicamente los",
    "opciones": [
      "LIV, V, 1 y 111",
      "Il, V, 1, IM y IV",
      "Ill, 1, IV, V y II",
      "IV, Ill, 1, ll y V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_113",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Característica que distingue a la C) Partido Popular Socialista.",
    "opciones": [
      "El fortalecimiento de una forma de A) autorizar su venta a los extranjeros.",
      "La creación del sistema ) paraestatal. P",
      "entregar la administración a los",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_rea1unam201_114",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La corriente ideológico política de la : A .",
    "opciones": [
      "conservadora.",
      "liberal.",
      "centralista.",
      "parlamentaria."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "bio_biologicas2013_60",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La ecuación de la circunferencia que",
    "opciones": [
      "x2 + y2 − r = 0",
      "x2 + y2 + r = 0",
      "x2 − 20x − 6y + 89 = 0",
      "y2 − 6x + 20y + 89 = 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "bio_biologicas2013_63",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál podría ser la ecuación que",
    "opciones": [
      "x2 − y2 = 1",
      "x2 − y2 = −1",
      "parábola.",
      "elipse."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "bio_ocr_biologicas2014_59",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La ecuación de la circunferencia que 62. De las siguientes ecuaciones, la que",
    "opciones": [
      "+y-r=0 SN “",
      "xX +y*-r=0 y",
      "*+y+r=0 TEN",
      "x*-y=1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "bio_ocr_biologicas2016_59",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Considera una circunferencia en el 63. Sien la ecuación",
    "opciones": [
      "La ecuación que describe la",
      "parábola.",
      "{(xy) en el plano | d((x,y), (h,k)) = 2r} C) elipse.",
      "hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "gen_ocr_guiaunam2025_66",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La ecuación f(x). ¿En qué intervalo la derivada de",
    "opciones": [
      "circunferencia.",
      "parábola. !",
      "elipse. ! ox",
      "hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "bio_ocr_biologicas2013_62",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La ecuación de la circunferencia que",
    "opciones": [
      "XÉ+y+r=0",
      "x2 - 20x - 6y+89=0",
      "y? - 6x + 20y + 89=0",
      "y - 6x - 20y + 89=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_43",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Con la afirmación: \"Usamos una mujer porque las terapeutas suelen serlo y asi se facilita la aceptación”, el",
    "opciones": [
      "las mujeres son las únicas que pueden ejercer y demostrar emociones",
      "existe una relación estrecha con la figura materna que predispone al niño a evitar un rechazo con el",
      "la relación con la figura materna ayudará a mejorar notablemente el autismo",
      "las terapeutas mujeres tienen la facilidad de demostrar las emociones"
    ],
    "correcta": 3,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_44",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "\"El robot que estamos desarrollando emplea un análogo del cerebro humano que le permite emular el",
    "opciones": [
      "los autómatas simulan el razonamiento humano para demostrar el llanto",
      "con el razonamiento humano, el robot ejemplifica con muecas fieles las emociones para que el niño las",
      "el razonamiento humano permite que el niño autista, con base en repeticiones identifique los rasgos y",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_cuadernillode_34",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Determina el valor de “x\" en la siguiente ecuación 7x — 10 = 5x + 8 — x.",
    "opciones": [
      "15 B)3 C)- 3 D)- 15",
      "<A B) a=-2 ul D)a=8",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_ejerciciosmate_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Dada la desigualdad -5x + 9 > -6, seleccione en cada caso el signo “<” o “>”, que debe ir en el recuadro.",
    "opciones": [
      "1.>,11.>, Il. >",
      "L<, IL <, II <",
      "x>-4",
      "x<-7"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_ejerciciosmate_14",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La siguiente tabla muestra los puntos de la función f(x) = cotx , con base en ella indica para que valores de las",
    "opciones": [
      "x= 90°, x= 270°",
      "x=0°,x= 180°",
      "x= 60°, x= 240°",
      "x= 150°, x = 330°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_ejerciciosmate_16",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La grafica de la función f(x) = log(x), es:",
    "opciones": [
      "-5,-7",
      "-1,4",
      "4,6",
      "x-2y-1=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_ejerciciosmate_20",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las coordenadas del vértice y foco de la parábola cuya ecuación es x? - 4x + 8y +12=0?",
    "opciones": [
      "distancia a un punto fijo equidista a una recta fija",
      "distancia al punto ( 2, — 5 ) es siempre constante",
      "diferencia de distancias a 2 rectas fijas es siempre constante",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_ejerciciosmate_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una hipérbola es el conjunto de puntos tales que la",
    "opciones": [
      "distancia a un punto fijo equidista a una recta fija",
      "distancia al punto ( 2, — 5 ) es siempre constante",
      "diferencia de distancias a 2 rectas fijas es siempre constante",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_ejerciciosmate_22",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Identifica la ecuación que representa a la grafica que se muestra.",
    "opciones": [
      "y? = 4px",
      "L+%-=1",
      "recta",
      "circunferencia"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_39",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "2 — alcance su punto más alto.",
    "opciones": [
      "4.0s",
      "80s",
      "98s",
      "39.2s"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En una receta se indica que la cocción",
    "opciones": [
      "454 F",
      "493 °F",
      "428 °F",
      "104 °F"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una de las suposiciones de la teoria",
    "opciones": [
      "carecen de movimiento.",
      "se mueven lentamente.",
      "son rígidas.",
      "son deformables."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_8",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcula la frecuencia de una luz de",
    "opciones": [
      "2.33 x 10% Hz",
      "2.10 x 10? Hz",
      "4.76 x 10° Hz",
      "4.28 x 101 Hz"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Atodo fenómeno ondulatorio que",
    "opciones": [
      "interferencia.",
      "difracción.",
      "polarización.",
      "refracción."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_15",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Guía-CFMI-2024:indd 64",
    "opciones": [
      "partícula y onda.",
      "energía y movimiento.",
      "calor y difracción.",
      "reflexión y refracción."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_26",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿De qué tipo es la siguiente ficha?",
    "opciones": [
      "Hemerográfica.",
      "De síntesis.",
      "Bibliográfica.",
      "De cita textual."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_27",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Experimento que da pauta a la",
    "opciones": [
      "Bombardeo sobre una lámina de oro",
      "Determinación de la carga del",
      "Descargas sobre tubos de rayos",
      "Observación de partículas en una"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_28",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La clasificación de los elementos que",
    "opciones": [
      "el orden creciente de sus números",
      "su reactividad frente al agua.",
      "su facilidad de oxidarse en el aire.",
      "el orden creciente de sus masas"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_30",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de los siguientes óxidos al",
    "opciones": [
      "NazO",
      "MgO",
      "FeO",
      "CO»"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_31",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "Número de moléculas que hay en 3",
    "opciones": [
      "electrones compartidos y su",
      "puentes de hidrógeno y electrones",
      "puentes de hidrógeno y su polaridad.",
      "electrones compartidos y distancia"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_37",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Guía-CEMI-2024:indd 68",
    "opciones": [
      "Vitamina E.",
      "Vitamina D.",
      "Tirosina.",
      "Triptófano."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_42",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si en el huso horario 0° son las",
    "opciones": [
      "10:00 hrs.",
      "11:00 hrs.",
      "12:00 hrs.",
      "13:00 hrs."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_43",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las dos áreas de mayor",
    "opciones": [
      "Asia Meridional y Europa Occidental.",
      "Asia Meridional y Europa Meridional.",
      "Oligopolio.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_44",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Conjunto de empresas con pocos",
    "opciones": [
      "Suecia, Noruega y Finlandia.",
      "Polonia, República Checa y Hungría.",
      "Rumania, Bulgaria y Albania.",
      "Letonia, Ucrania y Estonia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_45",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Paises que se independizaron de la",
    "opciones": [
      "Suecia, Noruega y Finlandia.",
      "Polonia, República Checa y Hungría.",
      "Rumania, Bulgaria y Albania.",
      "Letonia, Ucrania y Estonia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_46",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La primera zona pesquera de México",
    "opciones": [
      "atún y la sardina.",
      "88",
      "8.6",
      "9.6"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_57",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina el rango de la función",
    "opciones": [
      "y>5",
      "y<5",
      "ys5",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_68",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "CFMI-2024.indd 72",
    "opciones": [
      "la cónica pasa por el origen del marco",
      "los ejes de simetría de la cónica son",
      "los ejes de simetría de la cónica no",
      "la cónica está centrada en el origen"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_71",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El movimiento de una partícula está",
    "opciones": [
      "v=96 @",
      "v=174 ™",
      "v= 102 ™",
      "v=32 ™"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_76",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Identifica la forma del discurso que",
    "opciones": [
      "Argumentativa.",
      "Descriptiva.",
      "Expositiva.",
      "Narrativa."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_77",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿En qué parte del texto se encuentra",
    "opciones": [
      "Introducción.",
      "Los científicos deben conocer la",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_80",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de los siguientes enunciados",
    "opciones": [
      "manifiesta su desconocimiento de la",
      "acepta que la filosofía tiene su propio",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_83",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el sujeto en el siguiente",
    "opciones": [
      "En el siglo V.",
      "Toda mentira.",
      "San Agustín.",
      "Consideraba pecado."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_89",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la opción con la ortografía",
    "opciones": [
      "grabe — vivora — Vaya",
      "grave — víbora — Vaya",
      "grabe — vívora — Baya",
      "grave — víbora — Baya"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_90",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de los siguientes enunciados",
    "opciones": [
      "Cubre el prerequisito y llegarás al",
      "Cubre el prerrequisito y llegarás al",
      "Cubre el prerrequisito y llegarás al",
      "Cubre el prerequisito y llegarás al"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_91",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los investigadores que cristalizaron",
    "opciones": [
      "Mendel y Morgan.",
      "Darwin y Wallace.",
      "Oparin y Haldane.",
      "Schleiden y Schwann."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_92",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Producto elaborado por las plantas en",
    "opciones": [
      "Glucosa.",
      "Etanol.",
      "Lactato.",
      "Piruvato."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_97",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué producto de la glucólisis se",
    "opciones": [
      "Glucosa.",
      "Etanol.",
      "Lactato.",
      "Piruvato."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_106",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La ideología nacionalsocialista se",
    "opciones": [
      "fomentó la superioridad de la raza",
      "planteó alianzas con países sionistas.",
      "limitó la intervención militar en el",
      "estableció un gobierno democrático."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_107",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La división del mundo en bloques, la",
    "opciones": [
      "Primera Guerra Mundial.",
      "Guerra Fría.",
      "Guerra de Medio Oriente.",
      "Segunda Guerra Mundial."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_108",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La economía planificada, la",
    "opciones": [
      "capitalista.",
      "neoliberal.",
      "socialista.",
      "anarquista."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La Guerra de Corea, la Crisis de los",
    "opciones": [
      "Gran Depresión.",
      "Guerra Fría.",
      "expansión totalitarista.",
      "descolonización mundial."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunamarea_112",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Facilita el comercio mundial, se asocia",
    "opciones": [
      "Socialismo.",
      "Neoliberalismo.",
      "Globalización.",
      "Comunismo."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaunam2021_8",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "\" G)=/im f(3)-F(3+h) _ jim 32 (B+h)",
    "opciones": [
      "LEE, -1 , _ 39-33 +303*h-3 03h? +h?",
      "(x+3)* + y =1",
      "(x+ 3)\" Y 1 69. Indica las coordenadas de los",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_94",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de Av\" —16x +3x+18 es:",
    "opciones": [
      "-2x? + 5x+6 b) -2x? - 5x-6 c) 2x?-5x-6 d) 2x? + 5x+6",
      "-a?- 3a- 1 b) a? - 3a+1 c) a?+3a+1 d) a?- 3a-1",
      "4x +3 b) 4x- 3 c) 3x- 4 d) 3x+ 4",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_107",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar ./36x\"° y*z° se obtiene:",
    "opciones": [
      "3x?y b) x?y c) 3xy d) x’y",
      "4x*y?2Y2y* b) *y?2Y2y*z c) 4xyz2Y2y?z d) yz)2y?z",
      "27x y?\" b) 3x\"y?\" c) 9x \"y?\" d) xy?\"",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_110",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La simplificación de ¿/243x\" y” es:",
    "opciones": [
      "3x?y b) x?y c) 3xy d) x’y",
      "4x*y?2Y2y* b) *y?2Y2y*z c) 4xyz2Y2y?z d) yz)2y?z",
      "27x y?\" b) 3x\"y?\" c) 9x \"y?\" d) xy?\"",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_55",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué opción contiene únicamente compuestos ácidos?",
    "opciones": [
      "anhídrido b) óxido c) hidróxido d) ácido",
      "220 g b) 158 g c) 110g d) 83 g",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_56",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Relaciona las siguientes funciones inorgánicas con los compuestos químicos que les corresponden.",
    "opciones": [
      "anhídrido b) óxido c) hidróxido d) ácido",
      "220 g b) 158 g c) 110g d) 83 g",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_57",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La reacción entre un no metal y oxígeno forma:",
    "opciones": [
      "anhídrido b) óxido c) hidróxido d) ácido",
      "220 g b) 158 g c) 110g d) 83 g",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_18",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La lluvia ácida contiene ácido sulfúrico, que reacciona con el mármol, el cual contiene carbonato de",
    "opciones": [
      "CaCO, + 2 HCI > CaCl, + CO, + H,O d) H,SO, + CaCO, > CaSO, + H,O + CO,",
      "metano. b) carbono. c) dióxido de nitrógeno.  d) dióxido de azufre.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_19",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué plan acordaron Vicente Guerrero y Agustín de Iturbide antes de firmarse el Tratado de",
    "opciones": [
      "Plan de Ayala b) Plan de Casa Mata cc) Plan dela Noria dd) Plan de Iguala",
      "El de Ciudad Juárez b) El de Córdoba c) El de La Profesa  d) El de Apatzingán",
      "Nicolás Bravo, Vicente Guerrero y José María Morelos",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_20",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué decreto de importancia nacional emitió Lázaro Cárdenas en 1938?",
    "opciones": [
      "El Tratado de Bucareli b) El decreto de autonomía universitaria",
      "La fundación del 1pN d) La expropiación petrolera",
      "promovió la reelección de Álvaro Obregón",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Unaacción que distingue a la estrategia económica de José López Portillo durante su gobierno fue que:",
    "opciones": [
      "fomentar una reconversión tecnológica y ofrecer empresas públicas al extranjero",
      "sostener una alianza de libre comercio y la aplicación de aranceles globales",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_27",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Por el reordenamiento económico, la incorporación de México al Acuerdo General de Aranceles y",
    "opciones": [
      "el gobierno de Miguel de la Madrid marcó el inicio de la tecnocracia para fomentar el neolibera-",
      "la renovación moral de las instituciones y de la sociedad no fue nunca un criterio aplicado por los",
      "el Estado intervencionista ha sido el principal promotor de la privatización y del desarrollo sus-",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_28",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El Tratado de Libre Comercio entre México, Canadá y Estados Unidos se firmó durante el go-",
    "opciones": [
      "Miguel de la Madrid b) Carlos Salinas de Gortari",
      "Ernesto Zedillo Ponce d) Vicente Fox Quesada",
      "El decreto de expropiación de la banca",
      "La reforma constitucional al artículo 27 constitucional"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_16",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Las coordenadas geográficas señaladas con el punto B son:",
    "opciones": [
      "latitud: 2° S, longitud: 11° W",
      "latitud: 10° N, longitud: 1° E",
      "latitud: 1° S, longitud: 10° W |",
      "latitud: 1° N, longitud: 10° E"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_17",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las coordenadas geograficas sefialadas con el punto C son:",
    "opciones": [
      "latitud: 2° N; longitud: 17° W",
      "latitud: 17° S; longitud: 2° E",
      "latitud: 2° S; longitud: 17° E",
      "latitud: 17° N; longitud: 2° W"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_24",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si en el huso horario de 75° E son las 17:00 horas, ¿qué hora es en el huso horario 90° W?",
    "opciones": [
      "6:00 horas .",
      "18:00 horas",
      "5:00 horas",
      "4:00 horas"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_26",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si en el huso horario 105° W es sábado a las 13:00, determina el día y la hora en el huso 120° E.",
    "opciones": [
      "viernes a las 16:00 horas",
      "domingo a las 5:00 horas",
      "domingo a las 4:00 horas",
      "viernes a las 17:00 horas"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El término Sierra Madre sirve para explicar:",
    "opciones": [
      "cada uno de los sistemas montañosos en general, paralelos a las costas del país",
      "la orografía en regiones peninsulares como Yucatán",
      "las características específicas de las montañas del occidente mexicano",
      "el clima de alta montaña en zonas costeras de México y Norteamérica"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_14",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Relaciona los principales ríos de América con su ubicación geográfica:",
    "opciones": [
      "Hondo y Bravo",
      "Lerma y Colorado",
      "Cutzamala y Papaloapan",
      "Lerma y Cutzamala"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_15",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Además del agua subterránea, ¿de qué ríos se provee la Ciudad de México?",
    "opciones": [
      "Hondo y Bravo",
      "Lerma y Colorado",
      "Cutzamala y Papaloapan",
      "Lerma y Cutzamala"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_8",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La mortandad de las algas marinas genera mayor cantidad de óxido de carbono-y una conse-",
    "opciones": [
      "las mareas negras",
      "la falta de óxido de carbono",
      "la contaminación en los mares",
      "la lluvia ácida en zonas costeras"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_9",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En la superficie marítima la fotosíntesis es un proceso que se favorece por:",
    "opciones": [
      "el plancton",
      "las mareas negras",
      "la navegación",
      "la muerte de los peces"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los derrames petroleros en mares son un ejemplo de:",
    "opciones": [
      "los conflictos armados posteriores a la Guerra Fría",
      "la contaminación de los recursos hidrológicos",
      "las variaciones climáticas por calentamiento",
      "el desarrollo sustentable de la globalización"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_12",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué continente tiene la mayor concentración de población?",
    "opciones": [
      "América b) Asia c) África d) Oceanía",
      "América / Estados Unidos / Brasil",
      "Europa / Rusia / Alemania",
      "Asia / China / India"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Lee lo siguiente:",
    "opciones": [
      "África / Kenia / Nigeria",
      "el clima extremo en la zona rural",
      "el exceso de burocracia en la zona rural",
      "la proliferación del terrorismo en México"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_25",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Del proceso de desintegración de la Unión Soviética, surgió este país:",
    "opciones": [
      "1-a, 2—b, 3=c",
      "1—b, 2-a, 3-d",
      "ser los de mayor extensión",
      "carecer de costas"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Ex Checoslovaquia c) Se fragmento en regiones nacionales con una guerra civil",
    "opciones": [
      "1-a, 2—b, 3=c",
      "1—b, 2-a, 3-d",
      "ser los de mayor extensión",
      "carecer de costas"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_29",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las costas del estado de Quintana Roo, limitan con:",
    "opciones": [
      "mar del b) océano c) golfo de d) mar de las",
      "Sinaloa, Hidalgo y Tamaulipas",
      "Sonora, Chihuahua y Coahuila",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_30",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Tres estados de la República Mexicana que corresponden a la región del norte:",
    "opciones": [
      "Chiapas, Tabasco y Campeche",
      "occidente b) centro c) sur Pacífico d) sureste",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_31",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son los estados de la República Mexicana que hacen frontera con Guatemala:",
    "opciones": [
      "Chiapas, Tabasco y Campeche",
      "occidente b) centro c) sur Pacífico d) sureste",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_32",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Chiapas es una entidad federativa que se ubica en:",
    "opciones": [
      "Sonora y b) Nayarit c) Veracruz y d) Colima y",
      "Durango y b) Querétaro c) Guerrero y d) Hidalgo y",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_33",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son dos de los estados de nuestro país que destacan en la producción pesquera:",
    "opciones": [
      "Sonora y b) Nayarit c) Veracruz y d) Colima y",
      "Durango y b) Querétaro c) Guerrero y d) Hidalgo y",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_34",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Entre las entidades más productivas de oro y plata figuran:",
    "opciones": [
      "atún y sardina b) cazón y tortuga c) almeja y abulón  d) ostión y robalo",
      "costa noroeste",
      "región del Pacífico sur",
      "costa del Pacífico norte"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_35",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las aguas que bañan la península de Baja California representan la primera zona pesquera de",
    "opciones": [
      "atún y sardina b) cazón y tortuga c) almeja y abulón  d) ostión y robalo",
      "costa noroeste",
      "región del Pacífico sur",
      "costa del Pacífico norte"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_36",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es la principal zona de producción petrolera en México:",
    "opciones": [
      "costa del golfo",
      "la pesca, la industria automotriz y las exportaciones",
      "el comercio, los servicios y el turismo",
      "las finanzas, la agricultura y las comunicaciones"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_4",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Elena es madre de familia y se alegra con los logros de sus hijos.",
    "opciones": [
      "Un argumento inductivo puede ser correcto o incorrecto.",
      "Un argumento deductivo es válido o inválido.",
      "Un argumento inductivo tiene conclusiones probables; por ello, usamos la palabra probable, así evita-",
      "Un argumento deductivo posee conclusiones necesarias."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Fátima es madre de familia y se alegra con los logros de sus hijos.",
    "opciones": [
      "Un argumento inductivo puede ser correcto o incorrecto.",
      "Un argumento deductivo es válido o inválido.",
      "Un argumento inductivo tiene conclusiones probables; por ello, usamos la palabra probable, así evita-",
      "Un argumento deductivo posee conclusiones necesarias."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Laura es madre de familia y se alegra con los logros de sus hijos.",
    "opciones": [
      "Un argumento inductivo puede ser correcto o incorrecto.",
      "Un argumento deductivo es válido o inválido.",
      "Un argumento inductivo tiene conclusiones probables; por ello, usamos la palabra probable, así evita-",
      "Un argumento deductivo posee conclusiones necesarias."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Virginia es madre de familia y se alegra con los logros de sus hijos.",
    "opciones": [
      "Un argumento inductivo puede ser correcto o incorrecto.",
      "Un argumento deductivo es válido o inválido.",
      "Un argumento inductivo tiene conclusiones probables; por ello, usamos la palabra probable, así evita-",
      "Un argumento deductivo posee conclusiones necesarias."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Identifica la falacia presente en el siguiente texto. a ..",
    "opciones": [
      "Ad hominem b) Círculo vicioso",
      "Ignorancia de la causa d) Recurso a la fuerza o ad baculum",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaconamatun_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Obra de tal modo que la máxima de tu voluntad pueda valer siempre, al mismo tiempo, como prin-",
    "opciones": [
      "se genera de una cualidad común en los objetos que se llaman valores.",
      "no existe sólo para las formas de vida buenas moralmente y responsables.",
      "existe sin limitaciones del sujeto que valora; es decir, sin la necesidad de una persona.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guaoficialip_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "- El enunciado \"x pertenece al conjunto Q pero no al conjunto P” es una",
    "opciones": [
      "1B, 2E, 3C, 4A 4. ANB=BNA A. De Morgan",
      "1E, 2D, 3B, 4c B.AUAC=U",
      "R-S B)SSUR",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El valor numérico de la expresión 222",
    "opciones": [
      "7",
      "91/3",
      "-7/3",
      "- 25/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Rogelio recibe un salario semanal de $800 mas el 5% de comisiones",
    "opciones": [
      "$1,100",
      "$1,200",
      "$1,300",
      "$1,400"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado del binomio (2a + 3ab)? es",
    "opciones": [
      "al + 6alb + 9a°b?",
      "4a + 12a%b + ab?",
      "4a? + da’ + ab?",
      "4a? + 12a%b + 9a%b?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución de la desigualdad 6x - 1>7x-2es",
    "opciones": [
      "x<0",
      "x<1",
      "x<2",
      "x>-1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_15",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes gráficas representa una función creciente?",
    "opciones": [
      "vis",
      "V17",
      "v35",
      "v37"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_16",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia entre los puntos A (-3, 5) y B (-2, -1)?",
    "opciones": [
      "vis",
      "V17",
      "v35",
      "v37"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_19",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica la expresión *",
    "opciones": [
      "14.179",
      "56.689",
      "42.519",
      "5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_20",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una onza equivale a 28.34 g. Se tienen 5 bolsas de 1.5 onza cada una",
    "opciones": [
      "14.179",
      "56.689",
      "42.519",
      "5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_22",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la recta y = 2x - 1?",
    "opciones": [
      "2x-3y-1",
      "2x-3y-3=0",
      "(x-2)?+ (y-3)=5",
      "(x + 22+ (y + 3)2= 25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_23",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la circunferencia de centro (2, 3) y radio 5 es",
    "opciones": [
      "(x+2)+ (y +3)°=10",
      "(x-2)+ (y-3)°= 25",
      "x24 y -4x-2y-4=0",
      "+ y + 4x4 2y+11=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_24",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la circunferencia (x - 2)? + (y - 1?=",
    "opciones": [
      "x4 y?-4=0",
      "x24 y2+ 4x+2y-4=0",
      "(y-2%=12x—3)",
      "Recta."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_25",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Escribe la ecuación de una parábola horizontal que tiene un vértice",
    "opciones": [
      "Circunferencia.",
      "Elipse.",
      "Parábola.",
      "2(x? - 4)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_26",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación Ax?+ Bxy + Cy?+ Dx +Ey+F=0paraA=0yB=0,",
    "opciones": [
      "Circunferencia.",
      "Elipse.",
      "Parábola.",
      "2(x? - 4)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_27",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al dividir 2* entre =\" resulta",
    "opciones": [
      "x-2",
      "1/45",
      "4",
      "-22/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_30",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la siguiente operación? “ — 4(2 - 5)",
    "opciones": [
      "9",
      "7/6",
      "-7/6",
      "-1/2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_31",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver 37 — (6) - i}-22, el resultado es",
    "opciones": [
      "6/7",
      "2a2 + 2a*",
      "4a?-14a*",
      "-14a?— 2a*"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_32",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica 7a*- 6a?- (8a?+ 9a*)",
    "opciones": [
      "2a?-4a*",
      "x+y",
      "2x+3",
      "x-xy+y"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_34",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "un granjero tiene gallos y cabras, si la suma de sus cabezas es de 25",
    "opciones": [
      "x(3x + 8) + 2(3x + 8)",
      "2 +16",
      "3x(x + 2) + 2(3x + 8)",
      "2x?- 5x +16"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_35",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué opción es equivalente a (3x + 8)(x + 2)?",
    "opciones": [
      "x(3x + 8) + 2(3x + 8)",
      "2 +16",
      "3x(x + 2) + 2(3x + 8)",
      "2x?- 5x +16"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_36",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al desarrollar (a — b)*, se obtiene",
    "opciones": [
      "at + 4a%b + 4a°b?+ dab? + b*",
      "a'-4a'b + 4a°b?- 4ab'+ b*",
      "a'- 4a%b + 6a'b*- dab? + b*",
      "at - 4a%b - 4a%b? - 4ab* + b*"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_37",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el modelo matemático que permite resolver el si",
    "opciones": [
      "x + 2(x 41) = 272",
      "x+ (x+ 1) =272",
      "2x + (x + 1) =272",
      "x + 2(x— 1) = 272"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_38",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El segundo término de (a + b)* es",
    "opciones": [
      "6a°b",
      "15a‘b?",
      "20a°b*",
      "6ab®"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_39",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La expresión 4a?- 9b”, se factoriza como",
    "opciones": [
      "(2a-3b)?",
      "(2a + 3b)",
      "(4a — 9b)(4a + 9b)",
      "(2a-3b)(2a + 3b)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_40",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La factorización de 4x?- 1, es",
    "opciones": [
      "(2x- 1)",
      "(2x + 1)",
      "(4x- 1)(4x + 1)",
      "(2x- 1)(2x + 1)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_41",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de 2/18x7, es",
    "opciones": [
      "3xV2x",
      "6xV2x",
      "6v2x",
      "xy"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_46",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Gráfica que representa el conjunto solución de (x— 9) 2x + 1, es",
    "opciones": [
      "<< e—_—_",
      "<—_e___",
      "——>",
      "_o * >"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_47",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes afirmaciones cumple que [al < b?",
    "opciones": [
      "b<a<b",
      "b<aoa>b",
      "a<-boa<b",
      "a<b"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_48",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina el intervalo solución de la desigualdad *+ 2<2+ 1.",
    "opciones": [
      "acl",
      "a<2",
      "a>-1",
      "a>-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_49",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El intervalo solución de >->x 2 >x +>, es",
    "opciones": [
      "(-*, %)",
      "(0,14",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_50",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Plantea matemáticamente el siguiente problema: “en un corral hay",
    "opciones": [
      "1/3 y -1/4",
      "-1/3 y -1/4",
      "1/3y 1/4",
      "-1/3 y 1/4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_51",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Las soluciones de la ecuación 12x?— 7x + 1=0, son",
    "opciones": [
      "1/3 y -1/4",
      "-1/3 y -1/4",
      "1/3y 1/4",
      "-1/3 y 1/4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_53",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función f(x) = Vx — 3?",
    "opciones": [
      "(0, 09)",
      "(0, »)",
      "(- , 0)",
      "(0, -~)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_54",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función f(x) = e*?",
    "opciones": [
      "(0, 09)",
      "(0, »)",
      "(- , 0)",
      "(0, -~)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_55",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función y = lo(x+1)?",
    "opciones": [
      "(xeR/x<1)",
      "(xeR/xs-1)",
      "(xeR/x2- 1}",
      "(xeR/x>- 1)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_56",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio (D) y rango (R) de la función f(x) = 2* es",
    "opciones": [
      "D: (0, »); R: (9, »)",
      "D: (0, »); R: (0, »)",
      "D: (-<>, =>); R: (0, ->)",
      "D: (0, »); R: (->, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_57",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La función f(x) = log (x — 1), su asintota vertical es",
    "opciones": [
      "x",
      "x2 2x",
      "x? + 2x",
      "2x? 2x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_58",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El resultado de sumar f(x) = x?- 1 y g(x) = (x— 1)?es",
    "opciones": [
      "2 +x-14",
      "m2",
      "m/3",
      "m/4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_60",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para cambiar un foco fundido ubicado en la parte superior de un",
    "opciones": [
      "2v6",
      "30°",
      "45°",
      "60°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_62",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si el punto medio de un segmento de recta es (-1,6) y uno de sus",
    "opciones": [
      "55° y 35°",
      "90° y 70°",
      "120° y 10°",
      "40° y 50°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_63",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Uno de los ángulos de un triángulo mide 20°, la diferencial del doble",
    "opciones": [
      "55° y 35°",
      "90° y 70°",
      "120° y 10°",
      "40° y 50°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_64",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Razón entre cateto opuesto y cateto adyacente al anulo a es",
    "opciones": [
      "Csca",
      "Cosa",
      "Seca",
      "Tana"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_65",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Para determinar la longitud de los ángulos interiores de un triángulo",
    "opciones": [
      "Teorema de Pitágoras.",
      "Las razones trigonométricas.",
      "Ley de cosenos.",
      "Ley de senos."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_67",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia entre los puntos (3, 4) y (1, 6)?",
    "opciones": [
      "2/29",
      "V23",
      "242",
      "v2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_70",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es el lugar geométrico de los puntos del plano que equidistan de un",
    "opciones": [
      "Circunferencia.",
      "Parábola.",
      "Elipse.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_71",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación x?+ y?— 2x + 4y — 4 = 0 representa una",
    "opciones": [
      "Parábola vertical.",
      "Circunferencia con centro en el origen.",
      "Elipse horizontal.",
      "Circunferencia con centro fuera del origen."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_72",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la circunferencia",
    "opciones": [
      "+ y?-dx-2y-4=0",
      "+ y2+ 4x4 2y + 11=0",
      "+ y\"-4=0",
      "x24 y2+4x + 2y-4=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_73",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Para la ecuación x?+ y?— 2x - 6y - 15 = 0. Encuentra la ecuación de",
    "opciones": [
      "(«+ 1)2+ (y—3)2= 25",
      "(x-1)%+ (y -3)?=25",
      "(x + 1)2+ (y + 3)?= 25",
      "(x + 1)?- (y -3)?=25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_74",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Si la ecuación de una circunferencia es x?+ y”- 25 = 0, ¿Cuál es la",
    "opciones": [
      "4 y? 6x + 6y-7=0",
      "+ y?-3x+3y-7=0",
      "x24 y2+ 6x- 6y +7",
      "x°+ y? 6x + 6y -43=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_75",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son todos los puntos del plano que equidistan de un punto fijo",
    "opciones": [
      "Circunferencia.",
      "Parábola.",
      "Elipse.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_76",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las coordenadas del vértice de la parábola",
    "opciones": [
      "(3, -2)",
      "(-3, -2)",
      "(-2, 3)",
      "(2,3)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_77",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación ordinaria de la parábola con vértice en V = (-2, 3) y foco",
    "opciones": [
      "(y + 3? = 4(x-—2)",
      "(x + 3)?= 4(y — 2)",
      "(«- 3) =4(y +2)",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_78",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Alos puntos del plano cuya suma de distancias a dos puntos fijos",
    "opciones": [
      "Parábola.",
      "Elipse.",
      "Hipérbola.",
      "24 y? 1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_79",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la elipse con vértices en Vs = (0, 5) y V2= (0, -5) y",
    "opciones": [
      "X-2y=1",
      "2x2",
      "Loy",
      "Axé + By?+ Cz?+ Dxyz + Exy + Fxz=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_80",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones representa una hipérbola",
    "opciones": [
      "X-2y=1",
      "2x2",
      "Loy",
      "Axé + By?+ Cz?+ Dxyz + Exy + Fxz=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_81",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La excentricidad de una hipérbola es de e = 13/12 y uno de sus",
    "opciones": [
      "Ax?+ By?=0",
      "Ax? + Bx+C=0",
      "Ax?+ Bxy + Cy?+ Dx + Ey +F=0",
      "Toma el valor de 9/2 cuando x toma el valor de 2."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_82",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes ecuaciones representa la ecuación general",
    "opciones": [
      "Ax?+ By?=0",
      "Ax? + Bx+C=0",
      "Ax?+ Bxy + Cy?+ Dx + Ey +F=0",
      "Toma el valor de 9/2 cuando x toma el valor de 2."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_83",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si lim #(x+1) = 3, esto significa que la función",
    "opciones": [
      "Es siempre 9/2.",
      "Toma el valor de 2 cuando x toma el calor de 9/2.",
      "Es siempre 2.",
      "2/9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_84",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de lim 2x41)?",
    "opciones": [
      "3/2",
      "9/2",
      "1/2",
      "1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_85",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina el valor del siguiente limite lim",
    "opciones": [
      "2",
      "f(x) = 2xe*",
      "f(x) = (x +1/2)",
      "f(x) =xe*"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_88",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la derivada de f(x) = 2xe*? 0) 6x+ 240",
    "opciones": [
      "f(x) = 2e%(x? + 2x)",
      "ex +1) +0",
      "e +1+C",
      "Beas det sen 2x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_91",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la quinta derivada d la función f(x) = 5x°? C) 2 (ax + ay",
    "opciones": [
      "2540x se",
      "3 600x 101. Resolver ¿dx",
      "2s tpt",
      "20s ©) sina! * ©"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_92",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Un objeto se mueve de tal manera que la función de posición con A) -4ln|4x°+ 5] + O",
    "opciones": [
      "Os",
      "2x+1)+C aa",
      "x242x4+14+C )",
      "84146 D 16"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la expresión “+",
    "opciones": [
      "tanx",
      "cotx",
      "Derivada.",
      "Integral."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_96",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de /senx dx?",
    "opciones": [
      "tanx",
      "cotx",
      "Derivada.",
      "Integral."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_106",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la función inversa a la logarítmica?",
    "opciones": [
      "Exponencial.",
      "Tangente.",
      "544",
      "V256"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_108",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Define las coordenadas del centro y radio de la circunferencia",
    "opciones": [
      "3x(x — Y)(X— y)",
      "2Y(8x)(x — y)",
      "(3x- 2y)(x- y)",
      "(8x + 2y)(x-y)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el equivalente de 3x(x — y) + 2y(x — y)?",
    "opciones": [
      "3x(x — Y)(X— y)",
      "2Y(8x)(x — y)",
      "(3x- 2y)(x- y)",
      "(8x + 2y)(x-y)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_111",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Six = 3k y y =x, ¿Cuál es la gráfica de y?",
    "opciones": [
      "z",
      "Loy",
      "9Xy?—4",
      "27xy-8"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_114",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve 4(4 — x) = 4 + 2x",
    "opciones": [
      "8a, 200",
      "x=2/3",
      "x=-3/2",
      "x=-5/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_115",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Realizar la siguiente operación UU 20911002",
    "opciones": [
      "8a, 200",
      "x=2/3",
      "x=-3/2",
      "x=-5/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_118",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve > -=2-34",
    "opciones": [
      "x=-3/5",
      "324 = 4x— 3x",
      "324 =x! 3x",
      "324=x- x8"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_119",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "La diferencia entre el cuádruplo de un número y el triple del mismo",
    "opciones": [
      "324 = 4x4 - 3x?",
      "2-9",
      "x-9",
      "x-3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_120",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al multiplicar (VX — 3)(Vx + 3) obtenemos",
    "opciones": [
      "x-3",
      "xo - 2e-7x+0",
      "*-x2-7x+C",
      "x84 24 7x+ 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_121",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de {(3x? - 11x - 7)dx es",
    "opciones": [
      "*-",
      "x 42x 43x = 156",
      "x+1+2=156",
      "x+x2+ x= 156"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_122",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver ~-2= 3, x toma el valor de",
    "opciones": [
      "x + (x +1) +(x +2) = 156",
      "45x41",
      "x°-5x-1",
      "2x9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_123",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "La suma de tres números enteros consecutivos es 156, este",
    "opciones": [
      "x + (x +1) +(x +2) = 156",
      "45x41",
      "x°-5x-1",
      "2x9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_125",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Señala cuál es una simplificación de la expresión ¡/16x3y5",
    "opciones": [
      "2xy yy",
      "x>-2",
      "x>2",
      "x<2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_126",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución de 3x -9>-3es",
    "opciones": [
      "x<-2",
      "x24 y?= 25",
      "f(x) =x",
      "y2 = 8x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_127",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "De las siguientes funciones, ¿Cuál es una función?",
    "opciones": [
      "x2+ 4y?-20=0",
      "2 y?= 49",
      "@+y2=7",
      "x24 y?=49"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_128",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la circunferencia con centro en el origen y radio igual",
    "opciones": [
      "2 -y?=7",
      "L+x-1",
      "2x1",
      "15x\"+2x-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_129",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de resolver (x — 1) (x + 1) es",
    "opciones": [
      "60x? + 2x",
      "180x",
      "0",
      "Creciente en (0, «») y decreciente en (-=, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_130",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es la tercera derivada de 3x*+ x?- 2x?",
    "opciones": [
      "60x? + 2x",
      "180x",
      "0",
      "Creciente en (0, «») y decreciente en (-=, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_131",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina en qué intervalo la gráfica es creciente y decreciente.",
    "opciones": [
      "Creciente en (-~, 0) y decreciente en (0, ~)",
      "Creciente en (-5, 0) y decreciente en (0, 5)",
      "Creciente en (0, 5) y decreciente en (-5, 0)",
      "5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_133",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecua",
    "opciones": [
      "Ax? + Bxy + Cy?+ Dx + Ey +F=0",
      "Er y=r",
      "(x—hp?+ (y =k)2= 0",
      "Elipse."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_134",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones representa una función",
    "opciones": [
      "Ax? + Bxy + Cy?+ Dx + Ey +F=0",
      "Er y=r",
      "(x—hp?+ (y =k)2= 0",
      "Elipse."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_135",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación general de la circunferencia",
    "opciones": [
      "Ax? + Bxy + Cy?+ Dx + Ey +F=0",
      "Er y=r",
      "(x—hp?+ (y =k)2= 0",
      "Elipse."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_136",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de los puntos que equi",
    "opciones": [
      "Circunferencia.",
      "Parábola.",
      "Recta.",
      "y =-4x + 10"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_137",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si y = 0.25x + 0.269 ¿Cuál es la recta perpendicular?",
    "opciones": [
      "y =0.25x-10",
      "y=8x +1",
      "y =4x-1",
      "1/2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_140",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcula el lim x? 43x-8.",
    "opciones": [
      "2x",
      "Elipse.",
      "Parábola.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_141",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Calcular la derivada de 27",
    "opciones": [
      "2x",
      "Elipse.",
      "Parábola.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_142",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Qué tipo de cónica representa la siguiente ecuación",
    "opciones": [
      "Circunferencia.",
      "y=x?",
      "y=1",
      "y=x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_143",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución del sistema {",
    "opciones": [
      "y=x+1",
      "1/4",
      "2/9",
      "0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_144",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Línea que pasa por el origen",
    "opciones": [
      "y=x+1",
      "1/4",
      "2/9",
      "0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_148",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica Va1p9*",
    "opciones": [
      "b’a",
      "y-x+1=0",
      "3x-y+",
      "3x-y="
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_149",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Pasar a su forma general 3x = y - 3",
    "opciones": [
      "3x+y-3=0",
      "S22 4 Wow Ly",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_150",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Para qué valor de x la función f(x) = |x| no es derivable?",
    "opciones": [
      "h-2=1",
      "x-y?=1",
      "(9,1) U (1, ©)",
      "(00, 00)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_152",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación que corresponde a una elipse con eje mayor paralela a",
    "opciones": [
      "h-2=1",
      "x-y?=1",
      "(9,1) U (1, ©)",
      "(00, 00)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_153",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación que corresponde a una hipérbola equilátera con centro",
    "opciones": [
      "h-2=1",
      "x-y?=1",
      "(9,1) U (1, ©)",
      "(00, 00)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_154",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encuentra el domi.",
    "opciones": [
      "(o, -1)",
      "(+1, 00)",
      "Perpendiculares.",
      "Oblicuas."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_155",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cómo son entre si las siguientes dos rectas?",
    "opciones": [
      "Paralelas.",
      "Secantes.",
      "229% 46",
      "18x\" + 5x+C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_156",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de [(2x5-5)s dx es",
    "opciones": [
      "ate Yo",
      "Elipse.",
      "Circunferencia.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_157",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Qué cónica representa la ecuación 4x?+ 9y?+ 3x — 2y + 21 = 0?",
    "opciones": [
      "x=2",
      "x=-1/2",
      "(eo, ©)",
      "(1,9)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_158",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resolver} 4x — 3y +2z= 4",
    "opciones": [
      "x=2",
      "x=-1/2",
      "(eo, ©)",
      "(1,9)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_159",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Encuentra el dominio de log (x — 1).",
    "opciones": [
      "(1,)",
      "(1,1)",
      "y +1=3(x-2)",
      "64m"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_162",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación general de (x + 2)?+ (y - 3?= 9",
    "opciones": [
      "xe +y2=9",
      "x2+ y?+ 4x—6y +4=0",
      "16x —3x",
      "162 9x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_164",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcular lim x? + 3x — 4",
    "opciones": [
      "8",
      "Lineal.",
      "Cúbica.",
      "Cuadrática."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_165",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué tipo de función representa la siguiente gráfica?",
    "opciones": [
      "Constante.",
      "C=(2,7)",
      "Circunferencia.",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_166",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el centro de la hipérbola",
    "opciones": [
      "Elipse.",
      "Parábola.",
      "Hipérbola.",
      "1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_167",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es el lugar geométrico de todos los puntos del plano que se",
    "opciones": [
      "Elipse.",
      "Parábola.",
      "Hipérbola.",
      "1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_169",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la hipérbola con centro en el origen.",
    "opciones": [
      "X+2y+10=0",
      "-2y+10=0",
      "x*-y%+ 4y-10=0",
      "(-», 1/2) U (1/2, <>)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_170",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve |(x-2)? dx.",
    "opciones": [
      "(00, 00)",
      "(<00, 1) U (1, co)",
      "(-00, -2) U (2, co)",
      "40%"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_171",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de la función f(x) = “es",
    "opciones": [
      "(00, 00)",
      "(<00, 1) U (1, co)",
      "(-00, -2) U (2, co)",
      "40%"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_172",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es la segunda derivada de 2e*?",
    "opciones": [
      "8e*",
      "2e*",
      "202",
      "21"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_173",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Una escalera de 10m está recargada a 4m de distancia de un poste",
    "opciones": [
      "42",
      "2v21",
      "v21",
      "Dominio (-», »), Rango (0, >)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_174",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio y rango de f(x) = 2x?",
    "opciones": [
      "Dominio (0, -»), Rango (0, ~)",
      "Dominio (-~, »), Rango (-», +)",
      "Dominio (0, »), Rango (-», )",
      "24x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_175",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Resuelve (x) + g(x) si f(x) = (x + 1)y g(x) = 2-1",
    "opciones": [
      "2x? + 2x",
      "2x24 2x-1",
      "2-1",
      "b*-125"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_176",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve (b?- 5)?",
    "opciones": [
      "b'-125",
      "b*-15b' + 75b*- 125",
      "b+ 15b*+ 75b%+ 125",
      "242"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_177",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Qué número sumado a x?- 1 será (x?+ 1)?2",
    "opciones": [
      "Xx",
      "xt x42",
      "x+2",
      "1 y-1/2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_178",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué valores indeterminan la función 2",
    "opciones": [
      "0y-1",
      "2y1",
      "0y2",
      "x24 y2+ 8x-4y + 11=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_179",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la circunferencia con centro en (-4, 2) y= 9",
    "opciones": [
      "x24 y?+4x-8y+11=0",
      "x24 y?- 8x + 4y-11=0",
      "x°+y*- 8x-4y-11=0",
      "m=1yn=2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_180",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Dada la siguiente expresión: Ax” + Bxy + Cy\"+ Dx + Ey +F =0",
    "opciones": [
      "m=1yn=1",
      "m=2yn=2",
      "42) + by?",
      "40092 — bv?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_181",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de (2aY\"* + b*\")(2aY* — bY) es",
    "opciones": [
      "daar? 4b?",
      "Radio.",
      "Tangente.",
      "Secante."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_182",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Es la recta que corta en dos puntos de la circunferencia.",
    "opciones": [
      "Diámetro.",
      "Diámetro.",
      "Radio.",
      "Tangente."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_183",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es la cuerda de mayor longitud.",
    "opciones": [
      "Secante.",
      "Ax? + Bx2+ Cy +Dx+F=0",
      "Ax®+ Cy?+ Dx + Ey+F =0",
      "Ax + By?+ Cx + Dy+E=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_184",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación general de segundo grado que representa una curva",
    "opciones": [
      "Ax? + Bxy + Cy’+ Dx + Ey +F=0",
      "Elipse.",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_185",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación 4x?+ 4y?+ 20x — 16y + 37 = 0 representa una",
    "opciones": [
      "Hipérbola.",
      "Elipse.",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_186",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación 9x?+ 16y?- 18x + 64y + 37 = 0 representa una",
    "opciones": [
      "Hipérbola.",
      "Circunferencia.",
      "Elipse.",
      "Línea."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_187",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación x?- 3 = y - 1 representa una",
    "opciones": [
      "Parábola.",
      "Excentricidad.",
      "Eje menor.",
      "Lado recto."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_188",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Cuerda que pasa por el foco y es perpendicular al eje.",
    "opciones": [
      "Foco.",
      "Elipse.",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_189",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Lugar geométrico de los puntos del plano tales que la diferencia de",
    "opciones": [
      "Hipérbola.",
      "-2y-1",
      "1y2",
      "0y3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_190",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Los valores que satisfacen a la ecuación x?+ 3x + 2 = 0 son",
    "opciones": [
      "-1y0",
      "Elipse.",
      "Hipérbola.",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_191",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Cuando la excentricidad es igual a cero, se dice que la gráfica que",
    "opciones": [
      "Parábola.",
      "2log (2x + 1)",
      "log (2x? + 1)",
      "log 2x?+ logt"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_193",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué valor no pertenece al dominio de f(x) = log (x + 2)?",
    "opciones": [
      "2",
      "(xeR|x24)",
      "(xeR|x24yx% 2)",
      "(xeR|x20yx%4)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_195",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de f(x) = V/F es",
    "opciones": [
      "xs2",
      "V=(0,0) y F",
      "V=(0, -2) y F",
      "V=(0, 0) yF"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_196",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Encontrar el vértice y toco de la parábola x? = -8y",
    "opciones": [
      "V = (0, 0) y F = (0, 0)",
      "110°",
      "150°",
      "200°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_198",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "En términos de seno y coseno de un ángulo la tana es igual a",
    "opciones": [
      "8km",
      "25 km",
      "29km",
      "O"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_199",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para llegar a la casa de María desde el centro de la ciudad, se",
    "opciones": [
      "8km",
      "25 km",
      "29km",
      "O"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_201",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si D = (1, 2) y R = (2, 3, 4), ¿Cuál es el rango de la función f: D -> R",
    "opciones": [
      "(2)",
      "(2,3)",
      "(-4, 4)",
      "(2, 4)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_202",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encontrar las coordenadas del punto medio entre los puntos (0, 2)",
    "opciones": [
      "(1,2) y (2,2",
      "(2,1) y (2,2)",
      "(2,0) y (0.2",
      "(8x — 2y)(9x— 4y2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_203",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué puntos pertenecen a la recta x = 2?",
    "opciones": [
      "(1,2) y (2,2",
      "(2,1) y (2,2)",
      "(2,0) y (0.2",
      "(8x — 2y)(9x— 4y2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_204",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza 27x*- 8y*",
    "opciones": [
      "(3x'- 2y)(9x°— 6xy + 4y)",
      "(3x?- 2y)(9x* + 6x’y + 4y?)",
      "(8x — 2y)(3x + 2y)",
      "0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_207",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Desarrolla el binomio (2a?+ 3ab)?",
    "opciones": [
      "4a? + 6ab",
      "4a? + Gab + 6a%b?",
      "4a'+ 12a°b + 9a°b?",
      "x<1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_208",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve 6x +2<7x+1",
    "opciones": [
      "x<-1",
      "x>1",
      "x>-1",
      "13"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_209",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia del origen al punto (3, 2)?",
    "opciones": [
      "5",
      "vid",
      "cld",
      "dic"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_210",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hallar el valor de tana en el siguiente triangulo.",
    "opciones": [
      "dib",
      "bid",
      "(x-1)?+ (y - 2)?= 25",
      "(x-1)+(y-2)?=5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_211",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Encuentra la ecuación de la circunferencia con C = (1, 2) yr =5.",
    "opciones": [
      "(x + 1)2+ (y + 2)?=25",
      "(x+ 1)?+ (y + 2)=5",
      "Línea.",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_212",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación Ax?+ By?+ Dx + Ey + F = 0 cuando A=0 y B=0",
    "opciones": [
      "Parábola.",
      "Elipse.",
      "(3/4, 9/4)",
      "(1,4)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_213",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hallar las coordenadas del punto a una razón de 1/3 de P = (1,2) a",
    "opciones": [
      "(3, 3)",
      "(2/3, 1/3)",
      "y2+x-1=0",
      "3y-x+3=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_214",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Desarrolla a su forma general y?=",
    "opciones": [
      "3x-y*-1",
      "3y?-x+",
      "(1,0)",
      "(3, -4)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_216",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve (i’)(1 + i)",
    "opciones": [
      "1",
      "x°- 2x-8y+1=0",
      "y -2y-8x+1",
      "x24 2x + 8y-1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_217",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Encontrar el centro y radio de la ecuación x?+ y?+ 8x — 4y + 11 =0",
    "opciones": [
      "y?+2x + 8x1",
      "x=15",
      "x=13",
      "x=-13"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_218",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Hallar la ecuación de la parábola vertical con F = (1, 2) V = (1, 0).",
    "opciones": [
      "y?+2x + 8x1",
      "x=15",
      "x=13",
      "x=-13"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_220",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Calcular la derivada de f(x) =",
    "opciones": [
      "y =-3x-17",
      "3x-2",
      "7x-1",
      "1-7x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_221",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Hallar la ecuación de la recta paralela a y = -3x + 2 y que pasa por el",
    "opciones": [
      "y =-3x-17",
      "3x-2",
      "7x-1",
      "1-7x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_224",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la otra raíz de la ecuación x?+ ax + 10 = 0 si una de sus",
    "opciones": [
      "2",
      "y = 2x24 5x",
      "yao",
      "x24 y?+ 4x—6y +13 =0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_225",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes funciones representa una constante?",
    "opciones": [
      "x24 y2- 4x + 6y +13 =0",
      "x24 y?- 4x + 6y —1",
      "x24 y?+4x—6y +4=0",
      "x-9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_226",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de (x + 2)?+ (y—3)*= 0?",
    "opciones": [
      "x24 y2- 4x + 6y +13 =0",
      "x24 y?- 4x + 6y —1",
      "x24 y?+4x—6y +4=0",
      "x-9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_227",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "simplifica la siguiente expresión = 22",
    "opciones": [
      "x+9",
      "x-2",
      "x+2",
      "e+0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_228",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de (Tax, es",
    "opciones": [
      "kf(x) + C",
      "k + f(x) +C",
      "ki(xjax",
      "f(x) + C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_229",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcula |(x)dx.",
    "opciones": [
      "kf(x) + C",
      "k + f(x) +C",
      "ki(xjax",
      "f(x) + C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_233",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcular el valor de lim 2",
    "opciones": [
      "1",
      "1/3",
      "- 1/3",
      "(0, 2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_234",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve {PY 5°",
    "opciones": [
      "(2,0)",
      "x24 y2—10=0",
      "+ y?—5x + 2y=0",
      "x242y?-1=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_236",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente de la recta 6x + 3y — 5 = 0?",
    "opciones": [
      "o",
      "(2x + 3)(2x+15)",
      "(2x + 15)(2x - 1)",
      "(4x- 5)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_238",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza 4? — 4x - 15",
    "opciones": [
      "(2x- 5)(2x + 3)",
      "x24 y -4x-2y-4=0",
      "x24 y2+ 4x4 2y+4=0",
      "x24 y?-2x-y-9=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_239",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la cónica definida por la ecuación",
    "opciones": [
      "x24 y2+ 2x-y+9=0",
      "A=C",
      "A=0",
      "C=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_240",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "En la ecuación Ax?+ Cy?+ Dx + Ey + F = 0 ¿Cuál es la condición",
    "opciones": [
      "AFC",
      "y =sen(x)",
      "y =tan(x)",
      "y = Inx"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_241",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué función no tiene asíntota?",
    "opciones": [
      "y =Vx=1",
      "3y-1",
      "6y1",
      "6y-1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_242",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente y ordenada al origen de 3y = -6x + 3?",
    "opciones": [
      "-2y1",
      "20y 30",
      "10y 40",
      "30 y 30"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_243",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuál es el rango de la función y = 3sen(2x)?",
    "opciones": [
      "40 y 20",
      "E 00",
      "+ y*=25",
      "(#4, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_244",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un terreno de área máxima se quiere cercar, si se necesita 120",
    "opciones": [
      "40 y 20",
      "E 00",
      "+ y*=25",
      "(#4, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_245",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes ecuaciones representa una elipse?",
    "opciones": [
      "(+5, 0)",
      "(0, +4)",
      "(0, +5)",
      "1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_246",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "El eje mayor de una elipse coincide con el eje x, si uno de sus",
    "opciones": [
      "(+5, 0)",
      "(0, +4)",
      "(0, +5)",
      "1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matemticas1_249",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una tienda hace el descuento del 60% por mayoreo de artículos, si",
    "opciones": [
      "$240",
      "$350",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_11",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplificar la expresión .",
    "opciones": [
      "642",
      "(1521)5",
      "3x?",
      "Yxy"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_37",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Resuelve la ecuación 5(x + 2) + x = 2(x — 1).",
    "opciones": [
      "f(-2)",
      "2x - 5",
      "x+2",
      "7x-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_38",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de la incógnita en la ecuación —5(x — 1) = — 3(- 2 + 2x)?",
    "opciones": [
      "f(-2)",
      "2x - 5",
      "x+2",
      "7x-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_73",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina el dominio general de la función f(x) = 3 7",
    "opciones": [
      "decreciente y decreciente",
      "creciente y decreciente",
      "decreciente y creciente",
      "creciente y creciente"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_74",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina el dominio general de la función f(x)= >",
    "opciones": [
      "decreciente y decreciente",
      "creciente y decreciente",
      "decreciente y creciente",
      "creciente y creciente"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_76",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función f(x)= 4?",
    "opciones": [
      "decreciente y decreciente",
      "creciente y decreciente",
      "decreciente y creciente",
      "creciente y creciente"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_77",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Enla gráfica de la función f(x) = | x | + 2, ¿en qué intervalo la función es creciente y en qué intervalo la",
    "opciones": [
      "decreciente y decreciente",
      "creciente y decreciente",
      "decreciente y creciente",
      "creciente y creciente"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_78",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La función f(x) =x + 1, es y la función f(x) = 1—x, es en el intervalo (— 4, 5).",
    "opciones": [
      "decreciente y decreciente",
      "creciente y decreciente",
      "decreciente y creciente",
      "creciente y creciente"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_83",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina la suma de f(x) = x? — 1 con g(x)= (x -1)°.",
    "opciones": [
      "-6 B)-9 co D)6",
      "-2 B)-1 C)2 D)4",
      "x-1 x-3 x+2 x+1",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_84",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si f(x) = x -41 y g(x) = (x - 17°, entonces, f(x) — g(x), es:",
    "opciones": [
      "-6 B)-9 co D)6",
      "-2 B)-1 C)2 D)4",
      "x-1 x-3 x+2 x+1",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_85",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Considera f(x) = 3 y g(x) = — 3, suponiendo que existe otra función h(x) = f(x) + g(x), ¿cuál es el valor de",
    "opciones": [
      "-6 B)-9 co D)6",
      "-2 B)-1 C)2 D)4",
      "x-1 x-3 x+2 x+1",
      "Ninguna de las anteriores"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_139",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es el centro de la hipérbola cuya ecuación es x — 2p - lv + 7 =1?",
    "opciones": [
      "=F _,",
      "m=0,n=1 B)m=2,n=2 C)m=1,n=1 D)m=1,n=0",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_140",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hipérbola que pasa por los puntos (- 8, 0) y (8, 0)",
    "opciones": [
      "=F _,",
      "m=0,n=1 B)m=2,n=2 C)m=1,n=1 D)m=1,n=0",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_matematicas1_141",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación que corresponde a la gráfica es:",
    "opciones": [
      "=F _,",
      "m=0,n=1 B)m=2,n=2 C)m=1,n=1 D)m=1,n=0",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasmate_12",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Al derivar la función f(x) = 30%, se obtiene:",
    "opciones": [
      "e* Cc) eke ex",
      "f(x) =Lnx-e*, qe 2x",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasmate_13",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La derivada de la función f(x) = 2e*, es:",
    "opciones": [
      "e* Cc) eke ex",
      "f(x) =Lnx-e*, qe 2x",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasmate_14",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina la derivada de la función y = e.",
    "opciones": [
      "e* Cc) eke ex",
      "f(x) =Lnx-e*, qe 2x",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasmate_15",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la derivada de la función 1(x)= ?",
    "opciones": [
      "e* Cc) eke ex",
      "f(x) =Lnx-e*, qe 2x",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El valor numérico de la expresión cuando x = -2, es",
    "opciones": [
      "$1,100",
      "$1,200",
      "$1,400",
      "al + 6alb + 9a°b?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_2",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Rogelio recibe un salario semanal de $800 mas el 5% de comisiones",
    "opciones": [
      "$1,100",
      "$1,200",
      "$1,400",
      "al + 6alb + 9a°b?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_3",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado del binomio (2a + 3ab)? es",
    "opciones": [
      "4a + 12a%b + ab?",
      "4a? + 4a%b + ab?",
      "x+x= 108",
      "2x—x= 108"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_4",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Juan tiene el doble de la edad de María. La suma de las edades de",
    "opciones": [
      "2x+y=108",
      "x<0",
      "x<1",
      "x<2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución de la desigualdad 6x — 1 > 7x -2es",
    "opciones": [
      "x>-1",
      "(4, 00)",
      "(-00, 4)",
      "(200, 4]"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución del sistema {",
    "opciones": [
      "(-4, 00)",
      "f (x) = cot(x)",
      "f(x) = sec(x)",
      "f(x) = sen(x)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_7",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de la función f(x) = x= es",
    "opciones": [
      "(-4, 00)",
      "f (x) = cot(x)",
      "f(x) = sec(x)",
      "f(x) = sen(x)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_11",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguiente graficas corresponde a la función y = 3x?",
    "opciones": [
      "x=3,x=-2",
      "x=2,x=0",
      "(-13, +)",
      "[0, -3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_12",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "En la siguiente gráfica ¿Cuáles son los ceros de la ecuación de",
    "opciones": [
      "x=3,x=-2",
      "x=2,x=0",
      "(-13, +)",
      "[0, -3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_14",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia del origen al punto A (1,2)?",
    "opciones": [
      "D)",
      "vis",
      "V17",
      "18. La pendiente de la recta que pasa por los puntos (-4, 6) y (6, -8) es"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_15",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes gráficas representa una función creciente?",
    "opciones": [
      "D)",
      "vis",
      "V17",
      "18. La pendiente de la recta que pasa por los puntos (-4, 6) y (6, -8) es"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_21",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente de la recta que se muestra en la figura?",
    "opciones": [
      "2x+3y-3=0",
      "2x-3y+1=0",
      "(x-2%+(y-3)=5",
      "(x+ 2)? + (y + 3)?= 25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_22",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la recta y = 2x - 1?",
    "opciones": [
      "2x+3y-3=0",
      "2x-3y+1=0",
      "(x-2%+(y-3)=5",
      "(x+ 2)? + (y + 3)?= 25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_23",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la circunferencia de centro (2, 3) y radio 5 es",
    "opciones": [
      "ARA,",
      "x4 y?-4=0",
      "x24 y2+ 4x+2y-4=0",
      "(y-2)?=12(x-3)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_24",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la circunferencia (x - 2?+ (y - 1?=",
    "opciones": [
      "ARA,",
      "x4 y?-4=0",
      "x24 y2+ 4x+2y-4=0",
      "(y-2)?=12(x-3)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_25",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Escribe la ecuación de una parábola horizontal que tiene un vértice",
    "opciones": [
      "(x-3)",
      "Recta.",
      "Circunferencia.",
      "Ela"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_26",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación Ax?+ Bxy + Cy?+ Dx +Ey+F=0paraA=0yB=0,",
    "opciones": [
      "2(x? - 4)",
      "1/45",
      "-4",
      "-22/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_27",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al dividir É2* entr",
    "opciones": [
      "2(x? - 4)",
      "1/45",
      "-4",
      "-22/3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_29",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de 3?",
    "opciones": [
      "7/6",
      "-1/2",
      "6/7",
      "2a2 + 2a*"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_30",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la siguiente operación?  — 4(2 - 5)",
    "opciones": [
      "7/6",
      "-1/2",
      "6/7",
      "2a2 + 2a*"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_31",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver 3 — (6) - 3 ~ 22, el resultado es",
    "opciones": [
      "7/6",
      "-1/2",
      "6/7",
      "2a2 + 2a*"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_32",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica 7a*- 6a?- (8a?+ 9a*)",
    "opciones": [
      "42? 14a*",
      "2a?— 4a*",
      "x+y",
      "2x+3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_33",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En una división, el dividendo es x?- y” y el cociente es x?+ xy + y”,",
    "opciones": [
      "leary = 90",
      "2 +16",
      "3x(x + 2) + 2(3x + 8)",
      "2x?- 5x +16"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_34",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "un granjero tiene gallos y cabras, si la suma de sus cabezas es de 25",
    "opciones": [
      "leary = 90",
      "2 +16",
      "3x(x + 2) + 2(3x + 8)",
      "2x?- 5x +16"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_35",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué opción es equivalente a (3x + 8)(x + 2)?",
    "opciones": [
      "at + 4a%b + 4a°b?+ dab? + b*",
      "a'-4a'b + 4a°b?- 4ab'+ b*",
      "al- 4a%b + 6a%b?- dab? + b*",
      "a! - 4a%b - 4a?b? - dab? + b*"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_36",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al desarrollar (a — b)*, se obtiene",
    "opciones": [
      "at + 4a%b + 4a°b?+ dab? + b*",
      "a'-4a'b + 4a°b?- 4ab'+ b*",
      "al- 4a%b + 6a%b?- dab? + b*",
      "a! - 4a%b - 4a?b? - dab? + b*"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_37",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el modelo matemático que permite resolver el si",
    "opciones": [
      "x+2(x4 1) = 272",
      "x+ (x+ 1) =272",
      "2x + (x + 1) =272",
      "x + 2(x— 1) = 272"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_38",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El segundo término de (a + b)* es",
    "opciones": [
      "Ga'b",
      "15a'b?",
      "20a°b*",
      "6ab®"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_39",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La expresión 4a?- 9b”, se factoriza como",
    "opciones": [
      "(2a-3b)?",
      "(2a + 3b)",
      "(2x- 1)",
      "(2x + 1)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_40",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La factorización de 4x?- 1, es",
    "opciones": [
      "(4x- 1)(4x + 1)",
      "3xy2x",
      "6x/2x",
      "6/2%"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_41",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de 2/18x7, es",
    "opciones": [
      "ey!",
      "xy",
      "x=5/2",
      "x=-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_42",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de /x15y32 es",
    "opciones": [
      "ey!",
      "xy",
      "x=5/2",
      "x=-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_46",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Gráfica que representa el conjunto solución de (x— 9) 2x + 1, es",
    "opciones": [
      "——>",
      "_o * >",
      "b<aoa>b",
      "a<-boa<b"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_47",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes afirmaciones cumple que [al < b?",
    "opciones": [
      "a<b",
      "a<2",
      "a>-1",
      "a>-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_48",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Determina el intervalo solución de la desigualdad *+ 2<2+ 1.",
    "opciones": [
      "(2%)",
      ", Ya)",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_49",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El intervalo solución de 2 ra axe 2 x +h , es",
    "opciones": [
      "(2%)",
      ", Ya)",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_50",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Plantea matemáticamente el siguiente problema: “en un corral hay",
    "opciones": [
      "13 y -1/4",
      "ESA",
      "-1/3 y 1/4",
      "(00,00)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_51",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Las soluciones de la ecuación 12x?— 7x + 1=0, son",
    "opciones": [
      "13 y -1/4",
      "ESA",
      "-1/3 y 1/4",
      "(00,00)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_52",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Determina el dominio general de la función f(x)",
    "opciones": [
      "(-00, 1) U (%, 00)",
      "x27",
      "x<6",
      "x>-2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_53",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función f(x) = Vx — 3?",
    "opciones": [
      "(0, »)",
      "(- , 0)",
      "(0, -~)",
      "(xeR/x<1)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_54",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función f(x) = e*?",
    "opciones": [
      "(0, »)",
      "(- , 0)",
      "(0, -~)",
      "(xeR/x<1)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_55",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio de la función y = lo(x+1)?",
    "opciones": [
      "(xeR/xs-1)",
      "D: (0, »); R: (200, »)",
      "D: (0, z R: (0, 2",
      "D: (0, <=); R: (=, 0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_56",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio (D) y rango (R) de la función f(x) = 2* es",
    "opciones": [
      "y=",
      "x=-1",
      "x=0",
      "x@ + 2x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_57",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La función f(x) = log (x — 1), su asintota vertical es",
    "opciones": [
      "y=",
      "x=-1",
      "x=0",
      "x@ + 2x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_60",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para cambiar un foco fundido ubicado en la parte superior de un",
    "opciones": [
      "vi4",
      "2v6",
      "30°",
      "45°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_61",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Dado el siguiente triángulo ¿Cuánto vale el ángulo A?",
    "opciones": [
      "60°",
      "90°",
      "(",
      "(7, -5)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_62",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si el punto medio de un segmento de recta es (-1,6) y uno de sus",
    "opciones": [
      "55° y 35°",
      "120° y 10°",
      "40° y 50°",
      "Csca"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_63",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Uno de los ángulos de un triángulo mide 20°, la diferencial del doble",
    "opciones": [
      "55° y 35°",
      "120° y 10°",
      "40° y 50°",
      "Csca"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_64",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Razón entre cateto opuesto y cateto adyacente al anulo a es",
    "opciones": [
      "Cosa",
      "Seca",
      "Teorema de Pitágoras.",
      "Las razones tigonaméticas"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_67",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia entre los puntos (3, 4) y (1, 6)?",
    "opciones": [
      "a",
      "vatb",
      "3a+2",
      "Horizontales."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_68",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia entre los puntos (2a +1, b) y (a + 1, b)?",
    "opciones": [
      "a",
      "vatb",
      "3a+2",
      "Horizontales."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_69",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La característica común que comparten todas las rectas de la forma",
    "opciones": [
      "Verticales.",
      "Perpendiculares.",
      "Parábola.",
      "Elipse."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_70",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es el lugar geométrico de los puntos del plano que equidistan de un",
    "opciones": [
      "Hipérbola.",
      "Parábola vertical.",
      "Circunferencia con centro en el origen.",
      "+ y?+ 4x4 2y+11=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_72",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la circunferencia",
    "opciones": [
      "+ y\"-4=0",
      "x24 y2+4x + 2y-4=0",
      "(«+ ES",
      "(x + 1)2+ (y + 3)?=25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_73",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Para la ecuación x?+ y?— 2x - 6y - 15 = 0. Encuentra la ecuación de",
    "opciones": [
      "(x + 1)?- (y -3)?=25",
      "+ y? 6x + 6y-7=0",
      "2+y?-3x+3y-7=0",
      "x24 y2+ 6x- 6y +7"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_74",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Si la ecuación de una circunferencia es x?+ y”- 25 = 0, ¿Cuál es la",
    "opciones": [
      "x°+ y? 6x + 6y -43=0",
      "Circunferencia.",
      "Elipse.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_75",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son todos los puntos del plano que equidistan de un punto fijo",
    "opciones": [
      "(-3, -2)",
      "(-2, 3)",
      "(2,3)",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_76",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuáles son las coordenadas del vértice de la parábola",
    "opciones": [
      "(-3, -2)",
      "(-2, 3)",
      "(2,3)",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_77",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación ordinaria de la parábola con vértice en V = (-2, 3) y foco",
    "opciones": [
      "Parábola.",
      "Hipérbola.",
      "24 y? 1",
      "X-2y4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_78",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Alos puntos del plano cuya suma de distancias a dos puntos fijos",
    "opciones": [
      "Parábola.",
      "Hipérbola.",
      "24 y? 1",
      "X-2y4"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_79",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación de la elipse con vértices en Vi = (0, 5) y V2= (0, -5) y",
    "opciones": [
      "2x",
      "Axé + By?+ Cz?+ Dxyz + Exy + Fxz=0",
      "Ax?+ By?=0",
      "Ax?+Bx+C=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_80",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones representa una hipérbola",
    "opciones": [
      "2x",
      "Axé + By?+ Cz?+ Dxyz + Exy + Fxz=0",
      "Ax?+ By?=0",
      "Ax?+Bx+C=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_81",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La excentricidad de una hipérbola es de e = 13/12 y uno de sus",
    "opciones": [
      "Es siempre 9/2.",
      "Toma el valor de 2 cuando x toma el calor de 9/2.",
      "Es siempre 2.",
      "2/9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_82",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes ecuaciones representa la ecuación general",
    "opciones": [
      "Es siempre 9/2.",
      "Toma el valor de 2 cuando x toma el calor de 9/2.",
      "Es siempre 2.",
      "2/9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_84",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de lim 2x41)?",
    "opciones": [
      "3/2",
      "9/2",
      "1/2",
      "2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_92",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Un objeto se mueve de tal manera que la función de posición con A) -4ln|4x°+ 5] + O",
    "opciones": [
      "2",
      "2(x+1) +0 Dd",
      "É+2x+1+0",
      "x-24C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_95",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la integral 3Í (x + 1)? dx?",
    "opciones": [
      "senx",
      "tanx",
      "cotx",
      "Derivada."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_96",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de /senx dx?",
    "opciones": [
      "senx",
      "tanx",
      "cotx",
      "Derivada."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_105",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de la expresión “+",
    "opciones": [
      "senx",
      "tanx",
      "cotx",
      "Derivada."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_106",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es la función inversa a la logarítmica?",
    "opciones": [
      "Integral",
      "Tangente.",
      "544",
      "V256"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_108",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Define las coordenadas del centro y radio de la circunferencia",
    "opciones": [
      "2Y(8x)(x — y)",
      "(3x ~ 2y)(x—y)",
      "(Bx + 2y)(x-y)",
      "(+00, 5)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el equivalente de 3x(x — y) + 2y(x — y)?",
    "opciones": [
      "2Y(8x)(x — y)",
      "(3x ~ 2y)(x—y)",
      "(Bx + 2y)(x-y)",
      "(+00, 5)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_111",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Six =3k y y =x, ¿Cuál es la gráfica de y?",
    "opciones": [
      "S441",
      "9Xy?—4",
      "27x°y°",
      "5bc — 8ac + 2a\"b*c"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_112",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la hipérbola con centro en el origen y eje real paralelo",
    "opciones": [
      "S441",
      "9Xy?—4",
      "27x°y°",
      "5bc — 8ac + 2a\"b*c"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_113",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el resultado de (3xy - 2)°?",
    "opciones": [
      "-5bc + 8ac — 2a*b?c",
      "8a, 200",
      "x=-3/5",
      "324 = 4x— 3x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_119",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "La diferencia entre el cuádruplo de un número y el triple del mismo",
    "opciones": [
      "324 = x 3x",
      "324=x- x8",
      "324 = 4x4 - 3x?",
      "*-x2-7x+C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_120",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al multiplicar (VX — 3)(Vx + 3) obtenemos",
    "opciones": [
      "x84 24 7x+ 0",
      "*-",
      "x=1/3",
      "x=3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_121",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de {(3x? - 11x - 7)dx es",
    "opciones": [
      "x84 24 7x+ 0",
      "*-",
      "x=1/3",
      "x=3"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_122",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al resolver ~-2= 3, x toma el valor de",
    "opciones": [
      "x=-3",
      "x 42x 43x = 156",
      "x+1+2=156",
      "x+x2+ x= 156"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_123",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "La suma de tres números enteros consecutivos es 156, este",
    "opciones": [
      "x°-5x-1",
      "2x9",
      "2+5x-1",
      "Y2y7"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_125",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Señala cuál es una simplificación de la expresión ¡/16x3y5",
    "opciones": [
      "2xy",
      "2xy 3/y",
      "x>-2",
      "x<2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_126",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La solución de 3x —9>-3 es",
    "opciones": [
      "x<-2",
      "És y?=25",
      "y?=8x",
      "x2+ 4y?-20=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_127",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "De las siguientes funciones, ¿Cuál es una función?",
    "opciones": [
      "2 y?= 49",
      "é+y?=7",
      "*-y?=7",
      "x24"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_128",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la circunferencia con centro en el origen y radio igual",
    "opciones": [
      "2 y?= 49",
      "é+y?=7",
      "*-y?=7",
      "x24"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_129",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de resolver (x — 1) (x + 1) es",
    "opciones": [
      "2x-1",
      "15x\"+2x-2",
      "60x? + 2x",
      "0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_130",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es la tercera derivada de 3x°+ x?- 2x?",
    "opciones": [
      "Creciente en (-~, 0) y decreciente en (0, ~)",
      "Creciente en (-5, 0) y decreciente en (0, 5)",
      "Creciente en (0, 5) y decreciente en (-5, 0)",
      "5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_132",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar ¿5 se obtiene",
    "opciones": [
      "x?",
      "Ax + Bxy + Cy’+ Dx + Ey +F=0",
      "Er y=r",
      "(x—hp?+ (y =k)2= 0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_133",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecua",
    "opciones": [
      "clips:",
      "Parábola.",
      "Recta.",
      "y =0.25x 10"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_134",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes opciones representa una función",
    "opciones": [
      "clips:",
      "Parábola.",
      "Recta.",
      "y =0.25x 10"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_135",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación general de la circunferencia",
    "opciones": [
      "clips:",
      "Parábola.",
      "Recta.",
      "y =0.25x 10"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_136",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de los puntos que equi",
    "opciones": [
      "clips:",
      "Parábola.",
      "Recta.",
      "y =0.25x 10"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_137",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si y = 0.25x + 0.269 ¿Cuál es la recta perpendicular?",
    "opciones": [
      "y=8x +1",
      "y =4x-1",
      "150°",
      "200°"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_138",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el valor de sen 150°?",
    "opciones": [
      "90°",
      "-2x",
      "2x",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_139",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Convertir?” a grados.",
    "opciones": [
      "90°",
      "-2x",
      "2x",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_140",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcula el lim x? 43x-8.",
    "opciones": [
      "Hipérbola.",
      "Circunferencia.",
      "B)",
      "y=x+1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_141",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "Calcular la derivada de 27",
    "opciones": [
      "Hipérbola.",
      "Circunferencia.",
      "B)",
      "y=x+1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_142",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Qué tipo de cónica representa la siguiente ecuación",
    "opciones": [
      "Hipérbola.",
      "Circunferencia.",
      "B)",
      "y=x+1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_148",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Simplifica Va1p9*",
    "opciones": [
      "b’a",
      "+1=0",
      "3x-y=",
      "3x+y-3=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_151",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si la función f(x) = x°- 2x7 4x —3 es di",
    "opciones": [
      "x",
      "x=1",
      "x=0",
      "(-00, 00)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_152",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación que corresponde a una elipse con eje mayor paralela a",
    "opciones": [
      "(o, -1)",
      "(+1, 00)",
      "Perpendiculares.",
      "Oblicuas."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_153",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación que corresponde a una hipérbola equilátera con centro",
    "opciones": [
      "(o, -1)",
      "(+1, 00)",
      "Perpendiculares.",
      "Oblicuas."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_155",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cómo son entre si las siguientes dos rectas?",
    "opciones": [
      "Secantes.",
      "229% 46",
      "18x'\" + 5x + C",
      "ate Yo"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_156",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de [(2x5-5)s dx es",
    "opciones": [
      "Elipse.",
      "Parábola.",
      "Circunferencia.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_157",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Qué cónica representa la ecuación 4x?+ 9y?+ 3x — 2y + 21 = 0?",
    "opciones": [
      "Elipse.",
      "Parábola.",
      "Circunferencia.",
      "Hipérbola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_158",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resolver} 4x — 3y +2z= 4",
    "opciones": [
      "(~~, +)",
      "(1,2)",
      "y +1=3(x-2)",
      "64m"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_159",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Encuentra el dominio de log (x — 1).",
    "opciones": [
      "(~~, +)",
      "(1,2)",
      "y +1=3(x-2)",
      "64m"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_161",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Una escalera de 10m está recargada a 6m a pie de una ventana, ¿A",
    "opciones": [
      "x°-y?- 4x + 6y-4=0",
      "C+y2+x-y+4=0",
      "2+y=9",
      "16x —3x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_162",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación general de (x + 2)?+(y—3)?=9",
    "opciones": [
      "x°-y?- 4x + 6y-4=0",
      "C+y2+x-y+4=0",
      "2+y=9",
      "16x —3x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_164",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcular lim x? + 3x — 4",
    "opciones": [
      "Lineal.",
      "Cúbica.",
      "Cuadrática.",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_165",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué tipo de función representa la siguiente gráfica?",
    "opciones": [
      "Lineal.",
      "Cúbica.",
      "Cuadrática.",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_168",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente la recta de 4y = -x + 3?",
    "opciones": [
      "*-2y+10=0",
      "X+2y+10=0",
      "x*-y2+ 4y-10=0",
      "eat +0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_169",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la hipérbola con centro en el origen.",
    "opciones": [
      "*-2y+10=0",
      "X+2y+10=0",
      "x*-y2+ 4y-10=0",
      "eat +0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_170",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve |(x-2)? dx.",
    "opciones": [
      "(29, 1/2) U (1/2, »)",
      "(0, 00,",
      "(-00, 1) U (1, co)",
      "(-00, -2) U (2, co)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_171",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de la función f(x) = “es",
    "opciones": [
      "(29, 1/2) U (1/2, »)",
      "(0, 00,",
      "(-00, 1) U (1, co)",
      "(-00, -2) U (2, co)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_172",
    "materia": "matematicas",
    "tema": "limites_derivadas",
    "dificultad": 2,
    "pregunta": "¿Cuál es la segunda derivada de 2e*?",
    "opciones": [
      "40%",
      "8e*",
      "2e%",
      "21"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_173",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Una escalera de 10m está recargada a 4m de distancia de un poste",
    "opciones": [
      "42",
      "v21",
      "Dominio (-», »), Rango (0, ©",
      "Dominio (0, «»), Rango (0, «>"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_174",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Cuál es el dominio y rango de f(x) = 2x?",
    "opciones": [
      "Dominio (0, ~), Rango (-», ->)",
      "24x",
      "2x2 +2x-1",
      "2-1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_175",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Resuelve (x) + g(x) si f(x) = (x + 1)? y g(x) = 2-1",
    "opciones": [
      "b*-125",
      "b\"-125",
      "b?- 15b* + 75b*- 125",
      "b*+ 15b*+ 75b%+ 125"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_176",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve (b?- 5)?",
    "opciones": [
      "b*-125",
      "b\"-125",
      "b?- 15b* + 75b*- 125",
      "b*+ 15b*+ 75b%+ 125"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_177",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "¿Qué número sumado a x?- 1 será (x?+ 1)?2",
    "opciones": [
      "242",
      "x4 x?",
      "x+2",
      "x24 y2+ 4x-8y+11=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_178",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué valores indeterminan la función 2",
    "opciones": [
      "x24 y?- 8x + 4y -11=0",
      "x°+y*- 8x-4y-11=0",
      "m=2yn=1",
      "m=1yn=1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_179",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Ecuación de la circunferencia con centro en (-4, 2) y= 9",
    "opciones": [
      "x24 y?- 8x + 4y -11=0",
      "x°+y*- 8x-4y-11=0",
      "m=2yn=1",
      "m=1yn=1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_180",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Dada la siguiente expresión: Ax” + Bxy + Cy\"+ Dx + Ey +F =0",
    "opciones": [
      "m=2yn=2",
      "42) + by",
      "2aY=2- b?2",
      "40224 be?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_181",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de (2aY\"* + b*\")(2aY* — bY) es",
    "opciones": [
      "Radio.",
      "Tangente.",
      "Diámetro.",
      "Secante."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_182",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Es la recta que corta en dos puntos de la circunferencia.",
    "opciones": [
      "Radio.",
      "Tangente.",
      "Diámetro.",
      "Secante."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_183",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Es la cuerda de mayor longitud.",
    "opciones": [
      "Ax? + Bx2+ Cy +Dx+F=0",
      "Ax®+ Cy?+ Dx + Ey+F =0",
      "a e E",
      "clips:"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_184",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación general de segundo grado que representa una curva",
    "opciones": [
      "Ax? + Bx2+ Cy +Dx+F=0",
      "Ax®+ Cy?+ Dx + Ey+F =0",
      "a e E",
      "clips:"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_185",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación 4x?+ 4y?+ 20x — 16y + 37 = 0 representa una",
    "opciones": [
      "Parábola.",
      "Hipérbola.",
      "Circunferencia.",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_186",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación 9x?+ 16y?- 18x + 64y + 37 = 0 representa una",
    "opciones": [
      "Hipérbola.",
      "Circunferencia.",
      "Elipse.",
      "Excentricidad."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_187",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación x?- 3 = y - 1 representa una",
    "opciones": [
      "Eje menor.",
      "Foco.",
      "Elipse.",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_188",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Cuerda que pasa por el foco y es perpendicular al eje.",
    "opciones": [
      "Eje menor.",
      "Foco.",
      "Elipse.",
      "Circunferencia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_189",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Lugar geométrico de los puntos del plano tales que la diferencia de",
    "opciones": [
      "Parábola.",
      "Elipse.",
      "Hpómola",
      "Parábola."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_190",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Los valores que satisfacen a la ecuación x?+ 3x + 2 = 0 son",
    "opciones": [
      "log (2x + 1)",
      "log 2x?+ logt",
      "log x2",
      "2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_191",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Cuando la excentricidad es igual a cero, se dice que la gráfica que",
    "opciones": [
      "log (2x + 1)",
      "log 2x?+ logt",
      "log x2",
      "2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_192",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Desarrolla: log (2x + 1)?",
    "opciones": [
      "log (2x + 1)",
      "log 2x?+ logt",
      "log x2",
      "2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_194",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de f(x) = 2, es",
    "opciones": [
      "(xeR|xs0yx%*4)",
      "x22",
      "-2sxs2",
      "xs2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_195",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "El dominio de f(x) = vx7—4 es",
    "opciones": [
      "150°",
      "200°",
      "180°",
      "Le"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_196",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "Encontrar el vértice y toco de la parábola x? = -8y",
    "opciones": [
      "150°",
      "200°",
      "180°",
      "Le"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_197",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿A cuántos grados equivalen 1712",
    "opciones": [
      "150°",
      "200°",
      "180°",
      "Le"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_198",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "En términos de seno y coseno de un ángulo la tana es igual a",
    "opciones": [
      "me",
      "8km",
      "29km",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_201",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Si D = (1, 2) y R = (2, 3, 4), ¿Cuál es el rango de la función f: D -> R",
    "opciones": [
      "(0, 4)",
      "(4,4)",
      "(2,4)",
      "(1,2) y (2,2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_202",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Encontrar las coordenadas del punto medio entre los puntos (0, 2)",
    "opciones": [
      "(0, 4)",
      "(4,4)",
      "(2,4)",
      "(1,2) y (2,2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_203",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Qué puntos pertenecen a la recta x = 2?",
    "opciones": [
      "(21) y (2,2)",
      "(1,1) y (2,2)",
      "(2,0) y (0,2)",
      "(8x — 2y)(9x— 4y2)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_206",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hallar el valor de x en el siguiente triangulo.",
    "opciones": [
      "9",
      "4a! + 9a%b?",
      "4a? + 6ab",
      "4a? + 6ab + 6a’"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_207",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Desarrolla el binomio (2a?+ 3ab)?",
    "opciones": [
      "x<1",
      "x<-1",
      "x>-1",
      "cd"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_208",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Resuelve 6x + 2<7x +1",
    "opciones": [
      "x<1",
      "x<-1",
      "x>-1",
      "cd"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_209",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la distancia del origen al punto (3, 2)?",
    "opciones": [
      "dic",
      "dib",
      "(«1 + (y-2)=5",
      "(«+ 124 (y + 2)?=25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_210",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "Hallar el valor de tana en el siguiente triángulo.",
    "opciones": [
      "dic",
      "dib",
      "(«1 + (y-2)=5",
      "(«+ 124 (y + 2)?=25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_211",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Encuentra la ecuación de la circunferencia con C = (1, 2) yr =5.",
    "opciones": [
      "(x4 1) (y +2)2=5",
      "Circunferencia.",
      "Parábola.",
      "Elipse."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_212",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación Ax?+ By?+ Dx + Ey + F = 0 cuando A=0 y B=0",
    "opciones": [
      "(1,4)",
      "(3, 3)",
      "(2/3, 1/3)",
      "y?+x—"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_213",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hallar las coordenadas del punto a una razón de 1/3 de P = (1, 2) a",
    "opciones": [
      "(1,4)",
      "(3, 3)",
      "(2/3, 1/3)",
      "y?+x—"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_215",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si el punto P = (-1, 2) esta a razón de Ye del punto Q = (-3, 5), hallar",
    "opciones": [
      "C=(-4,2)r=9",
      "C=(4,-2)r=9",
      ";",
      "x24 2x+8y-1=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_217",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Encontrar el centro y radio de la ecuación x? + y?+ 8x — 4y + 11=0",
    "opciones": [
      "C=(-4,2)r=9",
      "C=(4,-2)r=9",
      ";",
      "x24 2x+8y-1=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_218",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Hallar la ecuación de la parábola vertical con F = (1, 2) V = (1, 0).",
    "opciones": [
      "y?+2x+8x-1=0",
      "x=-13",
      "x= 1/13",
      "y =4x-17"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_220",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Calcular la derivada de f(x) =",
    "opciones": [
      "y =3x +17",
      "y =-3x-17",
      "3x-2",
      "1-7x"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_224",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la otra raíz de la ecuación x? + ax + 10 = 0 si una de sus",
    "opciones": [
      "y=x",
      "y = 2x24 5x",
      "y=e*",
      "x°+y?- 4x + 6y+13=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_225",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes funciones representa una constante?",
    "opciones": [
      "y=x",
      "y = 2x24 5x",
      "y=e*",
      "x°+y?- 4x + 6y+13=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_226",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de (x + 2)? + (y — 3)= 0?",
    "opciones": [
      "x24 y?- 4x + 6y- 13 =0",
      "x24 y?+4x—6y +4=0",
      "x-9",
      "x+9"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_227",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "simplifica la siguiente expresión = 22",
    "opciones": [
      "x-2",
      "e+C",
      "kf(x) + C",
      "k + f(x) + C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_228",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "El resultado de (Tax, es",
    "opciones": [
      "f(x) + C",
      "Injal + C",
      "Injax| + C",
      "tania + x] + C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_229",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "Calcula Jkf(x)dx.",
    "opciones": [
      "f(x) + C",
      "Injal + C",
      "Injax| + C",
      "tania + x] + C"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_233",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Calcular el valor de lim 2",
    "opciones": [
      "1/3",
      "é+y-10=0",
      "+ y?—5x + 2y=0",
      "x242y?-1=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_236",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente de la recta 6x + 3y — 5 = 0?",
    "opciones": [
      "1",
      "(2x + 3)(2x+15)",
      "(2x + 15)(2x - 1)",
      "(4x- 5)?"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_238",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza 4 - 4x -15",
    "opciones": [
      "+ y 4x-2y-4=0",
      "+ y?+ 4x4 2y+4=0",
      "x24 y?-2x-y-9=0",
      "x24 y2+ 2x-y+9=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_239",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál es la ecuación general de la cónica definida por la ecuación",
    "opciones": [
      "+ y 4x-2y-4=0",
      "+ y?+ 4x4 2y+4=0",
      "x24 y?-2x-y-9=0",
      "x24 y2+ 2x-y+9=0"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_240",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "En la ecuación Ax?+ Cy?+ Dx + Ey + F = 0 ¿Cuál es la condición",
    "opciones": [
      "A=0",
      "C=0",
      "AFC",
      "3y-1"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_241",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "¿Qué función no tiene asíntota?",
    "opciones": [
      "6y1",
      "6y-1",
      "-2y1",
      "20y 30"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_242",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "¿Cuál es la pendiente y ordenada al origen de 3y = -6x + 3?",
    "opciones": [
      "6y1",
      "6y-1",
      "-2y1",
      "20y 30"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_243",
    "materia": "matematicas",
    "tema": "trigonometria",
    "dificultad": 2,
    "pregunta": "¿Cuál es el rango de la función y = 3sen(2x)?",
    "opciones": [
      "10y 40",
      "40 y 20",
      "E 00",
      "+ y*=25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_244",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un terreno de área máxima se quiere cercar, si se necesita 120",
    "opciones": [
      "10y 40",
      "40 y 20",
      "E 00",
      "+ y*=25"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_245",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "¿Cuál de las siguientes ecuaciones representa una elipse?",
    "opciones": [
      "(24,0)",
      "(+5, 0)",
      "(0, +4)",
      "(0, +5)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_246",
    "materia": "matematicas",
    "tema": "geometria_analitica",
    "dificultad": 2,
    "pregunta": "El eje mayor de una elipse coincide con el eje x, si uno de sus",
    "opciones": [
      "(24,0)",
      "(+5, 0)",
      "(0, +4)",
      "(0, +5)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_preguntasdema_248",
    "materia": "matematicas",
    "tema": "probabilidad",
    "dificultad": 2,
    "pregunta": "Una alcancía contiene 110 monedas de $1, $5 y $10. Si hay 20",
    "opciones": [
      "50",
      "$90",
      "$100",
      "$240"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Entre las décadas de los ochenta y los",
    "opciones": [
      "complementación.",
      "integración.",
      "continuación.",
      "oposición."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_6",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "En la década de los noventa",
    "opciones": [
      "son importantes los programas de",
      "se ha dado un progreso espectacular.",
      "se ha dado el retorno hacia la",
      "han disminuido las desigualdades"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_7",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La comparación entre los noventa y el",
    "opciones": [
      "contienen la evolución del progreso.",
      "auguran el germen de un espacio",
      "cumplen la ratificación del milenio.",
      "repiten los fragmentos más"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_10",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al ser capturado el niño los demonios 14. Elige el párrafo con la mejor",
    "opciones": [
      "deben acabarse entre ellos mismos. A) En este orden, la posibilidad y el",
      "quieren dominar a los pobladores. .",
      "no hay un orden superior que los conocimiento, para iniciar, así una",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_15",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "De acuerdo con la relación de",
    "opciones": [
      "Los checoslovacos combatían en las",
      "Un sinnúmero de feligreses acudió a BIEN - VALOR",
      "Gula — pecado",
      "Verdad — escándalo"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_13",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Existe un error de concordancia en:",
    "opciones": [
      "Los checoslovacos combatían en las",
      "Un sinnúmero de feligreses acudió a BIEN - VALOR",
      "Gula — pecado",
      "Verdad — escándalo"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_19",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al simplificar la expresión algebraica 3 =17",
    "opciones": [
      "(2, 3, 5)",
      "6x + 3 B) (2,4, 5)",
      "4x + 3 C) (2, 4, 5)",
      "10x + 3 D) (2, 3, -5)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_24",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "SiS=(1,2) y Q=(2, 3, 4), ¿cuál es el",
    "opciones": [
      "{2, 3, 4}",
      "(n? + 3)(n°- 6)",
      "(n° + 3)(n* + 6)",
      "1y2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_20",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Factoriza la siguiente expresión por f(x) =x +1?",
    "opciones": [
      "{2, 3, 4}",
      "(n? + 3)(n°- 6)",
      "(n° + 3)(n* + 6)",
      "1y2"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_25",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es la longitud del lado q en el",
    "opciones": [
      "2y3",
      "-1y-2",
      "-3 y2",
      "-6"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_21",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Los valores que satisfacen la",
    "opciones": [
      "2y3",
      "-1y-2",
      "-3 y2",
      "-6"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_22",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Si resuelves la desigualdad B)6",
    "opciones": [
      "x<-5 D)7",
      "x25",
      "x<-5",
      "x=5"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_30",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación ordinaria de la mediana",
    "opciones": [
      "y =-2x+3",
      "y =-x+3",
      "y=—",
      "y=-3x+6"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_31",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación ordinaria de la mediatriz",
    "opciones": [
      "y=-3x+7",
      "y =-2x+5",
      "y =-2x+6",
      "(8,0)"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_44",
    "materia": "matematicas",
    "tema": "funciones",
    "dificultad": 2,
    "pregunta": "La función f(x) = x? -3x? +1 tiene un",
    "opciones": [
      "20 44x43) 4c",
      "= pete) +0",
      "Ferree) +0",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_39",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "2 m/s alcance su punto más alto.",
    "opciones": [
      "3",
      "300",
      "1,500",
      "4,500"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_0",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "50 1.00 1.50 2.00",
    "opciones": [
      "1.6 kg",
      "2.5 kg",
      "3.2 kg",
      "4.0 kg"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_51",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "La ecuación que permite calcular la",
    "opciones": [
      "Ec=mv",
      "Ec=2mv?",
      "50,400 J, 50,400 J",
      "420 J, 420 J"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_54",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Para convertir un valor de temperatura",
    "opciones": [
      "1.8(T+273)",
      "capacidad térmica específica.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_56",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "La interferencia de dos ondas puede",
    "opciones": [
      "polarización.",
      "difracción.",
      "energía.",
      "longitud de onda."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_57",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Un aislante eléctrico es un material",
    "opciones": [
      "no contiene ninguna corriente",
      "hace difícil el flujo de corriente",
      "tiene mas electrones que protones en",
      "Ninguna de las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_58",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Aunaresistencia eléctrica R se aplica",
    "opciones": [
      "reduce a la mitad.",
      "mantiene sin cambio.",
      "incrementa al doble.",
      "incrementa al cuádruple."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_59",
    "materia": "matematicas",
    "tema": "aritmetica",
    "dificultad": 2,
    "pregunta": "El indice de refracción del cuarzo es",
    "opciones": [
      "194,300 Km/s",
      "19,430 Km/s",
      "1,943 Km/s",
      "194 Km/s"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_1",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "544. ¿Con qué velocidad se propaga",
    "opciones": [
      "194,300 Km/s",
      "19,430 Km/s",
      "1,943 Km/s",
      "194 Km/s"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_60",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿En qué áreas recibió Madame Curie",
    "opciones": [
      "Física y Biología.",
      "Medicina y Química.",
      "Química y Biología.",
      "Física y Química."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_61",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál es el enunciado verdadero?",
    "opciones": [
      "El aire es un compuesto y el cloruro",
      "El cloruro de sodio es un elemento y",
      "El aire es una mezcla y la plata es un",
      "El cloruro de sodio es un compuesto y"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_66",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las formulas del monóxido de",
    "opciones": [
      "CO, MnOH = — Al; (SOs)a",
      "CO - Mg(OH), — Al, (SOs).",
      "CO; — Mn(OH)p — AISO,",
      "CO — Mg(OH)2 — Al (SOx)a"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_77",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "¿Cuál o cuáles de las siguientes son",
    "opciones": [
      "B)",
      "Replicación.",
      "Transcripción.",
      "Quimiosintética."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_83",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "HISTORIA UNIVERSAL",
    "opciones": [
      "Inglaterra y Francia.",
      "Rusia y Turquía.",
      "Alemania e Italia.",
      "Alemania y Rusia."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_89",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Al desembarco de armamento en",
    "opciones": [
      "Guerra de las galaxias.",
      "la presencia militar de los Estados",
      "el imperialismo británico.",
      "el autoritarismo comunista soviético."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_92",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Hecho que se consideró como el",
    "opciones": [
      "La Guerra Fría.",
      "La desaparición del muro de Berlín.",
      "La Guerra de los Balcanes.",
      "Constituir una junta gubernativa que"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_109",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Escritor representante del Realismo",
    "opciones": [
      "Ramón del Valle Inclán.",
      "la divina comedia.",
      "grandes comedias.",
      "novelas ejemplares."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_117",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Las corrientes frias se relacionan con",
    "opciones": [
      "camarón y jaiba.",
      "jaiba y salmón.",
      "salmón y bacalao.",
      "ostión y camarón."
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_examen2010a1_120",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "Son algunas caracteristicas que",
    "opciones": [
      "economia centralizada.",
      "Guerrero, Oaxaca y Chiapas.",
      "Ninguna de las anteriores",
      "Todas las anteriores"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_5",
    "materia": "matematicas",
    "tema": "general",
    "dificultad": 2,
    "pregunta": "\"i MY. Y 40. Cuando la balanza comercial de pagos",
    "opciones": [
      "Illy IV",
      "lyll .",
      "Illy V MATEMATICAS",
      "ly V"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  },
  {
    "id": "mat_ocr_guiaarea3_54",
    "materia": "matematicas",
    "tema": "algebra",
    "dificultad": 2,
    "pregunta": "Determina el dominio de la función 58. Elige la ecuación que describe la",
    "opciones": [
      "(2, 00) y",
      "[2, 00)",
      "(-00, 2)",
      "(—©, 2]"
    ],
    "correcta": 0,
    "explicacion": "",
    "explicacion_correcta": "",
    "analisis_distractores": ""
  }
];
