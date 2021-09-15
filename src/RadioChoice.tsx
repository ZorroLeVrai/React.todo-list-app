import {useContext} from 'react';
import TasksContext from './Context/TasksContext';

type PropType =
{
  id: string,
  name: string,
  text: string,
  ischecked: boolean
}

export default function RadioChoice({id, name, text, ischecked}: PropType)
{
  const tasksContext = useContext(TasksContext);

  function handleClick(e: React.MouseEvent<HTMLInputElement>)
  {
    let targetElement = e.target as HTMLInputElement;
    if (null != targetElement)
    {
      const selectedId = parseInt(targetElement.id);
      if (null != tasksContext.setNewAction && !isNaN(selectedId))
      {
        tasksContext.setNewAction(selectedId);
      }
    }
      
  }

  return (
    <>
      <input type="radio" id={id} name={name} checked={ischecked} onChange={()=>{}}onClick={handleClick}/>
      <label htmlFor={id}>{text}</label>
    </>
  );
}