// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Licencias from './components/Licencias';
import Instalacion from './components/Instalacion';
import Permisos from './components/Permisos';
import Paquetes from './components/Paquetes';
import Nginx from './components/Nginx';
import Prompts from './components/Prompts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        {/* Barra Lateral */}
        <nav className="sidebar">
          <h2 style={{ color: '#d81b60' }}>Wiki Linux</h2>
          
          <Link to="/" className="nav-btn">Inicio</Link>
          <Link to="/licencias" className="nav-btn">Licencias</Link>
          <Link to="/instalacion" className="nav-btn">Instalación</Link>
          <Link to="/permisos" className="nav-btn">Permisos</Link>
          <Link to="/paquetes" className="nav-btn">Paquetes</Link>
          <Link to="/nginx" className="nav-btn">Nginx</Link>
          <Link to="/prompts" className="nav-btn">Prompts (IA)</Link>
        </nav>

        {/* Contenido Principal */}
        <main className="main-content">
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
    </BrowserRouter>
  );
}

export default App;