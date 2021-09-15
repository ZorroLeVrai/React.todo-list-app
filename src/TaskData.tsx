import { v4 as uuidv4 } from 'uuid';

export enum TaskStatus
{
  Todo,
  InProgress,
  Done
}

export class TaskData
{
  constructor(public id:string, public name:string, public status: TaskStatus, public selected: boolean)
  {
  }
}

export class TaskDataList
{
  tasks:Array<TaskData>;

  constructor()
  {
    this.tasks = new Array<TaskData>();
  }

  getCopy()
  {
    const copy = new TaskDataList();
    copy.tasks = [...this.tasks];
    return copy;
  }

  selectAllItems(selected: boolean)
  {
    const copy = new TaskDataList();
    copy.tasks = this.tasks.map(task => ({...task, selected}));
    return copy;
  }

  getTasksWithStatus(status:TaskStatus)
  {
    return this.tasks.filter(task => task.status === status);
  }

  moveSelected(status:TaskStatus)
  {
    const copy = new TaskDataList();
    copy.tasks = this.tasks
      .map(task => task.selected ? ({...task, status}) : task);
    return copy;
  }

  deleteSelected()
  {
    const copy = new TaskDataList();
    copy.tasks = this.tasks.filter(task => !task.selected);
    return copy;
  }

  selectTask(id:string, selected: boolean)
  {
    const copy = this.getCopy();
    const taskData = copy.tasks.find(task => task.id === id);
    if (null == taskData)
      return copy;
    
    taskData.selected = selected
    return copy;
  }

  addTaskName(name: string)
  {
    let newTasks = [...this.tasks, new TaskData(uuidv4(), name, TaskStatus.Todo, false)];
    const result = new TaskDataList();
    result.tasks = newTasks;

    return result;
  }

  hasTasks()
  {
    return(this.tasks.length > 0);
  }
}