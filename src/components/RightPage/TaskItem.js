import './TaskItem.css'
import { FaTimes, FaCheck} from "react-icons/fa";


export function TaskItem({text, completed}) {

    return (
      <li className="taskItem">
        <span className={`icon icon__check ${completed ? "icon__check--active" : ""}`}> <FaCheck/></span>
        <p className={`taskItem__description ${completed ? "taskItem__description--complete" : ""}`}>{text}</p>
        <span className="icon icon__delete"> <FaTimes/> </span>
      </li>
    );
  }
  
