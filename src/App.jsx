import React from 'react';
import Inicio from './components/Inicio';
import Licencias from './components/Licencias';
import './App.css'; // Esto cargará estilos básicos si los quieres añadir luego

function App() {
  return (
    <div className="container" style={{ padding: '20px' }}>
      <header>
        <nav>
          <button onClick={() => alert('Próximamente: Navegación')}>Menú</button>
        </nav>
      </header>
      
      <main>
        <Inicio />
        <hr style={{ margin: '40px 0' }} />
        <Licencias />
      </main>
    </div>
  );
}

export default App;