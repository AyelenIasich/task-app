import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <>
      <div className="title-icon-wrapper pb-4">
        <p className="title-list mb-0">Today tasks</p>
        <i className="fa-solid fa-ellipsis rotated-icon option-icon"></i>
      </div>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTask && props.onEmpyTodos()}
      {!!props.totalTask &&
        !props.searchedTasks.length &&
        props.onEmptySearchResult(props.searchText)}

      <ul className="p-0">{props.searchedTasks.map((task) => renderFunc(task))}</ul>
    </>
  );
}

export default ToDoList;
