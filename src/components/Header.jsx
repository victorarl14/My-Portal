import React from 'react';
import { FaTelegram, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => (
  <header className="header">
    {/* Avatar, nombre y enlaces sociales */}
    <div className="header__left">
      <img src="/assets/avatar.png" alt="Avatar" className="header__avatar" />
      <div>
        <h1>Víctor Rojas</h1>
        <h2>Desarrollador Web</h2>
      </div>
    </div>
    <nav className="header__nav">
      <a href="https://t.me/" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      <a href="https://www.linkedin.com/in/victor-rojas-lira/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/victorarojaslira" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </nav>
  </header>
);

export default Header; 