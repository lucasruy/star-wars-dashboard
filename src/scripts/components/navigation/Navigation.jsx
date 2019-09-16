import React from 'react'
import styled from 'styled-components'

import CONSTANTS from 'utils/CONSTANTS'

import Logo from './components/Logo.jsx'
import MenuList from './components/MenuList.jsx'

const Navbar = styled.nav`
    position: relative;
    background-color: ${CONSTANTS.COLOR.WHITE};
    box-shadow: 2px 0px 20px 5px rgba(0, 0, 0, 0.05);
    padding: 20px;

    &.is-expanded {
        width: 10%;
    }
`

const Navigation = () => (
    <Navbar>
        <Logo />
        <MenuList />
    </Navbar>
)

export default Navigation