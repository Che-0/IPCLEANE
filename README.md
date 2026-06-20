## 🔍 ¿Por qué nació este proyecto?

Antes, cuando tenía que investigar direcciones IP en análisis de incidentes o logs, me tocaba ir de plataforma en plataforma buscando la misma IP una y otra vez. Tampoco es que me llevara 30 horas ir a las paginas que tenia en mis marcadores, copiar, pegar y buscar la IP perooo, si pudiera tener todo en uno.

Con **IP CLEANER**, centralizo ese flujo de trabajo: **introduces la IP una sola vez y puedes consultarla en múltiples herramientas externas con un solo clic**. No es un cambio revolucionario para la humanidad, pero a mi me gusto

---

## 🏗️ Estado Actual y Funcionalidades

La aplicación está diseñada en dos secciones principales para optimizar el análisis de redes y logs:

### 1. 📁 Filtrado y Limpieza de Logs (Sección Izquierda)
Permite procesar archivos de texto para extraer y clasificar direcciones IP de forma masiva:
* **Carga de Archivos:** Selector para subir archivos `.txt` de logs.
* **Filtros Inteligentes:** Clasificación en tiempo real mediante botones interactivos:
  * `ALL IP`: Extrae absolutamente todas las IPs encontradas.
  * `PRIVATE`: Filtra solo los rangos de IPs privadas (ej. 192.168.x.x, 10.x.x.x).
  * `PUBLIC`: Aísla las IPs públicas orientadas a Internet.
  * `BROADCAST`: Detecta direcciones de difusión.
  * `DUPLICATES`: Limpia el ruido eliminando las IPs repetidas.
* **Exportación:** Área de visualización de resultados y opción para descargar la salida limpia en un nuevo archivo `.txt`.

*Nota de desarrollo:* Estoy planeando rediseñar esta sección para que el procesamiento y la visualización no saturen la misma página, haciendo el flujo más limpio. 

### 2. 🌐 Threat Intelligence & Consulta Rápida (Sección Derecha)
Un panel de búsqueda unificada conectado a las principales plataformas de seguridad. Introduces la IP y mediante el botón de la lupa (`🔍`) abres consultas directas en:
* **AbuseIPDB** (Reputación y reportes de abuso)
* **VirusTotal** (Análisis de malware y amenazas asociadas)
* **Sucuri** (Seguridad web y listas negras)
* **MXToolbox** (Diagnóstico de red y registros DNS)

---

## 🐈 El Gato
El proyecto cuenta con la supervisión estricta de nuestro Michi de seguridad informática en la esquina inferior. 🐱
