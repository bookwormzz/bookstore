import axios from "axios";
const products = (
  state = {
    products: [],
    selected: {},
  },
  action
) => {
  if (action.type === "SET_PRODUCTS") {
    return { ...state, products: action.products };
  }
  if (action.type === "SET_PRODUCT") {
    return { ...state, selected: action.product };
  }
  if (action.type === "ADD_PRODUCT") {
    return { ...state, products: [...state.products, action.product] };
  }
  return state;
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/products");
      dispatch({ type: "SET_PRODUCTS", products: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      dispatch({ type: "SET_PRODUCT", product: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/products/", product);
      dispatch({ type: "ADD_PRODUCT", product: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};


export default products;
