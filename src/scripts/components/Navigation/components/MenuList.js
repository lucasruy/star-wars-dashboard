import React from 'react'
import styled from 'styled-components'

import * as SVG from 'svg'
import { COLORS } from 'utils/CONSTANTS'

const Menu = styled.ul`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0px;

    @media only screen and (min-width: 1024px) {
      margin-top: 50px;
    }
`

const MenuItem = styled.li`
  margin-top: 0;
  width: 25%;

  @media only screen and (min-width: 1024px) {
    margin-top: 20px;
    width: 100%;
  }
`

const SVGItem = styled.i`
    display: block;
    width: calc(100% - 4px);
    height: auto;
    border: 4px solid ${COLORS.GRAY_DARK};
    border-radius: 5px;
    cursor: pointer;

    svg {
      display: block;
      width: 100%;
      height: auto;
      fill: ${COLORS.WHITE};
      background-color: ${COLORS.GRAY_DARK};
    }
`

const MenuList = () => (
  <Menu>
    <MenuItem>
      <SVGItem>
        <SVG.DarthVader />
      </SVGItem>
    </MenuItem>
  </Menu>
)

export default MenuList
