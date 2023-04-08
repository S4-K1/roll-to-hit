import React, { useState } from 'react';
import icon from '../../../resources/exampleIcon.png';
import PropTypes from 'prop-types';
import './tokenSquare.css';


function TokenSquare(props) {
  const convertToMargin = (positionNum) => {
    positionNum = positionNum * 25;
    return positionNum;
  };

  const [xPosition] = useState(convertToMargin(props.position[0]));
  const [yPosition] = useState(convertToMargin(props.position[1]));

  const openTokenMenu = (command) => {
    props.openTokenMenu(command);
  };

  return (
      <img
        style={{
          marginLeft: `${xPosition - 150}px`,
          marginTop: `${yPosition - 25}px`,
        }}
        className={!props.selected ? 'token-square' : 'token-square selected'}
        src={icon}
        onClick={openTokenMenu}
      />
  );
}

TokenSquare.propTypes = {
  openTokenMenu: PropTypes.func,
  position: PropTypes.array,
  selected: PropTypes.bool,
};

export default TokenSquare;
