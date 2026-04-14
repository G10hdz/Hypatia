@echo off
echo.
echo ================================
echo   Hypatia - Servidor Local
echo ================================
echo.
echo Abriendo servidor en http://localhost:8080/
echo.
echo Presiona Ctrl+C para detener el servidor
echo.
echo --------------------------------
echo.

python -m http.server 8080 --bind 0.0.0.0

pause
