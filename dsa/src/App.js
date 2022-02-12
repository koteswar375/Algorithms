import './App.css';
import Problem from './components/Problem';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            Algorithms
      </header>
      <main className="d-flex">
        <Problem></Problem>
        <Editor></Editor>
      </main>
    </div>
  );
}

export default App;
