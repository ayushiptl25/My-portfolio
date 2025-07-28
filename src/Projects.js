import React from 'react';
import './animation.css';

const projectData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using ReactJS to showcase skills and projects.",
    tech: ["React", "CSS", "JavaScript"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Beauty Cosmetics App",
    description: "An eCommerce UI/UX design for a beauty and cosmetic product shopping experience.",
    tech: ["Figma", "UI/UX", "Mobile App"],
    link: "https://github.com/ayushiptl25/Beauty-cosmetic-App",
  },
  {
    title: "Gaming Accessories App",
    description: "A modern and sleek interface for browsing and buying gaming accessories online.",
    tech: ["Figma", "React (planned)", "UI/UX"],
    link: "https://github.com/ayushiptl25/Gaming-Accessories-App",
  },
  {
    title: "Mexican Restaurant App",
    description: "A full-stack food ordering application for a Mexican cuisine restaurant. Developed using .NET Core for backend services.",
    tech: ["ASP.NET Core", "Entity Framework", "SQL Server", "Razor Pages"],
    link: "https://github.com/ayushiptl25/Maxican-Restro-App",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="section-content">
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}