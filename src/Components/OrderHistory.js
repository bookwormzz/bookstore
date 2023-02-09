import React, { useEffect } from "react";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../store";

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
          <div key={order.id} id="orderContainer">
            <Order order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
