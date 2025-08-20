import React from "react";
import "./Main.css";

import mobileIcon from "./mobile.png";

import homeIcon from "./vehicle.png";
import rentIcon from "./business.png";
import electronicsIcon from "./eletric.png";
import bikeIcon from "./bikes.png";
import Homeicon from "./home.png";


import jobIcon from "./jobs.png";
import animalIcon from "./animals.png";
import furnitureIcon from "./forniture.png";
import fashionIcon from "./fashion.png";
import bookIcon from "./books.png";
import kidsIcon from "./kids.png";

export default function Categories() {
  const categories = [
    { name: "Mobiles", icon: mobileIcon },
    { name: "Car For Sale", icon: homeIcon },
    { name: "Property For Sale", icon: Homeicon },
    { name: "Business & industrial", icon: rentIcon },
    { name: "Electronics & Home", icon: electronicsIcon },
    { name: "Bikes", icon: bikeIcon },

 
    { name: "Jobs", icon: jobIcon },
    { name: "Animals", icon: animalIcon },
    { name: "Furniture & Home Decor", icon: furnitureIcon },
    { name: "Fashion & Beauty", icon: fashionIcon },
    { name: "Books, Sports & Hobbies", icon: bookIcon },
    { name: "Kids", icon: kidsIcon },
     { name: "Mobiles", icon: mobileIcon },
        { name: "Car For Sale", icon: homeIcon },
  ];

  return (
    <div className="categories-container">
      {categories.map((cat, i) => (
        <div key={i} className="category-card">
          <img src={cat.icon} alt={cat.name} className="category-icon" />
          <p className="category-name">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
