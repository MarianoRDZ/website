import React from 'react'
import { Nav, Bars, NavMenu, NavLink } from './Elements'

const Navbar = () => {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink exact to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/resumee" activeStyle>
          Resumee
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact
        </NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Navbar
