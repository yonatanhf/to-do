/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List/List';
import { Provider } from './store/index';

interface ToDoType {
  value: string; completed: boolean;
}
const App: React.FunctionComponent = () => {
  const [toDoList, setToDoList] = useState([]);
  const toDo = (value: string): any => setToDoList([{ value, completed: false }, ...toDoList]);
  const removeToDo = (value: string): any => {
    const tmpToDoList: ToDoType[] = [];
    setToDoList((oldList: ToDoType[]) => {
      oldList.forEach((el: ToDoType) => {
        if (el.value !== value) {
          tmpToDoList.push(el);
        }
      });
      return tmpToDoList;
    });
  };


  const setToDoComplete = (value: any) => {
    const tmpToDoList: ToDoType[] = [];
    setToDoList((oldList: ToDoType[]) => {
      oldList.forEach((el: ToDoType) => {
        if (el.value !== value) {
          tmpToDoList.push(el);
        } else { tmpToDoList.push({ value: el.value, completed: true }); }
      });
      return tmpToDoList;
    });
  };
  return (
    <Provider value={{
      toDoList, setToDoList: toDo, removeToDo, setToDoComplete,
    }}
    >
      <List />
    </Provider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('rootApp'),
);
