import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h2>BIENVENIDO A MI PORTAL</h2>
          <h1>
            Hey, soy <span className="name">Victor Rojas</span>
          </h1>
          <h3>Desarrollador Web</h3>
          <div className="hero-socials">
            <a href="https://t.me/VictorARL14" target="_blank" rel="noopener noreferrer">
              <img src="/images/redes_sociales/telegram-icon.png" alt="Telegram" />
            </a>
            <a href="https://www.instagram.com/victorarl14/" target="_blank" rel="noopener noreferrer">
              <img src="/images/redes_sociales/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://wa.me/584249399013" target="_blank" rel="noopener noreferrer">
              <img src="/images/redes_sociales/whatsapp.png" alt="WhatsApp" />
            </a>
            <a href="https://www.linkedin.com/in/victor-a-rojas-lira/" target="_blank" rel="noopener noreferrer">
              <img src="/images/redes_sociales/linkdin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/victorarl14" target="_blank" rel="noopener noreferrer">
              <img src="/images/redes_sociales/github-icon.png" alt="Github" />
            </a>
          </div>
          <p className="hero-cta">¡Transformemos ideas en soluciones digitales!</p>
        </div>
        <div className="hero-avatar">
          <img src="/images/icons/avatar-icon.png" alt="Victor Rojas Avatar" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 