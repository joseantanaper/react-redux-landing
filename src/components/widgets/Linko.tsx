import React from 'react'
import { Icon, IconMap } from './Icon'

interface Props {
  iconmap: IconMap
  label: string
  href: string
}

export const Linko = ({ iconmap, label, href }: Props) => {
  return (
    <>
      <a className="nav-link" href={href}>
        <Icon id={iconmap} />
        <span>{label}</span>
      </a>
    </>
  )
}
