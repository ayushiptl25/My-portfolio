import React from 'react';
import './About.css';
import profileImg from './profile.jpg'; // make sure to place a photo in src/assets/

const About = () => {
  return (
    <div className="about">
      <h2 className='section-title'>About Me</h2>
          <div className="section-content">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm a <span className="highlight">passionate UI/UX designer</span> and 
            <span className="highlight"> full-stack developer</span> who loves crafting clean, user-focused digital products.
            I bring designs to life using tools like <span className="highlight">Figma</span>, <span className="highlight">Canva</span>, and 
            <span className="highlight"> Miro</span> along with <span className="highlight">ReactJS</span> and <span className="highlight">.NET Core</span>.
          </p>
          <p>
            I enjoy turning complex problems into elegant solutions. Whether it's creating smooth mobile experiences or scalable backend systems,
            I’m always exploring new tools and building things that make life easier and more enjoyable.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
