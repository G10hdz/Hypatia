/* bank.js — banco de preguntas del desafio del dia, aparte de las lecciones.
 * Cada pregunta entra como "borrador" y solo pasa a "aprobada" tras revision
 * humana (respuesta comprobada y cita verificada). El desafio usa solo las
 * aprobadas.
 *
 * { id, track, status: "borrador" | "aprobada",
 *   prompt, options: [3-4 textos], ok: indice correcto, why,
 *   ref: { book: id de BOOKS, where: "cap. 7" } }
 *
 * Citas cotejadas el 2026-11-18 contra indices reales: PDF oficial (MML),
 * sitio del autor (Think Bayes, SRE), editorial (Release It!), repo de
 * referencias del autor (DDIA), indices escaneados o de catalogo (Getting to
 * Yes, What Works for Women at Work) y resumenes por capitulo (Made to Stick,
 * Never Split the Difference). Una cita nueva se coteja igual antes de aprobar.
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
  // comunicacion: piloto docs/briefs/bank-comunicacion.md
  {
    "id": "com-001",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Tienes diez minutos con la direccion para presentar la estrategia de un producto y tu mazo tiene cuarenta diapositivas con todas las funciones. Segun Simple, la mejor jugada es:",
    "options": [
      "recortar palabras en cada diapositiva para que el mazo se vea mas ligero",
      "agregar mas datos y graficas para que la direccion confie en el plan",
      "dividir el mazo en dos presentaciones para cubrir cada tema con calma",
      "encontrar el nucleo: una sola idea central que, si se olvida todo lo demas, siga guiando la decision"
    ],
    "ok": 3,
    "why": "Simple no consiste en acortar frases ni comprimir todo, sino en encontrar el nucleo y expresarlo en una idea que sobreviva al olvido. Recortar palabras deja las cuarenta ideas intactas, agregar datos no vuelve simple el mensaje y partir el mazo en dos evita elegir el nucleo.",
    "ref": {
      "book": "made-to-stick",
      "where": "cap. 1"
    }
  },
  {
    "id": "com-002",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "En la sesion de induccion sobre seguridad todos asienten y despues nadie aplica nada. Quieres que recuerden el riesgo de reutilizar contrasenas. La jugada mas fiel a Unexpected es:",
    "options": [
      "mostrar una estadistica larga de incidentes y pedir que la memoricen",
      "abrir con un caso inesperado: un correo viejo que revela la contrasena de un empleado, y despues explicar como evitarlo",
      "repartir el manual de politicas y pedir la firma al final",
      "decir que esto es importante y que luego habra una evaluacion"
    ],
    "ok": 1,
    "why": "Lo inesperado abre un hueco de curiosidad: se muestra algo que rompe el guion y la explicacion lo cierra, y asi el mensaje se recuerda. La estadistica larga y el manual no crean ese hueco, y anunciar una evaluacion genera presion pero no interes.",
    "ref": {
      "book": "made-to-stick",
      "where": "cap. 2"
    }
  },
  {
    "id": "com-003",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "El equipo de soporte no logra explicar un cambio en el sistema de facturacion y los clientes llaman confundidos. La opcion mas alineada con Concrete es:",
    "options": [
      "explicar el cambio con tres principios abstractos de eficiencia y control",
      "pedir a los clientes que lean la nota tecnica antes de llamar",
      "recorrer un caso concreto: la factura de una panaderia pequena, paso por paso, con nombres y montos",
      "crear una sigla con las cinco etapas del proceso"
    ],
    "ok": 2,
    "why": "Concreto significa describir en terminos de acciones, sentidos y objetos, y un caso con nombres y montos se puede imaginar y repetir. Los principios abstractos y la sigla suenan expertos pero no dan nada que visualizar, y mandar a leer la nota tecnica no explica el cambio.",
    "ref": {
      "book": "made-to-stick",
      "where": "cap. 3"
    }
  },
  {
    "id": "com-004",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Vendes un proceso nuevo a un equipo de operaciones esceptico y afirmas que reduce errores. Para que te crean, la via mas propia de Credible es:",
    "options": [
      "contar que un consultor externo muy reconocido lo recomienda",
      "repetir con mas enfasis que el proceso reduce errores",
      "mostrar el registro real de un pedido que fallo y como el proceso lo detecto antes del envio, para que ellos lo revisen",
      "presentar una lista de adjetivos sobre la calidad del metodo"
    ],
    "ok": 2,
    "why": "Credible distingue fuentes externas, como expertos, de credenciales internas que el publico puede comprobar. Ante un equipo esceptico que conoce su operacion, un caso propio y rastreable que ellos revisan pesa mas que el nombre de un consultor. Repetir con enfasis o listar adjetivos no aporta prueba.",
    "ref": {
      "book": "made-to-stick",
      "where": "cap. 4"
    }
  },
  {
    "id": "com-005",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "La campana interna para reportar casi-accidentes no despega; la gente dice que las cifras no le dicen nada. La mejor jugada segun Emotional es:",
    "options": [
      "subir el tamano de la letra de las estadisticas en los carteles",
      "explicar el reglamento y las sanciones por no reportar",
      "pedir al area legal una definicion precisa de casi-accidente",
      "contar el turno concreto de una companera que casi pierde la mano y lo que cambio para su familia"
    ],
    "ok": 3,
    "why": "Emotional funciona cuando la gente siente algo por personas concretas y no por cifras o definiciones. Agrandar numeros, citar sanciones o pedir una definicion legal mantiene el tema en el terreno abstracto, donde nadie se identifica ni actua.",
    "ref": {
      "book": "made-to-stick",
      "where": "cap. 5"
    }
  },
  {
    "id": "com-006",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Estas entrenando vendedores nuevos y tienes una lista de doce reglas para manejar objeciones. Quieres que las apliquen en llamadas reales. La opcion mas fiel a Stories es:",
    "options": [
      "contar la historia de una vendedora que casi pierde una cuenta, que hizo en el momento y como termino, para que ellos ensayen esa misma decision",
      "ordenar las doce reglas por importancia y pedir que las memoricen",
      "contar la historia de un fundador que se hizo rico, sin relacion con las llamadas",
      "darles una presentacion con las doce reglas y un examen escrito"
    ],
    "ok": 0,
    "why": "Una historia con protagonista, dificultad y desenlace muestra la regla en accion y sirve de ensayo mental para la llamada real, que es como se recuerda y se aplica. Memorizar reglas o examinarlas no entrena la decision, y una historia ajena al trabajo no es un simulacro util.",
    "ref": {
      "book": "made-to-stick",
      "where": "cap. 6"
    }
  },
  {
    "id": "com-007",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Un cliente llega furioso por un retraso y empieza a gritar que tu equipo es un desastre. La jugada mas alineada con Separate the People from the Problem es:",
    "options": [
      "dejarle claro de inmediato que el retraso lo causo su propia area",
      "ofrecer un descuento antes de hablar del problema para bajar la tension",
      "reconocer su molestia y su percepcion, y tratar el retraso como un problema comun a resolver con datos",
      "escalar el caso a tu jefe para que el cliente entienda la jerarquia"
    ],
    "ok": 2,
    "why": "La persona y el problema se tratan por separado: primero se reconocen la emocion y la percepcion, y luego se resuelve el fondo con criterios claros. Culpar al cliente o pagar para callarlo mezclan la relacion con el asunto, y escalar sin escuchar agranda el conflicto.",
    "ref": {
      "book": "getting-to-yes",
      "where": "cap. 2"
    }
  },
  {
    "id": "com-008",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Tu proveedor pide un alza de 10 por ciento y tu presupuesto no admite nada. Antes de discutir el numero, lo propio de Focus on Interests, Not Positions es:",
    "options": [
      "preguntar que hay detras del pedido: sus costos, su flujo de caja, sus tiempos, y que necesita tu area en realidad",
      "contraofertar con cero de inmediato para anclar la conversacion",
      "proponer partir la diferencia en 5 por ciento y cerrar rapido",
      "advertir que evaluaras cambiar de proveedor"
    ],
    "ok": 0,
    "why": "Detras de las posiciones hay intereses distintos, y explorarlos permite encontrar arreglos que no estaban sobre la mesa. Contraofertar de inmediato o partir la diferencia se queda en las posiciones, y la amenaza presiona sin revelar que necesita cada parte.",
    "ref": {
      "book": "getting-to-yes",
      "where": "cap. 3"
    }
  },
  {
    "id": "com-009",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Dos areas pelean por el mismo presupuesto de marketing y cada una pide quedarse con el 80 por ciento. Segun Invent Options for Mutual Gain, conviene:",
    "options": [
      "dividir el presupuesto 50 y 50 a la primera",
      "separar la lluvia de ideas de la decision y generar varias alternativas: campanas conjuntas, aportes en especie, calendarios distintos",
      "decidir con el jefe y no gastar tiempo en un taller",
      "repetir que ambas areas ganan si colaboran, sin proponer nada concreto"
    ],
    "ok": 1,
    "why": "Inventar opciones antes de decidir, y buscar intereses distintos que permitan combinarlas, es lo que crea ganancias mutuas. Partir por mitad o recurrir al jefe cierra la invencion antes de explorar, y decir que todos ganan sin opciones concretas no es inventar nada.",
    "ref": {
      "book": "getting-to-yes",
      "where": "cap. 4"
    }
  },
  {
    "id": "com-010",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Negocias salario para un puesto y el reclutador dice que el presupuesto es lo que se pueda. La via mas propia de Insist on Using Objective Criteria es:",
    "options": [
      "argumentar que mereces mas porque te esfuerzas mucho",
      "amenazar con aceptar otra oferta si no suben",
      "pedir una cifra alta y ceder a la mitad para llegar rapido a un acuerdo",
      "acordar con el reclutador criterios externos e internos: bandas salariales, encuestas de mercado, casos comparables en la empresa"
    ],
    "ok": 3,
    "why": "Los criterios objetivos hacen que la decision no dependa de la voluntad de nadie, sino de parametros que ambas partes pueden revisar. El esfuerzo y la amenaza son presion, y pedir alto para luego partir a la mitad es regateo de posiciones sin criterio.",
    "ref": {
      "book": "getting-to-yes",
      "where": "cap. 5"
    }
  },
  {
    "id": "com-011",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Tu cliente mas grande exige una exclusividad que te obligaria a dejar otros clientes y amenaza con irse. Antes de ceder, lo propio de What If They Are More Powerful? es:",
    "options": [
      "aceptar todo para no perderlo y luego ver como cumples",
      "desarrollar y conocer tu mejor alternativa real: que haces si se va y cuanto vale, para decidir desde ahi",
      "decirle que tienes otros clientes grandes esperando, aunque no sea cierto",
      "confiar en que la buena relacion hara que no se vaya"
    ],
    "ok": 1,
    "why": "La fuerza en la mesa depende de la mejor alternativa al acuerdo, y conviene mejorarla y conocerla antes de negociar. Aceptar por miedo o blufear con alternativas falsas dejan el poder en manos del otro, y confiar en la relacion no reemplaza un plan para el caso de no acuerdo.",
    "ref": {
      "book": "getting-to-yes",
      "where": "cap. 6"
    }
  },
  {
    "id": "com-012",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Un cliente dice: no creo que puedan entregar en la fecha. Quieres que explique mas antes de responder. La tecnica mas fiel a Be a Mirror es:",
    "options": [
      "responder de inmediato con un plan de entregas",
      "decirle que se equivoca y mostrarle el cronograma",
      "repetir sus ultimas palabras: que no cree que podamos entregar en la fecha?",
      "subir el tono y preguntar por que siempre duda"
    ],
    "ok": 2,
    "why": "El espejo repite las ultimas palabras con tono curioso y hacia arriba para que el otro aclare o se explaye sin sentirse confrontado. Responder de inmediato cierra la informacion, contradecir genera defensa y subir el tono rompe la conversacion.",
    "ref": {
      "book": "never-split",
      "where": "cap. 2"
    }
  },
  {
    "id": "com-013",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Un miembro de tu equipo dice que no pasa nada por no haber recibido el ascenso, pero evita mirarte. Quieres abrir la conversacion. La jugada propiamente de Label es:",
    "options": [
      "etiquetar lo que notas: parece que esto te dejo mas frustrado de lo que esperabas",
      "preguntar por que estas molesto para ir al grano",
      "decirle que entender su dolor no es tu trabajo y hablar del siguiente proyecto",
      "decirle que se calme y que ya habra otras oportunidades"
    ],
    "ok": 0,
    "why": "Etiquetar la emocion con un parece que invita a confirmarla o corregirla y abre el tema sin acusar. Preguntar por que esta molesto suena a juicio, negar el dolor cierra la puerta y pedir calma minimiza lo que la persona siente.",
    "ref": {
      "book": "never-split",
      "where": "cap. 3"
    }
  },
  {
    "id": "com-014",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "En una junta todos dicen si rapido a tu propuesta, pero nadie se compromete despues. Para obtener un si real, lo mas alineado con Beware Yes, Master No es:",
    "options": [
      "preguntar estan de acuerdo y anotar los si como compromiso",
      "cerrar la junta antes de que aparezcan dudas",
      "repetir la propuesta con mas entusiasmo hasta que firme cada uno",
      "invitar al no: seria una locura probar esto solo un mes en un area? y escuchar lo que sale"
    ],
    "ok": 3,
    "why": "Un si apresurado suele ser falso; invitar al no da control al otro y produce respuestas verdaderas y compromisos reales. Preguntar si estan de acuerdo fabrica cortesias, cerrar rapido evita la informacion y el entusiasmo no reemplaza una decision.",
    "ref": {
      "book": "never-split",
      "where": "cap. 4"
    }
  },
  {
    "id": "com-015",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Un proveedor dice: el precio es 100 mil y no bajo ni un peso. Quieres un mejor arreglo sin romper la relacion. Lo mas propio de Bend Their Reality es:",
    "options": [
      "aceptar la cifra porque dijo que era final",
      "tratar la cifra como un ancla y no como un hecho: preguntar como llego a ella y reencuadrar la conversacion en valor y en un rango justificado",
      "responder con el mismo tono duro para que vea que no cedes",
      "ofrecer la mitad sin explicar nada y esperar su contraoferta"
    ],
    "ok": 1,
    "why": "Un numero de apertura es un ancla que se puede mover si se cambia el marco y se justifica con criterios, y preguntar por su logica abre esa puerta. Tomarlo como definitivo o responder con dureza lo fija, y tirar una cifra sin razones solo invita a otro regateo.",
    "ref": {
      "book": "never-split",
      "where": "cap. 6"
    }
  },
  {
    "id": "com-016",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Necesitas que un gerente de otra area libere tiempo de su equipo para un proyecto conjunto, y hasta ahora solo te ha dicho que no. La via mas propia de Create the Illusion of Control es:",
    "options": [
      "enviarle el plan completo y pedirle que lo apruebe o lo rechace",
      "preguntarle por que no quieres ayudar para que vea lo irracional",
      "preguntarle como harias tu para que esto quepa en tu carga sin romper tus entregas, y dejar que proponga",
      "escalar a su jefe para forzar la decision"
    ],
    "ok": 2,
    "why": "Las preguntas calibradas de como y que hacen que el otro sienta que el arreglo es suyo, y lo comprometen con lo que propone. Mandar un plan a aprobar, preguntar por que no ayuda o escalar le quitan la agencia y provocan resistencia.",
    "ref": {
      "book": "never-split",
      "where": "cap. 7"
    }
  },
  {
    "id": "com-017",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Una ingeniera presenta resultados trimestrales con datos solidos y su jefa le pide demuestralo otra vez; a su companero, con los mismos numeros, no le pidieron nada. Lo mas util segun Prove-It-Again es:",
    "options": [
      "nombrar el patron, responder con evidencia ya preparada y proponer criterios de evaluacion iguales para todos",
      "trabajar el doble en silencio hasta que su jefa cambie de opinion",
      "responder con el mismo enfasis y evitar el tema para no parecer conflictiva",
      "pedir el cambio de equipo sin decir por que"
    ],
    "ok": 0,
    "why": "Prove-It-Again describe la exigencia repetida de pruebas que recae de forma desigual; la salida no es esforzarse mas en silencio sino hacer visible la evidencia y cambiar la regla de evaluacion. Trabajar el doble sin decir nada, callar o cambiar de equipo dejan el patron intacto.",
    "ref": {
      "book": "wwww",
      "where": "parte 1"
    }
  },
  {
    "id": "com-018",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "En una revision de desempeno le dicen a una gerenta que es muy directa y que deberia suavizar su estilo, aunque su par hombre dice lo mismo y a el lo llaman lider. Lo mas fiel a The Tightrope es:",
    "options": [
      "dejar de ser directa y aceptar el comentario sin discusion",
      "exagerar los rasgos duros para que no la vean blanda",
      "pedir que la cambien de jefa para no lidiar con eso",
      "combinar competencia y calidez de forma explicita, por ejemplo mostrar interes por el equipo, y cuestionar el doble estandar con ejemplos"
    ],
    "ok": 3,
    "why": "The Tightrope describe el doble vinculo entre ser competente y ser querida; se recorre mostrando calidez sin ceder competencia y nombrando el doble estandar. Apagar la fortaleza o endurecerla refuerzan el dilema, y cambiar de equipo no lo resuelve.",
    "ref": {
      "book": "wwww",
      "where": "parte 2"
    }
  },
  {
    "id": "com-019",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Una analista vuelve de licencia de maternidad y su jefe no la considera para un proyecto visible porque con un bebe va a estar cansada. Lo mas util segun The Maternal Wall es:",
    "options": [
      "aceptar el desaire y esperar un mejor momento para no parecer dificil",
      "pedir el proyecto mostrando disponibilidad y resultados concretos, y mencionar la suposicion para que se decida con hechos",
      "esconder que tiene hijos y no hablar nunca del tema",
      "trabajar de noche para compensar lo que el jefe supone"
    ],
    "ok": 1,
    "why": "The Maternal Wall describe suposiciones de menor compromiso que se aplican a las madres sin evidencia; se responde con hechos y visibilidad, no con silencio. Aceptarlo o esconder la familia deja la suposicion en pie, y compensar de noche la refuerza sin cambiar el criterio de decision.",
    "ref": {
      "book": "wwww",
      "where": "parte 3"
    }
  },
  {
    "id": "com-020",
    "track": "comunicacion",
    "status": "borrador",
    "prompt": "Dos coordinadoras del mismo equipo compiten por la unica promocion disponible y empiezan a desacreditarse entre ellas; el jefe observa sin intervenir. Lo mas alineado con The Tug of War es:",
    "options": [
      "redoblar la competencia para que la mejor gane limpio",
      "retirarse de la contienda para no romper la relacion con la otra coordinadora",
      "reconocer el juego de escasez, hablar entre ellas y proponer criterios y opciones justas en vez de pelear por un solo lugar",
      "contarle a todo el equipo lo que la otra hace mal"
    ],
    "ok": 2,
    "why": "The Tug of War muestra que la escasez y los roles asignados enfrentan a las mujeres entre si; la salida es coordinarse y cambiar las reglas, no pelear por el unico lugar. Competir con mas fuerza, retirarse o desacreditar deja intacto el juego que las enfrenta.",
    "ref": {
      "book": "wwww",
      "where": "parte 4"
    }
  },
];
