import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../store/product";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../../store";
import Reviews from "./Reviews";

const IndividualProduct = (props) => {
  // Need to filter out the product based on
  //how to access props.match in a functional component
  //is it the norm to have some sort of state setting function in each component, so we don't risk returning a blank component?
  const { products } = useSelector((state) => state);
  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted. quantity:", quantity.quantity);
    let orderQuant = parseInt(quantity.quantity);
    dispatch(
      addToCart({
        quantity: orderQuant,
        product: {
          id: params.id,
        },
      })
    );
    setQuantity({ quantity: 0 });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(params.id));
  }, []);

  const [quantity, setQuantity] = useState({
    quantity: 0,
  });

  const onChange = (ev) => {
    setQuantity({ quantity: ev.target.value });
    console.log(quantity);
  };

  return (
    <div>
      <div id='component'>
        <h1> {products.selected.name} </h1>

        <Reviews />

        <h2> Add to cart </h2>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label> Quantity: </label>
          <input value={quantity.quantity} onChange={onChange}></input>
          <button names='add-cart' type='submit'>
            {" "}
            Add to cart
          </button>
        </form>

        <div>
          <Link to='/'> Go back home </Link>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
