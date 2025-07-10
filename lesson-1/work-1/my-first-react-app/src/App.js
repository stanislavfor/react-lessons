import logo from './logo.svg';
import React from 'react';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <h1>Привет, React!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Message text="Это моё первое React-сообщение!" />
    </div>
  );
}

export default App;
