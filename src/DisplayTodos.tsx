// @flow 
import { useContext } from 'react';
import TaskList from './TaskList';
import TasksContext from './Context/TasksContext';
import { TaskData, TaskStatus } from './TaskData';

const getNbTasks = (tasks: Array<TaskData>) => {
  const nbTasks = tasks.length;
  return nbTasks ? `(${nbTasks})` : "";
}

export default function DisplayTodos()
{
  const tasksContext = useContext(TasksContext);
  const todoTasks = tasksContext.tasks.getTasksWithStatus(TaskStatus.Todo);
  const inProgressTasks = tasksContext.tasks.getTasksWithStatus(TaskStatus.InProgress);
  const doneTasks = tasksContext.tasks.getTasksWithStatus(TaskStatus.Done);

  return (
    <div className="margin-top">
      <table className="center table-layout-fixed width-90 table-border-thin table-border-radius padding-small">
        <colgroup>
          <col className="width-33"/>
          <col className="width-33"/>
          <col className="width-33"/>
        </colgroup>
        <thead>
          <tr>
            <th>To do {getNbTasks(todoTasks)}</th>
            <th>In progress {getNbTasks(inProgressTasks)}</th>
            <th>Done {getNbTasks(doneTasks)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><TaskList tasks={todoTasks}/></td>
            <td><TaskList tasks={inProgressTasks}/></td>
            <td><TaskList tasks={doneTasks}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}