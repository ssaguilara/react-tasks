import "./TaskSearch.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export function TaskSearch() {

  const {searchValue,setSearchValue} = useContext(TaskContext);

  return (
    <input
      placeholder="Search your Task"
      className="taskSearch"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}
