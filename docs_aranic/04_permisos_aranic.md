# 04_permisos_aranic

## Criterio 3.1.3: Gestión de Permisos y Propiedad

Esta sección documenta el control de acceso a archivos y directorios mediante los comandos `chmod` y `chown`, asegurando la integridad del sistema.

### 1. Lectura de Permisos
Los permisos en Linux definen quién puede leer (r), escribir (w) y ejecutar (x) un archivo. Se verificaron mediante `ls -l`.
* **Evidencia:**
![Lectura permisos](img_aranic/04_ls_permisos.png)

### 2. Comando chmod
Se utilizó `chmod` para modificar los modos de acceso de archivos críticos.
* **Comando:** `sudo chmod 755 archivo.sh`
* **Explicación:** Se otorgaron permisos de lectura, escritura y ejecución al propietario, y lectura/ejecución al grupo y otros.

### 3. Comando chown
Se utilizó `chown` para cambiar el dueño y grupo de un archivo, asegurando que el servicio web tenga los permisos correctos.
* **Comando:** `sudo chown www-data:www-data /var/www/html/index.html`
![Cambio de dueño](img_aranic/04_chown.png)

### 4. Permiso Especial (Sticky Bit)
Se implementó un permiso especial para proteger archivos en directorios compartidos.
* **Comando:** `sudo chmod +t /directorio_compartido`
* **Explicación:** El *sticky bit* asegura que solo el propietario del archivo pueda borrarlo, evitando la eliminación accidental por parte de otros usuarios.
![Permiso Especial](img_aranic/04_sticky_bit.png)