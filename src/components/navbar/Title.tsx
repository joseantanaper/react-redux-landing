import { Link, NavLink } from 'react-router-dom'

interface Props {
  title: string
  subtitle?: string
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <NavLink
      className="navbar-brand w-bolder me-auto text-truncate d-flex"
      to="/"
    >
      <span className="align-items-bottom h4 m-0">{title}</span>
      <span className="opacity-25 ms-3 fst-italic d-none d-lg-block">
        {subtitle}
      </span>
    </NavLink>
  )
}
