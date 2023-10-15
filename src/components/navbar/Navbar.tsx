import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import profile from '../../image/profile.jpg'

import { Icon } from '../widgets/Icon'
import { MenuToggler } from './MenuToggler'
import { ThemeToggler } from './ThemeToggler'
import { MiniCounter } from './MiniCounter'
import { MenuLeft } from '../menu/MenuLeft'
import { MenuRight } from '../menu/MenuRight'
import { MenuTop } from '../menu/MenuTop'
import { MenuBottom } from '../menu/MenuBottom'
import { MenuNav } from '../menu/MenuNav'
import { Clock } from './Clock'
interface Props {
  title: string
  subtitle?: string
}

export const Navbar = ({ title, subtitle }: Props) => {
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
        <NavLink
          className="navbar-brand w-bolder me-auto text-truncate d-flex"
          to="/"
        >
          <span className="align-items-bottom">{title}</span>
          <span className="opacity-25 ms-3 fst-italic d-none d-lg-block">
            {subtitle}
          </span>
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
          bsClass="btn"
          iconId="bi-arrow-bar-down"
        />
        <MenuToggler
          id="offcanvasMenuBottom"
          bsClass="btn"
          iconId="bi-arrow-bar-up"
        />

        <MenuToggler id="offcanvasMenuRight" extraClass="border-0">
          <img
            src={profile}
            alt="profile"
            width="40"
            height="40"
            className="rounded-circle m-0 p-0 app-profile"
          ></img>
        </MenuToggler>
      </div>

      {/* Menu Left */}
      <MenuNav id="offcanvasMenuLeft" title="Navigation" />
      <MenuRight id="offcanvasMenuRight" title="Settings" />
      <MenuTop id="offcanvasMenuTop" />
      <MenuBottom id="offcanvasMenuBottom" />
    </nav>
  )
}
