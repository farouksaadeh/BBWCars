// CarItem.js
import React from 'react';

const CarItem = ({ car, onCarSelect }) => {
  return (
    <div className="car-item" onClick={() => onCarSelect(car)}>
      <img src={car.image} alt={car.model} />
      <h3>{car.model}</h3>
      <p>Preis pro Tag: {car.price} CHF</p>
      <p>Kilometer inklusive: {car.kilometers} km</p>
    </div>
  );
};

export default CarItem;
