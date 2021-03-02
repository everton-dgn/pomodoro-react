import styled from 'styled-components'
import { s, c } from 'theme'

export const Main = styled(c.Container)`
  margin: 5vw auto;
  height: 100%;
  justify-content: start;
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(30rem, 20rem + 27vw, 26rem), 1fr)
  );
  grid-gap: 6rem calc(2rem + 2.5vw);
`

export const Col1 = styled.section``

export const Col2 = styled.section`
  background-color: ${s.light100};
  border-radius: 0.6rem;
  padding: 2rem 2rem 3rem 2rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  animation: ${s.fadeIn} 0.9s ease-in-out,
    ${s.moveIn('10rem', '0', '0')} 0.5s ease-in-out;
`
