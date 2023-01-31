import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import '../../styles/Game.css';
import characters from './characters';

const Game = ({ level, incrementLevel, resetGame }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const handleNewGameboard = () => {
      const gameboard = [];
      let charactersCopy = [...characters];
      for (let i = 0; i < level * 2; i++) {
        const randomIndex = Math.floor(Math.random() * charactersCopy.length);
        const randomCharacter = charactersCopy[randomIndex];
        randomCharacter.isClicked = false;

        gameboard.push(randomCharacter);

        charactersCopy = charactersCopy.filter(
          (character) => character !== randomCharacter,
        );
      }
      setCards(gameboard);
    };
    handleNewGameboard();
  }, [level]);

  const handleCardClick = (id) => {
    const handleCheckAlreadyClicked = (id) => {
      const character = cards.find((character) => character.id === id);
      return character.isClicked;
    };
    if (handleCheckAlreadyClicked(id)) resetGame()

    const handleToggleIsClicked = (id) => {
      const character = cards.find((character) => character.id === id);
      character.isClicked = true;
      setCards([...cards, character]);
    };
    handleToggleIsClicked(id);

    const handleCheckNextLevel = () =>
      cards.find((character) => !character.isClicked);
    if (!handleCheckNextLevel()) incrementLevel();

    // Stolen from stackoverflow..
    const handleShuffle = () => {
      let charactersCopy = [...cards];
      let currentIndex = charactersCopy.length,
        randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [charactersCopy[currentIndex], charactersCopy[randomIndex]] = [
          charactersCopy[randomIndex],
          charactersCopy[currentIndex],
        ];
      }
      setCards(charactersCopy);
    };
    handleShuffle();
  };

  return (
    <div className="game">
      {cards &&
        cards.map(({ name, img, id }) => (
          <Card name={name} img={img} id={id} handleClick={handleCardClick} />
        ))}
    </div>
  );
};

export default Game;
