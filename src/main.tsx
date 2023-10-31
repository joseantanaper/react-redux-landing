import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

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
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/miniapps/counter',
        element: <Counter />,
      },
      {
        path: '/miniapps/todo',
        element: <Todo />,
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
