import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>¡Hablemos!</h3>
          <p>
            Si estás interesado en trabajar juntos o tienes alguna pregunta, no dudes en contactarme. Estaré encantado de escucharte.
          </p>
          <ul>
            <li>
              <FaEnvelope />
              <a href="mailto:victorarojaslira@gmail.com">victorarojaslira@gmail.com</a>
            </li>
            <li>
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/victor-a-rojas-lira" target="_blank" rel="noopener noreferrer">
                Victor Rojas | LinkedIn
              </a>
            </li>
            <li>
              <FaGithub />
              <a href="https://github.com/victorarl14" target="_blank" rel="noopener noreferrer">
                victorarl14
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact; 