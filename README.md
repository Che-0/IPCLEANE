## 🔍 ¿Por qué nació este proyecto?

Antes, cuando tenía que investigar direcciones IP, me tocaba ir de página en página (VirusTotal, AbuseIPDB, etc.) buscando la misma IP una y otra vez. 

Con esta herramienta, **solo introduces la IP una sola vez y el programa la consulta en el resto de las páginas automáticamente**. ¿Es un cambio revolucionario para la humanidad? No lo creo, pero a mi me gusta hahah

---

## 🏗️ Estado Actual y Funcionalidades

Actualmente el diseño está en desarrollo (¡un desastre feliz!), pero la estructura principal se divide en dos secciones:

### 1. 📁 Filtrado de Logs (Sección Izquierda / Principal)
* **Carga de archivos:** Subes un archivo `.txt` con los logs que quieras analizar.
* **Filtros inteligentes:** El programa filtra las direcciones IP según las opciones que selecciones (*Todas, Privadas, Broadcast, etc.*).
* **Resultados y Exportación:** Las IPs filtradas aparecen en la parte inferior y te da la opción de descargar la salida limpia en un nuevo archivo `.txt`.
* *Nota mental:* Estoy pensando en modificar esto para que el proceso no ocurra todo en la misma página y sea más limpio. 🤔

### 2. 🌐 Consulta Rápida de IPs (Sección Derecha)
* Introduces la dirección IP que quieres investigar.
* Cada página de consulta tiene el icono de una lupa (`🔍`). Al darle clic, te redirige directamente a esa plataforma externa con la IP ya consultada.

---

## 🐈 El Gato
*(¡Y por supuesto, no nos podemos olvidar del gato del proyecto! 🐱)*
