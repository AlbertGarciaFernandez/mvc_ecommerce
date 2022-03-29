import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home, Payment, Product, Shipping, ShoppingCart, SignIn, SignUp, Summary } from './pages/public';
import { AddEmployee, AddProduct, DashboardEmployee, DashboardProduct, EditEmployee, EditProduct} from './pages/private';
import { Navbar } from './components';
import { PUBLIC, PRIVATE } from "./constants/routes";
import { AuthContextProvider } from "./context/auth-context";
import './App.scss';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path={PUBLIC.HOME} element={<Home />} />
        <Route path={PRIVATE.EDIT_EMPLOYEE} element={<EditEmployee />} />
        <Route path={PRIVATE.NEW_EMPLOYEE} element={<AddEmployee />} />
        <Route path={PRIVATE.EDIT_PRODUCT} element={<EditProduct />} />
        <Route path={PRIVATE.NEW_PRODUCT} element={<AddProduct />} />
        <Route path={PRIVATE.DASHBOARD_PRODUCTS} element={<DashboardProduct />} />
        <Route path={PRIVATE.DASHBOARD_USERS} element={<DashboardEmployee />} />
        <Route path={PUBLIC.SUMMARY} element={<Summary />} />
        <Route path={PUBLIC.PAYMENT} element={<Payment />} />
        <Route path={PUBLIC.SHIPPING} element={<Shipping />} />
        <Route path={PUBLIC.SHOPPING_CART} element={<ShoppingCart />} />
        <Route path={PUBLIC.SIGNUP} element={<SignUp />} />
        <Route path={PUBLIC.SIGNIN} element={<SignIn />} />
        <Route path={PUBLIC.PRODUCT} element={<Product />} />
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
  );
}

export default App