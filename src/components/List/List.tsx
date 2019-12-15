/* eslint-disable import/extensions */
import React from 'react';
import { useToDoContext } from '../../store/index';

const List: React.FunctionComponent = () => {
  const { toDoList, setToDoList } = useToDoContext();
  return (
    <div id="to-do-lists">
        ToDo
      {toDoList}
      <button onClick={() => setToDoList(toDoList + 1)}>Add</button>
    </div>
  );
};

export default List;
