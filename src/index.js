import React from "react";
import ReactDOM from "react-dom/client";
import RightPage from "./components/RightPage";
import LeftPage from "./components/LeftPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LeftPage />
    <RightPage />
  </React.StrictMode>
);
