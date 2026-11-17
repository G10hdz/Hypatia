# Publicar una leccion en Labs

Este procedimiento sirve para convertir una fuente revisada en una leccion
interactiva. La portada y Labs comparten el catalogo de `Labs/tracks.js`.
Los modulos de practica existentes conservan sus rutas y sus motores.

## Relacionar temas

La navegacion conceptual vive en `Labs/knowledge-map.js`: temas, procedencias
y relaciones con una explicacion y evidencia. Un tema puede usar materiales
de varios sistemas. Una misma fuente no necesita duplicar el tema ni la leccion.

Registrar como `documented` una relacion respaldada por el catalogo o roadmap
consultado. Esto no certifica la verdad de un libro ni que alguien lo haya
estudiado. Usar `proposal` para un puente editorial aun por revisar. No inferir
prerrequisitos, causalidad o dominio a partir de una linea entre dos nodos.

Vincular un tema a lecciones solo cuando existan sus rutas publicadas. El mapa
puede mostrar temas cuyo outline esta pendiente, sin sumarlos a las lecciones
disponibles. Las relaciones visibles dentro de una leccion salen del mismo
archivo para no mantener dos mapas distintos.

## Preparar el contenido

1. Identificar la fuente, el concepto y una pregunta que la persona deba poder
   responder al terminar. Conservar titulo, autor y referencia verificable.
2. Distinguir una fuente consultada de una lectura recomendada. No atribuir una
   leccion a una libreta de NotebookLM que no se haya consultado.
3. Proponer el outline del track con los prerrequisitos y las lecciones.
   Esperar revision humana antes de generar un track completo.
4. Marcar los huecos como `PENDIENTE`. Un catalogo de libros no prueba que se
   hayan leido; una ruta propuesta no cuenta como contenido publicado.

## Construir la leccion

Crear `Labs/<track>/<NN-slug>/index.html`, sin cambiar las rutas ya publicadas.
Usar las hojas de estilo y utilidades compartidas; no agregar un build ni
dependencias de CDN para una figura.

La secuencia de referencia es:

1. Idea: explicar un mecanismo o plantear un problema concreto.
2. Prediccion: pedir una hipotesis antes de mostrar el resultado.
3. Exploracion: dejar cambiar una variable y observar su efecto.
4. Modelo: explicar las reglas, los supuestos y las limitaciones de la figura.
   Usar matematicas o codigo solo cuando ayuden al tema.
5. Aplicacion: proponer una situacion distinta donde usar el concepto.
6. Comprobacion: pedir recuperar o aplicar lo aprendido, con explicacion de la
   respuesta y un reintento sin penalizacion.

No convertir cada parrafo en un control. En temas historicos o culturales,
una relacion anotada o una secuencia comparada puede ensenar mas que una
simulacion numerica sin respaldo.

| Necesidad | Representacion |
|---|---|
| Comparar probabilidades condicionales | Poblacion y tabla de frecuencias |
| Seguir un request y localizar un limite | Topologia con flujo y controles |
| Ver dependencias y alternativas | Grafo explorable o arbol de decision |
| Comparar orden y contexto | Timeline con detalles bajo demanda |
| Revisar la estructura de un argumento | Secuencia editable con explicacion |

Las dos lecciones publicadas son `ai-math/01-bayes` y
`system-design/01-bottleneck`. Los demas patrones son opciones de autoria,
no lecciones existentes.

## Verificar el modelo

- Mantener los calculos puros en `shared/lab-models.js` y probar casos conocidos.
  Los valores de la figura, la formula y la tabla deben usar el mismo modelo.
- Distinguir frecuencias esperadas de muestras y redondeos visuales. En Bayes,
  los bloques son aproximados; el posterior sale de las probabilidades.
- Declarar que el diagrama de capacidad no modela una cola ni predice latencia.
  El cache reduce las consultas a la DB, no el trabajo de las app servers.
- No usar umbrales de rendimiento universales ni promesas de dominio a partir
  de un par de respuestas.

## Registrar y comprobar

1. Registrar la leccion y su procedencia en `Labs/tracks.js`. Publicar solo URLs
   de fuentes que puedan estar en el repositorio; no copiar enlaces privados.
2. Usar identificadores de progreso que incluyan track y slug. Completar todas
   las preguntas marca una leccion recorrida; el resultado se muestra aparte.
   Esto no es una medicion de dominio ni una certificacion.
3. Ofrecer reintento. Conservar el mejor resultado sin fabricar respuestas,
   sesiones, XP o fechas para los registros anteriores.
4. Probar teclado, vista movil, temas claro y oscuro, movimiento reducido,
   recarga y almacenamiento bloqueado. La tabla o descripcion debe comunicar
   lo importante sin depender del canvas o del color.
5. Ejecutar los checks documentados en el README y revisar el diff completo.

## Vincular materiales personales

Agregar libretas, audios, videos y briefs desde el formulario de la biblioteca.
Los enlaces se guardan en ese navegador, no se agregan al catalogo del repo.
En otro dispositivo o en otro origen web habra que agregarlos de nuevo.

Abrir un enlace usa los permisos del proveedor. Hypatia no inicia sesion como
la persona propietaria, no comparte libretas ni cambia permisos. No agregar
credenciales a una URL. No usar el almacenamiento local como una frontera de
seguridad en un dispositivo compartido.

Las lecturas publicas del catalogo se distinguen de los materiales personales.
No incrustar ni precargar archivos privados. Antes de publicar un audio
descargado, revisar su contenido, derechos y destinatarios.

## Memoria de aprendizaje

El progreso de Labs es local al navegador. No se envia automaticamente a
`learning-memory`, no escribe en el vault y no otorga XP en su dashboard.
Un registro manual debe describir una sesion que ocurrio realmente y seguir
las reglas del store de memoria; publicar una leccion no demuestra aprendizaje
de quien la usa.
