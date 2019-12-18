/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
  show: string;
}

const ToDoElement: React.FC<Element> = ({
  value, completed, onDelete, onComplete,
}: Element) => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const animationDelay = 500;
  return (
    <div className="todo-element">
      <span className={deleteStatus === false ? 'todo-element-label-in' : 'todo-element-label-out'} onKeyDown={() => onComplete(value)} onClick={() => onComplete(value)}>
        <span>
          {' '}
          {value}
          {' '}
        </span>
      </span>
      <Button id={value} label={completed === false ? 'X' : '✓'} onclick={() => { setDeleteStatus(true); setTimeout(() => onDelete(value), animationDelay); }} />
    </div>
  );
};

const List: React.FunctionComponent = () => {
  const {
    toDoList, setToDoList, removeToDo, setToDoComplete, show, showToDos,
  } = useToDoContext();
  const [inputValue, setInputValue] = useState('');
  return (
    <div id="to-do-lists">
      <div id="input-elements">
        <input type="text" id="todo-input" value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>): any => { setInputValue(e.target.value); }} />
        <Button id="add-list-button" label="Add" onclick={() => { setToDoList(inputValue); setInputValue(''); showToDos('all'); }} />
      </div>
      <div id="todo-list-elements">
        {toDoList.length > 0 && toDoList.map((el: Element) => {
          const toDo: JSX.Element = <ToDoElement key={el.value} value={el.value} completed={el.completed} show={show} onDelete={removeToDo} onComplete={setToDoComplete} />;
          return (
            (show === 'all' && toDo)
             || (show === 'incomplete' && (el.completed === false) && toDo)
                || (show === 'completed' && (el.completed === true) && toDo)
          );
        })}
      </div>
      <div id="todo-list-options">
        <Button id="all-list-button" label="All" onclick={() => { showToDos('all'); }} />
        <Button id="complete-list-button" label="Complete" onclick={() => { showToDos('completed'); }} />
        <Button id="incomplete-list-button" label="Incomplete" onclick={() => { showToDos('incomplete'); }} />
      </div>
    </div>
  );
};

export default List;
