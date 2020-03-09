import React from 'react'
import styled from 'styled-components'

import{ COLORS, BREAKPOINTS } from 'utils/CONSTANTS'

import Logo from './components/Logo.js'
import MenuList from './components/MenuList.js'

const Navbar = styled.nav`
    position: relative;
    background-color: ${COLORS.WHITE};
    box-shadow: 2px 0px 20px 5px rgba(0, 0, 0, 0.05);
    padding: 20px;

    &.is-expanded {
        width: 10%;
    }

    @media only screen and (min-width: ${BREAKPOINTS.MOBILE}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 75px;
      padding: 16px;
    }

    @media only screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
      display: block;
      width: 3%;
      height: 100vh;
      padding: 5px;
    }

    @media only screen and (min-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
      padding: 20px;
    }
`

const Navigation = () => (
  <Navbar>
    <Logo />
    <MenuList />
  </Navbar>
)

export default Navigation
