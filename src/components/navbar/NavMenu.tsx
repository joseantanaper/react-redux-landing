import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, IconMap } from '@components/widgets/Icon'
import { RouteLink } from '@config/nav.config'

import { t } from 'i18next'
import { ThemeToggler } from '../toggler/ThemeToggler'

interface Props {
  routeLinks: RouteLink[]
}

export const NavMenu = ({ routeLinks }: Props) => {
  return (
    <>
      {/* <div className="vr ms-2 me-3 d-none d-xxl-block"></div> */}
      {routeLinks
        .filter((routeLink) => routeLink.url.startsWith('/'))
        .map((routeLink, index) => {
          // if (index < 3)
          return (
            <>
              <NavLink
                key={index}
                className="btn"
                aria-current="page"
                to={routeLink.url}
              >
                <Icon iconmap={routeLink.iconmap} />
                <span>{t(routeLink.label)}</span>
              </NavLink>
            </>
          )
        })}
    </>
  )
}
