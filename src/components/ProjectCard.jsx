import React, { useState } from 'react';
import './_project-card.scss';

const ProjectCard = ({ title, description, technologies, liveLink, githubLink }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxDescriptionLength = 150;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayDescription = showFullDescription 
    ? description 
    : description.slice(0, maxDescriptionLength) + '...';

  return (
    <div className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">
          {displayDescription}
          {description.length > maxDescriptionLength && (
            <button 
              className="project-card__read-more"
              onClick={toggleDescription}
            >
              {showFullDescription ? 'Show Less' : 'Read More'}
            </button>
          )}
        </p>
        <div className="project-card__technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card__link"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card__link"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 