// src/pages/CommentsList.jsx
import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import CommentsList from '../components/CommentsList';
import './HomePage.css';
import './CommentsList.css';

const CommentsListPage = () => {
    return (
        <div className="page-wrapper">
            <h1>Список комментариев</h1>
            <div className="text-box">
                <CommentsList />
                {/*<h3>Вы находитесь на странице "Список комментариев"</h3>*/}
                {/*<p className="description-text">*/}
                {/*    <b>React JS</b> - одна из самых популярных библиотек для работы с JavaScript.<br />*/}
                {/*    Эта библиотека разработана для создания современных интерфейсов сайтов и web-приложений.<br />*/}
                {/*    На сайте Курса "<i>React JS</i>" мы научимся создавать компоненты, управлять состоянием приложения, настраивать*/}
                {/*    маршрутизацию и работать с хуками.*/}
                {/*</p>*/}
                {/*<Link to="/" className="page-link">Вернуться на Главную</Link>*/}
                {/*<Link to="/about" className="page-link">Перейти на страницу "О нас"</Link>*/}
                {/*<Link to="/temperatureConverterPage" className="page-link">Temperature Converter</Link>*/}
            </div>
        </div>
    );
};

export default CommentsListPage;
