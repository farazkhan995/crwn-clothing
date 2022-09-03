import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
);


export default connect(null, mapDispatchToProps)(App);