import { useEffect, useState } from 'react'
import * as S from 'components/CountDown/styles'
import { c as C } from 'theme'
import { BtnCicle } from 'components/Buttons/BtnCicle'

let countdownTimeout: ReturnType<typeof setTimeout>

export const CountDown = () => {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const startCountDown = () => {
    setIsActive(true)
  }

  const resetCountDown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

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
