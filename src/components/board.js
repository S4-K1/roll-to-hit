import React, { useState, useEffect } from 'react';
import GridLayer from './layers/gridLayer/gridLayer';
import TokenSquare from './layers/tokenLayer/tokenSquare';
import PropTypes from 'prop-types';

function Board(props) {
  const [tokenSelected, setTokenSelected] = useState(false);
  const [xPosition, setXPosition] = useState(4);
  const [yPosition, setYPosition] = useState(3);

  function openTokenMenu() {
    props.openTokenMenu();
    setTokenSelected(true);
  }

  function closeTokenMenu() {
    props.closeTokenMenu();
    setTokenSelected(false);
  }

  function handleArrows(event) {
    switch (event.keyCode) {
      case 37:
        // Left
        setXPosition((xPosition) => xPosition - 1);
        break;
      case 38:
        // Up
        setYPosition(yPosition + 1);
        break;
      case 39:
        // Right
        setXPosition(xPosition + 1);
        break;
      case 40:
        // Down
        setYPosition(yPosition - 1);
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleArrows);
  }, [xPosition, yPosition]);
  return (
    <div>
      <TokenSquare openTokenMenu={openTokenMenu} xPosition={xPosition} yPosition={yPosition} selected={tokenSelected}/>
      <GridLayer x={10} y={10} closeTokenMenu={closeTokenMenu} />
    </div>
  );
}

Board.propTypes = {
  openTokenMenu: PropTypes.func,
  closeTokenMenu: PropTypes.func,
};

export default Board;
