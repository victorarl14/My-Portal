import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Technologies.css';

interface Technology {
  id: string;
  name: string;
  icon_class: string; // Usaremos esto más adelante, por ahora la imagen
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

  const getIconPath = (name: string) => {
    const formattedName = name.toLowerCase().replace(/\./g, '');
    return `/images/icons/${formattedName}-icon.png`;
  };

  return (
    <section id="technologies" className="section technologies-section">
      <h2 className="section-title">Tecnologías</h2>
      <div className="technologies-grid">
        {technologies.map(tech => (
          <div key={tech.id} className="tech-card">
            <img src={getIconPath(tech.name)} alt={`${tech.name} icon`} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies; 