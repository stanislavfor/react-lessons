// src/pages/HomePage.jsx
import React from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="page-wrapper">
            <h1>Главная страница</h1>
            <h3>Вы находитесь на Главной странице</h3>
            <div className="text-box">
                <p className="description-text">
                    <b>React JS</b> - одна из самых популярных библиотек для работы с JavaScript.<br />
                    Эта библиотека разработана для создания современных интерфейсов сайтов и web-приложений.<br />
                    На сайте Курса "<i>React JS</i>" мы научимся создавать компоненты, управлять состоянием приложения, настраивать
                    маршрутизацию и работать с хуками.
                </p>
                {/*<Link to="/about" className="page-link">Перейти на страницу "О нас"</Link>*/}
                {/*<Link to="/temperatureConverterPage" className="page-link">Temperature Converter</Link>*/}
                {/*<Link to="/commentsListPage" className="page-link">Comments List</Link>*/}
            </div>
        </div>
    );
};

export default HomePage;
