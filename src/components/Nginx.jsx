import React from 'react';

const DespliegueNginx = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>E · Nginx y Despliegue del Sitio</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>1. Instalación de Nginx</h2>
        <p>Instalamos el servidor web y verificamos su ejecución inicial en el puerto 8080 (mapeado al 80 interno):</p>
        <div style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '10px', borderRadius: '5px' }}>
          <code>sudo apt install -y nginx</code>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>2. Preparación del Entorno y Build</h2>
        <p>Preparamos el servidor para recibir nuestra aplicación frontend:</p>
        <div style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '10px', borderRadius: '5px' }}>
          <code>sudo apt install -y nodejs npm git</code><br/>
          <code>git clone [URL_DE_TU_REPO]</code><br/>
          <code>cd [TU_CARPETA] && npm install</code><br/>
          <code>npm run build</code>
        </div>
        <p><em>El proceso <code>npm run build</code> genera una carpeta <code>dist/</code>, que contiene la versión optimizada de nuestra web para producción.</em></p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>3. Despliegue en el directorio web</h2>
        <p>Copiamos el contenido a la ruta donde Nginx espera servir los archivos:</p>
        <div style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '10px', borderRadius: '5px' }}>
          <code>sudo mkdir -p /var/www/wiki</code><br/>
          <code>sudo cp -r dist/* /var/www/wiki/</code><br/>
          <code>sudo chown -R www-data:www-data /var/www/wiki</code>
        </div>
        <p><small>Nota: Cambiamos el dueño a <code>www-data</code> para que Nginx tenga permisos de lectura sobre los archivos.</small></p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>4. Configuración de Nginx</h2>
        <p>Creamos la configuración específica para nuestra wiki en <code>/etc/nginx/sites-available/wiki</code>:</p>
        <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }}>
{`server {
    listen 80 default_server;
    root /var/www/wiki;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}`}
        </pre>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>5. Activación y Verificación</h2>
        <p>Enlazamos la configuración y recargamos el servicio:</p>
        <div style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '10px', borderRadius: '5px' }}>
          <code>sudo ln -s /etc/nginx/sites-available/wiki /etc/nginx/sites-enabled/</code><br/>
          <code>sudo rm /etc/nginx/sites-enabled/default</code><br/>
          <code>sudo nginx -t</code><br/>
          <code>sudo systemctl reload nginx</code>
        </div>
        <p>La respuesta <em>"syntax is ok / test is successful"</em> confirma que el despliegue fue exitoso.</p>
      </section>
    </div>
  );
};

export default DespliegueNginx;