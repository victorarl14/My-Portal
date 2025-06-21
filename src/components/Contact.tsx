import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-info">
        <h2>Contáctame</h2>
        <div className="contact-info-item">
          <a href="mailto:victororojaslira@gmail.com">
            Correo: victororojaslira@gmail.com
          </a>
        </div>
        <div className="contact-info-item">
          <a href="https://www.linkedin.com/in/victor-rojas-lira" target="_blank" rel="noopener noreferrer">
            Linkedin: Víctor Rojas | Linkedin
          </a>
        </div>
        <div className="contact-info-item">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            Github: Víctor Rojas | Github
          </a>
        </div>
      </div>
      <div className="contact-form-container">
        <h2>¡Estoy a la orden!</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact; 