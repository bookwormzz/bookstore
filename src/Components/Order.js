import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";


const Order = (props) => {
  const { id, lineItems, createdAt } = props.order;
  const orderDate = new Date(createdAt).toLocaleDateString();
  return (
    <div>
      <h4>Order #: {id}</h4>
      <div>Order Date: {orderDate}</div>
      <div>
        {" "}
        <ListGroup>
          {lineItems.map((lineItem) => (
            <ListGroup.Item key={lineItem.id}>
              {lineItem.product.name} [Qty: {lineItem.quantity}]
            </ListGroup.Item>
          ))}{" "}
        </ListGroup>
      </div>
    </div>
  );
};

export default Order;
