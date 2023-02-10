import React from 'react'
import { AiOutlineDelete as Delete } from 'react-icons/ai'
import cls from './TodoItem.module.scss'

const TodoItem = ({ title, action, id, completed }) => {
  return (
    <li className={`${cls.root} ${completed && cls.completed}`}>
      <p>{title}</p>
      <div className={cls.actions}>
        <button 
          className={cls.delete} 
          onClick={() => action(id)
        }>
          <Delete />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
