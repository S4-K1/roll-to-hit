import Board from './components/board'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Roll to Attack</h1>
        <div>
          <Board />
        </div>
      </header>
    </div>
  );
}

export default App;
