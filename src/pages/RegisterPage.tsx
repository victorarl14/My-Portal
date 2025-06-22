import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import '../styles/AuthPage.css';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      await registerUser(formData);
      setMessage('¡Registro exitoso! Redirigiendo al login en 3 segundos...');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Error en el registro.';
      setError(errorMessage);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">Nombre</label>
              <input type="text" id="first_name" name="first_name" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Apellido</label>
              <input type="text" id="last_name" name="last_name" onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario</label>
            <input type="text" id="username" name="username" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={handleChange} required />
          </div>
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
          <button type="submit">Registrarse</button>
          <p className="redirect-link">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage; 