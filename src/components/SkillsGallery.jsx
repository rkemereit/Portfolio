import React from 'react';
import { Link } from 'react-router-dom';
import './_skills-gallery.scss';

const SkillsGallery = ({ skills }) => {
  // Map of skills to their corresponding GitHub repository URLs
  const skillToRepo = {
    'React/Sass': 'https://github.com/rkemereit/Portfolio',
    'MySQL': 'https://github.com/rkemereit/8bit_database/tree/main',
    'Java': 'https://github.com/rkemereit/Java_final',
    'JavaScript': 'https://github.com/rkemereit/JavaScript_Class_Final',
    'HTML/CSS': 'https://github.com/rkemereit/Fund_Of_Web_Class_Project/tree/main',
    'Python': 'https://github.com/rkemereit/Python_Employee_Program'
  };

  const handleSkillClick = (skill) => {
    const repoUrl = skillToRepo[skill];
    if (repoUrl) {
      window.open(repoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="skills-gallery">
      <h2 className="skills-gallery__title">My Skills</h2>
      <div className="skills-gallery__grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card"
            onClick={() => handleSkillClick(skill)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleSkillClick(skill);
              }
            }}
          >
            <h3 className="skill-card__name">{skill}</h3>
            <div className="skill-card__link-text">View Project →</div>
          </div>
        ))}
      </div>
      <Link to="/projects" className="skills-gallery__link">
        View My Projects
      </Link>
    </div>
  );
};

export default SkillsGallery; 