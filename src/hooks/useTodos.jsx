import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    loading,
    items: taskList,
    saveItem: saveTasks,
    error,
    sincronizeTask,
  } = useLocalStorage([], "tasks_v1");

  const [formError, setFormError] = useState({ field: "", message: "" });

  const completedTask = taskList.filter((task) => task.isCompleted).length;
  const totalTask = taskList.length;

  const [searchValue, setSearchValue] = useState("");
  const [showModalCreate, setShowModalCreate] = useState(false);

  // #region success modal
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCloseSuccessModal = () => {
    setShowSuccessMessage(false);
  };

  const handleOpenSuccessModal = () => {
    setShowSuccessMessage(true);
  };

  useEffect(() => {
    if (completedTask === totalTask && totalTask > 0) {
      handleOpenSuccessModal();
    }
  }, [completedTask, totalTask]);
  // #endregion

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD") //Descompone los acentos
      .replace(/[\u0300-\u036f]/g, ""); //Elimina los acentos
  };

  const searchedTasks = taskList.filter((task) => {
    const taskText = normalizeText(task.text);
    const searchText = normalizeText(searchValue);
    return taskText.includes(searchText);
  });

  const handleCompletedTask = (id) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    saveTasks(updatedTaskList);
  };

  const handleDeleteTask = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    saveTasks(updatedTaskList);
  };

  const handleCreateTask = (newTaskValue) => {
    if (newTaskValue.trim() === "") {
      setFormError({ field: "taskName", message: "Task name is required" });
      return;
    }
    const newTask = {
      id: window.crypto.randomUUID(),
      timestamp: Date.now(),
      text: newTaskValue,
      isCompleted: false,
    };

    const updatedTaskList = [...taskList, newTask];
    saveTasks(updatedTaskList);
    setShowModalCreate(false);
  };

  return {
    completedTask,
    totalTask,
    taskList,
    loading,
    handleCompletedTask,
    handleDeleteTask,
    searchValue,
    setSearchValue,
    searchedTasks,
    setShowModalCreate,
    showModalCreate,
    handleCreateTask,
    formError,
    showSuccessMessage,
    handleCloseSuccessModal,
    error,
    sincronizeTask,
  };
}

export { useTodos };
