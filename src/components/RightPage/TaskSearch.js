import "./TaskSearch.css";

export function TaskSearch({ searchValue, setSearchValue }) {
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
