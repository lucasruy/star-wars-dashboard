import styled from 'styled-components'
import { COLORS, TRANSITION } from 'utils/CONSTANTS'

export const Input = styled.input`
  display: block;
  width: 100%;

  padding: 15px;
  margin: 10px 0px;

  border: 1px solid ${COLORS.BLUE_LIGTH};
  border-radius: 5px;

  color: ${COLORS.BLUE_LIGTH};
  transition: ${TRANSITION.DEFAULT};

  &::placeholder {
    color: ${COLORS.TEXT};
  }

  &:focus {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    color: ${COLORS.BLUE_LIGTH};
    outline: none;
  }
`
