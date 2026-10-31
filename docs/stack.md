# Architecture and place in the stack

Runs static practice modules in the browser. CubPrep and MLOps share an exam engine, SAA-C03 keeps its own implementation, and Flashcards uses its own FSRS scheduler.

[Open the explanatory diagram](diagrams/system-map.html). Download and open the HTML in a browser; GitHub shows its source. Select a node to read its inputs, outputs and implementation.

## Components

1. **Question banks.** Provide questions grouped by subject. Input: Module-specific JavaScript question files. Output: Questions for CubPrep and MLOps. [Implementation: CubPrep/questions_by_materia](../CubPrep/questions_by_materia).
2. **Shared engine.** Implements reusable exam interaction and persistence. Input: Question banks and answers. Output: Feedback and browser progress. [Implementation: shared/engine.js:1](../shared/engine.js#L1).
3. **CubPrep and MLOps.** Present exam practice through the shared engine. Input: User choices and module questions. Output: Practice sessions in the browser. [Implementation: MLOps/index.html:399](../MLOps/index.html#L399).
4. **SAA-C03.** Provides the AWS exam module with its own implementation. Input: AWS questions and user answers. Output: Exam feedback and local progress. [Implementation: SAA-C03/index.html:1](../SAA-C03/index.html#L1).
5. **Browser storage.** Keeps module progress in this browser. Input: Saved module statistics. Output: Progress for later sessions on the same origin. [Implementation: shared/engine.js:247](../shared/engine.js#L247).
6. **Static delivery.** Serves files directly, or through learning-surface. Input: HTML, CSS and JavaScript. Output: A browser-accessible practice app. [Implementation: index.html:1](../index.html#L1).
7. **Flashcard decks.** Provide the cards for spaced repetition. Input: Deck JSON files. Output: Cards ready for review. [Implementation: Flashcards/decks](../Flashcards/decks).
8. **FSRS scheduler.** Calculates review scheduling from ratings. Input: A card state and the review rating. Output: Updated scheduling values. [Implementation: Flashcards/fsrs.js:1](../Flashcards/fsrs.js#L1).
9. **Flashcards app.** Combines decks, ratings and the scheduler. Input: Review activity. Output: Saved review state in localStorage. [Implementation: Flashcards/index.html:109](../Flashcards/index.html#L109).

## Boundaries and operation

No compilation step or backend is required. Serve the files over HTTP so module scripts and browser storage use a stable origin.

Progress in localStorage is specific to a browser and origin. Opening a different host or port does not automatically recover the same progress.

The shared engine is not universal: SAA-C03 is standalone and Flashcards uses FSRS. Question-bank maintenance and validation are separate from runtime practice.

learning-surface copies these modules into its bundle. This repo does not download books or send localStorage directly to ai-memory.

## Related repositories

| Repository | Role | Responsibility |
|---|---|---|
| [learning-stack](https://github.com/G10hdz/learning-stack) | Coordinates the stack | Registry, submodules and cross-repo contracts. |
| [founder-guide](https://github.com/G10hdz/founder-guide) | Acquires and retrieves sources | Own catalog, books, transcripts and cited answers. |
| [capital-cultural](https://github.com/G10hdz/capital-cultural) | Produces study material | Own ingestion, NotebookLM summaries and LaTeX/PDF briefs. |
| [capital-cultural-automatico](https://github.com/G10hdz/capital-cultural-automatico) | Automates personal study | Separate repo with the same catalog, vault and brief contracts. |
| [ai-coach](https://github.com/G10hdz/ai-coach) | Practices communication | Interviews, speaking and pitch drills with feedback. |
| [Hypatia](https://github.com/G10hdz/Hypatia) | Practices knowledge | Exam modules and FSRS flashcards. |
| [vault-sync](https://github.com/G10hdz/vault-sync) | Publishes selected memory | Declared Markdown lanes to ai-memory namespaces. |
| [learning-surface](https://github.com/G10hdz/learning-surface) | Provides app access | Bundles practice apps and serves them in the tailnet. |

The shared architecture is maintained in [learning-stack](https://github.com/G10hdz/learning-stack/blob/main/docs/architecture.md). These are repository responsibilities, not proof that services are deployed or jobs are scheduled.

## Verification boundary

Paths and component responsibilities trace to the linked source. Live credentials, provider availability, actual schedules and synchronization of personal data need installation-specific checks.
