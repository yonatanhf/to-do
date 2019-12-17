import React, { createContext, useContext } from 'react';

interface ListType {
  [index: number]: { value: string; complete: boolean };
}
const ToDoStore = createContext({});
const { Provider } = ToDoStore;

const useToDoContext: any = () => useContext(ToDoStore) as {
  toDoList: ListType;
  setToDoList: React.Dispatch<React.SetStateAction<ListType>>;
  removeToDo: React.Dispatch<React.SetStateAction<ListType>>;
  setToDoComplete: React.Dispatch<React.SetStateAction<ListType>>;
};
export { ToDoStore, Provider, useToDoContext };
