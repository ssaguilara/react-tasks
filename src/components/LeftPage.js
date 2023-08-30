import React from "react";
import "./LeftPage.css";
import { LeftTitle } from "./LeftPage/LeftTitle";
import { TaskAdd } from "./LeftPage/TaskAdd";
import { PersonImage } from "./LeftPage/PersonImage";


export default function LeftPage() {


  return (
    <div className="leftPage">
      <LeftTitle />
      <TaskAdd />

      <PersonImage />

    </div>
  );
}
