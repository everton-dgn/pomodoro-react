import styled, { css } from 'styled-components'
import { c, s } from 'theme'
import { ReactComponent as DarkMode } from 'assets/icons/Dark.svg'
import { ReactComponent as LightMode } from 'assets/icons/Light.svg'
import { ReactComponent as Trash } from 'assets/icons/ToClean.svg'

export const ContainerControls = styled(c.Row)`
  align-items: center;
  justify-content: space-between;
  animation: ${s.fadeIn} 0.9s ease-in-out,
    ${s.moveIn('0', '-10rem', '0')} 0.5s ease-in-out;

  span {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;
    cursor: pointer;
    transition: color 0.1s linear;

    &:hover {
      color: ${s.blue600};
    }

    svg {
      margin-left: 1rem;
    }
  }
`

const icons = css`
  width: 2rem;
  height: 2rem;
`

export const Dark = styled(DarkMode)`
  ${icons}
`

export const Light = styled(LightMode)`
  ${icons}
  .colorSvg {
    ${({ theme }) =>
      theme.light300 === `#8ab4ff` &&
      css`
        fill: ${s.light300};
      `}
  }
`

export const ToClean = styled(Trash)`
  ${icons}
  .colorSvg {
    ${({ theme }) =>
      theme.light300 === `#8ab4ff` &&
      css`
        fill: ${s.light300};
      `}
  }
`
