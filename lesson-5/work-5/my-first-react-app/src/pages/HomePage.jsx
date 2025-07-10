// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="page-wrapper">
            <div className="text-box">
                <h1>Главная страница</h1>
                <h3>Вы находитесь на Главной странице</h3>
                <p className="description-text">
                    <b>React JS</b> - одна из самых популярных библиотек для работы с JavaScript.<br />
                    Эта библиотека разработана для создания современных интерфейсов сайтов и web-приложений.<br />
                    На сайте Курса "<i>React JS</i>" мы научимся создавать компоненты, управлять состоянием приложения, настраивать
                    маршрутизацию и работать с хуками.<br />
                    Этот Курс объясняет сложные вещи простым языком, шаг за шагом показывая,
                    как разрабатывать эффективные и масштабируемые веб-приложения на React.
                </p>
                <Link to="/about">Перейти на страницу "О нас"</Link>
            </div>
        </div>
    );
};

export default HomePage;
