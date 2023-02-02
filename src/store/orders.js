import axios from "axios";
const orders = (state = [], action) => {
  if (action.type === "SET_ORDERS") {
    return action.orders;
  }
  return state;
};

const fetchOrders = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.get("/api/orders/", {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "SET_ORDERS", orders: response.data });
  };
};

export { fetchOrders };
export default orders;
