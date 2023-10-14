import { Icon } from "../widgets/Icon"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

interface Props {
  id: string
}

export const MenuLeft = ({ id }: Props) => {
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
          Menu Left
        </h5>
      </div>

      {/* Body START */}
      <div className="offcanvas-body text-wrap ps-1 pe-1 pt-3">
        <div
          className="list-group list-group-flush pb-2 app-menu"
          data-bs-dismiss="offcanvas"
        >
          <NavLink
            className="list-group-item list-group-item-action ps-4"
            aria-current="page"
            to="/"
          >
            <Icon id="bi-code-square" />
            <span>Home</span>
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action ps-4"
            aria-current="page"
            to="/portfolio"
          >
            <Icon id="bi-code-square" />
            <span>Portfolio</span>
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action ps-4"
            aria-current="page"
            to="/todo"
          >
            <Icon id="bi-code-square" />
            <span>Todo</span>
          </NavLink>
        </div>

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
                <span>Accordion Item #1</span>
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
                  <NavLink
                    className="list-group-item list-group-item-action ps-4"
                    aria-current="page"
                    to="/"
                  >
                    <Icon id="bi-code-square" />
                    <span>Home</span>
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action ps-4"
                    aria-current="page"
                    to="/portfolio"
                  >
                    <Icon id="bi-code-square" />
                    <span>Portfolio</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* Accordion 1 END */}

          {/* Accordion 2 START */}
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <Icon id="bi-menu-button-wide-fill" />
                <span>Accordion Item #2</span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse accordion-flush"
              // data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ps-0 pe-0 pt-1 pb-3">
                <div
                  className="list-group list-group-flush pb-2 pb-3"
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className="list-group-item list-group-item-action ps-4"
                    aria-current="page"
                    to="/"
                  >
                    <Icon id="bi-code-square" />
                    <span>Home</span>
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action ps-4"
                    aria-current="page"
                    to="/portfolio"
                  >
                    <Icon id="bi-code-square" />
                    <span>Portfolio</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* Accordion 2 END */}
        </div>
      </div>
      {/* Body END*/}
    </div>
  )
}
