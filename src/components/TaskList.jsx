import React from 'react'
const TaskList = ({tasks, updateTask, deleteTask})=>{
  const toogleComplete=(index)=>{
     const updatedTask= {...tasks[index], completed : !tasks[index].completed};
     updateTask(updatedTask,index);
  }

  return (
 <ul className='task-list'>
   {tasks.map((task,index)=>(
    <li key={index} className={task.completed ? 'completed':'list-item'}>
        <div className='taskfirst'>
            <span>{task.text}</span>
            <small>({task.priority},{task.category})</small>
        </div>
        <div className='buttons'>
            <button onClick={()=>toogleComplete(index)}>{task.completed ? 'UnDo':'Complete'}</button>
            <button onClick={()=>deleteTask(index)}>Delete</button>
        </div>
    </li>
   ))}
 </ul>
  );
}

export default TaskList