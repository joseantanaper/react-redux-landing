import React from 'react'
import { Icon, IconMap } from './Icon'

interface Props {
  id?: string
  h: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  label: string
  iconmap?: IconMap
}

const Title = ({ id, h, label, iconmap }: Props) => {
  switch (h) {
    case 'h1':
      return (
        <h1 id={id}>
          <Icon iconmap={iconmap} />
          {label}
        </h1>
      )
    case 'h2':
      return (
        <h2 id={id}>
          <Icon iconmap={iconmap} />
          {label}
        </h2>
      )
    case 'h3':
      return (
        <h3>
          <Icon iconmap={iconmap} />
          {label}
        </h3>
      )
    case 'h4':
      return (
        <h4>
          <Icon iconmap={iconmap} />
          {label}
        </h4>
      )
    case 'h5':
      return (
        <h5>
          <Icon iconmap={iconmap} />
          {label}
        </h5>
      )
    case 'h6':
      return (
        <h6>
          <Icon iconmap={iconmap} />
          {label}
        </h6>
      )
  }
}

export default Title
