import "./TaskItem.css";
import { FaTimes, FaCheck } from "react-icons/fa";

export function TaskItem({ text, completed, onCompleted, onDelete}) {
  return (
    <li className="taskItem">
      <span
        className={`icon icon__check ${completed ? "icon__check--active" : ""}`}
        onClick={onCompleted}
      >
        {" "}
        <FaCheck />
      </span>
      <p
        className={`taskItem__description ${
          completed ? "taskItem__description--complete" : ""
        }`}
      >
        {text}
      </p>
      <span className="icon icon__delete"
      onClick={onDelete}>
        {" "}
        <FaTimes />{" "}
      </span>
    </li>
  );
}
