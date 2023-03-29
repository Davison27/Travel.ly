/* eslint-disable react/jsx-no-bind */
import './Navbar.scss'

import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <>
      <img
        src={require('../../assets/images/banner.jpg')}
        alt="banner"
        className="Banner"
      ></img>
      <div id="logo">
        <Logo />
      </div>
      <NavLink
        to="/user"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
      >
        User
      </NavLink>
      <NavLink
        to="/travels"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
      >
        Travels
      </NavLink>
      <NavLink
        to="/travelsList"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
      >
        Travels List
      </NavLink>
      <NavLink
        to="/budget"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
      >
        Budgets
      </NavLink>
    </>
  )
}

export default Navbar
