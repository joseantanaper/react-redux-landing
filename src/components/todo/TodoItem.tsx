import { remove } from '../../app/reducer/todos.slice'
import { Icon } from '../widgets/Icon'
import { useAppDispatch } from '../../app/hooks'

export const TodoItem = ({ todo, index, remove }: any) => {
  return (
    <tr>
      <td className="align-middle flex-nowrap text-truncate pe-5 text-end">{`# ${index}`}</td>
      <td className="w-100 align-middle">{todo}</td>
      <td>
        <button
          className="btn ms-2"
          onClick={() => {
            remove(todo)
          }}
        >
          <Icon id="bi-trash" extra="opacity-25" />
        </button>
      </td>
    </tr>
  )
}
