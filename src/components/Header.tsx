import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/images/icons/avatar-icon.png" alt="Logo" />
        <span>MI PORTAL</span>
      </div>
      <nav className="nav-links">
        <a href="#hero">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#technologies">Tecnologías</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
      {/* Aquí podrías agregar el selector de idioma si lo necesitas */}
    </header>
  );
};

export default Header; 