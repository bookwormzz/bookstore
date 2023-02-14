import React, { useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { loginWithToken, fetchCart } from "../store";
import { Link, Routes, Route } from "react-router-dom";
import IndividualProduct from './Products/IndividualProduct'
import OrderHistory from "./OrderHistory";

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginWithToken());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    }
  }, [auth]);
  return (
    <div>
      <h1 id='header'>Bookwormzz Bookstore</h1>
      {!!auth.id && (
        <div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/orders'>Order History</Link>
          </nav>
          <Routes>
            <Route path='/orders' element={<OrderHistory />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/product/:id' element={<IndividualProduct />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      )}
      {auth.id ? null : <Login />}
    </div>
  );
};

export default App;
