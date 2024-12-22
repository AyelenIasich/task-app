import React from 'react'
import "./ToDoLoading.css"

function ToDoLoading() {
  return (
    <div className="loadingTodo-container">
      <div className="loading-circle"></div>
      <div className="loading-text"></div>
      <div className="loading-delete-icon"></div>
    </div>
  )
}

export default ToDoLoading