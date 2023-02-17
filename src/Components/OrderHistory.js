import React, { useEffect } from "react";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../store/orders";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";

const OrderHistory = () => {
  const { orders } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      <ListGroup>
        {orders?.map((order) => (
          <ListGroup.Item key={order.id} id="orderContainer">
            <Order order={order} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default OrderHistory;
