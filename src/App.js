import Board from './components/board'
import './App.css';
import DiceRoller from './components/diceRoller';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Roll to Attack</h1>
        <div className="mainContainer">
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
          <div className="rightSideMenu">
            <p>Chat box here</p>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
