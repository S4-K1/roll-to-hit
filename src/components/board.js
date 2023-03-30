import React from 'react';
import GridSquare from './gridSquare';
import TokenSquare from './tokenSquare';
import PropTypes from 'prop-types';
import './css/board.css';

function createBoard(props, x, y) {
  function openTokenMenu() {
    props.openTokenMenu();
  }

  const board = [];
  for (let column = 0; column < y; column++) {
    board.push([]);
    for (let row = 0; row < x; row++) {
      const key = `${column}${row}`;
      if (key === '25') {
        board[column].push(
          <TokenSquare
            key={key}
            keyProp={key}
            openTokenMenu={openTokenMenu}
          />,
        );
      } else {
        board[column].push(
          <GridSquare key={key}/>,
        );
      }
    }
  }
  return board;
}

function Board(props) {
  const board = createBoard(props, 10, 10);
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
