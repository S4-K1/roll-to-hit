import React from 'react';
import GridSquare from './gridSquare';
import TokenSquare from './tokenSquare';
import PropTypes from 'prop-types';
import './css/board.css';

function createBoard(x, y) {
  const board = [];
  for (let row = 0; row < x; row++) {
    board.push([]);
    for (let column = 0; column < y; column++) {
      const key = `${row}${column}`;
      board[row].push(
        <GridSquare key={key}/>,
      );
    }
  }
  return board;
}

function Board(props) {
  const board = createBoard(10, 10);
  // TODO Change these to function parameters when implementing changing board size
  return (
    <div>
      <div>
       <TokenSquare openTokenMenu={props.openTokenMenu} position={[3, 9]} />
      </div>
      <div className="board">
        {board}
      </div>
    </div>
  );
}

Board.propTypes = {
  openTokenMenu: PropTypes.func,
};

export default Board;
