import styled from 'styled-components'
import { s, c } from 'theme'

export const ContainerMain = styled(c.Row)`
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  span {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    text-align: center;
  }
`

export const BarGrey = styled(c.Row)`
  height: 1.5rem;
  background-color: ${s.light400};
  border-radius: 2rem;
  margin: 0 0.5rem;
  position: relative;
`

export const BarGreen = styled(c.Row)<{ percent: number }>`
  height: 1.5rem;
  background-image: ${s.lgGreen400};
  border-radius: 2rem;
  width: ${props => props.percent}%;
`

export const CurrentExperience = styled.span<{ percent: number }>`
  display: flex;
  flex-direction: row;
  left: ${props => props.percent}%;
  bottom: 1.5rem;
  position: absolute;
  transform: translateX(-50%);
`
