import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;

  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
