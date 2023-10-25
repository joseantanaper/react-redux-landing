import { NavLink } from 'react-router-dom'
import { MenuToggler } from '../toggler/MenuToggler'
import { ThemeToggler } from '../toggler/ThemeToggler'
import { MiniCounter } from '../toggler/MiniCounter'
import { MenuEnd } from '@components/menu/MenuEnd'
import { MenuTop } from '@components/menu/MenuTop'
import { MenuBottom } from '@components/menu/MenuBottom'
import { MenuStart } from '@components/menu/MenuStart'
import { NavMenu } from './NavMenu'
import { LocaleToggler } from '../toggler/LocaleToggler'
import { Clock } from './Clock'
import { Title } from './Title'
import { Avatar } from '@components/Avatar'
import { Icon, IconMap } from '@components/widgets/Icon'
import { useAppSelector } from '@app/hooks'

import { routeLinks, RouteLink } from '@config/nav.config'

import { t } from 'i18next'

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

  const dividerClass = 'border-start ps-3 me-3'

  return (
    <header>
      <nav className="app-main-navbar-crystal navbar border-bottom shadow-sm fixed-top text-truncate">
        {/* Navbar Begin */}
        <div className="app-navbar-container container-fluid flex-nowrap">
          <MenuToggler id="offcanvasMenuNav" iconmap={IconMap.MenuStart} />

          {/* Title */}
          <Title title={t(title)} subtitle={t(subtitle!)} type={0} />

          {/* Menu */}
          <div className={`d-none d-xxl-block ${dividerClass}`}>
            <NavMenu routeLinks={routeLinks as RouteLink[]} />
          </div>

          {/* Buttons */}
          <div className={`d-none d-lg-block ${dividerClass}`}>
            <LocaleToggler />
          </div>

          {/* Mini Counter */}
          <div className={`d-none d-md-block ${dividerClass}`}>
            <MiniCounter />
          </div>

          {/* Clock */}
          <div className={`d-none d-sm-block ${dividerClass}`}>
            <Clock currentClockMode={currentClockMode} />
          </div>

          {/* Global Toolbar */}
          <div className="border-start ps-3 me-3">
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
          </div>

          <MenuToggler
            id="offcanvasMenuSettings"
            extraClass="py-0 px-1 position-relative"
          >
            <Avatar />
          </MenuToggler>
          {/* Navbar End */}
        </div>

        <MenuStart
          id="offcanvasMenuNav"
          title={t('Navigation')}
          routeLinks={routeLinks as RouteLink[]}
        />
        <MenuEnd id="offcanvasMenuSettings" title={t('Settings')} />
        <MenuTop id="offcanvasMenuTop" title={t('Menu Top')} />
        <MenuBottom id="offcanvasMenuBottom" title={t('Menu Bottom')} />
      </nav>
    </header>
  )
}
