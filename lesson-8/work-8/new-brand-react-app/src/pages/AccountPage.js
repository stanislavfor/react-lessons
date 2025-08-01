import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscribe from "../components/Subscribe";
import './AccountPage.css';

const AccountPage = () => (
    <>
        <Header />
        <div className="section-container" style={{ padding: '100px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', paddingTop: '0', paddingBottom: '90px' }}>User Account</h2>
            <p>Here you can manage your profile, orders, and settings.</p>
        </div>

        <Subscribe />
        <Footer />
    </>
);

export default AccountPage;
