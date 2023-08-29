import { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        // throw new Error('Connection Error to LocalStorage')
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        } 
        else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } 
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error)
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem("TASKS", JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
