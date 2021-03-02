import styled, { css } from 'styled-components'
import { c, s } from 'theme'

export const Overlay = styled(c.Box)`
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  position: fixed;
  height: 100%;
  max-height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.7rem);
  -webkit-backdrop-filter: blur(0.7rem);
  box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.6), 0 0 0.8rem rgba(0, 0, 0, 0.6);
  animation: ${s.glass} 0.5s ease-in-out;
`

export const ContainerModal = styled(c.Box)<{ showAnime: boolean }>`
  background-color: ${s.light100};
  max-width: 40rem;
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  position: relative;
  ${props =>
    props.theme.light500 === `#354161` &&
    css`
      box-shadow: 0 0 7rem rgba(0, 0, 0, 0.5);
    `}

  ${props =>
    !props.showAnime &&
    css`
      animation: ${s.zoom} 0.5s ease-in;
    `};
  ${props =>
    props.showAnime &&
    css`
      animation: ${s.moveUp} 0.3s ease-out;
    `};

  h1 {
    font-size: ${s.textTitleModal};
    color: ${s.blue600};
    text-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.2);
    font-weight: 600;
    background: url('/BgLevelUp.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: ${s.textTitle1};
  }

  p {
    font-size: ${s.textSubtitle2};
    margin-top: 0.4rem;
  }

  button {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    font-size: 0;
    width: 4.1rem;
    height: 4.1rem;
    background-color: transparent;

    svg {
      filter: invert(1);
    }
  }
`
