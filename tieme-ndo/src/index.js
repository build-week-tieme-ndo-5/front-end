import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-dom";
import { createStore } from "redux";
import clientReducer from "./Redux/reducers/clientReducer";

import logger from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "react-redux";

const store = createStore(clientReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store} >
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
