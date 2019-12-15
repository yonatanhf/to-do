import React, { createContext, useContext } from 'react';

const ToDoStore = createContext({});
const { Provider } = ToDoStore;

const useToDoContext: any = () => useContext(ToDoStore) as {
  toDoList: number;
  setToDoList: React.Dispatch<React.SetStateAction<number>>;
};
export { ToDoStore, Provider, useToDoContext };
