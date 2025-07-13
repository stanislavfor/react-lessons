// src/pages/TodoList.jsx
import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';
import './HomePage.css';

const TodoListPage = () => {
    return (
        <div className="page-wrapper">
            <h1>"To do List"</h1>
            <div className="text-box">
                <div className="todo-container">
                    <TodoList />
                </div>
                {/*<h3>Вы находитесь на странице "To do List"</h3>*/}
                {/*<p className="description-text">*/}
                {/*    <b>React JS</b> - одна из самых популярных библиотек для работы с JavaScript.<br />*/}
                {/*    Эта библиотека разработана для создания современных интерфейсов сайтов и web-приложений.<br />*/}
                {/*    На сайте Курса "<i>React JS</i>" мы научимся создавать компоненты, управлять состоянием приложения, настраивать*/}
                {/*    маршрутизацию и работать с хуками.*/}
                {/*</p>*/}
                {/*<Link to="/about" className="page-link">Перейти на страницу "О нас"</Link>*/}
            </div>
        </div>
    );
};

export default TodoListPage;
