import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import auth from "./auth";
import cart from "./cart";
import products from "./product";
import orders from "./orders";
import user from "./user";

const reducer = combineReducers({
  auth,
  cart,
  orders,
  products,
  user,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from "./auth";
export * from "./cart";
export * from "./orders";
export * from "./product";
