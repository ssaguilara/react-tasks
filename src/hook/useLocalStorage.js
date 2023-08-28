import { useState } from "react";

export function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem;
  
    if (localStorageItem) {
      parsedItem = JSON.parse(localStorageItem);
    } else {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = [];
    }
  
    const [item, setItem] = useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem("TASKS", JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  }