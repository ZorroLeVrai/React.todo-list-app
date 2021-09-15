import React from 'react';
import TasksContextData from './TasksContextData';

const TasksContext = React.createContext(new TasksContextData());
TasksContext.displayName = "TasksContext";

export default TasksContext;
