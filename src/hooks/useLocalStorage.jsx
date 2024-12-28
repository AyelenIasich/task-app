import React, { useEffect, useState } from "react";

function useLocalStorage(initialValue, itemListName) {
  const [sincronizeItem, setSincronizeItem] = useState(true);
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemListName);

        let parsedItem;

        if (!localStorageItem) {
          parsedItem = [];
          localStorage.setItem(itemListName, JSON.stringify(initialValue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItems(parsedItem);
        }
        setLoading(false);
        setSincronizeItem(true);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sincronizeItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemListName, JSON.stringify(newItem));
    setItems(newItem);
  };

  const sincronizeTask = () => {
    setLoading(true);
    setSincronizeItem(false);
  };

  return { loading, items, saveItem, error, sincronizeTask };
}

export { useLocalStorage };
