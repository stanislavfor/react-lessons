import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<HomePage />} />*/}
            {/*    <Route path="/account" element={<AccountPage />} />*/}
            {/*    <Route path="/cart" element={<CartPage />} />*/}
            {/*    <Route path="/category/:categoryName" element={<CategoryPage />} />*/}
            {/*</Routes>*/}
            <Routes>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/cart" element={<CartPage />} />

                <Route path="/:gender/:subcategory" element={<CategoryPage />} />

                {/* fallback‑страница 404 */}
                 <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
