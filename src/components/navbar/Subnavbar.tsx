// Global Navbar is a good place for the "Single Source of Truth".
// Common Parent Component for AppSlice setttings
import { ReactNode } from 'react'
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
  toolbar?: ReactNode
}

export const Subnavbar = ({ title, subtitle, toolbar }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg app-main-subnavbar sticky-top border-bottom shadow-sm text-truncate mb-5">
      <div
        className="container-fluid"
        style={{
          height: '56px',
          maxHeight: '56px',
          minHeight: '56px',
        }}
      >
        {/* Title */}
        <Title title={title} subtitle={subtitle} type={1} />
        <button
          className="navbar-toggler position-fixed border-0 d-lg-none"
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
      </div>

      {/* Menu */}
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {toolbar}
        </div>
      </div>
    </nav>
  )
}
