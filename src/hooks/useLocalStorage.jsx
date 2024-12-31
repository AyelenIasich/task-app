import React, { useEffect, useReducer, useState } from "react";

function useLocalStorage(initialValue, itemListName) {

  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { sincronizeItem, items, loading, error } = state;

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

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
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, [sincronizeItem]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemListName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeTask = () => { onSincronize(); };

  return { loading, items, saveItem, error, sincronizeTask };
}

const initialState = ({ initialValue }) => ({
  sincronizeItem: true,
  items: initialValue,
  loading: true,
  error: false,
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  sincronize: "SINCRONIZE",
  save: "SAVE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: { ...state, error: true, loading: false },
  [actionTypes.success]: {
    ...state,
    loading: false,
    sincronizeItem: true,
    items: payload,
  },
  [actionTypes.save]: {
    ...state,
    items: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizeItem: false,
    loading: true,
  },
});
export { useLocalStorage };
