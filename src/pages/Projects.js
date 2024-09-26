import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules'; // Correct import for Swiper 8+
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';
import Footer from '../components/Footer';

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
              <img src={project.image} alt={project.title} className="project-thumbnail" />
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
