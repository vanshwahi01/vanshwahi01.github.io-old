import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // Using the global styles
import Footer from '../components/Footer'; // Import Footer component

const Home = () => {
  return (
    <div className="page-container" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="stars"></div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="name-title">Vansh Wahi</h1>
        <p className="intro-paragraph">
          Software developer passionate about technology, design, and building innovative solutions. <br />
          Welcome to my personal website!
        </p>

        {/* Icons Section */}
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

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
};

export default Home;
