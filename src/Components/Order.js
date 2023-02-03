import React from "react";

const Order = (props) => {
  const { id, lineItems, createdAt } = props.order;
  const orderDate = new Date(createdAt).toLocaleDateString();
  return (
    <div>
      <h4>Order #: {id}</h4>
      <h4>Order Date: {orderDate}</h4>
      <div>
        {lineItems.map((lineItem) => (
          <ul>
            <li key={lineItem.id}>
              Product: {lineItem.product.name} [Qty: {lineItem.quantity}]
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Order;
