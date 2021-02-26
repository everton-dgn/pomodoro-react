import styled from 'styled-components'
import { c, s } from 'theme'
import { ReactComponent as ArrowUp } from 'assets/img/icons/ArrowUp.svg'

export const ProfileContainer = styled(c.Row)`
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-right: 1.5rem;
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
      color: ${s.dark500};
    }
  }
`

export const Arrow = styled(ArrowUp).attrs({ alt: 'Level' })`
  margin-right: 0.5rem;
`
