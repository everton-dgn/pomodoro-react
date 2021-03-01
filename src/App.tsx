import React from 'react'
import GlobalStyles from 'styles/GlobalStyles'
import * as S from 'styles'
import { ExperienceBar } from 'components/ExperienceBar'
import { Profile } from 'components/Profile'
import { CompleteChallenges } from 'components/CompleteChallenges'
import { CountDown } from 'components/CountDown'
import { ChallengeBox } from 'components/ChallengeBox'
import { ChallengesProvider } from 'contexts/ChallengesContext'
import { CountdownProvider } from 'contexts/CountdownContext'

function App() {
  return (
    <>
      <ChallengesProvider>
        <S.Main as="main">
          <ExperienceBar />

          <CountdownProvider>
            <S.ContainerGrid>
              <S.Col1>
                <Profile />
                <CompleteChallenges />
                <CountDown />
              </S.Col1>
              <S.Col2>
                <ChallengeBox />
              </S.Col2>
            </S.ContainerGrid>
          </CountdownProvider>
        </S.Main>

        <GlobalStyles />
      </ChallengesProvider>
    </>
  )
}

export default App
