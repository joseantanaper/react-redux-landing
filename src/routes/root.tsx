// import logo from "../logo.svg"
// import { Counter } from "../features/menu/Counter"
import { appConfig } from '../config/app.config'
import { Navbar } from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className="App">
      <Navbar title={appConfig.title} subtitle={appConfig.subtitle} />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
      </header>
      <Outlet />
    </div>
  )
}

export default Root
