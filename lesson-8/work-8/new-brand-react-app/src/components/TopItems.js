import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import ItemsElement from './ItemsElement';
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
        const sizeToAdd = selectedSize[item.id] || 'M';

        console.log('В TopItems. Добавление в корзину:', {
            id: item.id,
            title: item.title,
            size: sizeToAdd,
            price: item.price
        });

        dispatch(addToCart({
            id: item.id,
            title: item.title,
            // size: selectedSize,
            size: sizeToAdd,
            price: item.price,
        }));

        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

    // const handleSizeChange = (e) => {
    //     setSelectedSize(e.target.value);
    // };

    const handleSizeChange = (e, id) => {
        const newSize = e.target.value;
        setSelectedSize(prev => {
            const updated = { ...prev, [id]: newSize };
            console.log('В TopItems. Размер изменён:', updated);
            return updated;
        });
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
                <ItemsElement
                    items={items.slice(0, visibleCount)}
                    selectedSize={selectedSize}
                    onSizeChange={handleSizeChange}
                    onAddToCart={handleAddToCart}
                />
                {/*<div className="top-items-wrapper">*/}
                {/*    {items.slice(0, visibleCount).map((item) => (*/}
                {/*        <div key={item.id} className="top-item">*/}
                {/*            <div className="top-item-image-container">*/}
                {/*                <img src={item.image} alt={item.title} />*/}
                {/*                <div className="hover-overlay" onClick={() => handleAddToCart(item)}>*/}
                {/*                    <span className="overlay-text">Add to Cart</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="top-item__text">*/}
                {/*                <h4>{item.title}</h4>*/}
                {/*                <p>{item.description}</p>*/}
                {/*                <label>*/}
                {/*                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>*/}
                {/*                        {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (*/}
                {/*                            <option key={size} value={size}>Size: {size}</option>*/}
                {/*                        ))}*/}
                {/*                    </select>*/}
                {/*                </label>*/}
                {/*                <div className="top-item__price">${item.price.toFixed(2)}</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
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
