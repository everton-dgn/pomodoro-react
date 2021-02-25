import styled from 'styled-components'
import { s } from 'theme'

export const Btn = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 8rem;
  margin-top: 3.2rem;
  font-weight: 500;
  font-size: 2rem;
  background-color: ${s.blue500};
  color: ${s.light100};
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${s.blue600};
  }

  &:focus {
    background-color: ${s.blue700};
  }

  svg {
    margin-left: 1rem;
  }
`
