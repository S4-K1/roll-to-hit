import React from 'react';
import PropTypes from 'prop-types';
import './css/diceRoller.css';

function DiceRoller(props) {
  return (
    <div className="diceRollBox">
        <button className="diceRollButton" onClick={() => props.roll()}>{props.dice}</button>
    </div>
  );
}

DiceRoller.propTypes = {
  roll: PropTypes.func.isRequired,
  dice: PropTypes.number.isRequired,
};


export default DiceRoller;
