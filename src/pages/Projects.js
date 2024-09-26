import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Font Awesome Icons
import './Projects.css';

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/images/project1.png',
      description: 'This is a brief description of Project 1.',
      link: 'https://github.com/your-username/project1',
    },
    {
      title: 'Project 2',
      image: '/images/project2.png',
      description: 'This is a brief description of Project 2.',
      link: 'https://github.com/your-username/project2',
    },
    {
      title: 'Project 3',
      image: '/images/project3.png',
      description: 'This is a brief description of Project 3.',
      link: 'https://github.com/your-username/project3',
    },
    {
      title: 'Project 4',
      image: '/images/project4.png',
      description: 'This is a brief description of Project 4.',
      link: 'https://github.com/your-username/project4',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-tile">
            <img src={project.image} alt={project.title} className="project-thumbnail" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
