import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store";
import { useState } from "react";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';


const Reviews = (props) => {
  // Need to filter out the product based on
  //how to access props.match in a functional component
  //is it the norm to have some sort of state setting function in each component, so we don't risk returning a blank component?
  const { products } = useSelector((state) => state);
  const productId = props.id;

  const selectedProduct = products.products.filter((prod) => {
    if (prod.id === productId) return true;
    return false;
  })[0];


  const [review, setReview] = useState({
    text: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/reviews", { review: review.text, productId: productId });
    dispatch(fetchProducts())
    setReview({ text: "" });
  };

  const dispatch = useDispatch();


  const onChange = (ev) => {
    setReview({ text: ev.target.value });
    console.log("text", review.text);
    console.log("selected product", selectedProduct);
  };

  return (
    <div>
      <div> {selectedProduct.description}</div>
      <h1> Reviews </h1>
      <ListGroup variant="flush">
        {selectedProduct.reviews
          ? selectedProduct.reviews.map((review) => {
              return <ListGroup.Item>{review.review}</ListGroup.Item>;
            })
          : "no reviews found"}
    </ListGroup>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Submit your own review
            </span>
          </div>
          <input
            value={review.text}
            onChange={onChange}
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button className="btn btn-primary" names="add-cart" type="submit">
          submit review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
