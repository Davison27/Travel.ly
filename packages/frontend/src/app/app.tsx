// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss'

import { Outlet } from 'react-router-dom'

import Navbar from '../components/NavBar/Navbar'

export function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
