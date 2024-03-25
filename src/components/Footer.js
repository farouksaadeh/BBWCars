import React, { useState, useEffect } from 'react';
import githubLogo from '../githubLogo.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showReviews, setShowReviews] = useState(false); // Zustand für die Kundenbewertungen
  const reviews = [
    "Schneller und zuverlässiger Service!",
    "Hervorragende Auswahl und Preise.",
    "Freundliches und kompetentes Personal.",
    "Exzellenter Kundenservice!",
    "Großartige Autos zu fairen Preisen.",
    "Immer wieder zufrieden!",
    "Schnelle Lieferung, super Qualität.",
    "Professionell und freundlich.",
    "Beste Auswahl und Preise.",
    "Sehr empfehlenswert, top Qualität.",
    "Fantastischer Kundenservice!",
    "Tolle Autos, freundliches Personal.",
    "Zuverlässiger Service, tolle Auswahl.",
    "Super Service, tolle Preise.",
    "Freundliches Team, gute Autos.",
    "Hervorragende Auswahl, tolle Qualität.",
    "Top Service, tolle Autos.",
    "Beste Preise, freundliches Personal.",
    "Schnelle Lieferung, top Qualität.",
    "Toller Service, fantastische Autos."
];



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
      <a href="https://github.com/farouksaadeh/BBWCars" className="LinkFooter" role="button" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub Logo" className="logo" />
        Unser GitHub Repo - BBW Cars
      </a>
      <div className="reviews-radios">
  <input
    type="radio"
    id="showReviews"
    name="reviewType"
    checked={showReviews}
    onChange={() => setShowReviews(true)}
  />
  <label htmlFor="showReviews">Kundenbewertungen ein</label>
  <br />
  <input
    type="radio"
    id="hideReviews"
    name="reviewType"
    checked={!showReviews}
    onChange={() => setShowReviews(false)}
  />
  <label htmlFor="hideReviews">Kundenbewertungen aus</label>
</div>
<br />


      {/* Slide-Animation für Kundenbewertungen */}
      {showReviews && (
        <div className="reviewSlider">
          {reviews.map((review, index) => (
            <div key={index} className="reviewItem">
              <p>{review}</p>
            </div>
          ))}
        </div>
      )}

     
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
