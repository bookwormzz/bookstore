import { fetchProducts } from "../../store/product";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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

      
    </div>
  );
};

export default ProductList;
