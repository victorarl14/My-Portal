import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Victor Rojas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer; 