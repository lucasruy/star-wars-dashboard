import React from 'react'
import styled from 'styled-components'

import CONSTANTS from 'utils/CONSTANTS'

import DarthVaderSVG from '../svg/DarthVaderSVG'

const {
    COLORS: {
        GRAY_DARK,
        WHITE
    }
} = CONSTANTS

const Menu = styled.ul`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    list-style: none;
    padding: 0px;
`

const MenuItem = styled.li`
    margin-top: 20px;
    width: 100%;
`

const SVGItem = styled.i`
    /* position: absolute; */
    /* transform: translateX(-50%); */
    display: block;
    width: calc(100% - 4px);
    height: auto;
    border: 4px solid ${GRAY_DARK};
    border-radius: 5px;
    cursor: pointer;

    svg {
      display: block;
      width: 100%;
      height: auto;
      fill: ${WHITE};
      background-color: ${GRAY_DARK};
    }
`

const MenuList = () => (
    <Menu>
        <MenuItem>
            <SVGItem>
                <DarthVaderSVG />
            </SVGItem>
        </MenuItem>
    </Menu>
)

export default MenuList
