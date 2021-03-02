import styled, { css } from 'styled-components'
import { s } from 'theme'

export const Btn = styled.button<{ isActive?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 8rem;
  margin-top: 3.2rem;
  font-weight: 500;
  font-size: 2rem;
  color: ${s.lightTextBtn};
  position: relative;
  overflow: hidden;
  background-image: ${props => (props.isActive ? s.lgBlue500 : s.lgRed700)};
  ${props =>
    props.isActive &&
    css`
      animation: ${s.fadeIn} 0.9s ease-in-out,
        ${s.moveIn('0', '10rem', '0')} 0.5s ease-in-out;
    `};

  &:not(:disabled):before {
    background-image: ${props => (props.isActive ? s.lgBlue600 : s.lgRed600)};
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

  &:not(:disabled):hover {
    &:before {
      opacity: 1;
    }
  }

  svg {
    margin-left: 1rem;
  }

  span {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const BtnFinished = styled(Btn)`
  background-image: ${s.lgGreen700};
  cursor: not-allowed;
`
