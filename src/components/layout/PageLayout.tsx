import { useEffect, ReactNode } from 'react'
import { Icon, IconMap } from '../widgets/Icon'

interface Props {
  title: string
  children: ReactNode
}

export const PageLayout = ({ title, children }: Props) => {
  useEffect(() => {
    console.log('PageLayout', 'useEffect')
  }, [])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="mb-5 text-center border-bottom border-2 border-primary-subtle">
              {title}
            </h1>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}
