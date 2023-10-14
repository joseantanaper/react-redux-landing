import { useDispatch } from "react-redux"

export default function Index() {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Todo</h1>
      <hr />
      <p>Hello, I'm Todo.</p>
      <hr />
    </div>
  )
}
