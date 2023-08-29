import { Counter } from "./RightPage/TaskCounter";
import { TaskItem } from "./RightPage/TaskItem";
import { TaskList } from "./RightPage/TaskList";
import { TaskSearch } from "./RightPage/TaskSearch";
import "./RightPage.css";
import { useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import { TaskLoading } from "./RightPage/TaskLoading";
import { TaskError } from "./RightPage/TaskError";
import { TaskEmpty } from "./RightPage/TaskEmpty";

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

  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TASKS", []);

  const completedTask = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  const [searchValue, setSearchValue] = useState("");
  const searchedTask = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    saveTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    saveTasks(newTasks);
  };

  return (
    <div className="rightPage">
      <Counter completed={completedTask} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList>
        {loading && <TaskLoading />}
        {error && <TaskError/>}
        {!error && !loading && searchedTask.length === 0 && <TaskEmpty/>}

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
