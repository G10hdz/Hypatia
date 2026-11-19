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
  // system-design: piloto docs/briefs/bank-system-design.md
  {
    "id": "sd-002",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un servidor con una sola cola trabaja al 50% de utilizacion y responde en 40 ms. El trafico sube un 80% y la utilizacion pasa al 90%, sin cambiar el tiempo de servicio. Que es lo mas probable que pase con la latencia?",
    "options": [
      "Se mantiene en 40 ms, porque el tiempo de servicio no cambio",
      "Sube cerca de 1.8 veces, en proporcion al trafico",
      "Baja, porque mas trafico permite amortizar mejor el servidor",
      "Sube cerca de 5 veces, porque la espera crece como rho/(1-rho)"
    ],
    "ok": 3,
    "why": "Con una cola, la latencia es servicio mas espera: a 50% de utilizacion la espera es 1 vez el servicio y a 90% es 9 veces, asi que el total pasa de 2 a 10 veces el servicio (5x), aunque el trafico solo suba 1.8x. El error tipico es suponer proporcionalidad con el trafico; el tiempo de servicio no cambia, pero la cola si.",
    "ref": {
      "book": "ddia",
      "where": "cap. 1"
    }
  },
  {
    "id": "sd-004",
    "track": "system-design",
    "status": "borrador",
    "prompt": "El 98% de las lecturas acierta en cache y responde en 10 ms. El 2% restante falla, va a la base y tarda 2 segundos. Un usuario se queja de que 'a veces' la app tarda 2 segundos. Que explica mejor la latencia p99?",
    "options": [
      "La p99 ronda los 2 s, porque el 2% de fallos cubre el percentil 99 y domina la cola",
      "La p99 ronda los 10 ms, porque el 98% de las lecturas es rapida",
      "La p99 es el promedio entre 10 ms y 2 s, cerca de 1 s",
      "La p99 no se puede estimar sin conocer la desviacion estandar"
    ],
    "ok": 0,
    "why": "Con 2% de fallos, el 1% mas lento cae dentro de esos fallos; la p99 deja al 99% por debajo y por eso ronda los 2 s. El error tipico es mirar el 98% de aciertos y concluir que la cola es de 10 ms; el promedio (10 ms x 0.98 + 2,000 ms x 0.02 = 49.8 ms) tampoco describe la p99.",
    "ref": {
      "book": "ddia",
      "where": "cap. 1"
    }
  },
  {
    "id": "sd-005",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Una clave muy consultada expira cada 60 segundos. Al expirar, 5,000 solicitudes simultaneas no la encuentran y todas van a la base; la base se satura. Cual es la correccion mas directa?",
    "options": [
      "Bajar el TTL a 10 segundos para que el dato sea mas fresco",
      "Coalescer los fallos: solo una solicitud recalcula la clave y las demas esperan o reciben el valor viejo",
      "Aumentar el tamano de la cache para guardar mas claves",
      "Agregar replicas de la base para absorber el pico"
    ],
    "ok": 1,
    "why": "Es una estampida (dogpile): el problema no es el tamano ni la frescura, sino miles de fallos simultaneos por la misma clave. La coalescencia o single-flight deja un solo recalculado y el resto espera o usa el valor anterior. Bajar el TTL hace que la estampida ocurra mas seguido, y mas replicas o mas cache no eliminan la sincronizacion del fallo.",
    "ref": {
      "book": "release-it",
      "where": "cap. 4"
    }
  },
  {
    "id": "sd-006",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un usuario edita su perfil y la escritura actualiza la base. La vista de perfil se lee de una cache con TTL de 60 segundos y no se invalida al escribir. El usuario recarga y sigue viendo el nombre viejo. Que cambia el comportamiento de forma mas directa?",
    "options": [
      "Reducir el TTL a 5 segundos",
      "Aumentar el TTL para que el dato viejo sea mas consistente",
      "Desactivar la cache por completo para todos los usuarios",
      "Invalidar o actualizar la clave de cache en la misma escritura, o usar una clave versionada"
    ],
    "ok": 3,
    "why": "El TTL solo acota la ventana de staleness: con 5 segundos el usuario puede seguir viendo el valor viejo. Invalidar en la escritura, o escribir una clave nueva versionada, elimina esa lectura vieja para el usuario. Desactivar la cache castiga a todos y no es necesario.",
    "ref": {
      "book": "ddia",
      "where": "cap. 11"
    }
  },
  {
    "id": "sd-007",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Diez servidores identicos reciben solicitudes con duraciones muy dispares: algunas tardan 5 ms y otras 2 s. El balanceador reparte en round robin estricto y algunas solicitudes esperan detras de las lentas. Que estrategia suele mejorar mas la latencia sin cambiar los servidores?",
    "options": [
      "Mandar cada solicitud al servidor con menos solicitudes en curso (least connections)",
      "Round robin con peso igual, porque los servidores son identicos",
      "Mandar todas las solicitudes al servidor mas rapido hasta que se sature",
      "Aumentar el timeout del cliente para que las solicitudes lentas terminen"
    ],
    "ok": 0,
    "why": "Round robin reparte por turnos, no por carga: una solicitud corta puede quedar detras de una larga. Least connections mira cuantas solicitudes tiene abiertas cada servidor y manda la nueva al menos ocupado, asi las lentas no acumulan cola. Mandar todo al mas rapido lo satura, y subir el timeout solo hace esperar mas.",
    "ref": {
      "book": "samwho-lb",
      "where": "articulo"
    }
  },
  {
    "id": "sd-008",
    "track": "system-design",
    "status": "borrador",
    "prompt": "El cliente llama al servicio A con timeout de 2 s. A llama a B con timeout de 5 s. B se degrada y tarda 4 s. El cliente ya se fue, pero A y B siguen trabajando y reciben reintentos. Que correccion ataca la causa?",
    "options": [
      "Subir el timeout del cliente a 6 s para que espere a A",
      "Propagar un deadline que disminuya en cada salto, de modo que B tenga menos de 2 s",
      "Poner el timeout de B mayor que el de A para dar margen",
      "Quitar los timeouts y usar solo reintentos"
    ],
    "ok": 1,
    "why": "El deadline debe ser una sola fecha limite que se hereda y se acorta al bajar por la cadena; si el cliente espera 2 s, B no puede tener 5 s. Con timeouts independientes, A y B hacen trabajo que ya nadie espera y los reintentos amplifican la carga. Quitar los timeouts deja llamadas sin limite, y subir el del cliente solo alarga la espera.",
    "ref": {
      "book": "sre-book",
      "where": "cap. 22"
    }
  },
  {
    "id": "sd-009",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un servicio downstream falla de forma intermitente. Todos los clientes reintentan 3 veces sin espera y sin jitter. El trafico se multiplica y el downstream termina de caer. Que combinacion es la mas adecuada?",
    "options": [
      "Reintentar mas veces y en paralelo para ganar latencia",
      "Reintentar solo las operaciones que fallan por timeout, sin limite",
      "Subir el timeout y quitar el backoff para no acumular esperas",
      "Backoff exponencial con jitter y un limite de reintentos o presupuesto de reintentos"
    ],
    "ok": 3,
    "why": "Reintentar sin espera ni jitter sincroniza a todos los clientes y multiplica la carga justo cuando el downstream esta fragil; con 3 reintentos cada solicitud puede generar hasta 4 intentos. El backoff separa los intentos, el jitter rompe la sincronizacion y el limite evita amplificar el fallo. Reintentar en paralelo o sin limite empeora la saturacion, y quitar el backoff concentra los intentos.",
    "ref": {
      "book": "sre-book",
      "where": "cap. 22"
    }
  },
  {
    "id": "sd-010",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un servicio depende de una API externa que esta caida. El circuit breaker esta abierto. Que debe hacer una llamada nueva mientras siga abierto?",
    "options": [
      "Intentar la llamada igual, pero con un timeout mas largo",
      "Reintentar la llamada 3 veces antes de fallar",
      "Fallar rapido sin llamar a la API y, tras un periodo, dejar pasar una llamada de prueba en half-open",
      "Quedarse esperando hasta que la API responda"
    ],
    "ok": 2,
    "why": "Abierto significa que el circuito no deja pasar trafico: falla rapido para no gastar tiempo ni recursos en un downstream que ya sabemos que falla. El estado half-open deja pasar una prueba controlada para detectar recuperacion. Alargar el timeout solo mantiene la espera; reintentar o esperar convierte el breaker en un retry, que es justo lo que intenta evitar.",
    "ref": {
      "book": "release-it",
      "where": "cap. 5"
    }
  },
  {
    "id": "sd-011",
    "track": "system-design",
    "status": "borrador",
    "prompt": "El cliente crea una orden con una llamada que no es idempotente. La respuesta se pierde por un timeout, el cliente reintenta y se crean dos ordenes. Cual es la correccion mas solida?",
    "options": [
      "Enviar una clave de idempotencia por operacion y que el servidor deduplique",
      "Reintentar solo cuando el servidor devuelva un error 500",
      "Cambiar la creacion por una lectura para que no tenga efectos",
      "Bajar el timeout para que la respuesta no se pierda"
    ],
    "ok": 0,
    "why": "El fallo es ambiguo: el cliente no sabe si la orden se creo o no, y un reintento ciego duplica. Una clave de idempotencia permite al servidor reconocer el mismo intento y devolver el resultado original. Reintentar solo con 500 no cubre la perdida de respuesta, cambiar a una lectura no crea la orden y acortar el timeout no elimina la ambiguedad.",
    "ref": {
      "book": "ddia",
      "where": "cap. 12"
    }
  },
  {
    "id": "sd-012",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un cluster reparte claves con hash(key) mod 10. Se agrega un nodo y se pasa a mod 11. Aproximadamente que fraccion de las claves cambia de nodo?",
    "options": [
      "Cerca del 9%, porque solo se agrega 1 de 11 nodos",
      "Cerca del 50%, porque cada clave tiene dos destinos posibles",
      "0%, porque el hash de la clave no cambia",
      "Cerca del 91%, porque solo 1 de cada 11 claves conserva el mismo destino"
    ],
    "ok": 3,
    "why": "La clave se queda solo si hash mod 10 = hash mod 11, lo que ocurre para 10 de cada 110 residuos (1 de cada 11); por eso se mueve cerca del 91%. El error tipico es responder 9%, confundiendo la fraccion de claves que se quedan con la que se mueve; el 0% ignora que el divisor cambia y el 50% no tiene relacion con el reparto. Consistent hashing evita este remapeo masivo.",
    "ref": {
      "book": "ddia",
      "where": "cap. 6"
    }
  },
  {
    "id": "sd-013",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Se particiona por user_id. Una celebridad con millones de seguidores genera la mayoria de las escrituras de una particion. Agregar mas particiones no baja la carga de esa particion. Que es cierto?",
    "options": [
      "El hash de user_id distribuye mal y hay que cambiar la funcion hash",
      "La clave caliente es un solo valor; hay que dividir esa clave (por ejemplo, con subclaves) o tratarla aparte",
      "Basta con aumentar el factor de replicacion de esa particion",
      "El problema se resuelve con lecturas consistentes"
    ],
    "ok": 1,
    "why": "El hash reparte bien las claves, pero una clave individual siempre cae en una sola particion; mas particiones no dividen esa clave. Hay que separar la clave caliente en subclaves o darle un tratamiento dedicado. Cambiar el hash mueve la clave a otra particion, pero sigue siendo una sola particion caliente; replicar no divide la carga de escritura de esa clave.",
    "ref": {
      "book": "ddia",
      "where": "cap. 6"
    }
  },
  {
    "id": "sd-014",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un usuario guarda un cambio en el lider y recarga la pagina; la lectura va a una replica asincrona que aun no recibio el cambio, y ve el dato viejo. Que solucion garantiza que el usuario vea su propia escritura?",
    "options": [
      "Enviar las lecturas de ese usuario al lider, o esperar a que la replica alcance la posicion de la escritura",
      "Leer siempre de cualquier replica y confiar en la convergencia eventual",
      "Aumentar el numero de replicas para reducir la probabilidad",
      "Bajar el timeout de la lectura"
    ],
    "ok": 0,
    "why": "La consistencia eventual no garantiza read-your-writes: la replica puede estar atrasada justo despues de la escritura. Leer del lider o esperar la posicion de replicacion asegura que la escritura ya es visible. Mas replicas reducen la probabilidad pero no la garantizan, y el timeout no cambia el retraso.",
    "ref": {
      "book": "ddia",
      "where": "cap. 5"
    }
  },
  {
    "id": "sd-015",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un sistema con N=3 replicas usa quorum. Cual configuracion garantiza que una lectura vea la ultima escritura confirmada, sin depender de reparaciones posteriores?",
    "options": [
      "W=1, R=1",
      "W=2, R=1",
      "W=2, R=2",
      "W=1, R=2"
    ],
    "ok": 2,
    "why": "La condicion es R + W > N: 2 + 2 = 4 > 3, asi que los conjuntos de lectura y escritura se solapan al menos en una replica. W=2, R=1 suma 3, que no es mayor que 3, y la lectura puede caer en la replica que no recibio la escritura; W=1, R=1 y W=1, R=2 tampoco aseguran el solapamiento.",
    "ref": {
      "book": "ddia",
      "where": "cap. 5"
    }
  },
  {
    "id": "sd-016",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Dos medicos de guardia consultan cuantos companeros quedan de guardia y cada uno decide irse, confiando en que el otro se queda. Cada transaccion lee el mismo dato y escribe su propia baja. Bajo aislamiento snapshot, ambas confirman. Que anomalia ocurrio?",
    "options": [
      "Lost update, porque una escritura piso a la otra",
      "Write skew, porque cada transaccion escribio un dato distinto a partir de una lectura compartida y la regla global se rompio",
      "Dirty read, porque una transaccion vio datos no confirmados",
      "Phantom read, porque aparecieron filas nuevas"
    ],
    "ok": 1,
    "why": "No es lost update: las dos escrituras se conservan, pero juntas violan la regla de al menos uno de guardia. Snapshot isolation no detecta conflictos entre escrituras a filas distintas, eso es write skew; hace falta serializable o un lock explicito. Dirty read no ocurre porque ninguna transaccion vio datos no confirmados, y tampoco es phantom read: no aparecen filas nuevas, se modifican filas existentes.",
    "ref": {
      "book": "ddia",
      "where": "cap. 7"
    }
  },
  {
    "id": "sd-017",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un SLO de disponibilidad de 99.9% en un mes de 30 dias. Cuanto tiempo de indisponibilidad permite el presupuesto de error, aproximadamente?",
    "options": [
      "4.3 minutos",
      "7.2 horas",
      "3.6 horas",
      "43 minutos"
    ],
    "ok": 3,
    "why": "30 dias son 43,200 minutos; el 0.1% es 43.2 minutos. El error tipico es correr un decimal y responder 4.3 minutos (que corresponde a 99.99%), usar 1% y responder 7.2 horas (99%), o calcular 0.5% y responder 3.6 horas. El presupuesto se calcula sobre el tiempo total del periodo.",
    "ref": {
      "book": "sre-book",
      "where": "cap. 4"
    }
  },
  {
    "id": "sd-018",
    "track": "system-design",
    "status": "borrador",
    "prompt": "A mitad del mes, el equipo ya consumio el 100% del error budget de su SLO. Que es lo mas alineado con la practica de error budgets?",
    "options": [
      "Congelar o reducir cambios riesgosos y priorizar trabajo de confiabilidad hasta recuperar el margen",
      "Subir el SLO para que el presupuesto alcance de nuevo",
      "Ignorar el presupuesto y seguir igual, porque el SLO es solo un tablero",
      "Bajar el SLO al nivel actual para que el presupuesto nunca se agote"
    ],
    "ok": 0,
    "why": "El error budget es una herramienta de decision: si se agoto, el ritmo de cambios esta consumiendo mas riesgo del tolerado y se frena lo riesgoso para priorizar confiabilidad. Mover el SLO para que el numero cuadre, o ignorarlo, elimina la funcion del presupuesto. El SLO debe reflejar la experiencia del usuario, no maquillar el resultado.",
    "ref": {
      "book": "sre-book",
      "where": "cap. 3"
    }
  },
  {
    "id": "sd-019",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un servicio esta sobrecargado y la cola de entrada crece sin limite. Las solicitudes esperan minutos y muchas terminan en timeout; el throughput util baja. Que estrategia protege mejor a las solicitudes que si pueden atenderse?",
    "options": [
      "Aceptar todo y agrandar la cola para no perder ninguna solicitud",
      "Aumentar el timeout para que las solicitudes esperen mas",
      "Rechazar temprano el exceso (load shedding) con una cola acotada, priorizando el trabajo que cabe",
      "Reintentar todas las solicitudes rechazadas de inmediato"
    ],
    "ok": 2,
    "why": "Con la cola sin limite, el trabajo viejo compite con el nuevo y el tiempo de espera crece hasta que todo expira; el throughput util cae. Una cola acotada y el rechazo temprano mantienen la carga dentro de la capacidad y preservan las solicitudes atendibles. Colas mas grandes o timeouts mas largos solo alargan la agonia, y reintentar de inmediato agrega mas carga.",
    "ref": {
      "book": "sre-book",
      "where": "cap. 21"
    }
  },
  {
    "id": "sd-020",
    "track": "system-design",
    "status": "borrador",
    "prompt": "Un servicio lento retiene hilos de un servicio A; A se queda sin hilos y empieza a fallar; los clientes de A reintentan y el fallo llega a otros servicios. Que conjunto de medidas corta mejor la cascada?",
    "options": [
      "Aumentar el pool de hilos de A y el timeout del servicio lento",
      "Timeouts acotados, circuit breaker hacia el servicio lento, bulkheads por dependencia y reintentos con limite",
      "Quitar el circuit breaker para que A siga intentando",
      "Replicar el servicio lento y mantener los hilos de A sin cambios"
    ],
    "ok": 1,
    "why": "La cascada empieza cuando los recursos de A se agotan esperando a un downstream lento; sin timeouts ni breaker, mas hilos solo trasladan el problema y los reintentos lo amplifican. Timeouts, breaker, bulkheads y retries acotados contienen el fallo en la dependencia. Aumentar el pool o el timeout da mas tiempo para que se agoten los recursos, quitar el breaker elimina la proteccion y replicar el servicio lento no libera los hilos de A.",
    "ref": {
      "book": "sre-book",
      "where": "cap. 22"
    }
  },
];
