import { useState } from "react"
import { Icon } from "../../widgets/Icon"
import { MenuToggler } from "./MenuToggler"

interface Props {
  title: string
}

export const Navbar = ({ title }: Props) => {
  return (
    <nav className="navbar app-main-navbar bg-body-tertiary fixed-top text-truncate shadow-sm">
      {/* Left Menu Toggler */}
      <div className="container-fluid flex-nowrap">
        <div className="navbar-brand">
          <MenuToggler
            id="offcanvasMenuLeft"
            iconId="bi-layout-sidebar-inset"
          />
        </div>

        {/* Title */}
        <a className="navbar-brand fw-bolder me-auto text-truncate" href="/">
          {title} Sticky top Long Text For Testing
        </a>

        <div className="vr ms-2 me-3"></div>

        {/* Menu */}
        <div className="d-flex me-2">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Nav-Link
              </a>
            </li>
          </ul>
          <button className="btn">OKzz</button>
          <button className="btn">OKgg</button>
          <button className="btn">OKaa</button>
          <button className="btn">OKss</button>
        </div>

        <div className="vr ms-2 me-3"></div>

        <MenuToggler id="sidebarTop" type="btn" iconId="bi-arrow-bar-down" />
        <MenuToggler id="sidebarBottom" type="btn" iconId="bi-arrow-bar-up" />

        <MenuToggler
          id="sidebarRight"
          iconId="bi-layout-sidebar-inset-reverse"
          css="ms-2"
        />
      </div>
    </nav>
  )
}
