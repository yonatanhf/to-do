/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List/List';
import { Provider } from './store/index';

const App: React.FunctionComponent = () => {
  const [toDoList, setToDoList] = useState([]);
  const toDo = (value: string): any => setToDoList([{ value }, ...toDoList]);
  const removeToDo = (value: string): any => {
    const tmpToDoList: {value: string}[] = [];
    setToDoList((oldList: {value: string}[]) => {
      oldList.forEach((el: {value: string}) => {
        if (el.value !== value) {
          tmpToDoList.push(el);
        }
      });
      return tmpToDoList;
    });
  };
  return (
    <Provider value={{
      toDoList, setToDoList: toDo, removeToDo,
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
