import styled, { css } from 'styled-components'
import { s, c } from 'theme'

export const ContainerMain = styled(c.Row)`
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  margin-bottom: calc(3rem + 4vw);
  animation: ${s.fadeIn} 0.6s ease-in-out, ${s.zoom} 0.5s ease-in-out;

  span {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    text-align: center;
  }
`

export const BarGrey = styled(c.Row)`
  height: 1.5rem;
  background-color: ${s.light500};
  border-radius: 4rem;
  margin: 0 0.5rem;
  position: relative;
`

export const BarGreen = styled(c.Row)<{ percent: number }>`
  height: 1.5rem;
  background-image: ${s.lgGreen400};
  border-radius: 4rem;
  width: ${props => props.percent}%;
`

export const CurrentExperience = styled.span<{ percent: number }>`
  background-color: ${s.light300};
  color: ${s.light200};
  ${({ theme }) =>
    theme.light200 === `#151A30` &&
    css`
      font-weight: 600;
    `}
  padding: 0.5rem 0.9rem;
  border-radius: 9rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  left: ${props => props.percent}%;
  bottom: 3rem;
  position: absolute;
  transform: translateX(-50%);

  &:before {
    content: '';
    display: block;
    position: absolute;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid ${s.light300};
    margin-top: 2.8rem;
  }
`
