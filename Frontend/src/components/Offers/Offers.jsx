import React from 'react';
import './Offers.css';
import { assets } from '../../assets/assets';

const OfferSection = () => {
  return (
    <div className="offer-section">
      <div className="offer-content">
        <h2>Special Deals Just<br />For You!</h2>
        <p>Discover our exclusive selection of <br /> the season's hottest items.</p>
        <button className="offer-button">Explore Now</button>
      </div>
      <div className="offer-image">
        <img src={assets.exclusive_image}/>
      </div>
    </div>
  );
};

export default OfferSection;
