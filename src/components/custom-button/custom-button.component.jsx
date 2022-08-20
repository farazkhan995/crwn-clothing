import React from "react";
import './custom-button.styles.scss';


const CustomButton = ({children, isGoogleSignIn, onClick, otherProps}) => (
    <button onClick={onClick} className= {`${isGoogleSignIn? 'google-sign-in' :  ''} custom-button`} {...otherProps}>
        {children}
    </button>
)


export default CustomButton;