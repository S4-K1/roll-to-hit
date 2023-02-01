import React from "react";

import './css/chatWindow.css';

function ChatWindow() {
    // const board = createBoard(10, 10);
    // TODO Change these to function parameters when implementing changing board size
    return (
        <div>
            <div className="chatWindow" >
                <p>Chat window</p>
            </div>
            <div className="writeWindow" >
                <div className="submitBox">
                    <p>submit</p>
                </div>
                <div className="writeBox">
                    <p>write here</p>
                </div>
            </div>
        </div>
    )
}
export default ChatWindow;