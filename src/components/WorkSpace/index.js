import React from 'react'
import { AiOutlinePlus as Plus } from 'react-icons/ai'
import cls from './WorkSpace.module.scss'

const WorkSpace = ({ action }) => {
  const [value, setValue] = React.useState('')

  const addNewTodo = () => {
    action(value)
    setValue('')
  }

  return (
    <div className={cls.root}>
      <h1 className={cls.title}>Todo App</h1>
      <div>
        <input 
          placeholder='Add new todo' 
          onKeyDown={e => e.key === 'Enter' && addNewTodo()}
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <button onClick={addNewTodo}>
          <Plus />
        </button>
      </div>
    </div>
  )
}

export default WorkSpace
