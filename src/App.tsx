import React, { useState } from 'react'
import * as S from 'styles'
import { ExperienceBar } from 'components/ExperienceBar'
import { Profile } from 'components/Profile'
import { CompleteChallenges } from 'components/CompleteChallenges'
import { CountDown } from 'components/CountDown'
import { ChallengeBox } from 'components/ChallengeBox'
import { ChallengesProvider } from 'contexts/ChallengesContext'
import { CountdownProvider } from 'contexts/CountdownContext'
import { Controls } from 'components/Controls'
import Cookies from 'js-cookie'
import GlobalStyles from 'styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'theme/color'

function App() {
  const cookiesGet = {
    level: Number(Cookies.get().level),
    currentExperience: Number(Cookies.get().currentExperience),
    challengesCompleted: Number(Cookies.get().challengesCompleted)
  }

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'false'
  )

  return (
    <>
      <ThemeProvider theme={darkMode ? dark : light}>
        <ChallengesProvider cookiesGet={cookiesGet}>
          <CountdownProvider>
            <S.Main as="main">
              <ExperienceBar />

              <S.ContainerGrid>
                <S.Col1>
                  <Profile />
                  <CompleteChallenges />
                  <Controls darkMode={darkMode} setDarkMode={setDarkMode} />
                  <CountDown />
                </S.Col1>

                <S.Col2>
                  <ChallengeBox />
                </S.Col2>
              </S.ContainerGrid>
            </S.Main>

            <GlobalStyles />
          </CountdownProvider>
        </ChallengesProvider>
      </ThemeProvider>
    </>
  )
}

export default App
