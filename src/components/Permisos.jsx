import React from 'react';

const Permisos = () => {
  return (
    <div className="content">
      <h1>Gestión de Permisos</h1>
      <p>Documentación sobre el sistema de archivos y control de acceso en Linux.</p>
      
      <h2>Conceptos clave</h2>
      <ul>
        <li><strong>Lectura (r), Escritura (w), Ejecución (x).</strong></li>
        <li><strong>Propietario, Grupo y Otros.</strong></li>
      </ul>
      
      <h2>Comandos útiles</h2>
      <code>chmod 755 archivo.sh</code>
      <br />
      <code>chown usuario:grupo archivo</code>
    </div>
  );
};

export default Permisos;