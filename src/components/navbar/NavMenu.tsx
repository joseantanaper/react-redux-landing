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
      <div className="d-flex d-none d-lg-block">
        {routeLinks
          .filter((link) => link.url.startsWith('/'))
          .map((link) => {
            return (
              <NavLink className="btn" aria-current="page" to={link.url}>
                <Icon iconmap={link.iconmap} />
                <span>{link.label}</span>
              </NavLink>
            )
          })}
      </div>
    </>
  )
}
