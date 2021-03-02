import styled from 'styled-components'
import { s } from 'theme'

export const BtnTask = styled.button<{ state: boolean }>`
  background-image: ${props => (props.state ? s.lgGreen700 : s.lgRed700)};
  color: ${s.lightTextBtn};
  height: 5rem;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5rem;
  position: relative;
  overflow: hidden;

  &:before {
    background-image: ${props => (props.state ? s.lgGreen500 : s.lgRed600)};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    transition: opacity 0.2s linear;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  span {
    z-index: 2;
  }
`
