import * as S from 'components/LevelUpModal/styles'
import { ReactComponent as Close } from 'assets/img/icons/Close.svg'
import { useContext, useState } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

export const LevelUpModal = () => {
  const { level, closeLEvelUpModal } = useContext(ChallengesContext)

  const [activeAnimation, setActiveAnimation] = useState(false)

  const eventChangeAnimation = () => {
    setActiveAnimation(true)
  }

  const closeModal = () => {
    if (activeAnimation) {
      closeLEvelUpModal()
    }
    setActiveAnimation(false)
  }

  return (
    <>
      <S.Overlay>
        <S.ContainerModal
          showAnime={activeAnimation}
          onAnimationEnd={closeModal}
        >
          <h1>{level}</h1>

          <strong>Parabéns</strong>

          <p>Você alcançou um novo level.</p>

          <button onClick={eventChangeAnimation}>
            <Close />
          </button>
        </S.ContainerModal>
      </S.Overlay>
    </>
  )
}
