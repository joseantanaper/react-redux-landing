import { Icon, IconMap } from '@/components/widgets/Icon'
import { ReactNode } from 'react'

interface Props {
  className?: string
  extraClass?: string
  disabled?: boolean
  iconmap?: IconMap
  label?: string
  onClick?: Function
  targetId?: string
  toggle?: string
  dismiss?: string
  children?: ReactNode
}

export const Button = ({
  className = 'btn',
  extraClass = '',
  disabled = false,
  iconmap,
  label,
  onClick,
  children,
}: Props) => {
  return (
    <button
      className={
        (className!.includes('btn-') ? `btn ${className}` : `${className}`) +
        (extraClass ? ` ${extraClass}` : '')
      }
      disabled={disabled}
      onClick={() => onClick && onClick()}
    >
      {iconmap ? <Icon id={iconmap} /> : null}
      {label ? <span>{label}</span> : null}
      {children ? children : null}
    </button>
  )
}

interface ButtonDismissProps {
  className?: string
  extraClass?: string
  disabled?: boolean
  iconmap?: IconMap
  label?: string
  dismiss?: string
}

export const ButtonDismiss = ({
  className,
  extraClass = '',
  disabled = false,
  iconmap,
  label,
  dismiss,
}: Props) => {
  return (
    <button
      className={
        (className!.includes('btn-') ? `btn ${className}` : `${className}`) +
        (extraClass ? ` ${extraClass}` : '')
      }
      disabled={disabled}
      data-bs-dismiss={dismiss}
    >
      {iconmap ? <Icon id={iconmap} /> : null}
      {label ? <span>{label}</span> : null}
    </button>
  )
}

interface ButtonTogglerProps {
  className?: string
  extraClass?: string
  disabled?: boolean
  iconmap?: IconMap
  label?: string
  onClick?: Function
  targetId?: string
  toggle?: string
  dismiss?: string
  children?: ReactNode
}

export const ButtonToggler = ({
  className = 'navbar-toggler',
  extraClass = '',
  iconmap,
  label,
  targetId,
  toggle = 'offcanvas',
  children,
}: Props) => {
  return (
    <button
      className={
        (className!.includes('btn-') ? `btn ${className}` : `${className}`) +
        (extraClass ? ` ${extraClass}` : '')
      }
      type="button"
      data-bs-toggle={toggle}
      data-bs-target={`#${targetId}`}
      aria-controls={`${targetId}`}
      aria-expanded={false}
      aria-label="Toggler"
    >
      {iconmap && <Icon iconmap={iconmap} />}
      {label ? <span>{label}</span> : null}
      {children ? children : null}
    </button>
  )
}
