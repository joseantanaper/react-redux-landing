import { Icon } from '../widgets/Icon'
import { ReactNode } from 'react'

interface Props {
  id: string
  iconId?: string
  bsClass?: string
  extraClass?: string
  children?: ReactNode
}

export const MenuToggler = ({
  id,
  iconId,
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
      {iconId && <Icon id={iconId} />}
      {children}
    </button>
  )
}
