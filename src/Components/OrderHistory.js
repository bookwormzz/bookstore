import React, { useEffect } from "react";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../store/orders";
import ListGroup from 'react-bootstrap/ListGroup';

const OrderHistory = () => {
  const { orders } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      <div>
        {orders?.map((order) => (
             <div className="card" key={order.id} id="orderContainer">
     <div className="card-body">
   
            <Order order={order} />

            </div>
            </div>

        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
