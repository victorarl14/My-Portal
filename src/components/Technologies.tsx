import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Technologies.css';

interface Technology {
  id: string;
  name: string;
  icon_class: string; // ¡Ahora usaremos este campo!
}

const API_URL = 'http://localhost:3000'; // Asegúrate de que este sea el puerto correcto

const Technologies: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get(`${API_URL}/technologies`);
        setTechnologies(response.data);
      } catch (error) {
        console.error('Error fetching technologies:', error);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <section id="technologies" className="section technologies-section">
      <div className="main-container">
        <h2 className="section-title">Tecnologías</h2>
        <div className="technologies-grid">
          {technologies.map(tech => (
            <div key={tech.id} className="tech-card">
              <img 
                src={`/images/icons/${tech.icon_class}`} 
                alt={`${tech.name} icon`} 
                onError={(e) => { e.currentTarget.src = '/images/icons/default-icon.png'; }} // Opcional: una imagen por defecto si falla
              />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies; 