/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useToDoContext } from '../../store/index';
import Button from '../Button/Button';
import './list.css';

interface Element {
  value: string;
  completed: boolean;
  onDelete: Function;
  onComplete: Function;
}

const ToDoElement: React.FC<Element> = ({
  value, completed, onDelete, onComplete,
}: Element) => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  return (
    <div className="todo-element">
      <span className={deleteStatus === false ? 'todo-element-label-in' : 'todo-element-label-out'} onKeyDown={() => onComplete(value)} onClick={() => onComplete(value)}>
        <span>
          {' '}
          {value}
          {' '}
        </span>
      </span>
      <Button id={value} label={completed === false ? 'X' : '✓'} onclick={(): any => { setDeleteStatus(true); setTimeout(() => onDelete(value), 500); }} />
    </div>
  );
};

const List: React.FunctionComponent = () => {
  const {
    toDoList, setToDoList, removeToDo, setToDoComplete,
  } = useToDoContext();
  const [inputValue, setInputValue] = useState('');
  return (
    <div id="to-do-lists">
      <div id="input-elements">
        <input type="text" id="todo-input" value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>): any => { setInputValue(e.target.value); }} />
        <Button id="add-list-button" label="Add" onclick={(): any => { setToDoList(inputValue); setInputValue(''); }} />
      </div>
      <div id="todo-list-elements">
        {toDoList.length > 0 && toDoList.map((el: Element) => (
          <ToDoElement key={el.value} value={el.value} completed={el.completed} onDelete={removeToDo} onComplete={setToDoComplete} />
        ))}
      </div>
      <div id="todo-list-options">
        <Button id="all-list-button" label="All" onclick={() => {}} />
        <Button id="complete-list-button" label="Complete" onclick={() => {}} />
        <Button id="incomplete-list-button" label="Incomplete" onclick={() => {}} />
      </div>
    </div>
  );
};

export default List;
