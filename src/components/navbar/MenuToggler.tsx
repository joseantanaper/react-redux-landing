import { Icon, IconMap } from '../widgets/Icon'
import { ReactNode } from 'react'

interface Props {
  id: string
  iconmap?: IconMap
  bsClass?: string
  extraClass?: string
  children?: ReactNode
}

export const MenuToggler = ({
  id,
  iconmap,
  bsClass = 'navbar-toggler',
  extraClass = '',
  children,
}: Props) => {
  return (
    <button
      className={`${bsClass} ${extraClass}`}
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target={`#${id}`}
      aria-controls={`#${id}`}
      aria-label="Toggle navigation"
    >
      {iconmap && <Icon iconmap={iconmap} />}
      {children}
    </button>
  )
}
