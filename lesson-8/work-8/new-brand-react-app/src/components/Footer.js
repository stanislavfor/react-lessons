import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <div className="footer-container">
        <div className="footer">
            <div className="copyright" id="copyright">
                <a href="/"><p>© 2025 New Brand All Rights Reserved.</p></a>
            </div>
            <div className="social">
                {[1, 2, 3, 4].map(i => (
                    <Link key={i} to="#" className={`social-icon-link`}>
                        <div className={`social-icon${i}`} />
                    </Link>
                ))}
            </div>
        </div>
        <div className="footer-2 copyright">
            <a><p>ReactJS lessons</p></a>
        </div>

    </div>

);

export default Footer;
