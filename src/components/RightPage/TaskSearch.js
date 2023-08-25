import "./TaskSearch.css";
import { useState } from "react";

export function TaskSearch() {
  const [searchValue, setSearchValue] = useState("");

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
