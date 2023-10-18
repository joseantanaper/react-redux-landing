import { NavLink } from 'react-router-dom'
import { MenuToggler } from './MenuToggler'
import { ThemeToggler } from './ThemeToggler'
import { MiniCounter } from './MiniCounter'
import { MenuSettings } from '../menu/MenuSettings'
import { MenuTop } from '../menu/MenuTop'
import { MenuBottom } from '../menu/MenuBottom'
import { MenuNav } from '../menu/MenuNav'
import { Clock } from './Clock'
import { Title } from './Title'
import { Avatar } from '../Avatar'
import { Icon, IconMap } from '../../components/widgets/Icon'
import { useAppSelector } from '../../app/hooks'
// Single Source of Truth in Common Parent Component for AppSlice setttings
import {
  selectTheme,
  selectLocale,
  selectClockMode,
} from '../../app/reducer/app.slice'

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
          <MenuToggler id="offcanvasMenuNav" iconmap={IconMap.MenuNavLeft} />
        </div>

        {/* Title */}
        <Title title={title} subtitle={subtitle} />

        {/* Menu */}
        <div className="vr ms-2 me-3 d-none d-lg-block"></div>
        <div className="d-flex d-none d-lg-block">
          <NavLink className="btn" aria-current="page" to="/">
            <Icon iconmap={IconMap.Home} />
            <span>Home</span>
          </NavLink>

          <NavLink className="btn" aria-current="page" to="/portfolio">
            <Icon iconmap={IconMap.Portfolio} />
            <span>Portfolio</span>
          </NavLink>
        </div>

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
          iconmap={IconMap.MenuNavTop}
        />
        <MenuToggler
          id="offcanvasMenuBottom"
          bsClass="btn"
          iconmap={IconMap.MenuNavBottom}
        />

        <MenuToggler id="offcanvasMenuSettings" extraClass="border-0">
          <Avatar />
        </MenuToggler>
      </div>

      {/* Menu Left */}
      <MenuNav id="offcanvasMenuNav" title="Navigation" />
      <MenuSettings id="offcanvasMenuSettings" title="Settings" />
      <MenuTop id="offcanvasMenuTop" />
      <MenuBottom id="offcanvasMenuBottom" />
    </nav>
  )
}
