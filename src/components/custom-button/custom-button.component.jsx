import React from "react";
import './custom-button.styles.scss';


const CustomButton = ({ children, isGoogleSignIn, inverted, onClick, otherProps }) => (
    <button onClick={onClick} className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);


export default CustomButton;