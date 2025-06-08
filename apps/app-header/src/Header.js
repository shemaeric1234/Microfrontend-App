import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1>Microfrontend Demo</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
