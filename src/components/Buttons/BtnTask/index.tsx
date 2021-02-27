import * as S from 'components/Buttons/BtnTask/styles'

interface Props {
  children: string
  success: boolean
}

export const BtnTask = ({ children, success }: Props) => {
  return (
    <>
      <S.BtnTask state={success}>
        <span>{children}</span>
      </S.BtnTask>
    </>
  )
}
