


function ResetButton({ resetGame }) {
    

    return (<div className="resetButtonZone" data-aos="fade-down">
                <button className='resetButton' onClick={resetGame}>Reset</button>
            </div>)
}

export default ResetButton