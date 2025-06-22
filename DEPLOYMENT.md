# Guía de Despliegue en Render

## Configuración de Variables de Entorno

### Para el Frontend (My-Portal)

1. **En Render Dashboard:**
   - Ve a tu servicio de frontend
   - En la sección "Environment Variables"
   - Añade la variable:
     - **Key:** `VITE_API_URL`
     - **Value:** `https://api-portal-backend.onrender.com/api`

### Para el Backend (Api-Portal)

1. **Variables necesarias:**
   - `JWT_SECRET`: Tu clave secreta para JWT
   - `DATABASE_URL`: URL de tu base de datos (si usas una externa)
   - `PORT`: Puerto (Render lo maneja automáticamente)
   - `FRONTEND_URL`: URL de tu frontend en Render

## Pasos para el Despliegue

### 1. Desplegar el Backend (Api-Portal)

1. Conecta tu repositorio de GitHub a Render
2. Configura como servicio web
3. **Build Command:** `npm install && npm run build`
4. **Start Command:** `npm run start:prod`
5. Añade las variables de entorno mencionadas arriba

### 2. Desplegar el Frontend (My-Portal)

1. Conecta tu repositorio de GitHub a Render
2. Configura como sitio estático
3. **Build Command:** `npm install && npm run build`
4. **Publish Directory:** `dist`
5. Añade la variable `VITE_API_URL=https://api-portal-backend.onrender.com/api`

## Verificación

1. Una vez desplegado, verifica que:
   - El frontend carga correctamente
   - Las llamadas a la API funcionan (revisa la consola del navegador)
   - El registro e inicio de sesión funcionan
   - Los proyectos y tecnologías se cargan desde la base de datos
   - Puedes acceder a `https://api-portal-backend.onrender.com/api/health` para verificar el estado de la API

## Solución de Problemas

- **Error 404 en API calls:** Verifica que `VITE_API_URL` esté configurada correctamente
- **CORS errors:** Asegúrate de que tu backend permita requests desde el dominio de tu frontend
- **Build errors:** Revisa los logs de build en Render
- **Endpoint /api/hola no encontrado:** Ya fue eliminado, ahora usa `/api/health` para verificar el estado

## URLs Importantes

- **Backend API:** `https://api-portal-backend.onrender.com/api`
- **Health Check:** `https://api-portal-backend.onrender.com/api/health`
- **Documentación:** Revisa el archivo `API_DOCUMENTATION.md` en el repositorio del backend 