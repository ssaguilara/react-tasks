import "./TaskSearch.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export function TaskSearch() {

  const {searchValue,setSearchValue} = useContext(TaskContext);

  return (
    <input
      placeholder="Write here your Search"
      className="taskSearch"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}
