import * as S from 'components/Buttons/BtnCicle/styles'
import { ReactComponent as PlayArrow } from 'assets/img/icons/PlayArrow.svg'

export const BtnCicle = ({ onClick }: any) => {
  return (
    <>
      <S.Btn onClick={onClick}>
        <span>
          Iniciar um ciclo
          <PlayArrow />
        </span>
      </S.Btn>
    </>
  )
}
