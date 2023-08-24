import { Counter } from "./RightPage/TaskCounter";
import { TaskItem } from "./RightPage/TaskItem";
import { TaskList } from "./RightPage/TaskList";
import { TaskSearch } from "./RightPage/TaskSearch";
import "./RightPage.css";

export default function RightPage() {
  const defaultTodos = [
    { text: "First Task ", completed: true },
    { text: "Second Task", completed: false },
    { text: "Third Task", completed: false },
    { text: "Fourth Task", completed: false },
    { text: "Fifth Task", completed: true },
    { text: "Sixth Task", completed: false },
    { text: "Seventh Task", completed: false },
    { text: "Eighth Task", completed: false },
  ];

  return (
    <div className="RightPage">
      <Counter completed={2} total={8} />
      <TaskSearch />

      <TaskList>
        {defaultTodos.map((todo, index) => (
          <TaskItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TaskList>
    </div>
  );
}
