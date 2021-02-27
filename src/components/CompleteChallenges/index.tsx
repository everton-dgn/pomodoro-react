import * as S from 'components/CompleteChallenges/styles'
import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

export const CompleteChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <S.ChallengesContainer>
      <p>Desafios Completos</p>
      <span>{challengesCompleted}</span>
    </S.ChallengesContainer>
  )
}
