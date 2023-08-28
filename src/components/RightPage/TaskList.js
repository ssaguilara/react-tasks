import './TaskList.css'

export function TaskList(props) {
    // console.log(props.children)
    return (
      <ul className="taskList">
        {props.children}
      </ul>
    );
  }
  
