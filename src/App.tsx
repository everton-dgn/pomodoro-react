import React from 'react'
import GlobalStyles from 'styles/GlobalStyles'
import * as S from 'styles'
import { c as C } from 'theme'
import { ExperienceBar } from 'components/ExperienceBar'
import { Profile } from 'components/Profile'
import { CompleteChallenges } from 'components/CompleteChallenges'
import { CountDown } from 'components/CountDown'

function App() {
  return (
    <>
      <C.Container>
        <ExperienceBar />

        <S.ContainerGrid>
          <div>
            <Profile />
            <CompleteChallenges />
            <CountDown />
          </div>
          <div>col2</div>
        </S.ContainerGrid>
      </C.Container>

      <GlobalStyles />
    </>
  )
}

export default App
