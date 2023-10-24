// Global Navbar is a good place for the "Single Source of Truth".
// Common Parent Component for AppSlice setttings
import { ReactNode } from 'react'
import { Title } from './Title'
import { Icon, IconMap } from '../widgets/Icon'
import { MenuToggler } from '../toggler/MenuToggler'
import { MiniCounter } from '../toggler/MiniCounter'
import { NavMenu } from './NavMenu'
import { RouteLink } from '@/config/nav.config'
import { routeLinks } from '@/config/nav.config'
import { t } from 'i18next'

interface Props {
  title: string
  subtitle?: string
  toolbar?: ReactNode
}

export const Subnavbar = ({ title, subtitle, toolbar }: Props) => {
  return (
    <>
      <nav
        className="app-main-subnavbar-crystal navbar navbar-expand-sm sticky-top border-bottom shadow-sm"
        style={{}}
      >
        <div className="container-fluid text-truncate">
          {/* Title */}
          <Title title={t(title)} subtitle={t(subtitle!)} type={1} />

          <MenuToggler
            id="subnavbarMenu"
            iconmap={IconMap.More}
            toggleMode="collapse"
            extraClass="bg-body"
          />
        </div>

        {/* Nav Menu Start */}
        <div
          className="collapse navbar-collapse px-3 justify-content-end"
          id="subnavbarMenu"
        >
          <ul className="navbar-nav border-start ps-3">
            <li className="nav-item">
              <hr />
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <br />
            </li>
          </ul>
        </div>
        {/* Nav Menu End */}
      </nav>

      {/* <nav className="navbar app-main-subnavbar navbar-expand-md app-main-subnavbar sticky-top border-bottom shadow-sm text-truncate ps-3">
        <div className="container-fluid text-truncate">

          <Title title={title} subtitle={subtitle} type={1} />
          <button
            className="navbar-toggler position-fixed border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ right: '12px' }}
          >
            <Icon id={IconMap.More} />
          </button>
        </div> */}

      {/* <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {toolbar}
          </div>
        </div>
      </nav> */}
    </>
  )
}
