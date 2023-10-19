import { PageLayout } from '@/components/layout/PageLayout'
import { TodoList } from '@components/todo'

const Todo = () => {
  return (
    <PageLayout title="Simplest Todo List">
      <div className="container-fluid">
        <div className="row">
          <div className="col text-justify">
            <TodoList />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Todo
