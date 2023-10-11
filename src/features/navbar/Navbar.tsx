import { useState } from "react"
import { Link } from "react-router-dom"

import { Icon } from "../../widgets/Icon"
import { MenuToggler } from "./MenuToggler"
import { ThemeToggler } from "./ThemeToggler"
import { MiniCounter } from "./MiniCounter"
import { MenuLeft } from "../menu/MenuLeft"
import { MenuRight } from "../menu/MenuRight"
import { MenuTop } from "../menu/MenuTop"
import { MenuBottom } from "../menu/MenuBottom"
interface Props {
  title: string
}

export const Navbar = ({ title }: Props) => {
  return (
    <nav className="navbar app-main-navbar bg-body-tertiary fixed-top text-truncate shadow-sm">
      <div className="container-fluid flex-nowrap">
        {/* Navigation Left Toggler */}
        <div className="navbar-brand">
          <MenuToggler
            id="offcanvasMenuLeft"
            iconId="bi-layout-sidebar-inset"
          />
        </div>

        {/* Title */}
        <a className="navbar-brand w-bolder me-auto text-truncate" href="/">
          {title} Sticky top Long Text For Testing
        </a>

        {/* Menu */}
        <div className="vr ms-2 me-3 d-none d-lg-block"></div>
        <div className="d-flex d-none d-lg-block">
          <Link className="btn" aria-current="page" to="/contact/1">
            Index 1
          </Link>

          <Link className="btn " aria-current="page" to="/contact/2">
            Index 2
          </Link>
        </div>

        {/* Buttons */}
        <div className="vr ms-2 me-3 d-none d-md-block"></div>
        <div className="d-flex d-none d-md-block">
          <button className="btn">OKss</button>
          <button className="btn">OKss</button>
          <MiniCounter />
        </div>

        <div className="vr ms-2 me-3"></div>

        {/* Global Toolbar */}
        <ThemeToggler id="ok" />
        <MenuToggler
          id="offcanvasMenuTop"
          type="btn"
          iconId="bi-arrow-bar-down"
        />
        <MenuToggler
          id="offcanvasMenuBottom"
          type="btn"
          iconId="bi-arrow-bar-up"
        />

        <MenuToggler
          id="offcanvasMenuRight"
          iconId="bi-layout-sidebar-inset-reverse"
          css="ms-2"
        />
      </div>

      {/* Menu Left */}
      <MenuLeft id="offcanvasMenuLeft" />
      <MenuRight id="offcanvasMenuRight" />
      <MenuTop id="offcanvasMenuTop" />
      <MenuBottom id="offcanvasMenuBottom" />
    </nav>
  )
}
