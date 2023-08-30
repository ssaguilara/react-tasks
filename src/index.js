import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import RightPage from "./components/RightPage";
import LeftPage from "./components/LeftPage";
import { TaskContextProvider } from "./context/TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <LeftPage />
      <RightPage />
    </TaskContextProvider>
  </React.StrictMode>
);
