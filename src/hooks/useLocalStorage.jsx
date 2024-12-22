import React, { useEffect, useState } from "react";

function useLocalStorage(initialValue, itemListName) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(initialValue);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemListName);

        let parsedItem;

        if (!localStorageItem) {
          parsedItem = [];
          localStorage.setItem(itemListName, JSON.stringify(initialValue));
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItems(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemListName, JSON.stringify(newItem));
    setItems(newItem);
  };

  return { loading, items, saveItem,  error };
}

export { useLocalStorage };
