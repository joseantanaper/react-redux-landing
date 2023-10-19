import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, IconMap } from '@components/widgets/Icon'
import { RouteLink } from '@config/nav.config'

interface Props {
  routeLinks: RouteLink[]
}

export const NavMenu = ({ routeLinks }: Props) => {
  return (
    <>
      <div className="vr ms-2 me-3 d-none d-lg-block"></div>

      {routeLinks
        .filter((routeLink) => routeLink.url.startsWith('/'))
        .map((routeLink) => {
          return (
            <>
              <NavLink className="btn" aria-current="page" to={routeLink.url}>
                <Icon iconmap={routeLink.iconmap} />
                <span>{routeLink.label}</span>
              </NavLink>
            </>
          )
        })}
    </>
  )
}
