import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="main-container">
        <h2 className="section-title">Contacto</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact; 