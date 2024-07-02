


function GameInfo({ gameResult, curTurn }) {
    const renderWinner = (gameResult) => {
        if (gameResult == "draw") {
          return <span>Draw !</span>
        } else if (gameResult == "X") {
          return <span className='xField'>X Winner</span>
        } else if (gameResult == "O") {
          return <span className='oField'>O Winner</span>
        }
      }

    
    return  <div className="gameInfo" data-aos="fade-up">
                <div className="turnInfo">Turn: <span className={curTurn == "X" ? 'xField' : 'oField'}>{curTurn}</span></div>
                <div className="winnerBlock">{renderWinner(gameResult)}</div>
            </div>
}

export default GameInfo