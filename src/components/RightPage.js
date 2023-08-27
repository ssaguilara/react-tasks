import { Counter } from "./RightPage/TaskCounter";
import { TaskItem } from "./RightPage/TaskItem";
import { TaskList } from "./RightPage/TaskList";
import { TaskSearch } from "./RightPage/TaskSearch";
import "./RightPage.css";
import { useState } from "react";

export default function RightPage() {
  const defaultTasks = [
    { text: "First Task ", completed: true },
    { text: "Second Task", completed: false },
    { text: "Third Task", completed: false },
    { text: "Fourth Task", completed: false },
    { text: "Fifth Task", completed: true },
    { text: "Sixth Task", completed: false },
    { text: "Seventh Task", completed: false },
    { text: "Eighth Task", completed: false },
  ];

  const [tasks, setTasks] = useState(defaultTasks);
  const completedTask = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  const [searchValue, setSearchValue] = useState("");
  const searchedTask = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase())
  );
 
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

 
  return (
    <div className="rightPage">
      <Counter completed={completedTask} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList>
        {searchedTask.map((task, index) => (
          <TaskItem key={index} text={task.text} completed={task.completed} onCompleted={() => completeTask(index)}
          onDelete={() => deleteTask(index)} />
        ))}
      </TaskList>
    </div>
  );
}
