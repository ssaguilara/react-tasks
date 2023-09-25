import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { TaskContextProvider } from "./context/TaskContext";
import Book from "./components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <Book/>
    </TaskContextProvider>
  </React.StrictMode>
);


