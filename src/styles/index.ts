import styled from 'styled-components'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(26rem, 20rem + 24vw, 24rem), 1fr)
  );
  grid-gap: 2rem 10rem;
`
