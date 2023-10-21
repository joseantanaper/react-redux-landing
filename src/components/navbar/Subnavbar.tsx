// Global Navbar is a good place for the "Single Source of Truth".
// Common Parent Component for AppSlice setttings
import { Title } from './Title'
import { Icon, IconMap } from '../widgets/Icon'
import { MiniCounter } from '../toggler/MiniCounter'
import { NavMenu } from './NavMenu'
import { RouteLink } from '@/config/nav.config'
import { routeLinks } from '@/config/nav.config'
import { t } from 'i18next'

interface Props {
  title: string
  subtitle?: string
}

export const Subnavbar = ({ title, subtitle }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg app-main-subnavbar sticky-top text-truncate mb-5">
      <div className="container-fluid  w-100" style={{ height: '50px' }}>
        {/* Title */}
        <Title title={title} subtitle={subtitle} type={1} />
        <button
          className="navbar-toggler position-fixed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ right: '12px', top: '5px' }}
        >
          <Icon id={IconMap.More} />
        </button>
      </div>

      {/* Menu */}
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <hr className="dropdown-divider" />
            </li>
            <li className="nav-item">
              <hr className="dropdown-divider" />
            </li>
            <li className="nav-item">
              <hr className="text-body-tertiary" />
            </li>

            <li className="nav-item">
              <a className="btn" href="/">
                AAAAA
              </a>
            </li>
            <li className="nav-item">
              <button className="btn">AHA</button>
            </li>
            <li className="nav-item">
              <a className="btn" href="/">
                AAAAA
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" href="/">
                AAAAA
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" href="/">
                AAAAA
              </a>
            </li>

            <li className="nav-item">
              <br />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
