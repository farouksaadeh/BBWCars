import React, { useState } from 'react';
import CarItem from './CarItem';
import RentForm from './RentForm';

const App = () => {
  const cars = [
    {
      model: 'BMW X5',
      image: 'bmw_x5.png',
      price: 100,
      kilometers: 200
    },
    {
      model: 'Audi A4',
      image: 'audi_a4.png',
      price: 80,
      kilometers: 150
    },
    {
      model: 'Mercedes-Benz C-Class',
      image: 'mercedes_c_class.png',
      price: 120,
      kilometers: 250
    }
  ];

  const [selectedCar, setSelectedCar] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleRentSubmit = (rentalData) => {
    setConfirmation(rentalData);
  };

  return (
    <div className="app">
      <h1>Autovermietung</h1>
      <div className="car-list">
        {cars.map((car, index) => (
          <CarItem key={index} car={car} onCarSelect={handleCarSelect} />
        ))}
      </div>
      {selectedCar && <RentForm selectedCar={selectedCar} onRentSubmit={handleRentSubmit} />}
      {confirmation && (
        <div className="confirmation">
          <h2>Vielen Dank für Ihre Reservierung!</h2>
          <p>Details:</p>
          <p>Auto: {confirmation.car}</p>
          <p>Abholdatum: {confirmation.pickupDate}</p>
          <p>Rückgabedatum: {confirmation.returnDate}</p>
          <p>Vorname: {confirmation.firstName}</p>
          <p>Nachname: {confirmation.lastName}</p>
          <p>Email: {confirmation.email}</p>
          <p>Telefonnummer: {confirmation.phone}</p>
          <p>Adresse: {confirmation.address}</p>
        </div>
      )}
    </div>
  );
};

export default App;
