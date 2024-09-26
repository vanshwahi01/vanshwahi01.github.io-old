import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules'; // Correct import for Swiper 8+
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'PrePresent',
      description: 'PrePresent is an AI and ML integrated facial recognition software which detects emotions, expressions, lip variations, eye movement and other communicative features while delivering a presentation. It provides accurate and effective feedback on the presentation and then suggests methods and techniques to improve verbal communication skills. The aim is to turn this into a product which will minimise employee training and improve staff interpersonal communication.',
      link: 'https://drive.google.com/file/d/1xUhqLNy0WLymjsJ8kL1ZwY41hmhRFwcm/view',
    },
    {
      title: 'DeSales',
      description: 'DeSales is a B2B Self-Checkout Platform that revolutionizes retail experiences by enabling live item scanning directly into customer carts. Utilizing the NEAR Protocol, customers can complete transactions securely and swiftly. We promote healthy lifestyles by offering discounts on nutritious grocery choices and rewarding customers with exclusive NFTs integrating blockchain rewards into everyday shopping.',
      link: 'https://github.com/vanshwahi01/DeSales',
    },
    {
      title: 'Published Research Paper',
      description: '"3D Modelling and its Applications in Mechanical Engineering". International Journal of Scientific Research in Computer Science and Engineering, Vol 9, Issue 5, Oct 2021. Provides a detailed insight into the field of 3D Modelling and Designing in Mechanical Engineering. Different aspects of Designing, in real-world scenarios, as well as their applications have been discussed throughout this paper. 3D CAD modelling and rendering has been described in detail, along with its advances and applications under mechanical engineering and product development.',
      link: 'https://www.isroset.org/pdf_paper_view.php?paper_id=2555&7-ISROSET-IJSRCSE-06720.pdf',
    },
    {
      title: 'Interactive Chess Game',
      description: 'Developed interactive chess game with xwindow graphics in C++ using object-oriented programming concepts. The game has features like move validation, checkmate detection, and pawn promotion. The game also has a feature to save and load the game state. It was part of capstone project for my major in Computer Science.',
      link: 'https://github.com/vanshwahi01/Chess-Game',
    },
    {
      title: 'IBM Certified CS Badges',
      description: 'Over the course of 4 months, I earned over 11 badges from IBM by completing certified digital courses in various topics such as Artificial Intelligence, Machine Learning, IOT, Chatbot development, Into into Coding, Blockchain, Enterprise Design Thinking (Co-creator and Practitioner level), VR, AR.',
      link: 'https://drive.google.com/drive/folders/1947v3lCWL8gcMgRoHwTUvwU3faRJpgYm?usp=sharing',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-tile">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
