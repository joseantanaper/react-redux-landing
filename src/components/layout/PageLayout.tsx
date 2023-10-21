import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '../widgets/Icon'

interface Props {
  title: string
  subtitle?: string
  children: ReactNode
}

export const PageLayout = ({ title, subtitle, children }: Props) => {
  useEffect(() => {
    console.log('PageLayout', 'useEffect')
  }, [])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="mb-5 text-center border-bottom border-2 border-primary-subtle">
              <span>{title}</span>{' '}
              <span className="opacity-25 ms-3 fst-italic fw-light">
                {subtitle}
              </span>
            </h1>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}
