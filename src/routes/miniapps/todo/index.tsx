import { PageLayout } from '@/components/layout/PageLayout'
import { TodoList } from '@components/todo'

const Todo = () => {
  return (
    <PageLayout title="Simplest Todo List">
      <TodoList />
    </PageLayout>
  )
}

export default Todo
