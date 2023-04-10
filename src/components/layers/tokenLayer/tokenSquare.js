import React from 'react';
import icon from '../../../resources/exampleIcon.png';
import PropTypes from 'prop-types';
import './tokenSquare.css';


function TokenSquare(props) {
  const convertToMargin = (positionNum) => {
    positionNum = positionNum * 50;
    return positionNum;
  };

  const openTokenMenu = (command) => {
    props.openTokenMenu(command);
  };

  return (
      <img
        style={{
          marginLeft: `${convertToMargin(props.xPosition) - 300}px`,
          marginTop: `${convertToMargin(props.yPosition) - 50}px`,
        }}
        className={!props.selected ? 'token-square' : 'token-square selected'}
        src={icon}
        onClick={openTokenMenu}
      />
  );
}

TokenSquare.propTypes = {
  openTokenMenu: PropTypes.func,
  xPosition: PropTypes.number,
  yPosition: PropTypes.number,
  selected: PropTypes.bool,
};

export default TokenSquare;
