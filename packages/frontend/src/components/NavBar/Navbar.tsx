/* eslint-disable react/jsx-no-bind */
import './Navbar.scss'

import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="imageWrapper">
        <img
          src={require('../../assets/images/banner.jpg')}
          alt="banner"
          className="Banner"
        />
      </div>
      <div className="LogoWrapper">
        <div id="logo">
          <Logo />
        </div>
        <div className="Routes">
          <NavLink
            className="navLink"
            to="/user"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#c2c2c2' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            User
          </NavLink>
          <NavLink
            className="navLink"
            to="/travels"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#c2c2c2' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            Travels
          </NavLink>
          <NavLink
            className="navLink"
            to="/travelsList"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#c2c2c2' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            Travels List
          </NavLink>
          <NavLink
            className="navLink"
            to="/budget"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#c2c2c2' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            Budgets
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
