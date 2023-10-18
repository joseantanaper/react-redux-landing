import { NavLink } from 'react-router-dom'
import { MenuToggler } from './MenuToggler'
import { ThemeToggler } from './ThemeToggler'
import { MiniCounter } from './MiniCounter'
import { MenuEnd } from '@components/menu/MenuEnd'
import { MenuTop } from '@components/menu/MenuTop'
import { MenuBottom } from '@components/menu/MenuBottom'
import { MenuStart } from '@components/menu/MenuStart'
import { NavMenu } from './NavMenu'
import { Clock } from './Clock'
import { Title } from './Title'
import { Avatar } from '@components/Avatar'
import { Icon, IconMap } from '@components/widgets/Icon'
import { useAppSelector } from '@app/hooks'

import { routeLinks, RouteLink } from '@config/nav.config'

// Global Navbar is a good place for the "Single Source of Truth".
// Common Parent Component for AppSlice setttings

import {
  selectTheme,
  selectLocale,
  selectClockMode,
} from '@app/reducer/app.slice'

interface Props {
  title: string
  subtitle?: string
}

export const Navbar = ({ title, subtitle }: Props) => {
  const currentTheme = useAppSelector(selectTheme)
  const currentLocale = useAppSelector(selectLocale)
  const currentClockMode = useAppSelector(selectClockMode)

  return (
    <nav className="navbar app-main-navbar bg-body-tertiary border-bottom fixed-top text-truncate shadow-sm">
      <div className="container-fluid flex-nowrap">
        {/* Navigation Left Toggler */}
        <div className="navbar-brand">
          <MenuToggler id="offcanvasMenuNav" iconmap={IconMap.MenuStart} />
        </div>

        {/* Title */}
        <Title title={title} subtitle={subtitle} />

        {/* Menu */}
        <NavMenu routeLinks={routeLinks as RouteLink[]} />

        {/* Buttons */}
        <div className="vr ms-2 me-3 d-none d-md-block"></div>
        <div className="d-flex d-none d-md-block">
          <MiniCounter />
        </div>

        <div className="vr ms-3 me-2"></div>

        {/* Global Toolbar */}
        <Clock currentClockMode={currentClockMode} />
        <ThemeToggler currentTheme={currentTheme} />
        <MenuToggler
          id="offcanvasMenuTop"
          bsClass="btn"
          iconmap={IconMap.MenuTop}
        />
        <MenuToggler
          id="offcanvasMenuBottom"
          bsClass="btn"
          iconmap={IconMap.MenuBottom}
        />

        <MenuToggler id="offcanvasMenuSettings" extraClass="border-0">
          <Avatar />
        </MenuToggler>
      </div>

      {/* Menu Left */}
      <MenuStart id="offcanvasMenuNav" title="Navigation" />
      <MenuEnd id="offcanvasMenuSettings" title="Settings" />
      <MenuTop id="offcanvasMenuTop" title="Menu Top" />
      <MenuBottom id="offcanvasMenuBottom" title="Menu Bottom" />
    </nav>
  )
}
