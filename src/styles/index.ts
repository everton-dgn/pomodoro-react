import styled from 'styled-components'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(30rem, 20rem + 27vw, 26rem), 1fr)
  );
  grid-gap: 2rem calc(2rem + 2.5vw);
`
