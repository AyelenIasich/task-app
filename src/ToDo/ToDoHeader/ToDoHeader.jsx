import React from "react";
import "./ToDoHeader.css";

function ToDoHeader({ children, loading }) {
  return (
    <div>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </div>
  );
}

export default ToDoHeader;
