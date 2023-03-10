import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../store/product";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store";
import Reviews from "./Reviews";

const IndividualProduct = (props) => {
  // Need to filter out the product based on
  //how to access props.match in a functional component
  //is it the norm to have some sort of state setting function in each component, so we don't risk returning a blank component?
  const { products } = useSelector((state) => state);
  const productId = props.id;
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState({
    quantity: 0,
  });

  const selectedProduct = products.products.filter((prod) => {
    if (prod.id === productId) return true;
    return false;
  })[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    let orderQuant = parseInt(quantity.quantity);
    dispatch(
      addToCart({
        quantity: orderQuant,
        product: {
          id: productId,
        },
      })
    );
    setQuantity({ quantity: 0 });
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      setItems(items);
    }
  }, []);

  const dispatch = useDispatch();

  const onChange = (ev) => {
    setQuantity({ quantity: ev.target.value });
  };

  return (
    <div>
      <h1> {selectedProduct.name} </h1>
      <div className = "text-secondary">{selectedProduct.author}</div>
      <div className = "text-secondary">Published: {selectedProduct.publishedDate? 
      selectedProduct.publishedDate:
      "unavailable"
      }</div>



      <h2> Add to cart </h2>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Quantity
            </span>
          </div>
          <input
            value={quantity.quantity}
            onChange={onChange}
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button className="btn btn-primary" names="add-cart" type="submit">
          {" "}
          Add to cart{" "}
        </button>
      </form>

      <div></div>
    </div>
  );
};

export default IndividualProduct;
