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
  }, [])

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
      <div
        className="app-content ps-4 pe-3"
        style={{
          paddingTop: '60px',
          paddingBottom: '120px',
        }}
      >
        {children}
      </div>
    </>
  )
}
