import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const myComment = <h1>AOPA</h1>

import App from "./src/App.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);