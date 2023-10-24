import { ReactNode } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'

interface Props {
  id: string
  iconmap?: IconMap
  bsClass?: string
  toggleMode?: 'offcanvas' | 'collapse'
  extraClass?: string
  children?: ReactNode
}

export const MenuToggler = ({
  id,
  iconmap,
  bsClass = 'navbar-toggler',
  toggleMode = 'offcanvas',
  extraClass = '',
  children,
}: Props) => {
  return (
    <button
      className={`${bsClass} ${extraClass}`}
      type="button"
      data-bs-toggle={toggleMode}
      data-bs-target={`#${id}`}
      aria-controls={`${id}`}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {iconmap && <Icon iconmap={iconmap} />}
      {children}
    </button>
  )
}
