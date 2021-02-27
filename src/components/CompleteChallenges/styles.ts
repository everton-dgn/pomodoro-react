import styled from 'styled-components'
import { c, s } from 'theme'

export const ChallengesContainer = styled(c.Row)`
  align-items: center;
  margin: 3rem 0;
  border-bottom: 0.15rem solid ${s.light400};
  justify-content: space-between;
  padding-bottom: 1rem;

  p {
    font-weight: 400;
    font-size: ${s.textTitle5};
  }

  span {
    font-weight: 500;
    font-size: ${s.textTitle3};
  }
`
