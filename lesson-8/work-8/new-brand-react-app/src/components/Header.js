import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header-container">
        <div className="header">
            <div className="header__logo">
                <div className="logo">
                    {/*<a href="/"><img src="/img/logo.png" alt="logo" /></a>*/}
                    <Link to="/"><img src="/img/logo.png" alt="logo" /></Link>
                </div>
                <div className="search">
                    {/*<a href="/search"><img src="/img/search.png" alt="search-icon" /></a>*/}
                    <Link to="/search"><img src="/img/search.png" alt="search-icon" /></Link>
                </div>
            </div>
            <div className="header__menu-bar">
                <div className="menu">
                    <button href="/home" tabIndex="0">
                        <img src="/img/menu-bar.svg" alt="menu-bar" />
                    </button>
                    <div className="dropdown-menu">
                        <h3>MEN</h3>
                        <ul>
                            <li><a href="/men/accessories">Accessories</a></li>
                            <li><a href="/men/jackets">Jackets & Coats</a></li>
                            <li><a href="/men/polos">Polos</a></li>
                            <li><a href="/men/bags">Bags</a></li>
                            <li><a href="/men/denim">Denim</a></li>
                            <li><a href="/men/shirts">Shirts</a></li>
                            <li><a href="/men/t-shirts">T-Shirts</a></li>
                        </ul>
                        <h3>WOMAN</h3>
                        <ul>
                            <li><a href="/woman/accessories">Accessories</a></li>
                            <li><a href="/woman/jackets">Jackets & Coats</a></li>
                            <li><a href="/woman/polos">Polos</a></li>
                            <li><a href="/woman/t-shirts">T-Shirts</a></li>
                            <li><a href="/woman/shirts">Shirts</a></li>
                            <li><a href="/woman/denim">Denim</a></li>
                        </ul>
                        <h3>KIDS</h3>
                        <ul>
                            <li><a href="/kids/accessories">Accessories</a></li>
                            <li><a href="/kids/jackets">Jackets & Coats</a></li>
                            <li><a href="/kids/polos">Polos</a></li>
                            <li><a href="/kids/t-shirts">T-Shirts</a></li>
                            <li><a href="/kids/shirts">Shirts</a></li>
                            <li><a href="/kids/bags">Bags</a></li>
                            <li><a href="/kids/denim">Denim</a></li>
                        </ul>
                    </div>
                </div>
                <div className="account">
                    <a href="/account"><img src="/img/account.svg" alt="account-icon" /></a>
                </div>
                <div className="cart">
                    <a href="/cart"><img src="/img/cart.svg" alt="cart-icon" /></a>
                </div>
            </div>
        </div>
    </div>
);

export default Header;
