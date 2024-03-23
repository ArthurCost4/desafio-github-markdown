import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./src/App.js";

/**?
 * 
 
const appRouting = (
  <Router>
    <Routes>
      <Route exact path="/" component={App} />
    </Routes>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));
*/
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);