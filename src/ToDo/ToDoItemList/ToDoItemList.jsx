
import React from "react";
import "./ToDoItem.css";

function ToDoItemList({text, isCompleted, onComplete, onDelete}) {
  return (
    <li className="list-item-wrapper py-3">
      <span 
        className={`circle ${isCompleted ? "completed": ""}`}
        onClick={onComplete}
      />
      <p className={`list-item mb-0 task ${isCompleted ? "task-completed": "" }`}>{text} </p>
      <i className="fa-solid fa-x delete-icon" onClick={onDelete}></i>
    </li>
  );
}

export default ToDoItemList;
