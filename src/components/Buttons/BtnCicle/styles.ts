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
  background-image: ${s.lgBlue500};
  color: ${s.light100};
  transition: background 0.3s linear;
  position: relative;
  overflow: hidden;

  &:before {
    background-image: ${s.lgBlue600};
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

  &:after {
    background-image: ${s.lgBlue700};
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

  &:focus {
    &:after {
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
