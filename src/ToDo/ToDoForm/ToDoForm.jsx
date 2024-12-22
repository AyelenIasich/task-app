import React, {useState} from "react";
import "./ToDoForm.css";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn/SecondaryBtn";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn/PrimaryBtn";
import InputError from "../../components/InputError/InputError";

function ToDoForm({ setShowModalCreate, handleCreateTask ,formError}) {
  const [newTaskValue, setNewTaskValue] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    handleCreateTask(newTaskValue);
  };

  const handleCancel = () => {
    setShowModalCreate(false);
  };

  const handleChange = (e) => {
    setNewTaskValue(e.target.value);
  };

  return (
    <form className="card-form" onSubmit={handleCreate}>
      <label className="label-create">Create New Task</label>
      <textarea
        className="textarea-create"
        placeholder="Cleaning kitchen"
        value={newTaskValue}
        onChange={handleChange}
      ></textarea>
      <InputError formError={formError.field === 'taskName' && formError.message}/>

      <div className="row py-2  d-flex justify-content-end">
        <div className="col-6 col-sm-4">
          <SecondaryBtn label="Cancel" onClick={handleCancel} />
        </div>
        <div className="col-6 col-sm-4">
          <PrimaryBtn label="Create Task" />
        </div>
      </div>
    </form>
  );
}

export default ToDoForm;
