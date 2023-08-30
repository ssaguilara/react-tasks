import "./RightPage.css";
import { TaskCounter } from "./RightPage/TaskCounter";
import { TaskItem } from "./RightPage/TaskItem";
import { TaskList } from "./RightPage/TaskList";
import { TaskSearch } from "./RightPage/TaskSearch";
import { TaskLoading } from "./RightPage/TaskLoading";
import { TaskError } from "./RightPage/TaskError";
import { TaskEmpty } from "./RightPage/TaskEmpty";

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function RightPage() {
  // const defaultTasks = [
  //   { text: "First Task ", completed: true },
  //   { text: "Second Task", completed: false },
  //   { text: "Third Task", completed: false },
  //   { text: "Fourth Task", completed: false },
  //   { text: "Fifth Task", completed: true },
  //   { text: "Sixth Task", completed: false },
  //   { text: "Seventh Task", completed: false },
  //   { text: "Eighth Task", completed: false },
  // ];

  // localStorage.setItem("TASKS", JSON.stringify(defaultTasks));
  // localStorage.removeItem('TASKS');

  const { loading, error, searchedTask, completeTask, deleteTask } = useContext(TaskContext)

  return (
    <div className="rightPage">
      <TaskCounter />
      <TaskSearch />

          <TaskList>
            {loading && <TaskLoading />}
            {error && <TaskError />}
            {!error && !loading && searchedTask.length === 0 && <TaskEmpty />}

            {searchedTask.map((task, index) => (
              <TaskItem
                key={index}
                text={task.text}
                completed={task.completed}
                onCompleted={() => completeTask(index)}
                onDelete={() => deleteTask(index)}
              />
            ))}
          </TaskList>

    </div>
  );
}
