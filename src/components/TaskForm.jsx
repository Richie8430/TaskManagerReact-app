import React, { useState } from 'react'
const TaskForm = ({addTask})=>{
   const [task,setTask]=useState('');
   const [priority,setPriority]=useState('Medium');
   const [category,setCategory]=useState('General');

   const handleSubmit=(e)=>{
    e.preventDefault();
    if (task.trim() === '') {
        alert('Please enter a task before adding!'); 
        return; 
    }
    addTask({text:task, priority, category, completed:false})

    //Reset 
    setTask('')
    setCategory('General')
    setPriority('Medium')
   }
  return (
    <form onSubmit={handleSubmit} className='task-form'>
        <div id='inp'>
            <input type='text' placeholder='Enter your task' value={task} onChange={(e)=>setTask(e.target.value)}/>   
            <button type='submit'>Add Task</button>
        </div>
        <div id='btns'>
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
             <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
    </form>
  );
}

export default TaskForm