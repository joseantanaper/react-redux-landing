import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  addTodo,
  clearAll,
  selectTodos,
  remove,
} from '@app/reducer/todos.slice'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const [todo, setTodo] = useState('')
  const state = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  console.log(state)

  useEffect(() => {
    console.log('TodoList', 'useEffect')
  }, [])

  const _addTodo = () => {
    if (todo) {
      dispatch(addTodo(todo))
      setTodo('')
    }
  }

  const _remove = (todo: string) => {
    dispatch(remove(todo))
  }

  const _clearAll = () => {
    dispatch(clearAll())
  }

  return (
    <>
      <div className="btn-group">
        <input
          className="form-control"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button
          className="btn btn-outline-primary"
          disabled={!todo}
          onClick={() => _addTodo()}
        >
          Add
        </button>
        <button
          className="btn btn-outline-danger ms-5 text-nowrap"
          onClick={() => _clearAll()}
        >
          Clear All
        </button>
      </div>
      <hr />
      <table className="table table-hover ">
        <tbody>
          {state.todos.length > 0 &&
            state.todos.map((todo: string, index: number) => {
              return (
                <TodoItem
                  key={index}
                  todo={todo}
                  index={index}
                  remove={_remove}
                />
              )
            })}
        </tbody>
      </table>
    </>
  )
}
