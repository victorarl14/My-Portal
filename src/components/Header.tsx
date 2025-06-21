import React, { useState, useEffect } from 'react';
import { FaTelegramPlane, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
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
      <div className="header-container">
        <div className="header-logo-container">
          <div className="header-logo-text">
            <span>Víctor Rojas</span>
            <span>Desarrollador Web</span>
          </div>
        </div>
        <nav className="social-icons">
          <a href="https://t.me/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
          <a href="https://www.instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/victor-rojas-lira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 