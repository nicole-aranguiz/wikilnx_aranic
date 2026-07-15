import React from 'react';

const Prompts = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', lineHeight: '1.6' }}>
      <h1>C · Bitácora del proceso y uso de IA</h1>

      {/* 1. Decisiones y Correcciones */}
      <h2>1. Registro de decisiones y correcciones (Julio 2026)</h2>
      <ul>
        <li><strong>Ayer (Julio 2026):</strong> Se decidió estructurar el informe técnico mediante una aplicación web en React, facilitando la presentación dinámica de capturas de pantalla frente al formato de informe estático.</li>
        <li><strong>Ayer (Julio 2026):</strong> Se corrigió la metodología de gestión de usuarios tras una revisión inicial, optando por asignar permisos específicos con <code>chown</code> y <code>chmod</code> en lugar de usar configuraciones globales, mejorando la seguridad.</li>
        <li><strong>Hoy (Julio 2026):</strong> Se decidió ajustar el flujo de trabajo con la IA: en lugar de generar el código completo automáticamente, se utilizó para validar la sintaxis de comandos Linux y para estructurar la redacción técnica de las evidencias.</li>
      </ul>

      {/* 2. Herramientas y fuentes */}
      <h2>2. Herramientas y fuentes utilizadas</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Herramienta</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Propósito en el proceso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Gemini (IA)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Validación de comandos, apoyo en la redacción técnica y estructuración de la bitácora.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>VS Code</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Editor de código principal para el desarrollo del sitio de evidencias.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Ubuntu Server</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Entorno de ejecución donde se validó la configuración de permisos y Nginx.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Vercel</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Plataforma utilizada para el despliegue final y publicación del proyecto.</td>
          </tr>
        </tbody>
      </table>

      {/* 3. Reflexión final */}
      <h2>3. Reflexión final sobre el proceso</h2>
      <p style={{ textAlign: 'justify' }}>
        El desarrollo de este proyecto, realizado de forma intensiva, ha sido una experiencia técnica altamente integradora. 
        Al trabajar directamente sobre una máquina virtual y documentar el proceso en React, logré consolidar mis 
        conocimientos en gestión de permisos y servicios web. La colaboración con la inteligencia artificial no 
        solo aceleró la resolución de dudas técnicas, sino que también me permitió mantener un orden lógico y 
        profesional en la presentación de evidencias. Esta metodología me ha permitido cumplir con los estándares 
        de seguridad y configuración solicitados, fortaleciendo mi capacidad para gestionar proyectos de 
        infraestructura con criterio técnico y eficiencia.
      </p>

      {/* 4. Historial de Prompts */}
      {/* 4. Historial de interacciones (Prompts) */}
      <h2>4. Historial de interacciones (Prompts)</h2>
      <ol style={{ paddingLeft: '20px' }}>
        <li>"Sintaxis exacta para chmod con permisos especiales (Sticky Bit y SetGID) en un directorio nuevo."</li>
        <li>"Comando para listar permisos de archivos y directorios incluyendo detalles de propietario y grupo."</li>
        <li>"¿Cómo cambiar el propietario y grupo de un archivo a www-data de forma recursiva?"</li>
        <li>"Pasos para verificar que el servicio nginx esté activo y habilitado al inicio del sistema."</li>
        <li>"Diferencias técnicas entre nginx y apache para un servidor con pocos recursos."</li>
        <li>"¿Cómo comprobar la sintaxis de un archivo de configuración de nginx antes de reiniciar el servicio?"</li>
        <li>"¿Cómo listar los procesos actuales que están ocupando el puerto 80?"</li>
      </ol>
    </div>
  );
};

export default Prompts;