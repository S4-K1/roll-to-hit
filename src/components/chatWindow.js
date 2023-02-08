import React from 'react';
import PropTypes from 'prop-types';

import './css/chatWindow.css';

class ChatWindow extends React {
  render() {
    return (
        <div>
            <div className="chatWindow" >
                <p>{this.props.chat}</p>
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
}

ChatWindow.propTypes = {
  chat: PropTypes.array.isRequired,
};

export default ChatWindow;
