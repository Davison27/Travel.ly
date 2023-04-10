// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Outlet } from 'react-router-dom'

import Navbar from '../components/NavBar/Navbar'

export function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div className="App-body">
        <Navbar />
        <main className="App-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
