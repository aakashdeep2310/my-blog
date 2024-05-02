// Header.js
import React from 'react';
import logo from './logo1.png'; // Import the logo image file
import './App.css'; // Import CSS file for header styles

function Header() {
  return (
    <header className="Header">
      <div className="Logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="Title">Article.com</h1>
      <nav>
        <ul className="NavLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
