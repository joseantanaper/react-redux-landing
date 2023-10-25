import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '../widgets/Icon'
import { Subnavbar } from '../navbar/Subnavbar'

interface Props {
  title: string
  subtitle?: string
  subnavbar?: boolean
  toolbar?: ReactNode
  children: ReactNode
}

export const PageLayout = ({
  title,
  subtitle,
  subnavbar = false,
  toolbar,
  children,
}: Props) => {
  useEffect(() => {
    console.log('PageLayout', 'useEffect')

    const showTitle = () => {
      if (window.scrollY > 100) {
        document.querySelectorAll('div.app-show-on-scroll').forEach((span) => {
          span.classList.remove('hide')
          span.classList.add('show')
        })
        document.querySelectorAll('button.app-go-top').forEach((button) => {
          // button.classList.replace('hide', 'show')
          button.classList.add('show')

          button.removeAttribute('disabled')
        })
      } else {
        document.querySelectorAll('div.app-show-on-scroll').forEach((span) => {
          span.classList.remove('show')
          span.classList.add('hide')
        })
        document.querySelectorAll('button.app-go-top').forEach((button) => {
          // button.classList.replace('show', 'hide')
          button.classList.remove('show')
          button.setAttribute('disabled', 'disabled')
        })
      }
    }

    window.addEventListener('scroll', function () {
      showTitle()
    })

    showTitle()
  }, [])

  const goTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="mb-5 text-center">
              <span>{title}</span>{' '}
              <span className="opacity-25 ms-3 fst-italic fw-light">
                {subtitle}
              </span>
            </h1>
          </div>
        </div>
      </div>
      {subnavbar && (
        <Subnavbar title={title} subtitle={subtitle} toolbar={toolbar} />
      )}
      <div className="app-content ps-4 pe-3">{children}</div>
      <button
        type="button"
        className="app-go-top navbar-toggler fade"
        onClick={goTop}
      >
        <Icon id={IconMap.GoTop} />
      </button>
    </>
  )
}
