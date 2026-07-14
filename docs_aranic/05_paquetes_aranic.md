# 05_paquetes_aranic

## Criterio 3.1.4: Gestión de Paquetes con APT

En esta sección se documenta el proceso de gestión de software utilizando el gestor de paquetes `apt`, aplicando criterios de factibilidad y seguridad.

### 1. Búsqueda de Paquetes (`apt search`)
Antes de instalar, se busca el paquete para confirmar su existencia y nombre exacto en los repositorios oficiales.
* **Comando:** `apt search <nombre_paquete>`
![Búsqueda](img_aranic/05_search.png)

### 2. Información del Paquete (`apt show`)
Se verifica la información detallada del paquete (dependencias, tamaño, versión) para evaluar su factibilidad e impacto en el sistema.
* **Comando:** `apt show <nombre_paquete>`
![Detalle](img_aranic/05_show.png)

### 3. Instalación (`apt install`)
Una vez validada la compatibilidad y necesidad del software, se procede a la instalación.
* **Comando:** `sudo apt install <nombre_paquete>`
![Instalación](img_aranic/05_install.png)

### 4. Criterio de Factibilidad
La instalación de software sigue estos principios:
* **Necesidad:** Solo se instalan paquetes requeridos para el funcionamiento del servidor.
* **Seguridad:** Se verifica que el paquete provenga de fuentes oficiales de Ubuntu.
* **Impacto:** Se revisan las dependencias mediante `apt show` para evitar conflictos con servicios existentes.