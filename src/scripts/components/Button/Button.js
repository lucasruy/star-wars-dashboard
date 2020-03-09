import styled from 'styled-components'
import { COLORS, TRANSITION } from 'utils/CONSTANTS'

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${COLORS.BLUE_LIGTH};
  background-color: transparent;
  color: ${COLORS.WHITE};
  cursor: pointer;
  transition: ${TRANSITION.DEFAULT};

  &:focus { outline: none }
  &:active { transform: translateY(1px) }
`

export const ButtonSearch = styled(Button)`
  padding: 0px;
  background-color: ${COLORS.BLUE_LIGTH};

  svg {
    display: block;
    width: 30px;
    height: 30px;
    padding: 4px;
    fill: ${COLORS.WHITE};
  }
`
