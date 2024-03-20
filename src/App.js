import React, { useState } from 'react';
import CarItem from './components/CarItem';
import RentForm from './components/RentForm';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

const App = () => {
  const cars = [
    {
      model: 'BMW X5',
      image: 'https://cdn.drivek.it/configurator-covermobile/cars/it/$original$/BMW/X5/32359_SUV-5-PORTE/bmw-x5-2018-cover-mobile.jpg',
      price: 100,
      kilometers: 200,
      location: 'Winterthur'
    },
    {
      model: 'Audi A4',
      image: 'https://media.autoexpress.co.uk/image/private/s--N_u_KzlU--/v1562241816/autoexpress/2/99/_dsc6043_0.jpg',
      price: 80,
      kilometers: 150,
      location: 'Zürich'
    },
    {
      model: 'Mercedes-Benz C-Class',
      image: 'https://www.topgear.com/sites/default/files/images/news-article/carousel/2021/02/8a720e3425a4076f8ee5acdcb8514f68/21c0053_001.jpg',
      price: 120,
      kilometers: 250,
      location: 'Zürich'
    },
    {
      model: 'Volkswagen Golf',
      image: 'https://th.bing.com/th/id/R.4bf563b769bbb0a69a6490bcd7d66337?rik=5Kuc0cw34e6P1w&pid=ImgRaw&r=0',
      price: 90,
      kilometers: 180,
      location: 'Winterthur'
    },
    {
      model: 'Toyota Camry',
      image: 'https://th.bing.com/th/id/R.2c9312457e7ccd73116d283b6d8e8bc3?rik=6vjr%2bjYQUQmLAg&riu=http%3a%2f%2fs3.caradvice.com.au%2fwp-content%2fuploads%2f2017%2f06%2f2018-Toyota-Camry-3851-2.jpg&ehk=oTtkJKIDGdIaBxmcjG2dnYKt7mux2fHWx8H3meBmtS0%3d&risl=&pid=ImgRaw&r=0',
      price: 110,
      kilometers: 220,
      location: 'Zürich'
    },
    {
      model: 'Ford Mustang',
      image: 'https://th.bing.com/th/id/R.28447904238ec690f765419396977ea3?rik=bQUEZyNNPF8kWw&riu=http%3a%2f%2fperformancedrive.com.au%2fwp-content%2fuploads%2f2017%2f09%2f2017-Ford-Mustang-GT-hero.jpg&ehk=bPO6fI06pGrh7Gp8paSAkfnZe9I%2fOlHyJRMMadV6ghk%3d&risl=&pid=ImgRaw&r=0',
      price: 150,
      kilometers: 300,
      location: 'Arrgau'
    },
    {
      model: 'Honda Civic',
      image: 'https://th.bing.com/th/id/R.5af9279b3b4dc50e1a8557252b2e3ab9?rik=A3kTDs1NAzlrAw&riu=http%3a%2f%2fwww.thetruthaboutcars.com%2fwp-content%2fuploads%2f2016%2f09%2f2017_Honda_Civic_Hatchback_07.jpg&ehk=kL6Ce2r1AWtEf0gdSHDnYnEaRQOfqxrDv%2bAvy4qKmc8%3d&risl=&pid=ImgRaw&r=0',
      price: 95,
      kilometers: 190,
      location: 'Winterthur'
    },
    {
      model: 'Chevrolet Corvette',
      image: 'https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2018/04/001b9c370937fc389cefc1c4d1c853e8/_dsc6911.jpg',
      price: 200,
      kilometers: 350,
      location: 'Zürich'
    },
    {
      model: 'Hyundai Sonata',
      image: 'https://media.autoexpress.co.uk/image/private/s--5fEQSSzz--/v1562247463/autoexpress/2019/03/large-35792-hyundaimotorsharesfirstglimpseofall-newsonata.jpg',
      price: 100,
      kilometers: 200,
      location: 'Zürich'
    },
    {
      model: 'Subaru Outback',
      image: 'https://fleetimages.bobitstudios.com/upload/automotive-fleet/content/news/vehicles/subaru/subaru-outback-2020-driving.jpg',
      price: 120,
      kilometers: 240,
      location: 'Arrgau'
    },
    {
      model: 'Nissan Altima',
      image: 'https://th.bing.com/th/id/R.5d04f72c768c3aed996350ca7023868b?rik=Bo9G0De3KHiL7g&pid=ImgRaw&r=0',
      price: 105,
      kilometers: 210,
      location: 'Winterthur'
    },
    {
      model: 'Kia Sportage',
      image: 'https://media.autoexpress.co.uk/image/private/s--LfV7cUyR--/v1607680651/autoexpress/2020/12/2021%20Kia%20Sportage%20exclusive%20images.jpg',
      price: 85,
      kilometers: 170,
      location: 'Arrgau'
    },
    {
      model: 'BMW 3 Series',
      image: 'https://th.bing.com/th/id/R.9d463ba96438d081dc43e386e8185689?rik=UxBT39kOkxuavA&pid=ImgRaw&r=0',
      price: 130,
      kilometers: 260,
      location: 'Zürich'
    },
    {
      model: 'Lexus ES',
      image: 'https://th.bing.com/th/id/R.12df36873f8e7d66d3f2c90525dfd4cc?rik=RS0GwC0n827LuA&pid=ImgRaw&r=0',
      price: 140,
      kilometers: 280,
      location: 'Zürich'
    },
    {
      model: 'Mazda MX-5 Miata',
      image: 'https://th.bing.com/th/id/R.72526d3b94dc46d2ed588e492369e9ae?rik=e%2fF1h%2b5qV%2fkIjw&riu=http%3a%2f%2fcdn.carbuzz.com%2fgallery-images%2f1600%2f507000%2f500%2f507501.jpg&ehk=qrUi3NAFSTbuR3GymT1xEzi%2fztn8D2IZkK1jz1ia67E%3d&risl=&pid=ImgRaw&r=0',
      price: 80,
      kilometers: 160,
      location: 'Winterthur'
    },
    {
      model: 'Audi Q5',
      image: 'https://www.assobrav.com.br/wp-content/uploads/2020/11/audi-q5-sportback-45-tfsi-quattro-s-line-83-08be03e909680657.jpg',
      price: 125,
      kilometers: 250,
      location: 'Arrgau'

    },
    {
      model: 'Volvo XC60',
      image: 'https://th.bing.com/th/id/OIP.4IPBdKQHKnKcrXg07hZO4AHaE8?rs=1&pid=ImgDetMain',
      price: 135,
      kilometers: 270,
      location: 'Arrgau'
    },
    {
      model: 'Tesla Model 3',
      image: 'https://images.caradisiac.com/logos-ref/modele/modele--tesla-model-3/S0-modele--tesla-model-3.jpg',
      price: 180,
      kilometers: 360,
      location: 'Winterthur'
    },
    {
      model: 'Porsche 911',
      image: 'https://media4.speedcafe.com/wp-content/uploads/2021/01/Porsche-911-Turbo-S-003-scaled.jpg',
      price: 250,
      kilometers: 500,
      location: 'Zürich'
    }
    
  ];

  const [selectedCar, setSelectedCar] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const [sortBy, setSortBy] = useState('none');
  const [location, setLocation] = useState(""); // State für die ausgewählte Location

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleRentSubmit = (rentalData) => {
    setConfirmation(rentalData);
  };

  const sortCars = (sortType) => {
    switch (sortType) {
      case 'lowest':
        return [...cars].sort((a, b) => a.price - b.price);
      case 'highest':
        return [...cars].sort((a, b) => b.price - a.price);
      default:
        return cars;
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  return (
    <div className="app">
      <h1>BBW Cars</h1>
      <h2>Farouk & Nemanja</h2>
      {/* Radio-Buttons zur Auswahl der Location */}
      <div className="location-options">
        <label>
          <input
            type="radio"
            value=""
            checked={location === ""}
            onChange={() => handleLocationChange("")}
          />
          Alle Standorte
        </label>
        <label>
          <input
            type="radio"
            value="Zürich"
            checked={location === "Zürich"}
            onChange={() => handleLocationChange("Zürich")}
          />
          Zürich
        </label>
        <label>
          <input
            type="radio"
            value="Winterthur"
            checked={location === "Winterthur"}
            onChange={() => handleLocationChange("Winterthur")}
          />
          Winterthur
        </label>
        <label>
          <input
            type="radio"
            value="Arrgau"
            checked={location === "Arrgau"}
            onChange={() => handleLocationChange("Arrgau")}
          />
          Arrgau
        </label>
      </div>

      <div className="sort-options">
        <label htmlFor="sort">Sortieren nach:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="none">Keine</option>
          <option value="lowest">Günstigste zuerst</option>
          <option value="highest">Höchste zuerst</option>
        </select>
      </div>

      <div className="car-list">
        {sortCars(sortBy).filter(car => !location || car.location === location).map((car, index) => (
          <CarItem key={index} car={car} onCarSelect={handleCarSelect} />
        ))}
      </div>
      {selectedCar && (
        <RentForm selectedCar={selectedCar} onRentSubmit={handleRentSubmit} />
      )}
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
      <Footer />
    </div>
  );
};


export default App;