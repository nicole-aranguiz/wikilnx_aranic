import React from 'react';

const NginxDespliegue = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>E · Servidor Web (Nginx) y Despliegue</h1>

      {/* Punto 1 */}
      <section style={{ marginBottom: '25px' }}>
        <h2>1. Instalación del servidor web</h2>
        <p>Ejecutamos: <code>sudo apt install -y nginx</code>. Verificamos el acceso en <code>http://localhost:8080</code> para confirmar que Nginx está activo.</p>
        <img src="node1.jpg" alt="Instalación Nginx" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }} />
      </section>

      {/* Punto 2 */}
      <section style={{ marginBottom: '25px' }}>
        <h2>2. Construcción del sitio</h2>
        <p>
          Verificamos la instalación de las dependencias necesarias (<code>node</code> y <code>npm</code>) 
          y la clonación del repositorio en el servidor:
        </p>
        
        <img src="555.jpg" alt="Verificación de dependencias y repositorio" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', border: '1px solid #ccc' }} />
        
        <p>
          <em>Nota técnica: Tras confirmar el entorno, se ejecutó <code>npm run build</code> (realizado en 
          entorno local para optimización de recursos) para generar la carpeta <code>dist/</code> lista 
          para la publicación.</em>
        </p>
      </section>

      {/* Punto 3 */}
      <section style={{ marginBottom: '25px' }}>
        <h2>3. Copia a la carpeta de Nginx</h2>
        <p>Creamos el directorio de trabajo y transferimos el contenido:</p>
        <code>sudo mkdir -p /var/www/wiki</code><br/>
        <code>sudo cp -r dist/* /var/www/wiki/</code><br/>
        <code>sudo chown -R www-data:www-data /var/www/wiki</code>

        <img src="333.jpg" alt="Verificación de permisos y archivos" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', marginTop: '10px' }} />
      
      </section>

      {/* Punto 4 */}
<section style={{ marginBottom: '25px' }}>
        <h2>4. Archivo de configuración</h2>
        <p>
          Creamos y configuramos el archivo <code>/etc/nginx/sites-available/wiki</code> con la "receta" 
          proporcionada para el servidor Nginx:
        </p>
        
        {/* Aquí insertamos tu captura 444.jpg que muestra la configuración guardada */}
        <img src="444.jpg" alt="Contenido del archivo de configuración wiki" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', border: '1px solid #ccc' }} />
        
        <p>
          <em>Evidencia: Mediante el comando <code>cat</code>, se verifica que la configuración de Nginx se ha guardado correctamente, 
          estableciendo el directorio raíz en <code>/var/www/wiki</code> y el archivo de índice.</em>
        </p>
      </section>

      {/* Punto 5 */}
      <section style={{ marginBottom: '25px' }}>
        <h2>5. Activación y recarga</h2>
        <p>Activamos el sitio, eliminamos la configuración por defecto y validamos con <code>sudo nginx -t</code>.</p>
        <img src="node4.jpg" alt="Validación Nginx" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }} />
      </section>

      {/* Punto 6 */}
      <section style={{ marginBottom: '25px' }}>
        <h2>6. Comprobación final</h2>
        <p>Recargamos <code>http://localhost:8080</code> para verificar que el sitio carga correctamente desde el servidor Linux.</p>
        <img src="aaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg" alt="Sitio final" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }} />
      </section>

     
    </div>
  );
};

export default NginxDespliegue;