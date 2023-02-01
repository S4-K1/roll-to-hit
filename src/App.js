import Board from './components/board'
import './App.css';
import DiceRoller from './components/diceRoller';
import ChatWindow from './components/chatWindow';

function App() {
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
                <DiceRoller dice={4} />
                <DiceRoller dice={6} />
                <DiceRoller dice={8} />
                <DiceRoller dice={10} />
                <DiceRoller dice={12} />
                <DiceRoller dice={20}/>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSideMenu">
          <ChatWindow />
        </div>
      </header>
    </div>
  );
}

export default App;
