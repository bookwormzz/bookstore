import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, removeCart } from "../store";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const { lineItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  // Dispatch remove cart when remove from cart button is clicked
  const handleRemoveClick = (product, quantitToRemove) => {
    return () => dispatch(removeCart(product, quantitToRemove));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {lineItems.map((lineItem) => (
          <li key={lineItem.id}>
            {lineItem.product.name}
            <br></br>
            Qty: {lineItem.quantity}{" "}
            <button
              onClick={handleRemoveClick(lineItem.product, lineItem.quantity)}
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <button>Submit Order</button>
    </div>
  );
};

export default Cart;
