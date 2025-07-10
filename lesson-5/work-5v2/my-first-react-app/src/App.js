// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ThemeToggle from './components/ThemeToggle';

function App() {
    const isDark = useSelector((state) => state.isDark);

    const themeClass = isDark ? 'dark-theme' : 'light-theme';

    return (
        <div className={`App ${themeClass}`}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="App-link">
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>

            <ThemeToggle />
            <h1>Привет, React!</h1>
            <Message text="Это моё первое React-приложение!" />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <CommentsList />
            <TemperatureConverter />
            <TodoList />
            <footer className="App-footer">
                <p className="App-link">react js lesson, fullstack and web development</p>
                <img src={logo} className="App-logo" alt="logo" />
                <p className="App-link">web-application, moscow, 2025 © copyright</p>
            </footer>
        </div>
    );
}

export default App;
