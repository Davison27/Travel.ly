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
import { NavLink } from 'react-router-dom'

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
        <Wrap className="avatarWrapper">
          <WrapItem>
            <p className="welcomeMessage">Welcome, David!</p>
            <Avatar
              name="David"
              boxSize="3.5em"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
        </Wrap>
        <div id="logo">
          <Logo />
        </div>

        <div className="routes">
          <NavLink
            className="navLink"
            to="/user"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#DCDCDC' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            User
          </NavLink>
          <NavLink
            className="navLink"
            to="/travels"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#DCDCDC' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            Travels
          </NavLink>
          <NavLink
            className="navLink"
            to="/travelsList"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#DCDCDC' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            Travels List
          </NavLink>
          <NavLink
            className="navLink"
            to="/budget"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#DCDCDC' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            Budgets
          </NavLink>
          <NavLink
            className="navLink"
            to="/input"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#DCDCDC' : '#ffffff',
              borderRadius: '10px',
            })}
          >
            Input
          </NavLink>
        </div>
        <div className="routes">
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
    </div>
  )
}

export default Navbar
