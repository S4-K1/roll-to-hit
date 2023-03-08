import React, { useState } from 'react';
import Board from './components/board';
import './App.css';
import DiceRoller from './components/diceRoller';
import ChatWindow from './components/chatWindow';

function App() {
  const [chat, setChat] = useState([]);

  function updateChat(update) {
    setChat(chat.concat(
      { key: chat.length, text: update.text, type: update.type }));
  }

  function rollTheDice(dice) {
    const roll = (1 + Math.floor(Math.random() * dice));
    console.log(dice);
    updateChat({ text: roll, type: 'roll' });
    return roll;
  }

  function chatWrite(message) {
    // if (message.text.substring(0, 5) === '/roll') {
    if (message.text.split('/roll ')[1]) {
      const calculation = message.text.split('/roll ')[1].split(/([+-])/g);
      console.log(calculation);
    } else {
      updateChat(message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="mainContainer">
          <h1>Roll to Hit</h1>
          <div className="gameContainer">
            <div className="mainGame">
              <div>
                <Board />
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
        </div>
        <div className="rightSideMenu">
          <ChatWindow chat={chat} chatWrite={chatWrite}/>
        </div>
      </header>
    </div>
  );
}

export default App;
