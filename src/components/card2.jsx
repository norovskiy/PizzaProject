import React from 'react';
import './card2.css';

const Card2 = ({ img, text }) => {
  return (
    <div className="card2">
      <img src={img} alt={text} className="card2-img" />
      <div className="card2-overlay">
        <h3>{text}</h3>
        <button className="card2-btn">More</button>
      </div>
    </div>
  );
};

export default Card2;