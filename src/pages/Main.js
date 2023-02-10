import React from 'react'
import TodoItem from '../components/TodoItem'
import WorkSpace from '../components/WorkSpace'
import cls from './Main.module.scss'

const Main = () => {
  const [todos, setTodos] = React.useState([])

  const addNewTodo = (title) => {
    const newTodo = {
      title,
      id: new Date().valueOf(),
      completed: false,
    }
    setTodos(prev => [...prev, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  console.log(todos)

  return (
    <div className={cls.root}>
      <div className={cls.container}>
        <WorkSpace action={addNewTodo} />
        <ul>
          {
            todos.length
            ? todos.map(({ id, title, completed }) => (
              <TodoItem 
                key={id} 
                title={title} 
                id={id}
                action={deleteTodo}
                completed={completed}
              />
            ))
            : <h3>Список пуст...</h3>
          }
        </ul>
      </div>
    </div>
  )
}

export default Main
