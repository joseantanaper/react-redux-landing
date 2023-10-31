// Move this to MODELS
import { IconMap } from '@components/widgets/Icon'

export interface RouteLink {
  id: string
  url: string
  label: string
  iconmap: IconMap
  items?: RouteLink[]
  parent?: RouteLink
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
    id: 'playground',
    url: '#',
    label: 'Playground',
    iconmap: IconMap.Playground,
    items: [
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List again',
        iconmap: IconMap.Todo,
      },
      {
        id: 'counter',
        url: '/miniapps/counter',
        label: 'Counter+',
        iconmap: IconMap.Todo,
      },
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List more',
        iconmap: IconMap.Todo,
      },
      {
        id: 'counter',
        url: '/miniapps/counter',
        label: 'Counter+ repeat',
        iconmap: IconMap.Todo,
      },
    ],
  },
  {
    id: 'playgroundplus',
    url: '#',
    label: 'Playground plus extra text for testing purposes',
    iconmap: IconMap.Playground,
    items: [
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List again',
        iconmap: IconMap.Todo,
      },
      {
        id: 'counter',
        url: '/miniapps/counter',
        label: 'Counter+',
        iconmap: IconMap.Todo,
      },
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List more',
        iconmap: IconMap.Todo,
      },
      {
        id: 'counter',
        url: '/miniapps/counter',
        label: 'Counter+ repeat',
        iconmap: IconMap.Todo,
      },
    ],
  },
]
