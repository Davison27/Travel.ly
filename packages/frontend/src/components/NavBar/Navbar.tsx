/* eslint-disable react/jsx-no-bind */
import './Navbar.scss'

import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import { TokenPayload } from 'google-auth-library'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

import { storage } from '../../utils/functions/storage'
import Logo from '../Logo/Logo'

const Navbar = () => {
  const data: TokenPayload = jwt_decode(storage.get('token'))
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
                name={data.given_name}
                boxSize="3.5em"
                src={data.picture}
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
