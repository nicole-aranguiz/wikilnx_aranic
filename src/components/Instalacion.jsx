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
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>2. Despliegue y Acceso Inicial</h2>
        <p>Tras la instalación de Ubuntu Server (usuario: <em>inacap</em>) y la activación de OpenSSH, se estableció la conexión remota desde el equipo anfitrión mediante el comando:</p>
        <div style={{ backgroundColor: '#2d2d2d', color: '#fff', padding: '10px', borderRadius: '5px' }}>
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
            <tr><td style={{ padding: '10px' }}><code>apt update && upgrade</code></td><td style={{ padding: '10px' }}>Actualiza la lista de paquetes y mejora las versiones del software instalado.</td></tr>
            <tr><td style={{ padding: '10px' }}><code>ufw allow ... && enable</code></td><td style={{ padding: '10px' }}>Configura el firewall (UFW) para permitir tráfico SSH y HTTP, protegiendo el sistema.</td></tr>
            <tr><td style={{ padding: '10px' }}><code>ufw status verbose</code></td><td style={{ padding: '10px' }}>Muestra el estado detallado de las reglas del firewall aplicadas.</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>4. Investigación Técnica</h2>
        <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <p><strong>¿Qué es NAT?</strong>: Es una técnica que permite que múltiples dispositivos en una red privada compartan una única dirección IP pública para salir a Internet.</p>
          <p><strong>¿Para qué el reenvío de puertos?</strong>: Permite que conexiones externas (del anfitrión) lleguen a servicios específicos dentro de la VM, redirigiendo el tráfico del puerto anfitrión al puerto del servidor invitado.</p>
          <p><strong>DHCP vs IP Fija</strong>: El <em>DHCP</em> asigna direcciones IP de forma dinámica y automática a los dispositivos, mientras que la <em>IP Fija</em> es configurada manualmente para que el dispositivo mantenga siempre la misma dirección, ideal para servidores.</p>
        </div>
      </section>
    </div>
  );
};

export default Instalacion;