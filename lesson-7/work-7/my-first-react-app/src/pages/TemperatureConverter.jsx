// src/pages/TemperatureConverter.jsx
import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import TemperatureConverter from "../components/TemperatureConverter";
import './HomePage.css';

const TemperatureConverterPage = () => {
    return (
        <div className="page-wrapper">
            <h1>Temperature Converter</h1>
            <h3>Вы находитесь на странице "Конвектор температур"</h3>
            <div className="text-box">
                <TemperatureConverter />

                {/*<p className="description-text">*/}
                {/*    <b>React JS</b> - одна из самых популярных библиотек для работы с JavaScript.<br />*/}
                {/*    Эта библиотека разработана для создания современных интерфейсов сайтов и web-приложений.<br />*/}
                {/*    На сайте Курса "<i>React JS</i>" мы научимся создавать компоненты, управлять состоянием приложения, настраивать*/}
                {/*    маршрутизацию и работать с хуками.*/}
                {/*</p>*/}
                {/*<Link to="/" className="page-link">Вернуться на Главную</Link>*/}
                {/*<Link to="/about" className="page-link">Перейти на страницу "О нас"</Link>*/}
            </div>
        </div>
    );
};

export default TemperatureConverterPage;
