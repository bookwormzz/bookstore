import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, removeCart, submitOrder } from "../store";

const Cart = () => {
  const { auth } = useSelector((state) => state);
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
    return () => {
      dispatch(submitOrder());
    };
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.isCart & (cart.lineItems.length > 0) ? (
          <div>
            {cart.lineItems.map((lineItem) => (
              <li key={lineItem.id}>
                {lineItem.product.name}
                <br></br>
                Qty: {lineItem.quantity}{" "}
                <button
                  onClick={handleRemoveClick(
                    lineItem.product,
                    lineItem.quantity
                  )}
                >
                  Remove from Cart
                </button>
              </li>
            ))}
            <button onClick={handleSubmitOrder()}>Submit Order</button>;
          </div>
        ) : (
          <li>No items in cart</li>
        )}
      </ul>
    </div>
  );
};

export default Cart;
