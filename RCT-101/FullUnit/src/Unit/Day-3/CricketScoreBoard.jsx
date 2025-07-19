// We will learn useState alog with creating a mini app called Cricket Score Board
import React from 'react'
function CricketScoreBoard() {
    let [balls, setBalls] = React.useState(6);
    let [score, setScore] = React.useState(0);
    function handleHitBall() {
        setBalls(balls -= 1)
        let scorePrev = Math.ceil(Math.random() * 6)
        setScore(score + scorePrev)
    }
    function handleReset() {
        setScore(0);
        setBalls(6);
    }

    return (
        <>
            <div style={{
                backgroundColor: "#000",
                width: "100%", height:
                    "100vh", display: "flex", flexDirection:
                    "column", justifyContent: "center", alignItems
                    : "center", alignContent: "center", textAlign: "center"
            }}>


                <h1 style={{ color: "#FFF" }}>Current Score : {score}</h1>
                <h1 style={{ color: "#FFF" }}>Balls Remaining : {balls}</h1>
                <div style={{ display: "flex", width: "250px", justifyContent: "space-between" }}>
                    <button disabled={balls == 0} onClick={handleHitBall}>Hit the Ball</button>

                    <button onClick={handleReset}>Reset Game</button>
                </div>
            </div>

        </>
    )
}

export default CricketScoreBoard
