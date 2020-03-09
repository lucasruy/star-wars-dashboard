import React, { Fragment, memo } from 'react'
import styled from 'styled-components'
import { COLORS } from 'utils/CONSTANTS'

const MainTitle = styled.h2`
  color: ${COLORS.BLUE_LIGTH};
`

const SubTitle = styled.h2`
  color: ${COLORS.TEXT};
  margin-bottom: 25px;
`

const Title = () => (
  <Fragment>
    <MainTitle>Star Wars Dashboard</MainTitle>
    <SubTitle>Search your favorite pearson</SubTitle>
  </Fragment>
)

export default memo(Title)
