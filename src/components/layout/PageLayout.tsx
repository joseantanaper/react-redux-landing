import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '../widgets/Icon'
import { Button } from '../widgets/Button'
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
          // span.classList.remove('hide')
          // span.classList.add('show')
          span.classList.replace('hide', 'show')
        })
        document.querySelectorAll('button.app-go-top').forEach((button) => {
          button.classList.replace('hide', 'show')
        })
        // document.querySelectorAll('button.app-go-top').forEach((button) => {
        //   button.classList.replace('hide', 'show')
        //   // if (!button.classList.contains('show')) button.classList.add('show')
        //   button.removeAttribute('disabled')
        // })
      } else {
        document.querySelectorAll('div.app-show-on-scroll').forEach((span) => {
          // span.classList.remove('show')
          // span.classList.add('hide')
          span.classList.replace('show', 'hide')
        })
        document.querySelectorAll('button.app-go-top').forEach((button) => {
          button.classList.replace('show', 'hide')
        })
        // document.querySelectorAll('button.app-go-top').forEach((button) => {
        //   button.classList.replace('show', 'hide')
        //   // if (button.classList.contains('show')) button.classList.remove('show')
        //   button.setAttribute('disabled', 'disabled')
        // })
      }
    }

    let isScrolling
    window.addEventListener(
      'scroll',
      () => {
        showTitle()
      },
      false
    )

    showTitle()
  }, [])

  const goTop = () => {
    console.log('PageLayout', 'goTop')
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
      <div className="app-content ps-3 pe-2">{children}</div>

      <Button
        className="navbar-toggler app-go-top"
        extraClass="position-fixed end-0 bottom-0 me-5 mb-5 hide fade"
        iconmap={IconMap.GoTop}
        onClick={goTop}
      />
    </>
  )
}
