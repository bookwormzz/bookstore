import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { product } = props;
  const [qty, setQty] = useState(0);

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };
  return (
    <div id="product-item" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} />
      </Link>
      <Link to={`/product/${product.id}`}>
        <span>{product.name}</span>
      </Link>
      <div id="cart">
        <span>Qty: {qty} </span>
        <button onClick={incrementQty}>+</button>
        <button onClick={decrementQty}>-</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
