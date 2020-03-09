import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  padding-left: 50px;
`

const Group = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

Group.propTypes = {
  children: PropTypes.node.isRequired
}

export default memo(Group)
