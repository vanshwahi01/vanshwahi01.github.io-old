import React, { useEffect, useState } from 'react';
import './Footer.css'; // Import your footer styles

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  // Function to check if the user is at the bottom of the page
  const handleScroll = () => {
    const scrollTop = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;

    // Show footer when the user reaches the bottom of the page
    if (scrollTop >= documentHeight - 10) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'show-footer' : ''}`}>
      <p>All Rights Reserved. Made by Vansh Wahi</p>
    </footer>
  );
};

export default Footer;
