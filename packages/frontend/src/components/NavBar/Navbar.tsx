/* eslint-disable react/jsx-no-bind */
import './Navbar.scss'

import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'

import { userData } from '../../Data/user-data'
import Logo from '../Logo/Logo'

const Navbar = () => {
  const user = userData.map((data: any) => <>{data.name}</>)

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
              <p className="welcomeMessage">Bienvenido, {user}!</p>
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

        <Breadcrumb
          className="breadcumb"
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem isCurrentPage className="breadcumbItem">
            <BreadcrumbLink as={NavLink} to="/travels">
              Travels
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default Navbar
