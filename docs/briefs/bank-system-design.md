# Brief: banco de preguntas system-design (piloto)

- Estado: aprobado-para-implementar (Gio, 2026-11-18, en chat).
- Destino: `Labs/bank.js`, track `system-design`, todas en `borrador`.
- Implementa: DeepSeek v4.1 Flash via CommandCode. Revisa: Claude. Aprueba: Gio.

## Alcance

20 preguntas de opcion multiple, nivel base e intermedio:

- Cuello de botella, colas, Ley de Little, utilizacion y latencia.
- Caches: hit rate, invalidacion, estampida.
- Balanceo de carga, timeouts, retries con backoff, circuit breaker.
- Replicacion, particionado, consistencia, transacciones (nivel concepto).
- SLO, error budget, sobrecarga y fallas en cascada.

Fuera de alcance: productos y precios de nube, comandos, codigo.

## Reglas de contenido

- Cada pregunta pone a prueba una intuicion que suele fallar, con un
  escenario concreto. Si hay numeros, la cuenta se hace a mano y la
  explicacion la muestra.
- 3 o 4 opciones; los distractores son errores tipicos reales.
- `ref.where` solo usa capitulos del indice de abajo.
- Espanol sin acentos (convencion del repo). Sin emojis.

## Indices permitidos

- `ddia` (Designing Data-Intensive Applications, 1a ed.): 1 Reliable,
  Scalable and Maintainable Applications, 3 Storage and Retrieval,
  5 Replication, 6 Partitioning, 7 Transactions, 8 The Trouble with
  Distributed Systems, 9 Consistency and Consensus, 11 Stream Processing,
  12 The Future of Data Systems (11 y 12 agregados en revision).
- `sre-book`: 3 Embracing Risk, 4 Service Level Objectives, 6 Monitoring
  Distributed Systems, 19 Load Balancing at the Frontend, 20 Load Balancing
  in the Datacenter, 21 Handling Overload, 22 Addressing Cascading Failures.
- `release-it` (2a ed.): 4 Stability Antipatterns, 5 Stability Patterns.
- `samwho-lb`: usar `where: "articulo"`.

## Comprobacion

- `node scripts/test-studio.mjs` verde.
- Revision: cada respuesta comprobada; cada cita dentro del indice.
