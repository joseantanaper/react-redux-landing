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
    setFilteredTodos([])
  }

  const toolbar = (
    <>
      <li className="nav-item">
        {/* TODO: TextSearch component */}
        <div className="btn-group sm-w-100">
          <div className="input-group">
            <input
              className="form-control app-search"
              type="text"
              placeholder="Search tasks..."
              value={search}
              style={{
                paddingRight: '26px',
                minWidth: '120px',
                zIndex: 0,
              }}
              onChange={(e) => FilterTodos(e.target.value)}
            />
            <Icon
              id={IconMap.Search}
              extra="app-search text-primary"
              style={{
                position: 'absolute',
                top: '14px',
                right: '8px',
              }}
            />
          </div>
          <Button
            className="btn-outline-danger"
            iconmap={IconMap.Backspace}
            onClick={ClearSearch}
          />
        </div>
      </li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">
        <div className="btn-group sm-w-100">
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
        </div>
      </li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">
        <Button
          className="btn-outline-danger"
          disabled={todos.length <= 0}
          onClick={ClearAll}
          iconmap={IconMap.TaskClear}
          label="Clear All"
        />
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
