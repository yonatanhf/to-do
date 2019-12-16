/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List/List';
import { Provider } from './store/index';

const App: React.FunctionComponent = () => {
  const [toDoList, setToDoList] = useState([]);
  const toDo = (value: string): any => setToDoList([{ value }, ...toDoList]);
  const removeToDo = (): any => { };
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
