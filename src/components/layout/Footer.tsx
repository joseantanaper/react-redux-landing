import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="app-shadow-divider"></div>

      <div
        className="container"
        style={{ paddingTop: '160px', paddingBottom: '160px' }}
      >
        <footer className="">
          <h1 className="text-center">- Footer -</h1>
        </footer>
        <footer className="mt-5" style={{ paddingTop: '120px' }}>
          <hr />
          (C) 2023 - JoseA
        </footer>
      </div>
    </>
  )
}

export default Footer
