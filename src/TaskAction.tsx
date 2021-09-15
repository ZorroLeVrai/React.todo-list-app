import { useContext } from 'react';
import TasksContext from './Context/TasksContext';
import RadioChoice from './RadioChoice';


export default function TaskAction()
{
  const radioName = "task-action";
  const radioLabels = ["To do", "In progress", "Done", "Delete"];

  const tasksContext = useContext(TasksContext);

  function handleSelection(selected: boolean)
  {
    const handleSelection = tasksContext.handleTasksSelection;
    if (handleSelection == null)
      return;

    handleSelection(selected);
  }

  function handleMoveTasks()
  {
    const moveTasks = tasksContext.moveSelectedTasks;
    if (moveTasks == null)
      return;

      moveTasks();
  }

  return (
    <div className="margin-top">
      <button onClick={() => handleSelection(false)}>Clear selection</button>
      <button onClick={() => handleSelection(true)}>Select all</button>
      <button onClick={handleMoveTasks}>Transfer tasks to</button>
      <div>
        {radioLabels.map((label, index) =>
          <RadioChoice
            id={index.toString()}
            key={index}
            name={radioName}
            text={label}
            ischecked={index === tasksContext.currentChoice}/>)}
      </div>
    </div>
  );
}