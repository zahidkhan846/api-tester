import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import RequestProvider from "./Context/RequestContext";

ReactDOM.render(
  <Router>
    <RequestProvider>
      <App />
    </RequestProvider>
  </Router>,
  document.getElementById("root")
);
