import * as S from 'components/CountDown/styles'
import { c as C } from 'theme'
import { BtnCicle } from 'components/Buttons/BtnCicle'
import { useContext } from 'react'
import { CountdownContext } from 'contexts/CountdownContext'

export const CountDown = () => {
  const {
    minutes,
    seconds,
    startCountDown,
    resetCountDown,
    isActive,
    hasFinished
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <C.Box>
      <S.CountContainer>
        <S.Minutes>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </S.Minutes>

        <S.Separator>:</S.Separator>

        <S.Seconds>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </S.Seconds>
      </S.CountContainer>

      <BtnCicle
        startCountDown={startCountDown}
        resetCountDown={resetCountDown}
        isActive={isActive}
        hasFinished={hasFinished}
      />
    </C.Box>
  )
}
