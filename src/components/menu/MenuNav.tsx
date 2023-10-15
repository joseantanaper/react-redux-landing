import { Icon } from '../widgets/Icon'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

interface Props {
  id: string
  title: string
}

const navlinks = [
  {
    sectionTitle: '',
    links: [
      {
        iconId: 'bi-code-square',
        label: 'Home',
        to: '/',
      },
      {
        iconId: 'bi-code-square',
        label: 'Portfolio',
        to: '/portfolio',
      },
    ],
  },
  {
    sectionTitle: 'Todo Apps',
    links: [
      { iconId: 'bi-code-square', label: 'Simplest Todo App', to: '/todo' },
    ],
  },
]

export const MenuNav = ({ id, title }: Props) => {
  return (
    <div
      className="offcanvas offcanvas-start border-end shadow"
      tabIndex={-1}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      {/* Header */}
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-dismiss="offcanvas"
        >
          <Icon id="bi-chevron-bar-left" />
        </button>
        <h5 className="offcanvas-title" id={`${id}Label`}>
          {title!}
        </h5>
      </div>

      <div className="offcanvas-body text-wrap ps-1 pe-1 pt-3">
        <div
          className="list-group list-group-flush pb-2 app-menu"
          data-bs-dismiss="offcanvas"
        ></div>
        {/* Body START */}
        {navlinks.map((navlink) => {
          // Accordion
          return navlink.sectionTitle ? (
            <>
              {/* Accordions */}
              <div className="accordion" id="accordionFlushExample">
                {/* Accordion 1 START */}
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
                      <Icon id="bi-menu-button-wide-fill" />
                      <span>{navlink.sectionTitle}</span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse accordion-flush"
                    // data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body ps-0 pt-1 pb-3 pe-0">
                      <div
                        className="list-group list-group-flush"
                        data-bs-dismiss="offcanvas"
                      >
                        {navlink.links.map((link) => {
                          return (
                            <NavLink
                              className="list-group-item list-group-item-action ps-4"
                              aria-current="page"
                              to={link.to}
                            >
                              <Icon id={link.iconId} />
                              <span>{link.label}</span>
                            </NavLink>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {navlink.links.map((link) => {
                // Links
                return (
                  <div
                    className="list-group list-group-flush"
                    data-bs-dismiss="offcanvas"
                  >
                    <NavLink
                      className="list-group-item list-group-item-action ps-4"
                      aria-current="page"
                      to={link.to}
                    >
                      <Icon id={link.iconId} />
                      <span>{link.label}</span>
                    </NavLink>
                  </div>
                )
              })}
            </>
          )
        })}
      </div>
      {/* Body END*/}
    </div>
  )
}
