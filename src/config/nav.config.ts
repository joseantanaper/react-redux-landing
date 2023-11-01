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
    label: 'Todo List with long long long text to check menu',
    iconmap: IconMap.Task,
  },
  {
    id: 'playground',
    url: '#',
    label: 'Playground',
    iconmap: IconMap.Folder,
    items: [
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List again',
        iconmap: IconMap.Task,
      },
      {
        id: 'counter',
        url: '/miniapps/counter',
        label: 'Counter+',
        iconmap: IconMap.Counter,
      },
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List more',
        iconmap: IconMap.Task,
      },
      {
        id: 'counter',
        url: '/miniapps/counter',
        label: 'Counter+ repeat',
        iconmap: IconMap.Counter,
      },
    ],
  },
  {
    id: 'playgroundplus',
    url: '#',
    label: 'Playground plus extra text for testing purposes',
    iconmap: IconMap.Folder,
    items: [
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List again',
        iconmap: IconMap.Task,
      },
      {
        id: 'counter',
        url: '/miniapps/counter',
        label:
          'Counter+ with super super long long text title for testing only',
        iconmap: IconMap.Counter,
      },
      {
        id: 'todo',
        url: '/miniapps/todo',
        label: 'Todo List more with long text title',
        iconmap: IconMap.Task,
      },
      {
        id: 'counter',
        url: '/miniapps/counter',
        label: 'Counter+ repeat',
        iconmap: IconMap.Counter,
      },
    ],
  },
]

export const moreLinks = [
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/josean/',
    label: 'LinkedIn',
    iconmap: IconMap.Portfolio,
  },
  {
    id: 'github',
    url: 'https://github.com/joseantanaper',
    label: 'GitHub',
    iconmap: IconMap.GitHub,
  },
  {
    id: 'gitlab',
    url: 'https://gitlab.com/joseantanaper',
    label: 'GitLab',
    iconmap: IconMap.GitLab,
  },
  {
    id: 'youtube',
    url: 'https://www.youtube.com/channel/UCJv0Ru8VQr5z_mvi6ZJKp4A',
    label: 'YouTube Channel',
    iconmap: IconMap.YouTube,
  },
]
