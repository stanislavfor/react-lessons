import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './TopItems.css';

const items = Array.from({ length: 18 }).map((_, index) => ({
    id: index + 1,
    image: `/img/top-items/${(index % 9) + 1}.jpg`,
    title: `ELLERY X M'O CAPSULE`,
    description: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
    price: 52.0,
}));

const TopItems = () => {
    const dispatch = useDispatch();
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedSize, setSelectedSize] = useState('M');
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToCart = (item) => {
        dispatch(addToCart({
            id: item.id,
            title: item.title,
            size: selectedSize,
            price: item.price,
        }));
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

    return (
        <>
            {showNotification && (
                <div className="add-to-cart-notification">✔ Товар добавлен в корзину</div>
            )}
            <section className="top-items">
                <div className="top-items-title">
                    <h2>Featured Items</h2>
                    <p>Shop for items based on what we featured in this week</p>
                </div>
                <div className="top-items-wrapper">
                    {items.slice(0, visibleCount).map((item) => (
                        <div key={item.id} className="top-item">
                            <div className="top-item-image-container">
                                <img src={item.image} alt={item.title} />
                                <div className="hover-overlay" onClick={() => handleAddToCart(item)}>
                                    <span className="overlay-text">Add to Cart</span>
                                </div>
                            </div>
                            <div className="top-item__text">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <label>
                                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                        {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                            <option key={size} value={size}>Size: {size}</option>
                                        ))}
                                    </select>
                                </label>
                                <div className="top-item__price">${item.price.toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < items.length && (
                    <div className="next-button">
                        <button onClick={() => setVisibleCount(prev => prev + 3)}>Browse All Product</button>
                    </div>
                )}
            </section>
        </>
    );
};

export default TopItems;
