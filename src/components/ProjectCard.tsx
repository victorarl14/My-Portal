import React from 'react';
import type { Project } from './Projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const projectLink = project.live_url || project.github_url;

  return (
    <div className="project-card">
      <div className="project-card-image">
        {project.image_url ? (
          <img src={project.image_url} alt={project.title} />
        ) : (
          <div className="image-placeholder">
            <span>Imagen no disponible</span>
          </div>
        )}
      </div>
      <div className="project-card-content">
        <h3>
          {projectLink ? (
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies?.map(tech => (
            <img 
              key={tech.id} 
              src={`/images/icons/${tech.icon_class}`} 
              alt={tech.name} 
              title={tech.name}
              className="tech-icon"
            />
          ))}
        </div>
        <div className="project-links">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          )}
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> 
              {project.title === '#VACA MEDIÁTICA' ? 'Ver Deploy' : 'Ver Demo'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
