import "./TaskCounter.css";

export function Counter({ total, completed }) {
  return (
    <>
      <div className="taskCounter__title">YOU HAVE </div>
      <p className="taskCounter__complete">
        completed <span>{completed}</span> of <span>{total}</span> Task
      </p>
    </>
  );
}
