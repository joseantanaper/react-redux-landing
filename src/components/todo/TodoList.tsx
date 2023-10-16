import { Icon } from '../widgets/Icon'
import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  addTodo,
  clearAll,
  remove,
  selectTodos,
} from '../../app/reducer/todosSlice'

// interface Props {
//   id: string
//   iconId: string
//   type?: string
//   css?: string
// }

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
  const _clearAll = () => {
    dispatch(clearAll())
  }

  const _remove = (id: string) => {
    dispatch(remove(id))
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
          className="btn btn-danger ms-2 text-nowrap"
          onClick={() => _clearAll()}
        >
          Clear All
        </button>
      </div>
      <hr />
      <table className="table table-hover">
        <tbody>
          {state.todos.length > 0 &&
            state.todos.map((todo, id) => {
              return (
                <>
                  <tr key={id}>
                    <td className="align-middle flex-nowrap text-truncate pe-5 text-end">{`# ${id}`}</td>
                    <td className="w-100 align-middle">{todo}</td>
                    <td>
                      <button
                        className="btn ms-2"
                        onClick={() => {
                          _remove(todo)
                        }}
                      >
                        <Icon id="bi-trash" extra="opacity-25" />
                      </button>
                    </td>
                  </tr>
                </>
              )
            })}
        </tbody>
      </table>
    </>
  )
}
