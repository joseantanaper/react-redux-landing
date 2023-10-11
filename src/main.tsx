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

import { createBrowserRouter, RouterProvider } from "react-router-dom"

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
        path: "contact/:id",
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <Provider store={store}>
        <App />
      </Provider> */}
    </Provider>
  </React.StrictMode>,
)
