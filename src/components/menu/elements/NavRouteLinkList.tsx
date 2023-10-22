import React from 'react'
import { RouteLink } from '@/config/nav.config'
import { Icon } from '@/components/widgets/Icon'
import { Accordion } from './Accordion'
import { NavLink } from 'react-router-dom'

interface Props {
  routeLinks: RouteLink[]
  parentIndex: number
}

const renderNavLink = (
  routeLink: RouteLink,
  parentIndex: number,
  index: number
) => {
  return (
    <NavLink
      key={index}
      className={`list-group-item list-group-item-action ${
        parentIndex > 0 ? 'ps-4' : ''
      }`}
      aria-current="page"
      to={routeLink.url}
    >
      <Icon iconmap={routeLink.iconmap} />
      {/* <div className="vr ms-2 m-0 p-0 bottom-0 position-absolute top-0"></div> */}
      <span>
        {routeLink.label}
        {/* <span className="opacity-25 m-0">|</span> {routeLink.url} */}
      </span>
    </NavLink>
  )
}

const renderRouteLink = (
  routeLink: RouteLink,
  parentIndex: number,
  index: number
) => {
  const customKey = `${parentIndex}_${index}`
  if (routeLink.url.startsWith('/')) {
    return renderNavLink(routeLink, 0, index)
  } else {
    const subRouteLinks: RouteLink[] = routeLink.items as RouteLink[]
    return (
      <Accordion
        id="accordionNav"
        label={routeLink.label}
        index={parentIndex}
        iconmap={routeLink.iconmap}
      >
        <div
          key={parentIndex}
          className="list-group list-group-flush mt-1 mb-3"
          // If closing offcanvas when click is needed
          // data-bs-dismiss="offcanvas"
        >
          {subRouteLinks.map((routeLink: RouteLink, index: number) => {
            return renderNavLink(routeLink, 1, index)
          })}
        </div>
      </Accordion>
    )
  }
}

export const NavRouteLinkList = ({ routeLinks, parentIndex }: Props) => {
  return (
    <>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <button
                className="btn btn-outline-success"
                type="button"
                id="button-addon1"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          key={parentIndex}
          className="list-group list-group-flush"
          // If closing offcanvas when click is needed
          data-bs-dismiss="offcanvas"
        >
          {routeLinks
            .filter((routeLink) => routeLink.url.startsWith('/'))
            .map((routeLink, index) => {
              return renderRouteLink(routeLink, parentIndex, index)
            })}
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {routeLinks
              .filter((routeLink) => !routeLink.url.startsWith('/'))
              .map((routeLink, index) => {
                return renderRouteLink(routeLink, parentIndex, index)
              })}
          </div>
        </div>
      </div>
    </>
  )
}
