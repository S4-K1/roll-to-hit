import React from "react";
import GridSquare from "./gridSquare";
import './css/board.css'

function createBoard(x, y) {
    let board = []
    for (let row = 0; row < x; row++){
        board.push([])
        for (let column = 0; column < y; column++) {
            board[row].push(<GridSquare key={`${column}${row}`}/>)
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
    )
}
export default Board;