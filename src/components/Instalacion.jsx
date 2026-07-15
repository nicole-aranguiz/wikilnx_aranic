import React from 'react';

const Instalacion = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>B · Instalación y configuración básica</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>1. Preparación de la VM</h2>
        <p>Se creó la máquina virtual <strong>srv-wiki</strong> con los siguientes parámetros:</p>
        <ul>
          <li><strong>Sistema:</strong> Ubuntu Server 64-bit</li>
          <li><strong>RAM:</strong> 2 GB</li>
          <li><strong>Disco:</strong> 25 GB</li>
          <li><strong>Red:</strong> Adaptador 1 en modo NAT con reenvío de puertos.</li>
        </ul>
        
        <img 
          src="/Captura de pantalla 2026-07-07 192624.jpg" 
          alt="Configuración de teclado en instalación" 
          style={{ 
            width: '100%', 
            maxWidth: '700px', 
            borderRadius: '8px', 
            border: '1px solid #ccc',
            margin: '15px 0'
          }} 
        />
        <img 
          src="/Captura de pantalla 2026-07-07 192804.jpg" 
          alt="Configuración de red en instalación" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />

        <img 
          src="/Captura de pantalla 2026-07-07 192804.jpg" 
          alt="Configuración de red en instalación" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />

        <img 
          src="/Captura de pantalla 2026-07-07 193515.jpg" 
          alt="Configuración de perfil de usuario" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />

        <img 
          src="/Captura de pantalla 2026-07-07 193621.jpg" 
          alt="Selección de paquetes Snap sugeridos" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />

        {/* Captura final del proceso de instalación del sistema */}
        <img 
          src="/Captura de pantalla 2026-07-07 193703.jpg" 
          alt="Proceso de instalación del sistema (curtin)" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />

        {/* Captura de finalización de instalación */}
        <img 
          src="/Captura de pantalla 2026-07-07 204356.jpg" 
          alt="Proceso de finalización de instalación" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />

        {/* Captura final: inicio de sesión exitoso */}
        <img 
          src="/Captura de pantalla 2026-07-07 204955.jpg" 
          alt="Inicio de sesión exitoso en srv-wiki" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />
      
      </section>

      {/* --- INICIO BLOQUE PAUTA 3.1.2 --- */}
<div style={{ marginTop: '20px' }}>
  <h3>Evidencia de Configuración Básica (Pauta 3.1.2)</h3>
  
  <p><strong>1. Hostname e IP:</strong></p>
  <img src="/ip a .jpg" alt="Hostname e IP" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />

  <p><strong>2. Actualizaciones del Sistema:</strong></p>
  <img src="/vvvvvvvvvvvvvv.jpg" alt="Actualizaciones" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />

  <p><strong>3. Firewall (UFW):</strong></p>
  <img src="/03_ufw.png.jpg" alt="Firewall" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />
</div>

      <section style={{ marginBottom: '30px' }}>
        <h2>2. Despliegue y Acceso Inicial</h2>
        <p>Tras la instalación de Ubuntu Server (usuario: <em>inacap</em>) y la activación de OpenSSH, se estableció la conexión remota desde el equipo anfitrión. La siguiente imagen confirma el acceso exitoso al servidor:</p>
        <img 
          src="/5. conectar desde la cmd de mi pc.jpg" 
          alt="Evidencia conexión SSH desde CMD" 
          style={{ 
            width: '100%', 
            maxWidth: '700px', 
            borderRadius: '8px', 
            border: '1px solid #ccc',
            margin: '15px 0'
          }} 
        />
       
        {/* Nueva captura agregada */}
        <img 
          src="/Captura de pantalla 2026-07-07 205158.jpg" 
          alt="Estado del sistema tras inicio" 
          style={{ 
            width: '100%', 
            maxWidth: '700px', 
            borderRadius: '8px', 
            border: '1px solid #ccc',
            margin: '15px 0'
          }} 
        />

      <div style={{ marginTop: '30px' }}>
    <h3>Verificación de Red y Hostname</h3>
    <p>Una vez dentro del sistema, configuramos el nombre y validamos la IP:</p>
    <img 
      src="/ip a .jpg" 
      alt="Verificación de hostname y IP" 
      style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
    />
  </div>
  

        <p>El comando utilizado para la conexión remota es:</p>
        <div style={{ backgroundColor: '#2d2d2d', color: '#fff', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
          <code>ssh -p 2222 inacap@localhost</code>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>3. Comandos de Configuración</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#fce4ec' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Comando</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '10px' }}><code>hostnamectl set-hostname srv-wiki</code></td><td style={{ padding: '10px' }}>Establece permanentemente el nombre de red (hostname) del servidor.</td></tr>
            <tr><td style={{ padding: '10px' }}><code>ip a</code></td><td style={{ padding: '10px' }}>Muestra las interfaces de red y sus direcciones IP asociadas.</td></tr>
            <tr><td style={{ padding: '10px' }}><code>apt update && upgrade</code></td><td style={{ padding: '10px' }}>Actualiza la lista de paquetes y mejora las versiones del software.</td></tr>
            <tr><td style={{ padding: '10px' }}><code>ufw allow ... && enable</code></td><td style={{ padding: '10px' }}>Configura el firewall (UFW) para permitir tráfico SSH y HTTP.</td></tr>
            <tr><td style={{ padding: '10px' }}><code>ufw status verbose</code></td><td style={{ padding: '10px' }}>Muestra el estado detallado de las reglas del firewall.</td></tr>
          </tbody>
        </table>

        <img 
          src="/03_ufw.png.jpg" 
          alt="Estado del firewall UFW" 
          style={{ 
            width: '100%', 
            maxWidth: '700px', 
            borderRadius: '8px', 
            border: '1px solid #ccc',
            margin: '15px 0'
          }} 
        />

        <img 
          src="/ls -l.jpg" 
          alt="Creación de directorio y verificación" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />

        <img 
          src="/permisos mkdir demo.jpg" 
          alt="Resumen de configuración UFW y directorio" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} 
        />
      </section>

      <section>
        <h2>4. Investigación Técnica</h2>
        <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <p><strong>¿Qué es NAT?</strong>: Técnica que permite que múltiples dispositivos en una red privada compartan una IP pública para salir a Internet.</p>
          <p><strong>¿Para qué el reenvío de puertos?</strong>: Redirige el tráfico desde un puerto del anfitrión a un puerto específico dentro de la máquina virtual.</p>
          <p><strong>DHCP vs IP Fija</strong>: El <em>DHCP</em> asigna IPs dinámicamente, mientras que la <em>IP Fija</em> se configura manualmente para garantizar una dirección constante en servidores.</p>
        </div>
      </section>
    </div>
  );
};

export default Instalacion;