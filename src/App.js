import React, { useState } from 'react';
import Board from './components/board';
import './App.css';
import DiceRoller from './components/diceRoller';
import ChatWindow from './components/chatWindow';

function App() {
  const [chat, setChat] = useState([]);
  const [tokenSelected, setTokenSelected] = useState(false);

  function updateChat(update) {
    setChat(chat.concat(
      { key: chat.length, text: update.text, type: update.type }));
  }

  function rollTheDice(dice) {
    const roll = (1 + Math.floor(Math.random() * dice));
    updateChat({ text: roll, type: 'roll' });
    return roll;
  }

  function openTokenMenu() {
    setTokenSelected(!tokenSelected);
  }

  function rollCommand(command) {
    const calculation = command.text.split('/roll ')[1].split(/([+-])/g);
    let total = 0;
    calculation.forEach(element => {
      switch (true) {
        case element.toLowerCase().charAt(0) === 'd' :
          total = total + rollTheDice(element.substring(1));
          break;
        case !isNaN(element) :
          total = total + parseInt(element);
      }
    });
    updateChat({ text: total, type: 'user' });
  }

  function chatWrite(message) {
    if (message.text.split('/roll ')[1]) {
      rollCommand(message);
    } else {
      updateChat(message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="mainContainer">
          <h1 className='title'>Roll to Hit</h1>
          <div className="gameContainer">
            <div className="mainGame">
              <div>
                <Board openTokenMenu={openTokenMenu}/>
              </div>
              <div className="diceContainer">
                <DiceRoller dice={4} roll={rollTheDice} />
                <DiceRoller dice={6} roll={rollTheDice}/>
                <DiceRoller dice={8} roll={rollTheDice}/>
                <DiceRoller dice={10} roll={rollTheDice}/>
                <DiceRoller dice={12} roll={rollTheDice}/>
                <DiceRoller dice={20} roll={rollTheDice}/>
              </div>
            </div>
          </div>
          {tokenSelected && (
            <div className='bottomSection'>
              These are going to be the macros
            </div>
          )}
        </div>
        <div className="rightSideMenu">
          <ChatWindow chat={chat} chatWrite={chatWrite}/>
        </div>
      </header>
    </div>
  );
}

export default App;
