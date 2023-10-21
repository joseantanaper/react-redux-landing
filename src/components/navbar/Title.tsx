import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

interface Props {
  title: string
  subtitle?: string
  type?: 0 | 1
}

export const Title = ({ title, subtitle, type = 0 }: Props) => {
  useEffect(() => {
    console.log(title, type)

    window.addEventListener('scroll', function () {
      if (this.window.scrollY > 100) {
        this.document
          .querySelectorAll('div.app-show-on-scroll')
          .forEach((span) => {
            span.classList.remove('hide', 'ms-5')
            span.classList.add('show', 'ms-0')
          })
      } else {
        this.document
          .querySelectorAll('div.app-show-on-scroll')
          .forEach((span) => {
            span.classList.remove('show', 'ms-0')
            span.classList.add('hide', 'ms-5')
          })
      }
    })
  }, [])

  return (
    <NavLink
      className="navbar-brand navbar-inverse w-bolder text-truncate flex-nowrap w-100"
      to="/"
      style={{ width: '100%' }}
    >
      <div
        className={`d-flex d-inline text-nowrap ${
          type === 1 ? 'app-show-on-scroll hide fade ms-5' : ''
        }`}
      >
        <span className="">{title}</span>
        <span className="opacity-50 ms-3 fst-italic fw-light d-none d-md-block">
          {subtitle}
        </span>
      </div>
    </NavLink>
  )
}
