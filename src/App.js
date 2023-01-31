import Game from './components/Game/Game';
import Header from './components/Header/Header';
import './styles/App.css';

const App = () => {
  // TODO
  const score = 0;
  const highScore = 0;

  return (
    <container className="container">
      <Header score={score} highScore={highScore} />
      <Game />
    </container>
  );
};

export default App;
