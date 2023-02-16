import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const ProductCard = (props) => {
  const { product } = props;

  return (
    <div id="product-item" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} />
      </Link>
      <Link to={`/product/${product.id}`}>
        <span>{product.name}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
