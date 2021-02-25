import * as S from 'components/CountDown/styles'

export const CountDown = () => {
  return (
    <S.CountContainer>
      <S.Minutes>
        <span>2</span>
        <span>5</span>
      </S.Minutes>
      <span>:</span>
      <S.Seconds>
        <span>2</span>
        <span>5</span>
      </S.Seconds>
    </S.CountContainer>
  )
}
