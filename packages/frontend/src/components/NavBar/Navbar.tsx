/* eslint-disable react/jsx-no-bind */
import './Navbar.scss'

import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="imageWrapper">
        <img
          src={require('../../assets/images/banner.jpg')}
          alt="banner"
          className="banner"
        />
      </div>

      <div className="logoWrapper">
        <Link to="/user">
          <Wrap className="avatarWrapper">
            <WrapItem>
              <p className="welcomeMessage">Bienvenido, David!</p>
              <Avatar
                name="David"
                boxSize="3.5em"
                src="https://bit.ly/dan-abramov"
              />
            </WrapItem>
          </Wrap>
        </Link>
        <div id="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
