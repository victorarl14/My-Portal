import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <p>&copy; {new Date().getFullYear()} MI PORTAL. Todos los derechos reservados.</p>
        <div className="footer-socials">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/victor-rojas-lira" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 