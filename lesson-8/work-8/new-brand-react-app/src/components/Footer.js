import React from 'react';

const Footer = () => (
    <div className="footer-container">
        <div className="footer">
            <div className="copyright" id="copyright">
                <a href="/"><p>© 2025 New Brand All Rights Reserved.</p></a>
            </div>
            <div className="social">
                {[1, 2, 3, 4].map(i => (
                    <a key={i} href="#copyright">
                        <div className={`social-icon${i}`}></div>
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default Footer;
