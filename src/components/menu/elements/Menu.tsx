import { ReactNode } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'

export const enum MenuPosition {
  Start = 'offcanvas-start border-end',
  Top = 'offcanvas-top border-bottom',
  End = 'offcanvas-end border-start',
  Bottom = 'offcanvas-bottom border-top',
}

interface Props {
  id: string
  title: string
  position: MenuPosition
  children: ReactNode
}

export interface MenuProps {
  id: string
  title: string
}

export const Menu = ({ id, title, position, children }: Props) => {
  return (
    <div
      className={`offcanvas ${position} shadow`}
      tabIndex={-1}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      {/* Header */}
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        {position === MenuPosition.Start ? (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-dismiss="offcanvas"
            >
              {MenuPosition.Start && <Icon iconmap={IconMap.MenuStartClose} />}
            </button>
            <h4 className="offcanvas-title" id={`${id}Label`}>
              {title!}
            </h4>
          </>
        ) : (
          <>
            <h4 className="offcanvas-title" id={`${id}Label`}>
              {title!}
            </h4>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-dismiss="offcanvas"
            >
              {position === MenuPosition.Top && (
                <Icon iconmap={IconMap.MenuTopClose} />
              )}
              {position === MenuPosition.End && (
                <Icon iconmap={IconMap.MenuEndClose} />
              )}
              {position === MenuPosition.Bottom && (
                <Icon iconmap={IconMap.MenuBottomClose} />
              )}
            </button>
          </>
        )}
      </div>

      <div className="offcanvas-body text-wrap ps-1 pe-1 pt-2 pb-5">
        {children}
      </div>
    </div>
  )
}
