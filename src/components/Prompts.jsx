import React, { useState } from 'react';

const Prompts = () => {
  const [copiadoId, setCopiadoId] = useState(null);

  const prompts = [
    {
      id: 1,
      titulo: 'Proxy Inverso Básico',
      categoria: 'Proxy',
      codigo: `location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
}`
    },
    {
      id: 2,
      titulo: 'Balanceo de Carga',
      categoria: 'Infraestructura',
      codigo: `upstream mi_app {
  server localhost:3000;
  server localhost:3001;
}

server {
  location / {
    proxy_pass http://mi_app;
  }
}`
    },
    {
      id: 3,
      titulo: 'Optimización de Archivos Estáticos',
      categoria: 'Rendimiento',
      codigo: `location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
  expires 30d;
  add_header Cache-Control "public, no-transform";
}`
    }
  ];

  const copiarAlPortapapeles = (codigo, id) => {
    navigator.clipboard.writeText(codigo);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2000);
  };

  return (
    <div className="content">
      <h1>Prompts de Configuración</h1>
      <p>Fragmentos útiles para gestionar tus servicios en Linux.</p>

      {prompts.map((p) => (
        <div key={p.id} className="card">
          <div className="card-header">
            <h3>{p.titulo}</h3>
            <button onClick={() => copiarAlPortapapeles(p.codigo, p.id)}>
              {copiadoId === p.id ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
          <pre><code>{p.codigo}</code></pre>
        </div>
      ))}
    </div>
  );
};

export default Prompts;