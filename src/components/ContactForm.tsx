import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      // Nota: La API espera subject y message_content.
      // Aquí estamos simplificando y enviando el nombre en el subject.
      const response = await axios.post(`${API_URL}/messages`, {
        subject: `Mensaje de ${formData.name} (${formData.email})`,
        message_content: formData.message,
      });
      console.log(response.data);
      setStatus('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Hubo un error al enviar el mensaje.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm; 