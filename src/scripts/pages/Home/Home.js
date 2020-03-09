import React from 'react'
import styled from 'styled-components'
import{ BREAKPOINTS } from 'utils/CONSTANTS'

import { Navigation } from 'components/Navigation'
import { Title } from 'components/Title'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    flex-direction: row;
    justify-content: inherit;
  }
`

const Home = () => (
  <Wrapper>
    <Navigation />
    <Title />
  </Wrapper>
)

export default Home
