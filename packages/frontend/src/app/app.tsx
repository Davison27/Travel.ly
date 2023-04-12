// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss'

import { ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/NavBar/Navbar'

export function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </ChakraProvider>
  )
}

export default App
