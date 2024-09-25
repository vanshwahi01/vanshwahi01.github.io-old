import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Document Icon
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // GitHub Icon
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="stars"></div>
      <h1 className="name-title">Vansh Wahi</h1>
      <p className="intro-paragraph">
        I am a software developer passionate about technology, design, and building innovative solutions. Welcome to my personal website!
      </p>

      {/* Add icons below the paragraph */}
      <div className="icons-container">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileAlt} size="2x" className="icon" />
        </a>
        <a href="https://github.com/vanshwahi01" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/vanshwahi/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;
