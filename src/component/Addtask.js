import {useState} from 'react'

const Addtask = ({onAdd}) => {
    const[text, setText]=useState('')
    const[day, setDay]=useState('')
    const[reminder, setReminder]=useState(false)

    const onSubmit=(e)=> {
        e.preventDefault()

        if (!text) { 
            alert('please add a task')
          return 
        }

        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }


    return (
        <form className='add-form'>

     <div className='form-control' onSubmit={onSubmit}>
      <label>Type</label>
      <input type='text' placeholder='Add Task' 
      value={text} onChange={(e)=> setText(e.target.value)}></input>
            </div>

     <div className='form-control'>
      <label>Day/Tide</label>
      <input type='text' placeholder='Add Day and Time' 
      value={day} onChange={(e)=> setDay(e.target.value)}></input>
            </div>

            <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input
             type='checkbox' checked ={reminder} value={reminder}
             onChange={(e)=> setReminder(e.currentTarget.checked)} ></input>
                  </div>

     <input type='submit' value='Save Task' className='btn btn-block'/>
        
        </form>
    )
}

export default Addtask
