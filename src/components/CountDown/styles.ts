import styled from 'styled-components'
import { c, s } from 'theme'

export const CountContainer = styled(c.Row)`
  align-items: center;
  font-weight: 600;
  font-family: 'Rajdhani', 'Arial', sans-serif;
  margin: 4rem 0;
  animation: ${s.fadeIn} 0.9s ease-in-out,
    ${s.moveIn('-10rem', '0', '0')} 0.5s ease-in-out;
  font-size: 13rem;
  font-size: clamp(10rem, 9rem + 2vw, ${s.textTime});
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
    color: ${s.light300};

    & + span {
      border-left: 0.25rem solid ${s.light200};
    }
  }
`

export const Separator = styled.span`
  font-size: ${s.textSeparator};
  margin: 0 1rem;
  color: ${s.light300};
`

export const Seconds = styled(Minutes)``
