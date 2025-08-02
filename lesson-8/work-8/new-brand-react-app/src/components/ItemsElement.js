// src/components/ItemsElement.js
import React from 'react';
import './ItemsElement.css';

const ItemsElement = ({ items, selectedSize, onSizeChange, onAddToCart }) => {
    return (
        <div className="top-items-wrapper">
            {items.map((item) => (
                <div key={item.id} className="top-item">
                    <div className="top-item-image-container">
                        <img src={item.image} alt={item.title} />
                        <div className="hover-overlay" onClick={() => onAddToCart(item)}>
                            <span className="overlay-text">Add to Cart</span>
                        </div>
                    </div>
                    <div className="top-item__text">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <label>
                            {/*<select value={selectedSize} onChange={onSizeChange}>*/}
                            {/*    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (*/}
                            {/*        <option key={size} value={size}>Size: {size}</option>*/}
                            {/*    ))}*/}
                            {/*</select>*/}
                            <select
                                value={selectedSize[item.id] || 'M'}
                                onChange={(e) => onSizeChange(e, item.id)}
                            >
                                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                    <option key={size} value={size}>
                                        Size: {size}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <div className="top-item__price">${item.price.toFixed(2)}</div>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default ItemsElement;
