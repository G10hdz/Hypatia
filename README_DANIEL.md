# Hypatia - Guía para Daniel

## Opción 1: Si Gio está en línea (más fácil)
Solo abre estos links en tu navegador:
- **Inicio:** `http://192.168.0.183:8080/`
- **CubPrep:** `http://192.168.0.183:8080/CubPrep/`
- **Guía de Estudio:** `http://192.168.0.183:8080/CubPrep/study-guide.html`

⚠️ **NO** abras los archivos directamente desde una carpeta compartida (`file://`), **siempre usa los links de arriba**.

---

## Opción 2: Si Gio NO está (tú lo corres en tu PC)

### Paso 1: Instalar Python (solo una vez)
1. Ve a https://www.python.org/downloads/
2. Descarga la última versión de Python 3
3. ⚠️ **IMPORTANTE:** Al instalar, marca la casilla **"Add Python to PATH"**
4. Ejecuta el instalador

### Paso 2: Descargar Hypatia
1. Descarga el proyecto como ZIP:
   - Ve a: https://github.com/G10hdz/Hypatia/archive/refs/heads/main.zip
   - O usa Git si lo tienes instalado: `git clone https://github.com/G10hdz/Hypatia.git`
2. Descomprime el ZIP en una carpeta fácil, ej: `C:\Hypatia`

### Paso 3: Iniciar el servidor
1. Abre la carpeta `C:\Hypatia`
2. Haz **doble clic** en el archivo **`iniciar.bat`**
3. Se abrirá una ventana negra (no la cierres)
4. Abre tu navegador y ve a: **`http://localhost:8080/`**

### Paso 4: Usar Hypatia
Desde `http://localhost:8080/` puedes acceder a:
- **CubPrep:** `http://localhost:8080/CubPrep/`
- **Guía:** `http://localhost:8080/CubPrep/study-guide.html`
- **PrepAWS:** `http://localhost:8080/SAA-C03/`

### Para detener el servidor:
Cierra la ventana negra que se abrió (la terminal).

---

## Problemas comunes

### "python3 no se reconoce como comando"
- Python no está en PATH. Reinstala Python y marca **"Add Python to PATH"**

### "El puerto 8080 ya está en uso"
- Ya tienes otro servidor corriendo. Cierra la ventana negra anterior o cambia el puerto en `iniciar.bat` a `8081`

### "La guía no carga"
- Asegúrate de usar `http://localhost:8080/...` y **NO** abrir los archivos directamente desde la carpeta
