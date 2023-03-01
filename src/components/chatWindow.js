import React from 'react';
import PropTypes from 'prop-types';

import './css/chatWindow.css';

class ChatWindow extends React.Component {
  render() {
    const onEnterPress = (event) => {
      if (event.keyCode === 13 && event.shiftKey === false) {
        event.preventDefault();
        chatWrite();
      }
    };

    const chatWrite = () => {
      this.props.chatWrite({ text: document.getElementById('writeBox').value, type: 'user' });
      document.getElementById('writeBox').value = '';
    };

    const chatItems = this.props.chat.map((chatItem) =>
        <li key={chatItem.key}>{chatItem.type}: {chatItem.text}</li>,
    );
    return (
        <div>
            <div className='chatWindow' >
                <ul className='noBullets'>{chatItems}</ul>
            </div>
            <div className='writeWindow' >
                <textarea className='writeBox' id='writeBox' placeholder='Write here' onKeyDown={onEnterPress}/>
                <div className='submitBox'>
                    <button onClick={chatWrite}>submit</button>
                </div>
            </div>
        </div>
    );
  }
}

ChatWindow.propTypes = {
  chat: PropTypes.arrayOf(PropTypes.object).isRequired,
  chatWrite: PropTypes.func.isRequired,
};

export default ChatWindow;
