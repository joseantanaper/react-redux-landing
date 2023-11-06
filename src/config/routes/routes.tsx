import Index from '@/routes'
import Portfolio from '@/routes/portfolio'
import Counter from '@/routes/miniapps/counter'
import Todo from '@/routes/miniapps/todo'
import { IconMap } from '@/components/widgets/Icon'
import { RouteObject } from 'react-router-dom'

export const enum routePath {
  HOME = '/',
  PORTFOLIO = '/portfolio',
  TODO = '/miniapps/todo',
  COUNTER = '/miniapps/counter',
}
export const routes = [
  {
    path: '/',
    element: <Index />,
    loader: () => {
      return {
        title: 'app:home:title',
        description: 'app:home:description',
        iconmap: IconMap.Home,
      }
    },
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
    loader: () => {
      return {
        title: 'app:portfolio:title',
        subtitle: 'app:portfolio:subtitle',
        description: 'app:portfolio:description',
        iconmap: IconMap.Portfolio,
      }
    },
  },
  {
    path: '/miniapps/counter',
    element: <Counter />,
    loader: () => {
      return {
        title: 'Counter',
        subtitle: 'app:counter:subtitle',
        description: 'app:counter:description',
        iconmap: IconMap.Counter,
      }
    },
  },
  {
    path: '/miniapps/todo',
    element: <Todo />,
    loader: () => {
      return {
        title: 'ToDo',
        subtitle: 'app:todo:subtitle',
        description: 'app:todo:description',
        iconmap: IconMap.Task,
      }
    },
  },
]

const getRouteByPath = (path: string): RouteLink => {
  return {
    ...routes.filter((route) => route.path === path)[0].loader(),
    url: path,
  }
}

export interface RouteLink {
  // id?: string
  url: string
  title: string
  subtitle?: string
  description?: string
  iconmap: IconMap
  items?: RouteLink[]
  parent?: RouteLink
}

export const routeLinks: RouteLink[] = [
  getRouteByPath(routePath.HOME),
  getRouteByPath(routePath.PORTFOLIO),
  getRouteByPath(routePath.TODO),
  getRouteByPath(routePath.COUNTER),
  {
    url: '#0',
    title: 'Playground',
    iconmap: IconMap.Folder,
    items: [getRouteByPath(routePath.TODO), getRouteByPath(routePath.COUNTER)],
  },
  {
    url: '#1',
    title: 'Playground Plus',
    iconmap: IconMap.Folder,
    items: [
      { ...getRouteByPath(routePath.TODO), title: 'ToDo with title changed' },

      {
        ...getRouteByPath(routePath.COUNTER),
        title: 'Counter with title updated',
      },
    ],
  },
]

export const moreLinks = [
  {
    url: 'https://www.linkedin.com/in/josean/',
    title: 'LinkedIn',
    iconmap: IconMap.Portfolio,
  },
  {
    url: 'https://github.com/joseantanaper/',
    title: 'GitHub',
    iconmap: IconMap.GitHub,
  },
  {
    url: 'https://gitlab.com/joseantanaper',
    title: 'GitLab',
    iconmap: IconMap.GitLab,
  },
  {
    url: 'https://www.youtube.com/channel/UCJv0Ru8VQr5z_mvi6ZJKp4A/',
    title: 'YouTube',
    iconmap: IconMap.YouTube,
  },
]
