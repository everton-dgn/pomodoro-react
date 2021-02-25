import * as S from 'components/Profile/styles'

export const Profile = () => {
  return (
    <S.ProfileContainer>
      <img src="https://github.com/everton-dgn.png" alt="Usuário" />
      <div>
        <strong>Éverton Toffanetto</strong>
        <span>
          <S.Arrow />
          Level 1
        </span>
      </div>
    </S.ProfileContainer>
  )
}
