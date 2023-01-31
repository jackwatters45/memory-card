import React from 'react';
import '../../styles/Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img className="cardImage" src={props.img} alt={props.name} />
      <div className="characterName">{props.name}</div>
    </div>
  );
};

export default Card;
