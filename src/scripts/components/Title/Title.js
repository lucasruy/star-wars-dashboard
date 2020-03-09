import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'utils/CONSTANTS'

const Wrapper = styled.div`
  margin-left: 50px;
`

const MainTitle = styled.h2`
  color: ${COLORS.BLUE_LIGTH};
`

const SubTitle = styled.h2`
  color: ${COLORS.TEXT};
  margin-bottom: 25px;
`

const Title = () => (
  <Wrapper>
    <MainTitle>Star Wars Dashboard</MainTitle>
    <SubTitle>Search your favorite pearson</SubTitle>
  </Wrapper>
)

export default Title
