// src/components/ThemeToggle.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeActions';

const ThemeToggle = () => {
    const isDark = useSelector((state) => state.isDark);
    const dispatch = useDispatch();

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>{isDark ? 'Тёмная тема' : 'Светлая тема'}</h2>
            <button onClick={() => dispatch(toggleTheme())}>
                Переключить тему
            </button>
        </div>
    );
};

export default ThemeToggle;
