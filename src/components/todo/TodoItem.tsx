import { remove } from '../../app/reducer/todos.slice'
import { Icon, IconMap } from '../widgets/Icon'
import { useAppDispatch } from '../../app/hooks'

export const TodoItem = ({ todo, index, remove }: any) => {
  return (
    <tr>
      <td className="align-middle flex-nowrap text-truncate pe-5 text-end">
        <span className="opacity-25">{`# ${index}`}</span>
      </td>
      <td className="w-100 align-middle">{todo}</td>
      <td>
        <button
          className="btn text-danger ms-2"
          onClick={() => {
            remove(todo)
          }}
        >
          <Icon id={IconMap.TaskRemove} />
        </button>
      </td>
    </tr>
  )
}
