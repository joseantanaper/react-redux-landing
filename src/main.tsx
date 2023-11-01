import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { IconMap } from './components/widgets/Icon'

import { store } from '@app/store'
import '@style/bootstrap.scss'
import '@bootstrap-js'
import Root from '@routes/root'
import Error from '@routes/error'
import Index from '@routes/index'
import Portfolio from '@routes/portfolio/index'
import Todo from '@routes/miniapps/todo/index'
import Counter from '@routes/miniapps/counter/index'

import {
  // BrowserRouterProps,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import '@config/i18n'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Index />,
        loader: () => {
          return {
            title: 'Home',
            subtitle: 'This is the Home description',
            iconmap: IconMap.Home,
          }
        },
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
        loader: () => {
          return {
            title: 'Portfolio',
            subtitle: 'This is the Portfolio description',
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  </React.StrictMode>
)
