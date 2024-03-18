import React, { useState } from 'react';

const RentForm = ({ selectedCar, onRentSubmit }) => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRentSubmit({
      car: selectedCar.model,
      pickupDate,
      returnDate,
      firstName,
      lastName,
      email,
      phone,
      address
    });
  };

  return (
    <div className="rent-form">
      <h2>Auto mieten</h2>
      <form onSubmit={handleSubmit}>
        <label>Abholdatum:</label>
        <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />

        <label>Rückgabedatum:</label>
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />

        <label>Vorname:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label>Nachname:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Telefonnummer:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Adresse:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <button type="submit">Auto mieten</button>
      </form>
    </div>
  );
};

export default RentForm;
