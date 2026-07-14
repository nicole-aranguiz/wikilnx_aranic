import React from 'react';

const Nginx = () => {
  return (
    <div className="content">
      <h1>Configuración de Servidores (Nginx)</h1>
      <p>Nginx es un servidor web de alto rendimiento, balanceador de carga y proxy inverso.</p>
      
      <h2>Conceptos fundamentales</h2>
      <ul>
        <li><strong>Arquitectura:</strong> Basado en eventos, no bloqueante.</li>
        <li><strong>Proxy Inverso:</strong> Actúa como intermediario entre el cliente y el servidor backend.</li>
        <li><strong>Estructura de bloques:</strong> Se configura mediante bloques `http`, `server` y `location`.</li>
      </ul>
      
      <h2>Monitoreo y Mantenimiento</h2>
      <ul>
        <li>Es vital revisar los logs de error para diagnosticar problemas de conexión.</li>
        <li>La estructura de configuración permite gestionar múltiples servicios desde un solo punto.</li>
      </ul>
    </div>
  );
};

export default Nginx;