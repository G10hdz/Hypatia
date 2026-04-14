# Hypatia - Acceso desde la red local

## Opción 1: Si el host está en línea
Pídele a Gio su IP local y abre:
- **Inicio:** `http://<IP-de-Gio>:8080/`
- **CubPrep:** `http://<IP-de-Gio>:8080/CubPrep/`
- **Guía de Estudio:** `http://<IP-de-Gio>:8080/CubPrep/study-guide.html`

⚠️ **NO** abras los archivos directamente desde una carpeta compartida (`file://`), **siempre usa los links HTTP**.

---

## Opción 2: Correr en tu propia PC

### Paso 1: Instalar Python
1. Ve a https://www.python.org/downloads/
2. Descarga Python 3 y al instalar marca **"Add Python to PATH"**

### Paso 2: Descargar Hypatia
1. Descarga el ZIP del repo privado: https://github.com/G10hdz/Hypatia-internt/archive/refs/heads/main.zip
2. Descomprime en una carpeta, ej: `C:\Hypatia`

### Paso 3: Iniciar el servidor
1. Abre la carpeta donde descomprimiste
2. Haz **doble clic** en el archivo **`iniciar.bat`**
3. Se abre una terminal (no la cierres)
4. Abre en tu navegador: **`http://localhost:8080/`**

### Para detener:
Cierra la ventana de la terminal.

---

## Problemas comunes
- **"python no se reconoce"** → Reinstala Python marcando "Add to PATH"
- **"Puerto 8080 en uso"** → Cierra la terminal anterior o cambia el puerto en `iniciar.bat`
- **"La guía no carga"** → Usa `http://localhost:8080/...` NO `file://`
