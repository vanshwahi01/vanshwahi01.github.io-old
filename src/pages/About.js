import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img src="/path-to-your-profile-picture.jpg" alt="Profile" className="profile-pic" />
        <p className="profile-intro">
          Hi, I'm Vansh Wahi, a software developer passionate about building innovative solutions.
          Here's a little more about my educational and professional journey.
        </p>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        <div className="roadmap">
          <div className="roadmap-entry">
            <div className="dot"></div>
            <img src="/path-to-university-logo.png" alt="University Logo" className="school-logo" />
            <div className="school-details">
              <h3>University Name</h3>
              <p>Major: Computer Science<br /> Expected Graduation: 2025</p>
            </div>
          </div>
          <div className="roadmap-entry">
            <div className="dot"></div>
            <img src="/path-to-school1-logo.png" alt="School 1 Logo" className="school-logo" />
            <div className="school-details">
              <h3>School 1</h3>
              <p>High School Diploma<br /> Graduated: 2018</p>
            </div>
          </div>
          <div className="roadmap-entry">
            <div className="dot"></div>
            <img src="/path-to-school2-logo.png" alt="School 2 Logo" className="school-logo" />
            <div className="school-details">
              <h3>School 2</h3>
              <p>High School Diploma<br /> Graduated: 2015</p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="experience-section">
        <h2>Work Experience</h2>
        <div className="roadmap">
          {/* Add six experience entries here */}
          <div className="roadmap-entry">
            <div className="dot"></div>
            <img src="/path-to-company-logo1.png" alt="Company Logo" className="company-logo" />
            <div className="experience-details">
              <h3>Company Name 1</h3>
              <p>Job Title, Location<br /> Dates: June 2020 - Present</p>
            </div>
          </div>
          {/* Repeat this block for other 5 experiences */}
        </div>
      </div>
    </div>
  );
};

export default About;
