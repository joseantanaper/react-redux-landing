import logo from "../logo.svg"
import { Counter } from "../features/menu/Counter"
import { Navbar } from "../features/navbar/Navbar"
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div className="App">
      <Navbar title="App" />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
      </header>
      <Outlet />
    </div>
  )
}

export default Root
