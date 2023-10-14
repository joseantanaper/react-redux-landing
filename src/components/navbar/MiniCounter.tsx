import { Icon } from "../widgets/Icon"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./reducer/counter.slice"

// interface Props {
//   id: string
//   iconId: string
//   type?: string
//   css?: string
// }

export const MiniCounter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  const handleClick = () => {
    console.log("MiniCounter!")
  }

  return (
    <div className="btn-group">
      <button
        name="app-minicounter-decrement"
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className="input-group-text">{count}</span>
      <button
        name="app-minicounter-decrement"
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => dispatch(increment())}
      >
        +
      </button>{" "}
    </div>
  )
}