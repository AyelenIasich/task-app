import React from "react";
import "./CreateBtn.css";

function CreateBtn({ setShowModalCreate }) {
  const handleShowCreateModal = () => {
    setShowModalCreate(true);
  };

  return (
    <button
      type="button"
      className="btn-create-task-do"
      onClick={handleShowCreateModal}
    >
      +
    </button>
  );
}

export default CreateBtn;
