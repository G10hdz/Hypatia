# eval/ — evaluación del pipeline de lecciones

Patrón tomado de `deus-ex-machina-eval` (proyecto RSI): evaluador fijo,
tareas etiquetadas, corridas en JSONL, línea base honesta.

## Piezas

- `config.json` — umbrales y regla de éxito. Cambiarlo obliga a repetir corridas.
- `score.mjs` — el evaluador. Lo escribe y aprueba el equipo; los agentes no lo editan.
- `data/tasks.jsonl` — tareas etiquetadas: brief, sonda y `gold_findings`
  (brechas que la revisión humana encontró en corridas pasadas).
- `data/probes/<task>.py` — expectativas ejecutables del brief ("Comprobación
  aprobada") + detectores de brechas de spec. Se corren con
  `uv run --with playwright python <probe> <base-url> <out.json>`.
- `runs/<run-id>.jsonl` — evidencia append-only de cada corrida.

## Correr una evaluación

```
node eval/score.mjs --task <id> --version <v> \
  --file <ruta/index.html> --base <url> \
  [--run-id <id>] [--tokens N] [--cost-usd X] [--duration-s Y] \
  [--interventions N] [--confirmed hallazgo1,hallazgo2|none]
```

`--from-results <probe.json>` re-puntúa una sonda ya corrida sin repetir el
navegador.

## Semántica

- **Hard checks**: casos de la tabla "Comprobación aprobada" del brief.
  Deben pasar todos.
- **spec_gaps**: detectores de brechas de spec conocidas. La automatización
  propone; el humano dispone con `--confirmed` (qué brechas están realmente
  en el artefacto).
- **automation_recall**: de las brechas confirmadas, cuántas detectó la
  automatización. Mide la calidad del harness, no del artefacto.
- **false_positives**: hallazgos de la automatización que el humano no
  confirma. Deuda del detector, no del artefacto.
- **success**: preflight PASS + hard checks completos + cero brechas
  confirmadas. La rúbrica editorial humana sigue pendiente (`human_rubric`).

## Estado del harness

Detector `canvas-label-collision` está afinado a la figura de warmth-
competence (mide posiciones de texto asumidas); en flagship-v1 produjo un
falso positivo documentado. Para figuras con otro layout hay que generalizarlo
o moverlo a rúbrica humana.
