import React from 'react';

const Inicio = () => {
  return (
    <div className="content">
      <h1>Bienvenida a mi Wiki Linux</h1>
      
      <p>
        Este es mi espacio personal de documentación técnica, diseñado para consolidar mi 
        aprendizaje en el mundo de los sistemas basados en Linux. Aquí registro desde 
        configuraciones de servidores hasta buenas prácticas de seguridad y gestión de software.
      </p>

      <h2>Mi ruta de aprendizaje</h2>
      <p>
        Como estudiante de ingeniería, entiendo que la mejor forma de dominar una tecnología 
        es documentándola. En este sitio encontrarás:
      </p>
      
      <ul>
        <li><strong>Configuración de servidores:</strong> Apuntes sobre Nginx, gestión de servicios y más.</li>
        <li><strong>Licencias de Software:</strong> Análisis y resumen de normativas y tipos de licencias.</li>
        <li><strong>Seguridad:</strong> Herramientas, buenas prácticas y hardening de sistemas.</li>
        <li><strong>Proyectos:</strong> Bitácoras de los desarrollos que voy realizando.</li>
      </ul>

      <p>
        <em>"La mejor manera de aprender algo es enseñándolo."</em> – ¡Gracias por acompañarme en este camino!
      </p>
    </div>
  );
};

export default Inicio;