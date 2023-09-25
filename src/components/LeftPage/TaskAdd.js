import "./TaskAdd.css";
import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { MdAddCircle } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

export function TaskAdd() {
  const { addTask, setIsModalAddOpen } = useContext(TaskContext);

  const [newTaskValue, setNewTaskValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTaskValue !== "") addTask(newTaskValue);
    setNewTaskValue("");
    if (window.innerWidth > 600)
    setIsModalAddOpen(undefined) 
    else
    setIsModalAddOpen(false) 
  };

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  return (
    <>
      <div className="closeButtonContainer">
        <button className="closeButton">
          <FaTimes onClick={() => setIsModalAddOpen(false)} />
        </button>
      </div>
      <h1 className="leftTitle">Create New Task</h1>
      <form onSubmit={onSubmit}>
        <div className="taskContainer">
          <textarea
            placeholder="Write here new task to add"
            className="taskAdd"
            value={newTaskValue}
            onChange={onChange}
          />
          <button className="addButton">
            <MdAddCircle />
          </button>
        </div>
      </form>
    </>
  );
}
