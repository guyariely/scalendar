import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import AppProviders from "./app/context";
import "./styles/setting.css";
import "./styles/base.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
