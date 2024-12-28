import React, { useState } from "react";

function useStorageListener(sincronizeTask) {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "tasks_v1") {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    setStorageChange(false);
    sincronizeTask();
  };

  return { show: storageChange, toggleShow: toggleShow };
}

export { useStorageListener };
