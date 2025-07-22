import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import './ProductPage.css';
import ItemsElement from '../components/ItemsElement';


const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [selectedSize, setSelectedSize] = useState('M');
    const [showNotification, setShowNotification] = useState(false);

    const items = Array.from({ length: 9 }).map((_, index) => ({
        id: (index + 1).toString(),
        image: `/img/top-items/${(index % 6) + 1}.jpg`,
        title: `Sample Item ${index + 1}`,
        description: `This is a detailed description for product ${index + 1}.`,
        price: 52.0,
    }));

    const item = items.find((item) => item.id === id);

    const handleAddToCart = () => {
        const sizeToAdd = selectedSize[item.id] || 'M';

        console.log('В ProductPage. Добавление в корзину:', {
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
            console.log('В ProductPage. Размер изменён:', updated);
            return updated;
        });
    };


    return (
        <>
            <Header />
            {showNotification && (
                <div className="add-to-cart-notification">✔ Товар добавлен в корзину</div>
            )}
            <section className="top-items">
                <div className="top-items-title">
                    <h2>Product Detail</h2>
                    <p>Explore this product in detail</p>
                </div>
                {item && (
                    <ItemsElement
                        items={[item]} // показывать только выбранный товар
                        selectedSize={selectedSize}
                        onSizeChange={handleSizeChange}
                        onAddToCart={handleAddToCart}
                    />
                    // <div className="top-items-wrapper">
                    //     <div className="top-item">
                    //         <div className="top-item-image-container">
                    //             <img src={item.image} alt={item.name} className="top-item-image" />
                    //             <div
                    //                 className="hover-overlay"
                    //                 onClick={() => handleAddToCart(item)} // вызов обработчика
                    //             >
                    //                 <span className="overlay-text">Add to Cart</span>
                    //             </div>
                    //         </div>
                    //         <div className="top-item__text">
                    //             <h4>{item.title}</h4>
                    //             <p>{item.description}</p>
                    //             <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    //                 {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    //                     <option key={size} value={size}>Size: {size}</option>
                    //                 ))}
                    //             </select>
                    //             <div className="top-item__price">${item.price.toFixed(2)}</div>
                    //
                    //         </div>
                    //     </div>
                    // </div>
                )}
                <div className="next-button" style={{marginBottom: '100px'}}>
                    <Link to="/">Back to Home</Link>
                </div>
            </section>
            <Subscribe />
            <Footer />
        </>
    );
};

export default ProductPage;
