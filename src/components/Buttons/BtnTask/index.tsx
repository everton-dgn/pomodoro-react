import * as S from 'components/Buttons/BtnTask/styles'
import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'
import { CountdownContext } from 'contexts/CountdownContext'

interface Props {
  children: string
  success: boolean
}

export const BtnTask = ({ children, success }: Props) => {
  const { resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountDown } = useContext(CountdownContext)

  const changeStateChallenge = () => {
    if (success) {
      handleChallengeSucceeded()
      return false
    } else {
      handleChallengeFailed()
    }
  }

  const handleChallengeSucceeded = () => {
    completeChallenge()
    resetCountDown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountDown()
  }

  return (
    <>
      <S.BtnTask state={success} onClick={changeStateChallenge}>
        <span>{children}</span>
      </S.BtnTask>
    </>
  )
}
