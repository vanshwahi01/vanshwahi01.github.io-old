import React from 'react';
import './About.css';
import Footer from '../components/Footer'; // Import Footer

const About = () => {
  return (
    <div className="about-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img src={process.env.PUBLIC_URL + "/images/profile.jpeg"} alt="Profile" className="profile-pic" title="Vansh Wahi" />
        <p className="profile-intro">
          Hi, I'm Vansh, an undergraduate student pursuing computer science and applied AI.
          Here's a little more about my educational and professional journey.
        </p>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        <div className="roadmap">
          <div className="roadmap-entry">
            <img src={process.env.PUBLIC_URL + "/images/waterloo.png"} alt="University Logo" className="school-logo" />
            <div className="school-details">
              <h3>The University of Waterloo</h3>
              <p>Bachelor's of Computer Science with AI Specialization<br /> Expected Graduation: Aug 2026</p>
            </div>
          </div>
          <div className="roadmap-entry">
            <img src={process.env.PUBLIC_URL + "/images/tsrs.png"} alt="School 1 Logo" className="school-logo" />
            <div className="school-details">
              <h3>The Shri Ram School, Aravali</h3>
              <p>High School Diploma<br /> Graduated: 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="experience-section">
        <h2>Co-op Experience</h2>
        <div className="roadmap">
          <div className="roadmap-entry">
            <img src={process.env.PUBLIC_URL + "/images/pcc.png"} alt="Company Logo" className="company-logo" />
            <div className="experience-details">
              <h3>PointClickCare</h3>
              <p>Software Engineer<br /> Sept 2024 - Present</p>
            </div>
          </div>
          <div className="roadmap-entry">
            <img src={process.env.PUBLIC_URL + "/images/dawson.png"} alt="Company Logo" className="company-logo" />
            <div className="experience-details">
              <h3>Dawson Partners</h3>
              <p>Technology Analyst<br /> Jan - Apr 2024</p>
            </div>
          </div>
          <div className="roadmap-entry">
            <img src={process.env.PUBLIC_URL + "/images/eon.png"} alt="Company Logo" className="company-logo" />
            <div className="experience-details">
              <h3>EON Media Corporation</h3>
              <p>Software Engineer<br /> May - Sept 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer /> {/* Footer placed here */}
    </div>
  );
};

export default About;
