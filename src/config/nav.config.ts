// Move this to MODELS
import { IconMap } from '@components/widgets/Icon'

export interface RouteLink {
  id: string
  url: string
  label: string
  iconmap: IconMap
  items?: RouteLink[]
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
    label: 'Todo List',
    iconmap: IconMap.Todo,
  },
  {
    id: 'miniapps',
    url: '#',
    label: 'Playground',
    iconmap: IconMap.Playground,
    items: [
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List',
        iconmap: IconMap.Todo,
      },
    ],
  },
]
