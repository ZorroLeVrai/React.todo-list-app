import { TaskDataList } from "../TaskData";

export default class TasksContextData
{
  public tasks: TaskDataList;
  public currentChoice: Number;
  public addTask: ((name: string) => void) | null;
  public handleTasksSelection: ((selected: boolean) => void) | null;
  public moveSelectedTasks: (() => void) | null;
  public setNewAction: ((id:number) => void) | null;
  public handleSelectedTask: ((id:string, selected: boolean) => void) | null;

  constructor()
  {
    this.tasks = new TaskDataList();
    this.currentChoice = 0;
    this.addTask = null;
    this.handleTasksSelection = null;
    this.moveSelectedTasks = null;
    this.setNewAction = null;
    this.handleSelectedTask = null;
  }

  static CreateContext(
    tasks: TaskDataList,
    currentChoice: Number,
    addTask: (name: string) => void,
    handleTasksSelection: (selected: boolean) => void,
    moveSelectedTasks: () => void,
    setNewAction: (id: number) => void,
    handleSelectedTask: (id:string, selected: boolean) => void
    )
  {
    const context = new TasksContextData();
    context.tasks = tasks;
    context.currentChoice = currentChoice;
    context.addTask = addTask;
    context.handleTasksSelection = handleTasksSelection;
    context.moveSelectedTasks = moveSelectedTasks;
    context.setNewAction = setNewAction;
    context.handleSelectedTask = handleSelectedTask;
    return context;
  }
}