import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null 
    }
  }


  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=> {
      this.setState({currentUser: user});
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }

}

export default App;
