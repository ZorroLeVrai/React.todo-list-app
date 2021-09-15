// @flow
import React, { useRef } from 'react';
import { useContext } from 'react';
import TasksContext from './Context/TasksContext';

export default function AddTask()
{
  let inputRef = useRef<HTMLInputElement | null>(null);
  const tasksContext = useContext(TasksContext);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>)
  {
    if ("Enter" === event.key)
    {
      let targetElement = event.target as HTMLInputElement;
      addTask(targetElement?.value);
    }
  }

  function handleClick()
  {
    addTask(inputRef.current?.value);
  }

  function addTask(taskName: string | undefined)
  {
    if (!taskName
      || null == tasksContext.addTask)
      return;

    tasksContext.addTask(taskName);
    clearTaskName();
  }

  function clearTaskName()
  {
    if (null != inputRef.current)
      inputRef.current.value = "";
  }

  return (
    <div className="margin-top">
      <input id="task-name" className="width-50" ref={inputRef} onChange={()=>{}} onKeyDown={handleKeyDown}></input>
      <button onClick={handleClick}>Add task</button>
    </div>
  );
};