import React from 'react';

const Brand = () => (
    <div className="brand-container">
        <div className="top-images-wrapper">
            <div className="top-images">
                <div className="top-images-for-women top-images-box">
                    <a href="/category/women"><img className="image1-title" src="/img/top-images/top-1.png" alt="women" /></a>
                </div>
                <div className="top-images-for-men top-images-box">
                    <a href="/category/men"><img className="image2-title" src="/img/top-images/top-2.png" alt="men" /></a>
                </div>
                <div className="top-images-for-kids top-images-box">
                    <a href="/category/kids"><img className="image3-title" src="/img/top-images/top-3.png" alt="kids" /></a>
                </div>
            </div>
            <div className="top-images-2">
                <div className="top-images-assesories top-images-box">
                    <a href="/category/accessories"><img className="image4-title" src="/img/top-images/top-4.png" alt="accessories" /></a>
                </div>
            </div>
        </div>
    </div>
);

export default Brand;
