import React from 'react';
import '../styles/Offers.css'; // styling ke liye

const Offers = () => {
  return (
    <div className="offers-page">
      <h1>✨ Special Offers ✨</h1>
      <p>Check out our latest discounts and packages!</p>
      <ul>
        <li>Haircut + Manicure Combo - 20% Off</li>
        <li>Bridal Makeup Package - 15% Off</li>
        <li>Facial + Skin Care Package - 10% Off</li>
      </ul>
    </div>
  );
};

export default Offers;
