import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <p>&copy; 2024 BBWCars. Alle Rechte vorbehalten.</p>
      <p>Farouk Saadeh | Nemanja Stevanovic</p>

      <div
        className={`toTopButton ${isVisible ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        UP
      </div>
    </footer>
  );
};

export default Footer;
