// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <div className="not-found-container">
                <h1>Error: 404</h1>
                <p>Page not found</p>
                <Link to="/" className="back-home-link">Go back to the main page</Link>
            </div>
            <Footer />
        </>
    );
};

export default NotFoundPage;
