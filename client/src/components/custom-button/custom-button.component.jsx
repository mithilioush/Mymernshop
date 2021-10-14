import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, inverted, ...props }) => (
    <button className={`custom-button ${inverted ? 'inverted' : null}`} {...props}>
        {children}
    </button>
);

export default CustomButton;