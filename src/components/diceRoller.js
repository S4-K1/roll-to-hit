import React from "react";

function RTD(max) {
    console.log(1 + Math.floor(Math.random() * max))
}

function DiceRoller(props) {
    return (
        <div>
            <button onClick={RTD(props.dice)}>Roll a D{props.dice}</button>
        </div>
    )
}

export default DiceRoller;