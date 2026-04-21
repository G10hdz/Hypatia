# Hypatia

**Adaptive learning for neurodivergent minds** — short sessions, clear feedback, and low-friction retries. Static HTML apps, no build step.

## Modules

| Module | What |
|--------|------|
| [**CubPrep**](./CubPrep/) | UNAM Area 1 exam practice |
| [**PrepAWS**](./SAA-C03/) | AWS Solutions Architect Associate (SAA-C03) practice |

## Run locally

Serve over HTTP (required for module scripts and storage):

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080/` for the hub, or go straight to `CubPrep/index.html` or `SAA-C03/index.html`.

## License

MIT
