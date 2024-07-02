import GameInfo from './components/GameInfo';
import GameField from './components/GameField';
import ResetButton from './components/ResetButton';
import useGameState from './customHooks/useGameState';
import './App.css';

function App() {
  const {board, curTurn, gameResult, clickHandler, resetGame} = useGameState();

  return (
    <>
      <GameInfo gameResult={gameResult} curTurn={curTurn} />
      <GameField board={board} clickHandler={clickHandler} />
      {gameResult != null? <ResetButton resetGame={resetGame} /> : ''}
    </>
  )
}

export default App