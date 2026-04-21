# Hypatia (public)

**Adaptive learning for UNAM Area 1 and AWS SAA-C03** — static HTML/JS only, safe to open-source and deploy.

Bite-sized study sessions, visual feedback, and gamified progress.

This folder is the **public mirror**: CubPrep + PrepAWS assets only. It stays free of PDFs, ingestion scripts, API keys, and personal study files. Canonical pipelines and full history live in the private repo (`Hypatia-internt`). Never push credentials or personal files to this public repo.

## Modules

| Module | Path | Questions | Notes |
|--------|------|-----------|--------|
| **CubPrep** | [CubPrep/](./CubPrep/) | 6,570 | Loads `questions_by_materia/*.js` + optional `enhanced_explanations.json` |
| **PrepAWS** | [SAA-C03/](./SAA-C03/) | 522 | Self-contained `index.html` + `questions.js` |

## Local preview

Each module is a self-contained HTML app. **Always serve via HTTP**, never open `file://` directly (split scripts will not load from disk URLs).

```bash
cd Hypatia-public
python3 -m http.server 8080 --bind 0.0.0.0
```

Then open `http://localhost:8080/` (hub), `http://localhost:8080/CubPrep/`, or `http://localhost:8080/SAA-C03/`.

On Windows you can also double-click `iniciar.bat` if present in your checkout.

### Local network sharing

Same Wi‑Fi: use `http://<host-ip>:8080/`. See [NETWORK_ACCESS.md](./NETWORK_ACCESS.md).

## Syncing from the private Hypatia repo

After the private tree updates `CubPrep/questions.js` (explanations, topics, etc.):

1. **Regenerate split question files** (the app does **not** load the monolithic `questions.js` at runtime; it loads `questions_by_materia/*.js`):

   ```bash
   python3 ../Hypatia/split_cubprep_questions.py \
     --input ../Hypatia/CubPrep/questions.js \
     --output-dir ./CubPrep/questions_by_materia
   ```

2. **Copy the bundle** (optional archive / tooling parity):

   ```bash
   cp ../Hypatia/CubPrep/questions.js ./CubPrep/questions.js
   ```

3. **Optional study metadata** for CubPrep (`fetch("enhanced_explanations.json")`):

   ```bash
   (cd ../Hypatia/CubPrep && node export_enhanced_json.mjs)
   cp ../Hypatia/CubPrep/enhanced_explanations.json ./CubPrep/enhanced_explanations.json
   ```

4. **HTML** — when the private `CubPrep/index.html` or `study-guide.html` changes, copy those files into this repo’s `CubPrep/`.

## Deploy

### Netlify

Repo root is already the publish directory (`netlify.toml` sets `publish = "."`). Connect the GitHub repo and deploy; entry URLs are `/CubPrep/` and `/SAA-C03/`.

### Google Cloud Storage (static bucket + HTTPS)

Replace `YOUR_BUCKET` with a globally unique bucket name.

```bash
cd Hypatia-public
gcloud storage buckets create gs://YOUR_BUCKET --location=us-central1 --uniform-bucket-level-access
gcloud storage buckets update gs://YOUR_BUCKET --website-main-page-suffix=index.html
gcloud storage rsync -r -d . gs://YOUR_BUCKET
```

Then map a load balancer or Cloud CDN backend bucket, or use **Firebase Hosting** / **Cloud Run** with a static file image if you prefer TLS at the edge without manual LB setup.

## Philosophy

Short sessions, clear feedback, retries without punishment, and explanations that say *why* — built for self-paced prep.

## Tech stack

HTML5, CSS3, vanilla JS, `localStorage`. No bundler.

## License

MIT
