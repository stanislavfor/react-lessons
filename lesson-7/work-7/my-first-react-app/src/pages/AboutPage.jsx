// src/pages/AboutPage.jsx
import React from 'react';
// import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="page-wrapper">
            <h1>О нас</h1>
            <h3>Вы находитесь на странице "О нас"</h3>
            <div className="text-box">
                <p className="description-text">
                На этом Семинаре обучаемся разработке на библиотеке <i>React JS</i>.<br/><b>Что выполнять</b>: создаём компоненты, работаем с роутингом и управляем состоянием.
                </p>
            {/*<Link to="/" className="page-link">Вернуться на Главную</Link>*/}
            {/*<Link to="/temperatureConverterPage" className="page-link">Temperature Converter</Link>*/}
            </div>
        </div>
    );
};

export default AboutPage;