import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Order = (props) => {
  const { id, lineItems, createdAt } = props.order;
  const orderDate = new Date(createdAt).toLocaleDateString();
  return (
    <div className = "card-body">
      <h5 className = "card-title font-weight-bold">Order #: {id}</h5>
      <div className = "card-text">Order Date: {orderDate}</div>

      <div>
        {lineItems.map((lineItem) => (
          <div className = "card-text" key={lineItem.id}>
            {lineItem.product.name} [Qty: {lineItem.quantity}]
          </div>
        ))}
      </div>
    </div>

    //       <div class="card">
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <button type="button" class="btn btn-primary">Button</button>
    //   </div>
    // </div>
  );
};

export default Order;
