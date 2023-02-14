import React, { useEffect, useState } from "react";
import Home from "./Account";
import Login from "./Login";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { loginWithToken, fetchCart, logout } from "../store";
import { Link, Routes, Route } from "react-router-dom";
import IndividualProduct from "./Products/IndividualProduct";
import ProductList from "./Products/ProductList";
import OrderHistory from "./OrderHistory";
import Account from "./Account";

const App = () => {
  const { auth } = useSelector((state) => state);
  const [displayLogin, setDisplayLogin] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginWithToken());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    }
  }, [auth]);

  const changeDisplayLogin = () => {
    setDisplayLogin(true);
  };

  return (
    <div>
      {
        <div>
          <div id="header">
            <h1>Bookwormzz</h1>
            {auth.id ? (
              <button onClick={() => dispatch(logout())}>Logout</button>
            ) : (
              <button>Login</button>
            )}
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            {!!auth.id && (
              <nav>
                <Link to="/orders">Order History</Link>
                <Link to="/account">Account</Link>
              </nav>
            )}
          </nav>
          <Routes>
            {!!auth.id && <Route path="/orders" element={<OrderHistory />} />}
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/product/:id" element={<IndividualProduct />} />
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
        </div>
      }
    </div>
  );
};

export default App;
