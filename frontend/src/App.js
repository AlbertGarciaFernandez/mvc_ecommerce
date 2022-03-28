import React from 'react'

import { Home, Payment, Product, Shipping, ShoppingCart, SignIn, SignUp, Summary } from './pages/public';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Payment />
      <Product />
      <Shipping />
      <ShoppingCart />
      <SignIn />
      <SignUp />
      <Summary />
    </div>
  );
}

export default App