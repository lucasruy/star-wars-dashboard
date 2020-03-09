import React from 'react'
import styled from 'styled-components'

import * as SVG from 'svg'
import { COLORS } from 'utils/CONSTANTS'

const LogoStyled = styled.i`
  display: block;
  width: 20%;
  height: 40px;
  cursor: pointer;

  svg {
    width: 100%;
    height: auto;
    fill: ${COLORS.BLUE_LIGTH};
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
`

const Logo = () => (
  <LogoStyled>
    <SVG.Logo />
  </LogoStyled>
)

export default Logo
