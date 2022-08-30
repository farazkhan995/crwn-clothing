import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }


  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    } catch (error) {
      alert(error.message);
    }
  }


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
}

  
  render() {

    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I Already Have An Account</h2>
        <span>Sign In With Your Email And Password</span>

        <form>

          <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Email'
          required
      />
      
          <FormInput
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}
          label='Password'
          required
      />

          <div className="buttons">
            <CustomButton type="submit" onClick={this.handleSubmit}>Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              {" "}
              Sign In With Google{" "}
            </CustomButton>

          </div>


        </form>
      </div>
    );
  }
}

export default SignIn;
