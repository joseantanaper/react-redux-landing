interface Props {
  title: string
  children: object
}

export const PageLayout = ({ title, children }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <hr />
      {children}
    </>
  )
}
