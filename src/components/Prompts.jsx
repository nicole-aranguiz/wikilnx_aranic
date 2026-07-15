import React from 'react';

const Prompts = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bitácora de Desarrollo: Historial de Prompts</h1>
      <p>
        A continuación, se detalla la interacción realizada con el asistente de IA 
        para la estructuración, desarrollo y documentación del despliegue:
      </p>

      <ol style={{ lineHeight: '2' }}>
        <li><strong>Estructura Inicial:</strong> "Necesito estructurar un informe técnico sobre el despliegue de una wiki en Nginx siguiendo una guía de 6 puntos. ¿Cómo puedo organizarlo de forma que cada paso sea claro?"</li>
        
        <li><strong>Configuración Técnica:</strong> "¿Cuál es la configuración correcta (la 'receta') para un archivo en /etc/nginx/sites-available/wiki para que funcione una aplicación tipo SPA?"</li>
        
        <li><strong>Validación de Permisos:</strong> "He ejecutado el comando ls -l /var/www/wiki y obtuve este resultado [imagen]. ¿Es correcto para asegurar que el propietario sea www-data?"</li>
        
        <li><strong>Resolución de Build:</strong> "¿Cómo puedo documentar el proceso de construcción del sitio (npm run build) si lo realicé en Windows pero el despliegue es en una máquina virtual?"</li>
        
        <li><strong>Redacción de Evidencias:</strong> "Ayúdame a redactar el texto explicativo para mi captura de pantalla del archivo de configuración (Punto 4), asegurando un tono técnico."</li>
        
        <li><strong>Estructura en React:</strong> "¿Cómo puedo organizar el código en React para que cada uno de los 6 puntos de la guía sea una sección independiente con su propia imagen?"</li>
        
        <li><strong>Revisión de Evidencias:</strong> "Tengo esta captura de pantalla de la terminal con el comando node -v y npm -v. ¿Sirve como pantallazo para el punto 2?"</li>
        
        <li><strong>Documentación Final:</strong> "Necesito un formato de 'bitácora' o anexo para documentar estos prompts en mi informe, de manera que el docente vea el proceso de trabajo."</li>
      </ol>
    </div>
  );
};

export default Prompts;