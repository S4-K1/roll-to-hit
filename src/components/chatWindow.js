import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './css/chatWindow.css';
import DiceRoller from './diceRoller';

function ChatWindow() {
  const [chat, setChat] = useState([]);

  function onEnterPress(event) {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      chatWrite();
    }
  }

  function chatWrite() {
    chatHandler({ text: document.getElementById('writeBox').value, type: 'user' });
    document.getElementById('writeBox').value = '';
  }

  function updateChat(update) {
    setChat(chat.concat(
      { key: chat.length, text: update.text, type: update.type },
    ));
  }

  function rollTheDice(dice) {
    const roll = (1 + Math.floor(Math.random() * dice));
    updateChat({ text: roll, type: 'roll' });
    return roll;
  }

  function rollCommand(command) {
    const split = command.text.split('/roll ')[1].split(/([+-/*])/g);
    let calculation = '';
    split.forEach(element => {
      if (element.toLowerCase().charAt(0) === 'd') {
        element = rollTheDice(element.substring(1));
      }
      calculation += element;
    });
    return evaluate(calculation);
  }

  function chatHandler(message) {
    if (message.text.split('/roll ')[1]) {
      updateChat({ text: rollCommand(message), type: 'roll' });
    } else {
      updateChat(message);
    }
  }

  const chatItems = chat.map((chatItem) =>
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
            <DiceRoller dice={4} roll={rollTheDice} />
            <DiceRoller dice={6} roll={rollTheDice}/>
            <DiceRoller dice={8} roll={rollTheDice}/>
            <DiceRoller dice={10} roll={rollTheDice}/>
            <DiceRoller dice={12} roll={rollTheDice}/>
            <DiceRoller dice={20} roll={rollTheDice}/>
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

export default ChatWindow;
