/**
 * This module creates and exports the store
 */
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}
