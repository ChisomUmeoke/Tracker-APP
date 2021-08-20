import {useState} from 'react'
import Task from './task'

const TaskComponent = ({tasks, onDelete, onToggle}) => { 
    return (
        <>
   { 
       tasks.map((task)=>(
        <Task key={task.id} task={task} 
        onDelete={onDelete} onToggle={onToggle}/> 
     ))
        
       /* tasks.map(task=>{
           return(
               <Task/>
           )
       }) */
   
   }
      </>
    )
}

export default TaskComponent
