import React from 'react';

const Inicio = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Portada */}
      <section style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ marginBottom: '10px' }}>Laboratorio de Sistemas Operativos</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#d81b60' }}>Unidad 3: Administración de Servidores Linux</h2>
        <p><strong>Estudiante:</strong> Ingeniería en Informática</p>
        <p><strong>Fecha:</strong> Julio 2026</p>
      </section>

      {/* Objetivo */}
      <section style={{ marginBottom: '40px' }}>
        <h2>1. Objetivo del Laboratorio</h2>
        <p>
          El propósito de este laboratorio es implementar y administrar un servidor 
          <strong> Ubuntu Server 24.04</strong>. Se busca ejecutar correctamente la gestión 
          de servicios, configuración de permisos y despliegue web, garantizando la 
          conectividad entre el anfitrión y la máquina virtual.
        </p>
      </section>

      {/* Topología */}
      <section>
        <h2>2. Topología del Laboratorio</h2>
        <p>La infraestructura se configura bajo el siguiente esquema de red:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px 0' }}>
          
          {/* Pantallazo 1 */}
          <div>
            <p style={{ textAlign: 'center', fontSize: '0.9rem' }}><em>Fig 1: Estado de la VM srv-wiki en VirtualBox</em></p>
            {/* Como la imagen está en public, solo ponemos /nombre_del_archivo */}
            <img 
              src="/01_topologia.png.jpg" 
              style={{ width: '100%', maxWidth: '800px', borderRadius: '8px', border: '1px solid #ccc', display: 'block', margin: '0 auto' }} 
              alt="Configuración VM" 
            />
          </div>

          {/* Pantallazo 2 */}
          <div>
            <p style={{ textAlign: 'center', fontSize: '0.9rem' }}><em>Fig 2: Configuración de Reglas de Reenvío de Puertos (NAT)</em></p>
            {/* Como la imagen está en public, solo ponemos /nombre_del_archivo */}
            <img 
              src="/nat.png.jpg" 
              style={{ width: '100%', maxWidth: '800px', borderRadius: '8px', border: '1px solid #ccc', display: 'block', margin: '0 auto' }} 
              alt="Reenvío de puertos" 
            />
          </div>
          
        </div>

        <div style={{ 
          backgroundColor: '#fce4ec', 
          padding: '25px', 
          borderRadius: '10px', 
          borderLeft: '5px solid #d81b60',
          marginTop: '15px'
        }}>
          <p><strong>Configuración base:</strong></p>
          <ul>
            <li><strong>Anfitrión:</strong> PC Local</li>
            <li><strong>VM:</strong> <code>srv-wiki</code> (Ubuntu Server 24.04)</li>
            <li><strong>Red:</strong> NAT con reenvío de puertos (Port Forwarding)</li>
          </ul>

          <p><strong>Reglas de acceso bidireccional:</strong></p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>🌐 <strong>Web:</strong> <code>http://localhost:8080</code> ──▶ Nginx (puerto 80) → <code>/var/www/wiki</code></li>
            <li>💻 <strong>SSH:</strong> <code>ssh -p 2222 ...</code> ──▶ SSH (puerto 22)</li>
          </ul>

          <p style={{ marginTop: '15px', fontSize: '0.9rem' }}>
            <em>* La VM utiliza NAT para salida a Internet (necesaria para actualizaciones apt).</em>
          </p>
        </div>

        {/* Evidencia de inicio de sesión exitoso */}
        <div style={{ marginTop: '30px' }}>
          <p style={{ textAlign: 'center', fontSize: '0.9rem' }}><em>Fig 3: Estado del sistema al acceder vía SSH</em></p>
          <img 
            src="/inicio.jpg" 
            alt="Mensaje de inicio de sesión del servidor" 
            style={{ 
              width: '100%', 
              maxWidth: '800px', 
              borderRadius: '8px', 
              border: '1px solid #ccc', 
              display: 'block', 
              margin: '0 auto' 
            }} 
          />
        </div>
      </section>
    </div>
  );
};

export default Inicio;