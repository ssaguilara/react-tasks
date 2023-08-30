import "./TaskCounter.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export function TaskCounter() {

  const {completedTask,totalTasks} = useContext(TaskContext);

  return (
    <>
      <div className="taskCounter__title">YOU HAVE </div>
      <p className="taskCounter__complete">
        completed <span>{completedTask}</span> of <span>{totalTasks}</span> Task
      </p>
    </>
  );
}
