import React from "react";
import "./TaskAdd.css";
import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext"; 

export function TaskAdd() {
  const { addTask } = useContext(TaskContext);

  const [newTaskValue, setNewTaskValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
  };

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Write here new task" className="taskAdd" value={newTaskValue}
        onChange={onChange}/>
      <button className="addButton">
        {" "}
        Add
      </button>
    </form>
  );
}
