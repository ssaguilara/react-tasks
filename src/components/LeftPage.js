import React from "react";
import "./LeftPage.css";
import { TaskAdd } from "./LeftPage/TaskAdd";

export default function LeftPage() {

  return (
    <div className="leftPage">
      <TaskAdd />
    </div>
  );
}
