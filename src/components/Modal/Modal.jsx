import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-wrapper">{children}</div>,
    document.getElementById("modal-root")
  );
}



export default Modal;
