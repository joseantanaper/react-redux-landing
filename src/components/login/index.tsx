import { Icon } from '../widgets/Icon'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
import { Avatar, AvatarSize } from '../Avatar'
import {
  setUsername,
  selectUsername,
  clearUsername,
} from '../../app/reducer/app.slice'

interface Props {
  id?: string
}

export const Login = ({ id }: Props) => {
  const dispatch = useAppDispatch()
  const [username, applyUsername] = useState('')
  const currentUsername = useAppSelector(selectUsername)

  const clearUsername = () => {
    dispatch(setUsername(''))
    applyUsername('')
  }

  return (
    <>
      <div className="container container-fluid text-center">
        {/* Avatar */}
        <div className="row">
          <div className="col">
            {currentUsername ? (
              <Avatar size={AvatarSize.lg} />
            ) : (
              <Icon
                id="bi-person-slash"
                style={{ width: 180, height: 180, color: 'red' }}
              />
            )}
          </div>
        </div>

        {/* Message */}
        <div className="row mt-4 mb-4">
          <div className="col">
            {currentUsername ? (
              <span>
                Welcome, <strong>{currentUsername}</strong>!
              </span>
            ) : (
              <span>Please, Sign In</span>
            )}
          </div>
        </div>

        {/* Login Form */}
        <div className="row mb-3">
          <div className="col">
            {!currentUsername ? (
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  aria-label="Username"
                  value={username}
                  onChange={(e) => applyUsername(e.target.value)}
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  disabled={!username}
                  onClick={() => dispatch(setUsername(username))}
                >
                  <Icon id="bi-box-arrow-in-right" />
                  <span className="ms-1">Sign In</span>
                </button>
              </div>
            ) : (
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={clearUsername}
              >
                <Icon id="bi-box-arrow-left" />
                <span className="ms-1">Sign Out</span>
              </button>
            )}
          </div>
        </div>

        {/* Separator */}
        <div className="row mb-3">
          <div className="col">
            <hr className="mb-5" />
          </div>
        </div>
      </div>
    </>
  )
}
