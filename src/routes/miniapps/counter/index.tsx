import { useState } from 'react'

import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '@app/reducer/counter.slice'

import { PageLayout } from '@/components/layout/PageLayout'

const Counter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  const dummy = () => {
    alert('dummy')
  }

  const toolbar = (
    <>
      <div className="vr d-none d-lg-block"></div>
      <hr className="text-body-tertiary d-lg-none" />
      <ul className="navbar-nav ps-3">
        <li className="nav-item">
          <input
            className="form-control"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </li>
        <li className="nav-item">
          <button
            className="btn"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn"
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn"
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>
        </li>

        <li className="nav-item">
          <br />
        </li>
      </ul>
    </>
  )

  return (
    <PageLayout
      title="Counter+"
      subtitle="Global Counter with extra features"
      subnavbar={true}
      toolbar={toolbar}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-4">
            <button
              className="btn btn-outline-secondary w-100 h-100"
              onClick={() => dispatch(decrement())}
            >
              <h1>-</h1>
            </button>
          </div>
          <div className="col-6">
            <h1 className="text-center" style={{ fontSize: 120 }}>
              {count}
            </h1>
          </div>
          <div className="col-3 p-4">
            <button
              className="btn btn-outline-secondary w-100 h-100"
              onClick={() => dispatch(increment())}
            >
              <h1>+</h1>
            </button>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <hr />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="input-group">
                <input
                  className="form-control"
                  aria-label="Set increment amount"
                  value={incrementAmount}
                  onChange={(e) => setIncrementAmount(e.target.value)}
                />

                <button
                  className="btn"
                  onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                  Add Amount
                </button>
                <button
                  className="btn"
                  onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                  Add Async
                </button>
                <button
                  className="btn"
                  onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                  Add If Odd
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Counter
