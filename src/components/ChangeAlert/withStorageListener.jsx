import React, { useState } from "react";

function withStorageListener(WrappedComponent) {
  return function wrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener("storage", (change) => {
      if (change.key === "tasks_v1") {
        console.log("hubos cambios");
        setStorageChange(true);
       
      }
    });

     const toggleShow = () =>{
        setStorageChange(false);
        props.sincronizeTask();
     }

    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow}  />
    );
  };
}

export { withStorageListener };
