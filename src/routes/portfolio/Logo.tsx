import React from 'react'

interface Props {
  image: string
  label: string
  className?: string
}
const Logo = ({ image, label, className }: Props) => {
  return (
    <>
      <div
        className={`col opacity-50 rounded border bg-light shadow-sm p-2 ${className}`}
      >
        <img
          src={image}
          className="w-100"
          alt={label}
          // style={{
          //   filter: 'drop-shadow(0 1px 0 black)',
          // }}
        />
      </div>
    </>
  )
}

export default Logo
