import * as S from 'components/CountDown/styles'
import { c as C } from 'theme'
import { BtnCicle } from 'components/Buttons/BtnCicle'
import { ReactComponent as PlayArrow } from 'assets/img/icons/PlayArrow.svg'

export const CountDown = () => {
  return (
    <C.Box>
      <S.CountContainer>
        <S.Minutes>
          <span>2</span>
          <span>5</span>
        </S.Minutes>
        <S.Separator>:</S.Separator>
        <S.Seconds>
          <span>2</span>
          <span>5</span>
        </S.Seconds>
      </S.CountContainer>
      <BtnCicle>
        Iniciar um ciclo
        <PlayArrow />
      </BtnCicle>
    </C.Box>
  )
}
