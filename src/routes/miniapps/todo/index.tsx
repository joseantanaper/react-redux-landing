import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

import {
  addTodo,
  clearAll,
  selectTodos,
  remove,
} from '@app/reducer/todos.slice'

import { useTranslation } from 'react-i18next'

import { PageLayout } from '@/components/layout/PageLayout'
import { Button } from '@/components/widgets/Button'
import { Input } from '@/components/widgets/Input'
import { TodoList } from '@components/todo'
import { Modal } from '@/components/widgets/Modal'
import { IconMap } from '@/components/widgets/Icon'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector(selectTodos)
  const [filteredTodos, setFilteredTodos] = useState([...todos])

  const { t } = useTranslation()

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
    console.log('miniapps', 'ToDo', 'Remove', todo)
    dispatch(remove(todo))
    setFilteredTodos([...filteredTodos].filter((t) => t !== todo))
  }

  const ClearAll = () => {
    // TODO: Close Modal with Javascript, NO with button click,.
    dispatch(clearAll())
    setFilteredTodos([])
    document.getElementById('modalCloser')?.click()
  }

  const toolbar = (
    <>
      <li className="nav-item">
        <div className="btn-group">
          <span className="btn btn-outline-secondary disabled text-body">
            {t('app:todo:tasks')}
          </span>
          <span className="btn btn-outline-secondary disabled text-body">
            {filteredTodos.length} / {todos.length}
          </span>
        </div>
      </li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">
        {/* TODO: TextSearch component */}
        <div className="btn-group sm-w-100">
          <Input
            search={true}
            placeholder={t('app:todo:search')}
            value={search}
            onChange={FilterTodos}
            clear={ClearSearch}
          />
        </div>
      </li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">
        <div className="btn-group sm-w-100">
          <Input
            value={todo}
            placeholder={t('app:todo:content')}
            onChange={setTodo}
          />
          <Button
            className="btn-outline-primary"
            disabled={!todo}
            onClick={AddTodo}
            iconmap={IconMap.TaskPlus}
            label={t('app:add')}
          />
        </div>
      </li>
      <li className="nav-item d-none d-sm-block me-3"></li>
      <li className="nav-item">
        <Button
          className="btn-outline-danger"
          disabled={todos.length <= 0}
          onClick={() =>
            (
              document.querySelectorAll(
                '#TodoConfirm button'
              )[0] as HTMLButtonElement
            ).click()
          }
          iconmap={IconMap.TaskClear}
          label={t('app:clearall')}
        />
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <TodoList todos={filteredTodos} Remove={Remove} />
      <div className="container-fluid text-end">
        <div className="row">
          <div className="col">
            <div className="btn-group">
              <span className="btn btn-outline-secondary disabled text-body">
                {t('app:todo:tasks')}
              </span>
              <span className="btn btn-outline-secondary disabled text-body">
                {filteredTodos.length} / {todos.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        id="TodoConfirm"
        title="Clear All tasks"
        content="This will clear all current tasks. Continue?"
        confirm={ClearAll}
      />
    </PageLayout>
  )
}

export default Todo
