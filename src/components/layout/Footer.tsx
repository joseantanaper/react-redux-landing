import React from 'react'
import { Avatar, AvatarSize } from '@components/Avatar'
import { Icon, IconMap } from '@components/widgets/Icon'
import { routeLinks, moreLinks, RouteLink } from '@config/nav.config'
import { NavLinko } from '../widgets/NavLinko'

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="app-shadow-divider mt-5"></div>

        <div className="container mt-5">
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
            <div className="col text-truncate">
              <h5>Main Sections</h5>
              <div className="list-group list-group-flush">
                {routeLinks
                  .filter((routeLink) => !routeLink.items)
                  .map((routeLink, index) => (
                    <NavLinko routeLink={routeLink} parentIndex={0} index={0} />
                  ))}
              </div>
            </div>
            <div className="col text-center text-truncate">
              <h5>Secondary Sections</h5>
              <div className="list-group list-group-flush">
                {routeLinks
                  .filter((routeLink) => routeLink.items)
                  .map((routeLink) => {
                    return (
                      routeLink.items &&
                      routeLink.items.map((subrouteLink) => (
                        <NavLinko
                          routeLink={subrouteLink}
                          parentIndex={0}
                          index={0}
                        />
                      ))
                    )
                  })}
              </div>
            </div>
            <div className="col text-end text-truncate">
              <h5>More</h5>
              <div className="list-group list-group-flush">
                {moreLinks.map((moreLink, index) => (
                  <NavLinko
                    routeLink={moreLink}
                    parentIndex={0}
                    index={0}
                    external={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5"></div>
      </footer>
    </>
  )
}

export default Footer
