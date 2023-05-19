import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./Store/Store";
import LoginApp from "./Login/LoginApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (localStorage.getItem("firstname") === null) {
  root.render(
    <Provider store={store}>
      <LoginApp />
    </Provider>
  );
} else {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
