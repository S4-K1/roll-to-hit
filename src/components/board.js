import React, { useState } from 'react';
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

  function moveTokenLeft() {
    setXPosition(xPosition - 1);
  }

  function moveTokenUp() {
    setYPosition(2);
    console.log(yPosition);
  }

  function moveTokenRight() {
    setXPosition(xPosition + 1);
  }

  function moveTokenDown() {
    setYPosition(yPosition - 1);
  }

  function handleArrows(event) {
    switch (event.keyCode) {
      case 37:
        console.log('left');
        moveTokenLeft();
        break;
      case 38:
        console.log('up');
        moveTokenUp();
        break;
      case 39:
        console.log('right');
        moveTokenRight();
        break;
      case 40:
        console.log('down');
        moveTokenDown();
        break;
    }
  }

  document.addEventListener('keydown', handleArrows);
  return (
    <div>
      <TokenSquare openTokenMenu={openTokenMenu} position={[xPosition, yPosition]} selected={tokenSelected}/>
      <GridLayer x={10} y={10} closeTokenMenu={closeTokenMenu} />
    </div>
  );
}

Board.propTypes = {
  openTokenMenu: PropTypes.func,
  closeTokenMenu: PropTypes.func,
};

export default Board;
