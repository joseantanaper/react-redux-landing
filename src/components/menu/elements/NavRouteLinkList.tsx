import React from 'react'
import { useEffect, useState } from 'react'
import { RouteLink } from '@/config/nav.config'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Button } from '@/components/widgets/Button'
import { Accordion } from './Accordion'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { Input } from '@/components/widgets/Input'
import { t } from 'i18next'

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
      className={`list-group-item text-nowrap list-group-item-action ${
        parentIndex > 0 ? 'ps-4' : ''
      }`}
      aria-current="page"
      to={routeLink.url}
    >
      <Icon iconmap={routeLink.iconmap} />
      <span className="">
        {/* <div className="vr ms-2 m-0 p-0 bottom-0 position-absolute top-0"></div> */}
        <span>{routeLink.label}</span>
        <span className="small text-body-secondary">
          <span className="float-end border-start ps-2 ms-2">
            {routeLink.parent && (
              <>
                <span className="end-0">
                  <Icon iconmap={routeLink.parent.iconmap} />
                  <span className="inline">{routeLink.parent.label}</span>
                </span>
              </>
            )}
          </span>
        </span>
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
    return renderNavLink(routeLink, parentIndex, index)
  } else {
    const subRouteLinks: RouteLink[] = routeLink.items as RouteLink[]
    const accordionId = `accordion-${index}`
    return (
      <Accordion
        id={accordionId}
        key={accordionId}
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
  const [linkCount, setLinkCount] = useState(0)
  const [filteredRouteLinks, setFilteredRouteLinks] = useState(routeLinks)

  const countLinks = () => {
    let counter: number = 0
    counter += [...routeLinks].filter((link) => link.url.startsWith('/')).length
    ;[...routeLinks].map((link) => {
      if (link.items) counter += link.items!.length
    })
    return counter
  }

  const filterLinks = (search: string) => {
    setSearch(search)
    let filtered: RouteLink[] = []
    setLinkCount(countLinks())
    if (search) {
      ;[...routeLinks].forEach((link: RouteLink) => {
        if (
          link.url.startsWith('/') &&
          link.label.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
          filtered.push(link)
      })
      ;[...routeLinks].forEach((link: RouteLink) => {
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

  useEffect(() => {
    filterLinks('')
  }, [])

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

      <div className="text-end mt-3 mb-3">
        <div className="btn-group">
          <span className="btn btn-outline-secondary disabled text-body">
            {t('app:links')}
          </span>
          <span className="btn btn-outline-secondary disabled text-body">
            {search ? filteredRouteLinks.length : linkCount} / {linkCount}
          </span>
        </div>
      </div>

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
