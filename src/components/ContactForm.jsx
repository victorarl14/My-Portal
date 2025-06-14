import React from 'react';

const ContactForm = () => (
  <section className="contact-form">
    <h2>¡Estoy a la orden!</h2>
    <form>
      <input type="text" placeholder="Tu nombre" required />
      <input type="email" placeholder="Correo electrónico" required />
      <textarea placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>
);

export default ContactForm; 