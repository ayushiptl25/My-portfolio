import React from 'react';
import './Skills.css';
import './animation.css'

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "ReactJS", level: "Intermediate" },
  { name: "Figma", level: "Advanced" },
  { name: "Canva", level: "Advanced" },
  { name: "Miro", level: "Intermediate" },
  { name: ".NET Core", level: "Intermediate" },
  { name: "SQL Server", level: "Intermediate" },
  { name: "Entity Framework", level: "Beginner" },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="section-title">My Skills</h2>
       <div className="section-content">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;
