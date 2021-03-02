import styled from 'styled-components'
import { c, s } from 'theme'
import { ReactComponent as ArrowUp } from 'assets/icons/ArrowUp.svg'

export const ProfileContainer = styled(c.Row)`
  align-items: center;
  animation: ${s.fadeIn} 0.9s ease-in-out,
    ${s.moveIn('0', '-10rem', '0')} 0.5s ease-in-out;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-right: 1.5rem;
    box-shadow: 0 0 1.6rem #00083021;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 500;
      font-size: ${s.textTitle3};
      color: ${s.dark500};
    }

    span {
      font-size: ${s.textSubtitle4};
      color: ${s.light300};
    }
  }
`

export const Arrow = styled(ArrowUp).attrs({ alt: 'Level' })`
  margin-right: 0.5rem;
`
