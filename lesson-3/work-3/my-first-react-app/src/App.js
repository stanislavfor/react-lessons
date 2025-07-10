// src/App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>

            <h1>Привет, React!</h1>
            <Message text="Это моё первое React-сообщение!" />
            <CommentsList />
            <TemperatureConverter />
            <TodoList />

        </div>
    );
}

export default App;
