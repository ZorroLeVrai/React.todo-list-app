import React from 'react';

interface PropType
{
  id: string,
  name: string;
  checked: boolean;
  handleSelectedTask: ((id: string, selected: boolean) => void) | null;
}

function areEqual(prevProps: PropType, nextProps: PropType) {
  return (prevProps.id === nextProps.id
    && prevProps.name === nextProps.name
    && prevProps.checked === nextProps.checked);
}

function Task({id, name, checked, handleSelectedTask}: PropType)
{
  //console.log(`Task rendered`);

  function handleClick(e: React.MouseEvent<HTMLInputElement>)
  {
    const targetElement = e.target as HTMLInputElement;
    if (null != targetElement && null != handleSelectedTask)
    {
      handleSelectedTask(targetElement.id, targetElement.checked);
    }
  }

  return (
    <>
      <input id={id} type="checkbox" checked={checked} onChange={()=>{}} onClick={handleClick}/>
      <label htmlFor={id}>{name}</label>
    </>
  );
}

export const TaskOptim = React.memo(Task, areEqual);