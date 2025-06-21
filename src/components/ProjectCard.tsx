import React from 'react';
import { Project } from './Projects'; // Importamos la interfaz
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Imagen por defecto si no hay una en el proyecto
  const imageUrl = project.image_url || 'https://via.placeholder.com/400x300.png?text=Proyecto';

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imageUrl} alt={project.title} />
      </div>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          )}
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 