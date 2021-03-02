import * as S from 'components/Controls/styles'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

export const Controls = ({ darkMode, setDarkMode }: any) => {
  const { setLevel, setCurrentExperience, setChallengesCompleted } = useContext(
    ChallengesContext
  )

  const changeTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', `${darkMode}`)
  }

  const clearRegistres = () => {
    Cookies.set('level', '1')
    Cookies.set('currentExperience', '0')
    Cookies.set('challengesCompleted', '0')

    setLevel(1)
    setCurrentExperience(0)
    setChallengesCompleted(0)
  }

  return (
    <>
      <S.ContainerControls>
        {darkMode ? (
          <span onClick={changeTheme}>
            Modo Light
            <S.Light />
          </span>
        ) : (
          <span onClick={changeTheme}>
            Modo Dark
            <S.Dark />
          </span>
        )}

        <span onClick={clearRegistres}>
          Limpar Registros
          <S.ToClean />
        </span>
      </S.ContainerControls>
    </>
  )
}
