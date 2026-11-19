---
name: Hypatia
description: Estudio de aprendizaje dibujado como una red de lineas y estaciones.
colors:
  bg: "#eef1f5"
  panel: "#ffffff"
  panel-2: "#e4e8ed"
  ink: "#12151b"
  muted: "#555b66"
  line: "#d6d9df"
  stage-line: "#c9cdd4"
  accent: "#0a5ba8"
  ok: "#2c7a4b"
  warn: "#8a6116"
  bad: "#b23842"
  pill: "#12151b"
  pill-ink: "#ffffff"
  l1: "#e2007a"
  l2: "#0a5ba8"
  l3: "#7d8c00"
  l4: "#1597b8"
  l5: "#f2c200"
  l6: "#d4252b"
  l7: "#e06c00"
  l8: "#0f8a55"
  l-ink: "#ffffff"
  l5-ink: "#121316"
  bg-dark: "#0b0d12"
  panel-dark: "#151921"
  panel-2-dark: "#1a1e27"
  ink-dark: "#e8ebf2"
  muted-dark: "#a0a6b1"
  line-dark: "#2b3039"
  stage-line-dark: "#353b45"
  accent-dark: "#79b0ee"
  ok-dark: "#7cc79a"
  warn-dark: "#e0b25c"
  bad-dark: "#e3898f"
  pill-dark: "#e8ebf2"
  pill-ink-dark: "#0f1115"
  l1-dark: "#ff3d9e"
  l2-dark: "#3d8fe0"
  l3-dark: "#a9b829"
  l4-dark: "#3cc0e0"
  l5-dark: "#f5cc2a"
  l6-dark: "#ef4f54"
  l7-dark: "#ff8a2a"
  l8-dark: "#2fb47a"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.2vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 112"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 112"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 112"
  numeral:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1
    fontFeature: "\"tnum\" 1"
    fontVariation: "\"wdth\" 112"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.05em"
    fontVariation: "\"wdth\" 82"
rounded:
  ctl: "8px"
  md: "12px"
  panel: "16px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
components:
  button-pill:
    backgroundColor: "{colors.pill}"
    textColor: "{colors.pill-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    height: "44px"
  button-pill-hover:
    backgroundColor: "{colors.l1}"
    textColor: "{colors.l-ink}"
  line-badge:
    backgroundColor: "{colors.l1}"
    textColor: "{colors.l-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "2.1em"
    padding: "0 0.5em"
  picto-tile:
    backgroundColor: "{colors.l1}"
    textColor: "{colors.l-ink}"
    size: "44px"
  hoy-band:
    backgroundColor: "{colors.l1}"
    textColor: "{colors.l-ink}"
    typography: "{typography.label}"
    padding: "8px 32px"
  hoy-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0 32px 32px"
  departure-row:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px 12px 12px"
    height: "80px"
  station-dot:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.l1}"
    rounded: "{rounded.pill}"
    size: "44px"
  station-dot-done:
    backgroundColor: "{colors.l1}"
    textColor: "{colors.l-ink}"
  map-station:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    size: "48px"
  map-station-selected:
    backgroundColor: "{colors.l1}"
    textColor: "{colors.l-ink}"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "24px"
---

# Design System: Hypatia

## Overview

**Creative North Star: "La red de lineas"**

El estudio se lee como un plano de transporte. Cada track es una linea con color y numero (L1, L2...), cada leccion una estacion con pictograma propio, y la portada abre con la proxima estacion. La gramatica viene de la senaletica del Metro de la Ciudad de Mexico (Lance Wyman): color de linea pleno, pictogramas de trazo grueso dentro de un cuadro de color, estaciones como discos sobre una barra. Se toma la gramatica, no la marca: nada de su logo, su nombre ni su tipografia como identidad.

Fondo perla, tinta casi negra y ocho colores de linea saturados. El color nunca es acento suelto: pinta bandas, cuadros, discos y tramos completos. La densidad es baja, una cosa a la vez, y la familia Positronica se nota en la pildora negra y la marca circular de la barra superior.

La unica animacion de firma es el tramo de linea que se pinta hasta la ultima estacion recorrida.

**Key Characteristics:**
- Color de linea en superficies completas, nunca en filetes.
- Archivo variable en dos anchos: expandida para display y numeros, condensada para rotulos.
- Pictogramas propios en rejilla de 24, blanco sobre el color de la linea.
- Halo de doble aro (fondo, luego tinta) para "estas aqui", transbordo, terminal y foco.
- Pildora negra como unico boton primario.

## Colors

Neutros frios y planos, mas una paleta de lineas de senaletica. Fuente de verdad: `shared/tokens.css`, `:root` (claro) y `[data-theme="dark"]` (oscuro).

### Primary
- **Pildora Positronica** (`--pill` / `--pill-ink`): boton primario, discos de letra del desafio, cuadros del mapa en la lista. Se invierte en oscuro (tinta clara, texto negro).

### Secondary: lineas
| Token | Linea | Claro | Oscuro |
|---|---|---|---|
| `--l1` | Rosa | #e2007a | #ff3d9e |
| `--l2` | Azul | #0a5ba8 | #3d8fe0 |
| `--l3` | Olivo | #7d8c00 | #a9b829 |
| `--l4` | Cian | #1597b8 | #3cc0e0 |
| `--l5` | Amarillo | #f2c200 | #f5cc2a |
| `--l6` | Rojo | #d4252b | #ef4f54 |
| `--l7` | Naranja | #e06c00 | #ff8a2a |
| `--l8` | Verde | #0f8a55 | #2fb47a |

Texto sobre linea: `--l-ink` (#ffffff). Sobre L5 siempre `--l5-ink` (#121316), con la clase `.l5`. Cada componente recibe su linea por `--line-c: var(--lN)`. Asignacion actual: L1 ai-math, L2 system-design; L5 Flashcards, L6 CubPrep, L7 PrepAWS, L8 MLOps. En el mapa, L3 = relacion fundamento, L7 = aplicacion, L8 = material compartido.

### Neutral
| Token | Rol | Claro | Oscuro |
|---|---|---|---|
| `--bg` | Fondo perla | #eef1f5 | #0b0d12 |
| `--panel` | Superficie | #ffffff | #151921 |
| `--panel-2` | Superficie hundida | #e4e8ed | #1a1e27 |
| `--ink` | Tinta | #12151b | #e8ebf2 |
| `--muted` | Texto secundario | #555b66 | #a0a6b1 |
| `--line` | Filete, via sin recorrer | #d6d9df | #2b3039 |
| `--stage-line` | Tramo en construccion | #c9cdd4 | #353b45 |
| `--accent` | Links y caret | #0a5ba8 | #79b0ee |
| `--ok` / `--warn` / `--bad` | Estado | #2c7a4b / #8a6116 / #b23842 | #7cc79a / #e0b25c / #e3898f |

### Named Rules
**The Whole Band Rule.** El color de linea es duenio de superficies completas: banda, cuadro, disco, tramo, insignia. Si un color aparece como borde lateral, subrayado o punto decorativo, esta mal.

**The One Line Per Object Rule.** Un objeto lleva una sola linea, declarada en `--line-c`. No se mezclan dos colores de linea en el mismo componente.

## Typography

**Display Font:** Archivo variable (`shared/fonts/archivo-latin-wdth.woff2`, peso 100 a 900, ancho 62% a 125%), con system-ui
**Body Font:** Archivo, mismo archivo, ancho normal
**Label/Mono Font:** Archivo condensada para rotulos; `ui-monospace` solo para codigo

**Character:** una sola familia en tres anchos. La expandida (`--stretch-display: 112%`) da peso de letrero a titulos y numeros; la condensada (`--stretch-label: 82%`) hace rotulos densos como los de anden.

### Hierarchy
- **Display** (800, clamp(2rem, 5.2vw, 3.75rem), 1.02, expandida): nombre de la proxima estacion en Hoy. En la cabecera de leccion baja a clamp(2rem, 4.6vw, 3.25rem), 1.04.
- **Headline** (800, clamp(1.6rem, 3.4vw, 2.4rem), expandida, -0.025em): titulo de seccion, con su descripcion al lado en la misma fila.
- **Title** (700, 1.375rem, expandida): nombre de linea; nombre de terminal.
- **Numeral** (800, 2.25rem, expandida, cifras tabulares): conteo de tarjetas por pasar, racha.
- **Body** (400, 1rem, 1.6): texto corrido; descripciones de seccion a 0.875rem, max 52ch.
- **Label** (600 a 800, 0.75 a 0.875rem, condensada, mayusculas, 0.04 a 0.05em): banda de Hoy, nav, estado de estacion, nombre de estacion en el mapa, insignia L1.

Escala base ~1.2 sobre 16px: 0.75, 0.875, 1, 1.125, 1.375, 1.625, 2.25rem.

### Named Rules
**The Two Widths Rule.** Expandida para lo que se lee de lejos (titulos, numeros); condensada para lo que se lee de cerca (rotulos). El cuerpo nunca cambia de ancho.

## Layout

Columna centrada: `.wrap` 880px, `.wrap.wide` 1040px (portada). Body con 24px arriba y 16px a los lados. Espaciado en base 4px (`--space-1` a `--space-8`); entre secciones 64px, dentro de un bloque 12 a 24px.

- **Hoy:** rejilla de dos columnas (cuadro monumental de clamp(112px, 16vw, 184px) y texto). Bajo 640px se apila y el cuadro baja a 96px.
- **Lineas:** cada linea es una fila horizontal de estaciones (`minmax(150px, 1fr)`, 140px en movil) con scroll horizontal si no caben.
- **Terminales:** `repeat(auto-fit, minmax(min(100%, 400px), 1fr))`.
- **La red:** diagrama absoluto en escritorio; bajo 767px el mismo diagrama escalado (aspect-ratio 780 / 430) y la lista de botones se oculta.
- Puntos de corte observados: 560, 640, 767, 1000px.

## Elevation & Depth

Hibrido plano. Las superficies de contenido (Hoy, filas de anden, paneles) llevan una sombra ambiental suave; todo lo de la red (estaciones, terminales, mapa) es plano y se separa con halos de anillo, no con sombra.

### Shadow Vocabulary
- **Ambiental** (`--shadow`; claro `0 1px 2px rgba(18,19,22,.06), 0 8px 24px -12px rgba(18,19,22,.18)`, oscuro `0 1px 2px rgba(0,0,0,.3)`): Hoy, filas de anden, paneles.
- **Doble aro** (`0 0 0 Npx var(--bg), 0 0 0 Mpx var(--ink)`): estacion proxima (4/7px), mini linea "aqui" (3/5px), terminal (4/9px), transbordo (5/10px; 3/6px en movil), foco (2/4px).

### Named Rules
**The Ring Means Here Rule.** El doble aro marca un lugar con significado: donde estas, un transbordo, una terminal o el foco del teclado. No se usa como adorno.

## Shapes

Pildora para lo que se toca (botones, insignias), circulo para estaciones, cuadro de esquina suave para pictogramas (radio = 18% del lado), paneles a 16px y filas a 12px. Las vias son barras de 8px con extremos redondeados; las aristas del mapa, trazos de 10px con punta redonda.

## Components

### Boton pildora
- **Forma:** pildora (999px), alto minimo 44px.
- **Primario:** `--pill` sobre `--pill-ink`, 700. En Hoy: 12px 32px, 1rem.
- **Hover:** toma el color de la linea del contexto (`--line-c`, o `--accent` sin linea) con texto `--l-ink`; sobre L5, `--l5-ink`. En filas de anden pasa a L5 con `--l5-ink`.
- **Ghost:** transparente con filete `--line` (base heredada).

### Insignia de linea
Pildora con "L" y numero (L1), fondo de linea, texto `--l-ink`, 800 condensada, 0.875rem, alto 2.1em. Dentro de la banda de Hoy se invierte: fondo blanco, numero del color de la linea.

### Cuadro de pictograma
Cuadrado de lado `--pb` (44px por defecto; 48 a 56px en filas y mapa; monumental en Hoy y cabecera de leccion), fondo `--line-c`, pictograma blanco al 62%. En L5 el trazo es `--l5-ink`.

### Banda de Hoy
Franja de lado a lado en el borde superior del panel Hoy, del color de la linea: insignia invertida, nombre de la linea y estado ("En curso", "Proxima estacion", "Todo recorrido") en condensada mayuscula. Es letrero de anden, no una etiqueta sobre el titulo. Debajo: cuadro monumental, nombre de estacion en display, mini linea con "estas aqui", minutos, pildora Entrar/Retomar y racha.

### Riel de estaciones
Barra de 8px en `--line` (via sin recorrer) con el tramo pintado del color de la linea encima, hasta la ultima estacion recorrida (`--done` de 0 a 1). Estaciones: disco de 44px, borde de 6px del color, fondo panel, pictograma del color. Recorrida: disco relleno, pictograma blanco. Proxima: doble aro. Debajo, nombre en 700 y estado en condensada mayuscula xs ("estacion 2 · ~12 min", "recorrida · 4/5").

### Filas de salidas (por pasar hoy)
Filas apiladas con 8px de separacion, fondo panel, radio 12px, sombra ambiental, alto minimo 80px: cuadro de pictograma de 56px, titulo con detalle muted, numero grande tabular con unidad pequena, pildora Repasar. Bajo 560px la pildora se oculta y toda la fila queda como enlace.

### Terminal (practica)
Sin fondo ni sombra. Un tramo de via de 10px del color de la linea entra por la izquierda al cuadro de 52px, que lleva doble aro (4px fondo, 9px tinta); nombre en title, descripcion muted sm.

### Mapa: estacion y transbordo
Aristas de 10px coloreadas por tipo de relacion (L3 fundamento, L7 aplicacion, L8 material compartido; 14px al activarse; 8px en movil). Propuesta: trazo punteado de 7px en `--stage-line` (dasharray 2 14). Estacion: cuadro de 48px en tinta con pictograma del color del fondo y halo de 5px; nombre condensado mayuscula sobre una placa del color del fondo. Transbordo (grado 3 o mas): anillo exterior de tinta de 10px. Seleccionada: cuadro L1, escala 1.12. Leyenda con muestras de linea de 26 por 7px.

### Panel
Contenedor base: fondo panel, filete `--line`, radio 16px, 24px de padding, sombra ambiental. Lo usan el desafio, el detalle del mapa, la biblioteca y las secciones de leccion. Opciones del desafio con disco de letra A a D (28px, pildora; `--ok` o `--bad` al responder).

### Pictogramas
`shared/pictograms.js`. Rejilla de 24, `fill: none`, trazo de 2.4 con puntas y uniones redondas, siempre en `currentColor` sobre un cuadro de color. Geometria simple de primitivas (circulos, rectangulos de radio 1.5, polilineas). Uno por tema del mapa, por leccion (clave `track/slug`) y por modulo de practica; si falta, cae a `gestion`. Decorativos por defecto (`aria-hidden`); con `label` pasan a `role="img"`.

### Movimiento
Una sola firma: el tramo pintado anima su ancho en 900ms con `cubic-bezier(.16,1,.3,1)` (salida rapida, frenado largo) al cargar. Las estaciones del mapa usan 200ms `cubic-bezier(.2,.8,.2,1)` en hover (escala 1.06). Con `prefers-reduced-motion: reduce` se apagan todas las transiciones y animaciones.

## Do's and Don'ts

### Do:
- **Do** asignar la linea con `--line-c: var(--lN)` y dejar que el color pinte el objeto completo.
- **Do** usar `--l5-ink` (clase `.l5`) en todo lo que vaya sobre L5.
- **Do** dibujar pictogramas nuevos en la rejilla de 24 con trazo 2.4 redondo y registrarlos en `PICTOS`.
- **Do** poner la descripcion de seccion al lado del h2 (`.red-h`), en muted 0.875rem.
- **Do** marcar "estas aqui", transbordo y foco con el doble aro (fondo, luego tinta).
- **Do** pintar la via solo hasta la ultima estacion recorrida; lo demas queda en `--line`.

### Don't:
- **Don't** poner etiquetas (eyebrow, kicker) encima de los titulos. La banda de Hoy es letrero de linea a todo lo ancho, no un rotulo flotante.
- **Don't** armar rejillas de tarjetas iguales con icono arriba; las cosas de la red son estaciones, filas o terminales.
- **Don't** usar bordes laterales de color (side-stripe) en tarjetas o avisos.
- **Don't** usar el color de linea como acento suelto; el color es duenio de bandas completas.
- **Don't** agregar una segunda animacion de firma ni movimiento que no se apague con reduced motion.
- **Don't** usar el logo, el nombre ni la tipografia del Metro de la CDMX como marca.
