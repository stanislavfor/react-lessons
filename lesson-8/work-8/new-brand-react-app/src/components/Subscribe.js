import React from 'react';

const Subscribe = () => (
    <div className="subscribe">
        <div className="subscribe-wrapper">
            <div className="subscribe-part">
                <img className="subscribe__icon" src="/img/subscribe-icon.png" alt="subscribe" />
                <p className="subscribe__description">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
            </div>
            <form className="subscribe-form">
                <div className="subscribe-form__title">SUBSCRIBE</div>
                <div className="subscribe-form__description">SUBSCRIBE FOR OUR NEWSLETTER AND PROMOTION</div>
                <div className="subscribe-form__input">
                    <div className="input-field">
                        <label>
                            <input type="email" placeholder="Enter Your Email" />
                        </label>
                    </div>
                    <button className="subscribe-button">Subscribe</button>
                </div>
            </form>
        </div>
    </div>
);

export default Subscribe;
