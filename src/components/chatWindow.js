// import React from 'react';

import './css/chatWindow.css';

function ChatWindow(props) {
  return (
        <div>
            <div className="chatWindow" >
                <p>{props.chat}</p>
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
  );
}
export default ChatWindow;
