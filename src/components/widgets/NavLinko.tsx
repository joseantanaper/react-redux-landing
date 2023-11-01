import { RouteLink } from '@/config/nav.config'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface Props {
  routeLink: RouteLink
  parentIndex?: number
  index?: number
  external?: boolean
}

export const NavLinko = ({
  routeLink,
  parentIndex,
  index,
  external,
}: Props) => {
  return (
    <NavLink
      key={`nav-link-${parentIndex}-${index}`}
      className={`list-group-item text-nowrap text-truncate list-group-item-action ${
        parentIndex && parentIndex > 0 ? 'ps-4' : ''
      }`}
      target={external ? '_blank' : ''}
      aria-current="page"
      to={routeLink.url}
    >
      <Icon iconmap={routeLink.iconmap} />
      {/* <div className="vr ms-2 m-0 p-0 bottom-0 position-absolute top-0"></div> */}
      <span className="text-truncate">{routeLink.label}</span>
      {external && (
        <Icon iconmap={IconMap.External} extra="ms-2 end-0 opacity-25" />
      )}
      {routeLink.parent && (
        <span className="small text-body-tertiary ms-3 ps-3 border-start">
          <Icon iconmap={routeLink.parent.iconmap} />
          <span className="text-nowrap text-truncate">
            {routeLink.parent.label}
          </span>
        </span>
      )}
    </NavLink>
  )
}
