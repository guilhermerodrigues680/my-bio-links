import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Self-hosting font Raleway
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
