import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <p>&copy; {new Date().getFullYear()} Víctor Rojas. Todos los derechos reservados.</p>
        <div className="footer-socials">
        </div>
      </div>
    </footer>
  );
};

export default Footer; 