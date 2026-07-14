import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importación de componentes desde la carpeta src
import Inicio from './components/Inicio.jsx';
import Licencias from './components/Licencias.jsx';
import Instalacion from './components/Instalacion.jsx';
import Permisos from './components/Permisos.jsx';
import Paquetes from './components/Paquetes.jsx';
import Nginx from './components/Nginx.jsx';
import Prompts from './components/Prompts.jsx';

function App() {
  return (
    <Router>
      <div className="layout">
        
        {/* Barra Lateral */}
        <aside className="sidebar">
          <h2>Mi Wiki Linux</h2>
          <nav>
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/licencias" className="nav-link">Licencias</Link>
            <Link to="/instalacion" className="nav-link">Instalación</Link>
            <Link to="/permisos" className="nav-link">Permisos</Link>
            <Link to="/paquetes" className="nav-link">Paquetes</Link>
            <Link className="nav-link" to="/nginx">Nginx</Link>
            <Link className="nav-link" to="/prompts">Prompts</Link>
          </nav>
        </aside>

        {/* Área de Contenido */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/licencias" element={<Licencias />} />
            <Route path="/instalacion" element={<Instalacion />} />
            <Route path="/permisos" element={<Permisos />} />
            <Route path="/paquetes" element={<Paquetes />} />
            <Route path="/nginx" element={<Nginx />} />
            <Route path="/prompts" element={<Prompts />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;