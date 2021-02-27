import * as S from 'components/ChallengeBox/styles'
import { ReactComponent as LevelUp } from 'assets/img/icons/LevelUp.svg'
import { ReactComponent as BodyIcon } from 'assets/img/icons/Body.svg'
import { BtnTask } from 'components/Buttons/BtnTask'

export const ChallengeBox = () => {
  const hasActiveChallenge = false

  return (
    <>
      {hasActiveChallenge ? (
        <>
          <S.Header>Ganhe 400 xp</S.Header>

          <S.Main>
            <BodyIcon />
            <h1>Novo Desafio</h1>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
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
