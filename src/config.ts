// Configuración centralizada para la aplicación
export const config = {
  // URL de la API - usa variable de entorno en producción, localhost en desarrollo
  apiUrl: import.meta.env.VITE_API_URL || 'https://api-portal-backend.onrender.com/api',
  
  // Otras configuraciones que puedas necesitar en el futuro
  appName: 'Portfolio de Víctor Rojas',
  version: '1.0.0'
}; 