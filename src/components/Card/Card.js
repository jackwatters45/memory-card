import React from 'react';
import '../../styles/Card.css';

const Card = ({ name, img, id, handleClick }) => {
  return (
    <div className="card" key={id} onClick={() => handleClick(id)}>
      <img className="cardImage" src={img} alt={name} />
      <div className="characterName">{name}</div>
    </div>
  );
};

export default Card;
