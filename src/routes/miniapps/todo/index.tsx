import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@app/hooks'

import {
  addTodo,
  clearAll,
  selectTodos,
  remove,
} from '@app/reducer/todos.slice'

import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

import { PageLayout } from '@/components/layout/PageLayout'
import { Button } from '@/components/widgets/Button'
import { Input } from '@/components/widgets/Input'
import { TodoList } from '@components/todo'
import { Modal } from '@/components/widgets/Modal'

import { Icon, IconMap } from '@/components/widgets/Icon'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const [search, setSearch] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')
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
    dispatch(remove(todo))
    setFilteredTodos([...filteredTodos].filter((t) => t !== todo))
  }

  const PreClearAll = () => {
    // TODO: Open Modal with Javascript, NO with button click,.
    setModalTitle('Clear All')
    setModalContent('Are you sure you want to clear all tasks?')
    const button = document.querySelectorAll(
      '#TodoConfirm button'
    )[0] as HTMLButtonElement
    button.click()
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
          onClick={PreClearAll}
          iconmap={IconMap.TaskClear}
          label={t('app:clearall')}
        />
      </li>
    </>
  )

  return (
    <PageLayout
      title="ToDo List"
      subtitle={t('app:todo:subtitle')}
      description={t('app:todo:description')}
      subnavbar={true}
      toolbar={toolbar}
    >
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
        title={modalTitle}
        content={modalContent}
        confirm={ClearAll}
      />
    </PageLayout>
  )
}

export default Todo
