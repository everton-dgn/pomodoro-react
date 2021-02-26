import * as S from 'components/Buttons/BtnCicle/styles'
import { ReactComponent as PlayArrow } from 'assets/img/icons/PlayArrow.svg'
import { ReactComponent as CheckCircle } from 'assets/img/icons/CheckCircle.svg'
import { ReactComponent as CloseCicle } from 'assets/img/icons/CloseCicle.svg'
import { MouseEventHandler } from 'react'

interface Props {
  startCountDown: MouseEventHandler<HTMLButtonElement>
  resetCountDown: MouseEventHandler<HTMLButtonElement>
  isActive: boolean
  hasFinished: boolean
}

export const BtnCicle = ({
  startCountDown,
  resetCountDown,
  isActive,
  hasFinished
}: Props) => {
  return (
    <>
      {hasFinished ? (
        <S.BtnFinished disabled>
          <span>
            Ciclo Encerrado
            <CheckCircle />
          </span>
        </S.BtnFinished>
      ) : (
        <>
          {isActive ? (
            <S.Btn onClick={resetCountDown}>
              <span>
                Abandonar ciclo
                <CloseCicle />
              </span>
            </S.Btn>
          ) : (
            <S.Btn onClick={startCountDown} isActive>
              <span>
                Iniciar um ciclo
                <PlayArrow />
              </span>
            </S.Btn>
          )}
        </>
      )}
    </>
  )
}
