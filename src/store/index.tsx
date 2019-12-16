import React, { createContext, useContext } from 'react';

interface ListType {
  [index: number]: { value: string };
}
const ToDoStore = createContext({});
const { Provider } = ToDoStore;

const useToDoContext: any = () => useContext(ToDoStore) as {
  toDoList: ListType;
  setToDoList: React.Dispatch<React.SetStateAction<ListType>>;
  removeToDo: React.Dispatch<React.SetStateAction<ListType>>;
};
export { ToDoStore, Provider, useToDoContext };
