import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import store from "./store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
