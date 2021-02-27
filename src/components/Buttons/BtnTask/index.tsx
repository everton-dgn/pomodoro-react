import * as S from 'components/Buttons/BtnTask/styles'
import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

interface Props {
  children: string
  success: boolean
}

export const BtnTask = ({ children, success }: Props) => {
  const { resetChallenge } = useContext(ChallengesContext)

  return (
    <>
      <S.BtnTask
        state={success}
        onClick={() => (success ? false : resetChallenge())}
      >
        <span>{children}</span>
      </S.BtnTask>
    </>
  )
}
