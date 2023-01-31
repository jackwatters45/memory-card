import React from 'react';
import Card from '../Card/Card';
import characters from '../useGame/characters';
import '../../styles/Game.css'

const Game = () => {
  return (
    <section className='game'>
      {characters.map((character) => (
        <Card name={character.name} img={character.img} />
      ))}
    </section>
  );
};

export default Game;
