import React from 'react';
import './Contact.css';
import './animation.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Let's Connect 🌟</h2>

      <div className="contact-card">
        <p className="contact-message">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span>📧</span>
            <a href="mailto:ayushi7232@gmail.com">ayushi7232@gmail.com</a>
          </div>

          <div className="contact-item">
            <span>💼</span>
            <a 
              href="https://www.linkedin.com/in/ayushiben-patel-4b0a21318" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/ayushiben-patel
            </a>
          </div>
        </div>

        <p className="closing-note">💬 Feel free to drop a message anytime!</p>
      </div>
    </section>
  );
};

export default Contact;
