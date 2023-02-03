import { fetchProducts } from "../store/product";
import { useSelector, useDispatch } from 'react-redux';
import store from "../store";
import React from 'react';



const ProductList = ()=> {
    const { products } = useSelector(state => state);
    const dispatch = useDispatch();
    return (
      <div>
        <h1> Products List </h1>        
      </div>
    );
  };

export default ProductList