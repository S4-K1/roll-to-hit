import React from 'react';
import GridSquare from './gridSquare';
import PropTypes from 'prop-types';
import './css/board.css';

function createBoard(x, y) {
  function openTokenMenu() {
    console.log('Open Token Menu');
    this.props.openTokenMenu();
  }

  const board = [];
  for (let column = 0; column < y; column++) {
    board.push([]);
    for (let row = 0; row < x; row++) {
      const key = `${column}${row}`;
      board[column].push(<GridSquare
        key={key}
        keyProp={key}
        displayIcon={key === '25'}
        openTokenMenu={openTokenMenu}
      />);
    }
  }
  return board;
}

function Board() {
  const board = createBoard(10, 10);
  // TODO Change these to function parameters when implementing changing board size
  return (
    <div className="board">
        {board}
    </div>
  );
}

Board.propTypes = {
  openTokenMenu: PropTypes.func,
};

export default Board;
