import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import './SearchPage.css';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        setHasSearched(true);

        const dummyResults = [
            { id: 1, name: 'Product 1', price: '$52.00' },
            { id: 2, name: 'Product 2', price: '$52.00' },
        ].filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

        setResults(dummyResults);
    };

    const handleClear = () => {
        setQuery('');
        setResults([]);
        setHasSearched(false);
    };

    return (
        <>
            <Header />

            <section className="page-container">
                <h2 className="search-title">Search Products</h2>

                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter search term..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                    <button type="button" onClick={handleClear} className="delete-button">
                        Delete result
                    </button>
                </form>

                <div className="top-items-wrapper">
                    {results.length > 0 ? (
                        results.map((item) => (
                            <Link to={`/product/${item.id}`} key={item.id} className="top-item-link">
                                <div className="top-item">
                                    <div className="top-item-image-container">
                                        <img
                                            src={`/img/top-items/${item.id}.jpg`}
                                            alt={item.name}
                                            className="top-item-image"
                                        />
                                    </div>
                                    <div className="top-item__text">
                                        <h4>{item.name}</h4>
                                        <p>Click to view details</p>
                                        <div className="top-item__price">{item.price}</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>
                                {hasSearched ? 'No results found.' : 'Search results'}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Subscribe />
            <Footer />
        </>
    );
};

export default SearchPage;
