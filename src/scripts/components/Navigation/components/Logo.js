import React from 'react'
import styled from 'styled-components'

import * as SVG from 'svg'

const LogoStyled = styled.i`
  display: block;
  width: 20%;
  height: 40px;

  background-image: url('../../../images/logo.png');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100%;

  cursor: pointer;

  svg {
    width: 100%;
    height: auto;
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
