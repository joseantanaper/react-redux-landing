import React from 'react'
import { Icon, IconMap } from './Icon'
import { Button } from './Button'

interface Props {
  name?: string
  placeholder?: string
  value?: string
  type?: 'text' | 'number'
  // extraClass?: string
  disabled?: boolean
  search?: boolean
  onChange?: Function
  clear?: Function
}

export const Input = ({
  name,
  placeholder,
  value,
  type = 'text',
  disabled,
  search,
  onChange,
  clear,
}: Props) => {
  if (search) {
    return (
      <div className="btn-group">
        <div className="input-group">
          <input
            className="form-control z-0 text-truncate"
            name={name}
            placeholder={placeholder}
            value={value}
            type={type}
            disabled={disabled}
            onChange={(e) => (onChange ? onChange(e.target.value) : null)}
            style={{ paddingRight: '26px', minWidth: '240px' }}
          />
          <Icon
            id={IconMap.Search}
            extra="app-search text-primary opacity-50"
            style={{
              position: 'absolute',
              top: '14px',
              right: '8px',
            }}
          />
        </div>
        {clear && (
          <Button
            className="btn-outline-danger"
            iconmap={IconMap.Backspace}
            onClick={clear}
          />
        )}
      </div>
    )
  } else {
    return (
      <input
        className="form-control text-truncate"
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        disabled={disabled}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
      />
    )
  }
}
