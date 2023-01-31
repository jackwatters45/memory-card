import React from 'react';

const Score = ({ score, highScore }) => {
  return (
    <div className='score' >
      {/* level */}
      {/* characters left in current level */}
      <div>Score: {score}</div>
      <div>High Score: {highScore}</div>
    </div>
  );
};

export default Score;
