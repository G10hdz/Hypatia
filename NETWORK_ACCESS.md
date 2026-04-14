# Hypatia - Access from Network

## For other PCs on the local network

### URLs to use:
- **Home:** `http://<host-ip>:8080/` (replace `<host-ip>` with the host's local IP)
- **CubPrep:** `http://<host-ip>:8080/CubPrep/`
- **Study Guide:** `http://<host-ip>:8080/CubPrep/study-guide.html`
- **PrepAWS:** `http://<host-ip>:8080/SAA-C03/`

### Why NOT use file://:
Opening HTML files directly from a shared folder (`file://`) breaks JavaScript loading and causes the guide to fail. **Always use the HTTP server URLs.**

### How to keep the server running:
The server runs as a background process on Gio's PC. If it stops, run:
```bash
cd ~/Vscode-projects/Hypatia && python3 -m http.server 8080 --bind 0.0.0.0 &
```
