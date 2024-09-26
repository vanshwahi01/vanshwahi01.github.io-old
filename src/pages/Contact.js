import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      organization: data.organization,
      message: data.message
    };

    // Send email using EmailJS
    emailjs.send(
      'service_mg4mvb7', // EmailJS Service ID
      'template_oh4dy43', // EmailJS Template ID
      templateParams,
      'oh2HflxYPTr1qNxmm' // Your EmailJS User ID
    )
    .then((response) => {
      alert('Message sent successfully!');
      console.log('Success!', response.status, response.text);
      reset(); // Reset the form
    })
    .catch((err) => {
      alert('Failed to send message, please try again.');
      console.log("Failed to send message. Error: ", err);
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        {/* Left Section */}
        <div className="contact-info">
          <h2>Connect with Me !</h2>
          <p>Email: v3wahi@uwaterloo.ca</p>
          <div className="icons">
            <a href="https://github.com/vanshwahi01" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/vanshwahi/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileAlt} size="2x" />
            </a>
            <a href="mailto:v3wahi@uwaterloo.ca">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              {...register('fullName', { required: 'Full name is required' })}
            />
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}

            <input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <input
              type="text"
              placeholder="Organization"
              {...register('organization', { required: 'Organization is required' })}
            />
            {errors.organization && <p className="error-message">{errors.organization.message}</p>}

            <textarea
              placeholder="Your Message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="error-message">{errors.message.message}</p>}

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
