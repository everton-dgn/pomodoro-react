import * as S from 'components/Buttons/BtnTask/styles'
import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

interface Props {
  children: string
  success: boolean
}

export const BtnTask = ({ children, success }: Props) => {
  const { resetChallenge, completeChallenge } = useContext(ChallengesContext)

  const changeStateChallenge = () => {
    if (success) {
      completeChallenge()
      return false
    } else {
      resetChallenge()
    }
  }

  return (
    <>
      <S.BtnTask state={success} onClick={changeStateChallenge}>
        <span>{children}</span>
      </S.BtnTask>
    </>
  )
}
