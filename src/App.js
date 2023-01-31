import React, { useEffect, useState } from 'react';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import './styles/App.css';

const App = () => {
  const [level, setLevel] = useState(1);
  const handleNewLevel = () => setLevel(level + 1);
  const resetLevel = () => setLevel(1);

  const [score, setScore] = useState(0);
  const resetScore = () => setScore(0);
  useEffect(() => setScore(level - 1), [level, score]);

  const resetGame = () => {
    resetLevel();
    resetScore();
  };

  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score, highScore]);

  return (
    <div className="container">
      <Header score={score} highScore={highScore} />
      <Game
        level={level}
        incrementLevel={handleNewLevel}
        resetGame={resetGame}
      />
    </div>
  );
};

export default App;
