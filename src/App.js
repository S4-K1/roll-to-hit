import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Board from './components/board';
import ChatWindow from './components/chatWindow';
import MacroButton from './components/macroButton';
import './App.css';

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

  function chatWrite(message) {
    if (message.text.split('/roll ')[1]) {
      updateChat({ text: rollCommand(message), type: 'roll' });
    } else {
      updateChat(message);
    }
  }

  function macroCommand(command) {
    updateChat({ text: command, type: 'macro' });
  }

  function openTokenMenu() {
    setTokenSelected(true);
  }

  function closeTokenMenu() {
    setTokenSelected(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="mainContainer">
          <h1 className='title'>Roll to Hit</h1>
          <div className="gameContainer">
            <div className="mainGame">
              <div>
                <Board openTokenMenu={openTokenMenu} closeTokenMenu={closeTokenMenu}/>
              </div>
            </div>
          </div>
          {tokenSelected && (
            <div className='bottomSection'>
              <MacroButton macroCommand={macroCommand}/>
            </div>
          )}
        </div>
        <div className="rightSideMenu">
          <ChatWindow chat={chat} chatWrite={chatWrite} rollTheDice={rollTheDice}/>
        </div>
      </header>
    </div>
  );
}

export default App;
