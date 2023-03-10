import React, { useEffect } from "react";
import Login from "./Login";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { loginWithToken, fetchCart, logout } from "../store";
import { Link, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import IndividualProduct from "./Products/IndividualProduct";
import ProductList from "./Products/ProductList";
import OrderHistory from "./OrderHistory";
import NavBar from "./Nav";
import Account from "./Account";

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginWithToken());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    } else {
      localStorage.getItem("cart");
    }
  }, [auth]);

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/account-login");
  };

  return (
    <div>
        <div>

        <NavBar />
          
          <Routes>
            <Route
              path="/orders"
              element={
                !!auth.id ? <OrderHistory /> : <Navigate replace to={"/"} />
              }
            />
            <Route
              exact
              path="/account"
              element={
                !!auth.id ? (
                  <Account />
                ) : (
                  <ProductList />
                )
              }
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/product/:id" element={<IndividualProduct />} />
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/account-login" element={<Login />} />
          </Routes>
        </div>
      
    </div>
  );
};

export default App;
