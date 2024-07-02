


function GameField({ board, clickHandler }) {

    return  <div className='gameField'>
                {board.map((elem, index) => (
                  <div className={elem != null ? elem == "X" ? "crossField xField" : "crossField oField" : "crossField"} key={index} onClick={() => {clickHandler(index)}}>{elem}</div>
                ))}
            </div>
}

export default GameField