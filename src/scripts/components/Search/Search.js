import React from 'react'
import styled from 'styled-components'

import { Input } from 'components/Input'
import { Button } from 'components/Button'

const Fieldset = styled.div`
  position: relative;
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
`

const Search = () => {
  return (
    <Fieldset>
      <Input />
      <ButtonWrapper>
        <Button>Search</Button>
      </ButtonWrapper>
    </Fieldset>
  )
}

export default Search
