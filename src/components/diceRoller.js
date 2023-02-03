import React from 'react';
import PropTypes from 'prop-types';
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

DiceRoller.propTypes = {
  roll: PropTypes.func.isRequired,
  dice: PropTypes.number.isRequired,
};


export default DiceRoller;
