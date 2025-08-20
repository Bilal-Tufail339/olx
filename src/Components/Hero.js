import React, { useState } from "react";
import "./Hero.css";
import Switchpng from "./switch.png";
import Linegrid from "./iconGrid.svg";
import Lineicon from "./iconList.svg";
import Mobilepic5 from "./mobile3.webp"
// import caryellow from "./yellow-cars.jpg";

export default function Hero() {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    "All categories",
    "Vehicles(887)",
    "Services(175)",
    "Fashion & Beauty(86)",
    "Electronics & Home Appliances(63)",
    "Furniture & Home Decor(18)",
    "Mobiles(17)",
    "Business, Industrial & Agriculture(17)",
    "Books, Sports & Hobbies(15)",
    "Jobs(14)",
    "Bikes(4)",
  ];

  const firstPart = categories.slice(0, 5);
  const secondPart = categories.slice(5);

  return (
    <div className="hero-container">
     
      <div className="logo-pakistan">
        <a href="/" className="home">
          Home
        </a>
        <p className="logo-txt">
          Logo in Pakistan <span>1,299 Results</span>
        </p>
      </div>

   
      <div className="card-container">
       
        <div className="slider-container">
          <div className="left-card-container">
         
            <div className="left-card-box">
              <p>
                <strong>Categories</strong>
              </p>
              <ul>
                {firstPart.map((cat, i) => (
                  <li key={i}>
                    <a href="/">{cat}</a>
                  </li>
                ))}

                {showMore &&
                  secondPart.map((cat, i) => (
                    <li key={i + firstPart.length}>
                      <a href="/">{cat}</a>
                    </li>
                  ))}

                <li>
                  <button
                    type="button"
                    className="show-more-btn"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? (
                      <>
                        Show Less <i className="fa-solid fa-angle-up"></i>
                      </>
                    ) : (
                      <>
                        Show More <i className="fa-solid fa-angle-down"></i>
                      </>
                    )}
                  </button>
                </li>
              </ul>
            </div>

      
            <div className="card card-box">
              <div className="card-body">
                <h5 className="card-title">Location</h5>
                <select className="card-select">
                  <option>Pakistan</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Islamabad</option>
                </select>

                <ul className="location-list">
                  <li>
                    <strong>Pakistan</strong>
                  </li>
                  <li>Punjab(1,116)</li>
                  <li>Sindh(1,001)</li>
                  <li>Islamabad Capital Territory(916)</li>
                  <li>Khyber Pakhtunkhwa(884)</li>
                  <li>Azad Kashmir(877)</li>
                  <li>Balochistan(876)</li>
                </ul>
              </div>
            </div>

       
            <div className="price-card">
              <p className="price-text">
                <strong>Price</strong>
              </p>
              <div className="price-container">
                <input type="number" placeholder="Minimum" />
                <p>to</p>
                <input type="number" placeholder="Maximum" />
              </div>
            </div>

            
            <div className="left-last-card">
              <p>
                <strong>Want to see your stuff here?</strong>
              </p>
              <p>
                <small>
                  Make some extra cash by selling <br /> things in your
                  community.
                  <br />
                  Go on, it's quick and easy.
                </small>
              </p>
              <a href="/">Start Selling</a>
            </div>
          </div>
        </div>

   
        <div className="right-card-container">
         
          <div className="badge-line">
            <div className="left-side-badge">
              <h6 className="left-badge">
                Buy with <span><strong>Delivery</strong></span>{" "}
                <span className="badge text-bg-danger">New</span>{" "}
                <img src={Switchpng} alt="switch" style={{ height: "30px" }} />
              </h6>
            </div>
            <div className="right-badge">
              <strong>View</strong>
              <img src={Lineicon} alt="list" />
              <img src={Linegrid} alt="grid" />
              <strong>
                Sort by: <span>Most relevant</span>
              </strong>
            </div>
          </div>

          <hr />

       
          <div className="cars-all-container">
            {[...Array(4)].map((_, i) => (
              <div className="card card-img mb-3" key={i}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Mobilepic5}
                      className="img-fluid rounded-start"
                      alt="car"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="mobile-price">
                        <p><strong>RS 22,500</strong></p>
                        <p>🤍</p> </div>
                <p className="card-text">
                        <small className="text-body-secondary">
                          cantt,sialkot . 4 weaks ago ago
                        </small>
                      </p>
                     <div className="price-btn">
                      <a href="/" className="pricebtn1"><i class="fa-solid fa-phone"></i><span className="call">call</span></a>
                      <a href="/" className="pricebtn2"><i class="fa-solid fa-comment"></i><span className="chat">chat</span></a>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
       
        </div>
      </div>
    </div>
  );
}
