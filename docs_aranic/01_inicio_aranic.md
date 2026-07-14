# 01_inicio_aranic

## Portada
* **Asignatura:** Sistemas Operativos (T13V35)
* **Estudiante:** Nicole Aránguiz
* **Evaluación:** Sumativa N°3 - Linux Server

## Objetivo del Laboratorio
El propósito de este laboratorio es la administración de un servidor Linux (Ubuntu Server 24.04) mediante línea de comandos. Se busca ejecutar el proceso de despliegue, integración de servicios y hardening (endurecimiento) de un dispositivo en un entorno de sistema operativo Linux.

## Topología del Laboratorio
El entorno consiste en una única máquina virtual (VM) con Ubuntu Server, configurada bajo las siguientes condiciones:
* **Conectividad:** Se utiliza una red NAT con reenvío de puertos para permitir la salida a internet y el acceso desde el anfitrión.
* **Gestión:** La administración se realiza exclusivamente por terminal (SSH), simulando un entorno de servidor real sin interfaz gráfica[cite: 1].
* **Publicación:** El servidor web Nginx publica este sitio directamente desde la máquina virtual, demostrando la capacidad de despliegue del estudiante[cite: 1].

![Topología del sistema](img_aranic/01_topologia.png)