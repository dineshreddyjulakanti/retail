import React from 'react';
import './Welcomepage.css'; // Import the CSS file for styling

import image1 from './image1.webp';
import image2 from './image2.jpg';

const Welcomepage = () => {
  return (
    <div className="landing-page">
      <div className="slideshow">
        <div className="slide">
          <img src={image1} alt="Background 1" />
        </div>
        <div className="slide">
          <img src={image2} alt="Background 2" />
        </div>
      </div>
      <div className="welcome-text">
        <h4>Welcome To Retail</h4>
      </div>
    </div>
  );
};

export default Welcomepage;
