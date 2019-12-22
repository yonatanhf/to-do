/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useToDoContext } from '../../store/index';
import Button from '../Button/Button';
import './list.css';

interface ToDoElementType {
  value: string;
  completed: boolean;
  onDelete: Function;
  onComplete: Function;
  show: string;
}

const ToDoElement: React.FC<ToDoElementType> = ({
  value, completed, onDelete, onComplete,
}: ToDoElementType) => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const animationDelay = 500;
  let labelStyle = 'todo-element-label-in';

  const labelClickEvent = () => onComplete(value, !completed);
  const buttonClickEvent = () => { setDeleteStatus(true); setTimeout(() => onDelete(value), animationDelay); };
  if (deleteStatus === true) {
    labelStyle = 'todo-element-label-out';
  }
  return (
    <div className="todo-element">
      <span className={labelStyle} onKeyDown={labelClickEvent} onClick={labelClickEvent}>
        <span>
          {' '}
          {value}
          {' '}
        </span>
      </span>
      <span id={value} className="spanButton" onClick={buttonClickEvent}>
        {completed === false ? 'X' : '✓'}
        {' '}
      </span>
    </div>
  );
};

const List: React.FunctionComponent = () => {
  const {
    toDoList, setToDoList, removeToDo, setToDoComplete, show, showToDos,
  } = useToDoContext();
  const [inputValue, setInputValue] = useState('');
  const { all, completed, incomplete } = { all: 'All', completed: 'Completed', incomplete: 'Incomplete' };

  const clickEvent = () => {
    if (inputValue !== '') setToDoList([{ value: inputValue, completed: false }]);
    setInputValue('');
    showToDos(all);
  };

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const displayElement = (value: string, isCompleted: boolean, showStatus: string): JSX.Element => (
    <ToDoElement key={value} value={value} completed={isCompleted} show={showStatus} onDelete={removeToDo} onComplete={setToDoComplete} />);

  const displayToDo = (value: string, isCompleted: boolean, showStatus: string) => (
    (showStatus === all && displayElement(value, isCompleted, showStatus))
       || (show === incomplete && (isCompleted === false) && displayElement(value, isCompleted, showStatus))
          || (show === completed && (isCompleted === true) && displayElement(value, isCompleted, showStatus))
  );
  return (
    <div id="to-do-lists">
      <div id="input-elements">
        <input type="text" id="todo-input" value={inputValue} onChange={changeEvent} />
        <Button id="add-list-button" label="Add" onclick={clickEvent} />
      </div>
      <div id="todo-list-elements">
        {toDoList.length > 0 && toDoList.map((el: ToDoElementType) => (
          displayToDo(el.value, el.completed, show)))}
      </div>
      <div id="todo-list-options">
        <Button id="all-list-button" label={all} onclick={() => { showToDos(all); }} />
        <Button id="complete-list-button" label={completed} onclick={() => { showToDos(completed); }} />
        <Button id="incomplete-list-button" label={incomplete} onclick={() => { showToDos(incomplete); }} />
      </div>
    </div>
  );
};

export default List;
