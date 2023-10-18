import { NavLink } from 'react-router-dom'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Accordion } from './Accordion'

export interface MenuNavHeaderLink {
  iconmap?: IconMap
  label?: string
  items: Array<MenuNavLink>
}
export interface MenuNavLink {
  iconmap: IconMap
  label: string
  to: string
  run?: Function
}

interface Props {
  navlink: MenuNavHeaderLink
  parentIndex: number
}

export const ListItemNav = ({ navlink, parentIndex }: Props) => {
  // Render grouped items
  const renderItems = (navlink: MenuNavHeaderLink, parentIndex: number) => {
    return (
      <div
        key={parentIndex}
        className="list-group list-group-flush mb-3"
        data-bs-dismiss="offcanvas"
      >
        {navlink.items &&
          navlink.items.map((link: MenuNavLink, index: number) => {
            return renderNavLink(link, parentIndex, index)
          })}
      </div>
    )
  }

  // Render navlink
  const renderNavLink = (
    link: MenuNavLink,
    parentIndex: number,
    index: number
  ) => {
    const customKey = `${parentIndex}_${index}`
    return (
      <NavLink
        key={customKey}
        className={`list-group-item list-group-item-action ${
          parentIndex > 0 ? 'ps-5' : 'ps-4'
        }`}
        aria-current="page"
        to={link.to}
      >
        <Icon iconmap={link.iconmap} />
        <span>
          {link.label} <span className="opacity-25 m-0">|</span> {link.to}
        </span>
      </NavLink>
    )
  }

  // Render component
  if (navlink.label) {
    return (
      <Accordion
        id="accordionNav"
        label={navlink.label}
        index={parentIndex}
        iconmap={navlink.iconmap}
      >
        {renderItems(navlink, parentIndex)}
      </Accordion>
    )
  } else {
    return renderItems(navlink, parentIndex)
  }
}
