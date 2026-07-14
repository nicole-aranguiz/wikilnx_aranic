import React from 'react';

const GestoresPaquetes = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>D · Gestores de paquetes (APT)</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>1. Flujo de trabajo en APT</h2>
        <p>El ciclo de vida estándar para gestionar software en Ubuntu es el siguiente:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          <div style={{ borderLeft: '4px solid #d81b60', paddingLeft: '10px' }}>
            <strong>Update:</strong> <code>sudo apt update</code> - Sincroniza el índice de paquetes local con los repositorios remotos. Es vital para encontrar versiones actuales.
          </div>
          <div style={{ borderLeft: '4px solid #d81b60', paddingLeft: '10px' }}>
            <strong>Search:</strong> <code>apt search [termino]</code> - Permite localizar paquetes en el repositorio buscando por nombre o descripción.
          </div>
          <div style={{ borderLeft: '4px solid #d81b60', paddingLeft: '10px' }}>
            <strong>Show:</strong> <code>apt show [paquete]</code> - Muestra metadatos detallados (tamaño, dependencias, mantenedor) antes de instalar.
          </div>
          <div style={{ borderLeft: '4px solid #d81b60', paddingLeft: '10px' }}>
            <strong>Install:</strong> <code>sudo apt install [paquete]</code> - Descarga e instala el software y sus dependencias necesarias.
          </div>
        </div>
      </section>

      <section>
        <h2>2. Criterio de Factibilidad: Monitores de Sistema</h2>
        <p>Para la necesidad de "monitoreo de recursos", comparamos las siguientes alternativas:</p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fce4ec' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Herramienta</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Pros</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Uso ideal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}><strong>top</strong></td>
              <td style={{ padding: '10px' }}>Instalado por defecto, muy ligero.</td>
              <td style={{ padding: '10px' }}>Servidores críticos donde no puedes instalar nada.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><strong>htop</strong></td>
              <td style={{ padding: '10px' }}>Interfaz amigable, colores, scroll, mata procesos con F9.</td>
              <td style={{ padding: '10px' }}>Administración diaria y resolución de problemas.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><strong>btop</strong></td>
              <td style={{ padding: '10px' }}>Visualmente avanzado, muestra gráficos en tiempo real.</td>
              <td style={{ padding: '10px' }}>Monitoreo visual atractivo (estación de trabajo).</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '20px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', borderLeft: '5px solid #d81b60' }}>
          <strong>Justificación técnica:</strong> Instalamos <code>htop</code>. Es el punto de equilibrio perfecto: es extremadamente ligero, tiene una enorme comunidad (soporte constante) y sus dependencias son mínimas. Es preferible sobre <em>btop</em> en servidores (por peso) y sobre <em>top</em> (por usabilidad).
        </div>
      </section>
    </div>
  );
};

export default GestoresPaquetes;