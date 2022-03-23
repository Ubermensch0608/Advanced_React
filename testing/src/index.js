import React from "react";
import ReactDOM from "react-dom";

import Root from "Root";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Root>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Root>,

  document.getElementById("root")
);
