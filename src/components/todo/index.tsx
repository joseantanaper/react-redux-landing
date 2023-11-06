import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { Modal } from '../widgets/Modal'

import {
  addTodo,
  clearAll,
  selectTodos,
  remove,
} from '@app/reducer/todos.slice'
import { TodoItem } from './TodoItem'

interface Props {
  todos: string[]
  search?: string
  Remove: Function
}

// TODO: Move Todo reducers here. Remove one is difficult bypassing the functions...

export const TodoList = ({ todos, search, Remove }: Props) => {
  const [todo, setTodo] = useState('')

  const dispatch = useAppDispatch()

  const PreConfirm = () => {}

  console.log(todos)

  useEffect(() => {
    console.log('TodoList', 'useEffect')
  }, [])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table-hover">
              <tbody>
                {todos.length > 0 &&
                  todos.map((todo: string, index: number) => {
                    return (
                      <TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                        remove={Remove}
                      />
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
