import React, {useState} from 'react'
import { toast } from 'react-toastify'

const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault()

        editTodo(value, task.id)

        setValue("")
        toast.success("To-do edited")
    }

  return (

    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type='text' 
        className='todo-input' 
        value={value}
        placeholder='edit test'
        onChange={(e) => {
            setValue(e.target.value)
        }}
        />


        <button type='submit' className='todo-btn'>Save</button>
    </form>
  )
}

export default EditTodo
