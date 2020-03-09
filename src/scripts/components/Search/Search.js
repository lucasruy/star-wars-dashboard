import React, { memo } from 'react'
import styled from 'styled-components'

import * as SVG from 'svg'
import { Input } from 'components/Input'
import { ButtonSearch } from 'components/Button'

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
        <ButtonSearch>
          <SVG.Search />
        </ButtonSearch>
      </ButtonWrapper>
    </Fieldset>
  )
}

export default memo(Search)
