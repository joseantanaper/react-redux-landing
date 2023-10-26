import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  addTodo,
  clearAll,
  selectTodos,
  remove,
} from '@app/reducer/todos.slice'

import { PageLayout } from '@/components/layout/PageLayout'
import { Button } from '@/components/widgets/Button'
import { TodoList } from '@components/todo'

import { Icon, IconMap } from '@/components/widgets/Icon'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector(selectTodos)
  const [filteredTodos, setFilteredTodos] = useState([...todos])

  const FilterTodos = (search: string) => {
    setSearch(search)
    setFilteredTodos(
      [...todos].filter((todo: string) =>
        todo.toUpperCase().includes(String(search.toUpperCase()))
      )
    )
  }

  const ClearSearch = () => {
    setSearch('')
    setFilteredTodos([...todos])
  }

  const AddTodo = () => {
    if (todo) {
      dispatch(addTodo(todo))
      setFilteredTodos([...todos, todo])
      setTodo('')
    }
  }

  const Remove = (todo: string) => {
    dispatch(remove(todo))
    setFilteredTodos([...filteredTodos].filter((t) => t !== todo))
  }

  const ClearAll = () => {
    dispatch(clearAll())
    setFilteredTodos([...todos])
  }

  const toolbar = (
    <>
      <li className="nav-item">
        {/* TODO: TextSearch component */}
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search tasks..."
            value={search}
            style={{
              paddingRight: '44px',
              marginRight: '20px',
              minWidth: '120px',
              zIndex: 0,
            }}
            onChange={(e) => FilterTodos(e.target.value)}
          />
          <Icon
            id={IconMap.Search}
            extra="text-primary"
            style={{
              position: 'absolute',
              top: '14px',
              right: '46px',
              opacity: 0.4,
            }}
          />
          <Icon
            id={IconMap.Backspace}
            extra="text-danger"
            style={{
              position: 'absolute',
              top: '14px',
              right: '26px',
              opacity: 0.4,
            }}
            onClick={() => {
              ClearSearch()
            }}
          />
        </div>
      </li>
      <li className="nav-item">
        <div className="btn-group">
          <input
            className="form-control"
            type="text"
            value={todo}
            style={{
              minWidth: '120px',
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            className="btn-outline-primary"
            disabled={!todo}
            onClick={() => AddTodo()}
            iconmap={IconMap.TaskPlus}
            label="Add"
          />
          <button
            className="btn btn-outline-primary"
            disabled={!todo}
            onClick={() => AddTodo()}
          >
            <Icon id={IconMap.TaskPlus} />
            <span>Add</span>
          </button>
        </div>
      </li>
      <li className="nav-item d-none d-md-block me-3"></li>
      <li className="nav-item">
        <button className="btn btn-outline-danger" onClick={() => ClearAll()}>
          <Icon id={IconMap.TaskClear} />
          <span>Clear All</span>
        </button>
      </li>

      <li className="nav-item">
        <br />
      </li>
    </>
  )

  return (
    <PageLayout
      title="Todo List"
      subtitle="Simplest Todo List App"
      subnavbar={true}
      toolbar={toolbar}
    >
      <TodoList todos={filteredTodos} Remove={Remove} />
    </PageLayout>
  )
}

export default Todo
