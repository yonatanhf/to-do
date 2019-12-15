/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { ToDoStore } from '../../store/index';

interface ListProps {
  name: string;
}

const List: React.FunctionComponent<ListProps> = (props: ListProps) => {
  const { name } = props;

  const { toDoList, setToDoList } = useContext(ToDoStore) as {
    toDoList: number;
    setToDoList: React.Dispatch<React.SetStateAction<number>>;
  };
  return (
    <div id="to-do-lists">
React, Ts, webpack, and initial
      {name}
      {' '}
working.
      {toDoList}
      <button onClick={() => setToDoList(toDoList + 1)}>Add Number</button>
    </div>
  );
};

export default List;
