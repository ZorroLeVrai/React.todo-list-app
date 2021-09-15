import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './AddTask';
import DisplayTodos from './DisplayTodos';
import { TaskData, TaskDataList, TaskStatus } from './TaskData';
import TaskAction from './TaskAction';
import TasksContext from './Context/TasksContext';
import TasksContextData from './Context/TasksContextData';

const StorageKey = "TasksStorage";

function storeTasks(tasks: TaskDataList)
{
  localStorage.setItem(StorageKey, JSON.stringify(tasks.tasks));
}

function loadTasks(): TaskDataList
{
  const dataList = new TaskDataList();

  let storageContent = localStorage.getItem(StorageKey);
  if (null == storageContent)
    return dataList;
      
  const storedTasks = JSON.parse(storageContent) as Array<TaskData>;
  if (null == storedTasks || storedTasks.length === 0)
    return dataList;

  dataList.tasks = storedTasks;
  return dataList;
}

function App() {
  const [tasks, setTasks] = useState<TaskDataList>(() => loadTasks());
  const [currentChoice, setCurrentChoice] = useState(()=>0);

  useEffect(
    () => {
      storeTasks(tasks);
    },
    [tasks]
  );

  useEffect(
    () => {
      setTasks(loadTasks());
    },
    []
  );

  function handleAddTask(name:string)
  {
    setTasks(previoustasks => previoustasks.addTaskName(name));
  }

  function handleSelection(selected: boolean) {
    setTasks(previoustasks => previoustasks.selectAllItems(selected));
  }

  function handleMoveTasks()
  {
    const currentStatus = getTaskStatus(currentChoice);
    if (null == currentStatus)
    {
      setTasks(previoustasks => previoustasks.deleteSelected());
    }
    else
    {
      setTasks(previoustasks => previoustasks.moveSelected(currentStatus));
    }
  }

  function handleSelectedTask(id:string, selected: boolean)
  {
    setTasks(previoustasks => previoustasks.selectTask(id, selected));
  }

  function handleNewAction(id:number)
  {
    setCurrentChoice(id);
  }

  function getTaskStatus(choice: number)
  {
    switch(choice)
    {
      case 0:
        return TaskStatus.Todo;
      case 1:
        return TaskStatus.InProgress;
      case 2:
        return TaskStatus.Done;
      default:
        return null;
    }
  }

  const tasksContext = TasksContextData.CreateContext(tasks, currentChoice, handleAddTask, handleSelection, handleMoveTasks, handleNewAction, handleSelectedTask);

  return (
    <TasksContext.Provider value={tasksContext}>
      <div className="flex-column text-center">
        <h1 className="margin-top">Todo list app</h1>
        <AddTask/>
        <DisplayTodos/>
        <TaskAction/>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
