# 02_licencias_aranic

## Criterio 3.1.1: Licenciamiento y Software Libre

El sistema operativo Ubuntu Server opera bajo un marco legal basado en el software libre, lo cual permite la libre distribución y modificación de sus componentes.

### 1. Conceptos Clave
* **Software Libre:** Garantiza la libertad de ejecutar, estudiar, cambiar y redistribuir el software.
* **Copyleft:** Mecanismo que asegura que las libertades se mantengan en versiones derivadas (ej. GPL).
* **Licencias Permisivas:** Permiten el uso con mínimas restricciones (ej. BSD, MIT)[cite: 1].
* **Software Propietario:** Software con restricciones legales y de código cerrado[cite: 1].

### 2. Evidencia en el Servidor
Se exploró el directorio `/usr/share/common-licenses/` para identificar las licencias presentes en el sistema.

**Lista de licencias encontradas:**
![Lista de licencias](img_aranic/02_licencias.png)

**Análisis de Licencias:**
* **Copyleft (GPL-3):** Se verificó la licencia GPL-3, la cual protege las libertades de los usuarios mediante la obligación de mantener el software como libre en toda modificación[cite: 1].
  ![Detalle Copyleft](img_aranic/03_licencias.png)

* **Licencias Permisivas:** Se analizó el archivo `man2html` que utiliza una licencia de estilo MIT, la cual permite la redistribución con menos restricciones que el Copyleft[cite: 1].
  ![Detalle Permisivas](img_aranic/04_licencia_copyright.png)