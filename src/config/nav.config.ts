// Move this to MODELS
import { IconMap } from '@components/widgets/Icon'
import { MenuNavHeaderLink } from '@components/menu/elements/ListItemNav'

// TODO: Improve this structure
export const navlinks: Array<MenuNavHeaderLink> = [
  {
    items: [
      {
        iconmap: IconMap.Home,
        label: 'Home',
        to: '/',
      },
      {
        iconmap: IconMap.Portfolio,
        label: 'Portfolio',
        to: '/portfolio',
      },
      {
        iconmap: IconMap.ToDo,
        label: 'Todo',
        to: '/miniapps/todo',
      },
    ],
  },
  {
    iconmap: IconMap.GroupLink,
    label: 'Mini Apps',
    items: [
      {
        iconmap: IconMap.ToDo,
        label: 'Simplest Todo App',
        to: '/miniapps/todo',
      },
      { iconmap: IconMap.ToDo, label: 'Counter', to: '/miniapps/counter' },
    ],
  },
  {
    iconmap: IconMap.GroupLink,
    label: 'Todo Apps',
    items: [
      {
        iconmap: IconMap.ToDo,
        label: 'Simplest Todo App',
        to: '/miniapps/todo',
      },
    ],
  },
  {
    iconmap: IconMap.GroupLink,
    label: 'Todo Apps',
    items: [
      {
        iconmap: IconMap.ToDo,
        label: 'Simplest Todo App',
        to: '/miniapps/todo',
      },
    ],
  },
  {
    iconmap: IconMap.GroupLink,
    label: 'Todo Apps',
    items: [
      {
        iconmap: IconMap.ToDo,
        label: 'Simplest Todo App',
        to: '/miniapps/todo',
      },
    ],
  },
]

export interface RouteLink {
  id: string
  url: string
  label: string
  iconmap: IconMap
  items?: RouteLink
}

export const routeLinks = [
  { id: 'home', url: '/', label: 'Home', iconmap: IconMap.Home },
  {
    id: 'portfolio',
    url: '/portfolio',
    label: 'Portfolio',
    iconmap: IconMap.Portfolio,
  },
  {
    id: 'todo',
    url: '/miniapps/todo',
    label: 'ToDo',
    iconmap: IconMap.ToDo,
  },
  {
    id: 'miniapps',
    url: '#',
    label: 'Mini Apps',
    iconmap: IconMap.GroupLink,
    items: [
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List',
        iconmap: IconMap.ToDo,
      },
    ],
  },
]
