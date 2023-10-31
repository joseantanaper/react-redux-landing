// Global Navbar is a good place for the "Single Source of Truth".
// Common Parent Component for AppSlice setttings
import { ReactNode } from 'react'
import { Title } from './Title'
import { Icon, IconMap } from '../widgets/Icon'
import { ButtonToggler } from '../widgets/Button'
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
      <nav className="app-main-subnavbar-crystal navbar navbar-expand-sm sticky-top border-bottom shadow-sm">
        <div className="app-navbar-container container-fluid app-subnavbar">
          <div className="row text-truncate">
            {/* Title */}
            <Title title={t(title)} subtitle={t(subtitle!)} type={1} />

            <ButtonToggler
              iconmap={IconMap.More}
              toggle="collapse"
              targetId="subnavbarMenu"
            />
          </div>

          {/* Nav Menu Start */}
          <div className="row col">
            {/* <div className="container-fluid border-bottom d-sm-none"></div> */}
            <div
              className="collapse navbar-collapse px-3 justify-content-end"
              id="subnavbarMenu"
            >
              <ul className="navbar-nav justify-content-end border-start ps-3">
                {toolbar}
              </ul>
              {/* <div className="container-fluid d-sm-none"></div> */}
            </div>
            {/* <div className="container-fluid border-top d-sm-none"></div> */}
            {/* Nav Menu End */}
          </div>
        </div>
      </nav>
    </>
  )
}
