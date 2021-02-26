import styled from 'styled-components'
import { s } from 'theme'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(30rem, 20rem + 27vw, 26rem), 1fr)
  );
  grid-gap: 2rem calc(2rem + 2.5vw);
`

export const Col1 = styled.section``

export const Col2 = styled.section`
  background-color: ${s.light100};
  border-radius: 0.6rem;
  padding: 3rem 2rem 4rem 2rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.05);
`
