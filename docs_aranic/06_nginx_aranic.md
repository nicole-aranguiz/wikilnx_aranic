# 06_nginx_aranic

## Criterio 3.1.4: Instalación y Configuración de Nginx

En esta sección se detalla el proceso de instalación del servidor web Nginx y la configuración de un sitio web básico servido directamente desde el servidor Linux.

### 1. Instalación de Nginx
Se procedió a la instalación del servidor web utilizando el gestor de paquetes `apt` tras actualizar los repositorios.
* **Comando:** `sudo apt install nginx -y`
![Instalación Nginx](img_aranic/06_nginx_install.png)

### 2. Verificación del Servicio
Se confirmó que el servicio Nginx se encuentra activo y ejecutándose correctamente.
* **Comando:** `systemctl status nginx`
![Estado Nginx](img_aranic/06_nginx_status.png)

### 3. Sitio Servido desde Linux (Evidencia Clave)
Se creó un archivo HTML básico en `/var/www/html/` para verificar que el servidor entrega contenido al navegador.
* **Captura del sitio en el navegador:**
![Sitio Web Nginx](img_aranic/06_nginx_sitio.png)