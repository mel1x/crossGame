import { useState } from 'react';


function useGameState() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [curTurn, setCurTurn] = useState("X");
    const [gameResult, setGameResult] = useState(null);
    
    const clickHandler = (index) => {
        if (board[index]!= null || gameResult!= null) return;
        const newBoard = [...board];
        newBoard[index] = curTurn;
  
        setCurTurn(curTurn == "X"? "O" : "X");
        setBoard(newBoard);
        
        checkGameResult(newBoard);
    }
  
    const checkGameResult = (newBoard) => {
        for (let i = 0; i < 9; i += 3) {
          if (newBoard[i] !== null && newBoard[i] === newBoard[i + 1] && newBoard[i + 1] === newBoard[i + 2]) {
            setGameResult(newBoard[i]);
            return;
          }
        }
      
        for (let i = 0; i < 3; i++) {
          if (newBoard[i] !== null && newBoard[i] === newBoard[i + 3] && newBoard[i + 3] === newBoard[i + 6]) {
            setGameResult(newBoard[i]);
            return;
          }
        }
      
        if (newBoard[0] !== null && newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8]) {
          setGameResult(newBoard[0]);
          return;
        }
        if (newBoard[2] !== null && newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6]) {
          setGameResult(newBoard[2]);
          return;
        }
      
        if (newBoard.every(elem => elem !== null) && gameResult === null) {
          setGameResult("draw");
        }
    };

    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setCurTurn("X");
      setGameResult(null);
    }

    return {
        board,
        curTurn,
        gameResult,
        clickHandler,
        resetGame
    }
}

export default useGameState