import React from 'react';
import GridSquare from './gridSquare';
import './css/board.css';

function createBoard(x, y) {
  const board = [];
  for (let column = 0; column < y; column++) {
    board.push([]);
    for (let row = 0; row < x; row++) {
      const key = `${column}${row}`;
      board[column].push(<GridSquare key={key} keyProp={key} displayIcon={key === '25'}/>);
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
export default Board;
