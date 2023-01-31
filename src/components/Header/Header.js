import React from 'react';
import Score from './Score';
import '../../styles/Header.css';

const Header = ({ score, highScore }) => {
  return (
    <header className="header">
      <intro className="gameIntro">
        <div className="gameTitle">
          It's Always Sunny In Philadelphia Memory Game
        </div>
        {/* TODO change description */}
        <div className="gameDescription">
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
      </intro>
      <Score score={score} highScore={highScore} />
    </header>
  );
};

export default Header;
