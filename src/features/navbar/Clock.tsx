import { Icon } from "../../widgets/Icon"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { modeToggle, selectClockMode } from "./reducer/clock.slice"

export const Clock = () => {
  const dispatch = useAppDispatch()

  const checkTime = (i: string) => {
    if (Number(i) < 10) {
      i = "0" + i
    } // add zero in front of numbers < 10
    return i
  }

  const [clockMode, setClockMode] = useState(useAppSelector(selectClockMode))
  const tick = () => {
    const today = new Date()
    let h = String(today.getHours())
    let m = String(today.getMinutes())
    let s = String(today.getSeconds())
    m = String((Number(m) < 10 ? "0" : "") + m)
    s = String((Number(s) < 10 ? "0" : "") + s)
    return h + ":" + m + ":" + s
  }

  const [time, setTime] = useState(tick())

  const handleClick = () => {
    dispatch(modeToggle())
    setClockMode(clockMode === 1 ? 0 : 1)
  }

  const interval = setInterval(() => {
    setTime(tick())
  }, 1000)

  return (
    <>
      <button
        name="app-theme-toggler"
        className="btn"
        type="button"
        onClick={handleClick}
      >
        <Icon id="bi-clock" extra="me-1 app-rotate" style={{ opacity: 0.4 }} />
        {clockMode === 0 ? time : time.substring(0, 5)}
      </button>
    </>
  )
}
