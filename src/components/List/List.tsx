/* eslint-disable import/extensions */
import React from 'react';
import { useToDoContext } from '../../store/index';
import Button from '../Button/Button';
import './list.css';

const List: React.FunctionComponent = () => {
  const { toDoList, setToDoList } = useToDoContext();
  return (
    <div id="to-do-lists">
      <input type="text" id="todo-input" />
      <Button id="add-list-button" label="Add" onclick={() => {}} />
      <Button id="all-list-button" label="All" onclick={() => {}} />
      <Button id="complete-list-button" label="Complete" onclick={() => {}} />
      <Button id="incomplete-list-button" label="Incomplete" onclick={() => {}} />
    </div>
  );
};

export default List;
