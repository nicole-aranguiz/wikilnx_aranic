# 03_instalacion_aranic

## Criterio 3.1.2: Instalación y Configuración Básica

En esta sección se detalla la configuración inicial realizada en el servidor Ubuntu Server 24.04 para garantizar un entorno funcional y seguro.

### 1. Hostname e Identificación
Se configuró el nombre del equipo (hostname) para facilitar la identificación dentro de la red.
* **Comando utilizado:** `hostnamectl`
![Hostname](img_aranic/03_hostname.png)

### 2. Configuración de Red (IP)
Se verificó la conectividad mediante la asignación de IP estática/dinámica, utilizando la interfaz de red `enp0s3`.
* **Comando utilizado:** `ip a`
![Dirección IP](img_aranic/03_ip.png)

### 3. Actualización del Sistema
Para mantener el servidor seguro, se actualizaron los repositorios y los paquetes del sistema.
* **Comandos:** `sudo apt update && sudo apt upgrade -y`
![Actualizaciones](img_aranic/03_upgrade.png)

### 4. Firewall (UFW)
Se habilitó el cortafuegos (UFW) para restringir el tráfico no autorizado, permitiendo solo las conexiones necesarias (como SSH).
* **Comando:** `sudo ufw status`
![Estado Firewall](img_aranic/03_ufw.png)