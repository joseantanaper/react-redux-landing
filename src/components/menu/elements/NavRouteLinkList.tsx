import React from 'react'
import { useState } from 'react'
import { RouteLink } from '@/config/nav.config'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Button } from '@/components/widgets/Button'
import { Accordion } from './Accordion'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { Input } from '@/components/widgets/Input'

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
        {routeLink.parent && (
          <span className="ms-3 border-start ps-3 small fst-italic text-secondary float-end">
            <Icon iconmap={routeLink.parent.iconmap} />
            <span>{routeLink.parent.label}</span>
          </span>
        )}
      </span>
    </NavLink>
  )
}

const renderRouteLink = (
  routeLink: RouteLink,
  parentIndex: number,
  index: number
) => {
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
          data-bs-dismiss="offcanvas"
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
  const [search, setSearch] = useState('')
  const [filteredRouteLinks, setFilteredRouteLinks] = useState(routeLinks)

  const filterLinks = (search: string) => {
    setSearch(search)
    if (search) {
      let filtered: RouteLink[] = []
      ;[...routeLinks].forEach((link: RouteLink) => {
        if (link.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          filtered.push(link)
      })
      ;[...routeLinks].forEach((link: RouteLink) => {
        // if (link.label.includes(search)) filtered.push(link)
        link.items &&
          link.items.forEach((sublink: RouteLink) => {
            if (
              sublink.label
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            )
              filtered.push({ ...sublink, parent: link })
          })
      })
      setFilteredRouteLinks(filtered)
    } else {
      setFilteredRouteLinks([...routeLinks])
    }
  }

  const clearFilter = () => {
    setSearch('')
    setFilteredRouteLinks([...routeLinks])
  }

  return (
    <>
      <Input
        type="text"
        search={true}
        value={search}
        placeholder="Search links..."
        onChange={filterLinks}
        clear={clearFilter}
      />

      <hr />

      <div
        key={parentIndex}
        className="list-group list-group-flush"
        // If closing offcanvas when click is needed
        data-bs-dismiss="offcanvas"
      >
        {filteredRouteLinks
          .filter((routeLink) => routeLink.url.startsWith('/'))
          .map((routeLink, index) => {
            return renderRouteLink(routeLink, parentIndex, index)
          })}
      </div>

      <br />

      {filteredRouteLinks
        .filter((routeLink) => !routeLink.url.startsWith('/'))
        .map((routeLink, index) => {
          return renderRouteLink(routeLink, parentIndex, index)
        })}
    </>
  )
}
