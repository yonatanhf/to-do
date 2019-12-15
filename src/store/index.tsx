import { createContext, useContext } from 'react';

const ToDoStore = createContext({});
const { Provider } = ToDoStore;
const useToDoContext = useContext(ToDoStore);

export { ToDoStore, Provider, useToDoContext };
