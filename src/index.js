import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./styles/_setting.scss";
import "./styles/_base.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
