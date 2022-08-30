import React from "react";
import SignIn from "../../components/sign-in/sign-In.component";
import './sign-in-and-sign-up-page.component.scss';
import SignUp from "../../components/sign-up/sign-up.component";
const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)



export default SignInAndSignUp;