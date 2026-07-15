import React from 'react';

const GestoresPaquetes = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>D · Gestores de paquetes (APT)</h1>

      {/* Seccion 1: Flujo y capturas */}
      <section style={{ marginBottom: '30px' }}>
        <h2>1. Flujo de trabajo en APT</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
          <div>
            <strong>1. Update:</strong> <code>sudo apt update</code>
            <p>Refresca la base de datos local con los últimos índices de los repositorios.</p>
          </div>
          
          <div>
            <strong>2. Search:</strong> <code>apt search htop</code>
            <img src="/apt search htop.jpg" alt="Búsqueda htop" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />
          </div>

          <div>
            <strong>3. Show:</strong> <code>apt show htop</code>
            <img src="/apt show htop.jpg" alt="Detalle htop" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />
          </div>

          <div>
            <strong>4. Install:</strong> <code>sudo apt install -y htop tree</code>
            <img src="/sudo apt install htop tree.jpg" alt="Instalación htop y tree" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />
          </div>
        </div>
      </section>

      {/* Seccion 2: Actividad de Criterio de Factibilidad */}
      <section style={{ backgroundColor: '#f0f4f8', padding: '20px', borderRadius: '8px' }}>
        <h2>2. Actividad: Criterio de Factibilidad</h2>
        <p>Ante la necesidad de un monitor del sistema, evaluamos tres alternativas:</p>
        <ul>
          <li><strong>htop:</strong> Muy ligero, interactivo y visualmente intuitivo.</li>
          <li><strong>top:</strong> Estándar, instalado por defecto, pero menos amigable.</li>
          <li><strong>glances:</strong> Muy completo (red, sensores, disco), pero con mayores dependencias (Python).</li>
        </ul>
        <p><strong>Justificación:</strong> Instalaría <strong>htop</strong> debido a su equilibrio: tiene un peso mínimo, dependencias reducidas y soporte oficial excelente en los repositorios de Ubuntu, siendo ideal para un servidor sin sobrecargar recursos.</p>
      </section>
    </div>
  );
};

export default GestoresPaquetes;