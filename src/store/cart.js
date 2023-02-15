import axios from "axios";
const cart = (state = { lineItems: [] }, action) => {
  if (action.type === "SET_CART") {
    return action.cart;
  } else if (action.type === "REMOVE_CART") {
    return action.cart;
  } else if (action.type === "SUBMIT_ORDER") {
    return action.cart;
  } else if (action.type === "ADD_CART") {
    return action.cart;
  }
  return state;
};

export const fetchCart = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.get("/api/orders/cart", {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "SET_CART", cart: response.data });
  };
};

export const removeCart = (product, quantityToRemove) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.put(
      "/api/orders/cart",
      { product, quantityToRemove },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "REMOVE_CART", cart: response.data });
  };
};

export const addToCart = (body) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      const response = await axios.post("/api/orders/cart", body, {
        headers: {
          authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: "ADD_CART", cart: response.data });
  };
};

export const submitOrder = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.post(
      "/api/orders",
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "SUBMIT_ORDER", cart: response.data });
  };
};

export default cart;
