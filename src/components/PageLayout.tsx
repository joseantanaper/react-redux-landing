import { useEffect } from 'react'

interface Props {
  title: string
  children: object
}

export const PageLayout = ({ title, children }: Props) => {
  useEffect(() => {
    console.log('PageLayout', 'useEffect')
  }, [])

  return (
    <>
      <h1>{title}</h1>
      <hr />
      {children}
    </>
  )
}
