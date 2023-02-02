// import React from "react";
import './css/diceRoller.css';

function DiceRoller(props) {
  function rollTheDice(max) {
    const roll = (1 + Math.floor(Math.random() * max));
    console.log(roll);
    props.roll(roll);
  }
  return (
    <div className="diceRollBox">
        <button className="diceRollButton" onClick={() => rollTheDice(props.dice)}>{props.dice}</button>
    </div>
  );
}

export default DiceRoller;
