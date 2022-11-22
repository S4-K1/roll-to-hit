function createBoard(x, y) {
    let board = new Array(x);
    for (let column=0; column<board.length; column++)
    {
        board[column] = new Array(y).fill(0);
    }
}

function board() {
    createBoard(10, 10);
    // TODO Change these to function parameters when implementing changing board size
}
export default board;