import React from 'react'
import { RouteLink } from '@/config/nav.config'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Button } from '@/components/widgets/Button'
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
      key={`nav-link-${parentIndex}-${index}`}
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
  // const customKey = `${parentIndex}_${index}`
  if (routeLink.url.startsWith('/')) {
    return renderNavLink(routeLink, 0, index)
  } else {
    const subRouteLinks: RouteLink[] = routeLink.items as RouteLink[]
    return (
      <Accordion
        id="accordionNav"
        key={`accordion-${index}`}
        label={routeLink.label}
        index={parentIndex}
        iconmap={routeLink.iconmap}
      >
        <div
          key={`accordion-${parentIndex}`}
          className="list-group list-group-flush"
          // If closing offcanvas when click is needed
          // data-bs-dismiss="offcanvas"
        >
          {subRouteLinks.map((routeLink: RouteLink, index: number) => {
            return renderNavLink(routeLink, parentIndex, index)
          })}
        </div>
      </Accordion>
    )
  }
}

export const NavRouteLinkList = ({ routeLinks, parentIndex }: Props) => {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <Button
          className="btn-outline-success"
          iconmap={IconMap.Search}
          label="Search"
        />
      </div>

      <br />

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

      <br />

      {routeLinks
        .filter((routeLink) => !routeLink.url.startsWith('/'))
        .map((routeLink, index) => {
          return renderRouteLink(routeLink, parentIndex, index)
        })}
    </>
  )
}
