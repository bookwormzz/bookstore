import { fetchProducts } from "../store/product";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";

const ProductList = () => {
  const { products, auth } = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [userType, setUserType] = useState(auth.userType);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const showProductEdit = () => {
    setShow(true);
  };

  return (
    <div>
      <h1> Products List </h1>
      <ul>
        {products.products !== []
          ? products.products.map((product) => {
              return (
                <li key={product.id}>
                  <Link to={`/product/${product.id}`}> {product.name}</Link>
                </li>
              );
            })
          : "loading"}
      </ul>
      {userType === "admin" && (
        <button onClick={showProductEdit}>Add Product</button>
      )}
      {show && <CreateProduct />}
    </div>
  );
};

export default ProductList;
