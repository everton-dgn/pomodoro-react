import styled from 'styled-components'
import { s, c } from 'theme'

export const Header = styled.header`
  border-bottom: 0.15rem solid ${s.light400};
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  font-weight: 600;
  font-size: ${s.textTitle3};
  color: ${s.blue600};
  text-align: center;
`

export const Main = styled.main`
  margin-bottom: 2rem;
  text-align: center;

  svg {
    margin: 1rem 0 4rem 0;
  }

  h1 {
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
`

export const InactiveBox = styled(c.Box)`
  justify-content: center;
  align-content: center;
  height: 100%;
  text-align: center;

  strong {
    font-size: ${s.textTitle2};
    font-weight: 500;
    margin-bottom: 3rem;
  }

  svg {
    margin: 1rem auto 3rem auto;
  }

  p {
    margin: 0 3rem;
    font-size: ${s.textSubtitle1};
  }
`
