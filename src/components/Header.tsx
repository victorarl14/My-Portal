import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    handleLinkClick();
    navigate('/');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo-text">
          <Link to="/"><h2>PORTAFOLIO</h2></Link>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/#inicio" onClick={handleLinkClick}>Inicio</Link>
          <Link to="/#sobre-mi" onClick={handleLinkClick}>Sobre mí</Link>
          <Link to="/#tecnologias" onClick={handleLinkClick}>Tecnologías</Link>
          <Link to="/#proyectos" onClick={handleLinkClick}>Proyectos</Link>
          <Link to="/#contacto" onClick={handleLinkClick}>Contacto</Link>
          
          <div className="auth-controls">
            {isAuthenticated ? (
              <>
                <span className="welcome-message">Hola, {user?.name.split(' ')[0]}</span>
                <button onClick={handleLogout} className="button-logout">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="button-login" onClick={handleLinkClick}>Login</Link>
                <Link to="/register" className="button-register" onClick={handleLinkClick}>Register</Link>
              </>
            )}
          </div>
          <a href="/CURRÍCULUM - Víctor Rojas - 2025.pdf" download className="button-cv mobile-only">Descargar CV</a>
        </nav>
        <a href="/CURRÍCULUM - Víctor Rojas - 2025.pdf" download className="button-cv desktop-only">Descargar CV</a>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header; 