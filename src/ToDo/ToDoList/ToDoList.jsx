import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  return (
    <>
      <div className="title-icon-wrapper pb-4">
        <p className="title-list mb-0">Today tasks</p>
        <i className="fa-solid fa-ellipsis rotated-icon option-icon"></i>
      </div>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTask && props.onEmpyTodos()}
      {!!props.totalTask && !props.searchedTasks.length && props.onEmptySearchResult(props.searchText)}
      {props.searchedTasks.map((task) => props.render(task))}
      <ul>{props.children}</ul>
    </>
  );
}

export default ToDoList;
