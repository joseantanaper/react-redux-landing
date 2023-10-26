import { useState } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button } from '../widgets/Button'
import { useAppSelector, useAppDispatch } from '@app/hooks'
import { RootState } from '@app/store'
import { Avatar, AvatarSize } from '@components/Avatar'

import { Trans } from 'react-i18next'

import {
  setUsername,
  selectUsername,
  clearUsername,
} from '@app/reducer/app.slice'

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
      <div className="container-fluid text-center mt-5">
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
                <Trans>Welcome</Trans>, <strong>{currentUsername}</strong>!
              </span>
            ) : (
              <span>
                <Trans>Please, Sign In</Trans>
              </span>
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
                <Button
                  className="btn btn-outline-success"
                  disabled={!username}
                  onClick={() => dispatch(setUsername(username))}
                  iconmap={IconMap.Login}
                  label="Sign In"
                />
              </div>
            ) : (
              <Button
                className="btn btn-outline-danger"
                onClick={clearUsername}
                iconmap={IconMap.Logout}
                label="Sign Out"
              />
            )}
          </div>
        </div>

        {/* Separator */}
        <div className="row mb-3">
          <div className="col"></div>
        </div>
      </div>
    </>
  )
}
