import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Brand from '../components/Brand';
import TopItems from '../components/TopItems';
import Feature from '../components/Feature';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

// Главная страница - содержит базовую структуру лендинга

const HomePage = () => {
    return (
        <>
            <Header />

            {/* Титульная страница */}
            <Section />

            {/* Категории WOMEN, MEN, KIDS, Accessories */}
            <Brand />

            {/* Товары недели */}
            <TopItems />

            {/* Преимущества бренда */}
            <Feature />

            {/* Форма подписки */}
            <Subscribe />

            <Footer />
        </>
    );
};

export default HomePage;
