import React from 'react';
import PropTypes from 'prop-types';
import './css/chatWindow.css';
import DiceRoller from './diceRoller';

function ChatWindow(props) {
  function onEnterPress(event) {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      chatWrite();
    }
  }

  function chatWrite() {
    props.chatWrite({ text: document.getElementById('writeBox').value, type: 'user' });
    document.getElementById('writeBox').value = '';
  }
  const chatItems = props.chat.map((chatItem) =>
    <li key={chatItem.key}>{chatItem.type}: {chatItem.text}</li>,
  );
  return (
    <div>
      <div className='chatWindow' >
        <ul className='noBullets'>{chatItems}</ul>
      </div>
      <div className='writeWindow' >
        <div className='leftSectionContainer'>
          <div className="diceContainer">
            <DiceRoller dice={4} roll={props.rollTheDice} />
            <DiceRoller dice={6} roll={props.rollTheDice}/>
            <DiceRoller dice={8} roll={props.rollTheDice}/>
            <DiceRoller dice={10} roll={props.rollTheDice}/>
            <DiceRoller dice={12} roll={props.rollTheDice}/>
            <DiceRoller dice={20} roll={props.rollTheDice}/>
          </div>
          <textarea className='writeBox' id='writeBox' placeholder='Write here' onKeyDown={onEnterPress}/>
        </div>
        <div className='submitBox'>
            <button onClick={chatWrite}>submit</button>
        </div>
      </div>
    </div>
  );
}

ChatWindow.propTypes = {
  chat: PropTypes.arrayOf(PropTypes.object).isRequired,
  chatWrite: PropTypes.func.isRequired,
  rollTheDice: PropTypes.func,
};

export default ChatWindow;
