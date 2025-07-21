import React from 'react';

const features = [
    { icon: '/img/feature-icon-1.svg', title: 'Free Delivery' },
    { icon: '/img/feature-icon-2.svg', title: 'Sales & discounts' },
    { icon: '/img/feature-icon-3.svg', title: 'Quality assurance' }
];

const Feature = () => (
    <div className="feature">
        <div className="feature-wrapper">
            {features.map((f, idx) => (
                <div key={idx} className="feature__part">
                    <div className="feature__icon"><img src={f.icon} alt="feature-icon" /></div>
                    <div className="feature__title">{f.title}</div>
                    <div className="feature__description">
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Feature;
