import axios from 'axios';
import { config } from '../config';

const api = axios.create({
  baseURL: config.apiUrl,
});

// Puedes añadir interceptores aquí si lo necesitas en el futuro
// Por ejemplo, para refrescar tokens.

export const registerUser = async (userData: any) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (credentials: any) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const sendMessage = async (messageData: any) => {
  const response = await api.post('/messages', messageData);
  return response.data;
}; 