import React from 'react'
import { ExperienceBar } from 'components/ExperienceBar'
import GlobalStyles from 'styles/GlobalStyles'
import * as S from 'styles'

function App() {
  return (
    <>
      <S.ContainerMain>
        <ExperienceBar />
      </S.ContainerMain>
      <GlobalStyles />
    </>
  )
}

export default App
