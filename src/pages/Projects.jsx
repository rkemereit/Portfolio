import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './_projects.scss';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Sass. Features a clean " +
        "design with smooth animations and transitions. Implements best practices in component " +
        "architecture and styling with SCSS modules.",
      technologies: ["React", "Sass", "Responsive Design"],
      githubLink: "https://github.com/rkemereit/Portfolio"
    },
    {
      title: "JavaScript Final Project",
      description: "This is a project I did for my JavaScript class. It is a Job application using " +
        "primarily Javascript. The website uses the jQuery library to make the website more " +
        "interactive.",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveLink: "https://rkemereit.github.io/JavaScript_Class_Final/",
      githubLink: "https://github.com/rkemereit/JavaScript_Class_Final"
    },
    {
      title: "Fundamentals of Web Development Project",
      description: "A web development project made using HTML and CSS with a little JavaScript. It " +
        "was made during my first class taken for my degree so please excuse the looks. This " +
        "mainly serves the purpose of showing where I started to where I am now.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      liveLink: "https://rkemereit.github.io/Fund_Of_Web_Class_Project/",
      githubLink: "https://github.com/rkemereit/Fund_Of_Web_Class_Project/tree/main"
    },
    {
      title: "Java Final Project",
      description: "This Java based application is a game store that allows users to alter and view " +
        "data. It uses CRUD operations to change data like information about a game as well as " +
        "customer data and their transactions.",
      technologies: ["Java", "OOP", "Data Structures"],
      githubLink: "https://github.com/rkemereit/Java_final"
    },
    {
      title: "Python Class Project",
      description: "A Python project that demonstrates an employee program. It uses CRUD operations " +
        "to edit individual employees and store them in a CSV file.",
      technologies: ["Python", "Data Processing", "Algorithms"],
      githubLink: "https://github.com/rkemereit/Python_Employee_Program"
    },
    {
      title: "8Bit Database Project",
      description: "A MySQL database project for the final of my Database class. It is for a " +
        "fictional gamestore in need of a database. The database consists of three triggers for " +
        "insert, delete, and update. It also contains two views, seven tables, and a role with " +
        "permissions to run CRUD procedures.",
      technologies: ["MySQL", "Database Design", "Data Modeling"],
      githubLink: "https://github.com/rkemereit/8bit_database/tree/main"
    }
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-page__title">My Projects</h1>
      <div className="projects-page__grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects; 