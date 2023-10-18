import { Icon } from '../widgets/Icon'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import {
  setClockMode,
  selectClockMode,
  ClockMode,
} from '../../app/reducer/app.slice'

interface Props {
  currentClockMode: ClockMode
}

export const Clock = ({ currentClockMode }: Props) => {
  const dispatch = useAppDispatch()

  const [, /* clockMode */ applyClockMode] = useState(
    useAppSelector(selectClockMode)
  )
  const tick = () => {
    const today = new Date()
    let h = String(today.getHours())
    let m = String(today.getMinutes())
    let s = String(today.getSeconds())
    m = String((Number(m) < 10 ? '0' : '') + m)
    s = String((Number(s) < 10 ? '0' : '') + s)
    return h + ':' + m + ':' + s
  }

  const [time, setTime] = useState(tick())

  const handleClick = () => {
    dispatch(
      setClockMode(
        currentClockMode === ClockMode.Long ? ClockMode.Short : ClockMode.Long
      )
    )
    applyClockMode(
      currentClockMode === ClockMode.Long ? ClockMode.Short : ClockMode.Long
    )
  }

  /* const interval = */ setInterval(() => {
    setTime(tick())
  }, 1000)

  return (
    <>
      <button
        name="app-clock"
        className="btn"
        type="button"
        onClick={handleClick}
      >
        <Icon id="bi-clock" extra="me-1 app-rotate" style={{ opacity: 0.4 }} />
        <span>{time.substring(0, time.indexOf(':'))}</span>
        <span className="opacity-50">:</span>
        <span>
          {time.substring(time.indexOf(':') + 1, time.indexOf(':') + 3)}
        </span>
        <span className="opacity-50">
          {currentClockMode === ClockMode.Long ? ':' : null}
        </span>
        <span>
          {currentClockMode === ClockMode.Long
            ? time.substring(time.indexOf(':') + 4, time.indexOf(':') + 6)
            : null}
        </span>
        {/* <span>
          {clockMode === 0 ? time : time.substring(0, time.indexOf(":", 1) - 1)}
        </span>
        <span>:</span>
        <span>
          {clockMode === 0 ? time : time.substring(0, time.indexOf(":", 2) - 1)}
        </span> */}
      </button>
    </>
  )
}
