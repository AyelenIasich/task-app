import React from "react";
import LoadingToDoCounter from "../LoadingCounter/LoadingCounter";
import "./ToDoCounter.css";

function ToDoCounter({ completedTask, totalTask , loading}) {
  return (
    <>
      {loading ? (
        <LoadingToDoCounter />
      ) : (
        <h5 className="title">
          You have completed {completedTask} of {totalTask} tasks
        </h5>
      )}
    </>
  );
}

export default ToDoCounter;
