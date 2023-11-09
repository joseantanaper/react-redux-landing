import { Link, NavLink } from 'react-router-dom'
import { Icon, IconMap } from '../widgets/Icon'
import { useEffect } from 'react'

interface Props {
  title: string
  subtitle?: string
  iconmap?: IconMap
  type?: 0 | 1
}

export const Title = ({ title, subtitle, iconmap, type = 0 }: Props) => {
  useEffect(() => {
    console.log(title, type)
  }, [])

  return (
    // <NavLink
    //   className={`navbar-brand ${
    //     type === 0 ? 'ms-3' : ''
    //   } w-100 text-truncate text-nowrap`}
    //   to="/"
    // >
    <NavLink className="navbar-brand text-truncate" to="/">
      <div
        className={`text-nowrap text-truncate d-flex ${
          type === 1 ? 'app-show-on-scroll hide fade ps-3' : ''
        }`}
      >
        <span>
          {iconmap && <Icon iconmap={iconmap} />}
          {title}
        </span>
        <span className="w-100 text-truncate opacity-50 fst-italic fw-light justify-content-start">
          {subtitle}
        </span>
      </div>
    </NavLink>
  )
}
