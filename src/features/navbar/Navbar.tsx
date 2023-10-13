import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import profile from "../../image/profile.jpg"

import { Icon } from "../../widgets/Icon"
import { MenuToggler } from "./MenuToggler"
import { ThemeToggler } from "./ThemeToggler"
import { MiniCounter } from "./MiniCounter"
import { MenuLeft } from "../menu/MenuLeft"
import { MenuRight } from "../menu/MenuRight"
import { MenuTop } from "../menu/MenuTop"
import { MenuBottom } from "../menu/MenuBottom"
import { Clock } from "./Clock"
interface Props {
  title: string
}

export const Navbar = ({ title }: Props) => {
  return (
    <nav className="navbar app-main-navbar bg-body-tertiary border-bottom fixed-top text-truncate shadow-sm">
      <div className="container-fluid flex-nowrap">
        {/* Navigation Left Toggler */}
        <div className="navbar-brand">
          <MenuToggler
            id="offcanvasMenuLeft"
            iconId="bi-layout-sidebar-inset"
          />
        </div>

        {/* Title */}
        <NavLink className="navbar-brand w-bolder me-auto text-truncate" to="/">
          <img
            src={profile}
            alt="profile"
            width="36"
            height="36"
            className="rounded-circle me-2 app-profile"
          ></img>
          {title} Sticky top Long Text For Testing
        </NavLink>

        {/* Menu */}
        <div className="vr ms-2 me-3 d-none d-lg-block"></div>
        <div className="d-flex d-none d-lg-block">
          <NavLink className="btn" aria-current="page" to="/">
            Home
          </NavLink>

          <NavLink className="btn " aria-current="page" to="/portfolio">
            Portfolio
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="vr ms-2 me-3 d-none d-md-block"></div>
        <div className="d-flex d-none d-md-block">
          <MiniCounter />
        </div>

        <div className="vr ms-3 me-2"></div>

        {/* Global Toolbar */}
        <Clock />
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
