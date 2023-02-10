import React from 'react'
import { AiOutlinePlus as Plus } from 'react-icons/ai'
import cls from './WorkSpace.module.scss'

const WorkSpace = ({ action }) => {
  const [value, setValue] = React.useState('')
  const [isEmpty, setIsEmpty] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState(false)

  const addNewTodo = () => {
    if (value === '') {
      setIsEmpty(true)
    } else if (value.length > 25) {
      setShowAlert(true)
    } else {
      action(value)
      setValue('')
    }
  }

  if (showAlert) {
    setTimeout(() => setShowAlert(false), 2500)
  }

  return (
    <div className={cls.root}>
      <h1 className={cls.title}>Todo App</h1>
      <div
        className={`${isEmpty && cls.error} ${cls.form}`}
      >
        <input 
          placeholder='Add new todo' 
          onKeyDown={e => e.key === 'Enter' && addNewTodo()}
          onChange={e => {
            setIsEmpty(false)
            setValue(e.target.value)}
          }
          value={value}
        />
        <div className={`${cls.alert} ${showAlert && cls.showAlert}`}>
          Maximum length <span>25 characters!</span>
        </div>
        <button onClick={addNewTodo}>
          <Plus />
        </button>
      </div>
    </div>
  )
}

export default WorkSpace
