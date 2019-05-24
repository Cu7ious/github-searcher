/**
 * This module creates renders the APP
 * and mounts it to the "root" DOM node
 */
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import dotenv from "dotenv"

import App from "./components/App"
import "./main.scss"

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
