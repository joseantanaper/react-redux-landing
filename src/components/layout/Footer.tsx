import React from 'react'
import { Avatar, AvatarSize } from '../Avatar'

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="app-shadow-divider"></div>

        <div className="container" style={{ paddingBottom: '80px' }}>
          <div className="row text-center">
            <div className="col">
              {/* <h1 className="text-center">- Footer -</h1> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col fw-lighter border-end">
              <Avatar size={AvatarSize.md} className="d-flex shadow" />
              <br />
              <p className=" text-justify">
                Designed, developed and deployed with passion by{' '}
                <strong>JoseA</strong> while learning and enjoying with the most
                exciting frameworks and libraries. By now, this is my favorite
                stack.
              </p>
              <br />
              <code className="text-start">
                <div>
                  SSR:{' '}
                  <span className="text-primary">
                    {import.meta.env.SSR ? 'Yes' : 'No'}
                  </span>
                </div>
                <div>
                  Build time:{' '}
                  <span className="text-primary">{APP_BUILD_TIME}</span>
                </div>
                <div>
                  Execution mode:{' '}
                  <span className="text-primary">{import.meta.env.MODE}</span>
                </div>
                <div>
                  Base url:{' '}
                  <span className="text-primary">
                    {import.meta.env.BASE_URL}
                  </span>
                </div>
              </code>
            </div>
            <div className="col text-center">
              <h5>Main Sections</h5>
              ***
            </div>
            <div className="col text-center">
              <h5>Subsections</h5>
              ***
            </div>
            <div className="col text-center">
              <h5>Contact</h5>
              ***
            </div>
          </div>
        </div>
        <div className="container" style={{ paddingBottom: '80px' }}></div>
      </footer>
    </>
  )
}

export default Footer
