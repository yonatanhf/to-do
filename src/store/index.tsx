/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, useContext } from 'react';

interface ToDoType {
  value: string; completed: boolean;
}
const ToDoStore = createContext({});
const { Provider } = ToDoStore;

const useToDoContext = () => useContext(ToDoStore) as {
  toDoList: ToDoType[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
  removeToDo: React.Dispatch<React.SetStateAction<ToDoType[]>>;
  setToDoComplete: React.Dispatch<React.SetStateAction<ToDoType[]>>;
  show: string;
  showToDos: React.Dispatch<React.SetStateAction<string>>;
};
export { ToDoStore, Provider, useToDoContext };
