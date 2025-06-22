import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { sendMessage } from '../services/api';
import '../styles/Contact.css';

const ContactForm: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData((prevData) => ({
        ...prevData,
        name: user.name,
        email: user.email,
      }));
    }
  }, [isAuthenticated, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setStatus('Por favor, inicia sesión para enviar un mensaje.');
      return;
    }
    setStatus('Enviando...');
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken') || ''}`
      };

      const body = {
        name: formData.name,
        email: formData.email,
        content: formData.message,
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setFormData(prevData => ({
          ...prevData,
          message: '',
        }));
      } else {
        console.error('Error sending message:', response.statusText);
        setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Hubo un error al enviar el mensaje.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-required-message">
        <h3>Necesitas una cuenta para contactarme</h3>
        <p>
          Por favor, <Link to="/login">inicia sesión</Link> o{' '}
          <Link to="/register">créate una cuenta</Link> para poder enviar un mensaje.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isAuthenticated}
            className={isAuthenticated ? 'disabled-input' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isAuthenticated}
            className={isAuthenticated ? 'disabled-input' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={isAuthenticated ? 'disabled-input' : ''}
          ></textarea>
        </div>
        <button type="submit">Enviar Mensaje</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm; 