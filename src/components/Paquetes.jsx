import React from 'react';

const Paquetes = () => {
  return (
    <div className="content">
      <h1>Gestión de Paquetes</h1>
      <p>Guía sobre cómo instalar, actualizar y eliminar software en entornos Linux.</p>
      
      <h2>Gestores de paquetes comunes</h2>
      <ul>
        <li><strong>APT (Debian/Ubuntu):</strong> apt update, apt install.</li>
        <li><strong>DNF/YUM (RHEL/Fedora):</strong> dnf install.</li>
        <li><strong>Pacman (Arch Linux):</strong> pacman -S.</li>
      </ul>
      
      <h2>Buenas prácticas</h2>
      <p>Siempre es recomendable actualizar la lista de repositorios antes de instalar algo nuevo.</p>
    </div>
  );
};

export default Paquetes;