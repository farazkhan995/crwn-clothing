import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({email: '', password: ''})

    }
    handleChange(event) {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="sign-in">
            <h2>I Already Have An Account</h2>
            <span>Sign In With Your Email And Password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput label='Email' type="email" name="email" id="" value={this.state.email} required handleChange={this.handleChange} />
 
                <FormInput label='Password' type="password" name="password" id="" value={this.state.password} required handleChange={this.handleChange} />


                <input type="submit" value= 'Submit Form' />
            </form>
        
        </div>
        )

    }
}


export default SignIn;