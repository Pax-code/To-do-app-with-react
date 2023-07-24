import React, {useState} from 'react'
import {toast} from 'react-toastify'
const TodoForm = ({addTodo, todos}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        if(value === ""){
            toast.error("You should pass any To-do!")
        }else if(value.length < 3){
            toast.error("To-do must be least 3 characters long!")
        }else{

            addTodo(value.trim())
            setValue("")

            toast.success("To-do added!")
        }
        
    }

  return (

    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type='text' 
        className='todo-input' 
        value={value}
        placeholder='Add Some Tasks'
        onChange={(e) => {
            setValue(e.target.value)
        }}
        />


        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}

export default TodoForm
