import React, { useState } from 'react';
import Board from './components/board';
import './App.css';
import ChatWindow from './components/chatWindow';

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
              These are going to be the macros
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
