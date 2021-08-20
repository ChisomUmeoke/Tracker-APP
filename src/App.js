import { useState } from 'react'
import Header from './component/Header'
import Tasks from './component/tasks'
import Addtask from './component/Addtask'

const App = () => {
  const [showAddTask, setShowAddTask]=useState(false) ///this hides d form until its clicked on
   const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: ' Take a Snack Break',
        day: '9th dec 2020',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at Work',
        day: '9th dec 2020',
        reminder: true,
      },
      {
        id: 3,
        text: 'Doctors Appointment',
        day: '9th dec 2020',
        reminder: true,
      },

    ]
  )
  //Add Task
  const addTask = (task) => {
const id = Math.floor(Math.random()*10000) + 1
 const newTask={id, ...task}
 setTasks([...tasks, newTask])
  }

  //DElete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toogleReminder = (id) => {
    setTasks
      (tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
      )
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(! showAddTask)} />
      {showAddTask && <Addtask onAdd={addTask} showAdd={showAddTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
          {deleteTask} onToggle={toogleReminder} />
      ) : (
          "No task to show")}

    </div>

  )
}

export default App
