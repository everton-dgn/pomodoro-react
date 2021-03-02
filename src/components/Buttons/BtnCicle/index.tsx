import React, { MouseEventHandler } from 'react'
import * as S from 'components/Buttons/BtnCicle/styles'
import { ReactComponent as PlayArrow } from 'assets/icons/PlayArrow.svg'
import { ReactComponent as CheckCircle } from 'assets/icons/CheckCircle.svg'
import { ReactComponent as CloseCicle } from 'assets/icons/CloseCicle.svg'

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
