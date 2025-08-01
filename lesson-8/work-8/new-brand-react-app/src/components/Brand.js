import React from 'react';
import './Brand.css';


const Brand = () => (
    <div className="brand-container">
        <div className="top-images-wrapper">
            <div className="top-images">
                <div className="top-images-for-women top-images-box">
                    <a href="/category/women"><p>30% OFF</p><p>FOR WOMEN</p></a>
                </div>
                <div className="top-images-for-men top-images-box">
                    <a href="/category/men"><p>HOT DEAL</p><p>FOR MEN</p></a>
                </div>
                <div className="top-images-for-kids top-images-box">
                    <a href="/category/kids"><p>NEW ARRIVALS</p><p>FOR KIDS</p></a>
                </div>
                <div className="top-images-assesories top-images-box">
                    <a href="/category/accessories"><p>LUXURIOUS & TRENDY</p><p>ACCESSORIES</p></a>
                </div>
            </div>
            <div className="top-images-2">

            </div>
        </div>
    </div>
);

export default Brand;
