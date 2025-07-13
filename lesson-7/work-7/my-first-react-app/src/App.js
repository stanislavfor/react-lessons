// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
// import Message from './components/Message';
// import CommentsList from './components/CommentsList';
// import TemperatureConverter from './components/TemperatureConverter';
// import TodoList from './components/TodoList';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TemperatureConverterPage from './pages/TemperatureConverter';
import CommentsListPage from './pages/CommentsList';
import TodoListPage from './pages/TodoList';
import ThemeToggle from './components/ThemeToggle';

function App() {
    const isDark = useSelector((state) => state.isDark);

    const themeClass = isDark ? 'dark-theme' : 'light-theme';

    return (
        <div className={`App ${themeClass}`}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                {/* навигационные ссылки */}
                <nav className="App-nav">
                    <Link to="/" className="App-link">Главная</Link>
                    <Link to="/about" className="App-link">О нас</Link>
                    <Link to="/temperatureConverterPage" className="App-link">Конвертер</Link>
                    <Link to="/TodoListPage" className="App-link">Планировщик</Link>
                    <Link to="/commentsListPage" className="App-link">Комментарии</Link><ThemeToggle />
                </nav>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/temperatureConverterPage" element={<TemperatureConverterPage />} />
                <Route path="/TodoListPage" element={<TodoListPage />} />
                <Route path="/commentsListPage" element={<CommentsListPage />} />
            </Routes>
            {/*<CommentsList />*/}
            {/*<TemperatureConverter />*/}
            {/*<TodoList />*/}
            <footer className="App-footer">
                <p className="App-link">react js lesson, fullstack and web development</p>
                <img src={logo} className="App-logo" alt="logo" />
                <p className="App-link">web-application, moscow, 2025 © copyright</p>
            </footer>
        </div>
    );
}

export default App;
