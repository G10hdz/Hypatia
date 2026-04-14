# Hypatia

**Adaptive learning platform for neurodivergent minds.**

Bite-sized study sessions, visual feedback, and gamified progress. Built for UNAM Area 1 & AWS SAA-C03 certifications.

> **Repo:** This is the private repo at `https://github.com/G10hdz/Hypatia-internt`.
> The public repo `G10hdz/Hypatia` is a stripped mirror — never push credentials or personal files there.

## Modules

| Module | What | Questions | Status |
|--------|------|-----------|--------|
| [**CubPrep**](./CubPrep/) | UNAM Area 1 exam simulator | 6,570 | ✅ Built |
| [**PrepAWS**](./SAA-C03/) | AWS SAA-C03 certification | 522 | ✅ MVP ready |

## How to Use

Each module is a self-contained HTML app. **Always serve via HTTP**, never open `file://` directly.

```bash
# From repo root:
python3 -m http.server 8080 --bind 0.0.0.0
# Then visit http://localhost:8080
```

Or on Windows: double-click `iniciar.bat`

## Local Network Sharing

If you're on the same network as the host machine, use: `http://<host-ip>:8080/`
See [NETWORK_ACCESS.md](./NETWORK_ACCESS.md) for details.

## Philosophy

Traditional education systematically fails neurodivergent students. Hypatia fixes that with:

- **Short sessions** — 10-15 question blocks, not 45-min lectures
- **Visual feedback** — confetti, streaks, progress rings
- **Zero-penalty retries** — learn by doing, not by failing
- **Immediate explanations** — understand why, not just what
- **Self-paced** — no pressure timers, only gap detectors

## Tech Stack

- HTML5 + CSS3 + Vanilla JS (zero dependencies)
- `localStorage` for persistence
- Python for ingestion pipelines and AI explanations

## License

MIT
