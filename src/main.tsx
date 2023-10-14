import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
// import App from "./App"
import "./style/bootstrap-custom.scss"
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Root from "./routes/root"
import Error from "./routes/error"
import Contact from "./routes/contact"
import Index from "./routes/index"
import Portfolio from "./routes/portfolio/index"
import Todo from "./routes/todo/index"

import {
  // BrowserRouterProps,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact/:id",
        element: <Contact />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
