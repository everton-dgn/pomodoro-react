import * as S from 'components/ChallengeBox/styles'
import { useContext } from 'react'
import { BtnTask } from 'components/Buttons/BtnTask'
import { ChallengesContext } from 'contexts/ChallengesContext'
import { ReactComponent as LevelUp } from 'assets/icons/LevelUp.svg'
import { ReactComponent as BodyIcon } from 'assets/icons/Body.svg'
import { ReactComponent as EyeIcon } from 'assets/icons/Eye.svg'

export const ChallengeBox = () => {
  const { activeChallenge } = useContext(ChallengesContext)

  return (
    <>
      {activeChallenge.type ? (
        <>
          <S.Header>Ganhe {activeChallenge.amount} xp</S.Header>

          <S.Main>
            {activeChallenge.type === 'body' ? <BodyIcon /> : <EyeIcon />}
            <h1>Novo Desafio</h1>
            <p>{activeChallenge.description}</p>
          </S.Main>

          <S.Footer>
            <BtnTask success={true}>Completei</BtnTask>
            <BtnTask success={false}>Falhei</BtnTask>
          </S.Footer>
        </>
      ) : (
        <S.InactiveBox>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <LevelUp />
          <p>Avance de level completando desafios.</p>
        </S.InactiveBox>
      )}
    </>
  )
}
