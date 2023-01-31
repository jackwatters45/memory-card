import React from 'react';

const Score = ({ score, highScore }) => {
  return (
    <score className='score' >
      <div>Score: {score}</div>
      <div>High Score: {highScore}</div>
    </score>
  );
};

export default Score;
