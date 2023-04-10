import React, { useState } from 'react';
import Board from './components/board';
import ChatWindow from './components/chatWindow';
import MacroButton from './components/macroButton';
import './App.css';

function App() {
  const [tokenSelected, setTokenSelected] = useState(false);

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
              <MacroButton />
            </div>
          )}
        </div>
        <div className="rightSideMenu">
          <ChatWindow/>
        </div>
      </header>
    </div>
  );
}

export default App;
