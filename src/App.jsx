import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Licencias from './components/Licencias';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="layout">
        <nav className="sidebar">
          <h2>Wiki Linux</h2>
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/licencias">Licencias</Link>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/licencias" element={<Licencias />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;