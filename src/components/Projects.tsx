import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';
import { config } from '../config';

interface Technology {
  id: string;
  name: string;
  icon_class: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  live_url: string;
  technologies: Technology[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/projects/featured`);
        console.log('Respuesta de la API:', response);
        console.log('Datos recibidos:', response.data);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="main-container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 