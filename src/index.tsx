/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List/List';
import { Provider } from './store/index';

const App: React.FunctionComponent = () => {
  const [toDoList, setToDoList] = useState(0);
  return (
    <Provider value={{ toDoList, setToDoList }}>
      <List name="Todo-lists" />
    </Provider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('rootApp'),
);
