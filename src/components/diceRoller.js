import React from "react";
import './css/diceRoller.css'

function RTD(max) {
    console.log(1 + Math.floor(Math.random() * max))
}

function DiceRoller(props) {
    return (
        <div className="diceRollBox">
            <button className="diceRollButton" onClick={() => RTD(props.dice)}>{props.dice}</button>
        </div>
    )
}

export default DiceRoller;