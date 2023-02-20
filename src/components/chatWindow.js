import React from 'react';
import PropTypes from 'prop-types';

import './css/chatWindow.css';

class ChatWindow extends React.Component {
  render() {
    const chatItems = this.props.chat.map((chatItem) =>
        <li key={chatItem.key}>{chatItem.type}: {chatItem.text}</li>,
    );
    return (
        <div>
            <div className='chatWindow' >
                <ul className='noBullets'>{chatItems}</ul>
            </div>
            <div className='writeWindow' >
                <div className='writeBox'>
                    <p>write here</p>
                </div>
                <div className='submitBox'>
                    <p>submit</p>
                </div>
            </div>
        </div>
    );
  }
}

ChatWindow.propTypes = {
  chat: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatWindow;
