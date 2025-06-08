import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [mensaje, setMensaje] = useState<string>("");

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/hola`)
      .then((response) => response.json())
      .then((data: { mensaje: string }) => {
        console.log(data);
        setMensaje(data.mensaje);
      })
      .catch((error) => {
        console.error("Error al hacer fetch:", error);
      });
  }, []);

  return (
    <div>
      <h1>BACKEND MESSAGE:</h1>
      <p>{mensaje}</p>
    </div>
  );
};

export default App;

