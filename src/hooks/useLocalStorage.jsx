import React, { useState } from "react";

function useLocalStorage(initialValue) {
    
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(initialValue);

  const saveItem = (newItem) =>{
    setItems(newItem);
  }

  return { loading, items, saveItem };
}

export { useLocalStorage };
