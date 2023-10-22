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

    const showTitle = () => {
      if (window.scrollY > 100) {
        document.querySelectorAll('div.app-show-on-scroll').forEach((span) => {
          span.classList.remove('hide', 'ms-5')
          span.classList.add('show', 'ms-0')
        })
      } else {
        document.querySelectorAll('div.app-show-on-scroll').forEach((span) => {
          span.classList.remove('show', 'ms-0')
          span.classList.add('hide', 'ms-5')
        })
      }
    }

    window.addEventListener('scroll', function () {
      showTitle()
    })

    showTitle()
  }, [])

  return (
    <NavLink
      className={`navbar-brand ${type === 0 ? 'ms-3' : ''} text-truncate`}
      to="/"
      style={{ width: '100%' }}
    >
      <div
        className={`d-flex d-inline ${
          type === 1 ? 'app-show-on-scroll hide fade' : ''
        }`}
      >
        <span className="">{title}</span>
        <span className="opacity-50 ms-3 fst-italic fw-light">{subtitle}</span>
      </div>
    </NavLink>
  )
}
