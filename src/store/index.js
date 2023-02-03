import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import auth from "./auth";
import cart from "./cart";
import products from "./product";
import orders from "./orders";

const reducer = combineReducers({
  auth,
  cart,
  orders,
  products,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from "./auth";
export * from "./cart";
export * from "./orders";
