import React from 'react';

const Instalacion = () => {
  return (
    <div className="content">
      <h1>Guía de Instalación</h1>
      
      <p>
        En esta sección documento los pasos necesarios para desplegar entornos Linux, 
        enfocándome en distribuciones como Ubuntu Server y Debian.
      </p>

      <h2>Preparación del entorno</h2>
      <p>Antes de comenzar con la instalación, asegúrate de tener lo siguiente:</p>
      <ul>
        <li>Imagen ISO actualizada de la distribución.</li>
        <li>Un entorno de virtualización (Proxmox, VirtualBox o VMware).</li>
        <li>Conexión a internet para la descarga de paquetes iniciales.</li>
      </ul>

      <h2>Pasos principales</h2>
      <p>
        El proceso se divide generalmente en estas etapas clave:
      </p>
      <ul>
        <li><strong>Configuración de red:</strong> Asignación de IP estática y configuración de DNS.</li>
        <li><strong>Particionado:</strong> Esquema sugerido para particiones (/boot, /, swap).</li>
        <li><strong>Actualización del sistema:</strong> Ejecución de <code>sudo apt update && sudo apt upgrade -y</code>.</li>
      </ul>
      
      <p><em>Recuerda siempre verificar los logs de instalación si algo no sale como esperabas.</em></p>
    </div>
  );
};

export default Instalacion;