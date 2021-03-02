import styled from 'styled-components'
import { c, s } from 'theme'

export const ChallengesContainer = styled(c.Row)`
  align-items: center;
  margin: 3rem 0 1.6rem 0;
  border-bottom: 0.15rem solid ${s.light400};
  justify-content: space-between;
  padding-bottom: 1rem;
  animation: ${s.fadeIn} 0.9s ease-in-out,
    ${s.moveIn('0', '-10rem', '0')} 0.5s ease-in-out;

  p {
    font-weight: 400;
    font-size: ${s.textTitle5};
  }

  span {
    font-weight: 500;
    font-size: ${s.textTitle3};
    color: ${s.light300};
  }
`
