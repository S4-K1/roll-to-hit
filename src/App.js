import React, { useState } from 'react';
import Board from './components/board';
import './App.css';
import DiceRoller from './components/diceRoller';
import ChatWindow from './components/chatWindow';

function App() {
  const [chat, setChat] = useState([]);

  function updateChat(update) {
    setChat(chat.concat(update));
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="mainContainer">
          <h1>Roll to Attack</h1>
          <div className="gameContainer">
            <div className="mainGame">
              <div>
                <Board />
              </div>
              <div className="diceContainer">
                <DiceRoller dice={4} roll={updateChat} />
                <DiceRoller dice={6} roll={updateChat}/>
                <DiceRoller dice={8} roll={updateChat}/>
                <DiceRoller dice={10} roll={updateChat}/>
                <DiceRoller dice={12} roll={updateChat}/>
                <DiceRoller dice={20} roll={updateChat}/>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSideMenu">
          <ChatWindow chat={chat} />
        </div>
      </header>
    </div>
  );
}

export default App;
