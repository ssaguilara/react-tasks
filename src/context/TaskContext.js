import { useState, createContext} from 'react';
import { useLocalStorage }  from '../hook/useLocalStorage'

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {

    const {
        item: tasks,
        saveItem: saveTasks,
        loading,
        error,
      } = useLocalStorage("TASKS", []);
    
      const completedTask = tasks.filter((task) => task.completed).length;
      const totalTasks = tasks.length;
    
      const [searchValue, setSearchValue] = useState("");
      const searchedTask = tasks.filter((task) =>
        task.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    
      const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        saveTasks(newTasks);
      };
    
      const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        saveTasks(newTasks);
      };

      const addTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({
          text,
          completed: false,
        });
        saveTasks(newTasks);
      };

      const [isModalAddOpen, setIsModalAddOpen] = useState(undefined);

      const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  return (
    <TaskContext.Provider value={{
      loading,
      error,
      completedTask,
      totalTasks,
      searchValue,
      setSearchValue,
      searchedTask,
      completeTask,
      deleteTask,
      addTask,
      isModalAddOpen,
      setIsModalAddOpen,
      windowWidth, 
      setWindowWidth
    }}>

      {children}
    </TaskContext.Provider>
  );
}

