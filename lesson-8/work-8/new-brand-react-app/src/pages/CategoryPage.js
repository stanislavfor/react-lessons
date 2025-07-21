import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import Feature from '../components/Feature';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './CategoryPage.css';

const CategoryPage = () => {
    const { gender, subcategory } = useParams();
    const dispatch = useDispatch();

    const formattedSubcategory = subcategory.replace(/-/g, ' ').toUpperCase();
    const formattedGender = gender.charAt(0).toUpperCase() + gender.slice(1);

    const items = Array.from({ length: 9 }).map((_, index) => ({
        id: index + 1,
        image: `/img/top-items/${(index % 6) + 1}.jpg`,
        title: `Sample Item ${index + 1}`,
        name: `Product ${index + 1}`,
        description: `Это пример товара в категории ${formattedGender}/${formattedSubcategory.toLowerCase()}.`,
        price: 52.00,
    }));

    const [visibleCount, setVisibleCount] = useState(3);
    const [selectedSize, setSelectedSize] = useState({});
    const [showNotification, setShowNotification] = useState(false);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            size: selectedSize[item.id] || 'M',
            quantity: 1
        }));


        setShowNotification(true); // показать уведомление
        setTimeout(() => setShowNotification(false), 2000);
    };

    return (
        <>
            <Header />

            <section className="top-items" id="top-items" style={{ marginTop: '50px', textAlign: 'center' }}>
                <div className="top-items-title">
                    <h3 style={{ fontSize: '24px' }}>{formattedGender}</h3>
                    <h2>{formattedSubcategory}</h2>
                    <p>Shop for items based on what we featured in this week</p>
                </div>

                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    <Link to="/" className="next-button" style={{ height: '35px' }}>Back to Home</Link>
                </div>

                {/* Блок уведомления */}
                {showNotification && (
                    <div className="cart-notification">
                        ✔ Товар добавлен в корзину
                    </div>
                )}

                <div className="top-items-wrapper" style={{ paddingTop: '40px' }}>
                    {items.slice(0, visibleCount).map(item => (
                        <div className="top-item" key={item.id}>
                            <div className="top-item-image-container">
                                <img src={item.image} alt={item.name} className="top-item-image" />
                                <div
                                    className="hover-overlay"
                                    onClick={() => handleAddToCart(item)} // вызов обработчика
                                >
                                    <span className="overlay-text">Add to Cart</span>
                                </div>
                            </div>
                            <div className="top-item__text">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <select
                                    value={selectedSize[item.id] || 'M'}
                                    onChange={(e) =>
                                        setSelectedSize({ ...selectedSize, [item.id]: e.target.value })
                                    }
                                >
                                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                        <option key={size} value={size}>Size:{size}</option>
                                    ))}
                                </select>
                                <div className="top-item__price">${item.price.toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < items.length ? (
                    <div className="next-button" style={{ marginBottom: '150px' }}>
                        <button onClick={handleShowMore}>Browse All Product</button>
                    </div>
                ) : (
                    <Feature />
                )}
            </section>

            <Subscribe />
            <Footer />
        </>
    );
};

export default CategoryPage;
