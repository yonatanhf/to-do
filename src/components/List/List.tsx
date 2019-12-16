/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useToDoContext } from '../../store/index';
import Button from '../Button/Button';
import './list.css';

interface Element {
  value: string;
  onDelete: Function;
}

const ToDoElement: React.FC<Element> = ({ value, onDelete }: Element) => (
  <div>
    {value}
    {' '}
    <Button id={value} label="X" onclick={(): any => { onDelete(value); }} />
  </div>
);

const List: React.FunctionComponent = () => {
  const {
    toDoList, setToDoList, removeToDo,
  } = useToDoContext();
  const [inputValue, setInputValue] = useState('');
  return (
    <div id="to-do-lists">
      <input type="text" id="todo-input" value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>): any => { setInputValue(e.target.value); }} />
      <Button id="add-list-button" label="Add" onclick={(): any => { setToDoList(inputValue); setInputValue(''); }} />
      {toDoList.length > 0 && toDoList.map((el: Element) => (
        <ToDoElement key={el.value} value={el.value} onDelete={removeToDo} />
      ))}
      <Button id="all-list-button" label="All" onclick={() => {}} />
      <Button id="complete-list-button" label="Complete" onclick={() => {}} />
      <Button id="incomplete-list-button" label="Incomplete" onclick={() => {}} />
    </div>
  );
};

export default List;
