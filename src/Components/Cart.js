import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, removeCart, submitOrder } from "../store";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";



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
      <ListGroup>
        {cart.isCart &&
          cart.lineItems.map((lineItem) => (
            <ListGroup.Item key={lineItem.id}>
              {lineItem.product.name}
              <br></br>
              Qty: {lineItem.quantity}{" "}
              <Button
                onClick={handleRemoveClick(lineItem.product, lineItem.quantity)}
              >
                Remove from Cart
              </Button>
            </ListGroup.Item>
          ))}
      </ListGroup>
      {cart.lineItems.length > 0 ? (
        <Button onClick={handleSubmitOrder()}>Submit Order</Button>
      ) : (

          <div>No items in cart</div>

      )}
    </div>
  );
};

export default Cart;
