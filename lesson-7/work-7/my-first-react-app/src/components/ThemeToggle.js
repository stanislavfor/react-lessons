// src/components/ThemeToggle.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeActions';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const isDark = useSelector((state) => state.isDark);
    const dispatch = useDispatch();

    return (
        // <div style={{ marginBottom: '20px' }}>
        <div style={{ margin: '20px' }}>
            {/*<h2>{isDark ? 'Тёмная тема' : 'Светлая тема'}</h2>*/}
            <button className="theme-toggle-button" onClick={() => dispatch(toggleTheme())}>
                Переключить тему
            </button>
        </div>
    );
};

export default ThemeToggle;
