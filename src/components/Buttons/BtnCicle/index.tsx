import * as S from 'components/Buttons/BtnCicle/styles'

type PropsTypeBg = {
  children: any
}

export const BtnCicle = ({ children }: PropsTypeBg) => {
  return (
    <>
      <S.Btn>{children}</S.Btn>
    </>
  )
}
