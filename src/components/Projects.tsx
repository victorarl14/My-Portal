import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  live_url: string;
}

const API_URL = 'http://localhost:3000';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects/featured`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 