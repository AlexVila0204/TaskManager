import React, {useState} from 'react'

export const FormsTaskM = ({addTarea}) => {
  const [value, setValue] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      addTarea(value);
      setValue('');
    }
  }
  return (
    <form className='formTask' onSubmit={handleSubmit}>
    <input type="text" className='formTaskInput' value={value} placeholder='Tarea a Realizar: ' 
    onChange={(e)=> setValue(e.target.value)}/>
    <button type='submit' className='formTaskButton'>Agregar Tarea</button>
    </form>

  )
}
