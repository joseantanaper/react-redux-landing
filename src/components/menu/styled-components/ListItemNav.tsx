import { Icon, IconMap } from '../../widgets/Icon'
import { NavLink } from 'react-router-dom'

export interface MenuNavHeaderLink {
  iconmap?: IconMap
  label?: string
  items: Array<MenuNavLink>
}
export interface MenuNavLink {
  iconmap: IconMap
  label: string
  to: string
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
        className="list-group list-group-flush"
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
      <div className="accordion" id="accordionFlushExample">
        {/* Accordion START */}
        <div className="accordion-item border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <Icon iconmap={navlink.iconmap} />
              <span>{navlink.label}</span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse accordion-flush"
            // data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body ps-0 pt-1 pb-3 pe-0">
              {renderItems(navlink, parentIndex)}
            </div>
          </div>
        </div>
        {/* Accordion END */}
      </div>
    )
  } else {
    return renderItems(navlink, parentIndex)
  }
}
