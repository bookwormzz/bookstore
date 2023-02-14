import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

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
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    let orderQuant = parseInt(data.qty);
    console.log(orderQuant);
    event.preventDefault();
    // dispatch(
    //   addToCart({
    //     quantity: data.qty,
    //     product: {
    //       id: data.product.id,
    //     },
    //   })
    // );
  };

  return (
    <div id="product-item" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} />
      </Link>
      <Link to={`/product/${product.id}`}>
        <span>{product.name}</span>
      </Link>
      {/* <div id="cart">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="qty">Qty: </label>
          <input defaultValue={qty} name="qty" {...register("qty")} />
          <button type="submit">Add to Cart</button>
        </form>
        <button onClick={incrementQty}>+</button>
        <button onClick={decrementQty}>-</button>
      </div> */}
    </div>
  );
};

export default ProductCard;
