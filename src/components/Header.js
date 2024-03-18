// Header.js
import React from 'react';
import logo from '../src/logo.svg'; // Importiere das Logo
import { Link } from 'react-router-dom'; // Importiere Link aus react-router-dom

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <button>Home</button> {/* Home-Button, der zur Startseite verlinkt */}
      </Link>
      <img src={logo} alt="Logo" /> {/* Verwende das importierte Logo */}
    </div>
  );
};

export default Header;
