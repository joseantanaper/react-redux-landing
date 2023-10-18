import { PageLayout } from '../../components/PageLayout'
import { TodoList } from '../../components/todo'

export default function Index() {
  const handleClick = () => {}

  return (
    <PageLayout title="Simplest Todo List">
      <TodoList />
    </PageLayout>
  )
}
