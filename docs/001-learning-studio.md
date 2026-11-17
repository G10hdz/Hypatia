# 001. Catalogo estatico y materiales personales locales

## Estado

Aceptado.

## Contexto

Hypatia combina modulos de practica existentes con lecciones interactivas.
El catalogo puede mostrarse a otras personas, pero los materiales de estudio
pueden pertenecer a libretas privadas. Una aplicacion estatica no puede
convertir los permisos de una cuenta de Google en permisos de sus visitantes.
Tampoco debe presentar actividad del navegador como evidencia de dominio.

## Decision

Mantener el catalogo publicable en archivos estaticos y conservar las rutas
existentes. Compartir estilos y utilidades entre la portada y Labs sin cambiar
los motores de los modulos de practica.

Organizar la entrada por temas y usar los sistemas de origen como procedencia,
no como silos de navegacion. Mantener un mapa curricular curado con una
explicacion y evidencia por relacion. Distinguir los puentes propuestos de los
respaldados por un catalogo. El mapa no declara prerrequisitos ni estima lo que
sabe la persona.

Guardar progreso y enlaces personales en el navegador. Usar identificadores
calificados por track y leccion; conservar los registros anteriores sin
inventarles resultados. Mostrar la finalizacion y los aciertos por separado.
Si falla la persistencia, permitir la sesion y avisar que los cambios no se
guardaran.

Abrir recursos externos con enlaces HTTPS, sin embeds ni peticiones previas.
Validar tanto los enlaces nuevos como los datos leidos del almacenamiento.
Los permisos siguen siendo responsabilidad del proveedor; no compartir una
libreta, publicar un audio ni incorporar credenciales desde Hypatia.

Las figuras muestran un modelo declarado y datos accesibles fuera del canvas.
El movimiento es opcional. Los temas claro y oscuro usan tokens compartidos.

## Consecuencias

No se necesita un servidor de cuentas ni un build. La pagina puede conservar
su despliegue estatico dentro de la tailnet. El catalogo no revela enlaces
personales por estar en el repositorio.

El progreso y los enlaces no se sincronizan entre dispositivos u origenes.
El almacenamiento local no protege frente a otros usuarios del mismo perfil
del navegador ni frente a codigo ejecutado en el mismo origen. El despliegue
estatico debe seguir excluyendo archivos privados.

La integracion automatica con memoria, el acceso multiusuario y la importacion
de artefactos de NotebookLM quedan fuera de esta decision. Requieren un
contrato propio y revision de permisos antes de implementarse.

## Referencias

- [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/).
- [Explorable Explanations](https://blog.ncase.me/explorable-explanations/).
- [Retrieval Practice Consistently Benefits Student Learning](https://doi.org/10.1007/s10648-021-09595-9).
- [The Gamification of Learning: a Meta-analysis](https://doi.org/10.1007/s10648-019-09498-w).
- [Compartir Audio Overviews](https://support.google.com/notebooklm/answer/16212820).
- [Permisos de libretas publicas](https://support.google.com/gemininotebook/answer/16322204?hl=en).
