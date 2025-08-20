import React from "react";
import OlxLogo from "./olxlogo.png";
import Carslogo from "./iconmotors.png";
import Homelogo from "./iconhome.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <div className="nav-left">
      <div className="olx-logo-wrapper">
  <img src={OlxLogo} alt="OLX Logo" className="olx-logo" />
</div>

        <div className="iconss">
                 
              <div className="nav-item">
                <img src={Carslogo} alt="Motors" className="nav-icon" />
                <a href="/">
                  <span>Motors</span>
                </a>
              </div>
              <div className="nav-item">
                <img src={Homelogo} alt="Property" className="nav-icon" />
                <a href="/">
                  {" "}
                  <span>Property</span>
                </a>
              </div>
            </div>
          </div>

          <div className="nav-right">
            <Link to="/login" className="login-link">
              Login
            </Link>
            <Link to="/sell" className="sell-btn">
              <i className="fa-solid fa-plus"></i> Sell
            </Link>
          </div>
        </div>

        <div className="nav-center">
        <div className="left-search">
  <div className="select-wrapper">
    <i className="fa-solid fa-location-dot location-icon"></i>
    <select className="location-select">
      <option>Pakistan</option>
      <option>Karachi</option>
      <option>Lahore</option>
      <option>Islamabad</option>
    </select>
  </div>
</div>

          <div className="right-search">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
              className="search-input"
            />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i> <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
