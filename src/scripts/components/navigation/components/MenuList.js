import React from 'react'
import styled from 'styled-components'

import CONSTANTS from 'utils/CONSTANTS'

import DarthVaderSVG from '../svg/DarthVaderSVG'

const Menu = styled.ul`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

const MenuItem = styled.li`
    margin: 20px 0px 0px;
`

const SVGItem = styled.i`
    position: absolute;
    transform: translateX(-50%);

    border: 4px solid ${CONSTANTS.COLOR.GRAY_DARK};
    border-radius: 5px;
    cursor: pointer;

    svg {
      display: block;
      padding: 4px;

      background-color: ${CONSTANTS.COLOR.GRAY_DARK};
      fill: ${CONSTANTS.COLOR.WHITE};
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
