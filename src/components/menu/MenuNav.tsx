import { Icon, IconMap } from '../widgets/Icon'
import { ListItemNav, MenuNavHeaderLink } from './styled-components/ListItemNav'

interface Props {
  id: string
  title: string
}

export const navlinks: Array<MenuNavHeaderLink> = [
  {
    items: [
      {
        iconmap: IconMap.Light,
        label: 'Home',
        to: '/',
      },
      {
        iconmap: IconMap.Dark,
        label: 'Portfolio',
        to: '/portfolio',
      },
      {
        iconmap: IconMap.Home,
        label: 'Todo',
        to: '/todo',
      },
    ],
  },
  {
    iconmap: IconMap.GroupLink,
    label: 'Todo Apps',
    items: [
      { iconmap: IconMap.Portfolio, label: 'Simplest Todo App', to: '/todo' },
    ],
  },
]

export const MenuNav = ({ id, title }: Props) => {
  return (
    <div
      className="offcanvas offcanvas-start border-end shadow"
      tabIndex={-1}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      {/* Header */}
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-dismiss="offcanvas"
        >
          <Icon iconmap={IconMap.MenuNavLeft} />
        </button>
        <h4 className="offcanvas-title" id={`${id}Label`}>
          {title!}
        </h4>
      </div>

      {/* Body START */}
      <div className="offcanvas-body text-wrap ps-1 pe-1 pt-3">
        {/* List Group START */}
        <div
          className="list-group list-group-flush pb-2 app-menu"
          // data-bs-dismiss="offcanvas"
        >
          {navlinks.map((navlink, index) => {
            return (
              <ListItemNav key={index} navlink={navlink} parentIndex={index} />
            )
          })}
        </div>
        {/* List Group END */}
      </div>
      {/* Body END*/}
    </div>
  )
}
