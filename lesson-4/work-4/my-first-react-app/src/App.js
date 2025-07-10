// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

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
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <CommentsList />
            <TemperatureConverter />
            <TodoList />


        </div>
    );
}

export default App;
