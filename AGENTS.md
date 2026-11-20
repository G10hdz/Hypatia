# Instrucciones para agentes

## Ramas

- `main` es lo publicado. Vercel publica cada push a `main`.
- `develop` junta el trabajo en curso. Cada cambio sale de una rama corta desde `develop` (`feature/...`, `fix/...`, `chore/...`) y entra por PR con base `develop`.
- Lo que toca el frontend (portada, lecciones, guías, `shared/`, estilos) se itera en `develop` hasta que esté terminado: probado en navegador, en escritorio y en celular. Pasa a `main` solo cuando Gio dice que la versión es final.
- No hacer merge a `main` ni desplegar sin su visto bueno.

## Verificación

- Antes de abrir un PR: `./scripts/ci-local.sh` (los mismos pasos que `.github/workflows/ci.yml`, más gitleaks). Actions corre en cada PR; si no corre, el CI local es la evidencia.
- Un check en verde no aprueba contenido: las lecciones siguen `Labs/AGENTS.md`.

## Contenido

- Repo público: sin nombres, correos ni listas de acceso de personas, sin links de NotebookLM ni de bibliotecas piratas. Los tracks personales (brillo propio, psicología oscura) van solo en el repo privado.
