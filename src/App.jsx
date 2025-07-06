import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
import './style.css'

const App = ()=>{
  const [tasks,setTasks]=useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })
  const addTask=(task)=>{
       setTasks([...tasks, task])
  }

  const updateTask=(updatedTask, index)=>{
    const newTask = [...tasks];
    newTask[index]=updatedTask;
    setTasks(newTask)

  }
  const deleteTask=(index)=>{
    setTasks(tasks.filter((_,i)=> i!=index));
  }
  const clearTasks=()=>{
    setTasks([]);
  }


  return (
 <div className='App'>

  <header>
    <h1 className='title'>TaskBuddy</h1>
    <p className='tagline'>Your Friendly Task Manager</p>
  </header>

  <TaskForm addTask={addTask}/>
  <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
  <ProgressTracker tasks={tasks}/>

  {tasks.length>0 && (<button className='clear-btn' onClick={clearTasks}>Clear All task</button>)}
 </div>
  );
}

export default App
