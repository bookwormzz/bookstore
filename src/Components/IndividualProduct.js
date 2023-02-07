import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from './ProductList';
import { fetchProduct } from '../store/product';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const IndividualProduct = (props)=> {
    // Need to filter out the product based on 
    //how to access props.match in a functional component
    //is it the norm to have some sort of state setting function in each component, so we don't risk returning a blank component?
    const { products } = useSelector(state => state)
    const params = useParams()
    console.log(params.id)

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchProduct(params.id));
    }, []);


    return (
      <div>
        <h1> {products.selected.name} </h1>
        <h2> reviews </h2>
        <p> {products.selected.review}</p>
        <div>
        <label> Quantity: </label>
        <input value = {0}></input>
        <button names="add-cart"> Add to cart</button>
        <div>
        <Link to = '/'> Go back home </Link>
        </div>
        </div>
      </div>
    );
  };

export default IndividualProduct
