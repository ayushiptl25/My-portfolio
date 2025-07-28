import React from 'react';
import './Home.css';
import heroImg from './hero.png'; // Ensure your image exists here

export default function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>
            Hi, I'm <span className="highlight">Patel Ayushi</span>
          </h1>
          <h3 className="subheading">UI/UX Designer & Frontend Developer</h3>
          <p>
            I design and build clean, responsive, and user-focused web interfaces using <strong>ReactJS</strong>, <strong>Figma</strong>, <strong>Canva</strong>, and <strong>.NET Core</strong>. With a passion for detail and design thinking, I create seamless user experiences that bring ideas to life.
          </p>

          <div className="tech-tags">
            <span>ReactJS</span>
            <span>Figma</span>
            <span>Canva</span>
            <span>.NET Core</span>
            <span>HTML/CSS</span>
            <span>JavaScript</span>
          </div>

          <a href="projects" className="cta-button">View My Projects</a>
        </div>

        <div className="home-image">
          <img src={heroImg} alt="UI/UX Designer Illustration" />
        </div>
      </div>
    </section>
  );
}
