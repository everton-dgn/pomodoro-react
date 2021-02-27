import styled from 'styled-components'
import { c, s } from 'theme'

export const CountContainer = styled(c.Row)`
  align-items: center;
  font-weight: 600;
  font-family: 'Rajdhani', 'Arial', sans-serif;
  font-size: clamp(10rem, 9rem + 2vw, ${s.textTime});
  margin: 4rem 0;
`

export const Minutes = styled(c.Row)`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.05);
  border-radius: 0.6rem;
  overflow: hidden;

  span {
    background-color: ${s.light100};
    display: flex;
    flex: 1;
    justify-content: center;

    & + span {
      border-left: 0.25rem solid ${s.light200};
    }
  }
`

export const Separator = styled.span`
  font-size: ${s.textSeparator};
  margin: 0 1rem;
`

export const Seconds = styled(Minutes)``
