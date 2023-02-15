import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchProduct } from "../../store/product";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";

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

  const handleSubmit = (e) => {
    axios.post("/api/reviews", { review: review.text, productId: productId });
    setReview({ text: "" });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  const [review, setReview] = useState({
    text: "",
  });

  const onChange = (ev) => {
    setReview({ text: ev.target.value });
    console.log("text", review.text);
    console.log("selected product", selectedProduct);
  };

  return (
    <div>
      <h1> Reviews </h1>
      <ul>
        {selectedProduct.reviews
          ? selectedProduct.reviews.map((review) => {
              return <li>{review.review}</li>;
            })
          : "no reviews found"}
      </ul>

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
