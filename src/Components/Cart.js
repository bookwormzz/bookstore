import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, removeCart, submitOrder } from "../store";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  // Dispatch remove cart when Remove from Cart button is clicked
  const handleRemoveClick = (product, quantitToRemove) => {
    return () => dispatch(removeCart(product, quantitToRemove));
  };

  //Dispatch create order when Submit Order button is clicked
  const handleSubmitOrder = () => {
    return () => dispatch(submitOrder());
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.isCart === true ? (
          cart.lineItems.map((lineItem) => (
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
          ))
        ) : (
          <li>No items in cart.</li>
        )}
      </ul>
      <button onClick={handleSubmitOrder()}>Submit Order</button>
    </div>
  );
};

export default Cart;
