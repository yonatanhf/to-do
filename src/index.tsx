/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import List from './components/List/List';
import { Provider } from './store/index';

ReactGA.initialize('todo-analytics');
interface ToDoType {
  value: string; completed: boolean;
}
const App: React.FunctionComponent = () => {
  const [toDoList, setToDoList] = useState([]);
  const [show, showToDos] = useState('All');
  const toDoExists = (toDoElement: ToDoType) => toDoList.some((el: ToDoType) => el.value === toDoElement.value);
  const toDo = (newToDoElement: ToDoType[]) => !toDoExists(newToDoElement[0]) && setToDoList([...newToDoElement, ...toDoList]);
  const removeToDo = (value: string) => {
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

  const Event: any = (category: string, action: string, label: string) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  const setToDoComplete = (value: string, completed: boolean) => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const tmpToDoList: ToDoType[] = [];
    setToDoList((oldList: ToDoType[]) => {
      oldList.forEach((el: ToDoType) => {
        if (el.value !== value) {
          tmpToDoList.push(el);
        } else { tmpToDoList.push({ value: el.value, completed }); }
      });
      return tmpToDoList;
    });
  };
  return (
    <Provider value={{
      toDoList, setToDoList: toDo, removeToDo, setToDoComplete, show, showToDos,
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
