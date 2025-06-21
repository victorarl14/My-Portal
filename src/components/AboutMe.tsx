import React from 'react';
import '../styles/AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="main-container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-content">
          <p>
            Estoy especializado en aplicaciones web robustas, tanto en front-end como en back-end. Tengo
            experiencia con tecnologías modernas, bases de datos relacionales y no relacionales. También he
            creado aplicaciones móviles, diseñado páginas web y realizado migraciones de datos. Además,
            implemento y entreno modelos de inteligencia artificial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 