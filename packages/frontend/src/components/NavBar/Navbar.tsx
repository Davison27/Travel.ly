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
          <NavLink className="NavLink" to="/user">
            User
          </NavLink>
          <NavLink className="NavLink" to="/travels">
            Travels
          </NavLink>
          <NavLink className="NavLink" to="/travelsList">
            Travels List
          </NavLink>
          <NavLink className="NavLink" to="/budget">
            Budgets
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
