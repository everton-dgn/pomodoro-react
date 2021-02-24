import styled from 'styled-components'
import { s, c } from 'theme'

export const ContainerMain = styled(c.Row)`
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    text-align: center;
  }
`

export const BarGrey = styled(c.Row)`
  height: 15px;
  background-color: ${s.light400};
  border-radius: 20px;
  margin: 0 5px;
  position: relative;
`

export const BarGreen = styled(c.Row)<{ percent: number }>`
  height: 15px;
  background-color: ${s.green300};
  border-radius: 20px;
  width: ${props => props.percent}%;
`

export const CurrentExperience = styled.span<{ percent: number }>`
  display: flex;
  flex-direction: row;
  left: ${props => props.percent}%;
  bottom: 15px;
  position: absolute;
  transform: translateX(-50%);
`
