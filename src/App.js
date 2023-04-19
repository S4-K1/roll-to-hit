import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Board from './components/board';
import ChatWindow from './components/chatWindow';
import MacroButton from './components/macroButton';
import './App.css';

function App() {
  const [chat, setChat] = useState([]);
  const [tokenSelected, setTokenSelected] = useState(false);
  const [MacroMenu, setMacroMenu] = useState(false);

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
    const split = command.split('/roll ')[1].split(/([+-/*])/g);
    let calculation = '';

    split.forEach(element => {
      if (element.toLowerCase().charAt(0) === 'd') {
        element = rollTheDice(element.substring(1));
      } else if (element.split('d').length === 2) {
        const multiRoll = element.split('d');
        element = 0;
        for (let i = 0; i < multiRoll[0]; i++) {
          element += rollTheDice(multiRoll[1]);
        }
      }

      calculation += element;
    });
    return evaluate(calculation);
  }

  function chatWrite(message) {
    if (message.text.split('/roll ')[1]) {
      updateChat({ text: rollCommand(message.text), type: 'roll' });
    } else {
      updateChat(message);
    }
  }

  function macroCommand(command) {
    if (command.command.split('/roll ')[1]) {
      updateChat({ text: rollCommand(command.command), type: command.title });
    } else {
      updateChat({ text: command.command, type: command.title });
    }
  }

  function openMacroMenu() {
    setMacroMenu(true);
  }

  function closeMacroMenu() {
    setMacroMenu(false);
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
        <div className="mainContainer" onClick={closeMacroMenu}>
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
              <MacroButton
                macroCommand={macroCommand}
                macroMenu={MacroMenu}
                openMacroMenu={openMacroMenu}
              />
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
