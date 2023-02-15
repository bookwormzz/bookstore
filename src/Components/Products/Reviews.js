import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchProduct } from "../../store/product";
import axios from "axios";

const Reviews = (props) => {
  // Need to filter out the product based on
  //how to access props.match in a functional component
  //is it the norm to have some sort of state setting function in each component, so we don't risk returning a blank component?
  const { products } = useSelector((state) => state);
  const params = useParams();

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("submitted. review:", review.text);
    axios.post("/api/reviews", { review: review.text, productId: params.id });
    setReview({ text: "" });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(params.id));
  }, []);

  const [review, setReview] = useState({
    text: "",
  });

  const onChange = (ev) => {
    setReview({ text: ev.target.value });
    console.log(review);
  };

  return (
    <div>
      <h1> reviews </h1>
      <ul>
        {products.selected.reviews
          ? products.selected.reviews.map((review) => {
              return <li>{review.review}</li>;
            })
          : "loading"}
      </ul>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label> Submit your own review: </label>
        <input value={review.text} onChange={onChange}></input>
        <button names="add-cart" type="submit">
          {" "}
          submit review{" "}
        </button>
      </form>
    </div>
  );
};

export default Reviews;
