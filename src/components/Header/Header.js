import React from 'react';
import Score from './Score';
import '../../styles/Header.css';

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <div className="gameIntro">
        <div className="gameTitle">
          It's Always Sunny In Philadelphia Memory Game
        </div>
        {/* TODO change description */}
        <div className="gameDescription">
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
      </div>
      <Score score={score} highScore={highScore} />
    </div>
  );
};

export default Header;
