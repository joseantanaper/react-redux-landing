import { useState } from 'react'
import { Button } from '@/components/widgets/Button'
import { IconMap } from '@/components/widgets/Icon'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  clear,
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

  const localIncrementAsync = (incrementValue: number) => {
    return dispatch(incrementAsync(incrementValue))
  }

  const toolbar = (
    <>
      <ul className="navbar-nav ps-3">
        <li className="nav-item">
          <div className="btn-group">
            <Button
              iconmap={IconMap.CircleMinus}
              label="Decrement"
              className="btn-outline-danger"
              onClick={() => dispatch(decrement())}
            />
            <Button
              iconmap={IconMap.CirclePlus}
              label="Increment"
              className="btn btn-outline-success"
              onClick={() => dispatch(increment())}
            />
          </div>
        </li>
        <li className="nav-item">
          <Button
            iconmap={IconMap.CircleX}
            label="Clear"
            className="btn-outline-warning"
            onClick={() => dispatch(clear())}
          />
        </li>
        <li className="nav-item d-none d-sm-block me-3"></li>
        <li className="nav-item">
          <input
            style={{ maxWidth: '120px', minWidth: '120px' }}
            className="form-control float-end"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </li>
        <li className="nav-item">
          <Button
            iconmap={IconMap.CirclePlus}
            className="btn-outline-success"
            label="Add Sync"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          />
        </li>
        <li className="nav-item">
          <Button
            name="app-async-navbar-button"
            iconmap={IconMap.CirclePlus}
            className="btn-outline-primary"
            label="Add Async"
            async={true}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          />
        </li>
        <li className="nav-item">
          <Button
            iconmap={IconMap.CirclePlus}
            className="btn-outline-info"
            label="Add If Odd"
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          />
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
          <div className="col">
            <h1 className="text-center" style={{ fontSize: 160 }}>
              {count}
            </h1>
          </div>
          <div className="col">
            <div className="container-fluid">
              <div className="row text-end">
                <div className="col">
                  <div className="btn-group">
                    <Button
                      iconmap={IconMap.CircleMinus}
                      label="Decrement"
                      className="btn-outline-danger"
                      onClick={() => dispatch(decrement())}
                    />
                    <Button
                      iconmap={IconMap.CirclePlus}
                      label="Increment"
                      className="btn btn-outline-success"
                      onClick={() => dispatch(increment())}
                    />
                    <Button
                      iconmap={IconMap.CircleX}
                      label="Clear"
                      className="btn-outline-warning"
                      onClick={() => dispatch(clear())}
                    />
                  </div>
                </div>
              </div>

              <div className="row float-end mt-3">
                <div className="col">
                  <div className="input-group">
                    <input
                      type="number"
                      style={{ maxWidth: '120px', minWidth: '120px' }}
                      className="form-control"
                      aria-label="Set increment amount"
                      value={incrementAmount}
                      onChange={(e) => setIncrementAmount(e.target.value)}
                    />
                    <Button
                      iconmap={IconMap.CirclePlus}
                      className="btn-outline-success"
                      label="Add Sync"
                      onClick={() =>
                        dispatch(incrementByAmount(incrementValue))
                      }
                    />
                    <Button
                      name="app-async-button"
                      iconmap={IconMap.CirclePlus}
                      className="btn-outline-primary"
                      label="Add Async"
                      async={true}
                      onClick={() => dispatch(incrementAsync(incrementValue))}
                    />
                    <Button
                      iconmap={IconMap.CirclePlus}
                      className="btn-outline-info"
                      label="Add If Odd"
                      onClick={() => dispatch(incrementIfOdd(incrementValue))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Counter
