import React from 'react';
import './StarshipCard.css';

const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>
    </div>
  );
};

export default StarshipCard;

