import { Icon, IconMap } from '@/components/widgets/Icon'
import { ReactNode } from 'react'

interface Props {
  name?: string
  className?: string
  extraClass?: string
  disabled?: boolean
  iconmap?: IconMap
  label?: string
  async?: boolean
  onClick?: Function
  targetId?: string
  toggle?: 'offcanvas'
  dismiss?: string
  children?: ReactNode
}

export const Button = ({
  name,
  className = 'btn',
  extraClass = '',
  disabled = false,
  iconmap,
  label,
  async = false,
  onClick,
  children,
}: Props) => {
  const handleClick = (name: string) => {
    if (onClick) {
      console.log('Button', 'handleClick')
      if (async) {
        document
          .querySelectorAll('button[name="' + name + '"]')
          .forEach((button) => {
            button.classList.add('disabled')
            button.querySelectorAll('svg').forEach((icon) => {
              icon.classList.add('d-none')
            })
            button.querySelectorAll('div[class^="spinner"]').forEach((spin) => {
              spin.classList.remove('d-none')
            })
          })
        document
          .querySelectorAll('button[name="' + name + '"]')
          .forEach((spin) => {
            spin.classList.remove('invisible')
          })
      }
      onClick().then(() => {
        if (async) {
          document
            .querySelectorAll('button[name="' + name + '"]')
            .forEach((button) => {
              button.classList.remove('disabled')
              button.querySelectorAll('svg').forEach((icon) => {
                icon.classList.remove('d-none')
              })
              button
                .querySelectorAll('div[class^="spinner"]')
                .forEach((spin) => {
                  spin.classList.add('d-none')
                })
            })
        }
      })
    }
  }
  return (
    <button
      name={name}
      className={
        (className!.includes('btn-') ? `btn ${className}` : `${className}`) +
        (extraClass ? ` ${extraClass}` : '')
      }
      disabled={disabled}
      onClick={() =>
        onClick ? (async ? handleClick(name!) : onClick()) : null
      }
    >
      {async && <div className="spinner-border spinner-border-sm d-none"></div>}
      {iconmap ? <Icon id={iconmap} /> : null}
      {label ? <span>{label}</span> : null}
      {children ? children : null}
    </button>
  )
}

export const ButtonDismiss = ({
  className = 'btn-outline-secondary',
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

export const ButtonToggler = ({
  className = 'navbar-toggler btn-outline-secondary',
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
