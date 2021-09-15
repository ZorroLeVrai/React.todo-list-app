import { useContext } from 'react';
import { TaskData } from './TaskData';
import { TaskOptim } from './Task';
import TasksContext from './Context/TasksContext';

type PropType = {
  tasks: Array<TaskData>
}

export default function TaskList({tasks}: PropType)
{
  const tasksContext = useContext(TasksContext);

  return (
    <ul className="text-left list-remove-bullets">
      {
        tasks.map(task => <li key={task.id}>
          <TaskOptim id={task.id} name={task.name} checked={task.selected} handleSelectedTask={tasksContext.handleSelectedTask}/>
        </li>)
      }
    </ul>
  );
}