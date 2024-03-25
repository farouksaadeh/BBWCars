import React from 'react';

const CarItem = ({ car, onCarSelect }) => {
  const handleCarSelect = () => {
    // Finden Sie das Element, zu dem Sie scrollen möchten
    const rentForm = document.querySelector('.rent-form');
    // Scrollen Sie zum Element, wenn es gefunden wurde
    if (rentForm) {
      rentForm.scrollIntoView({ behavior: 'smooth' });
    }
    // Rufen Sie die übergebene Funktion onCarSelect auf
    onCarSelect(car);
  };

  return (
    <div className="car-item" onClick={handleCarSelect}>
      <img src={car.image} alt={car.model} />
      <h3>{car.model}</h3>
      <p>Preis pro Tag: {car.price} CHF</p>
      <p>Kilometer inklusive: {car.kilometers} km</p>
      <p>Standort: {car.location}</p>
    </div>
  );
};

export default CarItem;
