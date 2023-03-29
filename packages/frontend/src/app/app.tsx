// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom'

import Budget from '../pages/Budget/Budget'
import SignIn from '../pages/SignIn/SignIn'
import Travels from '../pages/Travels/Travels'
import TravelsList from '../pages/TravelsList/TravelsList'
import User from '../pages/User/User'

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/travels" element={<Travels />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/budget" element={<Budget />}></Route>
        <Route path="/travelsList" element={<TravelsList />}></Route>
      </Routes>
    </>
  )
}

export default App
