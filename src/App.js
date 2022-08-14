import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';



function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
